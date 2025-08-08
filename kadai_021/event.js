const btnText=document.getElementById('text');
const button=document.getElementById('btn');

button.addEventListener('click',()=>{
  setTimeout(()=>{
    btnText.textContent='ボタンをクリックしました'
  },2000);
});