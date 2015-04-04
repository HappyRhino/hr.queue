var Queue = require("../");

describe('Queue', function() {

    describe('defer', function() {

        it('should correctly run a task', function(done) {
            var queue = new Queue();

            queue.defer(function() {
                expect(queue.size()).to.equal(0);
                done();
            });
        });

    });

});

