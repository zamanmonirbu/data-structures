#include<bits/stdc++.h>
// Define the Node class to represent elements in the list
class Node {
public:
    int data;
    Node* next;

    Node(int data) : data(data), next(nullptr) {}
};

// Define the LinkedList class to manage the list
class LinkedList {
private:
    Node* head;

public:
    LinkedList() : head(nullptr) {}

    // Create (Add an element to the end of the list)
    void add(int data) {
        Node* newNode = new Node(data);

        if (head == nullptr) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            current->next = newNode;
        }
    }

    // Read (Retrieve an element by index)
    int get(int index) {
        Node* current = head;
        int count = 0;

        while (current != nullptr) {
            if (count == index) {
                return current->data;
            }
            current = current->next;
            count++;
        }
        return -1; // Element not found
    }

    // Update (Update an element by index)
    bool update(int index, int newData) {
        Node* current = head;
        int count = 0;

        while (current != nullptr) {
            if (count == index) {
                current->data = newData;
                return true; // Update successful
            }
            current = current->next;
            count++;
        }
        return false; // Element not found
    }

    // Delete (Remove an element by index)
    bool remove(int index) {
        if (head == nullptr) {
            return false; // List is empty
        }

        if (index == 0) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return true; // Deletion successful
        }

        Node* current = head;
        Node* previous = nullptr;
        int count = 0;

        while (current != nullptr) {
            if (count == index) {
                previous->next = current->next;
                delete current;
                return true; // Deletion successful
            }
            previous = current;
            current = current->next;
            count++;
        }
        return false; // Element not found
    }
};

int main() {
    LinkedList myList;

    myList.add(10);
    myList.add(20);
    myList.add(30);

    std::cout << myList.get(1) << std::endl; // Output: 20
    std::cout << myList.update(1, 25) << std::endl; // Output: 1 (update successful)
    std::cout << myList.remove(0) << std::endl; // Output: 1 (deletion successful)

    return 0;
}
