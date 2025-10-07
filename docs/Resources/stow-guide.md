# Managing Dotfiles with GNU Stow

### Overview

GNU Stow is a symlink manager that helps you organize and manage configuration files (dotfiles) from a central repository.
It keeps your home directory clean and makes it easy to version-control your setup.

---

### Folder Structure

Your dotfiles repository should mirror your home directory using a `home` subfolder:

```
~/dotfiles/
└── home/
    ├── .bashrc
    ├── .vimrc
    └── .config/
        └── nvim/
            └── init.vim
```

* The `home/` directory mirrors your actual home (`~`) layout.
* Place files exactly as they appear in `~`.

  * For example:

    * `.bashrc` → `home/.bashrc`
    * `.config/nvim/init.vim` → `home/.config/nvim/init.vim`

---

### Linking Dotfiles with Stow

From inside your dotfiles directory, run:

```bash
cd ~/dotfiles
stow -v --adopt home/
```

This will:

* Create symlinks from `~/dotfiles/home/` to your real home directory (`~`).
* Move any existing dotfiles into `~/dotfiles/home/` before linking (using the `--adopt` flag).

You can verify that the symlinks were created correctly with:

```bash
ls -la ~
```

---

### Updating or Adding New Dotfiles

Whenever you add or modify files in your dotfiles repository, restow to update the links:

```bash
stow -v --adopt --restow home/
```

This ensures all symlinks remain up to date and any new configurations are linked properly.

---
