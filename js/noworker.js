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


// no worker 1
btnWorker1.addEventListener('click', () => {
    btnWorker1.disabled = true;
    tdWorker1.innerHTML = 'working...'

    let sum = 0;
    for(let i=0; i<888888888; i++) {
        sum += 1;
    }
    console.log(sum);
    tdWorker1.innerHTML = `${counter} | Work1 Done!`;
    btnWorker1.disabled = false;
});


// no worker 2
btnWorker2.addEventListener('click', () => {
    btnWorker2.disabled = true;
    tdWorker2.innerHTML = 'working...'

    let sum = 0;
    for(let i=0; i<999999999; i++) {
        sum += 1;
    }
    console.log(sum);
    tdWorker2.innerHTML = `${counter} | Work2 Done!`;
    btnWorker2.disabled = false;
});
