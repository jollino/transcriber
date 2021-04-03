# Transcriber

Freely inspired by Amara, this is a little tool I put together to quickly jot down transcriptions of videos.

## Basic Usage

1. Start a local web server for the tool.
2. Open the local web server you just started to load the tool.
3. Click "Choose file" or "Browse" to select your file. Note that the video must be in a format that your browser likes, so you'll probably be limited to mp4 files or something similar.
4. Hit **tab** to start playing the video, and start transcribing into the box below. Your work is automatically saved into your browser's local storage every 10 seconds, but you may hit **ctrl + S** or **cmd + S** to force a save at any time.
5. If you need to go back, hit **shift + tab** to rewind 4 seconds. If you need to pause playing, hit **tab** again.
6. When done, simply copy everything you wrote and paste in your subtitle editor of choice.

## Keystrokes

- **tab** - play/pause
- **shift + tab** rewind 4 seconds
- **ctrl + S** or **cmd + S** - save

## FAQ

**Why do I need a local server?**

Two reasons: first and foremost, the tool uses the browser's local storage to save your work across sessions, using "localhost" as its location. Further, many browsers will not allow opening local files using the file:// protocol

**How do the web server scripts differ?**

They are simply written in different languages (namely Python 2, Python 3, PHP-cli and Ruby), but do the same thing. Use whichever script works best for you. They all default to port 8877 so you can use http://localhost:8877 using any one of them.

**What's the point of the ruler on top?**

Style guides for subtitles differ, but they generally all have a maximum allowed length per line. The ruler on top gives you a rough, visual idea of how long each line is, and the counter on the right gives you the exact amount of characters per line. Of course, you can choose to simply write everything as you wish, and re-arrange the lines later on.