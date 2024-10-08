const dummyTimetable = [
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

const timetable = [
    [
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
    ]
];

let subjects = [[]]
let classesNames = ["default"]

let currentClassId = 0
let classIdCounter = 0

// Adds class to the name arrays and ID arrays and inserts new slots for new timetable in main array
function addClass() {
    let name = prompt("Input your classname")
    if(name === null || name.trim() === "") {
        alert("Wrong type of value!")
    } else {
        classesNames.push(name)
        subjects.push([])
        timetable.push(dummyTimetable)
        classIdCounter += 1


        let classSpaceHolder = document.getElementById('classSpace')
        let button = document.createElement('button')
        button.innerText = name
        button.addEventListener('click', function() {
            currentClassId = classesNames.indexOf(name)
            console.log("currentClassId: " + currentClassId)
        })
        classSpaceHolder.append(button)


        console.log(classesNames)
        console.log("classIdCounter: " + classIdCounter)
        console.log(timetable)
    }
}

// Selects class
function selectClass() {
    let temp = prompt("Input your class")
    if(temp === null || temp.trim() === "" || classesNames.includes(temp) == false) {
        alert("Wrong type of value!")
    } else {
        currentClassId = classesNames.indexOf(temp)

        console.log("currentClassId: " + currentClassId)
    }

}


// Adding subjects to the array, checking validity of name and repetition throughout the week
function addSubject() {
    let name = prompt("Input your subject")
    if(name === null || name.trim() === "") {
        alert("Wrong type of value!")
    } else {
        repetition = parseInt(prompt("Insert the repetition throughout the week"))
        if (!isNaN(repetition) && repetition > 0 && repetition%1==0) {
            let teacher = prompt("Insert teacher '[SURNAME] [NAME]'")
            if (hasTwoWords(teacher) == true) {
                teacher = teacher.trim()
                const newSubject = {
                    name: name,
                    repetition: repetition,
                    teacher: teacher
                }
                subjects[currentClassId].push(newSubject)

                console.log(subjects)
            } else {
                alert("Wrong type of value!")
            }

        } else {
            alert("Wrong type of value!")
        }
    }
}

// Clearing the timetable array, 
function arrange() {
    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 5; j++) {
            timetable[currentClassId][i][j] = "Empty"
        }
    }

    console.log(subjects)

    // Filling out the timetable array an keeping it going out of bounds
    let dummyCounterWidth = 0
    let dummyCounterHeight = 0
    for (let i = 0; i < subjects[currentClassId].length; i++) {
        for (let j = 0; j < subjects[currentClassId][i].repetition; j++) {
            if (dummyCounterHeight>=11) {
                alert("Timetable out of range!")
                return
            }
            timetable[currentClassId][dummyCounterHeight][dummyCounterWidth] = subjects[currentClassId][i].name
            dummyCounterWidth += 1
            if (dummyCounterWidth>=5) {
                dummyCounterWidth = 0
                dummyCounterHeight +=1
            }

        }
    }
    console.log(timetable)
}

function display() {
    let dummyCounter = 0

    for (let i = 0; i < 11; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById(dummyCounter).innerHTML = timetable[currentClassId][i][j]
            dummyCounter+=1
        }
    }
}













function hasTwoWords(input) {
    const words = input.trim().split(/\s+/);
    return words.length === 2;
  }