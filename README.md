# Minefun.io Super Zoom

A lightweight, hold‑to‑zoom script for the game canvas on **minefun.io**.  
Press and hold `U` to zoom in, release to zoom out.  
Built as a Tampermonkey userscript.

---

## Features

- Press and hold `U` to instantly zoom the game canvas (4× magnification).
- Release the key to return to normal view.
- Smooth CSS transition (0.05s) for a responsive feel.
- Pixelated rendering while zoomed for a crisp retro look.
- Slight contrast and brightness boost during zoom.
- Automatically detects the game canvas (even if created dynamically).
- Ignores key presses while typing in input fields.
- No UI elements – seamless and distraction‑free.
- No external dependencies – pure vanilla JavaScript.

---

## Installation

1. Install a userscript manager like **Tampermonkey**, **Greasemonkey**, or **Violentmonkey**.
2. Create a new script and paste the full source code.
3. Save – it will run automatically on `minefun.io` and all its subdomains.

---

## Usage

1. While playing, press and hold the **`U`** key.
2. The game canvas will instantly zoom in by 4×.
3. Release the key to return to the normal view.

Zooming works only when you are not typing in an input field.

---

## Keyboard Shortcut

| Action      | Key      |
|-------------|----------|
| Zoom in     | Hold `U` |
| Zoom out    | Release `U` |

---

## Customization

You can change the zoom level and the activation key by editing the `config` object in the script:

```javascript
const config = {
    zoomLevel: 4.0,   // change zoom magnification
    zoomKey: 'u',     // change the key (single character)
    transition: "transform 0.05s ease-out"
};
