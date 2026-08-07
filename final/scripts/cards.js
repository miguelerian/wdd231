export function displayCharacters(characters, container) {

    container.innerHTML = "";

    characters.forEach((character) => {

        const card = document.createElement("article");

        card.classList.add("character-card");

        card.setAttribute("tabindex", "0");
        card.dataset.name = character.name;

        card.innerHTML = `
            <img
                src="images/${character.image}"
                alt="${character.name}"
                width="300"
                height="300"
                loading="lazy">

            <div class="character-info">

                <h3>${character.name}</h3>

                <p><strong>Type:</strong> ${character.type}</p>

                <p><strong>Universe:</strong> ${character.universe}</p>

                <p><strong>Powers:</strong> ${character.powers}</p>

            </div>
        `;

        container.appendChild(card);

    });
}