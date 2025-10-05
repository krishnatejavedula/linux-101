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

" Dracula color scheme
Plug 'dracula/vim', { 'as': 'dracula' }

" Nord color scheme
Plug 'arcticicestudio/nord-vim'

" Enhanced status bar
Plug 'vim-airline/vim-airline'

call plug#end()
```

After editing `.vimrc`, open Vim and run:

```
:PlugInstall
```

to install the plugins.

For the full documentation and troubleshooting, always refer to: https://github.com/junegunn/vim-plug

---

### Recommended Plugins

* **NERDTree** → File browsing
* **fzf** → Fuzzy finding files and commands
* **vim-airline** → Improved status bar
* **vim-surround** → Easy manipulation of surrounding characters like brackets
* **gruvbox**, **dracula** → Popular color schemes

For more plugins, visit **[Vim Awesome](https://vimawesome.com)**.

---