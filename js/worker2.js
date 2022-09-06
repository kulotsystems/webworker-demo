onmessage = (message) => {
    let sum = 0;
    for(let i=0; i<999999999; i++) {
        sum += 1;
    }
    console.log(sum);
    postMessage(`${message.data} | Work2 Done!`);
}
