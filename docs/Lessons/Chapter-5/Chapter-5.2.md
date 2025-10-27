---
title: 5.2 Installing Git
---

Before you can use Git, install it on your system and configure your identity.

### Installing Git on Windows (via WSL)

If you use **Windows Subsystem for Linux (WSL)**:

```bash
sudo apt update
sudo apt install git -y
```

Verify the installation:

```bash
git --version
```

### Installing Git on Linux

For Debian or Ubuntu-based systems:

```bash
sudo apt update
sudo apt install git -y
```

For Fedora or RHEL-based systems:

```bash
sudo dnf install git -y
```

### Installing Git on macOS

If you have **Homebrew**:

```bash
brew install git
```

### Configuring Git (First-Time Setup)

After installation, set your name and email (these appear in your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Verify your configuration:

```bash
git config --list
```

---
