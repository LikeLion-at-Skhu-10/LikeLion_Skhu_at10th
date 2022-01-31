//커서 가져다 대면 나머지 반투명해지는거

function over(leo_lion) {
    leo_lion.style.opacity = "0.3"
}
function out(leo_lion) {
    leo_lion.style.opacity = "1"
}

function over(leo_video) {
    leo_video.style.opacity = "0.3"
}
function out(leo_video) {
    leo_video.style.opacity = "1"
}

function over(leo_introduce) {
    leo_introduce.style.opacity = "0.3"
}
function out(leo_introduce) {
    leo_introduce.style.opacity = "1"
}

function over(leo_recruit) {
    leo_recruit.style.opacity = "0.3"
}
function out(leo_recruit) {
    leo_recruit.style.opacity = "1"
}

function over(leo_schedule) {
    leo_schedule.style.opacity = "0.3"
}
function out(leo_schedule) {
    leo_schedule.style.opacity = "1"
}

function over(leo_rulecurri) {
    leo_rulecurri.style.opacity = "0.3"
}
function out(leo_rulecurri) {
    leo_rulecurri.style.opacity = "1"
}

function over(leo_slide) {
    leo_slide.style.opacity = "0.3"
}
function out(leo_slide) {
    leo_slide.style.opacity = "1"
}

function over(leo_event) {
    leo_event.style.opacity = "0.3"
}
function out(leo_event) {
    leo_event.style.opacity = "1"
}

function over(leo_madein) {
    leo_madein.style.opacity = "0.3"
}
function out(leo_madein) {
    leo_madein.style.opacity = "1"
}

function over(leo_footer) {
    leo_footer.style.opacity = "0.3"
}
function out(leo_footer) {
    leo_footer.style.opacity = "1"
}

function changeVI() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_VI" style="text-decoration:none; color: rgb(255, 255, 255);"><p>소개영상</p></a>';
}

function changeIN() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_IN" style="text-decoration:none; color: rgb(255, 255, 255);"><p>멋사소개</p></a>';
}

function changeRE() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_RE" style="text-decoration:none; color: rgb(255, 255, 255);"><p>모집대상</p></a>';
}

function changeSC() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_SC" style="text-decoration:none; color: rgb(255, 255, 255);"><p>모집일정</p></a>';
}

function changeMU() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_MU" style="text-decoration:none; color: rgb(255, 255, 255);"><p>규칙 & 커리큘럼</p></a>';
}

function changeSL() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_SL" style="text-decoration:none; color: rgb(255, 255, 255);"><p>지난해 결과물</p></a>';
}

function changeEV() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_EV" style="text-decoration:none; color: rgb(255, 255, 255);"><p>이벤트 참여</p></a>';
}

function changeMA() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_MA" style="text-decoration:none; color: rgb(255, 255, 255);"><p>개발진들</p></a>';
}

function changeFO() {
    const element = document.getElementById("leo_title");
    element.innerHTML = '<a href="#leo_FO" style="text-decoration:none; color: rgb(255, 255, 255);"><p>멋사 정보</p></a>';
}