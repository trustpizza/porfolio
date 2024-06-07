const navigate = (pageId) => {
  const pages = document.querySelectorAll("[data-type='section']");
  pages.forEach((page) => {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
};

export default navigate;
