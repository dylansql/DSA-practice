

// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 16,
//                 next: null
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value, 
            next: null
        }
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value, 
            next: null
        };
        newNode.next = this.head
        this.head = newNode;
        this.length++
        return this;
    }
    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return arr
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index-1) 
        const holdingPointer = leader.next;
        leader.next = newNode
        newNode.next = holdingPointer;
        this.length++;
        return this.printList
    }
    traverseToIndex(index) {
        let counter = 0
        currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
    remove(index) {
    //  check params
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode;
    this.length--;
    return this.printList();
    }
}




const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(2)
myLinkedList.insert(20, 88);
myLinkedList.printList();