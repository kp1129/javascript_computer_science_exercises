class Stack {
    constructor() {
        this.storage = [];
        this.size = 0;
    }

    push(val) {
        this.storage.push(val);
        this.size += 1;
    }

    pop() {
        if (this.size > 0){
            this.size -= 1;
            return this.storage.pop();
        }        
    }

    peek() {
        if (this.size > 0){
            return this.storage[this.size - 1];
        }
        
    }

    printStack() {
        let stackToString = "";
        this.storage.map(val => stackToString += val + " ")
        console.log(stackToString);
    }
}

let s = new Stack()

s.push(5);
s.push(10);
s.push(15);

console.log(s.peek()) // 15
s.printStack();
s.pop();
s.printStack();