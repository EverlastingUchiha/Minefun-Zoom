// ==UserScript==
// @name         Minefun.io Super Zoom
// @namespace    http://tampermonkey.net
// @version      1.0
// @description  Super Zoom (Press U)
// @author       Itz_Krishna AKA Everlasting
// @match        *://minefun.io/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Settings
    const config = {
        zoomLevel: 4.0,
        zoomKey: 'u',
        transition: "transform 0.05s ease-out"
    };

    let originalImageRendering = '';
    let originalFilter = '';

    // Find Game Canvas
    const getCanvas = () => {
        return document.querySelector('canvas') ||
               document.querySelector('#gameCanvas') ||
               document.querySelector('.game-canvas');
    };

    // Check If Typing In Input Field
    const isTyping = () => {
        const el = document.activeElement;
        return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
    };

    // Apply Zoom Effect
    const enableZoom = (canvas) => {
        originalImageRendering = canvas.style.imageRendering || getComputedStyle(canvas).imageRendering;
        originalFilter = canvas.style.filter || getComputedStyle(canvas).filter;

        canvas.style.transition = config.transition;
        canvas.style.transformOrigin = "center center";
        canvas.style.transform = `scale(${config.zoomLevel})`;
        canvas.style.imageRendering = "pixelated";
        canvas.style.filter = "contrast(1.1) brightness(1.05)";
    };

    // Reset Zoom
    const disableZoom = (canvas) => {
        canvas.style.transition = config.transition;
        canvas.style.transform = "scale(1)";
        canvas.style.imageRendering = originalImageRendering;
        canvas.style.filter = originalFilter;
    };

    // Key Press Handler
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() !== config.zoomKey || isTyping()) return;
        const canvas = getCanvas();
        if (canvas) enableZoom(canvas);
    });

    // Key Release Handler
    window.addEventListener('keyup', (e) => {
        if (e.key.toLowerCase() !== config.zoomKey) return;
        const canvas = getCanvas();
        if (canvas) disableZoom(canvas);
    });
})();
