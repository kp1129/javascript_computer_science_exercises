class Node {
    constructor (val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.storage = []
        this.size = 0

    }

    enqueue(val) {
        this.storage.push(val);
        this.size += 1;
    }

    dequeue() {
        if(this.size > 0){
            return this.storage.shift();
        }      
    }

    peek() {
        return this.storage[0];
    }

    printQueue() {
        let queueToString = "";
        this.storage.map(val => queueToString += val + " ")
        console.log(queueToString);
    }

}

let q = new Queue()

q.enqueue(5);
q.enqueue(10);
q.enqueue(15);

console.log(q.peek()) // 5
q.printQueue();
q.dequeue();
q.printQueue();