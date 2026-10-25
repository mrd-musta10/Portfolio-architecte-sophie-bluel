// assets/js/gallery.js
export function displayWorks(works, targetContainer) {
    targetContainer.innerHTML = "";
    works.forEach(work => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;

        const figcaption = document.createElement("figcaption");
        figcaption.innerText = work.title;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        targetContainer.appendChild(figure);
    });
}
// Aggiungi in fondo a assets/js/gallery.js
export function createFilters(categories, allWorks, gallery, portfolioSection) {
    const filterContainer = document.createElement("div");
    filterContainer.classList.add("filter-container");

    const btnAll = document.createElement("button");
    btnAll.innerText = "Tous";
    btnAll.classList.add("filter-btn", "active");
    btnAll.addEventListener("click", () => {
        setActiveButton(btnAll);
        displayWorks(allWorks, gallery);
    });
    filterContainer.appendChild(btnAll);

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.innerText = category.name;
        btn.classList.add("filter-btn");
        btn.addEventListener("click", () => {
            setActiveButton(btn);
            const filteredWorks = allWorks.filter(work => work.categoryId === category.id);
            displayWorks(filteredWorks, gallery);
        });
        filterContainer.appendChild(btn);
    });

    portfolioSection.insertBefore(filterContainer, gallery);
}

function setActiveButton(activeBtn) {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");
}