import{fc as de,fb as fe,ft as he,fs as me,fd as ke,fe as ye,ff as l,fg as at,fh as kt,ix as ge,i as ve,d as pe,fj as Te,fL as xe,iy as be,dv as B,fi as st,iz as we,iA as Bt,iB as zt,iC as _e,iD as De,iE as Ce,iF as Se,iG as Ee,iH as Ie,iI as Me,iJ as Ht,iK as qt,iL as jt,iM as Xt,iN as Gt,iO as Ae,fp as Fe,fn as $e,fu as Le,fB as Oe,h6 as We,iP as Ye}from"./ui-vendor-Bg5EyMZm.js";import{g as te}from"./react-vendor-DbzdS4FP.js";import"./markdown-vendor-DonjKQI4.js";var yt={exports:{}},Re=yt.exports,Ut;function Ve(){return Ut||(Ut=1,(function(t,s){(function(r,e){t.exports=e()})(Re,(function(){var r="day";return function(e,a,k){var T=function(F){return F.add(4-F.isoWeekday(),r)},C=a.prototype;C.isoWeekYear=function(){return T(this).year()},C.isoWeek=function(F){if(!this.$utils().u(F))return this.add(7*(F-this.isoWeek()),r);var E,P,A,Y,z=T(this),R=(E=this.isoWeekYear(),P=this.$u,A=(P?k.utc:k)().year(E).startOf("year"),Y=4-A.isoWeekday(),A.isoWeekday()>4&&(Y+=7),A.add(Y,r));return z.diff(R,"week")+1},C.isoWeekday=function(F){return this.$utils().u(F)?this.day()||7:this.day(this.day()%7?F:F-7)};var O=C.startOf;C.startOf=function(F,E){var P=this.$utils(),A=!!P.u(E)||E;return P.p(F)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):O.bind(this)(F,E)}}}))})(yt)),yt.exports}var Pe=Ve();const Ne=te(Pe);var gt={exports:{}},Be=gt.exports,Kt;function ze(){return Kt||(Kt=1,(function(t,s){(function(r,e){t.exports=e()})(Be,(function(){var r,e,a=1e3,k=6e4,T=36e5,C=864e5,O=31536e6,F=2628e6,E=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,P=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,A={years:O,months:F,days:C,hours:T,minutes:k,seconds:a,milliseconds:1,weeks:6048e5},Y=function(I){return I instanceof Z},z=function(I,p,m){return new Z(I,m,p.$l)},R=function(I){return e.p(I)+"s"},S=function(I){return I<0},q=function(I){return S(I)?Math.ceil(I):Math.floor(I)},tt=function(I){return Math.abs(I)},X=function(I,p){return I?S(I)?{negative:!0,format:""+tt(I)+p}:{negative:!1,format:""+I+p}:{negative:!1,format:""}},Z=(function(){function I(m,M,h){var g=this;if(this.$d={},this.$l=h,m===void 0&&(this.$ms=0,this.parseFromMilliseconds()),M)return z(m*A[R(M)],this);if(typeof m=="number")return this.$ms=m,this.parseFromMilliseconds(),this;if(typeof m=="object")return Object.keys(m).forEach((function(n){g.$d[R(n)]=m[n]})),this.calMilliseconds(),this;if(typeof m=="string"){var v=m.match(E);if(v){var y=v.slice(2).map((function(n){return n!=null?Number(n):0}));return this.$d.years=y[0],this.$d.months=y[1],this.$d.weeks=y[2],this.$d.days=y[3],this.$d.hours=y[4],this.$d.minutes=y[5],this.$d.seconds=y[6],this.calMilliseconds(),this}}return this}var p=I.prototype;return p.calMilliseconds=function(){var m=this;this.$ms=Object.keys(this.$d).reduce((function(M,h){return M+(m.$d[h]||0)*A[h]}),0)},p.parseFromMilliseconds=function(){var m=this.$ms;this.$d.years=q(m/O),m%=O,this.$d.months=q(m/F),m%=F,this.$d.days=q(m/C),m%=C,this.$d.hours=q(m/T),m%=T,this.$d.minutes=q(m/k),m%=k,this.$d.seconds=q(m/a),m%=a,this.$d.milliseconds=m},p.toISOString=function(){var m=X(this.$d.years,"Y"),M=X(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var g=X(h,"D"),v=X(this.$d.hours,"H"),y=X(this.$d.minutes,"M"),n=this.$d.seconds||0;this.$d.milliseconds&&(n+=this.$d.milliseconds/1e3,n=Math.round(1e3*n)/1e3);var d=X(n,"S"),f=m.negative||M.negative||g.negative||v.negative||y.negative||d.negative,u=v.format||y.format||d.format?"T":"",_=(f?"-":"")+"P"+m.format+M.format+g.format+u+v.format+y.format+d.format;return _==="P"||_==="-P"?"P0D":_},p.toJSON=function(){return this.toISOString()},p.format=function(m){var M=m||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return M.replace(P,(function(g,v){return v||String(h[g])}))},p.as=function(m){return this.$ms/A[R(m)]},p.get=function(m){var M=this.$ms,h=R(m);return h==="milliseconds"?M%=1e3:M=h==="weeks"?q(M/A[h]):this.$d[h],M||0},p.add=function(m,M,h){var g;return g=M?m*A[R(M)]:Y(m)?m.$ms:z(m,this).$ms,z(this.$ms+g*(h?-1:1),this)},p.subtract=function(m,M){return this.add(m,M,!0)},p.locale=function(m){var M=this.clone();return M.$l=m,M},p.clone=function(){return z(this.$ms,this)},p.humanize=function(m){return r().add(this.$ms,"ms").locale(this.$l).fromNow(!m)},p.valueOf=function(){return this.asMilliseconds()},p.milliseconds=function(){return this.get("milliseconds")},p.asMilliseconds=function(){return this.as("milliseconds")},p.seconds=function(){return this.get("seconds")},p.asSeconds=function(){return this.as("seconds")},p.minutes=function(){return this.get("minutes")},p.asMinutes=function(){return this.as("minutes")},p.hours=function(){return this.get("hours")},p.asHours=function(){return this.as("hours")},p.days=function(){return this.get("days")},p.asDays=function(){return this.as("days")},p.weeks=function(){return this.get("weeks")},p.asWeeks=function(){return this.as("weeks")},p.months=function(){return this.get("months")},p.asMonths=function(){return this.as("months")},p.years=function(){return this.get("years")},p.asYears=function(){return this.as("years")},I})(),K=function(I,p,m){return I.add(p.years()*m,"y").add(p.months()*m,"M").add(p.days()*m,"d").add(p.hours()*m,"h").add(p.minutes()*m,"m").add(p.seconds()*m,"s").add(p.milliseconds()*m,"ms")};return function(I,p,m){r=m,e=m().$utils(),m.duration=function(g,v){var y=m.locale();return z(g,{$l:y},v)},m.isDuration=Y;var M=p.prototype.add,h=p.prototype.subtract;p.prototype.add=function(g,v){return Y(g)?K(this,g,1):M.bind(this)(g,v)},p.prototype.subtract=function(g,v){return Y(g)?K(this,g,-1):h.bind(this)(g,v)}}}))})(gt)),gt.exports}var He=ze();const qe=te(He);var Ct=(function(){var t=l(function(y,n,d,f){for(d=d||{},f=y.length;f--;d[y[f]]=n);return d},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],r=[1,26],e=[1,27],a=[1,28],k=[1,29],T=[1,30],C=[1,31],O=[1,32],F=[1,33],E=[1,34],P=[1,9],A=[1,10],Y=[1,11],z=[1,12],R=[1,13],S=[1,14],q=[1,15],tt=[1,16],X=[1,19],Z=[1,20],K=[1,21],I=[1,22],p=[1,23],m=[1,25],M=[1,35],h={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(n,d,f,u,_,i,D){var c=i.length-1;switch(_){case 1:return i[c-1];case 2:this.$=[];break;case 3:i[c-1].push(i[c]),this.$=i[c-1];break;case 4:case 5:this.$=i[c];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=i[c].substr(18);break;case 19:u.TopAxis(),this.$=i[c].substr(8);break;case 20:u.setAxisFormat(i[c].substr(11)),this.$=i[c].substr(11);break;case 21:u.setTickInterval(i[c].substr(13)),this.$=i[c].substr(13);break;case 22:u.setExcludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 23:u.setIncludes(i[c].substr(9)),this.$=i[c].substr(9);break;case 24:u.setTodayMarker(i[c].substr(12)),this.$=i[c].substr(12);break;case 27:u.setDiagramTitle(i[c].substr(6)),this.$=i[c].substr(6);break;case 28:this.$=i[c].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=i[c].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(i[c].substr(8)),this.$=i[c].substr(8);break;case 33:u.addTask(i[c-1],i[c]),this.$="task";break;case 34:this.$=i[c-1],u.setClickEvent(i[c-1],i[c],null);break;case 35:this.$=i[c-2],u.setClickEvent(i[c-2],i[c-1],i[c]);break;case 36:this.$=i[c-2],u.setClickEvent(i[c-2],i[c-1],null),u.setLink(i[c-2],i[c]);break;case 37:this.$=i[c-3],u.setClickEvent(i[c-3],i[c-2],i[c-1]),u.setLink(i[c-3],i[c]);break;case 38:this.$=i[c-2],u.setClickEvent(i[c-2],i[c],null),u.setLink(i[c-2],i[c-1]);break;case 39:this.$=i[c-3],u.setClickEvent(i[c-3],i[c-1],i[c]),u.setLink(i[c-3],i[c-2]);break;case 40:this.$=i[c-1],u.setLink(i[c-1],i[c]);break;case 41:case 47:this.$=i[c-1]+" "+i[c];break;case 42:case 43:case 45:this.$=i[c-2]+" "+i[c-1]+" "+i[c];break;case 44:case 46:this.$=i[c-3]+" "+i[c-2]+" "+i[c-1]+" "+i[c];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:r,13:e,14:a,15:k,16:T,17:C,18:O,19:18,20:F,21:E,22:P,23:A,24:Y,25:z,26:R,27:S,28:q,29:tt,30:X,31:Z,33:K,35:I,36:p,37:24,38:m,40:M},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:36,11:17,12:r,13:e,14:a,15:k,16:T,17:C,18:O,19:18,20:F,21:E,22:P,23:A,24:Y,25:z,26:R,27:S,28:q,29:tt,30:X,31:Z,33:K,35:I,36:p,37:24,38:m,40:M},t(s,[2,5]),t(s,[2,6]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),t(s,[2,25]),t(s,[2,26]),t(s,[2,27]),{32:[1,37]},{34:[1,38]},t(s,[2,30]),t(s,[2,31]),t(s,[2,32]),{39:[1,39]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),t(s,[2,15]),t(s,[2,16]),{41:[1,40],43:[1,41]},t(s,[2,4]),t(s,[2,28]),t(s,[2,29]),t(s,[2,33]),t(s,[2,34],{42:[1,42],43:[1,43]}),t(s,[2,40],{41:[1,44]}),t(s,[2,35],{43:[1,45]}),t(s,[2,36]),t(s,[2,38],{42:[1,46]}),t(s,[2,37]),t(s,[2,39])],defaultActions:{},parseError:l(function(n,d){if(d.recoverable)this.trace(n);else{var f=new Error(n);throw f.hash=d,f}},"parseError"),parse:l(function(n){var d=this,f=[0],u=[],_=[null],i=[],D=this.table,c="",N=0,o=0,x=2,b=1,$=i.slice.call(arguments,1),w=Object.create(this.lexer),W={yy:{}};for(var L in this.yy)Object.prototype.hasOwnProperty.call(this.yy,L)&&(W.yy[L]=this.yy[L]);w.setInput(n,W.yy),W.yy.lexer=w,W.yy.parser=this,typeof w.yylloc>"u"&&(w.yylloc={});var dt=w.yylloc;i.push(dt);var bt=w.options&&w.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ue(j){f.length=f.length-2*j,_.length=_.length-j,i.length=i.length-j}l(ue,"popStack");function Pt(){var j;return j=u.pop()||w.lex()||b,typeof j!="number"&&(j instanceof Array&&(u=j,j=u.pop()),j=d.symbols_[j]||j),j}l(Pt,"lex");for(var H,et,G,wt,rt={},ht,J,Nt,mt;;){if(et=f[f.length-1],this.defaultActions[et]?G=this.defaultActions[et]:((H===null||typeof H>"u")&&(H=Pt()),G=D[et]&&D[et][H]),typeof G>"u"||!G.length||!G[0]){var _t="";mt=[];for(ht in D[et])this.terminals_[ht]&&ht>x&&mt.push("'"+this.terminals_[ht]+"'");w.showPosition?_t="Parse error on line "+(N+1)+`:
`+w.showPosition()+`
Expecting `+mt.join(", ")+", got '"+(this.terminals_[H]||H)+"'":_t="Parse error on line "+(N+1)+": Unexpected "+(H==b?"end of input":"'"+(this.terminals_[H]||H)+"'"),this.parseError(_t,{text:w.match,token:this.terminals_[H]||H,line:w.yylineno,loc:dt,expected:mt})}if(G[0]instanceof Array&&G.length>1)throw new Error("Parse Error: multiple actions possible at state: "+et+", token: "+H);switch(G[0]){case 1:f.push(H),_.push(w.yytext),i.push(w.yylloc),f.push(G[1]),H=null,o=w.yyleng,c=w.yytext,N=w.yylineno,dt=w.yylloc;break;case 2:if(J=this.productions_[G[1]][1],rt.$=_[_.length-J],rt._$={first_line:i[i.length-(J||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(J||1)].first_column,last_column:i[i.length-1].last_column},bt&&(rt._$.range=[i[i.length-(J||1)].range[0],i[i.length-1].range[1]]),wt=this.performAction.apply(rt,[c,o,N,W.yy,G[1],_,i].concat($)),typeof wt<"u")return wt;J&&(f=f.slice(0,-1*J*2),_=_.slice(0,-1*J),i=i.slice(0,-1*J)),f.push(this.productions_[G[1]][0]),_.push(rt.$),i.push(rt._$),Nt=D[f[f.length-2]][f[f.length-1]],f.push(Nt);break;case 3:return!0}}return!0},"parse")},g=(function(){var y={EOF:1,parseError:l(function(d,f){if(this.yy.parser)this.yy.parser.parseError(d,f);else throw new Error(d)},"parseError"),setInput:l(function(n,d){return this.yy=d||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var d=n.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:l(function(n){var d=n.length,f=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var _=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[_[0],_[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(n){this.unput(this.match.slice(n))},"less"),pastInput:l(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var n=this.pastInput(),d=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:l(function(n,d){var f,u,_;if(this.options.backtrack_lexer&&(_={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(_.yylloc.range=this.yylloc.range.slice(0))),u=n[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],f=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var i in _)this[i]=_[i];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,d,f,u;this._more||(this.yytext="",this.match="");for(var _=this._currentRules(),i=0;i<_.length;i++)if(f=this._input.match(this.rules[_[i]]),f&&(!d||f[0].length>d[0].length)){if(d=f,u=i,this.options.backtrack_lexer){if(n=this.test_match(f,_[i]),n!==!1)return n;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(n=this.test_match(d,_[u]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var d=this.next();return d||this.lex()},"lex"),begin:l(function(d){this.conditionStack.push(d)},"begin"),popState:l(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:l(function(d){this.begin(d)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(d,f,u,_){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y})();h.lexer=g;function v(){this.yy={}}return l(v,"Parser"),v.prototype=h,h.Parser=v,new v})();Ct.parser=Ct;var je=Ct;B.extend(Ne);B.extend(We);B.extend(Ye);var Jt={friday:5,saturday:6},U="",Mt="",At=void 0,Ft="",ct=[],lt=[],$t=new Map,Lt=[],Tt=[],ut="",Ot="",ee=["active","done","crit","milestone","vert"],Wt=[],nt="",ft=!1,Yt=!1,Rt="sunday",xt="saturday",St=0,Xe=l(function(){Lt=[],Tt=[],ut="",Wt=[],vt=0,It=void 0,pt=void 0,V=[],U="",Mt="",Ot="",At=void 0,Ft="",ct=[],lt=[],ft=!1,Yt=!1,St=0,$t=new Map,nt="",Le(),Rt="sunday",xt="saturday"},"clear"),Ge=l(function(t){nt=t},"setDiagramId"),Ue=l(function(t){Mt=t},"setAxisFormat"),Ke=l(function(){return Mt},"getAxisFormat"),Je=l(function(t){At=t},"setTickInterval"),Qe=l(function(){return At},"getTickInterval"),Ze=l(function(t){Ft=t},"setTodayMarker"),ts=l(function(){return Ft},"getTodayMarker"),es=l(function(t){U=t},"setDateFormat"),ss=l(function(){ft=!0},"enableInclusiveEndDates"),is=l(function(){return ft},"endDatesAreInclusive"),rs=l(function(){Yt=!0},"enableTopAxis"),ns=l(function(){return Yt},"topAxisEnabled"),as=l(function(t){Ot=t},"setDisplayMode"),os=l(function(){return Ot},"getDisplayMode"),cs=l(function(){return U},"getDateFormat"),se=l((t,s)=>{const r=s.toLowerCase().split(/[\s,]+/).filter(e=>e!=="");return[...new Set([...t,...r])]},"mergeTokens"),ls=l(function(t){ct=se(ct,t)},"setIncludes"),us=l(function(){return ct},"getIncludes"),ds=l(function(t){lt=se(lt,t)},"setExcludes"),fs=l(function(){return lt},"getExcludes"),hs=l(function(){return $t},"getLinks"),ms=l(function(t){ut=t,Lt.push(t)},"addSection"),ks=l(function(){return Lt},"getSections"),ys=l(function(){let t=Qt();const s=10;let r=0;for(;!t&&r<s;)t=Qt(),r++;return Tt=V,Tt},"getTasks"),ie=l(function(t,s,r,e){const a=t.format(s.trim()),k=t.format("YYYY-MM-DD");return e.includes(a)||e.includes(k)?!1:r.includes("weekends")&&(t.isoWeekday()===Jt[xt]||t.isoWeekday()===Jt[xt]+1)||r.includes(t.format("dddd").toLowerCase())?!0:r.includes(a)||r.includes(k)},"isInvalidDate"),gs=l(function(t){Rt=t},"setWeekday"),vs=l(function(){return Rt},"getWeekday"),ps=l(function(t){xt=t},"setWeekend"),re=l(function(t,s,r,e){if(!r.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=B(t.startTime):a=B(t.startTime,s,!0),a=a.add(1,"d");let k;t.endTime instanceof Date?k=B(t.endTime):k=B(t.endTime,s,!0);const[T,C]=Ts(a,k,s,r,e);t.endTime=T.toDate(),t.renderEndTime=C},"checkTaskDates"),Ts=l(function(t,s,r,e,a){let k=!1,T=null;const C=s.add(1e4,"d");for(;t<=s;){if(k||(T=s.toDate()),k=ie(t,r,e,a),k&&(s=s.add(1,"d"),s>C))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[s,T]},"fixTaskDates"),Et=l(function(t,s,r){if(r=r.trim(),l(C=>{const O=C.trim();return O==="x"||O==="X"},"isTimestampFormat")(s)&&/^\d+$/.test(r))return new Date(Number(r));const k=/^after\s+(?<ids>[\d\w- ]+)/.exec(r);if(k!==null){let C=null;for(const F of k.groups.ids.split(" ")){let E=it(F);E!==void 0&&(!C||E.endTime>C.endTime)&&(C=E)}if(C)return C.endTime;const O=new Date;return O.setHours(0,0,0,0),O}let T=B(r,s.trim(),!0);if(T.isValid())return T.toDate();{st.debug("Invalid date:"+r),st.debug("With date format:"+s.trim());const C=new Date(r);if(C===void 0||isNaN(C.getTime())||C.getFullYear()<-1e4||C.getFullYear()>1e4)throw new Error("Invalid date:"+r);return C}},"getStartDate"),ne=l(function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),ae=l(function(t,s,r,e=!1){r=r.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(r);if(k!==null){let E=null;for(const A of k.groups.ids.split(" ")){let Y=it(A);Y!==void 0&&(!E||Y.startTime<E.startTime)&&(E=Y)}if(E)return E.startTime;const P=new Date;return P.setHours(0,0,0,0),P}let T=B(r,s.trim(),!0);if(T.isValid())return e&&(T=T.add(1,"d")),T.toDate();let C=B(t);const[O,F]=ne(r);if(!Number.isNaN(O)){const E=C.add(O,F);E.isValid()&&(C=E)}return C.toDate()},"getEndDate"),vt=0,ot=l(function(t){return t===void 0?(vt=vt+1,"task"+vt):t},"parseId"),xs=l(function(t,s){let r;s.substr(0,1)===":"?r=s.substr(1,s.length):r=s;const e=r.split(","),a={};Vt(e,a,ee);for(let T=0;T<e.length;T++)e[T]=e[T].trim();let k="";switch(e.length){case 1:a.id=ot(),a.startTime=t.endTime,k=e[0];break;case 2:a.id=ot(),a.startTime=Et(void 0,U,e[0]),k=e[1];break;case 3:a.id=ot(e[0]),a.startTime=Et(void 0,U,e[1]),k=e[2];break}return k&&(a.endTime=ae(a.startTime,U,k,ft),a.manualEndTime=B(k,"YYYY-MM-DD",!0).isValid(),re(a,U,lt,ct)),a},"compileData"),bs=l(function(t,s){let r;s.substr(0,1)===":"?r=s.substr(1,s.length):r=s;const e=r.split(","),a={};Vt(e,a,ee);for(let k=0;k<e.length;k++)e[k]=e[k].trim();switch(e.length){case 1:a.id=ot(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:e[0]};break;case 2:a.id=ot(),a.startTime={type:"getStartDate",startData:e[0]},a.endTime={data:e[1]};break;case 3:a.id=ot(e[0]),a.startTime={type:"getStartDate",startData:e[1]},a.endTime={data:e[2]};break}return a},"parseData"),It,pt,V=[],oe={},ws=l(function(t,s){const r={section:ut,type:ut,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},e=bs(pt,s);r.raw.startTime=e.startTime,r.raw.endTime=e.endTime,r.id=e.id,r.prevTaskId=pt,r.active=e.active,r.done=e.done,r.crit=e.crit,r.milestone=e.milestone,r.vert=e.vert,r.vert?r.order=-1:(r.order=St,St++);const a=V.push(r);pt=r.id,oe[r.id]=a-1},"addTask"),it=l(function(t){const s=oe[t];return V[s]},"findTaskById"),_s=l(function(t,s){const r={section:ut,type:ut,description:t,task:t,classes:[]},e=xs(It,s);r.startTime=e.startTime,r.endTime=e.endTime,r.id=e.id,r.active=e.active,r.done=e.done,r.crit=e.crit,r.milestone=e.milestone,r.vert=e.vert,It=r,Tt.push(r)},"addTaskOrg"),Qt=l(function(){const t=l(function(r){const e=V[r];let a="";switch(V[r].raw.startTime.type){case"prevTaskEnd":{const k=it(e.prevTaskId);e.startTime=k.endTime;break}case"getStartDate":a=Et(void 0,U,V[r].raw.startTime.startData),a&&(V[r].startTime=a);break}return V[r].startTime&&(V[r].endTime=ae(V[r].startTime,U,V[r].raw.endTime.data,ft),V[r].endTime&&(V[r].processed=!0,V[r].manualEndTime=B(V[r].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),re(V[r],U,lt,ct))),V[r].processed},"compileTask");let s=!0;for(const[r,e]of V.entries())t(r),s=s&&e.processed;return s},"compileTasks"),Ds=l(function(t,s){let r=s;at().securityLevel!=="loose"&&(r=$e.sanitizeUrl(s)),t.split(",").forEach(function(e){it(e)!==void 0&&(le(e,()=>{window.open(r,"_self")}),$t.set(e,r))}),ce(t,"clickable")},"setLink"),ce=l(function(t,s){t.split(",").forEach(function(r){let e=it(r);e!==void 0&&e.classes.push(s)})},"setClass"),Cs=l(function(t,s,r){if(at().securityLevel!=="loose"||s===void 0)return;let e=[];if(typeof r=="string"){e=r.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<e.length;k++){let T=e[k].trim();T.startsWith('"')&&T.endsWith('"')&&(T=T.substr(1,T.length-2)),e[k]=T}}e.length===0&&e.push(t),it(t)!==void 0&&le(t,()=>{Oe.runFunc(s,...e)})},"setClickFun"),le=l(function(t,s){Wt.push(function(){const r=nt?`${nt}-${t}`:t,e=document.querySelector(`[id="${r}"]`);e!==null&&e.addEventListener("click",function(){s()})},function(){const r=nt?`${nt}-${t}`:t,e=document.querySelector(`[id="${r}-text"]`);e!==null&&e.addEventListener("click",function(){s()})})},"pushFun"),Ss=l(function(t,s,r){t.split(",").forEach(function(e){Cs(e,s,r)}),ce(t,"clickable")},"setClickEvent"),Es=l(function(t){Wt.forEach(function(s){s(t)})},"bindFunctions"),Is={getConfig:l(()=>at().gantt,"getConfig"),clear:Xe,setDateFormat:es,getDateFormat:cs,enableInclusiveEndDates:ss,endDatesAreInclusive:is,enableTopAxis:rs,topAxisEnabled:ns,setAxisFormat:Ue,getAxisFormat:Ke,setTickInterval:Je,getTickInterval:Qe,setTodayMarker:Ze,getTodayMarker:ts,setAccTitle:ye,getAccTitle:ke,setDiagramTitle:me,getDiagramTitle:he,setDiagramId:Ge,setDisplayMode:as,getDisplayMode:os,setAccDescription:fe,getAccDescription:de,addSection:ms,getSections:ks,getTasks:ys,addTask:ws,findTaskById:it,addTaskOrg:_s,setIncludes:ls,getIncludes:us,setExcludes:ds,getExcludes:fs,setClickEvent:Ss,setLink:Ds,getLinks:hs,bindFunctions:Es,parseDuration:ne,isInvalidDate:ie,setWeekday:gs,getWeekday:vs,setWeekend:ps};function Vt(t,s,r){let e=!0;for(;e;)e=!1,r.forEach(function(a){const k="^\\s*"+a+"\\s*$",T=new RegExp(k);t[0].match(T)&&(s[a]=!0,t.shift(1),e=!0)})}l(Vt,"getTaskTags");B.extend(qe);var Ms=l(function(){st.debug("Something is calling, setConf, remove the call")},"setConf"),Zt={monday:Me,tuesday:Ie,wednesday:Ee,thursday:Se,friday:Ce,saturday:De,sunday:_e},As=l((t,s)=>{let r=[...t].map(()=>-1/0),e=[...t].sort((k,T)=>k.startTime-T.startTime||k.order-T.order),a=0;for(const k of e)for(let T=0;T<r.length;T++)if(k.startTime>=r[T]){r[T]=k.endTime,k.order=T+s,T>a&&(a=T);break}return a},"getMaxIntersections"),Q,Dt=1e4,Fs=l(function(t,s,r,e){const a=at().gantt;e.db.setDiagramId(s);const k=at().securityLevel;let T;k==="sandbox"&&(T=kt("#i"+s));const C=k==="sandbox"?kt(T.nodes()[0].contentDocument.body):kt("body"),O=k==="sandbox"?T.nodes()[0].contentDocument:document,F=O.getElementById(s);Q=F.parentElement.offsetWidth,Q===void 0&&(Q=1200),a.useWidth!==void 0&&(Q=a.useWidth);const E=e.db.getTasks(),P=E.filter(h=>!h.vert);let A=[];for(const h of P)A.push(h.type);A=M(A);const Y={};let z=2*a.topPadding;if(e.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const h={};for(const v of P)h[v.section]===void 0?h[v.section]=[v]:h[v.section].push(v);let g=0;for(const v of Object.keys(h)){const y=As(h[v],g)+1;g+=y,z+=y*(a.barHeight+a.barGap),Y[v]=y}}else{z+=P.length*(a.barHeight+a.barGap);for(const h of A)Y[h]=P.filter(g=>g.type===h).length}F.setAttribute("viewBox","0 0 "+Q+" "+z);const R=C.select(`[id="${s}"]`),S=ge().domain([ve(E,function(h){return h.startTime}),pe(E,function(h){return h.endTime})]).rangeRound([0,Q-a.leftPadding-a.rightPadding]);function q(h,g){const v=h.startTime,y=g.startTime;let n=0;return v>y?n=1:v<y&&(n=-1),n}l(q,"taskCompare"),E.sort(q),tt(E,Q,z),Te(R,z,Q,a.useMaxWidth),R.append("text").text(e.db.getDiagramTitle()).attr("x",Q/2).attr("y",a.titleTopMargin).attr("class","titleText");function tt(h,g,v){const y=a.barHeight,n=y+a.barGap,d=a.topPadding,f=a.leftPadding,u=xe().domain([0,A.length]).range(["#00B9FA","#F95002"]).interpolate(be);Z(n,d,f,g,v,h,e.db.getExcludes(),e.db.getIncludes()),I(f,d,g,v),X(h,n,d,f,y,u,g),p(n,d),m(f,d,g,v)}l(tt,"makeGantt");function X(h,g,v,y,n,d,f){h.sort((o,x)=>o.vert===x.vert?0:o.vert?1:-1);const u=h.filter(o=>!o.vert),i=[...new Set(u.map(o=>o.order))].map(o=>u.find(x=>x.order===o));R.append("g").selectAll("rect").data(i).enter().append("rect").attr("x",0).attr("y",function(o,x){return x=o.order,x*g+v-2}).attr("width",function(){return f-a.rightPadding/2}).attr("height",g).attr("class",function(o){for(const[x,b]of A.entries())if(o.type===b)return"section section"+x%a.numberSectionStyles;return"section section0"}).enter();const D=R.append("g").selectAll("rect").data(h).enter(),c=e.db.getLinks();if(D.append("rect").attr("id",function(o){return s+"-"+o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?S(o.startTime)+y+.5*(S(o.endTime)-S(o.startTime))-.5*n:S(o.startTime)+y}).attr("y",function(o,x){return x=o.order,o.vert?a.gridLineStartPadding:x*g+v}).attr("width",function(o){return o.milestone?n:o.vert?.08*n:S(o.renderEndTime||o.endTime)-S(o.startTime)}).attr("height",function(o){return o.vert?u.length*(a.barHeight+a.barGap)+a.barHeight*2:n}).attr("transform-origin",function(o,x){return x=o.order,(S(o.startTime)+y+.5*(S(o.endTime)-S(o.startTime))).toString()+"px "+(x*g+v+.5*n).toString()+"px"}).attr("class",function(o){const x="task";let b="";o.classes.length>0&&(b=o.classes.join(" "));let $=0;for(const[W,L]of A.entries())o.type===L&&($=W%a.numberSectionStyles);let w="";return o.active?o.crit?w+=" activeCrit":w=" active":o.done?o.crit?w=" doneCrit":w=" done":o.crit&&(w+=" crit"),w.length===0&&(w=" task"),o.milestone&&(w=" milestone "+w),o.vert&&(w=" vert "+w),w+=$,w+=" "+b,x+w}),D.append("text").attr("id",function(o){return s+"-"+o.id+"-text"}).text(function(o){return o.task}).attr("font-size",a.fontSize).attr("x",function(o){let x=S(o.startTime),b=S(o.renderEndTime||o.endTime);if(o.milestone&&(x+=.5*(S(o.endTime)-S(o.startTime))-.5*n,b=x+n),o.vert)return S(o.startTime)+y;const $=this.getBBox().width;return $>b-x?b+$+1.5*a.leftPadding>f?x+y-5:b+y+5:(b-x)/2+x+y}).attr("y",function(o,x){return o.vert?a.gridLineStartPadding+u.length*(a.barHeight+a.barGap)+60:(x=o.order,x*g+a.barHeight/2+(a.fontSize/2-2)+v)}).attr("text-height",n).attr("class",function(o){const x=S(o.startTime);let b=S(o.endTime);o.milestone&&(b=x+n);const $=this.getBBox().width;let w="";o.classes.length>0&&(w=o.classes.join(" "));let W=0;for(const[dt,bt]of A.entries())o.type===bt&&(W=dt%a.numberSectionStyles);let L="";return o.active&&(o.crit?L="activeCritText"+W:L="activeText"+W),o.done?o.crit?L=L+" doneCritText"+W:L=L+" doneText"+W:o.crit&&(L=L+" critText"+W),o.milestone&&(L+=" milestoneText"),o.vert&&(L+=" vertText"),$>b-x?b+$+1.5*a.leftPadding>f?w+" taskTextOutsideLeft taskTextOutside"+W+" "+L:w+" taskTextOutsideRight taskTextOutside"+W+" "+L+" width-"+$:w+" taskText taskText"+W+" "+L+" width-"+$}),at().securityLevel==="sandbox"){let o;o=kt("#i"+s);const x=o.nodes()[0].contentDocument;D.filter(function(b){return c.has(b.id)}).each(function(b){var $=x.querySelector("#"+CSS.escape(s+"-"+b.id)),w=x.querySelector("#"+CSS.escape(s+"-"+b.id+"-text"));const W=$.parentNode;var L=x.createElement("a");L.setAttribute("xlink:href",c.get(b.id)),L.setAttribute("target","_top"),W.appendChild(L),L.appendChild($),L.appendChild(w)})}}l(X,"drawRects");function Z(h,g,v,y,n,d,f,u){if(f.length===0&&u.length===0)return;let _,i;for(const{startTime:b,endTime:$}of d)(_===void 0||b<_)&&(_=b),(i===void 0||$>i)&&(i=$);if(!_||!i)return;if(B(i).diff(B(_),"year")>5){st.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const D=e.db.getDateFormat(),c=[];let N=null,o=B(_);for(;o.valueOf()<=i;)e.db.isInvalidDate(o,D,f,u)?N?N.end=o:N={start:o,end:o}:N&&(c.push(N),N=null),o=o.add(1,"d");R.append("g").selectAll("rect").data(c).enter().append("rect").attr("id",b=>s+"-exclude-"+b.start.format("YYYY-MM-DD")).attr("x",b=>S(b.start.startOf("day"))+v).attr("y",a.gridLineStartPadding).attr("width",b=>S(b.end.endOf("day"))-S(b.start.startOf("day"))).attr("height",n-g-a.gridLineStartPadding).attr("transform-origin",function(b,$){return(S(b.start)+v+.5*(S(b.end)-S(b.start))).toString()+"px "+($*h+.5*n).toString()+"px"}).attr("class","exclude-range")}l(Z,"drawExcludeDays");function K(h,g,v,y){if(v<=0||h>g)return 1/0;const n=g-h,d=B.duration({[y??"day"]:v}).asMilliseconds();return d<=0?1/0:Math.ceil(n/d)}l(K,"getEstimatedTickCount");function I(h,g,v,y){const n=e.db.getDateFormat(),d=e.db.getAxisFormat();let f;d?f=d:n==="D"?f="%d":f=a.axisFormat??"%Y-%m-%d";let u=we(S).tickSize(-y+g+a.gridLineStartPadding).tickFormat(Bt(f));const i=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(e.db.getTickInterval()||a.tickInterval);if(i!==null){const D=parseInt(i[1],10);if(isNaN(D)||D<=0)st.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{const c=i[2],N=e.db.getWeekday()||a.weekday,o=S.domain(),x=o[0],b=o[1],$=K(x,b,D,c);if($>Dt)st.warn(`The tick interval "${D}${c}" would generate ${$} ticks, which exceeds the maximum allowed (${Dt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":u.ticks(Gt.every(D));break;case"second":u.ticks(Xt.every(D));break;case"minute":u.ticks(jt.every(D));break;case"hour":u.ticks(qt.every(D));break;case"day":u.ticks(Ht.every(D));break;case"week":u.ticks(Zt[N].every(D));break;case"month":u.ticks(zt.every(D));break}}}if(R.append("g").attr("class","grid").attr("transform","translate("+h+", "+(y-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),e.db.topAxisEnabled()||a.topAxis){let D=Ae(S).tickSize(-y+g+a.gridLineStartPadding).tickFormat(Bt(f));if(i!==null){const c=parseInt(i[1],10);if(isNaN(c)||c<=0)st.warn(`Invalid tick interval value: "${i[1]}". Skipping custom tick interval.`);else{const N=i[2],o=e.db.getWeekday()||a.weekday,x=S.domain(),b=x[0],$=x[1];if(K(b,$,c,N)<=Dt)switch(N){case"millisecond":D.ticks(Gt.every(c));break;case"second":D.ticks(Xt.every(c));break;case"minute":D.ticks(jt.every(c));break;case"hour":D.ticks(qt.every(c));break;case"day":D.ticks(Ht.every(c));break;case"week":D.ticks(Zt[o].every(c));break;case"month":D.ticks(zt.every(c));break}}}R.append("g").attr("class","grid").attr("transform","translate("+h+", "+g+")").call(D).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(I,"makeGrid");function p(h,g){let v=0;const y=Object.keys(Y).map(n=>[n,Y[n]]);R.append("g").selectAll("text").data(y).enter().append(function(n){const d=n[0].split(Fe.lineBreakRegex),f=-(d.length-1)/2,u=O.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",f+"em");for(const[_,i]of d.entries()){const D=O.createElementNS("http://www.w3.org/2000/svg","tspan");D.setAttribute("alignment-baseline","central"),D.setAttribute("x","10"),_>0&&D.setAttribute("dy","1em"),D.textContent=i,u.appendChild(D)}return u}).attr("x",10).attr("y",function(n,d){if(d>0)for(let f=0;f<d;f++)return v+=y[d-1][1],n[1]*h/2+v*h+g;else return n[1]*h/2+g}).attr("font-size",a.sectionFontSize).attr("class",function(n){for(const[d,f]of A.entries())if(n[0]===f)return"sectionTitle sectionTitle"+d%a.numberSectionStyles;return"sectionTitle"})}l(p,"vertLabels");function m(h,g,v,y){const n=e.db.getTodayMarker();if(n==="off")return;const d=R.append("g").attr("class","today"),f=new Date,u=d.append("line");u.attr("x1",S(f)+h).attr("x2",S(f)+h).attr("y1",a.titleTopMargin).attr("y2",y-a.titleTopMargin).attr("class","today"),n!==""&&u.attr("style",n.replace(/,/g,";"))}l(m,"drawToday");function M(h){const g={},v=[];for(let y=0,n=h.length;y<n;++y)Object.prototype.hasOwnProperty.call(g,h[y])||(g[h[y]]=!0,v.push(h[y]));return v}l(M,"checkUnique")},"draw"),$s={setConf:Ms,draw:Fs},Ls=l(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Os=Ls,Vs={parser:je,db:Is,renderer:$s,styles:Os};export{Vs as diagram};
