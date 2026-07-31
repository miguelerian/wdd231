const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, arrays, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in website design and development. Students build web pages using HTML and CSS while learning the principles of good web design.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to write and use functions.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces classes and objects and teaches object-oriented programming techniques.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming by introducing JavaScript and the Document Object Model.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming by creating responsive, accessible, and interactive websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const courseContainer = document.querySelector("#course-container");
const totalCredits = document.querySelector("#totalCredits");
const courseDetails = document.querySelector("#course-details");

// Display the modal
function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal" aria-label="Close dialog">❌</button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p><strong>${course.credits}</strong> credits</p>

        <p><strong>Certificate:</strong> ${course.certificate}</p>

        <p>${course.description}</p>

        <p><strong>Technology:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    // Close button
    document.querySelector("#closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

    // Close when clicking outside the dialog
    courseDetails.addEventListener("click", (event) => {
        const rect = courseDetails.getBoundingClientRect();

        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            courseDetails.close();
        }
    }, { once: true });
}

// Display the course cards
function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const courseCard = document.createElement("div");

        courseCard.classList.add("course-card");

        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.textContent = `${course.subject} ${course.number}`;

        courseCard.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        courseContainer.appendChild(courseCard);
    });

    const credits = courseList.reduce((sum, course) => sum + course.credits, 0);

    totalCredits.textContent = credits;
}

// Initial display
displayCourses(courses);

// Filter Buttons
document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "CSE")
    );
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.subject === "WDD")
    );
});