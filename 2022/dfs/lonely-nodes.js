// In a binary tree, a lonely node is a node that is the only child of its parent node.
// The root of the tree is not lonely because it does not have a parent node.

// Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree.
// Return the list in any order.


// Input: root https://assets.leetcode.com/uploads/2020/06/03/e1.png
// Output: [4]
// Explanation: Light blue node is the only lonely node.
// Node 1 is the root and is not lonely.
// Nodes 2 and 3 have the same parent and are not lonely.

// https://jamboard.google.com/d/1R6fCc1IaesEHhtIgc9piI-g5_AlJNAGmWwWfCsmb_kc/edit?usp=sharing

// Write the definition of a binary tree node in JS


// A lonely node 
// > has a parent
// > the parent of the lonely node has, as either its left or right property, a reference to the lonely node
// > if the lonely node is the reference of the parent's left property, then the reference for the parent's right node is null
// > if the lonely node is the reference of the parent's right property, then the reference for the parent's left node is null


// isLonely = (left and not right) or (right and not left)

function TreeNode(value, left = null, right = null) {
  this.value = value
  this.left = left
  this.right = right
}


function getLonelyNodes(root) {

  output = []

  const dfs = (node) => {

    if (node) {
      // node.value = 1
      left = dfs(node.left) // TreeNode(11)
      right = dfs(node.right) // null

      /////// bussiness logic
      if (right && !left) {
        output.push(right.value)
      } else if (left && !right) {
        output.push(left.value)
      }
      ///////// END


      return node

    }

    return null

  }-

    dfs(root)

  return output
}





// depth first search - DFS

preorder = []

function preOrderTraversal(node) {
  if (node) {
    preorder.push(node.value)
    preOrderTraversal(node.left)
    preOrderTraversal(node.right)
  }
}

function inOrderTraversal(node) {
  if (node) {
    inOrderTraversal(node.left)
    preorder.push(node.value)
    inOrderTraversal(node.right)
  }
}

function postOrderTraversal(node) {
  if (node) {
    postOrderTraversal(node.left)
    postOrderTraversal(node.right)
    preorder.push(node.value)
  }
}


root = new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))


preOrderTraversal(root)

console.log(preorder)




// breadth first search - BFS








