const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.root() === null) {
      this.rootNode = new Node(data);
    } else {
      this._insertNode(this.root(), new Node(data));
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.rootNode !== null) {
      return this._findNode(this.root(), data);
    } else {
      console.log("root null")
      return null;
    }
  }
  _findNode(node, data) {
    console.log(node)
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else if (data > node.data) {
      return this._findNode(node.right, data);
    } else if (node.data === data) {
      return node;
    } else {
      return null;
    }
  }

  remove(data) {
    this.rootNode = this._removeNode(this.root(), data);
  }

  _removeNode(node, key) {
    if (node === null)
      return null;

    else if (key < node.data) {
      node.left = this._removeNode(node.left, key);
      return node;
    }
    else if (key > node.data) {
      node.right = this._removeNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this._findMin(node.right);
      node.data = aux;
      node.right = this._removeNode(node.right, aux);
      return node;
    }
  }

  min() {
    if (this.root() !== null) {
      return this._findMin(this.root());
    } else {
      return null;
    }
  }

  _findMin(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this._findMin(node.left);
    }
  }

  _findMax(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return this._findMax(node.right);
    }
  }

  max() {
    if (this.root() !== null) {
      return this._findMax(this.root());
    } else {
      return null;
    }
  }
}
const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree)
// console.log(tree.has(14))
// console.log(tree.has(2))

module.exports = {
  BinarySearchTree
};