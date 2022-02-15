var timeblocksEl = document.getElementById('time-blocks');
var data = JSON.parse(localStorage.getItem('data')) || {};
var timeHeaderEl = document.getElementById('time-header');
var date = new Date();
var START = 9;
var END = 23;

function createTimeBlocks(start, end) {
  for(var i = start; i < end; i++) {
    var timeBlock = document.createElement('div');
    var timeEl = document.createElement('p');
    var timeInputEl = document.createElement('input');
    var timeSaveButton = document.createElement('button');

    
    if(date.getHours() < i){
        timeBlock.style.color='#00FF00'
    }else if(date.getHours() > i){
        timeBlock.style.color='#FF0000'
    }
    timeSaveButton.setAttribute('data-hour', i);
    timeInputEl.id = 'hour-' + i;
    timeInputEl.value = data[i] || '';
    if (i == 12) {
      timeEl.textContent = i + ' pm';
    }
    else if(i > 12){
      timeEl.textContent = (i-12) + ' pm';
    } else {
      timeEl.textContent = i + ' am';
    }
    timeSaveButton.textContent = 'Save'
    timeSaveButton.addEventListener('click', function(event) {
      var hour = event.target.getAttribute('data-hour');
      var input = document.getElementById('hour-' + hour)
      var inputValue = input.value;
      data[hour] = inputValue;
      localStorage.setItem('data', JSON.stringify(data));
    })

    timeBlock.appendChild(timeEl);
    timeBlock.appendChild(timeInputEl);
    timeBlock.appendChild(timeSaveButton); 
    timeblocksEl.appendChild(timeBlock);
  }
}

function setTime() {
    setInterval(function() {
        timeHeaderEl.textContent = new Date();
    }, 10);
}

setTime();
createTimeBlocks(START, END);