
let totalSeconds = 0;
let intervalId = null;
let isRunning = false;

const updateTimeLabel = () => {
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById('hr').textContent = hours + ':';
    document.getElementById('min').textContent = minutes + ':';
    document.getElementById('sec').textContent = seconds;
};

const startTimer = () => {
    return new Promise(resolve => {
        isRunning = true;
        intervalId = setInterval(() => {
            totalSeconds++;
            updateTimeLabel();
        }, 1000);
        resolve();
    });
};

const stopTimer = () => {
    return new Promise(resolve => {
        isRunning = false;
        clearInterval(intervalId);
        resolve();
    });
};

const resetTimer = () => {
    return new Promise(resolve => {
        totalSeconds = 0;
        updateTimeLabel();
        resolve();
    });
};

window.onload = async () => {
    const datePicker = document.getElementById('datePicker');

    const currentDate = new Date().toISOString().split('T')[0];
    datePicker.value = currentDate;

    datePicker.addEventListener('change', () => {
        const selectedDate = new Date(datePicker.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            alert('You selected a future date.');
            datePicker.value = currentDate.toISOString().split('T')[0];
        }
    });

    document.getElementById('startBtn').addEventListener('click', async () => {
        if (!isRunning) {
            await startTimer();
        }
    });

    document.getElementById('stopBtn').addEventListener('click', async () => {
        if (isRunning) {
            await stopTimer();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', async () => {
        await stopTimer();
        await resetTimer();
    });
};