// assets/js/modal.js
export function initModal(editBtn) {
    const modal = document.getElementById("modal");
    const modalClose = modal.querySelector(".modal-close");
    const btnAddPhotoView = document.getElementById("btn-add-photo");
    const modalGalleryView = document.getElementById("modal-gallery-view");
    const modalAddView = document.getElementById("modal-add-view");
    const modalBack = modal.querySelector(".modal-back");
    const inputUpload = document.getElementById("image-upload");
    const imagePreview = document.getElementById("image-preview");

    inputUpload.addEventListener("change", () => {
        const file = inputUpload.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    const inputTitle = document.getElementById("photo-title");
    const selectCategory = document.getElementById("photo-category");
    const btnSubmit = document.getElementById("btn-submit-photo");

    function checkFormValidation() {
        if (inputUpload.files.length > 0 && inputTitle.value.trim() !== "" && selectCategory.value !== "") {
            btnSubmit.disabled = false;
        } else {
            btnSubmit.disabled = true;
        }
    }

    inputUpload.addEventListener("change", checkFormValidation);
    inputTitle.addEventListener("input", checkFormValidation);
    selectCategory.addEventListener("change", checkFormValidation);

    const formAddPhoto = document.getElementById("form-add-photo");

    formAddPhoto.addEventListener("submit", async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("image", inputUpload.files[0]);
        formData.append("title", inputTitle.value.trim());
        formData.append("category", selectCategory.value);

        if (onAddCallback) {
        await onAddCallback(formData, token);
        }
    });

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