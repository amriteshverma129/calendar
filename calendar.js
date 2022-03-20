
import DateService from "./dateService.js";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


class Calendar {
    constructor() {
        this.dateService = new DateService();
        this.currentMonthIndex = this.dateService.getCurrentMonthIndex();
        this.currentDate = this.dateService.getCurrentDate();
        this.currentYear = this.dateService.getCurrentYear();
        this.year = this.currentYear;
        this.monthIndex = this.currentMonthIndex;

    }
    createCalendar() {
        const daysInMonth = this.dateService.getMonthDays(this.year, this.monthIndex);
        let FirstDayIndex = this.dateService.getDayIndex(months[this.monthIndex], 1, this.year);
        document.querySelector('.calendar').innerHTML = '';
        for (let i = 0; i < FirstDayIndex; i++) {
            document.querySelector('.calendar').innerHTML += `<div></div>`
        }
        for (let i = 1; i <= daysInMonth; i++) {
            document.querySelector('.calendar').innerHTML += `<div><span class=${this.currentDate === i && this.currentMonthIndex === this.monthIndex && this.currentYear === this.year ? "currentDate" : ''}>${i}</span></div>`
        }
    }

    setHeading() {
        document.querySelector('.heading').innerHTML = `${months[this.monthIndex]} ${this.year}`
    }
    decreaseYear() {
        this.year = this.year - 1;
    }
    increaseYear() {
        this.year = this.year + 1;
    }
    decreaseMonth() {
        if (this.monthIndex === 0) {
            this.monthIndex = 11;
            this.decreaseYear()
        }
        else {
            this.monthIndex = this.monthIndex - 1;
        }
    }
    increaseMonth() {
        if (this.monthIndex === 11) {
            this.monthIndex = 0;
            this.increaseYear();
        }
        else {
            this.monthIndex = this.monthIndex + 1;
        }
    }
}


const newCalendar = new Calendar();
newCalendar.createCalendar();
newCalendar.setHeading();
document.querySelector('.right').addEventListener('click', () => {
    newCalendar.increaseMonth();
    newCalendar.createCalendar();
    newCalendar.setHeading();
})
document.querySelector('.left').addEventListener('click', () => {
    newCalendar.decreaseMonth();
    newCalendar.createCalendar();
    newCalendar.setHeading();
})

