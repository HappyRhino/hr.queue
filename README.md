Tasks Queue for HappyRhino
=============================

[![Build Status](https://travis-ci.org/HappyRhino/hr.queue.png?branch=master)](https://travis-ci.org/HappyRhino/hr.queue)


### Documentation

##### Creation

```js
var Queue = require("hr.queue");

var queue = new Queue();
```

##### Defer a task

```js
queue.defer(function() {
    return runAsyncStuff();
})
.then(function() {
    // This called once the task has been runned
});
```
