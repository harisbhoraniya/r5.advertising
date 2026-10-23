Add-Type -AssemblyName System.Drawing

# 1. Cleat assembly from page 32 (without any text on the left)
$bmp32 = [System.Drawing.Bitmap]::FromFile('c:\Users\bhora\OneDrive\Desktop\r5.advertising\public\assets\cable_cleats\rendered_pages\page_32.png')
$rect32 = New-Object System.Drawing.Rectangle(760, 320, 350, 310)
$crop32 = $bmp32.Clone($rect32, $bmp32.PixelFormat)
$crop32.Save('c:\Users\bhora\OneDrive\Desktop\r5.advertising\public\assets\cable_cleats\cleat_assembly_components.png', [System.Drawing.Imaging.ImageFormat]::Png)
$crop32.Dispose()
$bmp32.Dispose()

Write-Output 'Assembly components recropped cleanly!'
