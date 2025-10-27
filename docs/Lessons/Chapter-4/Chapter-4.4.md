---
title: 4.4 Installing Packages
---

You can install packages from Conda’s repositories or from the **conda-forge** channel.
For packages not available through Conda, you can safely use **pip** inside a Conda environment.

### Install a Single Package

```bash
conda install numpy
```

### Install Multiple Packages

```bash
conda install numpy pandas matplotlib
```

### Install from Conda-Forge

```bash
conda install -c conda-forge scikit-learn
```

### Install pip Inside a Conda Environment

```bash
conda install pip
```

After this, you can use pip within that environment to install packages not available on Conda:

```bash
pip install some-package
```

This is the recommended way to use pip — only inside an active Conda environment.
It keeps your global Python setup clean and ensures all dependencies stay isolated.

---

### Finding Package Names and Installation Commands

Sometimes the package name on Conda differs from its PyPI or GitHub name.
To find the correct install command:

* Search online using:

  ```
  conda <package-name>
  ```

  Example:

  ```
  conda tensorflow
  ```
* Use the **[Anaconda package search](https://anaconda.org/search)** or **[Conda-Forge package search](https://conda-forge.org/packages/)**.

These resources show exact installation commands and supported versions.
This is especially useful when you are not sure if a package exists in Conda or need to confirm the correct channel (for example, `-c conda-forge`).

---