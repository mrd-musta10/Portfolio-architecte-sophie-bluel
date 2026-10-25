// assets/js/modal.js
export function initModal(editBtn) {
    const modal = document.getElementById("modal");
    const modalClose = modal.querySelector(".modal-close");
    const btnAddPhotoView = document.getElementById("btn-add-photo");
    const modalGalleryView = document.getElementById("modal-gallery-view");
    const modalAddView = document.getElementById("modal-add-view");
    const modalBack = modal.querySelector(".modal-back");

    editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        modalGalleryView.style.display = "block";
        modalAddView.style.display = "none";
    });

    function closeModal() {
        modal.style.display = "none";
    }

    modalClose.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

    btnAddPhotoView.addEventListener("click", () => {
        modalGalleryView.style.display = "none";
        modalAddView.style.display = "block";
    });

    modalBack.addEventListener("click", () => {
        modalAddView.style.display = "none";
        modalGalleryView.style.display = "block";
    });
}