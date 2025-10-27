---
title: 4.2 Installing Conda using Miniforge
---

**Miniforge** is a community-driven minimal installer for Conda that uses the **conda-forge** repository by default.
It is lightweight, fully open-source, and ideal for users who want a clean setup without extra bundled packages.

### Miniforge vs. Anaconda

| Feature           | **Miniforge**                   | **Anaconda**                           |
| ----------------- | ------------------------------- | -------------------------------------- |
| Default Channel   | conda-forge (community)         | Anaconda (curated)                     |
| Installation Size | Lightweight                     | Large (many pre-installed packages)    |
| License           | Fully open-source               | Includes some commercial components    |
| Ideal For         | Developers who want flexibility | Beginners who want an all-in-one setup |

---

### Installation Steps

1. **Visit the Conda-Forge Website**
   Go to [Conda-Forge](https://conda-forge.org/) and open the installation guide for your platform.

2. **Download and Install Miniforge**
   Follow the steps for your operating system:

   * **Windows:** Download and run the `.exe` installer.
   * **macOS / Linux:** Download the `.sh` installer and run it in a terminal:

     ```bash
     bash Miniforge3-MacOSX-arm64.sh
     ```

     *(The filename may differ depending on your OS and architecture.)*

   During installation, you may be prompted with a message like:

   > “Do you wish the installer to initialize Miniforge by running conda init?”

   It is recommended to answer **yes**.
   This step configures your shell (e.g., Bash, Zsh) to automatically recognize the `conda` command whenever you open a new terminal.

   Tip: Always read through the installation instructions and prompts carefully when using command-line installers. Understanding each step helps prevent setup issues later.

3. **Restart the Terminal**
   After installation, restart your terminal or open a new one so the `conda` command is recognized.

4. **Verify the Installation**

   ```bash
   conda --version
   ```

   If installed correctly, this will display the Conda version number.

---

## Troubleshooting Installation Issues

* **`conda: command not found` error:**
  Restart your terminal or activate Conda manually:

  ```bash
  source ~/miniforge3/bin/activate
  ```

---
