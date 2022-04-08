
const employee={name:"Sam",streetAddress:"canter court"}
function updateEmployeeWithKeyAndValue (Employee,Key,Value){
    const Sam={...Employee}
    Sam[Key]=Value





    return  Sam
}
const Employee={name:"Sam",streetAddress:"11 Broadway"}
function destructivelyUpdateEmployeeWithKeyAndValue (Employee,key,value){
  Employee[key]=value  
    return Employee
}
function destructivelyDeleteFromEmployeeByKey (Employee,Key) {
   delete Employee[Key]
   return Employee
}
function deleteFromEmployeeByKey (Employee, key) {

const Marc = {...Employee } 
delete Marc[key]
return Marc 
}

