var l1 = [2, 4, 3]
var l2 = [5,6,4]

var addTwoNumbers = function(l1, l2) {
    const num = changetonum(l1) + changetonum(l2)
    console.log(toarray(num))
    var li = toarray(num)
    console.log(li)
};

var changetonum = function(l1) {
    var numA = l1[0]
    var x = 10
    for(var index = 0; index < l1.length - 1; index++){
        numA += l1[index + 1] * x
        x *= 10
    }
    return numA
}

var toarray = function(num){
    var l1 = []
    var x = 10
    if(num < 10){
        l1.push(num)
        return l1
    }else{
        while (x <= num * 10) {
            var i = num % x
            l1.push(i / x * 10 )
            num -= i * x / 10
            x *= 10
        }
        return l1
    }
}

addTwoNumbers(l1,l2)