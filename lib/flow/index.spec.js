'use strict';
var _ = require('lodash');
var Flow = require('./index');
var Task = require('../task');


describe('Flow Construct', function() {
  it('should have a name chain function', function(done) {
    var w = new Flow({name: 'tester'});
    w.name('Test').should.be.an.Object; //jshint ignore:line
    w._name.should.equal('Test');
    done();
  });
  it('should have a description chain function', function(done) {
    var w = new Flow();
    w.description('Test').should.be.an.Object; //jshint ignore:line
    w._description.should.equal('Test');
    done();
  });
  it('should have a tasks chain function', function(done) {
    var w = new Flow();
    (function() {
      w.tasks('wrong');
    }).should.throw(/should be an array/);
    (function() {
      w.tasks([{}]);
    }).should.throw(/needs to be a task instance/);
    w.tasks([
      new Task(),
      new Task(),
    ]).should.be.an.Object; //jshint ignore:line
    _.isEqual(w._tasks, [new Task(), new Task()]).should.be.true; //jshint ignore:line
    done();
  });
  it('should have a process chain function', function(done) {
    var t = new Flow();
    var decider = function() {};
    decider();
    t.process(decider);
    (t._process.toString() === decider.toString()).should.be.true; //jshint ignore:line
    done();
  });
});
