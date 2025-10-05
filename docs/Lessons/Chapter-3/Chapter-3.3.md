---
title: 3.3 Vim Configuration and Plugins (Optional)
---

By default, Vim works well for editing text, but you can customize it extensively through a configuration file called **`.vimrc`** (stored in your home directory: `~/.vimrc`). This file lets you define preferences, key mappings, and load plugins.

### Basic `.vimrc` Example

Here’s a simple beginner-friendly configuration:

```vim
" Enable line numbers
set number

" Highlight search results
set hlsearch
set incsearch

" Use spaces instead of tabs
set expandtab
set tabstop=4
set shiftwidth=4

" Enable syntax highlighting
syntax on

" Enable mouse support
set mouse=a
```

Save this as `~/.vimrc` to enable it automatically each time Vim starts.

---

### Plugin Management with vim-plug

Vim doesn’t come with a plugin manager by default. A popular choice is **vim-plug**.

**Install vim-plug**

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

**Example with Plugins in `.vimrc`**

```vim
call plug#begin('~/.vim/plugged')

" File explorer
Plug 'preservim/nerdtree'

" Fuzzy finder
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }

" Syntax highlighting & color schemes
Plug 'morhetz/gruvbox'

call plug#end()
```

After editing `.vimrc`, open Vim and run:

```
:PlugInstall
```

to install the plugins.

---

### Recommended Plugins

* **NERDTree** → File browsing
* **fzf** → Fuzzy finding files and commands
* **vim-airline** → Improved status bar
* **tpope/vim-surround** → Easy manipulation of surrounding characters
* **gruvbox**, **dracula** → Popular color schemes

For more plugins, visit **[Vim Awesome](https://vimawesome.com)**.

---