---
title: 5.5 Working with Branches and Commits
---

Branches let you work on new features, fixes, or experiments without affecting your main codebase. They make it easier to test ideas safely and keep your project history organized.

### Understanding Branches

* The **`main`** branch is your stable, production-ready version.  
* **Feature branches** allow you to develop and test changes independently.  
* Once your work is reviewed or tested, you can merge it back into `main`.

---

### Creating and Switching Branches

To create and switch to a new branch in one step:

```bash
git checkout -b feature-branch
````

> 💡 Use short, descriptive branch names like `feature/login-form` or `fix/typo-readme`.

---

### Making Changes and Committing

After editing files, add and commit your changes:

```bash
git add feature.txt
git commit -m "Add new feature"
```

You can view your commit history anytime:

```bash
git log --oneline
```

---

### Merging Branches

Once your work is ready, merge it into the main branch:

```bash
git checkout main
git merge feature-branch
```

If there are no conflicts, Git will automatically combine the changes.

---

### Deleting a Branch

After merging, you can safely delete the feature branch:

```bash
git branch -d feature-branch
```

If the branch hasn’t been merged and you still want to remove it:

```bash
git branch -D feature-branch
```

Branches help you organize your work and keep your main codebase stable. Use them for every new feature or experiment, and merge regularly to keep your project history clean.