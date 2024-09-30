// Find the sum of all the multiples of 3 or 5 below 1000
function sumofMultiples(a,b,n){
let sum =0
for(let i = 0; i<1000; i++){
    if(i%3===0||i%5===0){
        sum+=i
    }
}
alert(sum);
}

function cal(){
    const a = parseInt(document.getElementById('a').value);
    const b= parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const result= sumofMultiples(a,b,n)
    alert('the sum of multiples')
}