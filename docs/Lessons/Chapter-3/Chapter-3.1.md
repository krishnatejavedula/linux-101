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

### Installing Visual Studio Code

Download official VS Code packages from the [Visual Studio Code download page](https://code.visualstudio.com/download).

---

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

---

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

---

#### Linux (tar.gz archive)

1. Download the `.tar.gz` archive from the [VS Code download page](https://code.visualstudio.com/download).

2. Extract it to your preferred location — system-wide (requires `sudo`) or user-local (no `sudo` needed).
   For example:

   ```bash
   # System-wide install (requires root)
   sudo tar -xvf code-<version>.tar.gz -C /usr/share/
   sudo mv /usr/share/VSCode-linux-x64 /usr/share/code

   # User-local install (no root)
   mkdir -p ~/apps
   tar -xvf code-<version>.tar.gz -C ~/apps/
   ```

3. (Optional) Add VS Code to your PATH for easy launching:

   ```bash
   # System-wide
   sudo ln -s /usr/share/code/bin/code /usr/bin/code

   # User-local
   echo 'alias code="~/apps/VSCode-linux-x64/code"' >> ~/.bashrc
   source ~/.bashrc
   ```

4. Launch VS Code:

   ```bash
   code
   ```
   
*💡 Tip: Installing from the `.tar.gz` archive gives you flexibility in where to install VS Code but won’t receive automatic updates. For automatic updates, use the `.deb` or `.rpm` packages via the official Microsoft repositories.*

---

