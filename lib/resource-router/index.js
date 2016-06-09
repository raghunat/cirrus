'use strict';
var inherits = require('util').inherits;
var Module = require('../module');


/**
 * API ResourceRouter Cirrus module
 * @constructor
 * @param {Object} options Options objects to set defaults
 */
function ResourceRouter(options) {
  options = options || {};
  Module.call(this, options);
  return this;
}

// Inherit
inherits(ResourceRouter, Module);

///////////////////
// Map all verbs //
///////////////////

['get', 'getId', 'post', 'postId', 'put', 'putId', 'delete', 'deleteId', 'options', 'optionsId'].forEach(function (method) {
  /**
   * Sets the get method on this route
   * @param  {Function} fn req/res style function
   * @return {Object}      ResourceRouter chain object
   */
  ResourceRouter.prototype[method] = function (fn) {
    this['_' + method] = fn;
    return this;
  };
});

module.exports = ResourceRouter;
