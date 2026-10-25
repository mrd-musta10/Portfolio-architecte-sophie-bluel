// assets/js/gallery.js
export function displayWorks(works, targetContainer, isModal = false, onDeleteCallback = null) {
    targetContainer.innerHTML = "";
    works.forEach(work => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;

        figure.appendChild(img);

        if (isModal) {
            const deleteIcon = document.createElement("div");
            deleteIcon.classList.add("delete-icon");
            deleteIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
            
            deleteIcon.addEventListener("click", async (e) => {
                e.preventDefault();
                if (onDeleteCallback) {
                    await onDeleteCallback(work.id);
                }
            });

            figure.appendChild(deleteIcon);
        } else {
            const figcaption = document.createElement("figcaption");
            figcaption.innerText = work.title;
            figure.appendChild(figcaption);
        }

        targetContainer.appendChild(figure);
    });
}