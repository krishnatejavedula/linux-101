---
title: 5.4 Using `.gitignore` to Exclude Files (Optional)
---

Not every file in your project needs to be tracked by Git.  
Temporary files, logs, virtual environments, or system files can clutter your repository and should be excluded.

The `.gitignore` file tells Git **which files or directories to skip** when tracking changes.


### Creating a `.gitignore` File

Create a `.gitignore` file in the root of your repository:

```bash
touch .gitignore
````

Open it in a text editor and list the files or patterns you want Git to ignore.
Example:

```bash
# Ignore system and temporary files
.DS_Store
Thumbs.db
*.tmp
*.log

# Ignore Python cache and environment folders
__pycache__/
.env/
venv/

# Ignore build artifacts
build/
dist/
```

---

### Checking What Git Ignores

To verify which files are ignored:

```bash
git status --ignored
```

Ignored files will appear under “Ignored files.”

---

### Important Notes

* The `.gitignore` file itself should **be tracked** so all collaborators use the same rules:

  ```bash
  git add .gitignore
  git commit -m "Add .gitignore to exclude temporary and environment files"
  ```
* Adding a file to `.gitignore` **won’t untrack it** if it’s already committed. To stop tracking it:

  ```bash
  git rm --cached <filename>
  ```
* You can also set a **global ignore list** for all repositories:

  ```bash
  git config --global core.excludesfile ~/.gitignore_global
  ```

---

### Example: Minimal `.gitignore` for Python Projects

```bash
# Byte-compiled / cache files
__pycache__/
*.py[cod]

# Virtual environments
venv/
.env/

# Logs and temporary files
*.log
*.tmp

# System files
.DS_Store
Thumbs.db
```

Using `.gitignore` right after initializing your repository helps keep your project clean and prevents unwanted files from being committed.
