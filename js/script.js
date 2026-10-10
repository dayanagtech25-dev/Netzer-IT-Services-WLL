:root{--navy:#0A1F44;--blue:#0B5FD0;--org:#FF8A1F;--ink:#13233f;--bg:#f4f7fc}
*{box-sizing:border-box;margin:0}html{scroll-behavior:smooth}body{font:16px/1.65 'DM Sans',system-ui,sans-serif;color:var(--ink);background:#fff}
h1,h2,h3{font-family:Sora,sans-serif;line-height:1.2}a{color:var(--blue)}img{max-width:100%;height:auto}
.wrap{max-width:1160px;margin:auto;padding:0 20px}.skip{position:absolute;left:-999px}.skip:focus{left:10px;top:10px;background:#fff;padding:8px;z-index:99}
:focus-visible{outline:3px solid var(--org);outline-offset:2px}
.top{background:var(--navy);color:#cfe0ff;font-size:14px}.top .wrap{display:flex;gap:20px;justify-content:flex-end;padding-top:6px;padding-bottom:6px}.top a{color:#cfe0ff;text-decoration:none}
.hdr{position:sticky;top:0;z-index:50;background:#fff;box-shadow:0 2px 12px #0a1f4420}.bar{display:flex;align-items:center;justify-content:space-between;padding-top:6px;padding-bottom:6px}
.logo img{display:block;height:54px;width:auto}.nav{display:flex;align-items:center;gap:26px}.nav a{text-decoration:none;color:var(--navy);font-weight:500}.nav a[aria-current]{color:var(--blue);border-bottom:2px solid var(--org)}
.btn{display:inline-block;background:var(--org);color:#fff!important;padding:12px 24px;border-radius:30px;font-weight:700;text-decoration:none;border:0;cursor:pointer;font:700 15px 'DM Sans';transition:transform .2s,background .2s}.btn:hover{background:#e87a10;transform:translateY(-2px)}
.btn.ghost{background:transparent;border:2px solid #fff}.btn.wa{background:#25a244}.nav .btn{padding:9px 20px}
.burger{display:none;background:none;border:0;padding:8px;cursor:pointer}.burger span{display:block;width:26px;height:3px;background:var(--navy);margin:5px 0}
.hero{position:relative;background:var(--navy) url(../images/banner.jpg) center/cover;color:#fff;overflow:hidden;min-height:480px}
.hero:before,.hero:after{content:"";position:absolute;border-radius:50%;animation:float 9s ease-in-out infinite}.hero:before{width:340px;height:340px;right:-60px;top:-60px;background:#0b5fd055}.hero:after{width:200px;height:200px;right:18%;bottom:-70px;background:#ff8a1f44;animation-delay:-4s}
@keyframes float{50%{transform:translate(-30px,30px) scale(1.1)}}
.slides{position:relative;min-height:480px}.slide{position:absolute;inset:0;display:flex;align-items:center;opacity:0;visibility:hidden;transition:opacity .8s,visibility .8s}.slide.on{opacity:1;visibility:visible}
.slide.s2{background:linear-gradient(100deg,#0A1F44cc,#0b5fd0aa)}.slide.s3{background:linear-gradient(100deg,#0A1F44cc,#c9640acc)}
.slide h1,.slide h2{font-size:clamp(28px,5vw,52px);max-width:720px}.slide p{max-width:600px;margin:16px 0 26px;font-size:18px;color:#dce8ff}.cta{display:flex;gap:14px;flex-wrap:wrap}
.slide.on h1,.slide.on h2{animation:in .8s both}.slide.on p{animation:in .8s .25s both}.slide.on .cta{animation:in .8s .5s both}
@keyframes in{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}
.dots{position:absolute;bottom:18px;left:0;right:0;display:flex;gap:10px;justify-content:center;z-index:5}.dots button{width:12px;height:12px;border-radius:50%;border:2px solid #fff;background:transparent;cursor:pointer}.dots .on{background:var(--org);border-color:var(--org)}
.usp{background:var(--blue);color:#fff;font-weight:700}.usp .wrap{display:flex;flex-wrap:wrap;justify-content:space-around;gap:10px;padding-top:14px;padding-bottom:14px}
.sec{padding:70px 20px}.sec.wrap{padding-left:20px;padding-right:20px}.alt{background:var(--bg)}.sec h2{font-size:clamp(26px,3.5vw,36px);margin-bottom:10px;color:var(--navy)}.lead{margin-bottom:30px;color:#4a5b78}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:26px}.grid.g4{grid-template-columns:repeat(4,1fr)}
.card{background:linear-gradient(160deg,var(--navy),#0d3a82);color:#fff;border-radius:14px;padding:26px;transition:transform .25s}.card:hover{transform:translateY(-5px)}.card h3{margin:12px 0 8px;font-size:19px}.card p{color:#cfe0ff;font-size:15px}
.split{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center}.split img{border-radius:14px}.split p{margin-bottom:14px}
.cta2{background:var(--navy);color:#fff;text-align:center;padding:60px 20px}.cta2 p{margin:8px 0 22px;color:#cfe0ff}
.ph{background:linear-gradient(100deg,var(--navy),var(--blue));color:#fff;padding:60px 0}.ph h1{font-size:clamp(28px,4vw,42px)}.ph p{color:#dce8ff;margin-top:8px}
.form{display:grid;gap:14px}.form label{display:grid;gap:5px;font-weight:500}.form input,.form select,.form textarea{padding:12px;border:1px solid #b9c6dd;border-radius:8px;font:inherit}
.ftr{background:#071632;color:#b9c9e6;padding-top:50px}.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:30px}.ftr h3{color:#fff;font-size:16px;margin-bottom:10px}.ftr a,.ftr span{display:block;color:#b9c9e6;text-decoration:none;margin-bottom:6px;font-size:15px}.flogo{background:#fff;border-radius:8px;padding:4px;margin-bottom:10px}
.copy{text-align:center;padding:24px 0;margin-top:30px;border-top:1px solid #ffffff22;font-size:14px}
@media(max-width:860px){.burger{display:block}.nav{display:none;position:absolute;left:0;right:0;top:100%;background:#fff;flex-direction:column;padding:20px;gap:14px;box-shadow:0 10px 20px #0a1f4430}.nav.open{display:flex}
.grid,.grid.g4,.split,.fgrid{grid-template-columns:1fr}.top .wrap{justify-content:center;flex-wrap:wrap;gap:10px}.slides,.hero{min-height:560px}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
.dd{position:relative}.sub{display:none;position:absolute;top:100%;left:-14px;background:#fff;min-width:290px;box-shadow:0 10px 24px #0a1f4435;border-radius:10px;padding:8px}.dd:hover .sub,.dd:focus-within .sub{display:block}.sub a{display:block;padding:8px 12px}
.card{display:block;text-decoration:none}.card .ic{width:56px;height:56px;border-radius:14px;background:#ffffff16;display:grid;place-items:center}.card .more{color:var(--org);font-weight:700;margin-top:12px;display:block}.card h3{color:#fff}
.slide .wrap{width:100%}.slide.s1{background:linear-gradient(100deg,#0a1f44e6,#0a1f4466),url(../images/slide-1.jpg) center/cover}.slide.s2{background:linear-gradient(100deg,#0a1f44e6,#0a1f4466),url(../images/slide-2.jpg) center/cover}.slide.s3{background:linear-gradient(100deg,#0a1f44e6,#0a1f4466),url(../images/slide-3.jpg) center/cover}
.hero{background:var(--navy)}.hero:before,.hero:after{z-index:1;pointer-events:none}.slide{z-index:2}
.arw{position:absolute;top:50%;z-index:6;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:2px solid #fff;background:#0a1f4488;color:#fff;font-size:30px;line-height:1;cursor:pointer}.arw:hover{background:var(--org);border-color:var(--org)}.prev{left:14px}.next{right:14px}
.btn.wa{display:inline-flex;align-items:center;gap:8px}
.fab{position:fixed;left:16px;bottom:16px;z-index:60;display:flex;align-items:center;gap:8px;background:#25a244;color:#fff;padding:12px 18px;border-radius:40px;text-decoration:none;font-weight:700;box-shadow:0 6px 18px #0004}.fab:hover{background:#1e8a39}
.totop{position:fixed;right:16px;bottom:16px;z-index:60;width:48px;height:48px;border-radius:50%;border:0;background:var(--org);color:#fff;font-size:24px;cursor:pointer;box-shadow:0 6px 18px #0004}.totop[hidden]{display:none}
.ph{background:linear-gradient(100deg,#0a1f44ee,#0b5fd0aa),url(../images/banner.jpg) center/cover}.crumb{font-size:14px;margin-bottom:10px;color:#cfe0ff}.crumb a{color:#fff}
.narrow{max-width:860px}.mt{margin-top:30px}.areas{margin-top:28px;color:#4a5b78}
.faq details{background:#fff;border:1px solid #d5dff0;border-radius:10px;margin-bottom:10px;padding:14px 18px}.faq summary{cursor:pointer;font-weight:700;color:var(--navy)}.faq p{margin-top:10px;color:#3b4b66}
.box{background:var(--bg);border-radius:14px;padding:26px}.tick{list-style:none;padding:0;margin-top:12px}.tick li{padding:8px 0 8px 30px;position:relative;border-bottom:1px solid #dbe4f3}.tick li:before{content:"\2713";position:absolute;left:0;color:var(--org);font-weight:700}
.rel{display:flex;flex-wrap:wrap;gap:12px;margin-top:16px}.rel a{background:#fff;border:1px solid #c9d6ec;border-radius:30px;padding:9px 18px;text-decoration:none;font-weight:500}.rel a:hover{border-color:var(--org)}
.ci{grid-template-columns:repeat(3,1fr);margin-top:-90px;position:relative}.ci .card{text-align:center;box-shadow:0 12px 30px #0a1f4440}.ci .card p{font-size:18px;color:#fff}
.split.top{align-items:start}.form{background:#fff;padding:30px;border-radius:16px;box-shadow:0 10px 30px #0a1f4422}.form h2{margin-bottom:6px}.two{display:grid;grid-template-columns:1fr 1fr;gap:14px}.hp{position:absolute;left:-9999px}.note{min-height:24px;font-weight:500}.note.ok{color:#1e8a39}.note.err{color:#c0392b}
.split iframe{width:100%;height:280px;border:0;border-radius:12px;margin-top:10px}
@media(max-width:860px){.sub{display:block;position:static;box-shadow:none;min-width:0;padding:0 0 0 14px}.ci{grid-template-columns:1fr;margin-top:-50px}.two{grid-template-columns:1fr}.arw{width:38px;height:38px;top:auto;bottom:10px;transform:none}.fab span{display:none}.fab{padding:13px}.slide{padding-bottom:50px}.slides,.hero{min-height:600px}}.sub a.all-s{display:none}
@media(max-width:860px){
.nav{align-items:stretch;gap:0;padding:6px 20px 22px;max-height:calc(100vh - 110px);overflow-y:auto;text-align:left}
.nav>a:not(.btn),.dd>a{display:block;padding:14px 4px;border-bottom:1px solid #e3eaf6;text-align:left;font-size:17px}
.nav>a[aria-current],.dd>a[aria-current]{color:var(--blue);border-bottom:1px solid #e3eaf6}
.dd{width:100%}
.dd>a:after{content:"\25BE";float:right;transition:transform .2s}
.dd.open>a:after{transform:rotate(180deg)}
.nav .sub,.dd:hover .sub,.dd:focus-within .sub{display:none}
.dd.open .sub{display:block}
.sub{position:static;box-shadow:none;min-width:0;padding:2px 0 4px 14px;margin:6px 0 8px 4px;border-left:3px solid var(--org)}
.sub a{display:block;padding:10px 8px;font-size:15px;border:0;color:#33425f;text-align:left}
.sub a.all-s{display:block;font-weight:700;color:var(--blue)}
.nav .btn{margin-top:18px;align-self:flex-start;text-align:left;padding:13px 26px}
}
.copy a sup {
    font-size: 9px;
    vertical-align: super;
    line-height: 0;
}
#site-header{position:sticky;top:0;z-index:50;min-height:100px;background:#fff}
.num{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--org);color:#fff;font:700 15px Sora,sans-serif}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:26px;margin-top:26px}
.founder{background:#fff;border:1px solid #d5dff0;border-radius:16px;padding:28px;box-shadow:0 8px 24px #0a1f4414}
.avatar{width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--org));color:#fff;display:grid;place-items:center;font:700 26px Sora,sans-serif;margin-bottom:12px}
.founder h3{color:var(--navy);font-size:22px}.founder .role{color:var(--blue);font-weight:700;margin:2px 0 12px}.founder h4{margin:16px 0 4px;font-size:15px;color:var(--navy)}
@media(max-width:860px){.two-col{grid-template-columns:1fr}}
