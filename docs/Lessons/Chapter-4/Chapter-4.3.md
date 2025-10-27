---
title: 4.3 Creating a Conda Environment
---

Conda environments let you create isolated spaces for each project, preventing version conflicts between dependencies.

### Create a New Environment

To create an environment named `myenv` with the default Python version:

```bash
conda create --name myenv python
```

To specify a particular Python version (for example, Python 3.11):

```bash
conda create --name myenv python=3.11
```

### Activate the Environment

```bash
conda activate myenv
```

Once activated, any Conda command will apply only to this environment.

### Deactivate the Environment

```bash
conda deactivate
```

This returns you to the base Conda environment.

---