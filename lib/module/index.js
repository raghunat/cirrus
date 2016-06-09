'use strict';

/**
 * Cirrus Module Constructor
 * @constructor
 * @param {Object} options Options objects for use in constructor vs chain methods
 */
function Module(options) {
  options = options || {};
  this._name = options.name || null;
  this._description = options.description || null;
  this._dependencies = options.dependencies || null;
  this._expose = options.expose || null;
  return this;
}

/**
 * Sets the modules to inject
 * @param  {Array} toInject Array of strings
 * @return {Object}          Object chain
 */
Module.prototype.dependencies = function (toInject) {
  this._dependencies = toInject;
  return this;
};

/**
 * Sets the Module's name
 * @param  {string} name The Module name used in building and deployment
 * @return {Object}      Object chain of this Module instance
 */
Module.prototype.name = function (name) {
  this._name = name;
  return this; // Chain Object
};

/**
 * Sets the Module's description
 * @param  {string} description The Module description used in building and deployment
 * @return {Object}      Object chain of this Module instance
 */
Module.prototype.description = function (description) {
  this._description = description;
  return this; // Chain Object
};

/**
 * Sets the Module's Exposed function
 * @param  {string} Exposed function The Module Exposed function used in building and deployment
 * @return {Object}      Object chain of this Module instance
 */
Module.prototype.expose = function (fn) {
  this._expose = fn;
  return this;
};

/**
 * Assigns options used for deploying/building
 * @param  {Object} options Options object
 * @return {Object} This Instance         
 */
Module.prototype.options = function (options) {
  this._options = options;
  return this;
};

module.exports = Module;
