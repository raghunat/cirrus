'use strict';
var inherits = require('util').inherits;
var Module = require('../module');


/**
 * API Router Cirrus module
 * @constructor
 * @param {Object} options Options objects to set defaults
 */
function Router(options) {
  options = options || {};
  Module.call(this, options);
  return this;
}

// Inherit
inherits(Router, Module);

/**
 * Sets the Resource route
 * @param  {String} str Desired route
 * @return {Object}     Router Chain object
 */
Router.prototype.path = function (str) {
  this._path = str;
  return this;
};

/**
 * Sets the get method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.get = function (fn) {
  this._get = fn;
  return this;
};

/**
 * Sets the post method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.post = function (fn) {
  this._post = fn;
  return this;
};


/**
 * Sets the put method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.put = function (fn) {
  this._put = fn;
  return this;
};

/**
 * Sets the delete method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.delete = function (fn) {
  this._delete = fn;
  return this;
};

/**
 * Sets the patch method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.patch = function (fn) {
  this._patch = fn;
  return this;
};

/**
 * Sets the options method on this route
 * @param  {Function} fn req/res style function
 * @return {Object}      Router chain object
 */
Router.prototype.options = function (fn) {
  this._options = fn;
  return this;
};

module.exports = Router;
