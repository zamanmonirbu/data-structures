// Define the Node class to represent elements in the list
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Define the LinkedList class to manage the list
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Create (Add an element to the end of the list)
    add(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Read (Retrieve an element by index)
    get(index) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === index) {
          return current.data;
        }
        current = current.next;
        count++;
      }
      return null; // Element not found
    }
  
    // Update (Update an element by index)
    update(index, newData) {
      let current = this.head;
      let count = 0;
  
      while (current) {
        if (count === index) {
          current.data = newData;
          return true; // Update successful
        }
        current = current.next;
        count++;
      }
      return false; // Element not found
    }
  
    // Delete (Remove an element by index)
    remove(index) {
      if (!this.head) {
        return false; // List is empty
      }
  
      if (index === 0) {
        this.head = this.head.next;
        return true; // Deletion successful
      }
  
      let current = this.head;
      let previous = null;
      let count = 0;
  
      while (current) {
        if (count === index) {
          previous.next = current.next;
          return true; // Deletion successful
        }
        previous = current;
        current = current.next;
        count++;
      }
      return false; // Element not found
    }
  }
  
  // Example usage:
  const myList = new LinkedList();
  myList.add(10);
  myList.add(20);
  myList.add(30);
  
  console.log(myList.get(1)); // Output: 20
  console.log(myList.update(1, 25)); // Output: true (update successful)
  console.log(myList.remove(0)); // Output: true (deletion successful)
  