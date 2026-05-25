---
layout: post
title: "Federated Learning"
date: 2024-04-18 19:55
author: "Kristina P. Sinaga"
mathjax: true
last_modified_at: 2025-09-06 08:23 CEST
tags:
  - Federated learning
---

### Introduction

This note provides an academically oriented exposition of Federated Learning (FL), emphasizing formal definitions, algorithmic structure, and practical considerations for deployment in regulated and heterogeneous environments. Historical milestones in AI (e.g., Deep Blue, AlphaGo, and large-scale pre-trained language models) motivate the need for training paradigms that respect privacy and data locality.

The remainder of the document is organized to (i) introduce the formal concept of FL, (ii) contrast FL with centralized machine learning, (iii) present the canonical FedAvg algorithm with an illustrative diagram and pseudocode, and (iv) discuss categories, deployment challenges, and representative applications.

---

## Catalog (Quick navigation)

- [Learning objectives](#learning-objectives)
- [Formal definition](#formal-definition)
- [Motivation and significance](#motivation-and-significance)
- [Technical comparison: centralized vs federated](#technical-comparison-centralized-vs-federated)
- [Federated learning categories](#federated-learning-categories)
- [FedAvg: algorithm, diagram, and pseudocode](#fedavg-algorithm-diagram-and-pseudocode)
- [Practical considerations and failure modes](#practical-considerations-and-failure-modes)
- [Representative applications](#representative-applications)
- [Further reading](#further-reading)
- [Changelog](#changelog)

---

## Learning objectives

After reading this document the reader should be able to:

- State a concise, formal definition of Federated Learning.
- Describe the FedAvg training loop and identify its principal hyperparameters.
- Compare centralized and federated paradigms along algorithmic, systems, and privacy dimensions.
- Enumerate key challenges (statistical, systems, and adversarial) that arise in FL deployments.

---

## Formal definition {#formal-definition}

Let there be K clients, each with a local dataset D_k and empirical risk R_k(w) = E_{x~D_k}[ell(w; x)]. The objective of (server-mediated) Federated Learning is to minimize the global empirical risk:

\[ R(w) = \sum_{k=1}^K p_k R_k(w), \]

where p_k denotes a weighting factor (commonly p_k = n_k / n, with n_k = |D_k| and n = \sum_k n_k). In the canonical federated optimization setting, clients perform local optimization steps (e.g., SGD) and periodically communicate updates to an aggregator which constructs a new global iterate.

Key assumptions and deviations from classical centralized optimization:

- Data heterogeneity: D_k may be non-i.i.d. and unbalanced in size.
- Limited communication: clients communicate infrequently relative to local computation.
- System heterogeneity: clients differ in compute power, availability, and communication bandwidth.

---

## Motivation and significance {#motivation-and-significance}

FL is motivated by regulatory, privacy, and engineering constraints that preclude centralized pooling of raw data. It enables collaborative model building while mitigating many legal and operational barriers to data sharing. However, FL introduces statistical and systems complexities that require tailored algorithms and rigorous evaluation.

---

## Technical comparison: centralized vs federated {#technical-comparison-centralized-vs-federated}

The following table presents a more technical comparison suitable for researchers or engineers planning deployments.

| Dimension | Centralized ML (CML) | Federated ML (FML) | Implication / Mitigation |
|---|---|---|---|
| Data access model | Full access to pooled dataset D = \cup_k D_k | Only local access to D_k; server sees updates only | Use secure aggregation / DP to reduce leakage during updates |
| Optimization objective | Minimize R(w) directly via centralized SGD | Minimize weighted R(w) via intermittent client-server sync | FedAvg approximates centralized SGD when local steps are small |
| Communication complexity | One-time data transfer O(n) | Iterative model-update transfers O(T * m * |w|) (T rounds, m clients/round) | Compression, sparsification reduce bytes; fewer rounds trade computation for comms |
| Statistical heterogeneity | Assumes i.i.d. or can shuffle data | Non-i.i.d. across clients; label and feature skew common | Methods: proximal terms (SCAFFOLD, FedProx), personalized models |
| Convergence theory | Well-established for SGD under standard assumptions | Convergence depends on local steps, client heterogeneity; bounded divergence analyses exist | Theoretical bounds scale with heterogeneity metrics (e.g., gradient variance across clients) |
| Robustness to adversaries | Data-centralized, server-side defenses possible | Vulnerable to model poisoning, Sybil attacks; federated defenses needed | Robust aggregation (Krum, median), anomaly detection, secure enclaves |
| Privacy leakage | Centralized storage risk; standard access controls apply | Leakage via model updates possible (gradient inversion) | DP, secure aggregation, and cryptographic MPC mitigate leakage |
| System heterogeneity | Controlled cluster or cloud | Wide variance in client capabilities; stragglers and dropouts frequent | Asynchronous updates, client dropout tolerance, adaptive client selection |
| Deployment complexity | Lower (standard MLOps) | Higher: orchestration, client SDKs, network scheduling, and auditing | Invest in robust orchestration and reproducible pipelines |

---

## Federated learning categories {#federated-learning-categories}

- Horizontal (sample-partitioned) FL: Clients share feature space X but have disjoint samples. Typical cross-device use-cases.
- Vertical (feature-partitioned) FL: Clients hold complementary feature sets for overlapping user populations; secure protocols align features and labels.
- Federated transfer learning: Combines transfer learning and FL when both sample and feature spaces differ; typically used for small-overlap situations.

---

## FedAvg: algorithm, diagram, and pseudocode {#fedavg-algorithm-diagram-and-pseudocode}

FedAvg (McMahan et al., 2016) is the canonical algorithm for server-mediated federated optimization. The high-level loop is:

1. Server initializes global model w^0.
2. For each communication round t = 0, 1, 2, ...:
   a. Server samples a subset S_t of clients and distributes w^t.
   b. Each client k in S_t performs E local epochs of SGD on R_k(w) starting from w^t, producing w_k^{t+1}.
   c. Clients return updates; server aggregates via weighted average: w^{t+1} = \sum_{k in S_t} (n_k / n_S) w_k^{t+1}.

Diagram (simplified, ASCII):

```
        Server (w^t)
           |
   +-------+-------+   <-- broadcast w^t
   |       |       |
 Client1 Client2 ... Clientm
   |       |       |
 Local   Local   Local
  training training training
   |       |       |
   +---+---+---+---+
       |   |   |     <-- clients send updates
       v   v   v
     Aggregate (weighted average)
         produces w^{t+1}
```

Compact pseudocode (FedAvg):

```python
# Server
initialize w
for t in range(T):
    S = sample_clients()
    send w to clients in S
    updates = [client_update(w) for client in S]
    w = aggregate_weighted(updates)

# Client k
def client_update(w):
    w_local = w
    for e in range(E):
        for batch in local_data:
            w_local = w_local - eta * grad(w_local; batch)
    return w_local
```

Comments:

- The algorithm trades communication for computation: increasing E reduces communication rounds but amplifies client drift under heterogeneity.
- Practical deployments tune E, client sampling fraction, and compression schemes to meet resource constraints.

---

## Practical considerations and failure modes {#practical-considerations-and-failure-modes}

- Statistical challenges: severe class imbalance, non-i.i.d. features, and small local sample sizes can degrade global model quality or necessitate personalization.
- Systems challenges: intermittent connectivity, heterogeneous compute, and secure software distribution to client devices.
- Adversarial concerns: poisoned updates, backdoor attacks, and inference attacks on updates.

Mitigations and best practices:

- Combine algorithmic regularizers (FedProx) and control variates (SCAFFOLD) to reduce divergence.
- Use secure aggregation and differentially private noise to bound information leakage; quantify utility-privacy trade-offs empirically.
- Implement robust aggregation and anomaly detection to reduce the impact of malicious clients.

---

## Representative applications {#representative-applications}

- Healthcare: multi-institutional model training for diagnostic assistance while preserving patient confidentiality.
- Finance: collaborative fraud detection across institutions with regulatory constraints on data sharing.
- Mobile personalization: on-device language models, recommendation systems, and keyboard prediction.

---

## Further reading {#further-reading}

- McMahan, H. B., et al. (2016). Communication-Efficient Learning of Deep Networks from Decentralized Data. arXiv:1602.05629.
- Konečný, J., et al. (2016). Federated Learning: Strategies for Improving Communication Efficiency. arXiv:1610.05492.
- Li, T., Sahu, A., Talwalkar, A., & Smith, V. (2020). Federated Learning: Challenges, Methods, and Future Directions. IEEE Signal Processing Magazine.

---

## Changelog

- 2025-09-06: Tone shifted to academic register; added FedAvg diagram and pseudocode; replaced comparison table with advanced technical comparison.

---

> Federated learning formalizes collaborative optimization with locality constraints: success depends on joint algorithmic and systems design.

