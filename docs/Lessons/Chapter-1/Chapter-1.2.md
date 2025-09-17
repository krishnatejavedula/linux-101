---
title: 1.2 Ways to Run Linux
---

Linux can be used in several convenient ways—choose the one that suits your goals:

### **1.2.1 WSL (Windows Subsystem for Linux)**

* Ideal for Windows: runs a real Linux CLI alongside Windows.
* Fast to install and straightforward.

> **Install WSL and Ubuntu (powershell as Admin):**

```powershell
wsl --install
```

To choose a specific distro:

```powershell
wsl --list --online
wsl --install -d Ubuntu-22.04
```

Files are accessible under `/mnt/c/...`.

---

### **1.2.2 Native Installation via Live USB**

* Best performance and native experience.
* Ideal for dual-boot setups or full Linux environments.

#### **Steps to Prepare:**

1. **Download ISO**:

   * Debian Live: [https://www.debian.org/CD/live/](https://www.debian.org/CD/live/)
   * Fedora Workstation: [https://fedoraproject.org/](https://fedoraproject.org/)
2. **Create Bootable USB** using Rufus or balenaEtcher.
3. **Boot from USB** and either "Try" or "Install".

Be careful when dual-booting—partitioning and backups are essential.

---
