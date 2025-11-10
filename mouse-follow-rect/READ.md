\# 🟥 Mouse Follow Rect



This project creates a rectangle (`#rect`) that smoothly follows the mouse cursor horizontally across the screen using \*\*JavaScript\*\* and \*\*GSAP\*\* animation.



It may look simple, but it’s a great example of how to start thinking in \*\*JavaScript logic\*\* — especially for building responsive, interactive web interfaces.



---



\## 🚀 Features



\- Rectangle moves based on real-time `mousemove` events

\- Uses `getBoundingClientRect()` to dynamically calculate element width

\- Maps mouse position to a safe movement range using `gsap.utils.mapRange()`

\- Smooth animation using `gsap.to()` with easing

\- Prevents the rectangle from going outside screen boundaries



---



\## 🧠 JavaScript Logic Highlights



\### 🔸 Event Handling

```js

window.addEventListener("mousemove", (details) => {

&nbsp; // Tracks the horizontal mouse position

});



