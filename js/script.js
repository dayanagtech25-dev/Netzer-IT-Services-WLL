(function(){
var s=document.querySelectorAll('.slide'),d=document.querySelectorAll('.dots button'),i=0,t;
function go(n){if(!s.length)return;s[i].classList.remove('on');d[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');d[i].classList.add('on')}
function play(){clearInterval(t);t=setInterval(function(){go(i+1)},5500)}
d.forEach(function(b,n){b.addEventListener('click',function(){go(n);play()})});
var p=document.querySelector('.prev'),x=document.querySelector('.next');
if(p){p.addEventListener('click',function(){go(i-1);play()});x.addEventListener('click',function(){go(i+1);play()})}
if(s.length)play();
var b=document.querySelector('.burger'),n=document.querySelector('.nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var up=document.querySelector('.totop');
window.addEventListener('scroll',function(){up.hidden=window.scrollY<400});
up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
var f=document.getElementById('cf');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('fs'),v=f.querySelectorAll('[required]'),ok=true;
v.forEach(function(el){if(!el.value.trim()||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(el.value))){ok=false}});
if(!ok){m.className='note err';m.textContent='Please fill in your name, a valid email and your message.';return}
var data=Object.fromEntries(new FormData(f));data._subject='New enquiry from netzerit.com';data._template='table';
m.className='note';m.textContent='Sending...';
fetch('https://formsubmit.co/ajax/info@netzerit.com',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
.then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(){m.className='note ok';m.textContent='Thank you. We got your message and will reply soon.';f.reset()})
.catch(function(){m.className='note err';m.textContent='Message could not be sent. Please WhatsApp us on +973 3744 8533.'})})}
})();
(function(){
var dd=document.querySelector('.dd');if(!dd)return;
var link=dd.querySelector(':scope > a'),sub=dd.querySelector('.sub');
var all=document.createElement('a');
all.href=link.href;all.textContent='All Services';all.className='all-s';
sub.insertBefore(all,sub.firstChild);
link.setAttribute('aria-haspopup','true');
link.setAttribute('aria-expanded','false');
link.addEventListener('click',function(e){
  if(window.matchMedia('(max-width:860px)').matches){
    e.preventDefault();
    var o=dd.classList.toggle('open');
    link.setAttribute('aria-expanded',o);
  }
});
})();
