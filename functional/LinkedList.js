class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(value) {
        const newNode = new Node(value, null)
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode
        } else {
            this.head = this.tail = newNode;
            this.head.next = this.tail;
        }
    }

    print() {
        let current = this.head;
        while (current.next) {
            console.log(current.value);
        }
    }
}
