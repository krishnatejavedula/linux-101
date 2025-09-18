---
title: 2.3 Managing Files and Directories
---

Create, edit, move, and delete files using these commands.

**Show Current Directory:**

```bash
pwd                  # Print working directory
```

**List Files:**

```bash
ls -l                # Detailed listing
ls -a                # Include hidden files
```

**Change Directory:**

```bash
cd Documents
cd ..                # Go up one level
cd ~                 # Go home
```

**Create Directories and Files:**

```bash
mkdir projects
nano notes.txt
vim script.sh
```

**Copy, Move, and Rename:**

```bash
cp file1.txt file2.txt
mv file.txt Documents/
mv old.txt newname.txt
```

**Remove Files and Directories:**

```bash
rm file.txt
rm -r folder/
```

**View File Contents:**

```bash
cat file.txt
less file.txt
head -n 10 file.txt
tail -f logfile.log
```

**Create Symbolic Links:**

A symbolic link (also known as a symlink) is a file that points to another file or directory. It's useful for creating shortcuts.

```bash
ln -s /path/to/original /path/to/link
```

Example:

```bash
ln -s /var/www/html /home/user/website
```

This command creates a symlink named `website` in the user's home directory that points to `/var/www/html`.


---
