(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{148:function(e,t,n){},196:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(37),i=n.n(a),o=n(68),s=n(12),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{token:t.token,name:t.name,email:t.email,id:t.id,group:t.group};case"LOGOUT":return{};default:return e}},j=Object(o.b)({user:l}),u="http://localhost/:3001",d="NTU-MEAL",b=n(155),O=n.n(b),h=n(13),x=n(30),g=n(8),p=n(216),f=n(219),m=n(65),v=n(143),y=function(e,t,n,c,r){return{type:"LOGIN",token:e,name:t,group:n,email:c,id:r}},C={logout:function(){return{type:"LOGOUT"}}},S=Object(s.b)((function(e){return{hasLoggedin:void 0!==e.user.token,id:e.user.id,name:e.user.name,userGroup:e.user.group}}),C)((function(e){var t=e.hasLoggedin,n=(e.name,e.userGroup,e.logout);console.log(t);var a=Object(r.useState)(!1),i=Object(g.a)(a,2);i[0],i[1];return Object(c.jsx)("div",{style:{background:"orange"},children:Object(c.jsxs)(p.a,{secondary:!0,children:[Object(c.jsx)(p.a.Item,{as:x.b,to:"/",children:Object(c.jsxs)(f.a,{as:"h2",children:[Object(c.jsx)(m.a,{name:"food"}),Object(c.jsxs)(f.a.Content,{children:["NTU - MEAL",Object(c.jsx)(f.a.Subheader,{children:"Get meal, reduce waste!"})]})]})}),Object(c.jsx)(p.a.Menu,{position:"right",children:t?Object(c.jsx)(p.a.Item,{children:Object(c.jsxs)(v.a,{animated:!0,color:"grey",basic:!0,onClick:function(){return n()},children:[Object(c.jsx)(v.a.Content,{visible:!0,children:"Logout"}),Object(c.jsx)(v.a.Content,{hidden:!0,children:Object(c.jsx)(m.a,{name:"sign-out alternate"})})]})}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(p.a.Item,{children:Object(c.jsxs)(v.a.Group,{children:[Object(c.jsxs)(v.a,{animated:"fade",as:x.b,to:"/login",color:"grey",basic:!0,children:[Object(c.jsx)(v.a.Content,{visible:!0,children:"\xa0\xa0\xa0Login\xa0\xa0\xa0"}),Object(c.jsx)(v.a.Content,{hidden:!0,children:Object(c.jsx)(m.a,{name:"sign-in alternate"})})]}),Object(c.jsxs)(v.a,{animated:"fade",as:x.b,to:"/register",color:"grey",basic:!0,children:[Object(c.jsx)(v.a.Content,{visible:!0,children:"Register"}),Object(c.jsx)(v.a.Content,{hidden:!0,children:Object(c.jsx)(m.a,{name:"add user"})})]})]})})})})]})})})),k=n(221),I=n(218),w=n(215),E=n(142),N=n.n(E),M=n(157),A=n(42),L={status:NaN,response:null,errMsg:null,loading:!1,success:!1,error:!1,isInit:function(){return!this.loading&&!this.success&&!this.error}},T=function(e,t){switch(t.type){case"CONNECT":return Object(A.a)(Object(A.a)({},e),{},{loading:!0});case"SUCCESS":return Object(A.a)(Object(A.a)({},e),{},{status:t.status||200,response:t.response,errMsg:null,loading:!1,success:!0,error:!1});case"ERROR":return Object(A.a)(Object(A.a)({},e),{},{status:t.status||400,response:null,errMsg:t.errMsg||"",loading:!1,success:!1,error:!0});case"INIT":return L;default:throw new Error("Invalid Action Type")}},R=function(e,t,n){var c=Object(r.useReducer)(T,L),a=Object(g.a)(c,2),i=a[0],o=a[1];return[i,function(){var c=Object(M.a)(N.a.mark((function c(r,a,s,l){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:o({type:"CONNECT"}),fetch(r,{mode:"no-cors",method:a,body:s,headers:l}).then((function(c){if(200!==c.status)c.text().then((function(e){o({type:"ERROR",status:c.status,errMsg:e}),n&&n(e,i)}));else{var r=null;switch(e){case"json":r=c.json();break;case"text":r=c.text();break;default:return t&&t(),o({type:"SUCCESS"})}if(null===r)return;r.then((function(e){o({type:"SUCCESS",response:e}),t&&t()})).catch((function(e){console.error(e),o({type:"ERROR",errMsg:"Response type Error"}),n&&n("Response type Error",i)}))}})).catch((function(e){console.error(e),o({type:"ERROR",errMsg:"Connection Error"}),n&&n("Connection Error",i)}));case 2:case"end":return c.stop()}}),c)})));return function(e,t,n,r){return c.apply(this,arguments)}}(),function(){return o({type:"INIT"})}]},F=function(){var e=R("json"),t=Object(g.a)(e,2),n=t[0],c=t[1];return[Object(A.a)(Object(A.a)({},n),n.response),function(e,t){c(u+"/auth/login","POST",JSON.stringify({email:e,pwd:t}),{"content-type":"application/json"})}]},P={login:y},G=Object(s.b)((function(e){return{hasLoggedIn:void 0!==e.user.token}}),P)((function(e){var t=e.hasLoggedIn,n=e.login,a=F(),i=Object(g.a)(a,2),o=i[0],s=i[1],l=Object(r.useState)(""),j=Object(g.a)(l,2),u=j[0],d=j[1],b=Object(r.useState)(""),O=Object(g.a)(b,2),x=O[0],p=O[1],y=Object(r.useState)(!1),C=Object(g.a)(y,2),S=C[0],E=C[1];return Object(r.useEffect)((function(){o.success&&!S&&(n(o.token,o.name,o.group,o.email,o.id),setTimeout((function(){E(!0)}),1e3))}),[o,S,n]),o.isInit()&&t||S?Object(c.jsx)(h.a,{to:"/"}):Object(c.jsx)(k.a,{textAlign:"center",style:{width:"100%",marginTop:"2vh"},children:Object(c.jsxs)(k.a.Column,{style:{width:"80%",maxWidth:"30em"},children:[Object(c.jsxs)(f.a,{as:"h2",icon:!0,textAlign:"center",color:"blue",children:[Object(c.jsx)(m.a,{name:"user circle"}),Object(c.jsx)(f.a.Content,{children:"Login"})]}),o.error?Object(c.jsx)(I.a,{negative:!0,children:o.errMsg}):null,o.success?Object(c.jsx)(I.a,{positive:!0,children:"Login Success!"}):null,Object(c.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),s(u,x)},children:[Object(c.jsx)(w.a.Input,{icon:"user",iconPosition:"left",type:"email",placeholder:"Your email",required:!0,id:"userEmail",onChange:function(e){d(e.target.value)}}),Object(c.jsx)(w.a.Input,{icon:"lock",iconPosition:"left",type:"password",placeholder:"Your password",required:!0,id:"userPassword",onChange:function(e){p(e.target.value)}}),Object(c.jsx)(v.a,{color:"green",type:"submit",children:"Login"})]})]})})})),q=n(211),D={login:y},_=Object(s.b)((function(){return{}}),D)((function(e){var t=e.email,n=e.password,r=e.login,a=F(),i=Object(g.a)(a,2),o=i[0],s=i[1];return o.success?(r(o.token,o.name,o.email,o.id,o.group),Object(c.jsx)(h.a,{to:"/home"})):(o.isInit()&&s(t,n),Object(c.jsx)(k.a,{textAlign:"center",style:{width:"100%",marginTop:"2vh"},children:Object(c.jsxs)(k.a.Column,{style:{width:"80%",maxWidth:"30em"},children:[Object(c.jsxs)(f.a,{as:"h2",icon:!0,textAlign:"center",children:[Object(c.jsx)(m.a,{name:"user circle"}),Object(c.jsx)(f.a.Content,{children:"Login With QR-Code"})]}),o.error?Object(c.jsx)(I.a,{negative:!0,children:o.errMsg}):null,o.loading?Object(c.jsx)(q.a,{active:!0,inline:"centered"}):null]})}))})),z=function(){var e=function(){var e=R(),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(s.c)((function(e){return e.user})).token;return[n,function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"user";c(u+"/auth/register","POST",JSON.stringify({name:e,email:t,pwd:n,group:a}),{authorization:r,"content-type":"application/json"})}]}(),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(""),o=Object(g.a)(i,2),l=o[0],j=o[1],d=Object(r.useState)(""),b=Object(g.a)(d,2),O=b[0],x=b[1],p=Object(r.useState)(""),y=Object(g.a)(p,2),C=y[0],S=y[1],E=Object(r.useState)(!1),N=Object(g.a)(E,2),M=N[0],A=N[1];return Object(r.useEffect)((function(){n.success&&!M&&setTimeout((function(){A(!0)}),1e3)}),[n]),M?Object(c.jsx)(h.a,{to:"/login"}):Object(c.jsx)(k.a,{textAlign:"center",style:{width:"100%",marginTop:"2vh"},children:Object(c.jsxs)(k.a.Column,{style:{width:"80%",maxWidth:"30em"},children:[Object(c.jsxs)(f.a,{as:"h2",icon:!0,textAlign:"center",color:"red",children:[Object(c.jsx)(m.a,{name:"user circle"}),Object(c.jsx)(f.a.Content,{children:"Register"})]}),Object(c.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),a(l,O,C)},children:[Object(c.jsx)(w.a.Field,{children:Object(c.jsx)(w.a.Input,{icon:"user",iconPosition:"left",placeholder:"Name",type:"text",required:!0,id:"userName",onChange:function(e){j(e.target.value)}})}),Object(c.jsx)(w.a.Field,{children:Object(c.jsx)(w.a.Input,{icon:"mail",iconPosition:"left",placeholder:"Email",type:"email",required:!0,id:"userEmail",onChange:function(e){x(e.target.value)}})}),Object(c.jsx)(w.a.Field,{children:Object(c.jsx)(w.a.Input,{icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",required:!0,id:"userPassword",onChange:function(e){S(e.target.value)}})}),Object(c.jsx)(v.a,{color:"green",type:"submit",children:"Register"}),n.error?Object(c.jsx)(I.a,{negative:!0,children:n.errMsg}):null,n.success?Object(c.jsx)(I.a,{positive:!0,children:"Register Success!"}):null]})]})})},J={marginTop:"2em",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},W=function(){return Object(c.jsxs)("div",{style:J,children:[Object(c.jsx)(m.a,{name:"warning sign",size:"huge"}),Object(c.jsxs)(f.a,{as:"h2",children:["Please\xa0",Object(c.jsx)(x.b,{to:"login",children:"login"}),"\xa0or\xa0",Object(c.jsx)(x.b,{to:"register",children:"create your account"}),"."]})]})},U=n(213),Z=n(214),B=n(222),H=n(223),Y=(n(148),n(129)),Q={E:"red",N:"blue",M:"green",S:"brown",SE:"purple",W:"orange",CZ:"teal"},K=function(e){var t=e.region,n=R("text"),a=Object(g.a)(n,2),i=a[0],o=a[1],l=Object(r.useState)(!1),j=Object(g.a)(l,2),d=j[0],b=j[1],O=Object(r.useState)(""),h=Object(g.a)(O,2),x=h[0],p=h[1],y=Object(r.useState)(""),C=Object(g.a)(y,2),S=C[0],k=C[1],E=Object(r.useState)(""),N=Object(g.a)(E,2),M=N[0],A=N[1],L=Object(r.useState)(""),T=Object(g.a)(L,2),F=T[0],P=T[1],G=Object(r.useState)(""),q=Object(g.a)(G,2),D=q[0],_=q[1],z=Object(r.useState)(""),J=Object(g.a)(z,2),W=J[0],U=J[1],Z=Object(r.useState)(""),H=Object(g.a)(Z,2),K=H[0],V=H[1],X=Object(r.useState)(""),$=Object(g.a)(X,2),ee=$[0],te=$[1],ne=Object(s.c)((function(e){return e.user})),ce=ne.token,re=ne.id;Object(r.useEffect)((function(){d&&setTimeout((function(){b(!1),p("")}),3e3)}),[d]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(Y.a.Header,{children:Object(c.jsx)(f.a,{as:"h2",color:Q[t],style:{paddingLeft:"5px"},children:"Create Event at region ".concat(t)})}),Object(c.jsx)(Y.a.Content,{children:Object(c.jsx)(B.a,{textAlign:"center",color:Q[t],children:Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:Object(c.jsxs)(w.a,{onSubmit:function(e){return function(e){if(e.preventDefault(),isNaN(K))return b(!0),void p("Input Amount is not a number !");var n=Math.round(parseInt(K));if(n<0)return b(!0),void p("Input Amount must > 0 !");var c=Date.parse(F+" "+D),r=Date.parse(F+" "+W);if(r<=c)return b(!0),void p("End time should be later than begin time!");if(ee.length>100)return b(!0),void p("Description too long (must < 100 words) !");var a={admin:re,region:t,name:S,location:M,date:F,begin:c,end:r,amount:n,description:ee};console.log(a),o(u+"/event","POST",JSON.stringify(a),{authorization:ce,"content-type":"application/json"})}(e)},loading:i.loading,children:[Object(c.jsxs)(w.a.Group,{widths:"equal",children:[Object(c.jsx)(w.a.Input,{type:"text",label:"Event name",required:!0,placeholder:"e.g. \u7814\u8a0e\u6703\u5269\u9918\u4fbf\u7576",id:"name",onChange:function(e){k(e.target.value)}}),Object(c.jsx)(w.a.Input,{type:"text",label:"Location",required:!0,placeholder:"e.g. \u535a\u7406\u9928 113",id:"location",onChange:function(e){A(e.target.value)}})]}),Object(c.jsxs)(w.a.Field,{required:!0,children:[Object(c.jsx)("label",{children:"Date"}),Object(c.jsx)(w.a.Group,{widths:"equal",children:Object(c.jsx)(w.a.Input,{type:"date",required:!0,id:"date",onChange:function(e){P(e.target.value)}})}),Object(c.jsx)("label",{style:{textDecoration:"none",marginBottom:"1em"},children:"Time interval"}),Object(c.jsxs)(w.a.Group,{widths:"equal",children:[Object(c.jsx)(w.a.Input,{type:"time",required:!0,id:"timeBegin",onChange:function(e){_(e.target.value)}}),Object(c.jsx)(w.a.Input,{type:"time",required:!0,id:"timeEnd",onChange:function(e){U(e.target.value)}})]})]}),Object(c.jsx)(w.a.Field,{children:Object(c.jsx)(w.a.Group,{widths:"equal",children:Object(c.jsx)(w.a.Input,{type:"text",label:"Amount",required:!0,id:"amount",onChange:function(e){V(e.target.value)}})})}),Object(c.jsxs)(w.a.Field,{children:[Object(c.jsx)("label",{children:"More details..."}),Object(c.jsx)(w.a.TextArea,{required:!1,placeholder:"More details or descriptions...( < 100 words)",onChange:function(e){te(e.target.value)}})]}),i.error||d?Object(c.jsx)(I.a,{negative:!0,children:d?x:i.errMsg}):null,i.success?Object(c.jsx)(I.a,{positive:!0,children:"Create Event Success!"}):null,Object(c.jsxs)(v.a,{animated:"fade",color:Q[t],basic:!0,type:"submit",children:[Object(c.jsx)(v.a.Content,{visible:!0,children:"Create Event"}),Object(c.jsxs)(v.a.Content,{hidden:!0,children:[Object(c.jsx)(m.a,{name:"add"}),Object(c.jsx)(m.a,{name:"wordpress forms"})]})]})]})})})})]})},V=n.p+"static/media/ntu_map2.fde23396.jpg",X=n(118),$=n.n(X),ee=(n(196),[[205,92,92],[135,206,250],[50,205,50],[218,165,32],[138,43,226],[255,140,0],[32,178,170]]),te=["E","N","M","S","SE","W","CZ"],ne=function(e){var t=e.x,n=e.y,a=e.idx,i=e.select,o=Object(r.useState)({left:"".concat(t,"px"),top:"".concat(n,"px"),backgroundColor:"rgba(".concat(ee[a][0],", ").concat(ee[a][1],", ").concat(ee[a][2],", 0.5)")}),s=Object(g.a)(o,2),l=s[0],j=s[1];return Object(c.jsx)("div",{onMouseEnter:function(){j({left:"".concat(t,"px"),top:"".concat(n,"px"),backgroundColor:"rgba(".concat(ee[a][0],", ").concat(ee[a][1],", ").concat(ee[a][2],", 0.2)")})},onMouseLeave:function(){j({left:"".concat(t,"px"),top:"".concat(n,"px"),backgroundColor:"rgba(".concat(ee[a][0],", ").concat(ee[a][1],", ").concat(ee[a][2],", 0.5)")})},className:"circle_div",style:l,onClick:function(){return i(te[a])}})},ce=[[854,277],[571,269],[490,398],[702.5,507.5],[933.5,517],[220,531],[219,117]],re=1200,ae={E:"red",N:"blue",M:"green",S:"brown",SE:"purple",W:"orange",CZ:"teal"},ie=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(!1),o=Object(g.a)(i,2),s=o[0],l=o[1],j=Object(H.a)(),u=Object(g.a)(j,2),d=u[0],b=u[1],O=b.width,h=b.height,x=function(e){l(!0),a(e)},p={left:-(re-O)/2,right:(re-O)/2,top:-(857.0046361620641-h),bottom:0};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex_div container",ref:d,children:Object(c.jsx)($.a,{bounds:p,children:Object(c.jsxs)("div",{className:"inline_div",children:[Object(c.jsx)("img",{src:V,alt:"use this map to select event region",className:"background_img"}),ce.map((function(e,t){return Object(c.jsx)(ne,{idx:t,x:e[0],y:e[1],select:x},t)}))]})})}),Object(c.jsxs)(Y.a,{color:ae[n],dimmer:"inverted",onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:s,children:[Object(c.jsx)(K,{region:n}),Object(c.jsx)(Y.a.Actions,{children:Object(c.jsxs)(v.a,{onClick:function(){return l(!1)},color:"red",children:[Object(c.jsx)(m.a,{name:"close"})," close"]})})]})]})},oe=[[854,277],[571,269],[490,398],[702.5,507.5],[933.5,517],[220,531],[219,117]],se=1200,le=function(e){var t=e.select,n=Object(H.a)(),r=Object(g.a)(n,2),a=r[0],i=r[1],o=i.width,s=i.height,l={left:-(se-o)/2,right:(se-o)/2,top:-(857.0046361620641-s),bottom:0};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"flex_div container",ref:a,children:Object(c.jsx)($.a,{bounds:l,children:Object(c.jsxs)("div",{className:"inline_div",children:[Object(c.jsx)("img",{src:V,alt:"use this map to select event region",className:"background_img"}),oe.map((function(e,n){return Object(c.jsx)(ne,{idx:n,x:e[0],y:e[1],select:t},n)}))]})})})})},je=n(159),ue=n(217),de=function(e){var t=e.totalLikes,n=void 0===t?-100:t,a=e.likeState,i=void 0===a?-100:a,o=e.evtId,l=Object(s.c)((function(e){return e.user})).token,j=R("json"),d=Object(g.a)(j,2),b=d[0],O=d[1],h=Object(r.useState)(i),x=Object(g.a)(h,2),p=x[0],f=x[1],y=Object(r.useState)(n),C=Object(g.a)(y,2),S=C[0],k=C[1],I=function(e){if(e===p){k(n-i),f(0);var t={likeState:0,evtId:o};O(u+"/event/like","POST",JSON.stringify(t),{authorization:l,"content-type":"application/json"})}else{k(n-i+e),f(e);var c={likeState:e,evtId:o};O(u+"/event/like","POST",JSON.stringify(c),{authorization:l,"content-type":"application/json"})}};return Object(r.useEffect)((function(){console.log(b)}),[b]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(m.a,{name:"thumbs up outline",size:"tiny",style:{padding:"10px",borderBottom:"10px"}}),S,Object(c.jsxs)("div",{className:"ui two buttons",children:[Object(c.jsx)(v.a,{basic:1!==p,inverted:1===p,active:!0,color:"green",onClick:function(){return I(1)},children:"Approve"}),Object(c.jsx)(v.a,{basic:-1!==p,inverted:-1===p,active:!0,color:"red",onClick:function(){return I(-1)},children:"Decline"})]})]})},be={MAP:"grey",ALL:"black",E:"red",N:"blue",M:"green",S:"brown",SE:"purple",W:"orange",CZ:"teal"},Oe=function(e){var t=e.region,n=e.connection,a=n.loading,i=n.success,o=n.error,l=n.errMsg,j=n.response,d=Object(s.c)((function(e){return e.user})).token,b=R("json"),O=Object(g.a)(b,2),h=O[0],x=O[1],p=Object(r.useState)(j),f=Object(g.a)(p,2),y=f[0],C=f[1];return Object(r.useEffect)((function(){if(h.success){console.log(h);var e=h.response,t=e._id,n=e.name,c=e.region,r=e.location,a=e.date,i=e.begin,o=e.end,s=e.amount,l=e.description,j=e.totalLikes,u=e.likeState,d=y.map((function(e,d){return e._id===t?{_id:t,name:n,region:c,location:r,date:a,begin:i,end:o,amount:s,description:l,totalLikes:j,likeState:u}:e}));C(d),console.log(d)}}),[h]),Object(c.jsx)(c.Fragment,{children:a?Object(c.jsx)(B.a,{loading:!0,children:Object(c.jsx)(je.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})}):i?Object(c.jsx)(ue.a.Group,{children:y.filter((function(e){return e.region===t||"ALL"===t})).map((function(e,n){return Object(c.jsxs)(ue.a,{color:be[t],children:[Object(c.jsxs)(ue.a.Content,{children:[Object(c.jsx)(v.a,{icon:!0,floated:"right",basic:!0,color:be[t],onClick:function(){return c=e._id,r="".concat(t,"-").concat(n),console.log(r),void x(u+"/event/single?id=".concat(c),"GET",null,{authorization:d,"content-type":"application/json"});var c,r},children:Object(c.jsx)(m.a,{name:"refresh"})}),Object(c.jsx)(ue.a.Header,{children:e.name}),Object(c.jsx)(ue.a.Meta,{children:e.location}),Object(c.jsxs)(ue.a.Description,{children:[Object(c.jsx)("strong",{children:"date: "}),e.date,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"amount: "}),e.amount,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"description: "}),e.description]})]}),Object(c.jsx)(ue.a.Content,{extra:!0,children:Object(c.jsx)(de,{totalLikes:e.totalLikes,likeState:e.likeState,evtId:e._id})})]},"".concat(t,"-").concat(n))}))}):o?Object(c.jsx)(I.a,{negative:!0,children:l}):null})},he=n(160),xe=n(212),ge=n(210),pe=function(){var e=Object(s.c)((function(e){return e.user})).token,t=R("json"),n=Object(g.a)(t,2),a=n[0],i=n[1],o=Object(r.useState)([]),l=Object(g.a)(o,2),j=l[0],d=l[1],b=Object(r.useState)(""),O=Object(g.a)(b,2),h=O[0],x=O[1],p=Object(r.useState)(!1),f=Object(g.a)(p,2),y=f[0],C=f[1],S=Object(r.useState)(!1),k=Object(g.a)(S,2),w=k[0],E=k[1],N=Object(r.useState)(null),M=Object(g.a)(N,2),A=M[0],L=M[1];a.isInit()&&i(u+"/event/mine","GET",null,{authorization:e,"content-type":"application/json"});var T=function(){console.log("refresh"),i(u+"/event/mine","GET",null,{authorization:e,"content-type":"application/json"}),L(null),E(!1),C(!1),x("")};return Object(r.useEffect)((function(){if(console.log(a),a.success){if(!0===a.response.delete)return void T();if(!0===a.response.revise)return void T();typeof a.response===typeof[]&&(console.log("conn: ",a.response),d(Object(he.a)(a.response)))}}),[a.response]),Object(c.jsxs)(c.Fragment,{children:[a.loading?Object(c.jsx)(B.a,{loading:!0,children:Object(c.jsx)(je.a,{src:"https://react.semantic-ui.com/images/wireframe/paragraph.png"})}):a.success?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(ue.a.Group,{children:j.map((function(e,t){return Object(c.jsxs)(ue.a,{color:"black",children:[Object(c.jsxs)(ue.a.Content,{children:[Object(c.jsx)(v.a,{icon:!0,floated:"right",basic:!0,color:"black",onClick:function(){return T(e._id,"MINE-".concat(t))},children:Object(c.jsx)(m.a,{name:"refresh"})}),Object(c.jsx)(ue.a.Header,{children:e.name}),Object(c.jsx)(ue.a.Meta,{children:e.location}),Object(c.jsxs)(ue.a.Description,{children:[Object(c.jsx)("strong",{children:"date: "}),e.date,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"amount: "}),e.amount,Object(c.jsx)("br",{}),Object(c.jsx)("strong",{children:"description: "}),e.description]})]}),Object(c.jsx)(ue.a.Content,{extra:!0,children:Object(c.jsxs)("div",{className:"ui two buttons",children:[Object(c.jsx)(v.a,{basic:!0,color:"green",onClick:function(){return function(e){C(!0),L(e)}(e)},children:"Revise"}),Object(c.jsx)(v.a,{basic:!0,color:"red",onClick:function(){return function(e){E(!0),L(e)}(e)},children:"Delete"})]})})]},"MINE-".concat(t))}))})}):a.error?Object(c.jsx)(I.a,{negative:!0,children:a.errMsg}):null,Object(c.jsx)(xe.a,{open:w,onCancel:function(){L(null),E(!1)},onConfirm:function(){return i(u+"/event/delete?id=".concat(A._id),"POST",null,{authorization:e,"content-type":"application/json"}),L(null),void E(!1)}}),Object(c.jsxs)(Y.a,{size:"tiny",open:y,onClose:function(){C(!1),L(null),x(0)},children:[Object(c.jsx)(Y.a.Header,{children:"Revise amount"}),Object(c.jsx)(Y.a.Content,{children:Object(c.jsx)(ge.a,{type:"text",placeholder:"type in new amount",onChange:function(e){x(e.target.value)}})}),Object(c.jsxs)(Y.a.Actions,{children:[Object(c.jsx)(v.a,{floated:"left",content:"Confirm revise",primary:!0,onClick:function(){return function(){if(isNaN(h)||""===h)alert("please input a number!");else{var t=Math.round(parseInt(h));console.log(A),console.log(t);var n={amount:t};i(u+"/event/revise?id=".concat(A._id),"POST",JSON.stringify(n),{authorization:e,"content-type":"application/json"}),L(null),C(!1),x("")}}()}}),Object(c.jsxs)(v.a,{onClick:function(){C(!1),x(0),L(null)},color:"red",children:[Object(c.jsx)(m.a,{name:"close"})," close"]})]})]})]})},fe=["ALL","E","N","M","S","SE","W","CZ"],me={MAP:"grey",ALL:"black",E:"red",N:"blue",M:"green",S:"brown",SE:"purple",W:"orange",CZ:"teal"},ve=function(){var e=Object(s.c)((function(e){return e.user})).token,t=Object(r.useState)("MAP"),n=Object(g.a)(t,2),a=n[0],i=n[1],o=R("json"),l=Object(g.a)(o,2),j=l[0],d=l[1],b=Object(r.useState)([]),O=Object(g.a)(b,2),h=(O[0],O[1]);j.isInit()&&d(u+"/event/all","GET",null,{authorization:e,"content-type":"application/json"}),Object(r.useEffect)((function(){console.log(j),j.success&&(console.log("Get response: ".concat(j.response)),h(j.response||[]))}),[j]);var x=function(e){i(e)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{children:[Object(c.jsxs)(p.a,{pointing:!0,secondary:!0,children:[Object(c.jsx)(p.a.Item,{name:"MAP",active:"MAP"===a,onClick:function(){return x("MAP")}}),fe.map((function(e,t){return Object(c.jsx)(p.a.Item,{name:e,color:me[e],active:a===e,onClick:function(){return x(e)}},t)})),Object(c.jsx)(p.a.Menu,{position:"right",children:Object(c.jsx)(p.a.Item,{name:"MINE",active:"MINE"===a,onClick:function(){return x("MINE")}})})]}),"MAP"===a?Object(c.jsx)(B.a,{color:me[a],children:Object(c.jsx)(le,{select:x})}):"MINE"===a?Object(c.jsx)(pe,{}):Object(c.jsx)(Oe,{region:a,connection:j})]})})},ye=function(){return Object(c.jsx)(c.Fragment,{})},Ce=function(){return Object(c.jsx)(c.Fragment,{})},Se=function(e){switch(e.selection){case"Find":return Object(c.jsx)(ve,{});case"Create":return Object(c.jsx)(ie,{});case"Account":return Object(c.jsx)(ye,{});case"About":return Object(c.jsx)(Ce,{});default:return Object(c.jsx)(c.Fragment,{children:" "})}},ke=function(){var e=Object(r.useRef)(null),t=Object(r.useState)("Find"),n=Object(g.a)(t,2),a=n[0],i=n[1],o=function(e){console.log(e),i(e)};return Object(c.jsx)("div",{style:{paddingTop:"2vh",paddingLeft:"2vh",paddingRight:"2vh"},ref:e,children:Object(c.jsx)(k.a,{columns:4,divided:!0,children:Object(c.jsxs)(k.a.Row,{children:[Object(c.jsx)(k.a.Column,{width:4,style:{paddingRight:"0px",zIndex:"1"},children:Object(c.jsx)(U.a,{context:e,children:Object(c.jsxs)(p.a,{fluid:!0,vertical:!0,tabular:!0,children:[Object(c.jsx)(p.a.Item,{name:"Find",active:"Find"===a,onClick:function(e,t){var n=t.name;return o(n)},children:Object(c.jsxs)(f.a,{as:"h4",style:{padding:"1vh"},children:[Object(c.jsx)(m.a,{name:"search"}),Object(c.jsx)(f.a.Content,{children:"Find"})]})}),Object(c.jsx)(p.a.Item,{name:"Create",active:"Create"===a,onClick:function(e,t){var n=t.name;return o(n)},children:Object(c.jsxs)(f.a,{as:"h4",style:{padding:"1vh"},children:[Object(c.jsx)(m.a,{name:"bullhorn"}),Object(c.jsx)(f.a.Content,{children:"Create"})]})}),Object(c.jsx)(p.a.Item,{name:"Account",active:"Account"===a,onClick:function(e,t){var n=t.name;return o(n)},children:Object(c.jsxs)(f.a,{as:"h4",style:{padding:"1vh"},children:[Object(c.jsx)(m.a,{name:"user circle"}),Object(c.jsx)(f.a.Content,{children:"Account"})]})}),Object(c.jsx)(p.a.Item,{name:"About",active:"About"===a,onClick:function(e,t){var n=t.name;return o(n)},children:Object(c.jsxs)(f.a,{as:"h4",style:{padding:"1vh"},children:[Object(c.jsx)(m.a,{name:"info circle"}),Object(c.jsx)(f.a.Content,{children:"About"})]})})]})})}),Object(c.jsx)(Z.a,{vertical:!0}),Object(c.jsx)(k.a.Column,{stretched:!0,width:12,children:Object(c.jsx)(B.a,{children:Object(c.jsx)(Se,{selection:a})})})]})})})};var Ie=Object(s.b)((function(e){return{hasLoggedIn:void 0!==e.user.token}}))((function(e){var t=e.hasLoggedIn;return Object(c.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:Object(c.jsxs)(x.a,{children:[Object(c.jsx)(S,{}),Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.b,{exact:!0,path:"/",children:t?Object(c.jsx)(ke,{}):Object(c.jsx)(W,{})}),Object(c.jsx)(h.b,{exact:!0,path:"/login",children:function(e){var t=e.location,n=new URLSearchParams(t.search),r=[n.get("email"),n.get("password")],a=r[0],i=r[1];return a&&i?Object(c.jsx)(_,{email:a,password:i}):Object(c.jsx)(G,{})}}),Object(c.jsx)(h.b,{exact:!0,path:"/register",children:Object(c.jsx)(z,{})}),Object(c.jsx)(h.b,{path:"/:unknown",children:function(e){var t=e.match;return Object(c.jsx)("strong",{children:"".concat(t.params.unknown," Not Found!")})}})]})]})})})),we=(n(197),function(){try{var e=localStorage.getItem("".concat(d,"-state"));if(null===e)return;var t=parseInt(localStorage.getItem("".concat(d,"-expiration")));return!isNaN(t)&&Date.now()<t?JSON.parse(e):(localStorage.removeItem("".concat(d,"-state")),void localStorage.removeItem("".concat(d,"-expiration")))}catch(n){return void console.error(n)}}()),Ee=Object(o.c)(j,we);Ee.subscribe(O()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("".concat(d,"-state"),t);var n=Date.now()+864e5;localStorage.setItem("".concat(d,"-expiration"),n.toString())}catch(c){console.error(c)}}({user:Ee.getState().user})}),1e3)),i.a.render(Object(c.jsx)(s.a,{store:Ee,children:Object(c.jsx)(Ie,{})}),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.8f8c17fa.chunk.js.map