class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(val) {
        // add element to the end of ll
        let newNode = new Node(val);

        // if LL is empty
        if (this.head === null){
            this.head = newNode;
        } else {
            // keep track of current node
            // iterate until curr.next is null
            let curr = this.head;

            while (curr.next){
                curr = curr.next;
            }
            // place the new node at the end
            curr.next = newNode;
        }
        // increment LL size
        this.size += 1;

    }

    insertAt(val, nodeIndex) {
        if (nodeIndex > this.size){
            // can only go up to this.size to insert a new node at index
            return -1;
        } else {
            let newNode = new Node(val);

            // if nodeIndex is 0, this node is the new head
            if (nodeIndex === 0) {
                newNode.next = this.head;
                this.head = newNode;
            } else {
                // keep track of current and previous nodes
                let prev;
                let curr = this.head;
                let counter = 0;
                // find the index
                while (counter < nodeIndex){
                    prev = curr;
                    curr = curr.next;
                    counter += 1;                    
                }
                // insert newNode 
                newNode.next = curr;
                prev.next = newNode;
            }
            // increment LL size
            this.size += 1;
        }
    }

    removeFrom(nodeIndex) {
        if (nodeIndex > this.size - 1){
            // can't remove from index that's outside of range
            return -1;
        } else {
            let curr = this.head;
            // if deleting first element, will need new head
            if (nodeIndex === 0){
                this.head = curr.next;
            } else {
                // keep track of current and prev nodes
                let prev;
                // find the index
                let counter = 0;
                while (counter < nodeIndex) {
                    prev = curr;
                    curr = curr.next;
                    counter += 1;
                }
                prev.next = curr.next;
            }
            // decrement LL size
            this.size -= 1;

            return curr.val;
        }
    }

    removeVal(val) {
        if (this.size === 0) {
            return -1
        } else {
            // keep track of curr and prev nodes
            // iterate until val is found
            let curr = this.head;
            let prev;
            while (curr) {
                if (curr.val === val) {
                    // if curr is head
                    if (curr === this.head){
                        this.head = curr.next;
                    } else {
                        // if curr is not head
                        prev.next = curr.next;
                    }
                    // decrement LL size
                    this.size -= 1;
                    return curr.val;                    
                } else {
                    prev = curr;
                    curr = curr.next;
                }
            }
            // if val not found
            return -1;
        }        
    }

    // helper methods
    sizeOfList() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    printList() {
        // print all nodes as one string
        let curr = this.head;
        let result = "";
        while (curr) {
            result += curr.val + " ";
            curr = curr.next;
        }
        console.log(result)
    }

    indexOf(val) {
        let counter = 0;
        let curr = this.head;

        while (curr) {
            if (curr.val === val){
                return counter;
            }
            counter += 1;
            curr = curr.next;
        }
        // if val not found
        return -1
    }
}

// test
let myLL = new LinkedList();
console.log(myLL.isEmpty()); //true

myLL.add(10);
myLL.printList(); // prints 10

console.log(myLL.sizeOfList()) // 1

myLL.add(20);
myLL.add(30);
myLL.add(40);
myLL.add(50);

myLL.printList(); // 10 20 30 40 50

myLL.removeVal(20);
myLL.printList(); // 10 30 40 50

console.log(myLL.removeVal(20)); // -1

console.log(myLL.removeFrom(0)); // 10
myLL.printList(); // 30 40 50

console.log(myLL.indexOf(30)); // 0
console.log(myLL.indexOf(50)); // 2