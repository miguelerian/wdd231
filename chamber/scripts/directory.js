const url = "data/members.json";
const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

async function getMembers() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Unable to fetch member data.");
        }

        const data = await response.json();
        displayMembers(data);

    } catch (error) {
        console.error(error);
    }
}

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">

            <h3>${member.name}</h3>

            <p>${member.description}</p>

            <p><strong>Address:</strong><br>${member.address}</p>

            <p><strong>Phone:</strong><br>${member.phone}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>

            <p><strong>Membership:</strong> ${membershipLevel(member.membership)}</p>
        `;

        membersContainer.appendChild(card);

    });
}

function membershipLevel(level) {
    switch (level) {
        case 3:
            return "Gold";
        case 2:
            return "Silver";
        default:
            return "Member";
    }
}

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid-view");
    membersContainer.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list-view");
    membersContainer.classList.remove("grid-view");
});

getMembers();