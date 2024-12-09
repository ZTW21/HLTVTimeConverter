// Function to convert 24-hour time to 12-hour format
function convertTimeFormat(element) {
    const timeText = element.textContent.trim();
    if (!timeText.includes(':')) return; // Skip invalid time formats

    const [hours24, minutes] = timeText.split(':').map(Number);
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour format
    const amPm = hours24 < 12 ? 'AM' : 'PM';

    // Update the element text with the 12-hour format and AM/PM
    const newTime = `${hours12}:${minutes.toString().padStart(2, '0')} ${amPm}`;
    if (element.textContent.trim() !== newTime) {
        element.textContent = newTime;
    }
}

// Function to handle all time conversions
function updateAllTimes() {
    // Convert elements with the 'matchTime' class
    const matchTimeElements = document.querySelectorAll('.matchTime');
    matchTimeElements.forEach(convertTimeFormat);

    // Convert <span> elements with the 'data-time-format' attribute
    const timeSpanElements = document.querySelectorAll('span[data-time-format]');
    timeSpanElements.forEach(convertTimeFormat);

    // Convert <div> elements with the 'time' class
    const timeDivElements = document.querySelectorAll('.time[data-time-format]');
    timeDivElements.forEach(convertTimeFormat);

    // Convert <span> elements with the 'bold time-time' class
    const boldTimeElements = document.querySelectorAll('span.bold.time-time');
    boldTimeElements.forEach(convertTimeFormat);
}

// Initial conversion for elements present on page load
updateAllTimes();
