(this.webpackJsonpcaelum=this.webpackJsonpcaelum||[]).push([[0],{31:function(e){e.exports=JSON.parse('{"hourly":"Hourly","location":"Location","lastLocations":"Last locations:","noResults":"No results","weather":"weather","temp":"temp","wind":"wind","pressure":"pressure","rain":"rain","sunrise":"sunrise","sunset":"sunset","windDescr_1":"no wind","windDescr_2":"light wind","windDescr_3":"medium wind","windDescr_4":"strong wind","windDescr_5":"very strong wind","windDescr_6":"storm","windDescr_7":"strong storm","windDescr_8":"violent storm","windDescr_9":"hurricane"}')},32:function(e,n,t){"use strict";var r,a,c,i,s,o=t(4),l=(t(41),t(3)),d=t.n(l),u=t(7),b=t.n(u),j=t(1),h=t(2),f=t.p+"static/media/background_forest.5065e4eb.svg",O=h.c.div(r||(r=Object(j.a)(["\n  scroll-snap-type: y mandatory;\n  overflow: scroll;\n  height: 100vh;\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),f),m=t(6),p=t(0),v=h.c.div(i||(i=Object(j.a)(["\n  height: 100vh;\n  scroll-snap-align: start;\n  scroll-snap-stop: normal;\n  transition: transform 0.2s ease-in-out;\n  ","\n"])),(function(e){return e.isModalOpen?Object(h.b)(a||(a=Object(j.a)(["\n        transform: translateX(-80vw);\n      "]))):Object(h.b)(c||(c=Object(j.a)(["\n        transform: translateX(-0vw);\n      "])))})),g=function(e){var n=e.children,t=e.forwardRef,r=m.a.wrappedHook().isModalOpen;return Object(p.jsx)(v,{ref:t,isModalOpen:r,children:n})},x=t(15),w=t(5),y=t(34),k=t(14),M=t(20),z=t(21),S=function(){function e(n,t,r,a){Object(M.a)(this,e),this.r=void 0,this.g=void 0,this.b=void 0,this.aHex=void 0,this.aFraction=void 0,this.r=this.clamp(n),this.g=this.clamp(t),this.b=this.clamp(r),this.aHex=this.clamp(a),this.aFraction=this.hexToFraction(this.aHex)}return Object(z.a)(e,[{key:"toString",value:function(){return"rgba(".concat(Math.round(this.r),", ").concat(Math.round(this.g),", ").concat(Math.round(this.b),", ").concat(this.aFraction,")")}},{key:"hexToFraction",value:function(e){return e/255}},{key:"set",value:function(e,n,t,r){this.r=this.clamp(e),this.g=this.clamp(n),this.b=this.clamp(t),this.aHex=this.clamp(r),this.aFraction=this.hexToFraction(this.aHex)}},{key:"hueRotate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e=e/180*Math.PI;var n=Math.sin(e),t=Math.cos(e);this.multiply([.213+.787*t-.213*n,.715-.715*t-.715*n,.072-.072*t+.928*n,.213-.213*t+.143*n,.715+.285*t+.14*n,.072-.072*t-.283*n,.213-.213*t-.787*n,.715-.715*t+.715*n,.072+.928*t+.072*n])}},{key:"grayscale",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e)])}},{key:"sepia",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.393+.607*(1-e),.769-.769*(1-e),.189-.189*(1-e),.349-.349*(1-e),.686+.314*(1-e),.168-.168*(1-e),.272-.272*(1-e),.534-.534*(1-e),.131+.869*(1-e)])}},{key:"saturate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.multiply([.213+.787*e,.715-.715*e,.072-.072*e,.213-.213*e,.715+.285*e,.072-.072*e,.213-.213*e,.715-.715*e,.072+.928*e])}},{key:"multiply",value:function(e){var n=this.clamp(this.r*e[0]+this.g*e[1]+this.b*e[2]),t=this.clamp(this.r*e[3]+this.g*e[4]+this.b*e[5]),r=this.clamp(this.r*e[6]+this.g*e[7]+this.b*e[8]);this.r=n,this.g=t,this.b=r}},{key:"brightness",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(e)}},{key:"contrast",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.linear(e,-.5*e+.5)}},{key:"linear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.r=this.clamp(this.r*e+255*n),this.g=this.clamp(this.g*e+255*n),this.b=this.clamp(this.b*e+255*n)}},{key:"invert",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.r=this.clamp(255*(e+this.r/255*(1-2*e))),this.g=this.clamp(255*(e+this.g/255*(1-2*e))),this.b=this.clamp(255*(e+this.b/255*(1-2*e)))}},{key:"hsl",value:function(){var e=this.r/255,n=this.g/255,t=this.b/255,r=Math.max(e,n,t),a=Math.min(e,n,t),c=0,i=0,s=(r+a)/2;if(r===a)c=i=0;else{var o=r-a;switch(i=s>.5?o/(2-r-a):o/(r+a),r){case e:c=(n-t)/o+(n<t?6:0);break;case n:c=(t-e)/o+2;break;case t:c=(e-n)/o+4}c/=6}return{h:100*c,s:100*i,l:100*s}}},{key:"clamp",value:function(e){return e>255?e=255:e<0&&(e=0),e}}]),e}(),D=function(){function e(n){Object(M.a)(this,e),this.target=void 0,this.targetHSL=void 0,this.reusedColor=void 0,this.target=n,this.targetHSL=n.hsl(),this.reusedColor=new S(0,0,0,0)}return Object(z.a)(e,[{key:"solve",value:function(e){var n=this.solveNarrow(this.solveWide());return{values:n.values,loss:n.loss,filter:this.css(n.values,e)}}},{key:"solveWide",value:function(){for(var e=[60,180,18e3,600,1.2,1.2],n={loss:1/0,values:[]},t=0;n.loss>25&&t<3;t++){var r=this.spsa(5,e,15,[50,20,3750,50,100,100],1e3);r.loss<n.loss&&(n=r)}return n}},{key:"solveNarrow",value:function(e){var n=e.loss,t=n+1,r=[.25*t,.25*t,t,.25*t,.2*t,.2*t];return this.spsa(n,r,2,e.values,500)}},{key:"spsa",value:function(e,n,t,r,a){for(var c=[],i=1/0,s=new Array(6),o=new Array(6),l=new Array(6),d=0;d<a;d++){for(var u=t/Math.pow(d+1,.16666666666666666),b=0;b<6;b++)s[b]=Math.random()>.5?1:-1,o[b]=r[b]+u*s[b],l[b]=r[b]-u*s[b];for(var j=this.loss(o)-this.loss(l),h=0;h<6;h++){var f=j/(2*u)*s[h],O=n[h]/Math.pow(e+d+1,1);r[h]=p(r[h]-O*f,h)}var m=this.loss(r);m<i&&(c=r.slice(0),i=m)}return{values:c,loss:i};function p(e,n){var t=100;return 2===n?t=7500:4!==n&&5!==n||(t=200),3===n?e>t?e%=t:e<0&&(e=t+e%t):e<0?e=0:e>t&&(e=t),e}}},{key:"loss",value:function(e){var n=this.reusedColor;n.set(0,0,0,0),n.invert(e[0]/100),n.sepia(e[1]/100),n.saturate(e[2]/100),n.hueRotate(3.6*e[3]),n.brightness(e[4]/100),n.contrast(e[5]/100);var t=n.hsl();return Math.abs(n.r-this.target.r)+Math.abs(n.g-this.target.g)+Math.abs(n.b-this.target.b)+Math.abs(t.h-this.targetHSL.h)+Math.abs(t.s-this.targetHSL.s)+Math.abs(t.l-this.targetHSL.l)}},{key:"css",value:function(e,n){function t(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.round(e[n]*t)}return"invert(".concat(t(0),"%) sepia(").concat(t(1),"%) saturate(").concat(t(2),"%) hue-rotate(").concat(t(3,3.6),"deg) brightness(").concat(t(4),"%) contrast(").concat(t(5),"%) opacity(").concat(n,")")}}]),e}();function L(e){var n=function(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,(function(e,n,t,r,a){var c=a;return void 0===c&&(c="FF"),n+n+t+t+r+r+c}));var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(n)return[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16),parseInt(n[4],16)];throw new Error("Error parsing hex: "+e)}(e),t=Object(y.a)(S,Object(k.a)(n));return new D(t).solve(t.aFraction).filter}var C,N,_,H,F,A,I,R,E,K,P,W,T,J,B,V,X,Y,$,q,G,Q,U,Z,ee,ne,te,re,ae,ce,ie,se,oe,le,de,ue,be,je,he,fe,Oe,me,pe,ve,ge,xe=t.p+"static/media/fa-arrow.08e9c172.svg",we=t.p+"static/media/fa-bars.9c2f316b.svg",ye=t.p+"static/media/fa-crosshairs.758c6f29.svg",ke=t.p+"static/media/fa-custom-droplet.61034c97.svg",Me=t.p+"static/media/fa-close.b183d8b8.svg",ze=t.p+"static/media/fa-angle-right.b0b26199.svg",Se=t.p+"static/media/fa-raindrops.03c5f412.svg",De=t.p+"static/media/fa-snowflake.a059a105.svg",Le=t.p+"static/media/fa-strong-wind.988abb35.svg",Ce=t.p+"static/media/fa-triangle-exclamation.7f11f731.svg",Ne=t.p+"static/media/fa-wind-direction.64c8b4a7.svg",_e=h.c.img(C||(C=Object(j.a)(["\n  ","\n"])),function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(r){var a="".concat(e,": ").concat(Object(w.d)(n,t)(r),";");return Object(h.b)(s||(s=Object(j.a)(["\n      ","\n    "])),a)}}("filter","filter","")),He=function(e){return Object(p.jsx)(_e,Object(x.a)({},e))},Fe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000",t=L(n),r=function(n){return He(Object(x.a)(Object(x.a)({filter:t},n),{},{src:e}))};return r},Ae=Fe(xe,"#FFF"),Ie=(Fe(we),Fe(ye)),Re=(Fe(ke),Fe(Me),Fe(ze)),Ee=Fe(Se,"#00A3FF80"),Ke=Fe(De,"#00A3FF80"),Pe=Fe(Le,"#00A3FF80"),We=Fe(Ce),Te=Fe(Ne),Je=Object(h.b)(N||(N=Object(j.a)(["\n  height: 5em;\n  width: 5em;\n  color: rgba(0, 163, 255, 0.5);\n  fill: currentColor;\n"]))),Be=Object(h.c)(Pe)(_||(_=Object(j.a)(["\n  ","\n"])),Je),Ve=Object(h.c)(Ee)(H||(H=Object(j.a)(["\n  ","\n"])),Je),Xe=Object(h.c)(Ke)(F||(F=Object(j.a)(["\n  ","\n"])),Je),Ye=function(e){var n=e.rain,t=e.snow,r=e.temperature;return t>0?Object(p.jsx)(Xe,{}):n>0||r>0?Object(p.jsx)(Ve,{}):Object(p.jsx)(Xe,{})},$e=t(55),qe=[{min:0,max:.499,i18nLabelKey:"windDescr_1"},{min:.5,max:5.399,i18nLabelKey:"windDescr_2"},{min:5.4,max:7.999,i18nLabelKey:"windDescr_3"},{min:8,max:13.799,i18nLabelKey:"windDescr_4"},{min:13.8,max:16.999,i18nLabelKey:"windDescr_5"},{min:17,max:20.799,i18nLabelKey:"windDescr_6"},{min:20.8,max:24.499,i18nLabelKey:"windDescr_7"},{min:24.5,max:29.999,i18nLabelKey:"windDescr_8"},{min:30,max:1e3,i18nLabelKey:"windDescr_9"}],Ge=h.c.span(A||(A=Object(j.a)([""]))),Qe=h.c.div(I||(I=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.75em;\n"]))),Ue=h.c.div(R||(R=Object(j.a)(["\n  display: flex;\n  align-items: center;\n"]))),Ze=h.c.div(E||(E=Object(j.a)(["\n  height: fit-content;\n  font-weight: 500;\n  margin-left: 0.5em;\n  opacity: 0.8;\n"]))),en=h.c.span(K||(K=Object(j.a)(["\n  font-size: 2.25em;\n"]))),nn=h.c.span(P||(P=Object(j.a)(["\n  font-size: 1.5em;\n"]))),tn=h.c.span(W||(W=Object(j.a)(["\n  font-size: 1.5em;\n"]))),rn=Object(h.c)((function(e){var n=e.windSpeed,t=e.className,r=d.a.useMemo((function(){return qe.find((function(e){var t=e.min,r=e.max;return n>=t&&n<r}))}),[n]),a=Object(w.a)(qe),c=(r||a).i18nLabelKey,i=Object($e.a)().t;return Object(p.jsxs)(Ge,{className:t,children:["(",i(c),")"]})}))(T||(T=Object(j.a)(["\n  font-size: 1.2em;\n  margin-left: 0.5em;\n  padding-top: 0.4em;\n"]))),an=function(e){var n=Math.floor(e),t=Math.floor(100*(e-n));return[n,("00"+String(t)).slice(-2)]},cn=function(e){var n=e.currentWeather,t=n.wind_speed,r=Object(w.e)(n),a=Object(w.g)(n),c=n.temp,i=an(t),s=Object(o.a)(i,2),l=s[0],d=s[1],u=an(r+a),b=Object(o.a)(u,2),j=b[0],h=b[1];return Object(p.jsxs)(Qe,{children:[Object(p.jsxs)(Ue,{children:[Object(p.jsx)(Be,{}),Object(p.jsxs)(Ze,{children:[Object(p.jsx)(en,{children:l}),+d>0&&Object(p.jsxs)(nn,{children:[".",d]}),Object(p.jsx)(tn,{children:"m/s"})]}),Object(p.jsx)(rn,{windSpeed:t})]}),Object(p.jsxs)(Ue,{children:[Object(p.jsx)(Ye,{temperature:c,rain:r,snow:a}),Object(p.jsxs)(Ze,{children:[Object(p.jsx)(en,{children:j}),+h>0&&Object(p.jsxs)(nn,{children:[".",h]}),Object(p.jsx)(tn,{children:"mm"})]})]})]})},sn=h.c.div(J||(J=Object(j.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n"]))),on=h.c.div(B||(B=Object(j.a)(["\n  display: flex;\n  align-items: flex-end;\n  cursor: pointer;\n"]))),ln=h.c.div(V||(V=Object(j.a)(["\n  font-weight: 500;\n  font-size: 1.125em;\n"]))),dn=Object(h.c)(Ie)(X||(X=Object(j.a)(["\n  width: 1.25em;\n  padding-right: 0.25em;\n"]))),un=function(){var e=m.a.wrappedHook().openModal,n=m.b.wrappedHook().i18nName;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(sn,{children:Object(p.jsxs)(on,{"data-testid":"location-button",onClick:function(){return e("LOCATION_MODAL")},children:[Object(p.jsx)(dn,{}),Object(p.jsx)(ln,{children:n})]})})})},bn=h.c.span(Y||(Y=Object(j.a)([""]))),jn=h.c.span($||($=Object(j.a)([""]))),hn=h.c.span(q||(q=Object(j.a)([""]))),fn=function(e){var n=e.value,t=e.className;return Object(p.jsxs)(hn,{className:t,children:[Object(p.jsx)(bn,{children:Math.round(n)}),Object(p.jsx)(jn,{children:"\xb0C"})]})},On=h.c.span(G||(G=Object(j.a)([""]))),mn=function(e){var n=e.value,t=e.className,r=new Date(1e3*n);return Object(p.jsxs)(On,{className:t,children:[r.getHours(),":",r.getMinutes()]})},pn=t(30),vn=t.n(pn),gn=function(e){var n=e.weatherCode,t=e.className,r=m.c.wrappedHook(),a=r.weatherIconsConfig;if(!r.fetched)return Object(p.jsx)(p.Fragment,{});var c=function(e,n){var t=(new Date).getHours();return t>5&&t<22?e[n][3]:e[n][4]}(a,n);return Object(p.jsx)("i",{className:vn()("wi",c,t)})},xn=function(e){var n=e.weatherInfoArr,t=e.className,r=Object(o.a)(n,1)[0];return Object(p.jsx)(gn,{weatherCode:r.id,className:t})},wn=Object(h.b)(Q||(Q=Object(j.a)(["\n  /* Just handle that for webkits for now */\n  &::-webkit-scrollbar {\n    width: 0;\n    background: transparent;\n  }\n"]))),yn="0.125rem",kn=h.c.div(U||(U=Object(j.a)(["\n  grid-auto-columns: 6rem;\n  display: grid;\n  max-width: 100vw;\n  overflow-x: scroll;\n  box-sizing: border-box;\n  padding-bottom: ",";\n  ","\n"])),yn,wn),Mn=h.c.div(Z||(Z=Object(j.a)(["\n  grid-column: span 1;\n  grid-row: 1;\n  box-shadow: "," "," #ccc;\n"])),yn,yn),zn=h.c.div(ee||(ee=Object(j.a)(["\n  background-color: #ffffff7d;\n  min-height: 18rem; /* temp - remove this */\n"]))),Sn=h.c.div(ne||(ne=Object(j.a)(["\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  padding-left: 1.5rem;\n  font-size: 2.25em;\n  font-weight: 500;\n"]))),Dn=Object(h.c)(kn)(te||(te=Object(j.a)([""]))),Ln=Object(h.c)(Mn)(re||(re=Object(j.a)(["\n  display: grid;\n  grid-template-rows: repeat(3, 2em);\n  grid-row-gap: 0.1em;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin: 0 0.2em;\n  box-shadow: none;\n"]))),Cn=Object(h.c)(xn)(ae||(ae=Object(j.a)(["\n  font-size: 2em;\n  opacity: 1;\n"]))),Nn=Object(h.c)((function(e){var n=e.value,t=e.className,r=new Date(1e3*n).getHours().toString();return Object(p.jsxs)("span",{className:t,children:[r.padStart(2,"0"),":00"]})}))(ce||(ce=Object(j.a)(["\n  font-size: 1.125em;\n  font-weight: 300;\n  width: 100%;\n"]))),_n=Object(h.c)(fn)(ie||(ie=Object(j.a)(["\n  font-weight: 500;\n  font-size: 1.5em; // 24\n  & > span {\n    font-size: 0.75em; // 18\n  }\n"]))),Hn=function(e){return Object(p.jsxs)(Ln,{children:[Object(p.jsx)(Nn,{value:e.dt}),Object(p.jsx)(Cn,{weatherInfoArr:e.weather}),Object(p.jsx)(_n,{value:e.temp})]},e.dt)},Fn=function(e){var n=e.hourForecast,t=Object($e.a)().t,r=d.a.useMemo((function(){return n.filter(Object(w.f)()).filter(Object(w.c)(8)).flatMap(Hn)}),[n]);return Object(p.jsxs)(zn,{children:[Object(p.jsx)(Sn,{children:t("hourly")}),Object(p.jsx)(Dn,{children:r})]})},An=h.c.div(se||(se=Object(j.a)(["\n  width: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),In=Object(h.c)(Ae)(oe||(oe=Object(j.a)(["\n  opacity: 0.8;\n  width: 3em;\n"]))),Rn=function(e){var n=e.nextPageRef,t=d.a.useCallback((function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[n]);return Object(p.jsx)(An,{children:Object(p.jsx)(In,{onClick:t})})},En=h.c.div(le||(le=Object(j.a)(['\n  padding-left: 1.5em;\n  font-family: "Roboto", sans-serif;\n  opacity: 0.8;\n  display: flex;\n']))),Kn=h.c.div(de||(de=Object(j.a)(["\n  margin-left: 1rem;\n"]))),Pn=Object(h.c)(gn)(ue||(ue=Object(j.a)(["\n  font-size: 6em;\n"]))),Wn=Object(h.c)(fn)(be||(be=Object(j.a)(["\n  font-size: 3.5em;\n  font-weight: 500;\n  "," {\n    font-size: 0.75em;\n  }\n"])),jn),Tn=h.c.div(je||(je=Object(j.a)(["\n  font-size: 2em;\n  font-weight: 500;\n\n  &:first-letter {\n    text-transform: capitalize;\n  }\n"]))),Jn=function(e){var n=e.temp,t=e.description,r=e.weatherCode;return Object(p.jsxs)(En,{children:[Object(p.jsx)(Pn,{weatherCode:r}),Object(p.jsxs)(Kn,{children:[Object(p.jsx)(Wn,{value:n}),Object(p.jsx)(Tn,{children:t})]})]})},Bn=function(e){var n=e.currentWeather,t=n.temp,r=n.weather;return Object(p.jsx)(Jn,{temp:t,description:Object(w.h)(r),weatherCode:Object(w.i)(r)})},Vn=h.c.div(he||(he=Object(j.a)(["\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(126, 126, 126, 0.5);\n  backdrop-filter: blur(2px);\n  border-radius: 6px;\n  margin: 1em;\n  padding: 0.2em 1em;\n  max-height: ",";\n  transition: max-height 1s ease-in-out;\n  overflow: hidden;\n"])),(function(e){return e.open?"16rem":"1.6rem"})),Xn=h.c.div(fe||(fe=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),Yn=h.c.div(Oe||(Oe=Object(j.a)(["\n  color: rgba(244, 67, 43, 0.8);\n  display: flex;\n  align-items: center;\n"]))),$n=h.c.div(me||(me=Object(j.a)(["\n  opacity: 0.8;\n  margin: 1em 0.5rem;\n  text-align: justify;\n"]))),qn=Object(h.c)(Ae)(pe||(pe=Object(j.a)(["\n  width: 1.4em;\n  filter: ",";\n  transform: ",";\n"])),L("#3c3c3cfc"),(function(e){return e.open?"rotate(180deg)":"rotate(0deg)"})),Gn=Object(h.c)(We)(ve||(ve=Object(j.a)(["\n  filter: ",";\n  margin-right: 1em;\n  width: 1.4em;\n"])),L("#f4432bcc")),Qn=function(e){var n=e.header,t=e.description,r=e.setAlertOpen,a=e.alertOpen;return Object(p.jsxs)(Vn,{open:a,children:[Object(p.jsxs)(Xn,{children:[Object(p.jsxs)(Yn,{children:[Object(p.jsx)(Gn,{}),n]}),Object(p.jsx)(qn,{open:a,onClick:function(){return r((function(e){return!e}))}})]}),Object(p.jsx)($n,{children:t})]})},Un=h.c.div(ge||(ge=Object(j.a)(["\n  flex: 1;\n"]))),Zn=function(e){var n=e.alert,t=e.children,r=Object(l.useState)(!1),a=Object(o.a)(r,2),c=a[0],i=a[1];return Object(p.jsxs)(Un,{children:[n&&Object(p.jsx)(Qn,{header:n.tags[0],description:n.description,setAlertOpen:i,alertOpen:c}),c?null:t]})},et=t(11),nt=t.n(et),tt=document.getElementById("modal_root");if(!tt)throw console.error("Modal root is missing"),"Modal root is missing";var rt,at,ct,it,st,ot,lt,dt,ut,bt,jt,ht,ft,Ot,mt,pt,vt,gt,xt,wt,yt,kt,Mt,zt,St,Dt,Lt,Ct,Nt,_t,Ht,Ft,At,It,Rt,Et=tt||document.createElement("div"),Kt=function(e){var n=e.modalName,t=e.children,r=m.a.wrappedHook()._actualOpenModalName,a=d.a.useMemo((function(){return document.createElement("div")}),[]),c=function(){Et.contains(a)&&(console.log("Remove ".concat(n)),Et.removeChild(a))};return d.a.useLayoutEffect((function(){return r===n?(console.log("Push ".concat(n)),Et.appendChild(a)):c(),function(){c()}}),[r]),nt.a.createPortal(t,a,n)},Pt=function(e,n,t){return{name:e,lat:n,lon:t}},Wt=[Pt("Szczecin","53.428543","14.552812"),Pt("Szyd\u0142owo","53.1620341","16.5942987"),Pt("Warsaw","52.237049","21.017532"),Pt("Berlin","52.520008","13.404954"),Pt("London","51.507351","-0.127758"),Pt("Tokyo (\u6771\u4eac\u90fd)","35.4929552","137.5268034"),Pt("Hong Kong (\u9999\u6e2f)","22.3531282","113.847517")],Tt=h.c.div(rt||(rt=Object(j.a)(["\n  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.25));\n  background: rgba(243, 243, 243, 0.9);\n  backdrop-filter: blur(4px);\n  border-radius: 10px;\n  padding: 0.5rem;\n  height: 85%;\n  box-sizing: border-box;\n  margin: 0 1rem;\n  position: relative;\n"]))),Jt=h.c.div(at||(at=Object(j.a)(["\n  text-transform: capitalize;\n  opacity: 0.8;\n  font-weight: 500;\n  font-size: ",";\n"])),Object(w.d)("fontSize","1.4rem")),Bt=h.c.div(ct||(ct=Object(j.a)(["\n  font-size: 3.2rem;\n  font-weight: 500;\n  opacity: 0.8;\n  margin-left: 0.5rem;\n  "," {\n    font-size: 1.4em;\n  }\n"])),bn),Vt=h.c.span(it||(it=Object(j.a)(["\n  position: absolute;\n  right: 4rem;\n  bottom: 2rem;\n"]))),Xt=Object(h.c)(xn)(st||(st=Object(j.a)(["\n  font-size: 5em;\n  color: #bdbdbd;\n"]))),Yt=Object(h.c)(Re)(ot||(ot=Object(j.a)(["\n  filter: ",";\n  width: 2em;\n  height: 2em;\n"])),L("#00000080")),$t=h.c.div(lt||(lt=Object(j.a)(["\n  --border-radius: 10px;\n  background: rgba(196, 196, 196, 0.5);\n  border-radius: var(--border-radius) 0;\n  position: absolute;\n  cursor: pointer;\n  padding: 0.6em;\n  bottom: 0;\n  right: 0;\n"]))),qt=function(e){var n=e.forecast,t=e.setSelectedDay;return Object(p.jsxs)(Tt,{children:[Object(p.jsx)(Jt,{children:b()(1e3*n.dt).format("dddd, DD.M")}),Object(p.jsx)(Bt,{children:Object(p.jsx)(fn,{value:n.temp.day})}),Object(p.jsx)(Vt,{children:Object(p.jsx)(Xt,{weatherInfoArr:n.weather})}),Object(p.jsx)($t,{"data-testid":"open-details-button-"+n.dt,onClick:function(){return t(n)},children:Object(p.jsx)(Yt,{})})]})},Gt=h.c.div(dt||(dt=Object(j.a)(["\n  height: 8.125rem;\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),Qt=Object(h.c)($t)(ut||(ut=Object(j.a)(["\n  position: relative;\n  height: 3em;\n  width: 3em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0 var(--border-radius) var(--border-radius) 0;\n"]))),Ut=Object(h.c)(Jt)(bt||(bt=Object(j.a)(["\n  margin-left: 0.5rem;\n"]))),Zt=function(e){var n=e.title,t=m.a.wrappedHook().closeModals;return Object(p.jsxs)(Gt,{children:[Object(p.jsx)(Qt,{onClick:t,children:Object(p.jsx)(Yt,{})}),Object(p.jsx)(Ut,{fontSize:"1.8rem",children:n})]})},er=h.c.div(jt||(jt=Object(j.a)(["\n  margin-bottom: 1rem;\n"]))),nr=h.c.div(ht||(ht=Object(j.a)(["\n  font-weight: bold;\n  font-size: 1.2em;\n  margin-bottom: 1rem;\n"]))),tr=h.c.div(ft||(ft=Object(j.a)(["\n  display: flex;\n"]))),rr=h.c.div(Ot||(Ot=Object(j.a)(["\n  flex: 1;\n  padding: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n"]))),ar=Object(h.c)(Ie)(mt||(mt=Object(j.a)(["\n  width: 1.25em;\n  padding-right: 0.25em;\n"]))),cr=function(e){var n=e.location;return n?Object(p.jsxs)(rr,{children:[Object(p.jsx)(ar,{}),Object(p.jsx)("span",{children:n.name})]}):Object(p.jsx)(rr,{})},ir=function(e){var n=e.locations,t=Object(o.a)(n,4),r=t[0],a=t[1],c=t[2],i=t[3],s=Object($e.a)().t;return Object(p.jsxs)(er,{children:[Object(p.jsx)(nr,{children:s("lastLocations")}),Object(p.jsxs)(tr,{children:[Object(p.jsx)(cr,{location:r}),Object(p.jsx)(cr,{location:a})]}),Object(p.jsxs)(tr,{children:[Object(p.jsx)(cr,{location:c}),Object(p.jsx)(cr,{location:i})]})]})},sr="LAST_LOCATIONS",or=h.c.div(pt||(pt=Object(j.a)([""]))),lr=h.c.div(vt||(vt=Object(j.a)(["\n  padding: 1rem;\n"]))),dr=Object(h.c)(Ie)(gt||(gt=Object(j.a)(["\n  width: 1.25em;\n  padding-right: 0.25em;\n"]))),ur=h.c.input(xt||(xt=Object(j.a)(["\n  width: 100%;\n  margin-top: 2rem;\n  padding: 0.5rem 0.75rem 0.5rem 0.75rem;\n  border: 1px solid black;\n  border-radius: 0.25rem;\n  font-size: 1rem;\n  box-sizing: border-box;\n"]))),br=h.c.div(wt||(wt=Object(j.a)(["\n  padding: 1rem 0.75rem;\n  border: 1px solid black;\n  border-radius: 0.25rem;\n  margin-top: 0.5rem;\n"]))),jr=h.c.div(yt||(yt=Object(j.a)(["\n  padding: 0.25rem 0.25rem;\n  cursor: pointer;\n  font-size: 1rem;\n  display: flex;\n"]))),hr=function(e){var n=e.setLocation;return function(e){return Object(p.jsxs)(jr,{onClick:function(){return n(e)},children:[Object(p.jsx)(dr,{}),e.name]},"".concat(e.lat,"/").concat(e.lon))}},fr=function(){var e=d.a.useState(""),n=Object(o.a)(e,2),t=n[0],r=n[1],a=m.b.wrappedHook(),c=a.setTargetLocation,i=a.i18nName,s=m.a.wrappedHook().closeModals,l=function(){var e=d.a.useState([]),n=Object(o.a)(e,2),t=n[0],r=n[1];d.a.useEffect((function(){var e=JSON.parse(localStorage.getItem(sr)||"[]");r(e)}),[]);var a=d.a.useCallback((function(e){!function(e,n){var t=e.findIndex((function(e){return e.name===n.name}));t>=0?e.splice(t,1):e.length>=4&&e.pop(),e.unshift(n)}(t,e),r(Object(k.a)(t)),localStorage.setItem(sr,JSON.stringify(t))}),[t,r]);return[t,a]}(),u=Object(o.a)(l,2),b=u[0],j=u[1],h=Object($e.a)().t,f=Wt.filter(Object(w.c)(6)).filter((function(e){return e.name!==i})).filter((function(e){return e.name.includes(t)})),O=d.a.useCallback((function(e){c(e.name,e.lat,e.lon),j(e),s()}),[c,j,s]);return Object(p.jsxs)(or,{children:[Object(p.jsx)(Zt,{title:h("location")}),Object(p.jsxs)(lr,{children:[Object(p.jsx)(ir,{locations:b}),Object(p.jsx)(ur,{onChange:function(e){return r(e.target.value)},value:t}),Object(p.jsx)(br,{children:f.length>0?f.map(hr({setLocation:O})):h("noResults")})]})]})},Or=h.c.div(kt||(kt=Object(j.a)(["\n  position: relative;\n  height: 100%;\n  padding-top: 2em;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n"]))),mr=function(e){var n=e.nextPageRef,t=e.currentWeather,r=e.hourForecast,a=e.alert;return Object(p.jsxs)(g,{children:[Object(p.jsxs)(Or,{children:[Object(p.jsx)(un,{}),Object(p.jsx)(Bn,{currentWeather:t}),Object(p.jsx)(Zn,{alert:a,children:Object(p.jsx)(cn,{currentWeather:t})}),Object(p.jsx)(Fn,{hourForecast:r}),Object(p.jsx)(Rn,{nextPageRef:n})]}),Object(p.jsx)(Kt,{modalName:"LOCATION_MODAL",children:Object(p.jsx)(fr,{})})]})},pr=h.c.div(Mt||(Mt=Object(j.a)(["\n  display: flex;\n  margin: 1rem;\n  opacity: 0.8;\n  font-size: 1.5em;\n  align-items: baseline;\n"]))),vr=h.c.div(zt||(zt=Object(j.a)(["\n  flex: 1;\n  height: fit-content;\n"]))),gr=h.c.div(St||(St=Object(j.a)([""]))),xr=function(e){var n=e.label,t=e.children,r=e.className;return Object(p.jsxs)(pr,{className:r,children:[Object(p.jsx)(vr,{children:n}),Object(p.jsx)(gr,{children:t})]})},wr=h.c.div(Dt||(Dt=Object(j.a)(["\n  position: relative;\n  min-height: 5rem;\n\n  ",",\n  "," {\n    font-size: 1.2em;\n  }\n\n  "," {\n    border-bottom: 1px solid rgba(80, 80, 80, 0.2);\n  }\n"])),bn,On,pr),yr=h.c.div(Lt||(Lt=Object(j.a)(["\n  font-size: 0.8em;\n  display: inline;\n  vertical-align: bottom;\n"]))),kr=h.c.span(Ct||(Ct=Object(j.a)(["\n  font-size: 1.2em;\n"]))),Mr=h.c.span(Nt||(Nt=Object(j.a)(["\n  position: relative;\n"]))),zr=Object(h.c)(Te)(_t||(_t=Object(j.a)(["\n  position: absolute;\n  transform: ",";\n  height: 1.5em;\n  right: 0.2em;\n"])),(function(e){var n=e.deg;return"rotate(".concat(n,"deg)")})),Sr=function(e){var n=e.forecast,t=d.a.useMemo((function(){return b()(1e3*n.dt).format("dddd, DD.M")}),[n]),r=n.wind_speed,a=n.wind_deg,c=n.pressure,i=n.pop,s=n.sunrise,o=n.sunset,l=n.temp.day,u=Object($e.a)().t;return Object(p.jsxs)(wr,{children:[Object(p.jsx)(Zt,{title:t}),Object(p.jsx)(xr,{label:u("weather"),children:Object(p.jsx)(yr,{children:Object(w.b)(n)})}),Object(p.jsx)(xr,{label:u("temp"),children:Object(p.jsx)(fn,{value:l})}),Object(p.jsxs)(xr,{label:u("wind"),children:[Object(p.jsx)(Mr,{children:Object(p.jsx)(zr,{deg:a})}),Object(p.jsx)(kr,{children:r}),"m/s"]}),Object(p.jsxs)(xr,{label:u("pressure"),children:[Object(p.jsx)(kr,{children:c}),"hPa"]}),Object(p.jsxs)(xr,{label:u("rain"),children:[Object(p.jsx)(kr,{children:i}),"%"]}),Object(p.jsx)(xr,{label:u("sunrise"),children:Object(p.jsx)(mn,{value:s})}),Object(p.jsx)(xr,{label:u("sunset"),children:Object(p.jsx)(mn,{value:o})})]})},Dr=h.c.div(Ht||(Ht=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),Lr=h.c.div(Ft||(Ft=Object(j.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Cr=function(e){var n=e.daily,t=e.pageRef,r=m.a.wrappedHook().openModal,a=d.a.useState(n[0]),c=Object(o.a)(a,2),i=c[0],s=c[1],l=d.a.useCallback((function(e){r("DAY_MODAL"),s(e)}),[r,s]),u=n.slice(1,6).map((function(e){return Object(p.jsx)(Lr,{children:Object(p.jsx)(qt,{forecast:e,setSelectedDay:l})},e.dt)}));return Object(p.jsxs)(g,{forwardRef:t,children:[Object(p.jsx)(Dr,{children:u}),Object(p.jsx)(Kt,{modalName:"DAY_MODAL",children:Object(p.jsx)(Sr,{forecast:i})})]})},Nr=Object(h.a)(Rt||(Rt=Object(j.a)(["\n  #modal_root {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: -80vw;\n    width: 80vw;\n    background-color: rgba(255, 255, 255, 0.7);\n\n    transition: right 0.2s ease-in-out;\n    ","\n  }\n"])),(function(e){return e.isModalOpen?Object(h.b)(At||(At=Object(j.a)(["\n        right: 0;\n      "]))):Object(h.b)(It||(It=Object(j.a)(["\n        right: -80vw;\n      "])))}));console.log(Nr);var _r=t(33),Hr=t(10),Fr=t(31),Ar=function(e){return _r.a.use(Hr.e).init({resources:{en:{translation:Fr}},lng:e,fallbackLng:e,interpolation:{escapeValue:!1}})};b.a.locale("en"),Ar("en");n.a=function(){var e=m.a.wrappedHook().isModalOpen,n=m.b.wrappedHook(),t=n.fetched,r=n.rawData,a=d.a.useRef(null),c=(null===r||void 0===r?void 0:r.alerts)||[],i=Object(o.a)(c,1)[0];return t?r?Object(p.jsxs)(O,{"data-testid":"app-container",children:[Object(p.jsx)(Nr,{isModalOpen:e}),Object(p.jsx)(mr,{nextPageRef:a,currentWeather:r.current,hourForecast:r.hourly,alert:i}),Object(p.jsx)(Cr,{pageRef:a,daily:r.daily})]}):Object(p.jsx)(O,{children:"No data"}):Object(p.jsx)(O,{children:"Loading..."})}},35:function(e,n,t){"use strict";t.r(n),function(e){var n,r,a,c=t(11),i=t.n(c),s=t(32),o=(t(54),t(6)),l=t(0);(null===(n=e)||void 0===n?void 0:n.hot)&&(null===(r=e)||void 0===r||null===(a=r.hot)||void 0===a||a.accept());i.a.render(Object(l.jsx)(o.d,{children:Object(l.jsx)(s.a,{})}),document.getElementById("root"))}.call(this,t(36)(e))},5:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"f",(function(){return o})),t.d(n,"a",(function(){return l})),t.d(n,"i",(function(){return d})),t.d(n,"h",(function(){return u})),t.d(n,"b",(function(){return b})),t.d(n,"e",(function(){return j})),t.d(n,"g",(function(){return h})),t.d(n,"d",(function(){return f}));var r,a,c=t(1),i=t(2),s=(Object(i.b)(r||(r=Object(c.a)([""]))),i.c.div(a||(a=Object(c.a)([""]))),function(e){return function(n,t){return t<e}}),o=function(){return function(e,n){return 0!==n}},l=function(e){return e[0]},d=function(e){return l(e).id},u=function(e){return l(e).description},b=function(e){return u(e.weather)},j=function(e){var n;return(null===(n=e.rain)||void 0===n?void 0:n["1h"])||0},h=function(e){var n;return(null===(n=e.snow)||void 0===n?void 0:n["1h"])||0},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){return t[e]||n}}},54:function(e,n,t){},6:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return O})),t.d(n,"c",(function(){return m}));var r=t(3),a=t.n(r),c=t(0),i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.a.createContext(n),r=function(n){var r=n.children,a=e();return Object(c.jsx)(t.Provider,{value:a,children:r})},i=function(){return a.a.useContext(t)};return{Context:t,WrappedProvider:r,wrappedHook:i}},s=t(4),o="";var l=t(19),d=t.n(l),u=t(26),b=t.p+"static/media/weather-conditions.66b67224.csv",j=t(5),h=function(){var e=Object(u.a)(d.a.mark((function e(){var n,t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return n=e.sent,e.next=5,n.text();case 5:return t=e.sent,(r=t.split("\n").map((function(e){return e.split(";")}))).shift(),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=i((function(){var e=a.a.useState(o),n=Object(s.a)(e,2),t=n[0],r=n[1],c=a.a.useMemo((function(){return t!==o}),[t]),i=a.a.useCallback((function(e){r(e)}),[r]),l=a.a.useCallback((function(){r(o)}),[r]);return{_actualOpenModalName:t,isModalOpen:c,openModal:i,closeModals:l}})),O=i((function(){var e=a.a.useState("Szczecin"),n=Object(s.a)(e,2),t=n[0],r=n[1],c=a.a.useState("53.4289"),i=Object(s.a)(c,2),o=i[0],l=i[1],d=a.a.useState("14.553"),u=Object(s.a)(d,2),b=u[0],j=u[1],h=function(e){var n=a.a.useMemo((function(){return function(e){var n=e.lat,t=e.lon,r=e.exclude,a=e.units;return"https://api.openweathermap.org/data/2.5/onecall?"+"lat=".concat(n,"&")+"lon=".concat(t,"&")+"exclude=".concat(r.join(","),"&")+"units=".concat(a,"&")+"appid=".concat("035c2a38881a80dff29561d6b59a2bda")}(e)}),[e]),t=a.a.useState(!1),r=Object(s.a)(t,2),c=r[0],i=r[1],o=a.a.useState(null),l=Object(s.a)(o,2),d=l[0],u=l[1];return[d,c,a.a.useCallback((function(){fetch(n).then((function(e){return e.json()})).then((function(e){u(e),i(!0)}))}),[n,i,u])]}({lat:o,lon:b,exclude:["minutely"],units:"metric"}),f=Object(s.a)(h,3),O=f[0],m=f[1],p=f[2];a.a.useEffect((function(){p()}),[p]);return{rawData:O,fetched:m,i18nName:t,setTargetLocation:function(e,n,t){r(e),l(n),j(t)}}})),m=i((function(){var e=a.a.useState({}),n=Object(s.a)(e,2),t=n[0],r=n[1],c=a.a.useState(!1),i=Object(s.a)(c,2),o=i[0],l=i[1];return a.a.useEffect((function(){h().then((function(e){var n=function(e){var n={};return e.forEach((function(e){var t=Object(j.a)(e);n[t]=e})),n}(e);r(n),l(!0)}))}),[]),{weatherIconsConfig:t,fetched:o}})),p=[f,O,m].reduce((function(e,n){var t=n.WrappedProvider;return function(n){var r=n.children;return Object(c.jsx)(e,{children:Object(c.jsx)(t,{children:r})})}}),(function(e){return Object(c.jsx)(c.Fragment,{children:e.children})}));n.d=p}},[[35,1,2]]]);
//# sourceMappingURL=main.bae6b7f9.chunk.js.map