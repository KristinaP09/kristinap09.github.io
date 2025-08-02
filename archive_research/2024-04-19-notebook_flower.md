---
layout: post
title: "🌸 Flower: A Comprehensive Guide to Federated Learning"
date: 2024-04-19 07:00
author: "Kristina P. Sinaga"
mathjax: true
last_modified_at: 2025-08-02 11:23 CEST
tags:
  - Federated Learning
  - Flower Framework
  - MNIST
  - PyTorch
  - Distributed Computing
  - Privacy-Preserving ML
---
# <font color='blue'>🌼🌸F</font><font color='orange'>L</font><font color='magenta'>O</font><font color='yellow'>W</font><font color='green'>E</font><font color='black'>R 🌼🌸</font>

## A Comprehensive Tutorial on Federated Learning with the Flower Framework

> **📅 Last Updated**: August 2nd, 2025
> **📝 Original Publication**: April 19th, 2024
> **✨ Status**: Enhanced with improved documentation and comprehensive analysis

---

### 🎯 **Tutorial Overview**

**Federated Learning** revolutionizes machine learning by enabling model training across multiple clients without centralizing sensitive data. Instead of moving data to the model, we bring the model to the data!

> **Key Concept**: Each client trains locally on their private data, then shares only model parameters (not raw data) with a central server for aggregation.

This tutorial demonstrates how the **`<font color='green'>`Flower framework &#128512;`</font>`** makes federated learning implementation surprisingly straightforward and scalable.

---

### 📚 **What You'll Learn**

- 🏗️ **Core FL Architecture**: Client-server federated learning fundamentals
- 🌸 **Flower Framework**: Hands-on implementation with real code
- 📊 **MNIST Classification**: Practical federated image classification
- 🔄 **FedAvg Strategy**: Understanding parameter aggregation
- 📈 **Scalability Testing**: From 10 to 200+ federated clients
- 🎨 **Visualization**: Performance tracking and analysis

---

### 🛠️ **Technical Stack**

- **Framework**: Flower (Federated Learning)
- **ML Library**: PyTorch
- **Dataset**: MNIST (Handwritten Digits)
- **Strategy**: FedAvg (Federated Averaging)
- **Visualization**: Matplotlib

---

## 🚀 **Getting Started: Environment Setup**itle: "Flower"

---

## <font color='blue'>🌼🌸F</font><font color='orange'>L</font><font color='magenta'>O</font><font color='yellow'>W</font><font color='green'>E</font><font color='black'>R 🌼🌸</font>

<font color='black'> The idea behind Federated Learning is to train a model between multiple clients and a server without having to share any data. This is done by letting each client train the model locally on its data and send its parameters back to the server, which then aggregates all the clients’ parameters together using a predefined strategy. This process is made very simple by </font> <font color='green'>using the Flower framework 😀.</font>

### <font color='orange'>Flower: A Friendly Federated Learning Research Framework on MNIST Data.</font>

## 🚀 **Getting Started: Environment Setup**

Let's begin by setting up our federated learning environment. We'll import all necessary libraries and configure our training device.

```python
# Core Federated Learning Framework
import flwr as fl

# Deep Learning and Data Processing
import torch
import torch.nn as nn
import torch.nn.functional as F
import torchvision
import torchvision.transforms as transforms
from torch.utils.data import DataLoader, random_split
from torchvision.datasets import MNIST

# Utilities and Visualization
import numpy as np
import matplotlib.pyplot as plt
import random
from collections import OrderedDict
from typing import Dict, Tuple, List

# Flower-specific imports
from flwr.common import Metrics, NDArrays, Scalar
from transformers import AutoTokenizer, DataCollatorWithPadding

# Device Configuration
DEVICE = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
# For this tutorial, we'll use CPU for consistency
DEVICE = torch.device("cpu")

# Display versions for reproducibility
print("🔧 Environment Setup:")
print(f"   • Flower: {fl.__version__}")
print(f"   • PyTorch: {torch.__version__}")
print(f"   • TorchVision: {torchvision.__version__}")
print(f"   • NumPy: {np.__version__}")
print(f"   • Device: {DEVICE}")
print("✅ Environment ready for federated learning!")
```

---

## 🧠 **Neural Network Architecture**

We'll use a simple but effective Convolutional Neural Network for MNIST digit classification:

```python
class Net(nn.Module):
    """
    Simple CNN for MNIST classification
    - 2 Convolutional layers with ReLU activation
    - Max pooling for spatial reduction
    - 2 Fully connected layers for classification
    """
    def __init__(self, num_classes: int = 10) -> None:
        super(Net, self).__init__()
    
        # Convolutional Feature Extractor
        self.conv1 = nn.Conv2d(1, 6, 5)      # 28x28 -> 24x24
        self.pool = nn.MaxPool2d(2, 2)       # 24x24 -> 12x12
        self.conv2 = nn.Conv2d(6, 16, 5)     # 12x12 -> 8x8
                                            # After pooling: 4x4
    
        # Classifier Head
        self.fc1 = nn.Linear(16 * 4 * 4, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, num_classes)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Feature extraction
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
    
        # Flatten for classifier
        x = x.view(-1, 16 * 4 * 4)
    
        # Classification
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x

# Initialize model and display parameter count
model = Net(num_classes=10)
num_parameters = sum(value.numel() for value in model.state_dict().values())
print(f"📊 Model Statistics:")
print(f"   • Architecture: Simple CNN")
print(f"   • Total Parameters: {num_parameters:,}")
print(f"   • Input Shape: [batch_size, 1, 28, 28]")
print(f"   • Output Classes: 10 (digits 0-9)")
```

---

## 📊 **Dataset Preparation and Visualization**

Let's load the MNIST dataset and visualize some samples to understand our data:

```python
def get_mnist():
    """Load and preprocess MNIST dataset"""
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize((0.1307,), (0.3081,))  # MNIST mean and std
    ])
  
    trainset = MNIST("./data", train=True, download=True, transform=transform)
    testset = MNIST("./data", train=False, download=True, transform=transform)
  
    return trainset, testset

# Load dataset
trainset, testset = get_mnist()
print(f"📚 Dataset Statistics:")
print(f"   • Training samples: {len(trainset):,}")
print(f"   • Test samples: {len(testset):,}")
print(f"   • Image shape: {trainset.data[0].shape}")
print(f"   • Classes: {len(trainset.classes)}")
```

### 🎨 **Data Visualization**

Let's visualize some sample images to understand our dataset better:

```python
def visualise_n_random_examples(trainset_, n: int = 64, verbose: bool = True):
    """
    Visualize n random examples from the dataset in a grid layout
  
    Args:
        trainset_: MNIST training dataset
        n: Number of images to display
        verbose: Whether to print image indices
    """
    # Sample random indices
    idx = list(range(len(trainset_.data)))
    random.shuffle(idx)
    idx = idx[:n]
  
    if verbose:
        print(f"🎯 Displaying {n} random samples with indices: {idx[:10]}..." if n > 10 else f"🎯 Displaying samples with indices: {idx}")

    # Create visualization grid
    num_cols = 16
    num_rows = int(np.ceil(len(idx) / num_cols))
  
    fig, axs = plt.subplots(
        figsize=(16, num_rows * 1), 
        nrows=num_rows, 
        ncols=num_cols,
        gridspec_kw={'hspace': 0.1, 'wspace': 0.1}
    )
  
    # Ensure axs is always 2D for consistent indexing
    if num_rows == 1:
        axs = axs.reshape(1, -1)

    # Display images
    for c_i, i in enumerate(idx):
        row, col = c_i // num_cols, c_i % num_cols
        axs[row, col].imshow(trainset_.data[i], cmap="gray")
        axs[row, col].set_title(f'{trainset_.targets[i]}', fontsize=8)
        axs[row, col].axis('off')
  
    # Hide unused subplots
    for c_i in range(len(idx), num_rows * num_cols):
        row, col = c_i // num_cols, c_i % num_cols
        axs[row, col].axis('off')
  
    plt.suptitle('MNIST Dataset Sample - Random Handwritten Digits', fontsize=14, y=0.98)
    plt.tight_layout()
    plt.show()

# Visualize the dataset
print("📸 Visualizing MNIST Dataset Samples")
visualise_n_random_examples(trainset, n=64)
```

<div align="center">
  <img src="https://github.com/PatternKPS/patternkps.github.io/assets/150363044/846f6833-5345-480c-b829-8f1ba7e5bb6f" alt="MNIST Sample Grid" style="max-width: 100%; width: 600px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  <br>
  <em>Figure: 4x16 grid of random MNIST handwritten digit samples from the training dataset</em>
</div>

---

## 🏋️ **Training and Evaluation Functions**

Before diving into federated learning, let's define our core training and evaluation functions:

## 🏋️ **Training and Evaluation Functions**

Before diving into federated learning, let's define our core training and evaluation functions:

```python
def train(net, trainloader, optimizer, epochs: int = 1):
    """
    Train the network on the training set
  
    Args:
        net: Neural network model
        trainloader: Training data loader
        optimizer: Optimizer (SGD, Adam, etc.)
        epochs: Number of training epochs
    
    Returns:
        Trained network
    """
    criterion = torch.nn.CrossEntropyLoss()
    net.train()  # Set to training mode
  
    total_loss = 0.0
    total_samples = 0
  
    for epoch in range(epochs):
        epoch_loss = 0.0
        for batch_idx, (images, labels) in enumerate(trainloader):
            images, labels = images.to(DEVICE), labels.to(DEVICE)
        
            # Forward pass
            optimizer.zero_grad()
            outputs = net(images)
            loss = criterion(outputs, labels)
        
            # Backward pass
            loss.backward()
            optimizer.step()
        
            epoch_loss += loss.item()
            total_samples += labels.size(0)
        
        total_loss += epoch_loss
        print(f"   Epoch {epoch+1}/{epochs}: Loss = {epoch_loss/len(trainloader):.4f}")
  
    avg_loss = total_loss / (epochs * len(trainloader))
    print(f"📈 Training completed: Avg Loss = {avg_loss:.4f}")
    return net


def test(net, testloader):
    """
    Evaluate the network on the test set
  
    Args:
        net: Trained neural network
        testloader: Test data loader
    
    Returns:
        tuple: (average_loss, accuracy)
    """
    criterion = torch.nn.CrossEntropyLoss()
    correct, total_loss = 0, 0.0
    net.eval()  # Set to evaluation mode
  
    with torch.no_grad():
        for images, labels in testloader:
            images, labels = images.to(DEVICE), labels.to(DEVICE)
            outputs = net(images)
        
            # Calculate loss
            loss = criterion(outputs, labels)
            total_loss += loss.item()
        
            # Calculate accuracy
            _, predicted = torch.max(outputs.data, 1)
            correct += (predicted == labels).sum().item()
  
    accuracy = correct / len(testloader.dataset)
    avg_loss = total_loss / len(testloader)
  
    return avg_loss, accuracy


def run_centralised(epochs: int = 5, lr: float = 0.01, momentum: float = 0.9):
    """
    Baseline: Traditional centralized training for comparison
  
    Args:
        epochs: Number of training epochs
        lr: Learning rate
        momentum: SGD momentum
    """
    print("🎯 Running Centralized Training (Baseline)")
  
    # Initialize model and optimizer
    model = Net(num_classes=10).to(DEVICE)
    optimizer = torch.optim.SGD(model.parameters(), lr=lr, momentum=momentum)

    # Prepare data loaders
    trainset, testset = get_mnist()
    trainloader = DataLoader(trainset, batch_size=64, shuffle=True, num_workers=2)
    testloader = DataLoader(testset, batch_size=128, num_workers=2)

    # Train the model
    trained_model = train(model, trainloader, optimizer, epochs)

    # Evaluate performance
    loss, accuracy = test(trained_model, testloader)
  
    print(f"🏆 Centralized Results:")
    print(f"   • Test Loss: {loss:.4f}")
    print(f"   • Test Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
  
    return trained_model, loss, accuracy

# Run baseline for comparison
print("=" * 60)
print("BASELINE: CENTRALIZED TRAINING")
print("=" * 60)
baseline_model, baseline_loss, baseline_acc = run_centralised(epochs=3)
```

---

## 🌐 **Federated Data Partitioning**

In federated learning, we need to split our dataset among multiple clients. Let's create realistic data partitions:

```python
def prepare_dataset(num_partitions: int, batch_size: int = 32, val_ratio: float = 0.1):
    """
    Partition the training set into N disjoint subsets for federated clients
  
    Args:
        num_partitions: Number of clients/partitions
        batch_size: Batch size for data loaders
        val_ratio: Fraction of data for validation
    
    Returns:
        tuple: (trainloaders, valloaders, testloader)
    """
    print(f"🔄 Preparing federated dataset for {num_partitions} clients...")
  
    # Load the dataset
    trainset, testset = get_mnist()
  
    # Split training set into equal partitions
    num_images = len(trainset) // num_partitions
    partition_lengths = [num_images] * num_partitions
  
    # Handle remainder samples
    remainder = len(trainset) % num_partitions
    for i in range(remainder):
        partition_lengths[i] += 1
  
    print(f"   • Total training samples: {len(trainset):,}")
    print(f"   • Samples per client: {num_images} (± {remainder} for some clients)")
  
    # Create partitions with reproducible random seed
    trainsets = random_split(
        trainset, partition_lengths, torch.Generator().manual_seed(2023)
    )

    # Create data loaders with train/validation splits
    trainloaders = []
    valloaders = []
  
    for i, trainset_partition in enumerate(trainsets):
        num_total = len(trainset_partition)
        num_val = int(val_ratio * num_total)
        num_train = num_total - num_val

        # Split into train and validation
        for_train, for_val = random_split(
            trainset_partition, [num_train, num_val], 
            torch.Generator().manual_seed(2023)
        )

        # Create data loaders
        trainloaders.append(
            DataLoader(for_train, batch_size=batch_size, shuffle=True, num_workers=2)
        )
        valloaders.append(
            DataLoader(for_val, batch_size=batch_size, shuffle=False, num_workers=2)
        )
  
    # Global test loader
    testloader = DataLoader(testset, batch_size=128, num_workers=2)
  
    print(f"✅ Dataset partitioning completed!")
    print(f"   • Training loaders: {len(trainloaders)}")
    print(f"   • Validation loaders: {len(valloaders)}")
    print(f"   • Test samples: {len(testset):,}")
  
    return trainloaders, valloaders, testloader
```

### 📊 **Analyzing Data Distribution**

Let's examine how data is distributed across clients:

```python
# Create federated partitions
trainloaders, valloaders, testloader = prepare_dataset(
    num_partitions=100, batch_size=32
)

# Analyze first client's data distribution
print("🔍 Analyzing Client #1 Data Distribution:")
train_partition = trainloaders[0].dataset
partition_indices = train_partition.indices

print(f"   • Client samples: {len(partition_indices):,}")
print(f"   • Batch size: {trainloaders[0].batch_size}")
print(f"   • Number of batches: {len(trainloaders[0])}")

# Extract labels for this partition
client_targets = [trainloaders[0].dataset.dataset.dataset.targets[i] for i in partition_indices]
unique_labels, counts = np.unique(client_targets, return_counts=True)

print(f"   • Unique digits: {unique_labels.tolist()}")
print(f"   • Label distribution: {dict(zip(unique_labels.tolist(), counts.tolist()))}")

# Visualize label distribution
plt.figure(figsize=(12, 5))

plt.subplot(1, 2, 1)
plt.hist(client_targets, bins=10, color="skyblue", edgecolor="navy", alpha=0.7)
plt.grid(True, alpha=0.3)
plt.xticks(range(10))
plt.xlabel("Digit Label")
plt.ylabel("Number of Images")
plt.title("Client #1: Label Distribution (IID)")

plt.subplot(1, 2, 2)
plt.bar(unique_labels, counts, color="lightcoral", edgecolor="darkred", alpha=0.7)
plt.grid(True, alpha=0.3)
plt.xticks(range(10))
plt.xlabel("Digit Label")
plt.ylabel("Count")
plt.title("Client #1: Exact Label Counts")

plt.tight_layout()
plt.suptitle("MNIST Federated Client Data Analysis", y=1.02, fontsize=14)
plt.show()

# Overall statistics
total_samples = sum(len(loader.dataset) for loader in trainloaders)
avg_samples = total_samples / len(trainloaders)
print(f"\n📈 Federated Dataset Statistics:")
print(f"   • Total clients: {len(trainloaders)}")
print(f"   • Total federated samples: {total_samples:,}")
print(f"   • Average samples per client: {avg_samples:.1f}")
print(f"   • Data distribution: IID (Identical & Independent)")
```

---

## 🌸 **Defining the Flower Client**

Now comes the heart of federated learning - defining our Flower client! A Flower client is elegantly simple with four key methods:

### 🔑 **Core Client Methods**

| Method               | Purpose                          | Description                                       |
| -------------------- | -------------------------------- | ------------------------------------------------- |
| `fit()`            | 🏋️**Local Training**     | Train model locally and return updated parameters |
| `evaluate()`       | 📊**Local Evaluation**     | Evaluate global model on local validation data    |
| `set_parameters()` | 📥**Parameter Loading**    | Load global model parameters from server          |
| `get_parameters()` | 📤**Parameter Extraction** | Extract local model parameters for server         |

> **Key Insight**: Federated learning is like having a distributed team where each member (client) works on their own data, but everyone shares their learnings (parameters) to build a better collective model! 🤝

### 🛠️ **Setting Up the Environment**

```python
# Import Flower framework
import flwr as fl

# Ensure we're using the correct device
DEVICE = torch.device("cpu")  # Consistent with our setup
print(f"🌸 Flower Client Environment:")
print(f"   • Device: {DEVICE}")
print(f"   • Framework: PyTorch")
print(f"   • Ready for federated learning!")
```

### 🏗️ **Implementing the FlowerClient Class**

```python
class FlowerClient(fl.client.NumPyClient):
    """
    A Flower client for federated MNIST classification
  
    This client can:
    - Receive global model parameters from the server
    - Train locally on private data
    - Send updated parameters back to the server
    - Evaluate global model performance locally
    """
  
    def __init__(self, trainloader, valloader) -> None:
        super().__init__()
    
        # Store client's private data
        self.trainloader = trainloader
        self.valloader = valloader
    
        # Initialize local model
        self.model = Net(num_classes=10).to(DEVICE)
    
        print(f"🌸 Flower Client initialized:")
        print(f"   • Training samples: {len(trainloader.dataset)}")
        print(f"   • Validation samples: {len(valloader.dataset)}")
        print(f"   • Model parameters: {sum(p.numel() for p in self.model.parameters()):,}")

    def set_parameters(self, parameters: NDArrays) -> None:
        """
        Load parameters received from the server into the local model
    
        Args:
            parameters: List of NumPy arrays representing model weights
        """
        # Convert NumPy arrays back to PyTorch tensors
        params_dict = zip(self.model.state_dict().keys(), parameters)
        state_dict = OrderedDict({k: torch.Tensor(v) for k, v in params_dict})
    
        # Load parameters into the model
        self.model.load_state_dict(state_dict, strict=True)

    def get_parameters(self, config: Dict[str, Scalar]) -> NDArrays:
        """
        Extract model parameters and convert to NumPy arrays
    
        Args:
            config: Configuration dictionary (unused in this implementation)
        
        Returns:
            List of NumPy arrays representing model weights
        """
        return [val.cpu().numpy() for _, val in self.model.state_dict().items()]

    def fit(self, parameters: NDArrays, config: Dict[str, Scalar]) -> Tuple[NDArrays, int, Dict]:
        """
        Perform local training using the global model parameters
    
        Args:
            parameters: Global model parameters from server
            config: Training configuration
        
        Returns:
            tuple: (updated_parameters, num_samples, metrics)
        """
        print(f"🏋️ Starting local training...")
    
        # Load global model parameters
        self.set_parameters(parameters)

        # Configure local optimizer
        optimizer = torch.optim.SGD(
            self.model.parameters(), 
            lr=config.get("lr", 0.01), 
            momentum=config.get("momentum", 0.9)
        )

        # Perform local training
        epochs = config.get("epochs", 1)
        self.model = train(self.model, self.trainloader, optimizer, epochs)

        # Return updated parameters
        updated_parameters = self.get_parameters({})
        num_samples = len(self.trainloader.dataset)
    
        print(f"✅ Local training completed ({num_samples} samples)")
    
        return updated_parameters, num_samples, {}

    def evaluate(self, parameters: NDArrays, config: Dict[str, Scalar]) -> Tuple[float, int, Dict[str, Scalar]]:
        """
        Evaluate the global model on local validation data
    
        Args:
            parameters: Global model parameters
            config: Evaluation configuration
        
        Returns:
            tuple: (loss, num_samples, metrics)
        """
        print(f"📊 Evaluating global model locally...")
    
        # Load global model parameters
        self.set_parameters(parameters)
    
        # Evaluate on local validation set
        loss, accuracy = test(self.model, self.valloader)
        num_samples = len(self.valloader.dataset)
    
        print(f"📈 Local evaluation: Loss={loss:.4f}, Accuracy={accuracy:.4f}")
    
        return float(loss), num_samples, {"accuracy": accuracy}


# Test client initialization
print("🧪 Testing FlowerClient initialization...")
sample_client = FlowerClient(trainloaders[0], valloaders[0])
print("✅ FlowerClient class ready for federated learning!")
```

> **💡 Pro Tip**: The beauty of the FlowerClient class is that it encapsulates all the federated learning complexity while keeping the interface simple. Each client manages its own data and model, but communicates through standardized NumPy arrays! 🎯

---

## 🎯 **Federated Learning Strategy: FedAvg**

The **strategy** is the brain of federated learning! It orchestrates the entire process: client sampling, model aggregation, and evaluation coordination.

### 🧠 **Understanding FedAvg**

**Federated Averaging (FedAvg)** is simple yet powerful:

1. **📤 Server** sends global model to selected clients
2. **🏋️ Clients** train locally on their private data
3. **📥 Server** receives updated model parameters
4. **⚖️ Aggregation** averages all client updates (weighted by data size)
5. **🔄 Repeat** for multiple rounds

> **Mathematical Foundation**:
>
> ```
> w_global = Σ(n_i * w_i) / Σ(n_i)
> ```
>
> Where `w_i` are client weights and `n_i` are client data sizes

### 🔧 **Implementing FedAvg with Flower**

```python
def get_evaluate_fn(testloader):
    """
    Create a centralized evaluation function for the global model
  
    This function will be called by the server after each round to assess
    global model performance on a held-out test set.
  
    Args:
        testloader: DataLoader for the test dataset
    
    Returns:
        evaluate_fn: Function that evaluates global model
    """
    def evaluate_fn(server_round: int, parameters: NDArrays, config: Dict[str, Scalar]):
        """
        Evaluate the global model on the centralized test set
    
        Args:
            server_round: Current federated learning round
            parameters: Global model parameters
            config: Evaluation configuration
        
        Returns:
            tuple: (loss, metrics_dict)
        """
        print(f"🌍 Round {server_round}: Evaluating global model...")
    
        # Create a fresh model for evaluation
        model = Net(num_classes=10).to(DEVICE)

        # Load global parameters
        params_dict = zip(model.state_dict().keys(), parameters)
        state_dict = OrderedDict({k: torch.Tensor(v) for k, v in params_dict})
        model.load_state_dict(state_dict, strict=True)

        # Evaluate on the global test set
        loss, accuracy = test(model, testloader)
    
        print(f"🏆 Global Model Performance:")
        print(f"   • Test Loss: {loss:.4f}")
        print(f"   • Test Accuracy: {accuracy:.4f} ({accuracy*100:.2f}%)")
    
        return loss, {"accuracy": accuracy}

    return evaluate_fn


# Configure the FedAvg strategy
print("⚙️ Configuring Federated Learning Strategy...")

strategy = fl.server.strategy.FedAvg(
    fraction_fit=0.1,           # 10% of clients participate in each training round
    fraction_evaluate=0.1,      # 10% of clients participate in evaluation  
    min_available_clients=50,   # Minimum clients needed to start training
    evaluate_fn=get_evaluate_fn(testloader),  # Centralized evaluation function
  
    # Optional: Configure client sampling and aggregation
    min_fit_clients=10,         # Minimum clients for training round
    min_evaluate_clients=5,     # Minimum clients for evaluation round
  
    # Training configuration sent to clients
    fit_config_fn=lambda server_round: {
        "lr": 0.01,            # Learning rate
        "momentum": 0.9,       # SGD momentum  
        "epochs": 1,           # Local training epochs
    },
  
    # Evaluation configuration sent to clients
    evaluate_config_fn=lambda server_round: {
        "batch_size": 64,      # Evaluation batch size
    }
)

print("✅ FedAvg Strategy configured:")
print(f"   • Client participation: 10% per round")
print(f"   • Minimum clients required: 50")
print(f"   • Local training: 1 epoch per round")
print(f"   • Learning rate: 0.01")
```

### 🏭 **Client Factory Function**

We need a factory function to create clients dynamically during simulation:

```python
def generate_client_fn(trainloaders, valloaders):
    """
    Generate a client factory function for Flower simulation
  
    Args:
        trainloaders: List of training data loaders (one per client)
        valloaders: List of validation data loaders (one per client)
    
    Returns:
        client_fn: Function that creates FlowerClient instances
    """
    def client_fn(cid: str) -> FlowerClient:
        """
        Create a FlowerClient instance for a given client ID
    
        Args:
            cid: Client ID (string representation of client index)
        
        Returns:
            FlowerClient instance with the client's data partition
        """
        client_id = int(cid)
        print(f"🌸 Creating client {client_id} with {len(trainloaders[client_id].dataset)} training samples")
    
        return FlowerClient(
            trainloader=trainloaders[client_id], 
            valloader=valloaders[client_id]
        )

    return client_fn

# Create the client factory
client_fn_callback = generate_client_fn(trainloaders, valloaders)
print("🏭 Client factory function created successfully!")
```

---

## 🚀 **Launching the Federated Learning Experiment**

Everything is ready! Let's launch our federated learning simulation:

```python
import time

print("=" * 80)
print("🌸 LAUNCHING FEDERATED LEARNING WITH FLOWER 🌸")
print("=" * 80)

# Simulation configuration
num_clients = 100        # Total clients in the federation
num_rounds = 10          # Number of federated learning rounds
clients_per_round = 10   # Clients participating per round (10% of 100)

print(f"📋 Simulation Configuration:")
print(f"   • Total clients: {num_clients}")
print(f"   • FL rounds: {num_rounds}")
print(f"   • Clients per round: {clients_per_round}")
print(f"   • Strategy: FedAvg")
print(f"   • Dataset: MNIST")
print(f"   • Local epochs: 1")
print("\n🚀 Starting federated learning simulation...")

# Record start time
start_time = time.time()

# Launch the federated learning simulation!
history = fl.simulation.start_simulation(
    client_fn=client_fn_callback,                    # Factory function for creating clients
    num_clients=num_clients,                         # Total number of clients
    config=fl.server.ServerConfig(num_rounds=num_rounds),  # Number of FL rounds
    strategy=strategy,                               # FedAvg strategy
    client_resources={"num_cpus": 1, "num_gpus": 0}  # Resource allocation per client
)

# Record end time
end_time = time.time()
simulation_time = end_time - start_time

print(f"\n⏱️ Simulation completed in {simulation_time:.2f} seconds")
print(f"🏆 Federated learning finished successfully!")
```

> **⚡ Performance Note**: Flower simulation is remarkably fast!
>
> - **10 rounds**: ~2 minutes on CPU
> - **20 rounds**: ~15 minutes on CPU
> - Scales efficiently with more clients! 🚀

---

## 📊 **Results Analysis and Visualization**

Let's analyze the performance of our federated learning experiment:

```python
print("📈 Analyzing Federated Learning Results...")

# Extract centralized accuracy metrics
print(f"📊 Available metrics: {list(history.metrics_centralized.keys())}")

if "accuracy" in history.metrics_centralized:
    global_accuracy_centralized = history.metrics_centralized["accuracy"]
    rounds = [data[0] for data in global_accuracy_centralized]
    accuracies = [100.0 * data[1] for data in global_accuracy_centralized]
  
    # Print summary statistics
    print(f"\n🏆 Federated Learning Results Summary:")
    print(f"   • Initial accuracy: {accuracies[0]:.2f}%")
    print(f"   • Final accuracy: {accuracies[-1]:.2f}%")
    print(f"   • Improvement: {accuracies[-1] - accuracies[0]:+.2f}%")
    print(f"   • Best accuracy: {max(accuracies):.2f}%")
    print(f"   • Total rounds: {len(rounds)-1}")  # -1 because round 0 is initial
  
    # Compare with baseline
    federated_final_acc = accuracies[-1] / 100.0
    improvement_over_baseline = (federated_final_acc - baseline_acc) * 100
  
    print(f"\n🆚 Comparison with Centralized Baseline:")
    print(f"   • Centralized accuracy: {baseline_acc*100:.2f}%")
    print(f"   • Federated accuracy: {federated_final_acc*100:.2f}%")
    print(f"   • Difference: {improvement_over_baseline:+.2f}%")
  
    # Create comprehensive visualization
    fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(15, 10))
  
    # Plot 1: Accuracy over rounds
    ax1.plot(rounds, accuracies, 'b-o', linewidth=2, markersize=6, label='Federated Learning')
    ax1.axhline(y=baseline_acc*100, color='r', linestyle='--', linewidth=2, label='Centralized Baseline')
    ax1.grid(True, alpha=0.3)
    ax1.set_xlabel('Round')
    ax1.set_ylabel('Accuracy (%)')
    ax1.set_title('Federated Learning: Global Model Accuracy')
    ax1.legend()
    ax1.set_ylim([min(accuracies) - 5, max(accuracies) + 5])
  
    # Plot 2: Accuracy improvement
    if len(accuracies) > 1:
        improvements = [acc - accuracies[0] for acc in accuracies[1:]]
        ax2.bar(rounds[1:], improvements, alpha=0.7, color='green')
        ax2.grid(True, alpha=0.3)
        ax2.set_xlabel('Round')
        ax2.set_ylabel('Accuracy Improvement (%)')
        ax2.set_title('Round-by-Round Improvement')
  
    # Plot 3: Learning curve
    ax3.plot(rounds, accuracies, 'g-', linewidth=3, alpha=0.7)
    ax3.fill_between(rounds, accuracies, alpha=0.3, color='green')
    ax3.grid(True, alpha=0.3)
    ax3.set_xlabel('Round')
    ax3.set_ylabel('Accuracy (%)')
    ax3.set_title('Learning Curve (Area Plot)')
  
    # Plot 4: Performance summary
    metrics = ['Initial', 'Final', 'Best', 'Baseline']
    values = [accuracies[0], accuracies[-1], max(accuracies), baseline_acc*100]
    colors = ['lightblue', 'lightgreen', 'gold', 'lightcoral']
  
    bars = ax4.bar(metrics, values, color=colors, alpha=0.8, edgecolor='black')
    ax4.set_ylabel('Accuracy (%)')
    ax4.set_title('Performance Comparison')
    ax4.grid(True, alpha=0.3, axis='y')
  
    # Add value labels on bars
    for bar, value in zip(bars, values):
        height = bar.get_height()
        ax4.text(bar.get_x() + bar.get_width()/2., height + 0.5,
                f'{value:.1f}%', ha='center', va='bottom', fontweight='bold')
  
    plt.tight_layout()
    plt.suptitle(f'MNIST Federated Learning Results - {num_clients} Clients, {num_rounds} Rounds', 
                 fontsize=16, y=1.02)
    plt.show()

else:
    print("⚠️ No accuracy metrics found in history")

# Print detailed round-by-round progress
print(f"\n📋 Detailed Round-by-Round Progress:")
print("Round | Accuracy | Improvement")
print("-" * 35)
for i, (round_num, acc) in enumerate(zip(rounds, accuracies)):
    if i == 0:
        print(f"{round_num:5d} | {acc:7.2f}% | Initial")
    else:
        improvement = acc - accuracies[i-1]
        print(f"{round_num:5d} | {acc:7.2f}% | {improvement:+6.2f}%")
```

![Federated Learning Results](https://github.com/PatternKPS/patternkps.github.io/assets/150363044/4ef75f6c-677a-40d4-b565-d238fdbe3409)

---

## 🚀 **Scaling Up: Testing with More Clients**

One of Flower's greatest strengths is scalability. Let's test with even more clients:

```python
def run_scalability_test(client_counts: List[int] = [50, 100, 200]):
    """
    Test federated learning performance with different numbers of clients
  
    Args:
        client_counts: List of client counts to test
    """
    print("🔬 Running Scalability Analysis...")
  
    results = {}
  
    for num_clients_test in client_counts:
        print(f"\n🧪 Testing with {num_clients_test} clients...")
    
        # Prepare dataset for this client count
        train_loaders_test, val_loaders_test, test_loader_test = prepare_dataset(
            num_partitions=num_clients_test, batch_size=32
        )
    
        # Create client factory
        client_fn_test = generate_client_fn(train_loaders_test, val_loaders_test)
    
        # Configure strategy for this test
        strategy_test = fl.server.strategy.FedAvg(
            fraction_fit=0.1,
            fraction_evaluate=0.1,
            min_available_clients=min(50, num_clients_test),
            evaluate_fn=get_evaluate_fn(test_loader_test),
            fit_config_fn=lambda server_round: {"lr": 0.01, "momentum": 0.9, "epochs": 1}
        )
    
        # Run simulation
        start_time = time.time()
        history_test = fl.simulation.start_simulation(
            client_fn=client_fn_test,
            num_clients=num_clients_test,
            config=fl.server.ServerConfig(num_rounds=5),  # Fewer rounds for testing
            strategy=strategy_test,
            client_resources={"num_cpus": 1, "num_gpus": 0}
        )
        end_time = time.time()
    
        # Extract results
        if "accuracy" in history_test.metrics_centralized:
            accuracies = [data[1] for data in history_test.metrics_centralized["accuracy"]]
            final_accuracy = accuracies[-1] * 100
        
            results[num_clients_test] = {
                'final_accuracy': final_accuracy,
                'training_time': end_time - start_time,
                'rounds': len(accuracies) - 1
            }
        
            print(f"✅ {num_clients_test} clients: {final_accuracy:.2f}% accuracy in {end_time - start_time:.1f}s")
        else:
            print(f"❌ No results for {num_clients_test} clients")
  
    return results

# Run scalability test
print("🎯 Demonstrating Flower's Scalability...")
scalability_results = run_scalability_test([100, 200])

# Visualize scalability results
if scalability_results:
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5))
  
    client_counts = list(scalability_results.keys())
    accuracies = [scalability_results[c]['final_accuracy'] for c in client_counts]
    times = [scalability_results[c]['training_time'] for c in client_counts]
  
    # Accuracy vs Number of Clients
    ax1.plot(client_counts, accuracies, 'bo-', linewidth=2, markersize=8)
    ax1.grid(True, alpha=0.3)
    ax1.set_xlabel('Number of Clients')
    ax1.set_ylabel('Final Accuracy (%)')
    ax1.set_title('Accuracy vs Number of Clients')
  
    # Training Time vs Number of Clients
    ax2.plot(client_counts, times, 'ro-', linewidth=2, markersize=8)
    ax2.grid(True, alpha=0.3)
    ax2.set_xlabel('Number of Clients')
    ax2.set_ylabel('Training Time (seconds)')
    ax2.set_title('Training Time vs Number of Clients')
  
    plt.tight_layout()
    plt.suptitle('Flower Framework Scalability Analysis', fontsize=14, y=1.02)
    plt.show()
```

![Scalability Analysis](https://github.com/PatternKPS/patternkps.github.io/assets/150363044/7d661247-b3be-49ba-a131-346778a1d055)

---

## 🎉 **Key Takeaways and Future Directions**

### 🏆 **What We Accomplished**

✅ **Implemented complete federated learning pipeline** with Flower
✅ **Demonstrated privacy-preserving training** across 100+ clients
✅ **Achieved competitive performance** compared to centralized training
✅ **Showcased remarkable scalability** with minimal overhead
✅ **Visualized learning dynamics** and performance metrics

### 🔑 **Key Insights**

1. **🌸 Flower Simplicity**: Complex federated learning made remarkably simple
2. **⚡ Performance**: Excellent accuracy with fast training times
3. **📈 Scalability**: Seamlessly scales from 10 to 200+ clients
4. **🔒 Privacy**: Data never leaves client devices
5. **🔧 Flexibility**: Easy to customize strategies and configurations

### 🚀 **Next Steps & Extensions**

| Enhancement                    | Description                                            | Impact                             |
| ------------------------------ | ------------------------------------------------------ | ---------------------------------- |
| **Non-IID Data**         | Simulate realistic heterogeneous data distributions    | More realistic federated scenarios |
| **Advanced Strategies**  | Implement FedProx, FedNova, or custom aggregation      | Better convergence properties      |
| **Differential Privacy** | Add noise for stronger privacy guarantees              | Enhanced privacy protection        |
| **Cross-Device FL**      | Simulate mobile devices with intermittent connectivity | Real-world deployment scenarios    |
| **Personalization**      | Local model fine-tuning for client-specific tasks      | Improved individual performance    |

### 💡 **Real-World Applications**

- 🏥 **Healthcare**: Collaborative medical imaging without sharing patient data
- 📱 **Mobile AI**: Keyboard prediction, voice recognition across devices
- 🏦 **Finance**: Fraud detection across institutions
- 🚗 **Autonomous Vehicles**: Shared learning from driving experiences
- 🏭 **Industrial IoT**: Predictive maintenance across factories

---

## 🌟 **Conclusion**

**`<font color='blue'>`&#x1F33C;&#127800;F `</font><font color='orange'>`L `</font><font color='magenta'>`O `</font><font color='yellow'>`W `</font><font color='green'>`E `</font><font color='black'>`R &#x1F33C;&#127800;`</font>`** has proven to be an exceptional framework for federated learning research and deployment. Its elegant design makes complex distributed ML accessible while maintaining the flexibility needed for cutting-edge research.

> **"Federated learning isn't just about distributing computation—it's about democratizing AI while preserving privacy. Flower makes this vision achievable."** 🌸

### 📚 **Resources for Further Learning**

- 🌸 [Flower Documentation](https://flower.dev/docs/)
- 📖 [Federated Learning Book](https://federated-learning.org/)
- 🎓 [FL Research Papers](https://arxiv.org/search/?query=federated+learning)
- 💻 [Flower GitHub](https://github.com/adap/flower)

---

*Thank you for joining this federated learning journey! Feel free to experiment, modify, and build upon this foundation. The future of privacy-preserving AI is blooming! 🌸🚀*

---

### 📋 **Document History**

- **📝 Original Publication**: April 19th, 2024 - Initial Flower tutorial with basic implementation
- **✨ Major Update**: August 2nd, 2025 - Comprehensive enhancement with:
  - Improved code documentation and structure
  - Advanced visualization and analysis
  - Professional formatting and educational content
  - Scalability testing and performance metrics
  - Real-world applications and future directions

*This tutorial continues to evolve as federated learning advances. Check back for future updates!* 🌟
