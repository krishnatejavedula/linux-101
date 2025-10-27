---
title: 4.4 Installing Packages
---

You can install packages from Conda’s repositories or from the **conda-forge** channel.  
For packages not available through Conda, you can safely use **pip** inside a Conda environment.

### Install a Single Package

```bash
conda install numpy
````

### Install Multiple Packages

```bash
conda install numpy pandas matplotlib
```

### Install a Specific Version of a Package

If you need a particular version of a package, specify it after the package name:

```bash
conda install numpy=1.26
```

You can also combine version specifications when installing multiple packages:

```bash
conda install pandas=2.2 matplotlib=3.8
```

---

### Install from Conda-Forge

```bash
conda install -c conda-forge scikit-learn
```

---

### Install pip Inside a Conda Environment

```bash
conda install pip
```

After this, you can use pip within that environment to install packages not available on Conda:

```bash
pip install some-package
```

> 💡 It’s recommended to use pip **only inside an active Conda environment**.
> This keeps your global Python setup clean and ensures all dependencies remain isolated.

---

### Finding Package Names and Installation Commands

Sometimes the package name on Conda differs from its PyPI or GitHub name.
To find the correct installation command:

* Search online using:

  ```bash
  conda search <package-name>
  ```

  Example:

  ```bash
  conda search tensorflow
  ```
* Or use:

  * **[Anaconda package search](https://anaconda.org/search)**
  * **[Conda-Forge package search](https://conda-forge.org/packages/)**

These resources show exact installation commands, available versions, and the correct channels (for example, `-c conda-forge`).

---