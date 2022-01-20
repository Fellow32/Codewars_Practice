function findMissingLetter(array){


    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


      if (array[0] == array[0].toUpperCase()) {
          
        array = array.join().toLowerCase().split('')

        const ind1 = arr_en.indexOf(array[0])
      const ind2 = arr_en.indexOf(array[array.length-1])

       let newArray = arr_en.slice(ind1,ind2 + 1) 

       let filterArray = newArray.filter((el) => !array.includes(el))

       return filterArray[0].toUpperCase()

      } 
      else {

        const ind1 = arr_en.indexOf(array[0])
        const ind2 = arr_en.indexOf(array[array.length-1])
  
         let newArray = arr_en.slice(ind1,ind2 + 1) 
  
         let filterArray = newArray.filter((el) => !array.includes(el))
  
         return filterArray[0]


      }

  
}

console.log(findMissingLetter(['O','Q','R','S'])) 



                                                            
