'use strict';
var should = require('should');
var cirrus = require('./index');

describe('Cirrus Framework Interface', function () {
  it('should expose a task constructor', function () {
    cirrus.Task.should.be.a.function;  //jshint ignore:line
    var test = new cirrus.Task();
    (test instanceof cirrus.Task).should.be.true; //jshint ignore:line
  });
  it('should expose a flow constructor', function () {
    cirrus.Flow.should.be.a.function;  //jshint ignore:line
    var test = new cirrus.Flow();
    (test instanceof cirrus.Flow).should.be.true; //jshint ignore:line
  });
});
