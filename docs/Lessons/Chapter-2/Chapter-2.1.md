---
title: 2.1 Installing Essential Tools
---

Ensure your Linux environment has the core utilities for development and daily use.

**Ubuntu/Debian:**

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential python3 python3-pip vim nano curl wget git htop stow ranger rsync openssh-client
```

**Fedora:**

```bash
sudo dnf upgrade -y
sudo dnf groupinstall -y "Development Tools"
sudo dnf install -y python3 python3-pip vim nano curl wget git htop stow ranger rsync openssh
```

You'll now have compilers, interpreters, editors, and key command-line tools installed.

---
