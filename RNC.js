let btn = document.querySelector(".calcu-btn");
btn.addEventListener('click', () =>{
    const roman = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let s = document.getElementById("num").value;
    let result = document.querySelector('.result');
    let num = 0;
for(let i=0; i<s.length; i++){
    const curr=roman[s[i]];
    const next=roman[s[i+1]];
    (curr<next)?(num-=curr):(num+=curr);
}
result.innerHTML= num;   
    const number = {1:I, 5:V, 10:X, 50:L, 100:C, 500:D, 1000:M}
    let r = document.getElementById('num').value;
    for(let i=0; i<r.length; i++){
        const curr=number[r[i]];
        const next=number[r[i+1]];
        (curr<next)?(num-=curr):(num+=curr);
    }
})