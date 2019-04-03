 const people = [
   {age:46,name:'roger'},
   {age:99,name:'vniiy'},
   {age:58,name:'don'},
   {age:76,name:'canv'},
   {age:88,name:'brendan'},
 ]

 var orderPeople = function(people){
   return people.sort((a,b) => {
     return a.age - b.age ;

   })
 }

 console.log(orderPeople(people));