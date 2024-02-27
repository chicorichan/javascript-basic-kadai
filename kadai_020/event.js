// btnというidを持つHTML要素を取得し、定数に代入
const clickBtn =document.getElementById('btn');

// ボタンがクリックされたときにイベントを処理
btn.addEventListener('click', ()=> {
  // 入力されているテキストの内容を取得してtextContentで変更
  const textArea =document.getElementById('text')
  textArea.textContent='ボタンをクリックしました'
})
