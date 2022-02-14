var timeblocksEl = document.getElementById('time-blocks');
var data = JSON.parse(localStorage.getItem('data')) || {};

for(var i = 0; i < 13; i++) {
    var timeBlock = document.createElement('div');
    var timeEl = document.createElement('p');
    var timeInputEl = document.createElement('input');
    var timeSaveButton = document.createElement('button');

    
    timeSaveButton.setAttribute('data-hour', i);
    timeInputEl.id = 'hour-' + i;
    timeInputEl.value = data[i] || '';
    timeEl.textContent = i + ' hours';
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