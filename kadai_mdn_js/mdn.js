const day= new Date();

// それぞれ定数を宣言して表示
const yyyy = day.getFullYear();
const mm = day.getMonth()+1 ;
const dd = day.getDate();
console.log(yyyy + '年'+ mm + '月' + dd +'日');

// 直接関数を入力して表示
console.log(day.getFullYear() + '年'+ (day.getMonth()+1) + '月' + day.getDate() + '日' )