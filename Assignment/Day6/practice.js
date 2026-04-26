const n = 7


for(let i=0;i<4;i++){
    let h ='';

     for(let i=0;i<=n;i++){
       h +='* '
    }

    console.log(h)
}

console.log('right triangle')

for(let i=0;i<n;i++){
    let h ='';

     for(let j=0;j<=i;j++){
       h +='* '
    }

    console.log(h)
}

console.log('left triangle')

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n - i; j++) {
    row += "  ";
  }

  for (let k = 1; k <= i; k++) {
    row += "* ";
  }

  console.log(row);
}

console.log('pyramid')

for (let i = 1; i <= n; i++) {

}



