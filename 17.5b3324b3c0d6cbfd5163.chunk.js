webpackJsonp([17],{XJZQ:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=(u("6Xbx"),u("5vUY"),u("ZBFC"),u("UHIZ")),a=u("Cw/V"),r=function(){function l(l,n){this.webservice=l,this.route=n,this.countrycount=0,this.citycount=0,this.topcities=[],this.ips=[],this.ipcount=0,this.Otheros=0,this.windows=0,this.otherbrowser=0,this.crome=0,this.country=[],this.ip=[],this.count=0,this.pieChartLabels=["Windows","other"],this.pieChartData=[300,100],this.pieChartType="pie",this.brandPrimary="#20a8d8",this.brandSuccess="#4dbd74",this.brandInfo="#63c2de",this.brandWarning="#f8cb00",this.brandDanger="#f86c6b",this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:this.brandPrimary,borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:this.brandInfo,borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A"}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={maintainAspectRatio:!1,scales:{xAxes:[{display:!1,barPercentage:.6}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(l){return l.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:this.convertHex(this.brandInfo,10),borderColor:this.brandInfo,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandSuccess,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandDanger,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.socialChartData1=[{data:[65,59,84,84,51,55,40],label:"Facebook"}],this.socialChartData2=[{data:[1,13,9,17,34,41,38],label:"Twitter"}],this.socialChartData3=[{data:[78,81,80,45,34,12,40],label:"LinkedIn"}],this.socialChartData4=[{data:[35,23,56,22,97,23,64],label:"Google+"}],this.socialChartLabels=["January","February","March","April","May","June","July"],this.socialChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.socialChartColours=[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff"}],this.socialChartLegend=!1,this.socialChartType="line",this.sparklineChartData1=[{data:[35,23,56,22,97,23,64],label:"Clients"}],this.sparklineChartData2=[{data:[65,59,84,84,51,55,40],label:"Clients"}],this.sparklineChartLabels=["January","February","March","April","May","June","July"],this.sparklineChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.sparklineChartDefault=[{backgroundColor:"transparent",borderColor:"#d1d4d7"}],this.sparklineChartPrimary=[{backgroundColor:"transparent",borderColor:this.brandPrimary}],this.sparklineChartInfo=[{backgroundColor:"transparent",borderColor:this.brandInfo}],this.sparklineChartDanger=[{backgroundColor:"transparent",borderColor:this.brandDanger}],this.sparklineChartWarning=[{backgroundColor:"transparent",borderColor:this.brandWarning}],this.sparklineChartSuccess=[{backgroundColor:"transparent",borderColor:this.brandSuccess}],this.sparklineChartLegend=!1,this.sparklineChartType="line",this.mainChartElements=27,this.mainChartData1=[],this.mainChartData2=[],this.mainChartData3=[],this.mainChartData=[{data:this.mainChartData1,label:"Current"},{data:this.mainChartData2,label:"Previous"},{data:this.mainChartData3,label:"BEP"}],this.topcities=["Mumbai ","Pune","Bangalore","Hyderabad","Ahmedabad","Chennai","Kolkata","Nagpur","Coimbatore","Thane"]}return l.prototype.chartClicked=function(l){console.log(l)},l.prototype.chartHovered=function(l){console.log(l)},l.prototype.convertHex=function(l,n){return l=l.replace("#",""),"rgba("+parseInt(l.substring(0,2),16)+", "+parseInt(l.substring(2,4),16)+", "+parseInt(l.substring(4,6),16)+", "+n/100+")"},l.prototype.random=function(l,n){return Math.floor(Math.random()*(n-l+1)+l)},l.prototype.ngOnInit=function(){for(var l=this,n=0;n<=this.mainChartElements;n++)this.mainChartData1.push(this.random(50,200)),this.mainChartData2.push(this.random(80,100)),this.mainChartData3.push(65);this.sub=this.route.params.subscribe(function(n){l.id=n.id}),this.getcount(this.id),this.bindqrcode()},l.prototype.bindqrcode=function(){var l=this;this.webservice.getallqrcode().subscribe(function(n){l.qrcode=n;for(var u=0;u<n.length;u++)l.id==n[u]._id&&(l.qrdata=n[u].qrdata)}),this.webservice.getuserdata().subscribe(function(n){for(var u=0;u<n.length;u++)l.id==n[u].userid&&("chrome"==n[u].browser?l.crome++:l.otherbrowser++,"windows"==n[u].os?l.windows++:l.Otheros++,-1==l.ips.indexOf(n[u].ip)&&l.ips.push(n[u].ip),-1==l.country.indexOf(n[u].country)&&(l.country.push(n[u].country),l.countrycount++),[].push(n[u].country));l.pieChartLabels=["Windows","Other"],l.pieChartData=[l.windows,l.Otheros],l.uniquescane=l.ips.length}),this.sortedcountry=this.ips,this.count=[].length},l.prototype.getcount=function(l){var n=this;this.webservice.getusercount(l).subscribe(function(l){n.totalcount=l})},l}(),d={title:"Dashboard"},i=function(){},o=u("5iOo"),s=function(){},c=u("auLa"),h=u("4zAq"),p=u("rxZd"),b=u("poDJ"),C=u("pBJ6"),v=u("2VFp"),m=u("iDwB"),y=u("6ReJ"),g=u("TMwh"),f=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](5,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Another action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](8,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Something else here"])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,null)}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](5,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Another action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](8,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Something else here"])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,null)}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,10,"div",[["class","dropdown-menu dropdown-menu-right"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](2,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](5,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Another action"])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](8,0,null,null,1,"a",[["class","dropdown-item"],["href","#"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Something else here"])),(l()(),e["\u0275ted"](-1,null,["\n            "]))],null,null)}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  statistics\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](3,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](5,0,[["wrapper",1]],null,6,"div",[["class","col-sm-4"],["id","wrapper"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](7,0,null,null,0,"a",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](9,0,null,null,1,"qr-code",[["style","margin-left: 15px;"]],null,null,null,c.b,c.a)),e["\u0275did"](10,573440,[["qrcode",4]],0,o.a,[e.ElementRef],{size:[0,"size"],value:[1,"value"]},null),(l()(),e["\u0275ted"](-1,null,["\n\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](13,0,null,null,15,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](15,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Created date:"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](19,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](23,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["URL:"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](26,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](27,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](35,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](37,0,null,null,27,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](39,0,null,null,7,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](41,0,null,null,4,"a",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Browser:\n      "])),(l()(),e["\u0275eld"](43,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](44,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](48,0,null,null,7,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](50,0,null,null,4,"a",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["OS:\n      "])),(l()(),e["\u0275eld"](52,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](53,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](57,0,null,null,2,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](61,0,null,null,2,"div",[["class","col-sm-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](66,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Scans over time"])),(l()(),e["\u0275ted"](-1,null,["\n\n"])),(l()(),e["\u0275eld"](69,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275ted"](-1,null,["\n"])),(l()(),e["\u0275eld"](72,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\n"])),(l()(),e["\u0275ted"](-1,null,["\n\n\n\n\n"])),(l()(),e["\u0275eld"](75,0,null,null,240,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n\n\n  "])),(l()(),e["\u0275eld"](77,0,null,null,160,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](79,0,null,null,33,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](81,0,null,null,30,"div",[["class","card text-white bg-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](83,0,null,null,21,"div",[["class","card-body pb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](85,16777216,null,null,12,"div",[["class","btn-group float-right"],["dropdown",""]],[[2,"dropup",null],[2,"open",null],[2,"show",null]],null,null,null,null)),e["\u0275prd"](512,null,h.a,h.a,[]),e["\u0275did"](87,212992,null,0,p.a,[e.ElementRef,e.Renderer,e.ViewContainerRef,b.a,C.a,h.a],null,null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](89,0,null,null,4,"button",[["class","btn btn-transparent dropdown-toggle p-0"],["dropdownToggle",""],["type","button"]],[[1,"aria-haspopup",0],[1,"disabled",0],[1,"aria-expanded",0]],[[null,"click"],["document","click"],[null,"keyup.esc"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,90).onClick()&&t),"document:click"===n&&(t=!1!==e["\u0275nov"](l,90).onDocumentClick(u)&&t),"keyup.esc"===n&&(t=!1!==e["\u0275nov"](l,90).onEsc()&&t),t},null,null)),e["\u0275did"](90,147456,null,0,v.a,[h.a,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](92,0,null,null,0,"i",[["class","icon-settings"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](96,16384,null,0,m.a,[h.a,e.ViewContainerRef,e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](99,0,null,null,1,"h4",[["class","mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](100,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](102,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Scans"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](106,0,null,null,4,"div",[["class","chart-wrapper px-3"],["style","height:70px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](108,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](109,737280,null,0,y.BaseChartDirective,[e.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](115,0,null,null,35,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](117,0,null,null,32,"div",[["class","card text-white bg-info"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](119,0,null,null,23,"div",[["class","card-body pb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](121,0,null,null,3,"button",[["class","btn btn-transparent p-0 float-right"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](123,0,null,null,0,"i",[["class","icon-location-pin"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](128,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["OS"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](131,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Windows:\n            "])),(l()(),e["\u0275eld"](133,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](134,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](137,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Other:\n            "])),(l()(),e["\u0275eld"](139,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](140,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](144,0,null,null,4,"div",[["class","chart-wrapper px-3"],["style","height:70px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](146,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](147,737280,null,0,y.BaseChartDirective,[e.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](153,0,null,null,45,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](155,0,null,null,42,"div",[["class","card text-white bg-warning"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](157,0,null,null,33,"div",[["class","card-body pb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](159,16777216,null,null,12,"div",[["class","btn-group float-right"],["dropdown",""]],[[2,"dropup",null],[2,"open",null],[2,"show",null]],null,null,null,null)),e["\u0275prd"](512,null,h.a,h.a,[]),e["\u0275did"](161,212992,null,0,p.a,[e.ElementRef,e.Renderer,e.ViewContainerRef,b.a,C.a,h.a],null,null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](163,0,null,null,4,"button",[["class","btn btn-transparent dropdown-toggle p-0"],["dropdownToggle",""],["type","button"]],[[1,"aria-haspopup",0],[1,"disabled",0],[1,"aria-expanded",0]],[[null,"click"],["document","click"],[null,"keyup.esc"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,164).onClick()&&t),"document:click"===n&&(t=!1!==e["\u0275nov"](l,164).onDocumentClick(u)&&t),"keyup.esc"===n&&(t=!1!==e["\u0275nov"](l,164).onEsc()&&t),t},null,null)),e["\u0275did"](164,147456,null,0,v.a,[h.a,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](166,0,null,null,0,"i",[["class","icon-settings"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](170,16384,null,0,m.a,[h.a,e.ViewContainerRef,e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](173,0,null,null,1,"h4",[["class","mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](176,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Browsers"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](179,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Crome:\n            "])),(l()(),e["\u0275eld"](181,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](182,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](185,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Other:\n            "])),(l()(),e["\u0275eld"](187,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](188,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](192,0,null,null,4,"div",[["class","chart-wrapper"],["style","height:70px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](194,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](195,737280,null,0,y.BaseChartDirective,[e.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](201,0,null,null,34,"div",[["class","col-sm-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](203,0,null,null,31,"div",[["class","card text-white bg-danger"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](205,0,null,null,22,"div",[["class","card-body pb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](207,16777216,null,null,12,"div",[["class","btn-group float-right"],["dropdown",""]],[[2,"dropup",null],[2,"open",null],[2,"show",null]],null,null,null,null)),e["\u0275prd"](512,null,h.a,h.a,[]),e["\u0275did"](209,212992,null,0,p.a,[e.ElementRef,e.Renderer,e.ViewContainerRef,b.a,C.a,h.a],null,null),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](211,0,null,null,4,"button",[["class","btn btn-transparent dropdown-toggle p-0"],["dropdownToggle",""],["type","button"]],[[1,"aria-haspopup",0],[1,"disabled",0],[1,"aria-expanded",0]],[[null,"click"],["document","click"],[null,"keyup.esc"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e["\u0275nov"](l,212).onClick()&&t),"document:click"===n&&(t=!1!==e["\u0275nov"](l,212).onDocumentClick(u)&&t),"keyup.esc"===n&&(t=!1!==e["\u0275nov"](l,212).onEsc()&&t),t},null,null)),e["\u0275did"](212,147456,null,0,v.a,[h.a,e.ElementRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](214,0,null,null,0,"i",[["class","icon-settings"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275and"](16777216,null,null,1,null,D)),e["\u0275did"](218,16384,null,0,m.a,[h.a,e.ViewContainerRef,e.TemplateRef],null,null),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](221,0,null,null,1,"h4",[["class","mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Unique"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](225,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](226,null,["",""])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](229,0,null,null,4,"div",[["class","chart-wrapper px-3"],["style","height:70px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](231,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](232,737280,null,0,y.BaseChartDirective,[e.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275eld"](240,0,null,null,74,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](242,0,null,null,51,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](244,0,null,null,41,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](246,0,null,null,7,"div",[["class","col-sm-5"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](248,0,null,null,1,"h4",[["class","card-title mb-0"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Traffic"])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](251,0,null,null,1,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["November 2015"])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](256,0,null,null,27,"div",[["class","col-sm-7 d-none d-md-block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](258,0,null,null,3,"button",[["class","btn btn-primary float-right"],["type","button"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](260,0,null,null,0,"i",[["class","icon-cloud-download"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275eld"](263,0,null,null,19,"div",[["aria-label","Toolbar with button groups"],["class","btn-toolbar float-right"],["role","toolbar"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275eld"](265,0,null,null,16,"div",[["aria-label","First group"],["class","btn-group mr-3"],["data-toggle","buttons"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](267,0,null,null,3,"label",[["class","btn btn-outline-secondary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](269,0,null,null,0,"input",[["id","option1"],["name","options"],["type","radio"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Day\n              "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](272,0,null,null,3,"label",[["class","btn btn-outline-secondary active"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](274,0,null,null,0,"input",[["checked",""],["id","option2"],["name","options"],["type","radio"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Month\n              "])),(l()(),e["\u0275ted"](-1,null,["\n              "])),(l()(),e["\u0275eld"](277,0,null,null,3,"label",[["class","btn btn-outline-secondary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n                "])),(l()(),e["\u0275eld"](279,0,null,null,0,"input",[["id","option3"],["name","options"],["type","radio"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Year\n              "])),(l()(),e["\u0275ted"](-1,null,["\n            "])),(l()(),e["\u0275ted"](-1,null,["\n          "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](288,0,null,null,4,"div",[["class","chart-wrapper"],["style","height:300px;margin-top:40px;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](290,0,null,null,1,"canvas",[["baseChart",""],["class","chart"]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](291,737280,null,0,y.BaseChartDirective,[e.ElementRef],{datasets:[0,"datasets"],labels:[1,"labels"],options:[2,"options"],chartType:[3,"chartType"],colors:[4,"colors"],legend:[5,"legend"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](296,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["piechart"])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275eld"](299,0,null,null,4,"div",[["style","display: block"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](301,0,null,null,1,"canvas",[["baseChart",""]],null,[[null,"chartHover"],[null,"chartClick"]],function(l,n,u){var e=!0,t=l.component;return"chartHover"===n&&(e=!1!==t.chartHovered(u)&&e),"chartClick"===n&&(e=!1!==t.chartClicked(u)&&e),e},null,null)),e["\u0275did"](302,737280,null,0,y.BaseChartDirective,[e.ElementRef],{data:[0,"data"],labels:[1,"labels"],chartType:[2,"chartType"]},{chartClick:"chartClick",chartHover:"chartHover"}),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n\n    "])),(l()(),e["\u0275eld"](306,0,null,null,7,"div",[["class","card-actions"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275eld"](308,0,null,null,4,"a",[["href","http://www.chartjs.org"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["\n        "])),(l()(),e["\u0275eld"](310,0,null,null,1,"small",[["class","text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["docs"])),(l()(),e["\u0275ted"](-1,null,["\n      "])),(l()(),e["\u0275ted"](-1,null,["\n    "])),(l()(),e["\u0275ted"](-1,null,["\n  "])),(l()(),e["\u0275ted"](-1,null,["\n\n"]))],function(l,n){var u=n.component;l(n,10,0,110,u.qrdata),l(n,87,0),l(n,109,0,u.lineChart1Data,u.lineChart1Labels,u.lineChart1Options,u.lineChart1Type,u.lineChart1Colours,u.lineChart1Legend),l(n,147,0,u.lineChart2Data,u.lineChart2Labels,u.lineChart2Options,u.lineChart2Type,u.lineChart2Colours,u.lineChart2Legend),l(n,161,0),l(n,195,0,u.lineChart3Data,u.lineChart3Labels,u.lineChart3Options,u.lineChart3Type,u.lineChart3Colours,u.lineChart3Legend),l(n,209,0),l(n,232,0,u.barChart1Data,u.barChart1Labels,u.barChart1Options,u.barChart1Type,u.barChart1Colours,u.barChart1Legend),l(n,291,0,u.mainChartData,u.mainChartLabels,u.mainChartOptions,u.mainChartType,u.mainChartColours,u.mainChartLegend),l(n,302,0,u.pieChartData,u.pieChartLabels,u.pieChartType)},function(l,n){var u=n.component;l(n,19,0,u.generateddate),l(n,27,0,u.qrdata),l(n,44,0,u.browsername),l(n,53,0,u.os),l(n,85,0,e["\u0275nov"](n,87).dropup,e["\u0275nov"](n,87).isOpen,e["\u0275nov"](n,87).isOpen&&e["\u0275nov"](n,87).isBs4),l(n,89,0,!0,e["\u0275nov"](n,90).isDisabled,e["\u0275nov"](n,90).isOpen),l(n,100,0,u.totalcount),l(n,134,0,u.windows),l(n,140,0,u.Otheros),l(n,159,0,e["\u0275nov"](n,161).dropup,e["\u0275nov"](n,161).isOpen,e["\u0275nov"](n,161).isOpen&&e["\u0275nov"](n,161).isBs4),l(n,163,0,!0,e["\u0275nov"](n,164).isDisabled,e["\u0275nov"](n,164).isOpen),l(n,182,0,u.crome),l(n,188,0,u.otherbrowser),l(n,207,0,e["\u0275nov"](n,209).dropup,e["\u0275nov"](n,209).isOpen,e["\u0275nov"](n,209).isOpen&&e["\u0275nov"](n,209).isBs4),l(n,211,0,!0,e["\u0275nov"](n,212).isDisabled,e["\u0275nov"](n,212).isOpen),l(n,226,0,u.uniquescane)})}var R=e["\u0275ccf"]("ng-component",r,function(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"ng-component",[],null,null,null,x,f)),e["\u0275prd"](512,null,a.a,a.a,[g.e,t.l]),e["\u0275did"](2,114688,null,0,r,[a.a,t.a],null,null)],function(l,n){l(n,2,0)},null)},{},{},[]),T=u("e7TK"),A=u("bIam");u.d(n,"DashboardModuleNgFactory",function(){return H});var H=e["\u0275cmf"](s,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[R,T.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](512,t.o,t.o,[[2,t.t],[2,t.l]]),e["\u0275mpd"](512,i,i,[]),e["\u0275mpd"](512,y.ChartsModule,y.ChartsModule,[]),e["\u0275mpd"](512,o.b,o.b,[]),e["\u0275mpd"](512,A.a,A.a,[]),e["\u0275mpd"](512,s,s,[]),e["\u0275mpd"](1024,t.j,function(){return[[{path:"",component:r,data:d}]]},[])])})}});