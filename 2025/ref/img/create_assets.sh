sizes=(16 24 32 48 64 128 180 256)

for s in ${sizes[@]}; do
  convert branding/icon.svg -resize ${s}x${s} favicon-${s}x${s}.png
done

convert branding/icon.svg -resize 16x16 favicon.ico

convert branding/wide_preview.svg preview.png