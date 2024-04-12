#!/bin/bash
#mkdir -p out
#sips -z 512 512     logo.png --out ./out/icon.png
#sips -z 1024 1024   logo.png --out ./out/icon@2x.png
#
#iconutil -c icns ./out/icon.png    -o ./out/icon.icns
#iconutil -c icns ./out/icon@2x.png -o ./out/icon@2x.icns


mkdir -p tmp.iconset
sips -z 16 16       logo.png --out tmp.iconset/icon_16x16.png
sips -z 32 32       logo.png --out tmp.iconset/icon_16x16@2x.png
sips -z 32 32       logo.png --out tmp.iconset/icon_32x32.png
sips -z 64 64       logo.png --out tmp.iconset/icon_32x32@2x.png
sips -z 128 128     logo.png --out tmp.iconset/icon_128x128.png
sips -z 256 256     logo.png --out tmp.iconset/icon_128x128@2x.png
sips -z 256 256     logo.png --out tmp.iconset/icon_256x256.png
sips -z 512 512     logo.png --out tmp.iconset/icon_256x256@2x.png
sips -z 512 512     logo.png --out tmp.iconset/icon_512x512.png
sips -z 1024 1024   logo.png --out tmp.iconset/icon_512x512@2x.png

iconutil -c icns tmp.iconset -o Icon.icns
