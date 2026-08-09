import { getCharacters } from "./data.js";
import { displayCharacters } from "./cards.js";

const villainsContainer = document.querySelector("#villains");

const dialog = document.querySelector("#character-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialog = document.querySelector("#close-dialog");

let villains = [];


async function loadVillains() {

    const characters = await getCharacters();

    villains = characters.filter(
        character => character.type === "Villain"
    );

    displayCharacters(villains, villainsContainer);

    addCardEvents();
}


function addCardEvents() {

    const cards = document.querySelectorAll(".character-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const villain = villains.find(
                item => item.name === card.dataset.name
            );

            showVillain(villain);
        });

    });
}


function showVillain(villain) {

    dialogContent.innerHTML = `
        <h2>${villain.name}</h2>

        <img
            src="images/${villain.image}"
            alt="${villain.name}"
            width="300"
            height="300">

        <p><strong>Type:</strong> ${villain.type}</p>

        <p><strong>Universe:</strong> ${villain.universe}</p>

        <p><strong>Powers:</strong> ${villain.powers}</p>

        <p>
            <strong>First Appearance:</strong>
            ${villain.firstAppearance}
        </p>
    `;

    dialog.showModal();
}


closeDialog.addEventListener("click", () => {
    dialog.close();
});


dialog.addEventListener("click", (event) => {

    if (event.target === dialog) {
        dialog.close();
    }

});


loadVillains();