'use strict';

console.log(`Linked List - LeetCode Problem`);

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmplty() {
        return this.size ===0;

    }
    getSize(){
        return this.size;
    }
}

const list = new LinkedList();
console.log(`list is emply? ${list.isEmplty()}`); // true
console.log(`list size: ${list.getSize()}`); // 0