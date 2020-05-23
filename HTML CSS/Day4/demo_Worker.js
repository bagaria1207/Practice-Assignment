var i = 1;
function timedCount() {
    postMessage(i);
    i=i+2;
    setTimeout("timedCount()", 500);
}
timedCount();
