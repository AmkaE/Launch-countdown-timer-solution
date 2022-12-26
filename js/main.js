const days = document.querySelector('.days .number span');
const hours = document.querySelector('.hours .number span');
const minutes = document.querySelector('.minutes .number span');
const seconds = document.querySelector('.seconds .number span');

class TimerCoundDown {
	constructor(endDate, days, hours, minutes, seconds) {
		this.endDate = endDate;
		this.days = days;
		this.hours = hours;
		this.minutes = minutes;
		this.seconds = seconds;
	}

	get #timeRemaining() {
		// Get current date and time
		const currentDate = new Date();

		// Set event day's date
		const eventDay = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);

		// calculate difference between currentDate and event day's date
		const diff = eventDay - currentDate;

		const d = Math.floor(diff / 1000 / 60 / 60 / 24);
		const h = Math.floor(diff / 1000 / 60 / 60) % 24;
		const m = Math.floor(diff / 1000 / 60) % 60;
		const s = Math.floor(diff / 1000) % 60;

		return {
			d,
			h,
			m,
			s,
		};
	}

	get #getTimer() {
		const { d, h, m, s } = this.#timeRemaining;

		this.days.textContent = d < 10 ? '0' + d : d;
		this.hours.textContent = h < 10 ? '0' + h : h;
		this.minutes.textContent = m < 10 ? '0' + m : m;
		this.seconds.textContent = s < 10 ? '0' + s : s;
	}

	start() {
		this.#getTimer;
		setInterval(() => {
			this.#getTimer;
		}, 1000);
	}
}

const timerCoundDown = new TimerCoundDown(
	'2021-12-31',
	days,
	hours,
	minutes,
	seconds,
);

console.log(timerCoundDown);

timerCoundDown.start();
