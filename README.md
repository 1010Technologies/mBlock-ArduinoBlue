# mBlock-ArduinoBlue

A Block Based Programming Environment for the [ArduinoBlue](https://sites.google.com/stonybrook.edu/arduinoble/). For use with [mBlock](http://www.mblock.cc).

The ArduinoBlue blocks are based on the [ArduinoBlue library](https://sites.google.com/stonybrook.edu/arduinoble/) written by Jae An and Anurag Purwar at the Computer Aided Design Innovation & Engineering Lab at Stony Brook University.

## Install

To install, open **mBlock IDE**,
* From **Extensions** menu item
* Open **Manage Extensions** (short-cut *Ctrl+shift+T*)
* Click **Available** button and search for "*HyperDuino*"

The current version runs only in Arduino mode. In other words, you need to click **Upload to Arduino** button in **Arduino mode** to upload and run your program.

## Build and Upload

Instructions on creating extensions and adding blocks: http://download.makeblock.com/mblock/mblock_extension_guide.pdf

    zip --exclude \*.git\* \*.vscode\* -r arduinoblue.zip mBlock-ArduinoBlue

To add the new extension to mBlock, visit http://www.mblock.cc/extensions
