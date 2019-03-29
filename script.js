
let selectedCourse;

getCourses();

function getCourses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let allCourses = JSON.parse(this.responseText);
            //console.log(allCourses);
            for (let c = 0; c < allCourses.courses.length; c++) {
                $('.courseBox').append(`<div class="coursesList">
                    <button class="courseBtn" onclick="selectCourse(${allCourses.courses[c].id}, this)">${allCourses.courses[c].name}</button>
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
            //console.log(selectedCourse);

            let teeBox = selectedCourse.data.holes[0].teeBoxes;
            //console.log(teeBox);

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
    $('.courseCard').append(`<div id="courseName">${selectedCourse.data.name}</div>`);
    for (let c = 0; c < selectedCourse.data.holes.length; c++) {
        $('.courseInfoBox').append(`<div id="col${c}" class="columns">
           
            <div class="holeRow, holeStyle">${selectedCourse.data.holes[c].hole}</div>
            <div class="holeRow, parStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].par}</div>
            <div class="holeRow, yardsStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].yards}</div>
            <div class="holeRow, hcpStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].hcp}</div>
            </div>`)
    }
    $('.holeParYardBox').append(`<div>
            <div class="holeStyle">hole</div>
            <div class="parStyle">par</div>
            <div class="yardsStyle">yards</div>
            <div class="hcpStyle">handicap</div>
            </div>`)
    addScoreBoxes();
}


function addScoreBoxes() {
    let players = 4;
    $('.playerBox').append(`<div>
        <!--<div>hole</div>-->
        <!--<div>par</div>-->
        <!--<div>yards</div>-->
        <input type="text" placeholder="Player 1">
        <input type="text" placeholder="Player 1">
        <input type="text" placeholder="Player 1">
        <input type="text" placeholder="Player 1">
        </div>`)
    for (let p = 0; p < players; p++) {
        for (let h = 0; h < selectedCourse.data.holes.length; h++) {
            $('#col' + h).append(`<input class="scoreInputBox" id="p${p}h${h}" type="text">`)
        }
    }
}
