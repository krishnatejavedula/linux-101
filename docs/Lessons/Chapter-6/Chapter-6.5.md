---
title: 6.5 Collaboration Best Practices
---


### Branching and Naming

* Use descriptive branch names like `feature/login-ui` or `fix/typo-readme`.
* Avoid pushing directly to `main`.

### Pull Requests

* Keep PRs focused and easy to review.
* Provide clear descriptions.
* Address review feedback promptly.

### Syncing and Rebasing

```bash
git fetch origin
git rebase origin/main
```

Rebasing helps keep your history clean and linear.

### Collaboration Etiquette

* Use pull requests for code reviews before merging.
* Pull the latest changes frequently.
* Avoid committing large binaries or sensitive data.
* Communicate through clear commit messages and PR discussions.

### General Tips

* Keep the `main` branch stable and deployable.
* Use `.gitignore` to keep repos clean.
* Tag versions to mark milestones:

  ```bash
  git tag v1.0
  git push origin v1.0
  ```
* Explore other platforms like **GitLab**, **Codeberg**, **Gitea**, or **Forgejo** for alternative workflows.

---

## **Additional Resources**

* [Git Documentation](https://git-scm.com/doc) – Official Git reference and tutorials
* [GitHub Docs](https://docs.github.com/) – Comprehensive GitHub documentation
---