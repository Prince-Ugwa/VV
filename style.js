const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// scrool behavior/////////////////////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");

    // scrool to top/////////////////////////////
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // scrool to other links/////////////////////////////
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });

      console.log(sectionEl);
    }
    if (href === "index.html")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // making the menue bar disapper after click////
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
    // making the menue bar disapper after click////
  });
});
// making the navigation sticky////
const heroEl = document.querySelector(".hero");
const observe = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);
observe.observe(heroEl);
