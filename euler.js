// Find the sum of all the multiples of 3 or 5 below 1000
alert("Loaded Euler JS");
a=3;
b=5;
n=1000;
function sumofMultiples(a,b,n){
let sum =0
for(let i = 1; i<n; i++){
    if(i%a==0||i%b==0){
        sum+=i
    }
}
return(sum);
}

function cal(){
    const a = parseInt(document.getElementById('a').value);
    const b= parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('n').value);
    const result= sumofMultiples(a,b,n)
    alert('The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}')
}