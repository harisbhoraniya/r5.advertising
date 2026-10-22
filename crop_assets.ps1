Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\bhora\.gemini\antigravity-ide\brain\bf50c012-2c43-4493-9ba7-2828bedb6f99\stainless_steel_cable_ties_full_1792494419716.png"
$bmp = [System.Drawing.Bitmap]::FromFile($srcPath)

$destDir = "c:\Users\bhora\OneDrive\Desktop\r5.advertising\public\assets"

function Crop-Image($name, $x, $y, $w, $h) {
    # Ensure within bounds
    if ($x + $w -gt $bmp.Width) { $w = $bmp.Width - $x }
    if ($y + $h -gt $bmp.Height) { $h = $bmp.Height - $y }
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $cropped = $bmp.Clone($rect, $bmp.PixelFormat)
    $outPath = Join-Path $destDir "$name.png"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Output "Saved $outPath ($w x $h)"
}

# Logo:
Crop-Image "logo_naepl" 245 20 400 50

# Hero Banner Background:
Crop-Image "hero_banner" 0 80 1920 570

# Cable tie overview card (left side):
Crop-Image "cable_tie_overview" 185 865 520 470

# 4 Range Cards (Card images):
Crop-Image "range_roller_ball" 186 1850 364 250
Crop-Image "range_releasable" 579 1850 364 250
Crop-Image "range_ladder" 972 1850 364 250
Crop-Image "range_marker_tag" 1365 1850 364 250

# 4 Applications (Images):
Crop-Image "app_control_panels" 186 2575 364 200
Crop-Image "app_solar_pv" 579 2575 364 200
Crop-Image "app_wind_turbine" 972 2575 364 200
Crop-Image "app_shipbuilding" 1365 2575 364 200

$bmp.Dispose()
Write-Output "Done cropping calibrated assets!"
