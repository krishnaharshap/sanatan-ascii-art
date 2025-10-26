# setup-structure.ps1
# Script to create folder structure for sanatana-ascii-art project

param (
    [string]$RootPath = "."
)

Write-Host "Creating folder structure under path: $RootPath"

# Change to the root path
Set-Location -Path $RootPath

# Create root files
New-Item -Path "./README.md" -ItemType File -Force | Out-Null
New-Item -Path "./slideshow.html" -ItemType File -Force | Out-Null

# Define folders to create
$folders = @(
    "ascii-art\Deities",
    "ascii-art\Symbols",
    "ascii-art\Graphics",
    "css",
    "js",
    "tests\ui_tests",
    "tests\ascii_validation"
)

foreach ($f in $folders) {
    Write-Host "Creating folder: $f"
    New-Item -Path "./$f" -ItemType Directory -Force | Out-Null
}

# Create sample files in content folders
$sampleFiles = @(
    "ascii-art\Deities\ganesha.txt",
    "ascii-art\Deities\shiva.txt",
    "ascii-art\Symbols\om.txt",
    "ascii-art\Symbols\swastika.txt",
    "ascii-art\Graphics\om-namah-shivaya.txt"
)

foreach ($sf in $sampleFiles) {
    Write-Host "Creating file: $sf"
    New-Item -Path "./$sf" -ItemType File -Force | Out-Null
}

# Create css and js files
Write-Host "Creating css/styles.css"
New-Item -Path "./css/styles.css" -ItemType File -Force | Out-Null
Write-Host "Creating js/slideshow.js"
New-Item -Path "./js/slideshow.js" -ItemType File -Force | Out-Null

Write-Host "Folder structure created successfully."
