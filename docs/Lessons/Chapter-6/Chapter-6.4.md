---
title: 6.4  Working with Forks and Pull Requests
---

When collaborating on repositories you don’t own, **forking** and **pull requests** (PRs) let you contribute safely and efficiently.

### Creating a Fork

1. On GitHub, go to the original repository.
2. Click **Fork** in the top-right corner.
3. GitHub creates a copy under your account.
4. Clone your fork locally:

   ```bash
   git clone git@github.com:USERNAME/FORKED-PROJECT.git
   cd FORKED-PROJECT
   ```

### Keeping Your Fork Up to Date

1. Add the original repository as an **upstream** remote:

   ```bash
   git remote add upstream https://github.com/ORIGINAL-USER/ORIGINAL-PROJECT.git
   ```
2. Verify remotes:

   ```bash
   git remote -v
   ```
3. Fetch and merge updates:

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

### Developing a Feature or Fix

1. Start from your updated main branch:

   ```bash
   git checkout main
   ```
2. Create and switch to a new branch:

   ```bash
   git checkout -b new-feature
   ```
3. Make your changes, then commit and push:

   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin new-feature
   ```

### Submitting a Pull Request

1. Go to your fork on GitHub.
2. Switch to your new branch (e.g., `new-feature`).
3. Click **Compare & pull request.**
4. Add a clear title and description.
5. Submit for review.

### Keeping Your Branch Clean (Optional)

1. Fetch the latest upstream changes:

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```
2. Rebase your branch:

   ```bash
   git checkout new-feature
   git rebase main
   ```
3. Push the updated branch:

   ```bash
   git push --force origin new-feature
   ```

### Reviewing and Merging Pull Requests (Repository Owner)

* Review PRs directly on the platform.
* If all checks pass, click **Merge pull request.**
* Optionally test locally before merging.

#### Checking Out a Pull Request Locally

```bash
# Fetch all pull requests
git fetch origin

# Checkout a specific PR by number
git checkout -b pr-42 pull/origin/42
```

#### Manual Merging (if needed)

```bash
git checkout main
git pull https://github.com/forkuser/forkedrepo.git new-feature
git merge new-feature
git push origin main
```

After merging, delete the feature branch:

```bash
git branch -d new-feature
```

---