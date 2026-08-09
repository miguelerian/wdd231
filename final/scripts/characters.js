import { getCharacters } from "./data.js";
import { displayCharacters } from "./cards.js";

const charactersContainer = document.querySelector("#characters");
const filter = document.querySelector("#character-filter");

const dialog = document.querySelector("#character-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");

const favoriteMessage = document.querySelector("#favorite-message");

let characters = [];


/* ---------- Load Characters ---------- */

async function loadCharacters() {

    characters = await getCharacters();

    displayCharacters(characters, charactersContainer);

    addCardEvents();
}


/* ---------- Card Events ---------- */

function addCardEvents() {

    const cards = document.querySelectorAll(".character-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const character = characters.find(
                item => item.name === card.dataset.name
            );

            showCharacter(character);

        });

    });


    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            saveFavorite(button.dataset.name);

        });

    });

}


/* ---------- Modal ---------- */

function showCharacter(character) {

    dialogContent.innerHTML = `
        <h2>${character.name}</h2>

        <img
            src="images/${character.image}"
            alt="${character.name}"
            width="300"
            height="300">

        <p><strong>Type:</strong> ${character.type}</p>

        <p><strong>Universe:</strong> ${character.universe}</p>

        <p><strong>Powers:</strong> ${character.powers}</p>

        <p>
            <strong>First Appearance:</strong>
            ${character.firstAppearance}
        </p>
    `;

    dialog.showModal();
}


/* ---------- Filter ---------- */

filter.addEventListener("change", () => {

    const selectedType = filter.value;

    if (selectedType === "all") {

        displayCharacters(characters, charactersContainer);

    } else {

        const filteredCharacters = characters.filter(
            character => character.type === selectedType
        );

        displayCharacters(filteredCharacters, charactersContainer);
    }

    addCardEvents();

});


/* ---------- Local Storage ---------- */

function saveFavorite(name) {

    localStorage.setItem("favoriteCharacter", name);

    showFavorite(name);

}


function showFavorite(name) {

    favoriteMessage.textContent =
        `Your favorite character is ${name}.`;

}


function loadFavorite() {

    const savedFavorite =
        localStorage.getItem("favoriteCharacter");

    if (savedFavorite) {

        showFavorite(savedFavorite);

    }

}


/* ---------- Close Modal ---------- */

closeDialog.addEventListener("click", () => {

    dialog.close();

});


dialog.addEventListener("click", (event) => {

    if (event.target === dialog) {

        dialog.close();

    }

});


/* ---------- Start Page ---------- */

loadFavorite();
loadCharacters();