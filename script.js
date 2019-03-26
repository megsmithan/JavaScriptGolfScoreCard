
let selectedCourse;

getCourses();

function getCourses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let allCourses = JSON.parse(this.responseText);
            console.log(allCourses);
            for (let c = 0; c < allCourses.courses.length; c++) {
                $('.courseBox').append(`<div class="coursesList">
                    <button onclick="selectCourse(${allCourses.courses[c].id}, this)">${allCourses.courses[c].name}</button>
                   
                    </div>`);
            }
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}

function selectCourse(id, btn) {
    let theCourse = $(btn).parent();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            selectedCourse = JSON.parse(this.responseText);
            console.log(selectedCourse);

            let teeBox = selectedCourse.data.holes[0].teeBoxes;
            console.log(teeBox);

            for (let i = 0; i < teeBox.length; i++) {
                $(theCourse).append(`<button onclick="showCard(${i})">${teeBox[i].teeColorType}</button>`)
            }
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses/" + id, true);
    xhttp.send();
}

function showCard(teeType) {
    let selectedTees = teeType;
    $('.courseCard').append(`<div id="courseName">${selectedCourse.data.name}</div>`)
    for (let c = 0; c < selectedCourse.data.holes.length; c++) {
        $('.courseCard').append(`<div>
            <div>Hole ${selectedCourse.data.holes[c].hole}</div>
            <div>Par ${selectedCourse.data.holes[c].teeBoxes[selectedTees].par}</div>
            </div>`)
    }
}