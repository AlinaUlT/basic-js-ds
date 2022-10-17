const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    if (this.head === null) {
      return null;
    }
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.tail === null) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return node;
  }
  dequeue() {
    if (this.head === null) {
      return null;
    } else {
      let node = this.head;
      this.head = node.next;
      if (this.head === this.tail) {
        this.tail = null;
      }
      return node.value;
    }
  }
}
const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);

module.exports = {
  Queue
};