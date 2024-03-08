export default function scrollEffect(values, type) {
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.target.className === "landmark-count grid grid--2-cols") {
        if (entry.isIntersecting) {
          entry.target.children[0].children[0].style.opacity = "1";
          entry.target.children[1].children[0].children[0].style.display =
            "flex";
          entry.target.children[1].style.backgroundColor = "black";
          entry.target.children[1].children[1].children[0].style.color = "#fff";
        } else {
          entry.target.children[1].children[0].children[0].style.display =
            "none";
          entry.target.children[0].children[0].style.opacity = "0";
          entry.target.children[1].style.backgroundColor = "#fff";
          entry.target.children[1].children[1].children[0].style.color =
            "black";
        }
      } else if (entry.target.className === "gird-colm") {
        if (entry.isIntersecting) {
          entry.target.children[1].style.opacity = "1";
        }
      }
      if (entry.target.closest(".our-thoughts")) {
        if (entry.isIntersecting) {
          entry.target.style.height = "25rem";
        }
      }
    });
  }

  const option =
    type === "tar"
      ? {
          root: null, // viewport
          rootMargin: "0px",
          threshold: 0.8, // Trigger callback when 80% of the div is visible
        }
      : {
          root: null, // viewport
          rootMargin: "0px",
          threshold: 0.3, // Trigger callback when 30% of the div is visible
        };

  const observer = new IntersectionObserver(handleIntersection, option);

  window.addEventListener("scroll", () => {
    values.forEach((landmarkCount) => {
      observer.observe(landmarkCount);
    });
  });
}
