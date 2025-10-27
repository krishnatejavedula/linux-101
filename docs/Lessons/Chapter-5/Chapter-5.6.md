---
title: 5.6 Best Practices for Local Repositories
---

### Commit Practices

* Write **clear, descriptive commit messages** explaining *what* and *why*.
* Commit often, but keep each commit focused on one logical change.
* Use the **imperative mood** (e.g., “Add feature” not “Added feature”).

### Branching Practices

* Create a new branch for each feature or fix.
* Merge frequently to prevent large conflicts.
* Use meaningful, consistent branch names like `feature/login` or `fix/readme-typo`.

### General Tips

* Keep `main` clean and stable.
* Use `.gitignore` to keep your repo tidy.
* Tag versions to mark milestones:

  ```bash
  git tag v1.0
  ```