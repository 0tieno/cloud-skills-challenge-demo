// Calculate remaining time until the event starts in minutes
function calculateRemainingTimeInMinutes() {
    const eventTime = new Date('2024-03-24T20:00:00+0300'); // Event time: 7:00 PM EAT
    const currentTime = new Date();
  
    const timeDifference = eventTime - currentTime;
  
    const minutes = Math.floor(timeDifference / (1000 * 60));
  
    return minutes;
  }
  
  // Update remaining time every minute
  function updateRemainingTime() {
    const remainingTimeElement = document.getElementById('remaining-time');
    if (remainingTimeElement) {
      const remainingMinutes = calculateRemainingTimeInMinutes();
      remainingTimeElement.textContent =  remainingMinutes + ' minutes';
    }
  }
  
  // Update remaining time initially and start updating every minute
  updateRemainingTime();
  setInterval(updateRemainingTime, 60000); // Update every minute (60 seconds)
  

//   footer full year time method
function getFullYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  function updateFullYear() {
    const fullYearElement = document.getElementById('footer-full-year');
    if (fullYearElement) {
      fullYearElement.textContent = '©' + '' + getFullYear() + ' cloudskillschallenge. happy learning!. ';
    }
  }
  
  updateFullYear();