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

    isEmpty() {
        return this.size ===0;

    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value);
        if( this.isEmpty()){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    print() {
        if(this.isEmpty()) console.log('List is empty');
        else {
            let curr = this.head;
            let listValue = '';
            while(curr){
                listValue += `${curr.value} `;
                curr = curr.next;
            }
            console.log(`List values: ${listValue}`);
        }
    }
}

const list = new LinkedList();
console.log(`list is emply? ${list.isEmpty()}`); // true
console.log(`list size: ${list.getSize()}`); // 0

list.prepend(10);
list.print(); // List values: 10
console.log(`list is emply? ${list.isEmpty()}`);
list.prepend(20);
list.prepend(30);
list.prepend(30);
list.prepend(30);
list.print(); // List values: 30 30 30 20 10
console.log(`list size: ${list.getSize()}`); // 5
