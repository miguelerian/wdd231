import { getCharacters } from "./data.js";
import { displayCharacters } from "./cards.js";
import "./navigation.js";

const latestCharacters = document.querySelector("#latest-characters");

async function loadLatestCharacters() {

    if (!latestCharacters) {
        return;
    }

    const characters = await getCharacters();

    const latest = characters.slice(0, 3);

    displayCharacters(latest, latestCharacters);
}

loadLatestCharacters();