---
title: 6.2 Getting Started with GitHub
---

### Creating a GitHub Account

1. Visit [github.com](https://github.com).
2. Click **Sign up** in the top-right corner.
3. Enter your username, email, and password.
4. Verify your email address to activate your account.


### Configuring Git Account Locally (First-Time Setup)

After installing git locally, set your name and email (these appear in your commits):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Verify your configuration:

```bash
git config --list
```

### Creating a New Repository

1. Click the **+ icon → New repository**.
2. Enter:

   * **Repository name** (e.g., `my-first-repo`)
   * **Description** (optional)
   * Choose **Public** or **Private** visibility
3. (Optional) Check **“Initialize this repository with a README.”**
4. Click **Create repository.**

### Adding Files

#### Using GitHub Web

1. Open your repository.
2. Click **Add file → Upload files**.
3. Drag and drop or choose files manually.
4. Write a commit message (e.g., “Add initial files”).
5. Click **Commit changes.**

#### Using the Command Line

```bash
git clone <repo-url>
cd <repo-name>

echo "Hello GitHub" > hello.txt
git add .
git commit -m "Add hello.txt"
git push origin main
```
