function LinkedList() {
    this.head = this.tail = null;
}

function ListNode(item, prev, next) {
    this.item = item;
    this.next = next || null;
    this.prev = prev || null;
}


LinkedList.prototype.addToTail = function(item) {

    if (!this.tail && !this.head) {
        this.head = this.tail = new ListNode(item);
    } else {
        var temp_tail = this.tail;
        this.tail = new ListNode(item, temp_tail);
        this.tail.prev.next = this.tail;
    }

    return this;
};
LinkedList.prototype.removeFromTail = function() {
    if (!this.tail) return;
    var oldTail = this.tail;
    this.tail = oldTail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    return oldTail.item;
};

LinkedList.prototype.forEach = function(iterator) {
    var currentNode = this.head;
    while (currentNode) {
        iterator(currentNode.item);
        currentNode = currentNode.next;
    }
};