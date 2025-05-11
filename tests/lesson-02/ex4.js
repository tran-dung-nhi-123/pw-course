// cao 1m52 = 152 cm
// cân nặng lý tưởng: 52x9:10 = 46,8
// cân tối đa: 52
// cân tối thiểu: 52x8:10 = 41,6

let l=152;
let h = (l-100)*9/10;
let hmax = l-100 ;
let hmin = (l-100)*8/10;
console.log ("Cân nặng lý tưởng: "+ h);
console.log ("Cân nặng tối đa: "+ hmax);
console.log ("Cân nặng tối thiểu: "+ hmin);
