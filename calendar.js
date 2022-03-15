const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//const day = days[d.getDay()];
const currentMonthIndex = d.getMonth();
const date = d.getDate();
const currentYear = d.getFullYear();





function createCalendar(monthIndex, year) {
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    document.querySelector('.heading').innerHTML = `${months[monthIndex]} ${year}`
    for (let i = 0; i < 7; i++) {
        document.querySelector('.' + days[i]).innerHTML = ''
    }
    for (let i = 1; i <= daysInMonth; i++) {
        let dayIndex = new Date(`${months[monthIndex]} ${i}, ${year} `).getDay();
        if (i === 1 && dayIndex !== 0) {
            for (let j = 0; j < dayIndex; j++) {
                document.querySelector('.' + days[j]).innerHTML += `<div class="date"></div>`
            }
        }
        document.querySelector('.' + days[dayIndex]).innerHTML += `<div class="date eventDate"><span class=${date === i && currentMonthIndex === monthIndex && currentYear === year ? "currentDate" : ''}>${i}</span></div>`
    }
}


let count = currentMonthIndex;
let year = currentYear;
createCalendar(count, year);
document.querySelector('.right').addEventListener('click', () => {
    count = count + 1;
    if (count === 12) {
        count = 0;
        year = year + 1;
    }
    createCalendar(count, year);

})
document.querySelector('.left').addEventListener('click', () => {
    count = count - 1;
    if (count === -1) {
        count = 11;
        year = year - 1;
    }
    createCalendar(count, year);

})
// document.querySelectorAll('.day').forEach((day, index) => {
//     Array.from(day.children).forEach((date) => {
//         date.addEventListener('click', (e) => {

//         })
//     })
// })
