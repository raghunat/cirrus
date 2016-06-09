'use strict';
var cirrus = require('../index');
var should = require('should');
describe('Router Constructor', function() {
  it('should be a cirrus module', function () {
    var test = new cirrus.Module();
    (test instanceof cirrus.Module).should.be.true; //jshint ignore:line
  });

  it('should have a dependencies method', function () {
    var test = new cirrus.Module();
    test.dependencies.should.be.a.function;
    test.dependencies([]);
    test._dependencies.should.be.an.array;
  });

  it('should have an expose method', function () {
    var test = new cirrus.Module();
    test.expose.should.be.a.function;
    test.expose(function () {});
    test._expose.should.be.an.function;
    test._expose();
  });
  it('should have an options method', function () {
    var test = new cirrus.Module();
    test.options.should.be.a.function;
    test.options({});
    test._options.should.be.an.object;
  });
});
