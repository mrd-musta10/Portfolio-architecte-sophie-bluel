// assets/js/main.js
import { fetchWorks, fetchCategories } from "./api.js";
import { isUserLoggedIn, setupAdminView } from "./auth.js";
import { displayWorks, createFilters } from "./gallery.js";

const gallery = document.querySelector(".gallery");
const portfolioSection = document.getElementById("portfolio");

let allWorks = [];
let categoriesList = [];

async function init() {
    allWorks = await fetchWorks();
    categoriesList = await fetchCategories();

    displayWorks(allWorks, gallery);

    if (isUserLoggedIn()) {
        setupAdminView(portfolioSection);
    } else {
        createFilters(categoriesList, allWorks, gallery, portfolioSection);
    }
}

init();