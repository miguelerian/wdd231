const spotlightContainer = document.querySelector("#spotlight-container");

const membersURL = "data/members.json";


async function getSpotlights() {

    try {

        const response = await fetch(membersURL);


        if (!response.ok) {

            throw new Error("Unable to load member data.");

        }


        const members = await response.json();

        displaySpotlights(members);


    } catch (error) {

        console.error(error);

    }

}



function displaySpotlights(members) {


    spotlightContainer.innerHTML = "";



    const qualifiedMembers = members.filter(member =>
        member.membership >= 2
    );



    qualifiedMembers.sort(() =>
        Math.random() - 0.5
    );



    qualifiedMembers
        .slice(0, 3)
        .forEach(member => {



            const card = document.createElement("section");


            // Reusable CSS card
            card.classList.add("card");



            card.innerHTML = `


                <img 
                    src="images/${member.image}" 
                    alt="${member.name}" 
                    loading="lazy">


                <h3>
                    ${member.name}
                </h3>



                <p>
                    <strong>Phone:</strong><br>
                    ${member.phone}
                </p>



                <p>
                    <strong>Address:</strong><br>
                    ${member.address}
                </p>



                <p>

                    <a class="text-link"
                       href="${member.website}"
                       target="_blank">

                        Visit Website

                    </a>

                </p>



                <p>
                    <strong>Membership:</strong>
                    ${getMembership(member.membership)}
                </p>


            `;



            spotlightContainer.appendChild(card);



        });


}




function getMembership(level) {


    switch (level) {


        case 3:

            return "Gold";


        case 2:

            return "Silver";


        default:

            return "Member";


    }

}



getSpotlights();