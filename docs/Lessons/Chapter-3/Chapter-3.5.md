---
title: 3.5 Workspaces and Extensions
---

### Workspaces

Workspaces in VS Code let you save and reuse project-specific settings, folders, and configurations.

**Saving a Workspace**

1. Open a project folder in VS Code.
2. Go to **File → Save Workspace As…**
3. Save the file (e.g., `myproject.code-workspace`).

**Reopening a Workspace**

* Go to **File → Open Workspace** → select the `.code-workspace` file.
* This restores your folders, terminals, and project-specific settings.

**Closing a Workspace**

* Go to **File → Close Workspace**.
* VS Code returns to the default empty window.

---

#### Example: Conda Environment Per Project

Suppose you have a data science project that uses a **specific Conda environment** (e.g., `myenv`). You can tie that environment to your VS Code workspace so it always loads automatically.

Inside your project folder, create a `.vscode/settings.json` file with:

```json
{
  "python.defaultInterpreterPath": "/home/username/miniconda3/envs/myenv/bin/python",
  "python.terminal.activateEnvironment": true,
  "editor.formatOnSave": true
}
```

Now, whenever you reopen this workspace:

* VS Code will **automatically use the `myenv` Conda environment** for running and debugging.
* You don’t have to manually select it each time.
* This makes it easier to keep project dependencies isolated and consistent.

---

**Benefits**

* Keep settings, themes, and extensions project-specific.
* Automatically load the right **Conda environment** or interpreter for each project.
* Quickly switch between projects without losing context.
---

### Recommended Extensions

* **Remote - WSL** → WSL integration
* **Python** → Python development
* **C/C++ Tools** → System programming
* **GitLens** → Advanced Git integration
* **Prettier** or **ESLint** → Code formatting/linting
* **Black Formatter** → Python code formatting
* **Markdown All in One** → Documentation editing
* **LaTeX Workshop** → LaTeX editing
* **Themes**: GitHub Theme, Catppuccin, Dracula, Nord

---
## Additional Resources

* [VS Code Official Documentation](https://code.visualstudio.com/docs)
* [VS Code Remote - WSL Documentation](https://code.visualstudio.com/docs/remote/wsl)

---