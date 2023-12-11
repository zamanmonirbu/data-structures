#include <stdio.h>
#include <stdlib.h>

// Define the Node structure to represent elements in the list
struct Node
{
    int data;
    struct Node *next;
};

// Define the LinkedList structure to manage the list
struct LinkedList
{
    struct Node *head;
};

// Create (Add an element to the end of the list)
void add(struct LinkedList *list, int data)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    newNode->data = data;
    newNode->next = NULL;

    if (list->head == NULL)
    {
        list->head = newNode;
    }
    else
    {
        struct Node *current = list->head;
        while (current->next != NULL)
        {
            current = current->next;
        }
        current->next = newNode;
    }
}

// Read (Retrieve an element by index)
int get(struct LinkedList *list, int index)
{
    struct Node *current = list->head;
    int count = 0;

    while (current != NULL)
    {
        if (count == index)
        {
            return current->data;
        }
        current = current->next;
        count++;
    }
    return -1; // Element not found
}

// Update (Update an element by index)
int update(struct LinkedList *list, int index, int newData)
{
    struct Node *current = list->head;
    int count = 0;

    while (current != NULL)
    {
        if (count == index)
        {
            current->data = newData;
            return 1; // Update successful
        }
        current = current->next;
        count++;
    }
    return 0; // Element not found
}

// Delete (Remove an element by index)
int removeNode(struct LinkedList *list, int index)
{
    if (list->head == NULL)
    {
        return 0; // List is empty
    }

    if (index == 0)
    {
        struct Node *temp = list->head;
        list->head = list->head->next;
        free(temp);
        return 1; // Deletion successful
    }

    struct Node *current = list->head;
    struct Node *previous = NULL;
    int count = 0;

    while (current != NULL)
    {
        if (count == index)
        {
            previous->next = current->next;
            free(current);
            return 1; // Deletion successful
        }
        previous = current;
        current = current->next;
        count++;
    }
    return 0; // Element not found
}

int main()
{
    struct LinkedList myList;
    myList.head = NULL;

    add(&myList, 10);
    add(&myList, 20);
    add(&myList, 30);

    printf("%d\n", get(&myList, 1));        // Output: 20
    printf("%d\n", update(&myList, 1, 25)); // Output: 1 (update successful)
    printf("%d\n", removeNode(&myList, 0)); // Output: 1 (deletion successful)

    return 0;
}
