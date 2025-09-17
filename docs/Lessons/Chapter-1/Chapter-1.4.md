---
title: 1.4 Basic Package Management
---

Learn how to install, update, and remove software with two key package managers.

---

### **1.4.1 APT (Debian & Ubuntu)**

```bash
sudo apt update           # Refresh package list
sudo apt upgrade          # Apply updates
sudo apt install htop     # Install package
sudo apt remove htop      # Remove package
apt search <term>         # Search available packages
man apt                   # View manual
```

---

### **1.4.2 DNF (Fedora)**

```bash
sudo dnf install htop     # Install package
sudo dnf remove htop      # Remove package
sudo dnf upgrade          # Update system
man dnf                   # View manual
```

---