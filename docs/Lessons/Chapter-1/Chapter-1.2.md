---
title: 1.2 Ways to Run Linux
---

Linux can be used in several convenient ways—choose the one that suits your goals:

### **1.2.1 WSL (Windows Subsystem for Linux)**

* **Best for Windows users**: run a real Linux CLI alongside Windows without dual-booting or VMs.
* **Easy to install** and integrates directly with Windows tools.

---

#### **Install WSL (Windows 10/11, PowerShell as Administrator):**

```powershell
wsl --install
````

This will:

* Enable the necessary Windows features.
* Install the latest Ubuntu distribution by default.

---

#### **Choose a Specific Linux Distribution:**

List available distributions:

```powershell
wsl --list --online
```

Install your choice (example: Ubuntu 22.04):

```powershell
wsl --install -d Ubuntu-22.04
```

---

#### **Useful WSL Commands:**

* Check installed distributions:

  ```powershell
  wsl --list --verbose
  ```
* Set default distribution:

  ```powershell
  wsl --set-default Ubuntu-22.04
  ```
* Update WSL:

  ```powershell
  wsl --update
  ```

---

#### **Accessing Files:**

* Windows files are under `/mnt/c/...`
* Your Linux home directory is separate (better for Linux development).

---

#### **Official Docs & Resources:**

* [Microsoft WSL Documentation](https://learn.microsoft.com/en-us/windows/wsl/)
* [Ubuntu on WSL](https://ubuntu.com/wsl)


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
