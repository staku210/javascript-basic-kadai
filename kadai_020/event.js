const btnText=document.getElementById('text');

const button=document.getElementById('btn');

button.addEventListener('click',()=>{
  btnText.textContent='ボタンをクリックしました';
});