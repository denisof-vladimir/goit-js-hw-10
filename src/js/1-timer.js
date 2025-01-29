// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// import { s } from "vite/dist/node/types.d-aGj9QkWt";
let userSelectedDate = null;
const elementsTimer  = {
    days: document.querySelector('.js-days'),
    hours: document.querySelector('.js-hours'),
    minutes: document.querySelector('.js-minutes'),
    seconds: document.querySelector('.js-seconds'),
}

function addLeadingZero(value) { return String(value).padStart(2,'0');   }
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            iziToast.show({
                title: 'Hey',
                color: 'red',
                position:'center',
                message: 'Please choose a date in the future'
            });
            return;
        }
        userSelectedDate = selectedDates[0];
        startBtn.disabled = false;
    },
  };
  
const onStartTimer = event => {
    startBtn.disabled = true;
    initialData.disabled = true;
    const nomSetInterval = setInterval(()=>{
        const diffTimer=userSelectedDate-Date.now();
        if (diffTimer<1) {
            clearInterval(nomSetInterval);
            initialData.disabled = false;
            return;
        }
        const diffConvertTime=convertMs(diffTimer);
        elementsTimer.days.textContent=addLeadingZero(diffConvertTime.days);
        elementsTimer.hours.textContent=addLeadingZero(diffConvertTime.hours);
        elementsTimer.minutes.textContent=addLeadingZero(diffConvertTime.minutes);
        elementsTimer.seconds.textContent=addLeadingZero(diffConvertTime.seconds);
    }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
  }

const initialData = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
startBtn.disabled = true;
startBtn.addEventListener('click', onStartTimer);

flatpickr(initialData, options);

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}