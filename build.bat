@echo off
hugo --gc --minify
del public\images\gohugo-default-sample-hero-image.jpg
pause