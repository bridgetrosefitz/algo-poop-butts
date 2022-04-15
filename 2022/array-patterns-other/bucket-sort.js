// SORT
// 

// BUCKET SORT - O(n)


// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example 1:
// Input: nums = [1,1,1,2,2,3,3], k = 2
// Output: [1,2] or [1,3]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]  

// Clues / options
// use Object.items()
// use freq_bucket =[[],[],[2,3],[1]]


const bucketSort = (nums, k) => {
    const results = []
    const frequencyBucket = new Array(nums.length + 1).fill([])
    const mapOfFrequencies = {}

    nums.forEach(element => {
        mapOfFrequencies[element] = (mapOfFrequencies[element] ?? 0) + 1
    })

    const interimFrequencies = Object.entries(mapOfFrequencies)

    interimFrequencies.forEach(subArray => {

        const number = parseInt(subArray[0])
        const frequency = subArray[1]

        frequencyBucket[frequency].push(number)
        
    })

    
}






























// Answer
var topKFrequent = function(nums, k) {
    const myMap = new Map();
    
    // Count the frequency of each number in nums
    for(const num of nums){
        if(!myMap.has(num)){
            myMap.set(num, 0);
        }
        
        const count = myMap.get(num);
        myMap.set(num, count+1);
    }
    
    // Perform a bucket sort of the numbers in myMap
    // We create an array of "buckets" (i.e. an array of arrays).
    // At each index i we store numbers which occured i times.
    let buckets = new Array(nums.length+1).fill(0).map(()=>new Array(0));
    for(const [num, count] of myMap.entries()){
        buckets[count].push(num);
    }
    
    // Flatten the array of arrays
    const answer = [];
    for(const l of buckets){
        answer.push(...l);    
    }
    
    // Slice the top-K elements and return it
    return answer.slice(answer.length-k, answer.length);
};