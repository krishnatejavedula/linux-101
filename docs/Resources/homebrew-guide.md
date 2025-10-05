# Package management on macOS with Homebrew

**[Homebrew](https://brew.sh/)** is the popular, missing package manager for macOS that makes installing and managing developer tools and software easy.

## Step 1: Install Homebrew

Open the **Terminal** app and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

This script will guide you through the setup. You may be prompted to install Apple’s Xcode Command Line Tools if they’re not already installed.

After installation, verify Homebrew is working with:

```bash
brew doctor
```

If everything is correct, you should see:

```
Your system is ready to brew.
```

> **Note for Apple Silicon (M1/M2) users:** If Homebrew isn’t recognized after install, you may need to add it to your shell config:
>
> ```bash
> echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
> eval "$(/opt/homebrew/bin/brew shellenv)"
> ```

---

## Step 2: Install Developer Essentials

With Homebrew ready, you can install the most common developer tools in a few commands:

* **Vim (terminal text editor):**

  ```bash
  brew install vim
  ```

* **Visual Studio Code (graphical editor):**

  ```bash
  brew install --cask visual-studio-code
  ```

* **Git (version control):**

  ```bash
  brew install git
  ```

---

## Step 3: Install Other Useful Tools (Optional)

* **Python:**

  ```bash
  brew install python
  ```

* **Node.js + npm:**

  ```bash
  brew install node
  ```

* **wget (file downloader):**

  ```bash
  brew install wget
  ```

---

## Step 4: Manage and Update Packages

* Update Homebrew and package info:

  ```bash
  brew update
  ```

* Upgrade all installed packages:

  ```bash
  brew upgrade
  ```

* Search for a package:

  ```bash
  brew search <package-name>
  ```

* Uninstall a package:

  ```bash
  brew uninstall <package-name>
  ```

---

## Step 5: Explore More

* List all installed packages:

  ```bash
  brew list
  ```

* Get details about a package:

  ```bash
  brew info <package-name>
  ```

* Disable anonymous analytics:

  ```bash
  brew analytics off
  ```

For more documentation visit the official site: [https://brew.sh/](https://brew.sh/).

---
