const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNoda = new Node(data);

    if (!this._root) return this._root = newNoda;

    let currentNode = this._root;

    while (currentNode) {
      if (newNoda.data < currentNode.data) {
        if (!currentNode.left) return currentNode.left = newNoda;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return currentNode.right = newNoda;
        currentNode = currentNode.right;
      }
    }
  }

  has(data, currentNode) {

    function hasNode(currentNode, data) {
      if (!currentNode) return false;
      if (currentNode.data === data) return true;
      if (data < currentNode.data) return hasNode(currentNode.left, data);
      if (data > currentNode.data) return hasNode(currentNode.right, data);
    }

    return hasNode(this._root, data);
  }

  find(data) {

    function findNode(currentNode, data) {
      if (currentNode === null) return null;
      else if (data < currentNode.data) return findNode(currentNode.left, data);
      else if (data > currentNode.data) return findNode(currentNode.right, data);
      else return currentNode;
    }

    return findNode(this._root, data);

  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(currentNode, data) {

      if (!currentNode) return null;

      if (data < currentNode.data) {
        currentNode.left = removeNode(currentNode.left, data);
        return currentNode;
      }

      if (data > currentNode.data) {
        currentNode.right = removeNode(currentNode.right, data);
        return currentNode;
      }

      if (!currentNode.left && !currentNode.right) {
        return currentNode = null;
      }

      if (!currentNode.left) {
        currentNode = currentNode.right;
        return currentNode
      }

      if (!currentNode.right) {
        currentNode = currentNode.left;
        return currentNode
      }

      let newNode = currentNode.left;

      while (newNode.right) {
        newNode = newNode.right
      }

      currentNode.data = newNode.data;
      removeNode(currentNode.left, newNode.data);
      return currentNode;
    }
  }

  min() {

    function minNode(currentNode) {
      if (currentNode.left === null) return currentNode;
      return minNode(currentNode.left)
    }

    return minNode(this._root).data;
  }

  max() {

    function maxNode(currentNode) {
      if (currentNode.right === null) return currentNode;
      return maxNode(currentNode.right)
    }

    return maxNode(this._root).data;
  }
}

module.exports = {
  BinarySearchTree
};