---
title: 3.4 Working with VS Code and WSL
---

VS Code is more than just a text editor — it’s a full-featured development environment that integrates smoothly with Linux and Windows through WSL.

### Why Use VS Code?

* Cross-platform: Linux, macOS, Windows.
* Integrated terminal for shell commands.
* Built-in Git and version control.
* Rich extension ecosystem for languages, frameworks, and workflows.

---

### Using VS Code with WSL

1. Install VS Code for Windows from the [download page](https://code.visualstudio.com/download).
2. During installation, select **Add to PATH** to enable the `code` command.
3. In VS Code, install the **Remote - WSL** extension.
4. Open a WSL terminal, then run:

   ```bash
   code .
   ```

   This opens your WSL project in VS Code with full Linux integration.

You can also connect manually:

* Press `Ctrl+Shift+P` → choose **Remote-WSL: New Window**.
* VS Code now runs inside WSL, with access to the Linux filesystem and toolchains.

---
