"use effect";

export default function scrollToView(elemTo) {
  window.scroll({
    top: elemTo.offsetTop,
    left: elemTo.offsetLeft,
    behavior: "smooth",
  });
}
