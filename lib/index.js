'use strict';
var path = require('path');

/**
 * Cirrus Core interface
 * @type {Object}
 */
module.exports = {
  Task: require(path.join(__dirname, 'task')),
  Flow: require(path.join(__dirname, 'flow')),
  Engine: require(path.join(__dirname, 'engine')),
  Module: require(path.join(__dirname, 'module')),
  Router: require(path.join(__dirname, 'router')),
  Resource: require(path.join(__dirname, 'resource')),
  ResourceRouter: require(path.join(__dirname, 'resource-router'))
};
