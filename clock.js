function getCurrentTime() {
  // Instantiate date and time values
  const date = new Date()
  let currentHour = date.getHours()
  let currentMinute = date.getMinutes()
  let currentSecond = date.getSeconds()

  // Update data and time values using updateTime()
  currentHour = updateTime(currentHour)
  currentMinute = updateTime(currentMinute)
  currentSecond = updateTime(currentSecond)

  document.getElementById("hours").innerHTML = currentHour + " : "
  document.getElementById("minutes").innerHTML = currentMinute + " : "
  document.getElementById("seconds").innerHTML = currentSecond

  // Set timeout to update data in realtime
  const t = setTimeout(function(){ getCurrentTime() }, 1000)
}

// Sanitize clock data to show "0" if less than 10
function updateTime(value) {
  if (value < 10) {
    return "0" + value;
  } else {
    return value
  }
}

getCurrentTime()
