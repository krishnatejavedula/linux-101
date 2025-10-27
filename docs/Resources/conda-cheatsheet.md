# Conda Cheatsheet

A quick reference guide to the most commonly used Conda commands.

---

## **Setup and Configuration**

| Command                                      | Description                                               |
| -------------------------------------------- | --------------------------------------------------------- |
| `conda --version`                            | Check the installed Conda version.                        |
| `conda info`                                 | Display general information about the Conda installation. |
| `conda config --show`                        | View Conda configuration settings.                        |
| `conda config --add channels conda-forge`    | Add the conda-forge channel.                              |
| `conda config --set channel_priority strict` | Prioritize specified channels strictly.                   |
| `conda update conda`                         | Update Conda to the latest version.                       |

---

## **Environment Management**

| Command                                 | Description                                               |
| --------------------------------------- | --------------------------------------------------------- |
| `conda create --name myenv`             | Create a new environment with the default Python version. |
| `conda create --name myenv python=3.11` | Create a new environment with a specific Python version.  |
| `conda activate myenv`                  | Activate an existing environment.                         |
| `conda deactivate`                      | Deactivate the current environment.                       |
| `conda env list`                        | List all available environments.                          |
| `conda remove -n myenv --all`           | Remove an environment and all its packages.               |

---

## **Package Management**

| Command                                  | Description                                             |
| ---------------------------------------- | ------------------------------------------------------- |
| `conda search <package>`                 | Search for a package available in Conda channels.       |
| `conda install <package>`                | Install a package into the current environment.         |
| `conda install -c conda-forge <package>` | Install a package from the conda-forge channel.         |
| `conda update <package>`                 | Update a specific package.                              |
| `conda update --all`                     | Update all packages in the current environment.         |
| `conda remove <package>`                 | Uninstall a package from the current environment.       |
| `conda list`                             | List all installed packages in the current environment. |

---

## **Using pip Within Conda Environments**

| Command                 | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| `conda install pip`     | Install pip inside a Conda environment.                   |
| `pip install <package>` | Install a package from PyPI (inside a Conda environment). |
| `pip list`              | List pip-installed packages in the environment.           |

---

## **Exporting and Recreating Environments**

| Command                                  | Description                                    |
| ---------------------------------------- | ---------------------------------------------- |
| `conda env export > environment.yml`     | Export the current environment to a YAML file. |
| `conda env create -f environment.yml`    | Create a new environment from a YAML file.     |
| `conda list --export > requirements.txt` | Export package list in a pip-style format.     |
| `conda install --file requirements.txt`  | Install packages from a requirements file.     |

---

## **Cleaning and Maintenance**

| Command                     | Description                                        |
| --------------------------- | -------------------------------------------------- |
| `conda clean --all -y`      | Remove cached packages, logs, and temporary files. |
| `conda clean --packages`    | Remove unused or outdated packages.                |
| `conda clean --tarballs`    | Delete cached package tarballs.                    |
| `conda clean --index-cache` | Clear the local index cache.                       |

---

## **Troubleshooting and Info Commands**

| Command                                        | Description                                                             |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| `conda info --envs`                            | Display a list of environments with their locations.                    |
| `conda info --packages`                        | Show information about installed packages.                              |
| `conda search --channel conda-forge <package>` | Search for a package within a specific channel.                         |
| `conda doctor`                                 | Diagnose common Conda environment issues (available in newer versions). |
| `conda run -n myenv <command>`                 | Run a command inside an environment without activating it.              |

---

## **Best Practices**

| Command / Tip                               | Description                                      |
| ------------------------------------------- | ------------------------------------------------ |
| Use `conda-forge` as your main channel      | Provides the most up-to-date community packages. |
| Always create a new environment per project | Keeps dependencies isolated and manageable.      |
| Use `conda install` before `pip install`    | Ensures compatibility between compiled packages. |
| Regularly run `conda update --all`          | Keeps environments secure and current.           |
| Use `conda clean --all` periodically        | Frees disk space and removes unused caches.      |

---

For more information and advanced usage, visit the official documentation:
[Conda Documentation](https://docs.conda.io/) | [Conda-Forge](https://conda-forge.org/)

---