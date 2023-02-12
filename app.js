

function createTimeRanges(startDateTime, endDateTime, intervalInMinutes) {
const timeRanges = [];
let currentDateTime = new Date(startDateTime);



while (currentDateTime < endDateTime) {
const start = currentDateTime.toString();
currentDateTime.setMinutes(currentDateTime.getMinutes() + intervalInMinutes);
const end = new Date(currentDateTime.getTime() - 1000).toString();
timeRanges.push([start, end]);
}



return timeRanges.map(range => range.map(dateString => new Date(dateString)));
}



function setTimeRanges(instance, date, intervalInMinutes) {
const startDateTime = new Date(date);
startDateTime.setHours(0, 0, 0, 0);
const endDateTime = new Date(date);
endDateTime.setHours(23, 59, 59, 999);
const timeRanges = createTimeRanges(startDateTime, endDateTime, intervalInMinutes);



if (typeof instance.data.setTimeRange === 'function') {
instance.data.setTimeRange(timeRanges);
}
}

instance = {
data: {
setTimeRange: (timeRanges) => {
  timeRanges.forEach(function(range) {
     let table = '<table><tr><th>Start Date Time</th><th>End Date Time</th></tr>';
    timeRanges.forEach(function(range) {
      table += '<tr><td>' + range[0].toString() + '</td><td>' + range[1].toString() + '</td></tr>';
    });
    table += '</table>';
    let show = document.getElementById('show');
    show.innerHTML = table;

});
},
},
};

const date = '1/2/2023';
const intervalInMinutes = 30;
setTimeRanges(instance, date, intervalInMinutes);

