[System.Reflection.Assembly]::LoadWithPartialName("System.IO.Compression.FileSystem")
$zip = [System.IO.Compression.ZipFile]::OpenRead("c:\Users\palla\Downloads\anthro-pharmaceuticals\Anthro Website Matter_27.04.2026.docx")
$entry = $zip.GetEntry("word/document.xml")
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlText = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

[xml]$xml = $xmlText
$ns = New-Object Xml.XmlNamespaceManager($xml.NameTable)
$ns.AddNamespace("w", "http://schemas.openxmlformats.org/wordprocessingml/2006/main")
$paragraphs = $xml.SelectNodes("//w:p", $ns)
$lines = foreach ($p in $paragraphs) {
    $texts = $p.SelectNodes(".//w:t", $ns)
    if ($texts) {
        ($texts | ForEach-Object { $_.InnerText }) -join ""
    } else {
        ""
    }
}
$lines | Out-File -FilePath "c:\Users\palla\Downloads\anthro-pharmaceuticals\Anthro_Website_Matter.txt" -Encoding utf8
