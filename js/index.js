// elements
const btnDefault = document.querySelector('#btnDefault');
const btnWorker1 = document.querySelector('#btnWorker1');
const btnWorker2 = document.querySelector('#btnWorker2');
const tdDefault  = document.querySelector('#tdDefault');
const tdWorker1  = document.querySelector('#tdWorker1');
const tdWorker2  = document.querySelector('#tdWorker2');


// main thread
let counter = 0;
btnDefault.addEventListener('click', () => {
    counter += 1;
    tdDefault.innerHTML = counter;
});


// worker 1
const worker1 = new Worker('js/worker1.js');
btnWorker1.addEventListener('click', () => {
    btnWorker1.disabled = true;
    tdWorker1.innerHTML = 'working...'
    worker1.postMessage(counter);
    worker1.onmessage = (message) => {
        tdWorker1.innerHTML = message.data;
        btnWorker1.disabled = false;
    };
});


// worker 2
const worker2= new Worker('js/worker2.js');
btnWorker2.addEventListener('click', () => {
    btnWorker2.disabled = true;
    tdWorker2.innerHTML = 'working...'
    worker2.postMessage(counter);
    worker2.onmessage = (message) => {
        tdWorker2.innerHTML = message.data;
        btnWorker2.disabled = false;
    };
});
