window.addEventListener("scroll", () => {
    const banner = document.querySelector(".banner");
    if (scrollY >= 20) banner.style.display = "none";
    else banner.style.display = "flex";
});
