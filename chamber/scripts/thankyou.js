const params = new URLSearchParams(window.location.search);



const fields = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "organization"
];



fields.forEach(field => {


    const element = document.querySelector(`#${field}`);


    if (element) {

        element.textContent =
            params.get(field) || "";

    }


});





const timestampElement = document.querySelector("#timestamp");

const timestamp = params.get("timestamp");



if (timestampElement && timestamp) {


    timestampElement.textContent =
        new Date(timestamp).toLocaleString();


}