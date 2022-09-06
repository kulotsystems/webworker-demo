## Web Worker Demo
There are three buttons on the page:

| Button   | Function                                                 |
|----------|----------------------------------------------------------|
| Default  | Normal counter feature in the main thread.               |
| Worker 1 | Initiate [worker1.js](js/worker1.js) in separate thread. |
| Worker 2 | Initiate [worker2.js](js/worker2.js) in separate thread  |

The counter feature cannot be blocked by the execution of the two workers.


### Preview
Access <https://kulotsystems.github.io/webworker-demo>
