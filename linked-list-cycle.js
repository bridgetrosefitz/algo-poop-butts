// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {

    // INPUTS AND OUTPUS     head - array, pos - either -1 or a valid index --> f --> true / false


// Loop through until we reach XXX stopping point
// At each iteration through the loop, we 
    // -- increment a counter (which tells us the index we're on)
    // -- check the data type (typeOf) next property of current node
        //   ---  if it is not a value, keep going
        //   --- if it is a value, check if -1; if so. return false, if not, return true     


    let returnValue = false

    while(typeof(head.next) === object || head.next !== -1){
        const dataTypeOfNext = typeof(head.next)
        if(dataTypeOfNext !== object){
            if(head.next !== -1) {
                returnValue = true
            }
        }
        head = head.next
    }

    return returnValue
  }