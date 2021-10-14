function hash(key, arrayLen) {
  let output = 0

  for (let i = 0; i< key.length; i++){
    const char = key[i]

    // alphabetical position of char
    const value = char.charCodeAt(0) - 96

    // keeps it within arrayLen
    output = (output + value) % arrayLen
  }
}