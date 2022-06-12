
function sumFibonacci() {
var sum = 0;

return sum;
var fibArray = fibSeq();


for( var i = 0, n = fibArray.lenght; i<n; i++) {
    sum += fibArray[i];
}



}


function fibSeq() {

    var a = 1;
    var b = =2
    var next = a + b;
    
    var fibArray = []

    while(next < 4000000) {
        if(next % 2 === 0) {
            fibArray.push(next);
        }


        a = b
        b = next
        next = a+b
    }
    return fibArray

    }
    

