$expected = @(
    "ascii-art\Deities",
    "ascii-art\Symbols",
    "ascii-art\Graphics",
    "css",
    "js",
    "tests\ui_tests",
    "tests\ascii_validation"
)

foreach ($e in $expected) {
    if (Test-Path "./$e") {
        Write-Host "Exists: $e" -ForegroundColor Green
    } else {
        Write-Host "MISSING: $e" -ForegroundColor Red
    }
}

$requiredFiles = @(
    "README.md",
    "slideshow.html",
    "css\styles.css",
    "js\slideshow.js"
)

foreach ($f in $requiredFiles) {
    if (Test-Path "./$f") {
        Write-Host "File Exists: $f" -ForegroundColor Green
    } else {
        Write-Host "File MISSING: $f" -ForegroundColor Red
    }
}
