webpackJsonp([11],{o2c2:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),e=(u("6Xbx"),u("ZBFC"),u("WYiA"),u("lTiK"),u("Cw/V")),i=u("5iOo"),d=function(){function l(l){this.webservice=l,this.items=[],this.id="",this.efirstname="",this.efamilyname="",this.ejobtitle="",this.ecompany="",this.ephonedirect="",this.ephonework="",this.ephonehome="",this.efax="",this.eemail="",this.econtacturl="",this.estreet="",this.ecity="",this.ezip="",this.estate="",this.ecountry="",this.efacebook="",this.etwitter="",this.epinterest="",this.elinkedin="",this.editcontactsection=!0,this.userid="",this.eurl="",this.qrtype="url",this.qrdata=""}return l.prototype.ngOnInit=function(){this.initializecontactvariable(),this.bindqrcode()},l.prototype.initializecontactvariable=function(){this.efirstname="",this.efamilyname="",this.ejobtitle="",this.ecompany="",this.ephonedirect="",this.ephonework="",this.ephonehome="",this.efax="",this.eemail="",this.econtacturl="",this.estreet="",this.ecity="",this.ezip="",this.estate="",this.ecountry="",this.efacebook="",this.etwitter="",this.epinterest="",this.elinkedin=""},l.prototype.bindqrcode=function(){var l=this;this.webservice.getallqrcode().subscribe(function(n){l.dynamicjsondata(n)})},l.prototype.dynamicjsondata=function(l){this.items=[];for(var n="",u="",t=l.length-1;t>=0;t--){var e="";if("contact"==l[t].qrtype){var i=l[t].qrdata,d=Object.keys(i).map(function(l){return i[l]}).map(function(l){return l.substr(0,l.length-4)});d.join(","),console.log(d),n=d[0]+" "+d[1],u="",e="http://sveltozsolution.github.io/QR-Code/dynamicdata/"+l[t]._id}else"url"==l[t].qrtype?(e="http://sveltozsolution.github.io/QR-Code/dynamicdata/"+l[t]._id,u=l[t].qrdata):(e=l[t].qrdata,u="");this.items.push({id:l[t]._id,name:n,urldata:u,generateddate:l[t].generateddate,qrtype:l[t].qrtype,path:e})}},l.prototype.Editurl=function(l){var n=this;this.eurl=" ",this.urlid=l,this.webservice.getqrcode(this.urlid).subscribe(function(l){n.qrtype="url",n.eurl=l.qrdata,console.log(n.qrdata)})},l.prototype.updateurl=function(){var l=(new Date).toLocaleDateString();this.webservice.Updateqrcode(this.urlid,l,this.userid,"url",this.eurl),window.location.reload()},l.prototype.DownloadQRCode=function(l){var n=this.qrcode_ana.elementRef.nativeElement.innerHTML,u=n.substr(0,n.length-2).split("base64,")[1],t=document.createElement("a");t.href="data:application/octet-stream;base64,"+u,t.download="qrcode.png",t.click()},l}(),o=u("UHIZ"),a={title:"Myqrcode"},c=function(){},r=u("0nO6"),s=u("Un6q"),p=u("TMwh"),m=function(){},h=u("auLa"),v=u("V5VU"),f=u("poDJ"),y=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function b(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-primary"],["data-toggle","modal"],["style","margin-left:5px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.Editcontact(l.parent.context.$implicit.id)&&t),"click"===n&&(t=!1!==e.contactModal.show()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Edit"]))],null,null)}function g(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"button",[["class","btn btn-primary"],["data-toggle","modal"],["style","margin-left:5px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.Editurl(l.parent.context.$implicit.id)&&e),"click"===n&&(e=!1!==t["\u0275nov"](l.parent.parent,27).show()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["Edit"]))],null,null)}function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,67,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](2,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](4,0,null,null,60,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](6,0,null,null,55,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](8,0,[["wrapper",1]],null,18,"div",[["class","col-sm-4"],["id","wrapper"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](10,0,null,null,1,"qr-code",[["style","margin-left: 15px;"]],null,null,null,h.b,h.a)),t["\u0275did"](11,573440,[[1,4],["qrcode",4]],0,i.a,[t.ElementRef],{size:[0,"size"],value:[1,"value"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](15,0,null,null,4,"button",[["class","btn btn-sm btn-primary"],["style","margin-left: 18px;width: 74px;height: 21px;"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.DownloadQRCode(l.context.$implicit.id)&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](17,0,null,null,1,"p",[["style","margin-top:-5px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Download"])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n          \n          "])),(l()(),t["\u0275eld"](22,0,null,null,3,"a",[["class","nav-link"],["style","margin-top:-5px;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,23).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t["\u0275did"](23,671744,null,0,o.n,[o.l,o.a,s.h],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](24,2),(l()(),t["\u0275ted"](-1,null,["Analytics"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](28,0,null,null,32,"div",[["class","col-sm-8 Download"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](30,0,null,null,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](32,0,null,null,5,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](34,0,null,null,2,"label",[],null,null,null,null,null)),(l()(),t["\u0275ted"](35,null,["",""])),t["\u0275ppd"](36,1),(l()(),t["\u0275ted"](-1,null,["\n              \n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](39,0,null,null,7,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](41,0,null,null,4,"p",[["style","font-size: 25px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](42,null,["","\n                "])),(l()(),t["\u0275and"](16777216,null,null,1,null,b)),t["\u0275did"](44,16384,null,0,s.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275eld"](48,0,null,null,10,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),t["\u0275ted"](49,null,["QRType: "," \n              "])),(l()(),t["\u0275eld"](50,0,null,null,1,"p",[["style","color: rgb(78, 70, 72);"]],null,null,null,null,null)),(l()(),t["\u0275ted"](51,null,["",""])),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275eld"](53,0,null,null,4,"p",[["style","color: green;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](54,null,["","\n                "])),(l()(),t["\u0275and"](16777216,null,null,1,null,g)),t["\u0275did"](56,16384,null,0,s.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275ted"](-1,null,["\n              "])),(l()(),t["\u0275ted"](-1,null,["\n            "])),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](63,0,null,null,0,"hr",[["style","border:1px solid black;margin-top:4px;width:94%;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](66,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "]))],function(l,n){l(n,11,0,110,n.context.$implicit.path+n.context.$implicit.qrtype),l(n,23,0,l(n,24,0,"/dashboard",n.context.$implicit.id)),l(n,44,0,"contact"==n.context.$implicit.qrtype),l(n,56,0,"url"==n.context.$implicit.qrtype)},function(l,n){l(n,22,0,t["\u0275nov"](n,23).target,t["\u0275nov"](n,23).href),l(n,35,0,t["\u0275unv"](n,35,0,l(n,36,0,t["\u0275nov"](n.parent,0),n.context.$implicit.generateddate))),l(n,42,0,n.context.$implicit.name),l(n,49,0,n.context.$implicit.qrtype),l(n,51,0,n.context.$implicit.urldata),l(n,54,0,n.context.$implicit.path)})}function w(l){return t["\u0275vid"](0,[t["\u0275pid"](0,s.d,[t.LOCALE_ID]),t["\u0275qud"](671088640,1,{qrcode_ana:0}),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](4,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](6,0,null,null,11,"div",[["class","row"],["style","margin-top:10px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](8,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](10,0,null,null,4,"div",[["class","col-sm-6"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n\n      "])),(l()(),t["\u0275eld"](12,0,null,null,1,"h3",[["style","background-color: #3c1e1ec2;color:white;padding-left:18px;"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["My Dynamic Codes\n      "])),(l()(),t["\u0275ted"](-1,null,["\n\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](16,0,null,null,0,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](22,802816,null,0,s.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n\n"])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275eld"](26,16777216,null,null,44,"div",[["aria-hidden","true"],["aria-labelledby","myModalLabel"],["bsModal",""],["class","modal fade"],["role","dialog"],["tabindex","-1"]],null,[[null,"click"],[null,"keydown.esc"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,27).onClick(u)&&e),"keydown.esc"===n&&(e=!1!==t["\u0275nov"](l,27).onEsc()&&e),e},null,null)),t["\u0275did"](27,4341760,[["urlModal",4]],0,v.a,[t.ElementRef,t.ViewContainerRef,t.Renderer,f.a],null,null),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](29,0,null,null,39,"div",[["class","modal-dialog modal-primary"],["role","document"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](31,0,null,null,35,"div",[["class","modal-content"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](33,0,null,null,10,"div",[["class","modal-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](35,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Modal title"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](38,0,null,null,4,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,27).hide()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](40,0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\xd7"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](45,0,null,null,11,"div",[["class","modal-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](47,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](49,0,null,null,5,"input",[["class","form-control"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,i=l.component;return"input"===n&&(e=!1!==t["\u0275nov"](l,50)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t["\u0275nov"](l,50).onTouched()&&e),"compositionstart"===n&&(e=!1!==t["\u0275nov"](l,50)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t["\u0275nov"](l,50)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(i.eurl=u)&&e),e},null,null)),t["\u0275did"](50,16384,null,0,r.b,[t.Renderer2,t.ElementRef,[2,r.a]],null,null),t["\u0275prd"](1024,null,r.f,function(l){return[l]},[r.b]),t["\u0275did"](52,671744,null,0,r.i,[[8,null],[8,null],[8,null],[2,r.f]],{model:[0,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.g,null,[r.i]),t["\u0275did"](54,16384,null,0,r.h,[r.g],null,null),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](58,0,null,null,7,"div",[["class","modal-footer"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](60,0,null,null,1,"button",[["class","btn btn-secondary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t["\u0275nov"](l,27).hide()&&e),e},null,null)),(l()(),t["\u0275ted"](-1,null,["Close"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275eld"](63,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.updateurl()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["Save changes"])),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var u=n.component;l(n,22,0,u.items),l(n,52,0,u.eurl)},function(l,n){l(n,49,0,t["\u0275nov"](n,54).ngClassUntouched,t["\u0275nov"](n,54).ngClassTouched,t["\u0275nov"](n,54).ngClassPristine,t["\u0275nov"](n,54).ngClassDirty,t["\u0275nov"](n,54).ngClassValid,t["\u0275nov"](n,54).ngClassInvalid,t["\u0275nov"](n,54).ngClassPending)})}var C=t["\u0275ccf"]("ng-component",d,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ng-component",[],null,null,null,w,y)),t["\u0275prd"](512,null,e.a,e.a,[p.e,o.l]),t["\u0275did"](2,114688,null,0,d,[e.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),q=u("e7TK"),x=u("LdGb"),R=u("TRAr"),M=u("BhHz"),j=u("4zAq"),E=u("PK6g"),I=u("bIam"),$=u("EQxj"),D=u("yroR"),L=u("pBJ6");u.d(n,"MyqrcodeModuleNgFactory",function(){return _});var _=t["\u0275cmf"](m,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[C,q.a,x.a,R.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,s.m,s.l,[t.LOCALE_ID,[2,s.q]]),t["\u0275mpd"](4608,r.k,r.k,[]),t["\u0275mpd"](4608,p.c,p.c,[]),t["\u0275mpd"](4608,p.h,p.b,[]),t["\u0275mpd"](5120,p.k,p.l,[]),t["\u0275mpd"](4608,p.j,p.j,[p.c,p.h,p.k]),t["\u0275mpd"](4608,p.g,p.a,[]),t["\u0275mpd"](5120,p.e,p.m,[p.j,p.g]),t["\u0275mpd"](4608,M.a,M.a,[]),t["\u0275mpd"](4608,f.a,f.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,M.a,t.ApplicationRef]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,E.a,E.a,[f.a]),t["\u0275mpd"](512,o.o,o.o,[[2,o.t],[2,o.l]]),t["\u0275mpd"](512,c,c,[]),t["\u0275mpd"](512,I.a,I.a,[]),t["\u0275mpd"](512,$.a,$.a,[]),t["\u0275mpd"](512,s.b,s.b,[]),t["\u0275mpd"](512,D.a,D.a,[]),t["\u0275mpd"](512,r.j,r.j,[]),t["\u0275mpd"](512,r.c,r.c,[]),t["\u0275mpd"](512,p.f,p.f,[]),t["\u0275mpd"](512,i.b,i.b,[]),t["\u0275mpd"](512,m,m,[]),t["\u0275mpd"](1024,o.j,function(){return[[{path:"",component:d,data:a}]]},[]),t["\u0275mpd"](256,L.a,{autoClose:!0},[])])})}});