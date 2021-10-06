var twoSum1 = function(nums, target){

  let map = new Map()

  for(let i =0; i < nums.length; i++){
    let diff = target-nums[i]
    if(map.has(diff)){
      return [map.get(diff), i]
    } else {
      map.set(nums[i],i)
    }
  }
}

var twoSum2 = function(nums, target) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    console.log(map)
    console.log(diff)
    console.log(map[diff])
    if(map[diff]) { //This row returns zero, which is falsy, so the code block doesn't run
      return [map[diff], i]
    }else {
      map[nums[i]] = i
    }

  }
}


// twoSum2([2,7,3,11,5], 9)