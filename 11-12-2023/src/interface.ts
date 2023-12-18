// interfaces are same as type alias but interfaces must need the shape of parameter passed to function 
// implements is the key word used in oops to combine class function to interface more then one interfaces can be implement\
// type alias can be used without passing any parameter to function
interface std {
    student_name:string
    roll_no:number
    givedetails:()=>void
}

interface std{
    department:string
}
let obj:std={
    student_name:"John",
    roll_no:12,
    department:'mca',
    givedetails:function(){
        console.log("Name: "+this.student_name+" Roll No: "+this.roll_no)
        }
        }
obj.givedetails()
console.log(obj.department)





    