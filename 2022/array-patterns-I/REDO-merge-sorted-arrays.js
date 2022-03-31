// https://leetcode.com/problems/merge-sorted-array/

// Re-did based on solution 220331 https://www.youtube.com/watch?v=P1Ic85RarKY&ab_channel=NeetCode
// Accepted
// Runtime: 68 ms, faster than 75.80% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 42.5 MB, less than 22.88 % of JavaScript online submissions for Merge Sorted Array.

const merge2 = function (nums1, m, nums2, n) {
  // Set a pointer to move backwards from the last element in m
  let last = m + n - 1
  let nums1Pointer = m - 1
  let nums2Pointer = n - 1

  // Merge elements from nums2 into nums1, in reverse order

  while (nums1Pointer >= 0 && nums2Pointer >= 0) {
    if (nums1[nums1Pointer] > nums2[nums2Pointer]) {
      nums1[last] = nums1[nums1Pointer]
      nums1Pointer--
    } else {
      nums1[last] = nums2[nums2Pointer]
      nums2Pointer--
    }

    last--
  }

  // Fill nums1 with leftover nums2 elements (because nums1.length will always be bigger than nums2.length)

  while(nums2Pointer >= 0) {
    nums1[last] = nums2[nums2Pointer]
    nums2Pointer--
    last--
  }

  return nums1
}











// Attemped 220331
// Wrong answer submitted in 38:33:42
const merge = function (nums1, m, nums2, n) {

  let leftPointer = 0
  let rightPointer = 0
  while(leftPointer < m) {
    if(nums2[rightPointer] < nums1[leftPointer]){
      const temp = nums1[leftPointer]
      nums1[leftPointer] = nums2[rightPointer]
      nums2[rightPointer] = temp
    }
    leftPointer++
  }

  while(rightPointer < n) {
    nums1[leftPointer] = nums2[rightPointer]
    rightPointer++
    leftPointer++
  }

  return nums1
};