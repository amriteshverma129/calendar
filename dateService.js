export default class DateService {
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