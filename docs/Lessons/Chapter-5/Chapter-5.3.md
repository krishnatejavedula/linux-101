---
title: 5.3 Initializing a Local Git Repository
---

You can use Git locally without any hosting service to track your work.

### Creating a Local Repository

```bash
cd ~/projects
mkdir my-first-repo
cd my-first-repo
git init
```

This initializes a new Git repository in the directory.

### Adding and Committing Files

```bash
echo "My first Git-tracked file" > file.txt
git add file.txt
git commit -m "Initial commit: Added file.txt"
```

You now have a local project with version control enabled.

---
