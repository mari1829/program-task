let dob=new Date("02/25/1998");
let t=dob.getTime();
let total=Date.now()-t;
let age_cal=new Date(total);
let y=age_cal.getFullYear();
let age=Math.abs(y-1970);
console.log("Age"+age);
