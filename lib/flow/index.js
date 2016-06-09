'use strict';
var inherits = require('util').inherits;
var Task = require('../task');
var Module = require('../module');
/**
 * Cirrus Flow constructor
 * @constructor
 * @param {Object} options Options object containing name, description, version, domain, tasks, and process items
 */
function Flow (options) {
  options = options || {};
  Module.call(this, options);
  this._tasks = options.tasks || null;
  this._process = options.process || null;
  return this;
}

// Inherits
inherits(Flow, Module);
/**
 * Sets the flow's tasks and returns the flow to chain with.
 * @param  {String} tasks Flow tasks used for building and deploying. must be instances of a cirrus Task
 * @return {object}      Chain object
 */
Flow.prototype.tasks = function (arr) {
  var self = this;
  if (!Array.isArray(arr)) {
      throw new Error('The flow task list should be an array');
    }
    arr.forEach(function (a) {
      if (a instanceof Task === false) {
        throw new Error('Each item in the task list needs to be a task instance');
      }
      a._flowName = self._name; // Associate tasks to flows
    });
  this._tasks = arr;
  return this; // Chain Object
};



/**
 * Sets the flow's process and returns the flow to chain with.
 * @param  {String} process Flow process used for controlling flow logic.
 * @return {object}      Chain object
 */
Flow.prototype.process = function (proc) {
  this._process = proc;
  return this; // Chain Object
};

module.exports = Flow;
