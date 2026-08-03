// Set timestamp
const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    timestampField.value = new Date().toISOString();
}

// Modal buttons

const npModal = document.querySelector("#npModal");
const bronzeModal = document.querySelector("#bronzeModal");
const silverModal = document.querySelector("#silverModal");
const goldModal = document.querySelector("#goldModal");

// Open buttons

document.querySelector("#np-open").addEventListener("click", (e) => {
    e.preventDefault();
    npModal.showModal();
});

document.querySelector("#bronze-open").addEventListener("click", (e) => {
    e.preventDefault();
    bronzeModal.showModal();
});

document.querySelector("#silver-open").addEventListener("click", (e) => {
    e.preventDefault();
    silverModal.showModal();
});

document.querySelector("#gold-open").addEventListener("click", (e) => {
    e.preventDefault();
    goldModal.showModal();
});

// Close buttons

document.querySelector("#np-close").addEventListener("click", () => {
    npModal.close();
});

document.querySelector("#bronze-close").addEventListener("click", () => {
    bronzeModal.close();
});

document.querySelector("#silver-close").addEventListener("click", () => {
    silverModal.close();
});

document.querySelector("#gold-close").addEventListener("click", () => {
    goldModal.close();
});

// Close when clicking outside

[npModal, bronzeModal, silverModal, goldModal].forEach(modal => {
    modal.addEventListener("click", (event) => {
        const rect = modal.getBoundingClientRect();

        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            modal.close();
        }
    });
});