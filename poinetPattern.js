const arr = [-4,-3,-2,-1,2,5,6]

// i+j > 0 then right --,
// i+j < 0 then left ++
//i+J = 0 simply return 

//do this untill our left remains less than right left < right
const zeroSumPair =(arr)=>{
    let left = 0;
    let right = arr.length -1;
    let sum =0;
    
    while(left<right){
         sum = arr[left]+arr[right];
         if(sum===0){
             
             return [arr[left],arr[right]]
         }else if(sum > 0){
             right --
         }else if(sum<0){
             left++
         }
    
    }
}

console.log(zeroSumPair(arr))


//countUniqueNumbers....

//loop through while right <= arr.length
// i,j same increase J++ pointer
//i,j not same then increment counter as well as current value of j will be assigned to i, j++

const getUni = (arr)=>{
    let i =0;
    let j =1;
    let count =0;
    while(j<arr.length){
        console.log("starting with ....",arr[i])
        if(arr[i]===arr[j]){
            j++
        }else if(arr[i]!==arr[j]){
            console.log("Called for..", arr[j])
            count = count + 1;
            i=j;
            j=j+1
        }
    }
    return count+1
}


const getUni2 = (arr)=>{
    let result = []
    result[0]= arr[0]
    let j=1;
 for (let i=1;i<arr.length;i++){
     if(arr[i]!==arr[i-1]){
         console.log("Eneytring ")
         result[j]=arr[i]
         j++
     }
 }
 return result.length
}

console.log(getUni([1,2,3,3,3,4,4,5,6,7,8,9,10,11,11,11]))
console.log(getUni2([1,2,3,3,3,4,4,5,6,7,8,9,10,11,11,11]))