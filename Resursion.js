function fibo(n){
    if(n==0){
        return 0;
    }
    if(n==1 || n==2){
        return 1;
    }
    else{
        return fibo(n-1)+fibo(n-2);
    }
}

let i,n=6;
    console.log("Values are");
    for(i=0;i<n;i++)
    console.log(fibo(i));