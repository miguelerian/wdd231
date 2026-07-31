// Set timestamp when the page loads
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

// ---------- NP Membership ----------
const npModal = document.querySelector("#npModal");
const npOpen = document.querySelector("#np-open");
const npClose = document.querySelector("#np-close");

npOpen.addEventListener("click", (event) => {
    event.preventDefault();
    npModal.showModal();
});

npClose.addEventListener("click", () => {
    npModal.close();
});

// ---------- Bronze Membership ----------
const bronzeModal = document.querySelector("#bronzeModal");
const bronzeOpen = document.querySelector("#bronze-open");
const bronzeClose = document.querySelector("#bronze-close");

bronzeOpen.addEventListener("click", (event) => {
    event.preventDefault();
    bronzeModal.showModal();
});

bronzeClose.addEventListener("click", () => {
    bronzeModal.close();
});

// ---------- Silver Membership ----------
const silverModal = document.querySelector("#silverModal");
const silverOpen = document.querySelector("#silver-open");
const silverClose = document.querySelector("#silver-close");

silverOpen.addEventListener("click", (event) => {
    event.preventDefault();
    silverModal.showModal();
});

silverClose.addEventListener("click", () => {
    silverModal.close();
});

// ---------- Gold Membership ----------
const goldModal = document.querySelector("#goldModal");
const goldOpen = document.querySelector("#gold-open");
const goldClose = document.querySelector("#gold-close");

goldOpen.addEventListener("click", (event) => {
    event.preventDefault();
    goldModal.showModal();
});

goldClose.addEventListener("click", () => {
    goldModal.close();
});