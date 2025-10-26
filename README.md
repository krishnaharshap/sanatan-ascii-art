# Sanatana ASCII Art Gallery

## **Repository Name**: `sanatana-ascii-art`

## Project Overview  
This project hosts a curated collection of original ASCII-art images inspired by Sanātan Dharma (Hindu tradition) — categorized under **Deities**, **Symbols**, and **Graphics**. Users can view the art in a slideshow format and copy the ASCII art text for their own use.

### Features  
- Static HTML + CSS + JavaScript slideshow UI  
- Copy-to-clipboard functionality for each ASCII art item  
- Categorised content folders (`ascii-art/Deities`, `ascii-art/Symbols`, `ascii-art/Graphics`)  
- Fully hosted for free using GitHub Pages  
- Automated validation and UI testing support (for QA/SDET demonstration)

### Folder Structure  
sanatana-ascii-art/
|   .gitignore
|   git-commands.txt
|   README.md
|   slideshow.html
|
+---ascii-art
|   +---Deities
|   |       ganesha.txt
|   |       nataraja.txt
|   |       shiva.txt
|   |
|   +---Graphics
|   |       om-namah-shivaya.txt
|   |
|   \---Symbols
|           om.txt
|           swastika.txt
|
+---css
|       styles.css
|
+---js
|       slideshow.js
|
+---scripts
|       repo-structure-validation.ps1
|       setup-structure.ps1
|
\---tests
    +---ascii_validation
    |       validate_file_encoding.js
    |
    \---ui_tests
            Navigation Works.md
            TestMatrix_UI_Slideshow.xlsx


### Developer Setup & Validation Scripts
1. Clone the repo:  
   ```bash
   git clone https://github.com/<your-username>/sanatana-ascii-art.git
   cd sanatana-ascii-art
    ```
2. To set up folder structure: run
   ```powershell
   .\scripts\setup-structure.ps1
   ```
3. To validate your local workspace structure: run
    ```powershell
    .\scripts\repo-structure-validation.ps1
    ````
4. Open *slideshow.html* in your browser to view the slideshow locally.
5. To add a new ASCII-art item:

    * Choose the correct category folder under ascii-art/

    * Create a .txt file named in lowercase-hyphens (e.g., hanuman.txt)

    * Include metadata header (title, category, author, date) + ASCII art block

    * Run the validation script (see Tests section) to verify structure

    * Commit via branch *feature/add-<name>* and open a Pull Request.

### Hosting
The site is hosted for free using GitHub Pages at:
https://krishnaharshap.github.io/sanatana-ascii-art/

 **NOTE**: No additional hosting costs incurred.

### Licensing & Attribution for ASCII-Art
All ASCII art items should clearly mark whether they are original work or derived from external sources.
Original works by contributors should include author name and date.
Please ensure that any reused content is under acceptable reuse/permission.
*If you add ASCII-art not created by you, you must include the original artist’s name/initials, link to source, and confirm license allows reuse.*
Thank you for contributing to this meaningful project!
