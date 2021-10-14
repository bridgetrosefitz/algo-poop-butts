// Implementation 2

function hash(key, arrayLen) {
  let output = 0;

  for (let i = 0; i < key.length; ++i) {
    const char = key[i];

    // alphabetical position of char
    const value = char.charCodeAt(0) - 96;

    // keeps it within arrayLen
    output = (output + value) % arrayLen;
  }

  return output;
}

// WARNING: this HashTable class does not take into account collisions!!

class HashTable {
  constructor(buckets) {
    this.size = buckets || 100;
    this.array = Array(this.size).fill(null);
  }

  get(key) {
    const index = hash(key, this.size);
    if (this.array[index] === null) return null;  // my design choice: if bucket is empty, just return null
    return this.array[index].val;
  }

  set(key, val) {
    const index = hash(key, this.size);
    this.array[index] = { key: key, val: val };   // store both keys and vals so we can support the keys() method. can also use { key, val } shorthand
    return this;                                  // my design choice: return `this` so i can do method chaining
  }

  remove(key) {
    const index = hash(key, this.size);
    this.array[index] = null;                     // again, note that i'm assuming no collision, and that the data here matched the same key
    return this;                                  // my design choice: return `this` so i can do method chaining

    // other possibilities: check whether a value actually existed at index before removing.
    // if there was, ultimately return true, and if not, ultimately return false
  }

  keys() {
    const allKeys = [];
    for (let i = 0; i < this.size; ++i) {
      if (this.array[i]) allKeys.push(this.array[i].key);     // remember to skip over empty buckets
    }
    return allKeys;
  }

  values() {
    const allValues = [];
    for (let i = 0; i < this.size; ++i) {
      if (this.array[i]) allValues.push(this.array[i].val);   // remember to skip over empty buckets
    }
    return allValues;
  }
}
