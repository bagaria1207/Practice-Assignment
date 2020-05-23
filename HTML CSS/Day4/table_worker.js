var i = 2;
var j;
var k = 1;
function timedTable(){
    while(i<=10){
        while(k<=10){
            j = i*k;
            k+=1;
            postMessage(j);
            setTimeout("timedTable()", 250000);
        }
        k=1;
        i+=1;
    }
}
timedTable();