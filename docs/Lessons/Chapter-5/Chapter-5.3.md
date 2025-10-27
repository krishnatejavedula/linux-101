---
title: 5.3 Initializing a Local Git Repository
---

You can use Git locally without any hosting service to track your work. Once a directory is initialized, Git begins tracking changes to files inside it.

### Creating a Local Repository

```bash
cd ~/projects
mkdir my-first-repo
cd my-first-repo
git init
````

This initializes a new Git repository in the current directory. You’ll see a hidden folder named `.git` — this is where Git stores all version history and configuration.

---

### Adding and Committing Files

```bash
echo "My first Git-tracked file" > file.txt
git add file.txt
git commit -m "Initial commit: Added file.txt"
```

You now have a local project with version control enabled.

---

### Tracking Multiple Files

If you create or modify several files at once, you can add them individually:

```bash
git add file1.txt file2.txt notes.md
```

Or add **all new and modified files** in the current directory using:

```bash
git add .
```

> 💡 The `.` means “add everything in this directory.”
> It’s convenient, but review your changes first to avoid committing unwanted files.

You can check which files are staged or modified before committing:

```bash
git status
```

---

### Committing Changes

Once files are staged, record them with a commit message describing the change:

```bash
git commit -m "Update notes and add new files"
```

To view your recent commits:

```bash
git log --oneline
```

Each commit represents a snapshot of your project at a specific point in time.

---

### Simple Workflow Example

Here’s a quick look at the typical local Git workflow:

```bash
git status

git add .

git commit -m "Describe what changed"

git log --oneline
```

Repeat this cycle each time you make updates to your project.

---