'use strict';
// jshint esnext:true
var should = require('should'); //jshint ignore:line
var Engine = require('./index');
var empty = function() {};
empty(); //coverage use
var base;

describe('Engine Interface', function() {
  beforeEach(function() {
    base = new Engine(empty, empty, empty,empty, empty,empty, empty, empty);
  });

  it('should expose an engine constructor', function (done) {
    (base instanceof Engine).should.be.true; //jshint ignore:line
    done();
  });
  it('should provide a validate access interface method', function (done) {
    base.validate.should.be.a.Function; //jshint ignore:line
    done();
  });
  it('should provide a pre validate interface method', function (done) {
    base.pre.should.be.a.Function; //jshint ignore:line
    var s = new Engine(null, empty, empty, empty);
    s.pre().then((result) => {
      should(result).be.null;

      done();
    });
  });
  it('should provide a post interface method', function (done) {
    base.pre.should.be.a.Function; //jshint ignore:line
    var s = new Engine(null, empty, empty, empty, null);
    s.post().then((result) => {
      should(result).be.null;

      done();
    });
  });
  it('should provide a build artifacts interface method', function (done) {
    base.build.should.be.a.Function; //jshint ignore:line
    done();
  });
  it('should provide a deploy artifacts interface method', function (done) {
    base.deploy.should.be.a.Function; //jshint ignore:line
    done();
  });
  it('should validate that all interface methods are filled', function (done) {
    (function(){let s = new Engine(null);}).should.throw(/validate function/); //jshint ignore:line
    (function(){let s = new Engine(null, empty);}).should.throw(/build function/); //jshint ignore:line
    (function(){let s = new Engine(null, empty, empty);}).should.throw(/deploy function/); //jshint ignore:line
    done();
  });
});
