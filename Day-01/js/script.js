const changText = document.querySelector(".main__heading");
const yesButton = document.querySelector(".btn-yes");
const ofCourse = document.querySelector(".btn-ofcourse");
yesButton.addEventListener('click', () => {
    changText.innerHTML = "I LOVE YOU &#128512;";
})
ofCourse.addEventListener('click', () => {
    changText.innerHTML = "I LOVE YOU. Too&#128512;"
})