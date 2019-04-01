
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
                    <button class="mdl-button mdl-js-button mdl-button--raised courseBtn" onclick="selectCourse(${allCourses.courses[c].id}, this)">${allCourses.courses[c].name}</button>
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
    let outPar = 0;
    let outYards = 0;
    let inPar = 0;
    let inYards = 0;
    let totalPar = 0;
    let totalYards = 0;
    $('.courseCard').prepend(`<div id="courseName">${selectedCourse.data.name}</div>`);
    for (let c = 0; c < 9; c++) {
        $('.courseInfoBox').append(`<div id="col${c}" class="columns">
            <div class="holeRow, holeStyle">${selectedCourse.data.holes[c].hole}</div>
            <div class="holeRow, parStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].par}</div>
            <div class="holeRow, yardsStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].yards}</div>
            <div class="holeRow, hcpStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].hcp}</div>
            </div>`)
    }
    $('.courseInfoBox').append(`<div class="totalColumn outTotals">OUT</div>`);
    for (let o = 0; o < 9; o++) {
        outPar += selectedCourse.data.holes[o].teeBoxes[selectedTees].par;
        outYards += selectedCourse.data.holes[o].teeBoxes[selectedTees].yards;
    }
    $('.outTotals').append(`<div class="parStyle">${outPar}</div>`);
    $('.outTotals').append(`<div class="yardsStyle">${outYards}</div>`);

    for (let c = 9; c < selectedCourse.data.holes.length; c++) {
        $('.courseInfoBox').append(`<div id="col${c}" class="columns">
            <div class="holeRow, holeStyle">${selectedCourse.data.holes[c].hole}</div>
            <div class="holeRow, parStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].par}</div>
            <div class="holeRow, yardsStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].yards}</div>
            <div class="holeRow, hcpStyle">${selectedCourse.data.holes[c].teeBoxes[selectedTees].hcp}</div>
            </div>`)
    }
    $('.courseInfoBox').append(`<div class="totalColumn inTotals">IN</div>`);
    for (let i = 9; i < selectedCourse.data.holes.length; i++) {
        inPar += selectedCourse.data.holes[i].teeBoxes[selectedTees].par;
        inYards += selectedCourse.data.holes[i].teeBoxes[selectedTees].yards;
    }
    $('.inTotals').append(`<div class="parStyle">${inPar}</div>`);
    $('.inTotals').append(`<div class="yardsStyle">${inYards}</div>`);


    $('.courseInfoBox').append(`<div class="totalColumn totalTotal">TOTAL</div>`);
    for (let t = 0; t < selectedCourse.data.holes.length; t++) {
        totalPar += selectedCourse.data.holes[t].teeBoxes[selectedTees].par;
        totalYards += selectedCourse.data.holes[t].teeBoxes[selectedTees].yards;
    }
    $('.totalTotal').append(`<div class="parStyle">${totalPar}</div>`);
    $('.totalTotal').append(`<div class="yardsStyle">${totalYards}</div>`);


    $('.holeParYardBox').append(`<div>
            <div class="holeStyle">hole</div>
            <div class="parStyle">par</div>
            <div class="yardsStyle">yards</div>
            <div class="hcpStyle">handicap</div>
            </div>`);
    $('.playerBox').append(`<div class="addPlayerBox"><input class="addPlayerInput" type="text" placeholder="type name here" onkeyup="createPlayer(this, event)"></div>`)
}

function createPlayer(val) {
    switch(event.key) {
        case 'Enter':
            let myid = playerX.playersArray.length;
            playerX.addPlayer(myid, val.value);

            let players = 1;
            $('.playerBox').append(`<div>
               ${val.value}
                </div>`);
            $('.addPlayerInput').val('');
            for (let p = 0; p < players; p++) {
                for (let h = 0; h < selectedCourse.data.holes.length; h++) {
                    $('#col' + h).append(`<input onkeyup="calculateScores(this, event)" class="scoreInputBox" id="p${p}h${h}" type="number">`)
                }
            }
    }
    console.log(playerX.playersArray);
}


function calculateScores(val, event) {
    switch(event.key) {
        case 'Enter':
            PlayerCollection.addScore();
    }
}









//
// $('.playerBox').append(`<input type="text" onkeyup="createPlayer(this, event)" placeholder="type name here">`)
// }
//
// function createPlayer(val, event) {
//     switch(event.key) {
//         case 'Enter':
//             let myid = playerX.playersArray.length;
//             playerX.addPlayer(myid, val);
//     }
//
// }






















