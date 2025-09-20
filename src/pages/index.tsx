/**
 * Linux-101 Homepage
 * Author: Krishna Teja Vedula
 */

import React, { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

/* ================================================================
   1. TERMINAL BANNER COMPONENT
   Simulates typing/deleting Linux commands with descriptions
   ================================================================ */
function TerminalWelcome() {
  // Command list shown in terminal loop
  const messages = useMemo(
    () => [
      { text: "echo 'Welcome to Linux-101!'" },
      { text: "ls        # List files and directories" },
      { text: "pwd       # Show current working directory" },
      { text: "cd ..     # Move up one directory" },
      { text: "mkdir dev # Create a new directory" },
      { text: "touch app.py  # Create a new empty file" },
      { text: "cp file1.txt backup/   # Copy files" },
      { text: "mv old.txt new.txt     # Move or rename files" },
      { text: "rm -r temp/            # Remove a directory" },
      { text: "ln -s target link      # Create symbolic link" },
      { text: "man ls   # Show manual page for 'ls'" },
      { text: "uname -r # Show Linux kernel version" },
      { text: "uptime   # System uptime summary" },
      { text: "htop     # Interactive process viewer" },
      { text: "conda --version  # Check Conda installation" },
      { text: "git status       # Show Git repository status" },
      { text: "code .           # Open VS Code in current folder" },
    ],
    []
  );

  // State
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Speed controls
  const typingSpeed = 60;
  const deletingSpeed = 60;
  const pauseTime = 5200;

  // Cursor blink effect
  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 600);
    return () => clearInterval(blink);
  }, []);

  // Typing & deleting effect
  useEffect(() => {
    const message = messages[index].text;

    if (!deleting && typed.length < message.length) {
      const t = setTimeout(
        () => setTyped(message.slice(0, typed.length + 1)),
        typingSpeed
      );
      return () => clearTimeout(t);
    }

    if (!deleting && typed.length === message.length) {
      const hold = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(hold);
    }

    if (deleting && typed.length > 0) {
      const d = setTimeout(
        () => setTyped(message.slice(0, typed.length - 1)),
        deletingSpeed
      );
      return () => clearTimeout(d);
    }

    if (deleting && typed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
    }
  }, [typed, deleting, index, messages]);

  return (
    <section className={clsx("hero", styles.terminalWrapper)}>
      {/* Add the Linux-101 title above the terminal */}
      <h2 className={styles.linuxTitle}>Linux-101</h2>

      <div
        className={styles.terminalWindow}
        role="region"
        aria-label="Terminal simulation"
      >
        <div className={clsx(styles.line, styles.command)}>
          <span className={styles.prompt}>user@linux:~$ </span>
          {typed}
          {cursorVisible && <span className={styles.cursor}>█</span>}
        </div>
      </div>

      {/* Call-to-action button */}
      <div className={styles.heroButton}>
        <Link
          className="button button--primary button--lg"
          to="/docs/Introduction"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

/* ================================================================
   2. PAGE LAYOUT
   Wraps hero banner + features inside Docusaurus Layout
   ================================================================ */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Linux-101: A step-by-step guide for beginners to learn Linux."
    >
      <TerminalWelcome />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
