function scrollAdjust() {
  const padding = 50;
  const offset = -1 * padding;
  const shiftWindow = function() { scrollBy(0, offset); }
  window.addEventListener("hashchange", shiftWindow);
  window.addEventListener("pageshow", shiftWindow);
}
