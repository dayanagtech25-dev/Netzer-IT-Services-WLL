(function(){
var tag=document.querySelector('script[src$="js/script.js"]');
var root=tag.getAttribute('src').replace('js/script.js','');

/* ---- shared header and footer: edit them here, they appear on every page ---- */
var HEADER=`<header class="hdr"><div class="top"><div class="wrap"><span>Kingdom of Bahrain</span><a href="mailto:info@netzerit.com">info@netzerit.com</a><a href="tel:+97333001234">+973 3300 1234</a></div></div>
<div class="wrap bar"><a href="{{root}}index.html" class="logo"><img src="{{root}}images/logo.png" alt="Netzer IT Services logo" width="180" height="60"></a>
<button class="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>
<nav class="nav" aria-label="Main"><a href="{{root}}index.html">Home</a><a href="{{root}}about.html">About Us</a><div class="dd"><a href="{{root}}services.html">Services</a><div class="sub"><a href="{{root}}structured-cabling.html">Structured Cabling</a><a href="{{root}}fiber-optic-installation.html">Fiber Optic Installation</a><a href="{{root}}it-rack-setup.html">IT Rack Setup</a><a href="{{root}}network-testing-certification.html">Network Testing & Certification</a><a href="{{root}}cctv-security-services.html">CCTV Security Services</a><a href="{{root}}annual-maintenance.html">Annual Maintenance</a></div></div><a href="{{root}}contact.html">Contact</a><a class="btn" href="{{root}}contact.html">Get Free Quote</a></nav></div></header>`;
var FOOTER=`<footer class="ftr"><div class="wrap fgrid"><div><img src="{{root}}images/logo.png" alt="Netzer IT Services" width="150" height="50" class="flogo"><p>Netzer IT Services WLL. Cabling, racks, CCTV and IT support for businesses across Bahrain.</p></div>
<div><h3>Services</h3><a href="{{root}}structured-cabling.html">Structured Cabling</a><a href="{{root}}fiber-optic-installation.html">Fiber Optic Installation</a><a href="{{root}}it-rack-setup.html">IT Rack Setup</a><a href="{{root}}network-testing-certification.html">Network Testing & Certification</a><a href="{{root}}cctv-security-services.html">CCTV Security Services</a><a href="{{root}}annual-maintenance.html">Annual Maintenance</a></div><div><h3>Company</h3><a href="{{root}}index.html">Home</a><a href="{{root}}about.html">About Us</a><a href="{{root}}services.html">All Services</a><a href="{{root}}contact.html">Contact</a></div>
<div><h3>Contact</h3><a href="mailto:info@netzerit.com">info@netzerit.com</a><a href="tel:+97333001234">+973 3300 1234</a><a href="https://wa.me/97337448533?text=Hello%20Netzer%20IT%2C%20I%20need%20a%20quote">WhatsApp: +973 3744 8533</a><span>Kingdom of Bahrain</span></div></div>
<p class="copy">&copy; 2026 Netzer IT Services WLL. All rights reserved. | <a href="https://gracewell.in/">Powered by Gracewell Technologies<sup>TM</sup></a></p></footer>
<a class="fab" href="https://wa.me/97337448533?text=Hello%20Netzer%20IT%2C%20I%20need%20a%20quote" aria-label="Chat on WhatsApp" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"/></svg><span>WhatsApp</span></a>
<button class="totop" aria-label="Back to top" hidden>&#8593;</button>`;
function put(id,html){var box=document.getElementById(id);if(box)box.innerHTML=html.replace(/\{\{root\}\}/g,root)}
put('site-header',HEADER);put('site-footer',FOOTER);
markActive();initMenu();initTop();

/* highlight current page in the menu */
function markActive(){
  function name(p){return (p.split('/').pop()||'index').replace(/\.html$/,'')||'index'}
  var here=name(location.pathname);
  document.querySelectorAll('.nav a:not(.btn)').forEach(function(a){
    if(name(a.pathname)!==here)return;
    a.setAttribute('aria-current','page');
    var dd=a.closest('.dd');
    if(dd&&a.parentNode.classList.contains('sub')){dd.querySelector(':scope > a').setAttribute('aria-current','page')}
  });
}

/* burger + services submenu */
function initMenu(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav');
  if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  var dd=document.querySelector('.dd');if(!dd)return;
  var link=dd.querySelector(':scope > a'),sub=dd.querySelector('.sub');
  var all=document.createElement('a');
  all.href=link.href;all.textContent='All Services';all.className='all-s';
  sub.insertBefore(all,sub.firstChild);
  link.setAttribute('aria-haspopup','true');link.setAttribute('aria-expanded','false');
  link.addEventListener('click',function(e){
    if(window.matchMedia('(max-width:860px)').matches){
      e.preventDefault();
      var o=dd.classList.toggle('open');
      link.setAttribute('aria-expanded',o);
    }
  });
}

/* back to top */
function initTop(){
  var up=document.querySelector('.totop');if(!up)return;
  window.addEventListener('scroll',function(){up.hidden=window.scrollY<400});
  up.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
}

/* ---- slider ---- */
var s=document.querySelectorAll('.slide'),d=document.querySelectorAll('.dots button'),i=0,t;
function go(n){if(!s.length)return;s[i].classList.remove('on');d[i].classList.remove('on');i=(n+s.length)%s.length;s[i].classList.add('on');d[i].classList.add('on')}
function play(){clearInterval(t);t=setInterval(function(){go(i+1)},5500)}
d.forEach(function(b,n){b.addEventListener('click',function(){go(n);play()})});
var p=document.querySelector('.prev'),x=document.querySelector('.next');
if(p){p.addEventListener('click',function(){go(i-1);play()});x.addEventListener('click',function(){go(i+1);play()})}
if(s.length)play();

/* ---- contact form ---- */
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
