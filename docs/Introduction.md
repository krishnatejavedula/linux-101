---
sidebar_position: 1
---

# INTRODUCTION

This workshop is designed to provide participants with a practical introduction to Linux and its use in modern development workflows. The sessions are structured to gradually build confidence in working with Linux systems—starting from installation and basic commands, moving through text editing and development environment setup using VScode and Conda, and undersatnding version control with Git.

Rather than focusing heavily on history or theory, the workshop emphasizes hands-on practice. Participants will learn how to install Linux both on dedicated systems and within Windows using the Windows Subsystem for Linux (WSL), navigate the command line, configure essential tools, and apply version control in real-world scenarios. By the end of the workshop, learners will be comfortable using Linux as a daily driver for development tasks and collaborating on projects effectively.

This plan covers:

* Understanding Linux distributions (Ubuntu, Fedora, Debian, etc.) and installation methods.
* Command line navigation and basic system operations.
* Using editors like Vim and VS Code.
* Setting up development environments with Git and Conda.
* Managing version control with Git, from basics to advanced collaboration.

---

# Requirements

### Technical Requirements

Participants should have access to:

* A computer with at least **8 GB RAM** and **20 GB free storage** (for virtual machines or dual boot).
* Administrative rights to install software.
* A stable internet connection (for package downloads, GitHub/GitLab access, and cloud sync).
* Virtualization support enabled in BIOS/UEFI if using VirtualBox/VMware.

### Software Requirements

Before the workshop, participants should install or have access to:

* **VirtualBox** (or VMware) for running Linux virtually.
* **Windows Subsystem for Linux (WSL)** (for Windows users who prefer integration over virtualization).
* **Git** (latest stable version).
* **VS Code** (with internet access to install extensions).
* **Conda/Miniconda** (for environment management).

### Knowledge Requirements

No prior Linux experience is required. Basic familiarity with using a computer and navigating file systems (Windows or macOS) will be helpful. Some sessions will touch on programming-related workflows, but deep programming knowledge is not necessary.


## **Lessons**  
1. **[Chapter 1: Getting Started with Linux](Lessons/Chapter-1/Chapter-1.1.md)** – Overview, distributions, installation methods, and package management.  
2. **[Chapter 2: Command Line Basics](Lessons/Chapter-2/Chapter-2.1.md)** – Navigating the Linux file system, managing files, and understanding core command-line concepts.  
3. **[Chapter 3: Text Editors and Development Tools](Lessons/Chapter-3/Chapter-3.1.md)** – Learn how to install, use, and customize Vim and VS Code for everyday development.  
4. **[Chapter 4: Managing Python Environments with Conda](Lessons/Chapter-4/Chapter-4.1.md)** – Install Conda using Miniforge, create and manage environments, install packages, and follow best practices for clean, reproducible setups.  
5. **More lessons coming soon...**

## **Practice Exercises**  
1. **[Practice Exercise 1: Linux and Command Line Fundamentals](Practice-Exercises/Practice-Exercise-1.md)** – Apply concepts from the first three chapters to reinforce your understanding of Linux basics, command-line operations, and text editor usage.  
2. **More exercises coming soon...**

## **Additional Resources** 
- **[Basic Linux Cheatsheet](Resources/basic-linux-cheatsheet.md)** - A quick reference guide to essential Linux file management, text editing, and package management commands.
- **[Git Cheatsheet](Resources/git-cheatsheet.md)** – A quick reference guide to essential Git commands. 
- **[Conda Cheatsheet](Resources/conda-cheatsheet.md)** - A quick reference guide to essential conda commands.
- **[Homebrew Guide](Resources/homebrew-guide.md)** – Installing Homebrew on macOS and managing developer tools.
- **[Flatpak Guide](Resources/flatpak-guide.md)** – Installing Flatpak on Linux and managing GUI applications.
- **[WSL Guide](Resources/wsl-guide.md)** – Installing and configuring Windows Subsystem for Linux (WSL).
- **[Stow Guide](Resources/stow-guide.md)** – Managing dotfiles using GNU Stow for a clean, version-controlled setup.