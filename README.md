# Kiosk Overlay

A simple website that overlays a home button on an iframe. This allows any
website to be used in Chrome's kiosk mode while still being able to navigate
back to the original page should the user navigate away.

Simply navigate to https://kiosk.joshraker.com and provide the desired home
page as the `homePage` query parameter e.g.
https://kiosk.joshraker.com/?homePage=https%3A%2F%2Fwww.joshraker.com. Any page
that can be loaded in an iframe will work and links will work so long as they
don't open in a new tab.
