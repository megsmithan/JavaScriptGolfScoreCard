
function showCard(teeType) {
    // $('.courseBox').hide();

    let selectedTees = teeType;
    let outPar = 0;
    let outYards = 0;
    let inPar = 0;
    let inYards = 0;
    let totalPar = 0;
    let totalYards = 0;

    $('.courseCard').prepend(`<div class="infoBox"><div id="courseName">${selectedCourse.data.name}</div></div>`);
    // $('.courseCard').prepend(`<div id="newCourse"><button onclick="newCourseBtn()">select a different course</button></div>`);


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
    $('.outTotals').append(`<div class="hcpStyle">-</div>`);

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
    $('.inTotals').append(`<div class="hcpStyle">-</div>`);


    $('.courseInfoBox').append(`<div class="totalColumn totalTotal">TOTAL</div>`);
    for (let t = 0; t < selectedCourse.data.holes.length; t++) {
        totalPar += selectedCourse.data.holes[t].teeBoxes[selectedTees].par;
        totalYards += selectedCourse.data.holes[t].teeBoxes[selectedTees].yards;
    }
    $('.totalTotal').append(`<div class="parStyle">${totalPar}</div>`);
    $('.totalTotal').append(`<div class="yardsStyle">${totalYards}</div>`);
    $('.totalTotal').append(`<div class="hcpStyle">-</div>`);


    $('.holeParYardBox').append(`<div>
            <div class="holeStyle">hole</div>
            <div class="parStyle">par</div>
            <div class="yardsStyle">yards</div>
            <div class="hcpStyle">handicap</div>
            </div>`);
    $('.playerBox').append(`<div class="addPlayerBox"><input class="addPlayerInput" type="text" placeholder="type name here" onkeyup="createPlayer(this.value, event)"></div>`)

}

function createPlayer(val) {
    switch(event.key) {
        case 'Enter':
            let myid = playerX.playersArray.length;
            playerX.addPlayer(myid, val);

            let players = 1;

            $('.playerBox').prepend(`<div>
               ${val}
                </div>`);
            $('.addPlayerInput').val('');
            for (let p = 0; p < players; p++) {
                $('.outTotals').append(`<div id = out${myid}>0</div>`);
                $('.inTotals').append(`<div id = in${myid}>0</div>`);
                $('.totalTotal').append(`<div id = total${myid}>0</div>`);
                for (let h = 0; h < selectedCourse.data.holes.length; h++) {
                    $('#col' + h).append(`<input onkeyup="calculateScores(${myid}, this.value)" class="scoreInputBox" id="p${myid}h${h}" type="number">`);

                }
            }

            if(playerX.playersArray.length === 4) {
                $('.addPlayerBox').hide();
            }
    }
    //console.log(playerX.playersArray);

}

function calculateScores(id) {
    let outTotal = 0;
    let total = 0;
    let inTotal = 0;

    for(let h = 0; h < 9; h++) {
        outTotal += Number($(`#p${id}h${h}`).val());
    }
    $(`#out${id}`).html(outTotal);

    for(let h = 9; h < 18; h++) {
        inTotal += Number($(`#p${id}h${h}`).val());
    }
    $(`#in${id}`).html(inTotal);

    for(let h = 0; h < 18; h++) {
        total += Number($(`#p${id}h${h}`).val());



        // for (let i = 0; i < playerX.playersArray.length; i++) {
        //     if (playerX.playersArray[i].id === id) {
        //         playerX.playersArray[i].addInScore($(`#p${id}h${h}`), Number($(`#p${id}h${h}`).val()));
        //         console.log(playerX.playersArray[i].inArray);
        //
        // }
    $(`#total${id}`).html(total);
        // if ($(`#p${id}h${h}`) !== null) {
        //     $('.courseBox').append(`<div>great</div>`);
        // }

        }
        // let inSum = playerX.playersArray[i].inArray.reduce((a, b) => a + b);
        // playerX.playersArray[i].inScore(inSum);
        // console.log(playerX.playersArray[i].inscore);
        // $('#in' + id).html(`${playerX.playersArray[i].inscore}`);


    //if all the p${p}h{h} inputs have a value, display modal?

    //make array, push values, if statement with id to replace existing value;
    //when array.length = 18; display modal

}







// function newCourseBtn() {
//     //$('.courseCard').html('');
//     $('.courseBox').show();
// }



























