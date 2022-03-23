// https://leetcode.com/problems/search-in-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

  // If no root exists return null
  // Create a current node variable and set it to root
  // Repeat until current node is null
  // >> If val < current node val, set current node to left child
  // >> Else if val > current node, set current node to right childe
  // >> Else, return current node
  // Return null

  let currentNode = root
  while(currentNode !== null){
    if(val < currentNode.val) {
      currentNode = currentNode.left
    } else if (val > currentNode.val) {
      currentNode = currentNode.right
    } else {
      return currentNode
    }

    return null
  }


};