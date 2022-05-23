var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};
function gcfcalc()
{
    var a = document.calcform.a.value;
    var b = document.calcform.b.value;
     if( a!=Math.floor(a) || b!=Math.floor(b) ) {
        alert("Please enter integer numbers");
        return;
    }
    if( a=='' || b=='' ) {
        alert("Please enter integer numbers");
        return;
    }
    if( a==0 && b==0 ) {
        alert("Please enter at least one non zero integer");
        return;
    }
     var g = gcd(a,b);
     if( g<0 ) g=-g;
     a = parseInt(a);
     b = parseInt(b);
     g = parseInt(g);
     var lcm = (a*b)/g;
     document.calcform.gcf.value = g;
     document.calcform.lcm.value = lcm;
}var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};
function gcfcalc()
{
    var a = document.calcform.a.value;
    var b = document.calcform.b.value;
     if( a!=Math.floor(a) || b!=Math.floor(b) ) {
        alert("Please enter integer numbers");
        return;
    }
    if( a=='' || b=='' ) {
        alert("Please enter integer numbers");
        return;
    }
    if( a==0 && b==0 ) {
        alert("Please enter at least one non zero integer");
        return;
    }
     var g = gcd(a,b);
     if( g<0 ) g=-g;
     a = parseInt(a);
     b = parseInt(b);
     g = parseInt(g);
     var lcm = (a*b)/g;
     document.calcform.gcf.value = g;
     document.calcform.lcm.value = lcm;
}