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

let subjects = []


// Adding subjects to the array, checking validity of name and repetition throughout the week
function addSubject() {
    let name = prompt("Input your subject")
    if(name === null || name.trim() === "") {
        alert("Wrong type of value!")
    } else {
        repetition = parseInt(prompt("Insert the repetition throughout the week"))
        if (!isNaN(repetition) && repetition > 0 && repetition%1==0) {
            const newSubject = {
                name: name,
                repetition: repetition
            }
            subjects.push(newSubject)
        } else {
            alert("Wrong type of value!")
        }
    }
}

// Clearing the timetable array, 
function arrange() {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 5; j++) {
            timetable[i][j] = "Empty"
        }
    }

    console.log(subjects)

    // Filling out the timetable array an keeping it going out of bounds
    let dummyCounterWidth = 0
    let dummyCounterHeight = 0
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].repetition; j++) {
            timetable[dummyCounterHeight][dummyCounterWidth] = subjects[i].name
            dummyCounterWidth += 1
            if (dummyCounterWidth>=5) {
                dummyCounterWidth = 0
                dummyCounterHeight +=1
            }
            if (dummyCounterHeight>=11) {
                alert("Timetable out of range!")
                return
            }
        }
    }

    console.log(timetable)
}