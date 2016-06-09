'use strict';
var inherits = require('util').inherits;
var Module = require('../module');


/**
 * API Resource Cirrus module
 * @constructor
 * @param {Object} options Options objects to set defaults
 */
function Resource(options) {
  options = options || {};
  Module.call(this, options);
  return this;
}

// Inherit
inherits(Resource, Module);

///////////////////
// Map all verbs //
///////////////////

['get', 'getId', 'post', 'postId', 'put', 'putId', 'delete', 'deleteId', 'options', 'optionsId'].forEach(function (method) {
  /**
   * Sets the get method on this route
   * @param  {Function} fn req/res style function
   * @return {Object}      Resource chain object
   */
  Resource.prototype[method] = function (fn) {
    this['_' + method] = fn;
    return this;
  };
});

module.exports = Resource;
