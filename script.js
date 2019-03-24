

getCourses();

function getCourses() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let allCourses = JSON.parse(this.responseText);
            console.log(allCourses);
            for (let c = 0; c < allCourses.courses.length; c++) {
                $('.courseBox').append(`<div>
                    <button onclick="selectCourse(${allCourses.courses[c].id})">${allCourses.courses[c].name}</button>
                   
                    </div>`);
            }
        }
    };
    xhttp.open("GET", "https://golf-courses-api.herokuapp.com/courses", true);
    xhttp.send();
}

function selectCourse() {

}