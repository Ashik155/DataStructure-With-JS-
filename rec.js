//In bubble sort we are comparing adjacent ele and if it any of greater, we keep doing this for entire pass and make last index of array as max valued index.
//then we just dont touch that sorted path, we now consider second last as new max index for second pass. and so.
// const buble =(arr)=>{
//     for(let i=arr.length-1;i>=0;i--){
//         let noswap = true;
//         for(let j=0;j<=i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//                 noswap = false;
//                 console.log('Swapped')
//             }
//         }
//         if(noswap) {
            
//             console.log("no need to swap")
//             break;
//         }
//     }
//     console.log(arr)
// }

// buble([8, 22, 7, 9, 31, 5, 13])

//selection Sort
//finding min element in one pass and then swap it with begining of array.
//of course after swapping or first pass, we dont need to touch that part, to do so we are assiging incremented
//value of i to the new min index. bec at the end of the first loop we are doing swapping. 
// const selection = (arr)=>{
    

//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for(let j=i+1;j<arr.length;j++){
//            if(arr[j]<arr[min]){
//                min = j
//            }
//         }
//         //optimized version
//         if( i!== min){
//             console.log("swapping")
//             let temp = arr[i]
//             arr[i]=arr[min]
//             arr[min] = temp
//         }
      
   
//     }
//     return arr
// }

// console.log(selection([2,1,4,3]))


//insertion sort 
// first we will compare the element with half sorted element and determine correct place to go

// const insertionSort = (arr)=>{

    
//     for(let i=1;i<arr.length;i++){
//        let currentValue = arr[i]
//        let j=i-1;
//        while(j >=0 && arr[j]>currentValue ){
//            arr[j+1]=arr[j]
//            j--
//        }
//        arr[j+1]=currentValue
       
        
//     }
    
//     return arr
// }

// console.log(insertionSort([1,24,3,12,33]))



//mergeSort 

//first We will Define Merging of two sorted array...

const mergingSortedArray = (a1,a2)=>{
    let i=0;
   let  j=0;

    let res = [];

    while(i<a1.length && j<a2.length){
     
        if(a1[i]<=a2[j]){
           
            res.push(a1[i])
            i+=1;
        }else{
            res.push(a2[j])
            j+=1;
        }
    }
    while(i<a1.length){
        res.push(a1[i])
        i+=1;
    }
    while(j<a2.length){
        res.push(a2[j])
        j+=1;
        
    }
    
    return res
}

    

const breakingDownArray = (arr)=>{

    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
  let left = breakingDownArray(arr.slice(0,mid))
  let right = breakingDownArray(arr.slice(mid));
  return mergingSortedArray(left,right)

}

console.log(breakingDownArray([1,32,5,22,45,736,21,312,12,1213,112]))