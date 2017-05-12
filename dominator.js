const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const bodyEl = flattenTreeToArray(root);
  for (let index = 0; index < bodyEl.length; index++) {
    if (bodyEl[index].id === id) {
      return bodyEl[index];
    }
  }
};

const getElementsByClassName = function(root, className) {
  let bodyEl = flattenTreeToArray(root);
  return _.filter(bodyEl, el => el.className !== undefined && el.className.indexOf(className) > -1)
};

const getElementsByTagName = function (root, tagName) {
  const bodyEl = flattenTreeToArray(root);
  return _.filter(bodyEl, el => el.tagName === tagName);
};


module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
