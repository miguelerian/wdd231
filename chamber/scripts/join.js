// ---------- TIMESTAMP ----------

const timestampField = document.querySelector("#timestamp");

if (timestampField) {

    timestampField.value = new Date().toISOString();

}



// ---------- MODALS ----------

const modalNames = [
    "np",
    "bronze",
    "silver",
    "gold"
];



modalNames.forEach(name => {


    const modal = document.querySelector(`#${name}Modal`);

    const openButton = document.querySelector(`#${name}-open`);

    const closeButton = document.querySelector(`#${name}-close`);



    if (!modal || !openButton || !closeButton) return;



    // Open modal

    openButton.addEventListener("click", (event) => {

        event.preventDefault();

        modal.showModal();

    });



    // Close modal

    closeButton.addEventListener("click", () => {

        modal.close();

    });



    // Close clicking outside

    modal.addEventListener("click", (event) => {


        const box = modal.getBoundingClientRect();



        const inside =
            event.clientX >= box.left &&
            event.clientX <= box.right &&
            event.clientY >= box.top &&
            event.clientY <= box.bottom;



        if (!inside) {

            modal.close();

        }


    });


});