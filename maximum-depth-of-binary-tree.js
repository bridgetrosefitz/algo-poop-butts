// https://leetcode.com/problems/maximum-depth-of-binary-tree/

var maxDepth = function (root) {
  if (root === null) return 0;

  function dfs(node, depth) {
    // base case: leaf node
    if(node.left === null & node.right === null) {
      res = Math.max(depth, res)
      return
    }

    // recursive calls

  }
};

