// Find the sum of all the multiples of 3 or 5 below 1000
alert("Loaded Euler JS");
a=3;
b=5;
n=1000;
function sumofMultiples(a,b,n){
let sum =0;
for(let i = 1; i<n; i++){
    if(i % a == 0||i % b == 0){
        sum+= i;
    }
}
return sum;
}

// function cal(){
//     const a = parseInt(document.getElementById('a').value);
//     const b = parseInt(document.getElementById('b').value);
//     const n = parseInt(document.getElementById('n').value);
    
//     const result = sumofMultiples(a,b,n);

//     alert(`The sum of multiples of numbers ${a} or ${b} below ${n} is: ${result}`);
// }
function cal(){
   const a=document.getElementById('a').value;
  const  b=document.getElementById('b').value;
   const n=document.getElementById('c').value;
    document.getElementById('a').style.display="none";
    document.getElementById('b').style.display="none";
    document.getElementById('c').style.display="none";
    document.getElementById('sum').style.display="none";
    document.getElementById('label1').style.display="none";
    document.getElementById('label2').style.display="none";
    document.getElementById('label3').style.display="none";
    const result = sumofMultiples(a,b,n);
}
function Show(){
    document.getElementById('a').style.display="block";
    document.getElementById('b').style.display="block";
    document.getElementById('c').style.display="block";
    document.getElementById('sum').style.display="block";
    document.getElementById('label1').style.display="block";
    document.getElementById('label2').style.display="block";
    document.getElementById('label3').style.display="block";

}