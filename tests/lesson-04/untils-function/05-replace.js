const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống."; 
const numbersStr = "1,234,567"; 

//1. 
phone = phoneNumber.replace(/ /g,".");
console.log(phone);

//2.
rp = report.replace(/lỗi/g,"bug");
console.log(rp);

//3.
num = numbersStr.replace(/,/g,".");
console.log(num);