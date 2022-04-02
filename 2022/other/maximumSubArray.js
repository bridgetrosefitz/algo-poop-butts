// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Brute force > n^3, or n^2 if you keep track of the sum
// FYI, There's another approach instead of sliding window
// This problem is the definition of sliding window

Example 1:

Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: [4, -1, 2, 1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5, 4, -1, 7, 8]
Output: 23