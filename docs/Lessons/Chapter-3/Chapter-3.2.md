---
title: 3.2 Getting Started with Vim
---

Vim is a *modal text editor* — the same keys perform different actions depending on the **mode**. Once you understand this idea, Vim becomes a powerful and efficient tool for editing.

---

### Basic Commands

* Enter insert mode: `i`
* Exit insert mode: `Esc`
* Save file: `:w`
* Quit: `:q`
* Save and quit: `:wq`
* Quit without saving: `:q!`

---

### Navigation

* Left: `h`
* Down: `j`
* Up: `k`
* Right: `l`
* Search: `/word`

---

### Modes in Vim

| Mode                  | Description                                                           | How to Enter                                                           | How to Exit                                  |
| --------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------- |
| **Normal Mode**       | Default mode for navigation and commands (moving, deleting, copying). | Press `Esc` from any other mode.                                       | —                                            |
| **Insert Mode**       | For typing and editing text directly.                                 | Press `i` from Normal mode.                                            | Press `Esc` to return to Normal mode.        |
| **Visual Mode**       | Used for selecting and manipulating blocks of text.                   | Press `v` (character-wise), `V` (line-wise), or `Ctrl+v` (block-wise). | Press `Esc` to exit.                         |
| **Command-Line Mode** | Used for running commands like saving (`:w`) or quitting (`:q`).      | Press `:` from Normal mode.                                            | Press `Enter` to execute or `Esc` to cancel. |
| **Replace Mode**      | Overwrites text as you type.                                          | Press `R` from Normal mode.                                            | Press `Esc` to stop replacing.               |

**Tip:** You’ll spend most of your time switching between **Normal** and **Insert** modes. Master those first before exploring others.

---

### Editing, Copying, and Deleting Text

In Normal mode, Vim uses single-letter commands for text manipulation.
Here are the most common ones:

**Deleting**

* `x` → delete the character under the cursor
* `dd` → delete the current line
* `dw` → delete from the cursor to the end of the word
* `d$` → delete from the cursor to the end of the line

**Yanking (Copying)**

* `yy` → yank (copy) the current line
* `yw` → yank from the cursor to the end of the word
* `y$` → yank from the cursor to the end of the line

**Pasting**

* `p` → paste *after* the cursor
* `P` → paste *before* the cursor

**Undo / Redo**

* `u` → undo last change
* `Ctrl+r` → redo the undone change

**Pro tip:**
Almost every Vim command follows this pattern:
→ **[operator] + [motion]**
Example: `d2w` means “delete two words”.

---

### The Vim Status Bar

The line at the bottom of the Vim window — called the **status line** — provides information about your current editing session, such as the filename, line number, and file type.

Example:

```
"main.py" 10L, 150C
```

* `main.py` → name of the file
* `10L` → total lines
* `150C` → total characters

---

### Enhancing the Status Bar with vim-airline

For a cleaner, more informative, and visually appealing status bar, you can use the **vim-airline** plugin. It replaces the default bar with one that shows the current mode, file info, Git branch, and more — all in a lightweight format.

**Install vim-airline (using vim-plug):**

```vim
call plug#begin('~/.vim/plugged')
Plug 'vim-airline/vim-airline'
call plug#end()
```

Then, inside Vim, run:

```
:PlugInstall
```

**Features of vim-airline:**

* Displays current **mode**, **file type**, and **Git branch**
* Shows **cursor position**, **line/column numbers**, and **file encoding**
* Works well with most color schemes (e.g., Dracula, Gruvbox)
* Supports optional extensions for powerline fonts and themes

Once installed, the enhanced status bar appears automatically — no configuration needed.

---

## Learn with vimtutor

Vim comes with a built-in interactive tutorial. Run:

```bash
vimtutor
```

It takes about 30 minutes and walks you through the basics step by step — an ideal way to build muscle memory.

---