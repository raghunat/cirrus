'use strict';
var Promise = require('bluebird');
var assert = require('assert');
// Helpers
var missing = function (message) {
  throw new Error(message);
};

var assertFunctionOrFalsy = function (fn) {
  assert(!fn || typeof fn === 'function', 'Value should be left undefined or a valid function');
};

/**
 * Cirrus Engine constructor
 * @param {function} validate      Function to execute during validation stages
 * @param {function} buildCompute  Function to build Compute artifacts
 * @param {function} buildAPI      Function to build API artifacts
 * @param {function} buildFlow     Function to build Flow artifacts
 * @param {function} deployCompute Function to deploy Compute artifacts
 * @param {function} deployAPI     Function to deploy API artifacts
 * @param {function} deployFlow    Function to deploy Flow artifacts
 */
function Engine(pre, validate, build, deploy, post) {
  // Enforce type checking for the sake of sanity in a dynamic world
  assertFunctionOrFalsy(pre);
  assertFunctionOrFalsy(validate);
  assertFunctionOrFalsy(build);
  assertFunctionOrFalsy(deploy);
  assertFunctionOrFalsy(post);

  this.pre = pre || function () {
    return Promise.resolve(null);
  }; // optional

  this.validate = validate || missing('You need a validate function');
  this.build = build || missing('You need a build function');
  this.deploy = deploy || missing('You need a deploy function');
  this.post = post || function () {
    return Promise.resolve(null);
  }; // optional
}

module.exports = Engine;
