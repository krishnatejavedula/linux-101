---
title: 4.6 Best Practices When Using Conda
---

These are some best practices to help you avoid common issues and maintain a stable, organized development setup.

### Use Conda Environments Instead of System Python

Always create and use Conda environments for your projects instead of installing packages directly into your system’s Python installation.
The system Python installation is often used by your operating system and core tools. Modifying it can:

* Break system utilities or scripts.
* Cause version conflicts between packages.
* Make it difficult to manage dependencies safely.

By using Conda environments:

* Each project’s dependencies are isolated.
* Your system remains clean and unaffected.
* You can safely test or upgrade packages without risk.

Each environment is self-contained and can be deleted or recreated easily, without affecting your operating system or other projects.

---

### General Conda Best Practices

* **Create a new environment for each project.**
  Keeps dependencies isolated and easier to manage.

* **Install only the packages you need.**
  Smaller environments perform better and reduce conflicts.

* **Use `conda install` first, then `pip` if necessary.**
  Conda ensures compatibility for compiled packages; pip can be used inside the environment for packages not available in Conda repositories.

* **Avoid modifying the `base` environment.**
  Use it only for Conda management tasks such as creating or updating environments.

* **Keep environments up to date.**
  Regularly run `conda update --all` for security and compatibility updates.

* **Export environments for sharing or backup.**

  ```bash
  conda env export > environment.yml
  ```

  This allows others to recreate the same setup easily.

* **Prefer the conda-forge channel for consistency and reliability.**

  ```bash
  conda config --add channels conda-forge
  conda config --set channel_priority strict
  ```

---

# Additional Resources

* [Conda Documentation](https://docs.conda.io/) – Official Conda guide and reference.
* [Conda-Forge](https://conda-forge.org/) – Community-driven repository and installation resources.
* [Anaconda Package Search](https://anaconda.org/search) – Find packages and installation commands.
* [Miniforge GitHub Repository](https://github.com/conda-forge/miniforge) – Latest releases and setup instructions.

---