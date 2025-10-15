---
title: Practice Exercises – 1
---

## Overview
Complete these exercises to reinforce what you have learned in Sessions 1–3. Work at your own pace, and use `man` pages or reliable online documentation when you need clarification.

**Safety Tip:** Be careful with `rm` — once deleted, files do not go to trash. Always double-check with `ls` before removing anything.

---

## Part 1: Directory Navigation & File Management

### Exercise 1.1 – Create a Project Structure
Navigate to your home directory and create the following directory structure:

```
~/practice/
├── documents/
│   ├── notes/
│   └── reports/
├── scripts/
└── logs/
```

**Hints**
- Go to your home directory: `cd ~`  
- Create nested directories: `mkdir -p parent/child/grandchild`  
- Check your location: `pwd`  
- List contents: `ls` or `ls -la`  
- Display structure recursively: `ls -R` (use `tree` if installed)

<details>
<summary>Show Solution</summary>

```bash
cd ~
mkdir -p practice/documents/{notes,reports}
mkdir -p practice/scripts
mkdir -p practice/logs

ls -R practice/
# or: tree practice/
```
</details>

**Something to Try**

* Create the same structure using a simple Bash script to automate setup.
* Add an optional `README.txt` file in each top-level folder describing its purpose.

---

### Exercise 1.2 – File Operations

1. Create five empty files in `~/practice/documents/notes/` named `note1.txt` through `note5.txt`.
2. Copy all files from `notes/` to `reports/`.
3. Rename `note1.txt` to `important.txt` in `reports/`.
4. Create a symbolic (soft) link `quick-access` in your home directory pointing to `~/practice/documents/notes/`.
5. Create a hard link to `important.txt` named `important-backup.txt` in the same directory.
6. List all files with detailed information and observe the link counts.

**Hints**

* Create files: `touch file1.txt file2.txt …`
* Copy: `cp source destination` or `cp ~/path/source/* ~/path/destination/`
* Rename/move: `mv old new`
* Symbolic link: `ln -s target linkname`
* Hard link: `ln target linkname`
* List detailed view: `ls -lah`

<details>
<summary>Show Solution</summary>

```bash
cd ~/practice/documents/notes
touch note1.txt note2.txt note3.txt note4.txt note5.txt
cp * ../reports/
cd ../reports
mv note1.txt important.txt
cd ~
ln -s ~/practice/documents/notes quick-access
cd ~/practice/documents/reports
ln important.txt important-backup.txt
ls -lah
```

</details>

**Something to Try**

* Create a script to automate copying and renaming of files.
* Add a timestamp to renamed files for version tracking.
* Try removing and recreating the symbolic link to see how it behaves when the target moves.

---

### Exercise 1.3 – File Content and System Information

1. Create a file `system-info.txt` in `~/practice/documents/notes/`.
2. Add a short description manually.
3. Append output from system commands.
4. View the file contents using different tools.

**Hints**

* Write interactively: `cat > filename.txt` (press Ctrl + D to save)
* Append output: `echo text >> file` or `command >> file`
* View files: `cat`, `less`, `head`, `tail`
* Useful commands:

  * `df -h` – disk usage
  * `du -sh ~/practice` – directory size
  * `whoami` – username
  * `hostname` – system name

<details>
<summary>Show Solution</summary>

```bash
cat > ~/practice/documents/notes/system-info.txt
My System Information
=====================
Details about my system.
# Press Ctrl+D to save

echo "Username: $(whoami)" >> ~/practice/documents/notes/system-info.txt
echo "Hostname: $(hostname)" >> ~/practice/documents/notes/system-info.txt
echo "" >> ~/practice/documents/notes/system-info.txt
echo "Disk Usage:" >> ~/practice/documents/notes/system-info.txt
df -h >> ~/practice/documents/notes/system-info.txt
echo "" >> ~/practice/documents/notes/system-info.txt
echo "Practice folder size:" >> ~/practice/documents/notes/system-info.txt
du -sh ~/practice >> ~/practice/documents/notes/system-info.txt
cat ~/practice/documents/notes/system-info.txt
```

</details>

**Something to Try**

* Add more system information, such as OS version (`uname -a`) or uptime (`uptime -p`).
* Use formatted section headers to make the report easier to read.
* Redirect the output to a dated file (e.g., `system-info_$(date +%F).txt`).

---

## Part 2: Shell Scripting Basics

### Exercise 2.1 – Hello World Script

Create `hello.sh` in `~/practice/scripts/`.

**Requirements**

* Print “Hello, World!”
* Print today’s date in a readable format
* Print your username

<details>
<summary>Show Solution</summary>

```bash
#!/bin/bash
# Hello World script
echo "Hello, World!"
echo "Today is $(date '+%A, %B %d, %Y')"
echo "My username is $(whoami)"
```

</details>

**Something to Try**

* Add a blank line or separator between outputs for readability.
* Allow the user to input their name and greet them personally.
* Save the output to a log file in `~/practice/logs/hello.log`.

---

### Exercise 2.2 – Simple Greeting Script

Create `greeting.sh` that prints a personalized greeting.

**Requirements**

* Greeting with username
* Current date and time
* Home directory path

<details>
<summary>Show Solution</summary>

```bash
#!/bin/bash
# Simple greeting
echo "Hello, $(whoami)!"
echo "Today is $(date '+%A, %B %d, %Y')"
echo "The time is $(date '+%H:%M')"
echo "Your home directory is $HOME"
```

</details>

**Something to Try**

* Add system uptime (`uptime -p`) or current shell (`$SHELL`) to the output.
* Let the user pass a custom message as a command-line argument.
* Format the output neatly using line separators or indentation.

---

### Exercise 2.3 – Folder Backup Script

Create `backup.sh` in `~/practice/scripts/`.

**Requirements**

* Copy `~/practice/documents` to a new folder named with today’s date
* Print the full backup path after completion

<details>
<summary>Show Solution</summary>

```bash
#!/bin/bash
# Backup script with date-based folder name
cp -r ~/practice/documents ~/practice/documents_backup_$(date +%F)
echo "Backup complete: ~/practice/documents_backup_$(date +%F)"
```

</details>

**Something to Try**

* Compress the backup into a `.tar.gz` archive.
* Check whether the destination already exists and skip or overwrite based on input.
* Log backup activity with timestamps in a file (`backup.log`).

---

### Exercise 2.4 – File Counter Script

Create `count-files.sh` that counts files in a directory.

**Requirements**

* Display directory being checked
* Show total file count
* Include date and time of check

<details>
<summary>Show Solution</summary>

```bash
#!/bin/bash
# Count files in a directory
echo "Counting files in ~/practice/documents/notes"
echo "Number of files: $(ls -1 ~/practice/documents/notes | wc -l)"
echo "Checked on $(date '+%Y-%m-%d at %H:%M')"
```

</details>

**Something to Try**

* Accept a directory as an argument (`$1`) instead of hardcoding the path.
* Count only specific file types (e.g., `.txt` files).
* Extend the script to display both file and directory counts separately.

---

## Part 3: Vim Mastery

### Exercise 3.1 – Navigation

1. Create `vim-practice.txt` with approximately 50 lines.
2. Practice motion commands (`gg`, `G`, `w`, `b`, `$`, `0`, `/word`, `n`, `N`, `:25`).

**Something to Try**

* Experiment with searching and replacing across multiple lines.
* Use marks (`ma`, `'a`) to jump quickly between sections.

---

### Exercise 3.2 – Editing

Create `shopping-list.txt` and:

* Insert items in Insert mode
* Delete lines with `dd`
* Undo (`u`) / redo (`Ctrl + r`)
* Copy and paste (`yy`, `p`)
* Replace a word (`cw`)
* Delete to end of line (`D`)
* Save and quit (`:wq`)

**Something to Try**

* Create numbered lists or aligned columns using Visual Block mode (`Ctrl + v`).
* Try recording a macro (`q` and `@`) to automate repetitive edits.

---

### Exercise 3.3 – Note-Taking

Create `~/practice/documents/notes/linux-notes.txt` and record:

* A summary of what you learned
* Favorite commands
* Questions or unclear topics

Practice Visual mode (`v`, `V`), multi-line delete (`5dd`), and global replace (`:%s/old/new/g`).
After saving, open the same file in VS Code to compare editors.

**Something to Try**

* Configure a `.vimrc` file with syntax highlighting and line numbers.
* Try folding sections (`zf` / `zo`) for long notes.

---

## Part 4: VS Code Mastery

### Exercise 4.1 – Markdown Document

Create `~/practice/documents/linux-guide.md` and include headings, lists, code blocks, links, images, and tables.
Preview with **Ctrl + Shift + V**.
Recommended extension: *Markdown All in One.*

**Something to Try**

* Add a table of contents using Markdown extensions.
* Include command examples with syntax highlighting.
* Export your Markdown file as a PDF for sharing.

---

### Exercise 4.2 – LaTeX Document

Create `~/practice/documents/report.tex`.

Use the *LaTeX Workshop* extension and a local TeX distribution.

```latex
\documentclass{article}
\usepackage[utf8]{inputenc}

\title{My Linux Journey}
\author{Your Name}
\date{\today}

\begin{document}
\maketitle
\section{Introduction}
Why you are learning Linux.

\section{Key Concepts}
\begin{itemize}
\item File system hierarchy
\item Command line basics
\item Package management
\end{itemize}

\section{Conclusion}
Your reflections.

\end{document}
```

Add a table (`tabular`) and a formula (`$E = mc^2$`), then compile to PDF.

**Something to Try**

* Add a title page or abstract section.
* Include figures, references, or footnotes.
* Learn to use the `minted` package for formatted code snippets.

---

### Exercise 4.3 – Terminal Integration

Open the integrated terminal (**Ctrl + `**) and:

* Split panes
* Run your scripts
* Navigate your project
* Edit a file in the terminal using `vim` or `nano`

**Something to Try**

* Set up a custom keybinding for quick terminal access.

---

### Exercise 4.4 – Workspace Setup

Open `~/practice/` in VS Code and adjust:

* Default shell and font
* Auto-save behavior
  Install extensions and themese specific to the lanugauges you are working on.
  Save the configuration as `practice.code-workspace`.

**Something to Try**

* Create workspace-specific settings for indentation and tab width.
* Add launch configurations for future Python or shell scripts.

---

## Checklist

- [ ] Directory structure created
- [ ] Scripts (`hello.sh`, `greeting.sh`, `backup.sh`, `count-files.sh`) work correctly
- [ ] Comfortable navigating and editing in Vim
- [ ] Markdown document previewed in VS Code
- [ ] LaTeX document compiled to PDF
- [ ] Practiced symbolic and hard links
- [ ] Used `man` pages to learn at least three new commands

---

## Resources and Tips

**Command Reference**

* `man <command>` – manual pages
* `<command> --help` – quick help
* `history` – view previous commands
* `Ctrl + R` – search command history
* Tab – auto-complete

**Vim Reference**

* `i` – insert mode
* `Esc` – normal mode
* `:w` – save
* `:q` – quit
* `u` – undo
* `Ctrl + r` – redo

**Practice Tips:**
1. Don't rush - focus on understanding
2. Make mistakes - that's how you learn
3. Use `man` pages frequently
4. Keep notes on commands you find useful
5. Try to avoid using the mouse in Vim
6. Experiment with commands in a safe directory

**Questions for Next Session:**
Keep a list of questions or problems you encountered. We'll address them when we reconvene!

---

Good luck and happy learning!
````
