
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  if (node.childNodes) {
    let children = node.childNodes
    for (let index = 0; index < children.length; index++) {
      visitAllNodes(children[index], callback)
    }
  }
  callback(node);
}

const flattenTreeToArray = function(node) {
  const result = [];
  if (node.childNodes) {
    let children = node.childNodes
    for (let index = 0; index < children.length; index++) {
      visitAllNodes(children[index], (node) => result.push(node))
    }
  }
  result.push(node);
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};