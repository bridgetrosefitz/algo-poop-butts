class HashTable {
  constructor() {
    this.array = []
  }

  // hash(string) {
  //   const H   = 37;
  //   let total = 0;

  //   for (var i = 0; i < string.length; i++) {
  //     total += H * total + string.charCodeAt(i);
  //   }
  //   total %= this.array.length;
  //   if (total < 1) {
  //     this.array.length -1
  //   }
  //   return parseInt(total);
  // }


  hash(key, arrayLen) {
    // console.log('key', key, 'arrayLen', arrayLen)

    // if(arrayLen === 0){
    //   return 0
    // }

    let total = 0

    for (let i = 0; i < key.length; i++) {
      let char = key[i]

      // alphabetical position of char
      let value = char.charCodeAt(0) - 96

      // keeps it within arrayLen

      // total = (total + value) % arrayLen
      total = (total + value)
      console.log('total + value', total)

      total = total % arrayLen
      console.log('total', total)

    }
    return total
  }

  get(key) {

    // check if the key is in the array
    // return the key
    // use the key to get the value from the array

  }

  set(key, val) {
    const indexToStoreAt = this.hash(key, this.array.length)
    // this.array[indexToStoreAt] = {[key]: val}
    this.array.push({ [indexToStoreAt]: { [key]: val } })
    console.log(this.array)
  }

  remove(key) {

  }

  keys() {

  }

  values() {

  }
}

const ourFriendlyHashTable = new HashTable()

ourFriendlyHashTable.set("Tracy", "says hello")
ourFriendlyHashTable.set("Nikil", "says use bracket notation always")
ourFriendlyHashTable.set("Kay", "gday")
ourFriendlyHashTable.set("BFitz", "yo")
