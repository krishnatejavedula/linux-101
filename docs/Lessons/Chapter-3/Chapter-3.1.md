---
title: 3.1 Text Editors and Development Tools
---

Modern development often revolves around powerful editors and IDEs. In this chapter, we’ll cover two essential tools: Vim, a lightweight terminal-based editor, and Visual Studio Code (VS Code), a versatile graphical editor. You’ll learn how to install them on Linux and Windows (for WSL users), set them up, and extend them with useful plugins.


###  Installing Vim 

#### Debian/Ubuntu

```bash
sudo apt update
sudo apt install vim -y
```

#### Fedora

```bash
sudo dnf install vim -y
```

#### Verify Installation

```bash
vim --version
```

If you see version information, Vim is ready to use.

---

###  Installing Visual Studio Code


Download official VS Code packages from the [Visual Studio Code download page](https://code.visualstudio.com/download).

#### Debian/Ubuntu (.deb package)

1. Download the `.deb` file.
2. In terminal, navigate to the download folder and run:

   ```bash
   sudo apt install ./code_<version>.deb
   ```
3. Launch with:

   ```bash
   code
   ```

#### Fedora (.rpm package)

1. Download the `.rpm` file.
2. In terminal, run:

   ```bash
   sudo dnf install ./code-<version>.rpm
   ```
3. Launch with:

   ```bash
   code
   ```

*Tip: Installing from the official Microsoft repository instead of a package ensures automatic updates through your package manager.*

---

