let n=5;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        process.stdout.write('* ')
    }
    console.log()
}

for(let i=0; i<n; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write('* ')
    }
    console.log()
}

for(let i=0; i<=n; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j + " ")
    }

    console.log()
}

for(let i=0; i<=n; i++){
    let ascii=65;
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii)+" ");
        ascii++
    }
    console.log()
}

for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--){
        process.stdout.write('* ')
    }
    console.log()
}


for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--){
        process.stdout.write(' ')
    }
    for(let j=1; j<=i; j++){
        process.stdout.write('* ')
    }
    console.log()
}


for (let i = 1; i <= n; i++) {
    for (let j = 1; j<=n-i; j++) {
        process.stdout.write('  ')
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write('* ')
    }
    console.log()
}

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i===j || i+j===n+1){
            process.stdout.write('* ')
        }else{
            process.stdout.write('  ')
        }
    }
    console.log()
}