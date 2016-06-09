'use strict';
var _ = require('lodash');
var task = require('./index');

describe('Task Construct', function() {
  it('should have a name chain function', function(done) {
    var t = new task();
    t.name('my-name').should.be.an.Object; //jshint ignore:line
    t._name.should.equal('my-name');
    done();
  });

  it('should have a description chain function', function(done) {
    var t = new task();
    t.description('my-description').should.be.an.Object; //jshint ignore:line
    t._description.should.equal('my-description');
    done();
  });

  it('should have a handler chain function', function(done) {
    var t = new task();
    var handler = function() {};
    handler();
    t.handler(handler);
    (t._handler.toString() === handler.toString()).should.be.true; //jshint ignore:line
    done();
  });
});
