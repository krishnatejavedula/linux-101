# WSL: Installation and Configuration Guide

This tutorial guides you through installing Fedora 42 on Windows Subsystem for Linux (WSL), moving a WSL distribution to a custom location, configuring XDG user directories, linking Windows and Linux environments, setting a default WSL user, updating WSL components, and integrating Visual Studio Code with WSL.

## Part 1: Installing Fedora 42 on WSL

### Step 1: Install Fedora 42

To install Fedora 42 as a WSL distribution, open PowerShell (or Command Prompt) and enter the following command:

```powershell
wsl --install FedoraLinux-42
```

This command installs Fedora 42 as a WSL distribution named `FedoraLinux-42`.

### Step 2: Launch Fedora 42

Once installed, you need to run Fedora 42 to complete the setup:

```powershell
wsl -d FedoraLinux-42
```

You're prompted to set up and configure your user account upon the first launch.

## Part 2: Moving a WSL Distribution to a Custom Location

If you want to move a WSL distribution (e.g., Fedora, Debian) to another drive or folder, follow these steps:

### Step 1: Terminate the Distribution

Ensure that the distribution is not running before moving it:

```powershell
wsl -t <distro-name>
```

Example for Fedora 42:
```powershell
wsl -t FedoraLinux-42
```

### Step 2: Export the Distribution to a Tarball

Export the distribution to a tarball file. This will save its current state:

```powershell
wsl --export <distro-name> <path-to-tarball>
```

Example:
```powershell
wsl --export FedoraLinux-42 D:\tmp\Fedora42.tar
```

### Step 3: Unregister the Distribution

Remove the distribution from WSL, but ensure your export is safe:

```powershell
wsl --unregister <distro-name>
```

Example:
```powershell
wsl --unregister FedoraLinux-42
```

### Step 4: Import the Distribution to a New Location

Import the distribution from the tarball to your desired location:

```powershell
wsl --import <distro-name> <path-to-new-location> <path-to-tarball>
```

Example:
```powershell
wsl --import FedoraLinux-42 D:\WSL\Fedora42\ D:\tmp\Fedora42.tar
```

### Step 5: Verify Installed Distributions

Check your list of installed distributions and their status:

```powershell
wsl -l -v
```

## Part 3: Configure XDG User Directories and Link Windows Downloads

### 1. Create XDG User Directories

Inside WSL, standardize directory locations such as Desktop, Documents, and Downloads:

```bash
xdg-user-dirs-update --force
```

Verify the download directory location with:

```bash
xdg-user-dir DOWNLOAD
```

### 2. Link Windows Downloads Folder Inside WSL

Create a symbolic link in your WSL home directory pointing to the Windows Downloads folder:

```bash
ln -s /mnt/c/Users/$(cmd.exe /C "echo %USERNAME%" | tr -d '\r')/Downloads ~/Win-Downloads
```

This allows easy access to files downloaded in Windows from within WSL.

## Part 4: Setting Default WSL User and Updating WSL Components

### 3. Set Your WSL User as Default

Edit or create the `/etc/wsl.conf` inside your WSL distribution:

```ini
[user]
default=yourusername
```

Replace `yourusername` with your actual WSL username.

Restart your WSL instance to apply the changes:

```powershell
wsl --shutdown
wsl
```

### 4. Update WSL Kernel and Components

Ensure your WSL installation is up to date:

- Update the WSL kernel:

```powershell
wsl --update
```

- Check WSL version and status:

```powershell
wsl --status
```

- Upgrade WSL to the latest release:

```powershell
wsl --upgrade
```

- Shutdown all WSL instances:

```powershell
wsl --shutdown
```

These steps ensure your WSL experience is optimal in terms of performance and security.

## Part 5: Installing Visual Studio Code on Windows and Using It with WSL

### 1. Install Visual Studio Code on Windows

- Go to the official [Visual Studio Code download page](https://code.visualstudio.com/).
- Click **Download for Windows** and run the installer.
- Follow the setup wizard, accept the terms, and install VS Code.
- During installation, **check the options**:
  - **Add 'code' to your PATH** (to enable launching VS Code from the command line).
  - Optional: Create a Desktop icon, register Code as the editor for supported file types.

### 2. Install the Remote - WSL Extension in VS Code

- Open VS Code.
- Go to Extensions view (`Ctrl+Shift+X`).
- Search for **Remote - WSL** and install it.
- This extension allows VS Code to seamlessly work inside your WSL environment.

### 3. Open WSL Folders in VS Code via Terminal

- Open your WSL distribution terminal.
- Navigate to your project or directory.
- Run:

  ```bash
  code .
  ```

- This will launch VS Code on Windows, opening the current WSL directory with full filesystem access and an integrated terminal.
- You can edit files, debug, and use all VS Code features while running the environment inside WSL.

### 4. Tips for Best Experience

- Keep Windows, WSL, and VS Code updated for smooth integration.
- Use `code --help` to explore command line options.
- Open your WSL terminal from VS Code by using the integrated terminal and selecting your WSL shell.
- You can also open specific files or folders with `code <filename>` or `code <foldername>`.

This setup improves your development workflow by combining Windows GUI tools with Linux shell and toolchains inside WSL. 

---

Here is the updated list of additional resources with the requested links removed and the Fedora official WSL guide link retained:

***

## Additional Resources

- **Windows Subsystem for Linux Official Documentation:**  
  https://learn.microsoft.com/en-us/windows/wsl/install

- **Arch Linux Wiki:**  
  https://wiki.archlinux.org

- **Fedora 42 on WSL Official Documentation:**  
  https://docs.fedoraproject.org/en-US/cloud/wsl/

- **Visual Studio Code Remote - WSL Guide:**  
  https://code.visualstudio.com/docs/remote/wsl

***