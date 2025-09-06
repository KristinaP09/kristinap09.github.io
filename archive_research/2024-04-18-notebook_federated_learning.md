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

Artificial Intelligence has transformed rapidly over the past decades. Landmark milestones—IBM's Deep Blue (1997), DeepMind's AlphaGo (2016), and the release of ChatGPT (2022)—demonstrate how models have progressed from game-playing agents to versatile language and multimodal systems. Alongside this progress, privacy and data governance have become critical constraints for real-world ML deployments.

Federated Learning (FL) addresses these constraints by enabling collaborative model training across multiple devices or organizations while keeping raw data local. This document explains the core ideas, practical workflow, and real-world impact of FL and includes a navigable catalog to jump to each section.

---

## Catalog (Quick navigation)

- [What you'll learn](#what-youll-learn)
- [Definition](#definition)
- [Why FL matters](#why-fl-matters)
- [Centralized vs Federated — quick comparison](#centralized-vs-federated)
- [FL categories](#fl-categories)
- [Five-step workflow (concise)](#five-step-workflow-concise)
- [Practical considerations & challenges](#practical-considerations--challenges)
- [Real-world use cases](#real-world-use-cases)
- [Further reading & resources](#further-reading--resources)
- [Changelog](#changelog)

---

## What you'll learn

- A concise, practical definition of Federated Learning.
- How FL differs from centralized ML and why that matters.
- The main FL categories and a five-step federated training workflow.
- Key challenges and practical considerations for deploying FL.

---

## Definition

Federated Learning (FL) is a distributed ML paradigm where multiple clients (mobile devices, edge nodes, or organizations) collaboratively train a global model without sharing their raw data. Clients compute model updates locally and only share model parameters or gradients with a coordinating server or aggregator.

The original FedAvg approach (McMahan et al., 2016) popularized this setup: clients perform several local SGD steps and the server aggregates updates via a weighted average (weighted by client dataset size).

Key properties:

- Data remains on-device (privacy-friendly).
- Communication cost and heterogeneity (non-i.i.d. data) are central challenges.
- FL is compatible with privacy techniques such as differential privacy and secure multiparty computation (MPC).

---

## Why FL matters

- Preserves privacy and reduces regulatory risk by keeping raw data local.
- Enables collaboration across organizations that cannot share data (healthcare, finance).
- Reduces the need for large data transfers and central storage.

---

## Centralized vs Federated

| Aspect | Centralized ML (CML) | Federated ML (FML) |
|---|---:|---:|
| Data movement | Raw data uploaded to a central server | Data stays on client devices |
| Assumption | Often assumes i.i.d. data | Handles non-i.i.d. clients and skew |
| Privacy risk | Higher (centralized storage) | Lower (no raw data transfer) |
| Communication | Low (one-time upload) | High (many rounds of model updates) |
| Continual learning | Easier to implement centrally | More complex due to asynchrony and heterogeneity |

---

## FL categories {#fl-categories}

- Horizontal Federated Learning (HFL): clients share the same feature space but have different samples (typical cross-device setups; e.g., keyboard next-word prediction).
- Vertical Federated Learning (VFL): clients hold different features for the same set of users (useful in finance when two institutions want to jointly build a model for shared customers).
- Federated Transfer Learning (FTL): clients differ in both samples and features; transfer learning techniques bridge feature gaps.

References: McMahan et al., 2016; Yang et al.; Konečný et al.

---

## Five-step workflow (concise)

1. Initialize global model on server (random or from a checkpoint).
2. Server selects a subset of clients and sends the global model to them.
3. Each client performs local training on its private data (a few epochs or minibatches).
4. Clients send model updates (parameters or gradients) back to the server.
5. Server aggregates updates (FedAvg or other algorithms) to produce a new global model; repeat until convergence.

Notes:

- Aggregation is commonly a weighted average by client dataset size. Other robust aggregation methods exist to mitigate attacks or Byzantine clients.
- Client selection strategies, local epochs, and communication compression strongly affect efficiency and performance.

---

## Practical considerations & challenges

- Non-i.i.d. data: clients may have highly skewed local distributions, which can slow convergence.
- Communication efficiency: reduce bytes transferred via quantization, sparsification, or fewer communication rounds.
- Privacy & security: combine FL with differential privacy, secure aggregation, or MPC to limit information leakage.
- System heterogeneity: devices differ in compute, storage, connectivity — design protocols to accommodate stragglers and unreliable clients.
- Incentives & trust: when collaborating across organizations, legal and business incentives must be aligned.

Edge cases and failure modes:

- Very small local datasets or clients with extreme label skew.
- Model poisoning by malicious clients.
- Clients with intermittent connectivity or very low bandwidth.

---

## Real-world use cases

- Healthcare: cross-hospital model training for diagnosis without sharing patient records.
- Finance: fraud detection models trained across institutions.
- Mobile: on-device personalization (keyboard suggestions, recommendation systems).
- Privacy-first apps: encrypted or privacy-preserving analytics for sensitive domains.

---

## Further reading & resources

- McMahan et al., "Communication-Efficient Learning of Deep Networks from Decentralized Data" (FedAvg): https://arxiv.org/abs/1602.05629
- Konečný et al., Communication-efficient learning: https://arxiv.org/pdf/1610.05492.pdf
- Flower: a practical FL framework and tutorials: https://flower.dev/docs/framework/tutorial-series-what-is-federated-learning.html

---

## Changelog

- 2025-09-06: Improved structure, added catalog (table of contents), refined wording and practical notes.

---

> Federated learning unlocks collaboration across data silos: it’s a practical compromise between centralized performance and privacy-preserving constraints.

