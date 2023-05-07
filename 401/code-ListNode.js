var l1 = [2, 4, 3]
var l2 = [5,6,4]


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode(0)
    var curr = dummy
    var carry = 0
    while(l1 !== null || l2 !== null || carry !== 0){
        var x = l1 ? l1.val : 0
        var y = l2 ? l2.val : 0
        var sum = x + y + carry
        carry = Math.floor(sum/10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }

    return dummy.next
};



var num = addTwoNumbers(l1, l2)
console.log(num)