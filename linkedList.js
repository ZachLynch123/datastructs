class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head, next=null) {
        this.head = null;
        this.size = 0
    }

    // Insert first node 

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }


    // Insert last node 

    insertLast(data) {
        let node = new Node(data);
        let current;
        // If empty, make head
        if(!this.head) {
            this.head = node
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }


    // Insert @ index


    // Get data at index

    // Remove at index

    // Clear list

    // Print List Data 

    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }


}
const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(5000);

ll.printListData();