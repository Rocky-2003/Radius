export default function lazyLoading() {
  const imgs = document.querySelectorAll(".lazyImg");
  let options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Trigger callback when 10% of the div is visible
  };
  const observer = new IntersectionObserver(handleImg, options);

  function handleImg(entries, observe) {
    console.log("rocky");

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let img = entry.target;
        let src = img.getAttribute("data-src");

        img.setAttribute("src", src);
        console.log("rocky this isde");

        observer.unobserve(img);
      }
    });
  }

  imgs.forEach((img) => {
    console.log("roc");

    observer.observe(img);
  });
  console.log("r");
}

lazyLoading();
