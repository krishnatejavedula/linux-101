---
title: 6.3 Connecting Local and Remote Repositories
---

You can link an existing local Git repository to a remote service like GitHub, GitLab, or Codeberg.

### Connecting a Local Repository

1. Create a remote repository on your hosting platform.
2. Copy its URL.
3. Link and push your local repo:

   ```bash
   git remote add origin https://example.com/username/my-first-repo.git
   git branch -M main
   git push -u origin main
   ```

### Pulling Updates from Remote

```bash
git pull origin main
```

> Regularly pull updates to stay in sync with your teammates.

---