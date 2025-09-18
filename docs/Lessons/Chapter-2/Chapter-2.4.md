---
title: 2.4 Shell, Environment, and I/O Basics
---

**The Shell:**

The shell interprets commands, often using **bash**.

- Structure: `command [options] [arguments]`
- Example: `ls -l /home`

**Environment Variables:**

```bash
echo $HOME
echo $PATH
printenv
```

`PATH` determines where the shell looks for commands.

**Input/Output:**

- `stdout` → Normal output
- `stderr` → Errors
- `stdin` → Input

**Redirecting & Piping:**

```bash
ls > files.txt         # Redirect output
ls /bad 2> errors.txt  # Redirect errors
ls | grep ".txt"       # Pipe into another command
```

---