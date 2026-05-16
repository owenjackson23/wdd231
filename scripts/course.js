const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const courseList = document.getElementById('course-list');
const totalCredits = document.getElementById('total-credits');
const completedCredits = document.getElementById('completed-credits');
let total = 0;

const allFilter = document.getElementById('all-filter');
const wddFilter = document.getElementById('wdd-filter');
const cseFilter = document.getElementById('cse-filter');

allFilter.addEventListener('click', () => {
    allFilter.classList.toggle("active");
    displayCourses(courses);
});

wddFilter.addEventListener('click', () => {
    wddFilter.classList.toggle("active");
    const wddCourses = filterWDD(courses);
    displayCourses(wddCourses);
});

cseFilter.addEventListener('click', () => {
    cseFilter.classList.toggle("active");
    const cseCourses = filterCSE(courses);
    displayCourses(cseCourses);
});

// Sums the credits for a given array of courses
function sumCredits(courses) {
    return courses.reduce((total, course) => total + course.credits, 0);
}

// Displays the courses and calculates credits
function displayCourses(courses) {

    // Clear the course list and reset totals
    courseList.innerHTML = '';
    const credits = sumCredits(courses);
    const creditsEarned = sumCredits(filterCompleted(courses));

    courses.forEach(course => {
        const courseItem = document.createElement('li');

        // Add classes for filtering
        courseItem.classList.add('course-item');
        if (course.courseFilter === 'WDD') {
            courseItem.classList.add('wdd');
        }
        else if (course.courseFilter === 'CSE') {
            courseItem.classList.add('cse');
        }

        // Add the 'completed' class to each completed course item
        if (course.completed) {
            courseItem.classList.add('completed');
        }

        courseItem.innerHTML = `<p>${course.subject}${course.number}</p>`;

        courseList.appendChild(courseItem);
    });

    totalCredits.innerHTML = credits;
    completedCredits.innerHTML = creditsEarned;
}

// Creates a new array of WDD courses
function filterWDD(courses) {
    const wddCourses = courses.filter(course => {
        return course.subject === "WDD";
    });
    return wddCourses;
}

// Creates a new array of CSE courses
function filterCSE(courses) {
    const cseCourses = courses.filter(course => {
        return course.subject === "CSE";
    });
    return cseCourses;
}

// Creates a new array of completed courses
function filterCompleted(courses) {
    const completedCourses = courses.filter(course => {
        return course.completed === true;
    });
    return completedCourses;
}

// Initial display of all courses
displayCourses(courses);