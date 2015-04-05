hr.queue [![Build Status](https://travis-ci.org/HappyRhino/hr.queue.png?branch=master)](https://travis-ci.org/HappyRhino/hr.queue)
=============================

> Async jobs queue

## Installation

```
$ npm install hr.queue
```

### Documentation

#### Creation

```js
var Queue = require("hr.queue");

var queue = new Queue();
```

#### Defer a task

```js
queue.defer(function() {
    return runAsyncStuff();
})
.then(function() {
    // This is called once the task has been runned
});
```
