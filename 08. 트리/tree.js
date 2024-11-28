class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    let newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      insertNode(this.root, newNode);
    }
  }

  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback);
  }

  min() {
    return minNode(this.root);
  }

  max() {
    return maxNode(this.root);
  }

  search(key) {
    return searchNode(this.root, key);
  }

  remove(key) {
    this.root = removeNode(this.root, key);
  }

  printNode(node, depth) {
    if (!node && !depth) {
      node = this.root;
      depth = 0;
    }
    if (!node || typeof depth !== "number") return;

    this.printNode(node.right, depth + 1);
    console.log("    ".repeat(depth) + String(node.key));
    this.printNode(node.left, depth + 1);
  }
}

function insertNode(node, newNode) {
  if (newNode.key < node.key) {
    if (node.left === null) {
      node.left = newNode;
    } else {
      insertNode(node.left, newNode);
    }
  } else {
    if (node.right === null) {
      node.right = newNode;
    } else {
      insertNode(node.right, newNode);
    }
  }
}

function inOrderTraverseNode(node, callback) {
  if (node === null) return;

  inOrderTraverseNode(node.left, callback);
  callback(node.key);
  inOrderTraverseNode(node.right, callback);
}

function preOrderTraverseNode(node, callback) {
  if (node === null) return;

  callback(node.key);
  preOrderTraverseNode(node.left, callback);
  preOrderTraverseNode(node.right, callback);
}

function postOrderTraverseNode(node, callback) {
  if (node === null) return;

  postOrderTraverseNode(node.left, callback);
  postOrderTraverseNode(node.right, callback);
  callback(node.key);
}

function minNode(node) {
  if (node === null) return null;

  while (node.left !== null) {
    node = node.left;
  }
  return node.key;
}

function maxNode(node) {
  if (node === null) return null;

  while (node.right !== null) {
    node = node.right;
  }
  return node.key;
}

function searchNode(node, key) {
  if (node === null) return false;

  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
}

function removeNode(node, key) {
  if (node === null) return null;

  if (key < node.key) {
    node.left = removeNode(node.left, key);
    return node;
  }

  if (key > node.key) {
    node.right = removeNode(node.right, key);
    return node;
  }

  if (node.left === null && node.right === null) {
    return null;
  }

  if (node.left === null) {
    return node.right;
  }
  if (node.right === null) {
    return node.left;
  }

  const changeData = minNode(node.right);
  node.key = changeData;
  node.right = removeNode(node.right, changeData);
  return node;
}

// 이진 탐색 트리 생성
const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
