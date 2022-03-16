
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
class DateService {
    constructor() {
        this.currentDate = new Date();
    }

    getCurrentDate() {
        const date = this.currentDate.getDate();
        return date;
    }
    getCurrentMonthIndex() {
        const monthIndex = this.currentDate.getMonth();
        return monthIndex;
    }
    getCurrentYear() {
        const year = this.currentDate.getFullYear();
        return year;
    }
    getCurrentDayIndex() {
        const dayIndex = this.currentDate.getDay();
        return dayIndex;
    }
    getMonthDays(year, monthIndex) {
        const totalDays = new Date(year, monthIndex + 1, 0).getDate();
        return totalDays
    }
    getDayIndex(month, date, year) {
        const dayIndex = new Date(`${month} ${date}, ${year} `).getDay();
        return dayIndex;
    }

}

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
    setMonthIndexYearDecrease() {
        if (this.monthIndex === 0) {
            this.monthIndex = 11;
            this.year = this.year - 1;
        }
        else {
            this.monthIndex = this.monthIndex - 1;
        }
    }
    setMonthIndexYearIncrease() {
        if (this.monthIndex === 11) {
            this.monthIndex = 0;
            this.year = this.year + 1;
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
    newCalendar.setMonthIndexYearIncrease();
    newCalendar.createCalendar();
    newCalendar.setHeading();
})
document.querySelector('.left').addEventListener('click', () => {
    newCalendar.setMonthIndexYearDecrease();
    newCalendar.createCalendar();
    newCalendar.setHeading();
})

