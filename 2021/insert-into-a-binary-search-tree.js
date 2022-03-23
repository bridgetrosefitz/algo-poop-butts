// https://leetcode.com/problems/insert-into-a-binary-search-tree/

var insertIntoBST = function (root, val) {

  const newNode = new TreeNode(val)

  if(root === null) return newNode

  let currentNode = root
  while(true) {
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode
        return root
      }
      currentNode = currentNode.left
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode
        return root
      }
      currentNode = currentNode.right
    }
  }

};
