var timeblocksEl = document.getElementById('time-blocks');


for(var i = 0; i < 13; i++) {
    var timeBlock = document.createElement('div');
    var timeEl = document.createElement('p');
    var timeInputEl = document.createElement('input');
    var timeSaveButton = document.createElement('button');

    timeEl.textContent = i + ' hours';
    timeSaveButton.textContent = 'Save'

    timeBlock.appendChild(timeEl);
    timeBlock.appendChild(timeInputEl);
    timeBlock.appendChild(timeSaveButton);
    timeblocksEl.appendChild(timeBlock);
}