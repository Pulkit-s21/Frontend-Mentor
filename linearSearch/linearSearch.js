var arr = [1,2,3,4]

value = 3

for(i=0;i<arr.length;i++){
    if(arr[i] == value){
        document.getElementById("output").textContent = `The element ${value} was found at ${i} index`
    }
}
