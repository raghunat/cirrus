'use strict';
var inherits = require('util').inherits;
var Module = require('../module');
/**
 * Cirrus Task constructor
 * @constructor
 * @param {Object} options Optional object containing name, description, event, and handler options
 */
function Task(options) {
  options = options || {};
  // Inherit
  Module.call(this, options);
  this._handler = options.handler || null;
  return this;
}

// Inherits
inherits(Task, Module);

/**
 * Sets the task's handler
 * @param  {string} handler The task handler used in building and deployment
 * @return {Object}      Object chain of this task instance
 */
Task.prototype.handler = function (handler) {
  this._handler = handler;
  return this; // Chain Object
};

module.exports = Task;
