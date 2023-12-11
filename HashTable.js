class HashTable {
    constructor() {
      this.table = new Array(100); // Creating an array of size 100 (adjust size as needed).
    }
  
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length; // Ensuring the hash fits within the array size.
    }
  
    set(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push([key, value]);
    }
  
    get(key) {
      const index = this.hash(key);
      if (!this.table[index]) {
        return undefined;
      }
      for (const pair of this.table[index]) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
  }
  
  const dictionary = new HashTable();
  
  dictionary.set("apple", "a fruit");
  dictionary.set("computer", "an electronic device");
  dictionary.set("book", "a collection of pages");
  
  console.log(dictionary.get("apple")); // Output: "a fruit"
  console.log(dictionary.get("book"));  // Output: "a collection of pages"
  