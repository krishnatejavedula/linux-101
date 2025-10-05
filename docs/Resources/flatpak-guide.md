# Installing GUI Apps with Flatpak (Linux)

[Flatpak](https://flatpak.org/) is a universal package system for Linux. It’s especially useful for installing **GUI applications** that may not be available—or up to date—in your distro’s repositories. Flatpak apps run in a sandboxed environment with all required dependencies bundled in.

---

## Step 1: Install Flatpak

* **On Debian/Ubuntu:**

  ```bash
  sudo apt install flatpak
  ```

* **On Fedora (usually preinstalled):**

  ```bash
  sudo dnf install flatpak
  ```

Verify Flatpak is installed with:

```bash
flatpak --version
```

---

## Step 2: Enable Flathub (Main App Store)

```bash
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Flathub is the central repository where most Flatpak apps are published.

---

## Step 3: Find and Install Apps

You can browse and search for Flatpak apps on **[Flathub.org](https://flathub.org/)**.

For example:

* **Firefox (latest release):**

  ```bash
  flatpak install flathub org.mozilla.firefox
  ```
* **GIMP (image editor):**

  ```bash
  flatpak install flathub org.gimp.GIMP
  ```

To search directly from the terminal:

```bash
flatpak search <app-name>
```

---

## Step 4: Run Flatpak Apps

Installed Flatpak apps appear in your system menu. You can also launch them from the terminal:

```bash
flatpak run org.mozilla.firefox
```

---

## Step 5: Update Flatpak Apps

Keep apps up to date with:

```bash
flatpak update
```

---

## Extra Tips

* **List all installed Flatpak apps:**

  ```bash
  flatpak list
  ```

* **Uninstall an app:**

  ```bash
  flatpak uninstall <ApplicationID>
  ```

* **Remove unused runtimes (free disk space):**

  ```bash
  flatpak uninstall --unused
  ```

* **Manage app permissions with Flatseal (GUI):**

  ```bash
  flatpak install flathub com.github.tchx84.Flatseal
  ```

* **Enable GNOME Software integration (Debian/Ubuntu):**

  ```bash
  sudo apt install gnome-software-plugin-flatpak
  ```

This lets you browse and install Flatpak apps directly from the Software Center.

---

Flatpak provides a modern, secure, and cross-distro way to install GUI apps—especially those that need the newest versions or aren’t packaged by your distribution.

More info: [Flatpak Documentation](https://flatpak.org/) | [Flathub](https://flathub.org/)

---

