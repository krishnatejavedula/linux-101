---
title: 2.7 Practice Exercises - Basic Linux Commands
---

## 1. Exploring and Navigating

* **Find out which directory you are in**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  pwd
  ```

  </details>  

* **List everything in your current directory**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  ls -l
  ```

  </details>  

* **Move into your home directory, then into the Documents folder (create one first if it doesn’t exist)**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  mkdir -p ~/Documents
  cd ~/Documents
  ```

  </details>  

---

## 2. Working with Directories

* **Inside Documents, create a new folder called workshop**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  mkdir workshop
  ```

  </details>  

* **Go into workshop and make three subfolders: notes, data, and scripts**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  cd workshop
  mkdir notes data scripts
  ```

  </details>  

* **Verify the structure**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  ls -R
  ```

  </details>  

---

## 3. Creating and Viewing Files

* **Inside notes/, create a file day1.txt and add some text with nano**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  nano notes/day1.txt
  ```

  </details>  

* **Display the file’s content**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  cat notes/day1.txt
  ```

  </details>  

* **Show just the first and last few lines of the file**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  head notes/day1.txt
  tail notes/day1.txt
  ```

  </details>  

---

## 4. Copying, Moving, and Renaming

* **Copy day1.txt into the data/ folder**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  cp notes/day1.txt data/
  ```

  </details>  

* **Rename the copied file to backup.txt**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  mv data/day1.txt data/backup.txt
  ```

  </details>  

* **Move the original day1.txt into the scripts/ folder**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  mv notes/day1.txt scripts/
  ```

  </details>  

---

## 5. Deleting Safely

* **Create an empty file called temp.txt in workshop/**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  touch temp.txt
  ```

  </details>  

* **Delete it**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  rm temp.txt
  ```

  </details>  

* **Try removing a whole directory (scripts/)**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  rm -r scripts
  ```

  </details>  

⚠️ Always double-check the path before using `rm -r`!

---

## 6. Searching and Filtering

* **Make a text file with several lines**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  echo -e "apple\nbanana\ncherry\napricot\nblueberry" > fruits.txt
  ```

  </details>  

* **Find all lines containing "ap"**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  grep "ap" fruits.txt
  ```

  </details>  

* **Count how many lines are in the file**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  wc -l fruits.txt
  ```

  </details>  

---

## 7. Redirecting and Piping

* **Save a directory listing into a file**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  ls -l > listing.txt
  ```

  </details>  

* **Append the output of date into the same file**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  date >> listing.txt
  ```

  </details>  

* **Chain commands: list files and immediately search for "txt"**:

  <details>
  <summary>Show Answer</summary>  

  ```bash
  ls | grep txt
  ```

  </details>  

---

## 8. (For WSL Users) Creating Symbolic Links


**Create a symbolic link from your Windows Downloads folder to the WSL downloads directory**:

* **Create the link Downloads/Win-Downloads** in WSL:
  <details>
  <summary>Show Answer</summary>  

  ```bash
  ln -s /mnt/c/Users/YourWindowsUsername/Downloads ~/Downloads/Win-Downloads
  ```

  </details>  
   
---

## 9. Bonus Challenge: Mini Project

1. Create a folder `project`.
2. Inside it, create a `src` folder and a `README.txt`.
3. Write a short note in `README.txt` with `nano`.
4. Copy `README.txt` into `src/` and rename it `notes.txt`.
5. Use `grep` to search for a word inside `notes.txt`.
6. Redirect the search results into a new file `results.txt`.
7. Finally, remove the entire `project` folder.

<details>
<summary>Show Answer</summary>  

```bash
mkdir project
cd project
mkdir src
nano README.txt
cp README.txt src/notes.txt
grep "word" src/notes.txt > results.txt
cd ..
rm -r project
```

</details>  

---