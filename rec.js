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