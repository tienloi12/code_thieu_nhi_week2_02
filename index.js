let n = "ATCGTAC";
let m = "TAGTCAC";
 function Virus(n,m) {
    let count = 0;
    for (let i = 0; i < n.length ; i++)
    {
        let temp = i;
        for(let j = 0; j < m.length ; j++)
        {
            if (n[temp] === m[j])
            {
                count++;
                temp++;
            } else {i++}
    }

 }
 return count;
}



 console.log(Virus(n,m));