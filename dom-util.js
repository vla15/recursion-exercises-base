
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (node.childNodes) {
    let children = node.childNodes
    for (let index = 0; index < children.length; index++) {
      visitAllNodes(children[index], callback)
    }
  }
  callback(node);
};

const flattenTreeToArray = function(node) {
  const result = [];
  visitAllNodes(node, item => {
    result.push(item);
  })
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};

