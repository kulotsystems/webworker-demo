onmessage = (message) => {
    let sum = 0;
    for(let i=0; i<888888888; i++) {
        sum += 1;
    }
    console.log(sum);
    postMessage(`${message.data} | Work1 Done!`);
}
