---
title: 1.3 Installing Debian via Live USB
---

Linux can be installed natively for the **best performance** and a full Linux experience.  
A Live USB allows you to **try Debian without installing**, or install it alongside another OS (dual-boot) or as the only OS.

---

### **1.3.1 Download Debian ISO**

- **Debian Live ISOs** (desktop-ready with GNOME, XFCE, KDE, LXQt, etc.):  
  [https://www.debian.org/CD/live/](https://www.debian.org/CD/live/)
- **Minimal Network Install (netinst ISO)** for a smaller installer image:  
  [https://www.debian.org/CD/netinst/](https://www.debian.org/CD/netinst/)

---

### **1.3.2 Create a Bootable USB**

- Use a USB drive (≥ 8 GB recommended).

**Windows Users:**
- [Rufus](https://rufus.ie/) → Select **DD mode** when flashing Debian images to avoid issues.
  
**Cross-Platform (Windows/macOS/Linux):**
- [Balena Etcher](https://www.balena.io/etcher/) → Simple GUI option.

**Advanced Users (Linux/macOS):**
```bash
sudo dd if=/path/to/debian-live.iso of=/dev/sdX bs=4M status=progress oflag=sync
````

> Replace `/dev/sdX` with your USB device path (⚠ careful to avoid data loss).

---

### **1.3.3 Boot from USB**

1. Insert the USB into the target machine.
2. Reboot and enter BIOS/UEFI boot menu (common keys: `ESC`, `F12`, `F2`, `DEL`).
3. Select the USB drive as the boot device.

---

### **1.3.4 Start Installation**

* At the boot menu, choose:

  * **Graphical Install** → recommended for most users
  * **Live system** → try Debian first, then install from the desktop
* Follow the prompts:

  * Select **language, location, keyboard**
  * Configure **network** (wired/wireless)
  * Create **user account(s) & password(s)**

---

### **1.3.5 Partition Disks**

* **Guided partitioning** → easiest, recommended for beginners.
* **Manual partitioning** → for dual-boot setups or custom layouts.

---

### **1.3.6 Install System & Bootloader**

* Installer sets up the base Debian system.
* Install **GRUB bootloader** to the main drive (MBR/EFI).

---

### **1.3.7 Finalize Installation**

* Once complete:

  * Remove the USB drive.
  * Reboot into Debian.
  * Log in with your new user credentials.

---

### **Additional Resources**

* [Debian Live Manual](https://live-team.pages.debian.net/live-manual/html/live-manual.en.html)
* [Debian Installation Wiki](https://wiki.debian.org/DebianInstall)
* [Official Debian Downloads](https://www.debian.org/distrib/)

---