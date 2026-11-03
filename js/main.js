// Меню и тень шапки
const header=document.querySelector('header'),burger=document.querySelector('.burger'),menu=document.querySelector('.menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.addEventListener('click',e=>{if(e.target.closest('a')){menu.classList.remove('open');burger.setAttribute('aria-expanded',false)}});
addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>10),{passive:true});

// Появление блоков
const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal,.shine').forEach(el=>io.observe(el));

// Слайдер отзывов
const track=document.querySelector('.track'),slides=track.children,dots=document.querySelector('.dots');
let i=0,timer;
for(let k=0;k<slides.length;k++){const d=document.createElement('button');d.className='dot';d.setAttribute('aria-label','Отзыв '+(k+1));d.onclick=()=>go(k,true);dots.appendChild(d)}
function go(n,user){i=(n+slides.length)%slides.length;track.style.transform='translateX(-'+i*100+'%)';[...dots.children].forEach((d,k)=>d.classList.toggle('active',k===i));if(user)restart()}
function restart(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(()=>go(i+1),7000)}
document.getElementById('prev').onclick=()=>go(i-1,true);
document.getElementById('next').onclick=()=>go(i+1,true);
go(0);restart();

// Форма
document.getElementById('lead').addEventListener('submit',e=>{e.preventDefault();e.target.querySelector('.ok').textContent='Заявка отправлена. Мы перезвоним в течение 15 минут.';e.target.reset()});
