function hash(key, arrayLen) {
  let output = 0

  for (let i = 0; i< key.length; i++){
    const char = key[i]

    // alphabetical position of char
    const value = char.charCodeAt(0) - 96

    // keeps it within arrayLen
    output = (output + value) % arrayLen
  }

  return output
}

class HashTable {
  constructor(buckets){
    this.size = buckets || 100
    this.array = Array(this.size).fill(null)
  }

  get(key){
    const index = hash(key, this.size)
    if (this.array[index] === null) return null
    return this.array[index].val
  }

  set(key, val){
    const index = hash(key, this.size)
    this.array[index] = { key: key, val: val }
    return this
  }

  keys() {
    const allKeys = []
    for (let i = 0; i < this.size; ++i){
      if(this.array[i]) allKeys.push(this.array[i].key)
    }

    return allKeys
  }

  values() {
    const allValues = [];
    for (let i = 0; i < this.size; ++i){
      if(this.array[i]) allValues.push(this.array[i].val)
    }
    return allValues
  }



}