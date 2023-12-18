"use strict";
let obj = {
    student_name: "John",
    roll_no: 12,
    department: 'mca',
    givedetails: function () {
        console.log("Name: " + this.student_name + " Roll No: " + this.roll_no);
    }
};
obj.givedetails();
console.log(obj.department);
