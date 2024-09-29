const timetable = [
    ["Free", "Free", "Free", "Free", "Free"],   // Period 1
    ["Free", "Free", "Free", "Free", "Free"],   // Period 2
    ["Free", "Free", "Free", "Free", "Free"],   // Period 3
    ["Free", "Free", "Free", "Free", "Free"],   // Period 4
    ["Free", "Free", "Free", "Free", "Free"],   // Period 5
    ["Free", "Free", "Free", "Free", "Free"],   // Period 6
    ["Free", "Free", "Free", "Free", "Free"],   // Period 7
    ["Free", "Free", "Free", "Free", "Free"],   // Period 8
    ["Free", "Free", "Free", "Free", "Free"],   // Period 9
    ["Free", "Free", "Free", "Free", "Free"],   // Period 10
    ["Free", "Free", "Free", "Free", "Free"]    // Period 11
];

let weekdays = ["mo", "tu", "we", "th", "fr"]

let subjects = [];
let fillCount = 0;


function addSubject() {
    const name = prompt("Insert subject name:");
    const repetition = parseInt(prompt("Insert repetition"))

    const newSubject = {
        name: name,
        repetition: repetition
    }
    subjects.push(newSubject)
    console.log(subjects)
}

function arrange() {
    subjects.forEach(subject => {
        for (let temp = 0; temp < subject.repetition; temp++) {
            document.getElementById(fillCount).innerHTML = subject.name
            fillCount++
        }
    });
}