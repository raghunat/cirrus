'use strict';
var cirrus = require('../index');
var should = require('should');
describe('Resource Constructor', function () {
  it('should be a type of Resource and Module classes', function () {
    cirrus.Resource.should.be.function; //jshint ignore:line
    var r = new cirrus.Resource();
    (r instanceof cirrus.Module).should.be.true; //jshint ignore:line
  });
  it('should expose common http methods', function () {
    var r = new cirrus.Resource();
    // jshint ignore:start
    r.get.should.be.a.function;
    r.post.should.be.a.function;
    r.delete.should.be.a.function;
    r.put.should.be.a.function;
    r.options.should.be.a.function;
    // jshint ignore:end
  });

  it('should register the meta information and common http methods', function () {
    var empty = function () {};
    // coverage
    empty();
    var r = new cirrus.Resource();
    r.get(empty);
    r.post(empty);
    r.delete(empty);
    r.put(empty);
    r.options(empty);

    // jshint ignore:start
    r._get.should.be.a.function;
    r._post.should.be.a.function;
    r._delete.should.be.a.function;
    r._put.should.be.a.function;
    r._options.should.be.a.function;
    // jshint ignore:end
  });
});
