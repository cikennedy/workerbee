(this.webpackJsonpworkerbee=this.webpackJsonpworkerbee||[]).push([[0],{307:function(e,t){},309:function(e,t){},334:function(e,t){},336:function(e,t){},364:function(e,t){},366:function(e,t){},367:function(e,t){},372:function(e,t){},374:function(e,t){},380:function(e,t){},382:function(e,t){},401:function(e,t){},413:function(e,t){},416:function(e,t){},451:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),o=a(1);var s=function(){return Object(o.jsx)("main",{id:"main",children:Object(o.jsx)("section",{id:"contact",className:"contact",children:Object(o.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h2",{children:"Account Info"})}),Object(o.jsxs)("div",{className:"row mt-1",children:[Object(o.jsx)("div",{className:"col-lg-4",children:Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"address",children:[Object(o.jsx)("i",{className:"icofont-google-map"}),Object(o.jsx)("h4",{children:"Location:"}),Object(o.jsx)("p",{children:"127 N. Walnut St., Itasca, IL 60143 - USA"})]}),Object(o.jsxs)("div",{className:"email",children:[Object(o.jsx)("i",{className:"icofont-envelope"}),Object(o.jsx)("h4",{children:"Email:"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"mailto:tschmidt@eceglobal.com",children:"tschmidt@eceglobal.com"})})]}),Object(o.jsxs)("div",{className:"phone",children:[Object(o.jsx)("i",{className:"icofont-phone"}),Object(o.jsx)("h4",{children:"Call:"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:"tel:+17735517786"}),"+1 773-551-7786"]})]})]})}),Object(o.jsx)("div",{className:"col-lg-8 mt-5 mt-lg-0",children:Object(o.jsxs)("form",{action:"forms/contact.php",method:"post",role:"form",className:"php-email-form",children:[Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsxs)("div",{className:"col-md-6 form-group",children:[Object(o.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"col-md-6 form-group",children:[Object(o.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(o.jsx)("div",{className:"validate"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("div",{className:"loading",children:"Loading"}),Object(o.jsx)("div",{className:"error-message"}),Object(o.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{type:"submit",children:"Return to Login"})})]})})]})]})})})},l=a(56),d=a.n(l),j=a(87),m=a(24),b=a(25),p=a(35),u=a(513),h=a(499),x=a(496),g=a(510),O=a(497),f=a(511),v=a(500),y=a(244),C=a(494),N=a(89),k=a.n(N),w=a(245),S=a(491),T=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://i.imgur.com/icEZhs1.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var W=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],i=T();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.email,c=a.password,!n||!c){e.next=8;break}return e.next=6,fetch("/api/users/signin",{method:"POST",body:JSON.stringify({email:n,password:c}),headers:{"Content-Type":"application/json"}});case 6:(i=e.sent).ok?(console.log("Successful Sign In"),document.location.replace("/home")):alert(i.statusText);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(C.a,{container:!0,component:"main",className:i.root,children:[Object(o.jsx)(x.a,{}),Object(o.jsx)(C.a,{item:!0,xs:!1,sm:4,md:7,className:i.image}),Object(o.jsx)(C.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,children:Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(u.a,{className:i.avatar,children:Object(o.jsx)(k.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"signinemail",label:"Email Address",name:"email",autoComplete:"email",onChange:r,autoFocus:!0}),Object(o.jsx)(g.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"signinpassword",autoComplete:"current-password",onChange:r}),Object(o.jsx)(O.a,{control:Object(o.jsx)(f.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign In"}),Object(o.jsx)(C.a,{container:!0,children:Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(v.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})]})},P=a(502),B=a(504),D=a(503),A=a(501);var I=a(57),q=a.n(I),E=a(20),J=(a(284),Object(S.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})));function L(){var e=J(),t=Object(E.f)(),a=Object(n.useState)([]),i=Object(p.a)(a,2),r=i[0],s=i[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){q.a.get("/api/jobs").then((function(e){var t=e.data;s((function(){return t}))})).catch((function(e){return console.log(e)}))};return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(x.a,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:e.heroContent,children:Object(o.jsxs)(A.a,{maxWidth:"sm",children:[Object(o.jsx)(w.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Workerbee"}),Object(o.jsx)(w.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Here are the jobs available in your area."}),Object(o.jsx)("div",{className:e.heroButtons,children:Object(o.jsxs)(C.a,{container:!0,spacing:2,justifyContent:"center",children:[Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(h.a,{href:"/Newjob",variant:"contained",color:"primary",children:"Post a Job"})}),Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(h.a,{variant:"outlined",color:"primary",children:"Sort by"})})]})})]})}),Object(o.jsx)(A.a,{className:e.cardGrid,maxWidth:"md",children:Object(o.jsx)(C.a,{container:!0,spacing:4,children:r.map((function(a){return Object(o.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(o.jsxs)(P.a,{className:e.card,children:[Object(o.jsxs)(D.a,{className:e.cardContent,children:[Object(o.jsx)(w.a,{variant:"h6",color:"inherit",children:a.job_title}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["Category: ",a.category]}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["Address: ",a.address]}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["$",a.pay]})]}),Object(o.jsxs)(B.a,{children:[Object(o.jsx)(h.a,{onClick:function(){var e;e="/details/"+a._id,t.push(e)},size:"small",color:"primary",children:"Details"}),Object(o.jsx)(h.a,{href:"/confirmation/"+a._id,size:"small",color:"primary",children:"Apply"})]})]})},a._id)}))})})]})]})}var M=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var R=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],i=M();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.username,c=a.email,i=a.password,!(n&&c&&i)){e.next=9;break}return e.next=7,fetch("/api/users/signup",{method:"POST",body:JSON.stringify({username:n,email:c,password:i}),headers:{"Content-Type":"application/json"}});case 7:(r=e.sent).ok?(console.log("Account Generated."),document.location.replace("/home")):alert(r.statusText);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(o.jsx)(x.a,{}),Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(u.a,{className:i.avatar,children:Object(o.jsx)(k.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsxs)(C.a,{container:!0,spacing:2,children:[Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"signupusername",label:"Username",name:"username",autoComplete:"username",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"signupemail",label:"Email Address",name:"email",autoComplete:"email",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"signuppassword",autoComplete:"current-password",onChange:r})})]}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign Up"}),Object(o.jsx)(C.a,{container:!0,justify:"flex-end",children:Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(v.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},G=a(233),_=a.n(G),z=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),F=[{label:"Lawn Care",value:"Lawn Care"},{label:"Auto Care",value:"Auto Care"},{label:"Moving Help",value:"Moving Help"}];var Y=function(){var e=Object(n.useState)({}),t=Object(p.a)(e,2),a=t[0],c=t[1],i=z();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i,r,o,s,l,j,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.job_title,c=a.category,i=a.description,r=a.address,o=a.phone,s=a.email,l=a.duration,j=a.pay,console.log(c),console.log(a),!(n&&c&&i&&r&&o&&s&&l&&j)){e.next=17;break}return console.log("inside if"),e.next=15,fetch("/api/jobs",{method:"POST",body:JSON.stringify({job_title:n,category:c,description:i,address:r,phone:o,email:s,duration:l,pay:j}),headers:{"Content-Type":"application/json"}});case 15:(m=e.sent).ok?(console.log("Job Posted."),document.location.replace("/home")):alert(m.statusText);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(A.a,{component:"main",maxWidth:"xs",children:[Object(o.jsx)(x.a,{}),Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(u.a,{className:i.avatar,children:Object(o.jsx)(k.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Post a New Job"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsxs)(C.a,{container:!0,spacing:2,children:[Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"job_title",label:"Job Title",name:"job_title",autoComplete:"Job Title",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(_.a,{label:"Category",onChange:function(e){return function(e){console.log(e);var t=e[0].value;c(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},"category",t)))}(e)},options:F})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"description",label:"Description",name:"description",autoComplete:"description",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",autoComplete:"phone",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,id:"duration",label:"Duration (Minutes)",name:"duration",autoComplete:"duration",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,name:"pay",label:"Pay",type:"pay",id:"pay",autoComplete:"pay",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{variant:"outlined",required:!0,fullWidth:!0,name:"date",label:"Date",type:"date",id:"date",autoComplete:"date",onChange:r})})]}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Post Job"})]})]})]})},H=a(236),U=a.n(H),V=a(238),$=a.n(V),X=a(237),Z=a.n(X),K=a(505),Q=a(498);a(146),Object(S.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));Object(S.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(m.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));a(506),a(507),a(512),Object(S.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});a(508);var ee=a(242),te=(a(235),a(6)),ae=["classes"];w.a,w.a,w.a,w.a,w.a,v.a,Object(te.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(ee.a)(e,ae);return Object(o.jsx)("li",{className:t.listItem,children:Object(o.jsx)(w.a,Object(b.a)({component:"span"},a))})}));Object(S.a)((function(e){return{markdown:Object(b.a)(Object(b.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));Object(S.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function ne(){return Object(o.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(o.jsx)(v.a,{color:"inherit",href:"https://nameless-reef-77530.herokuapp.com/",children:"Workerbee"})," ",(new Date).getFullYear(),"."]})}var ce=Object(S.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(6,0)}}}));function ie(e){var t=ce(),a=e.description,n=e.title;return Object(o.jsx)("footer",{className:t.footer,children:Object(o.jsxs)(A.a,{maxWidth:"lg",children:[Object(o.jsx)(w.a,{variant:"h6",align:"center",gutterBottom:!0,children:n}),Object(o.jsx)(w.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:a}),Object(o.jsx)(ne,{})]})})}a.p,a.p,a.p,Object(S.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),U.a,Z.a,$.a;var re=function(){return Object(o.jsx)("main",{id:"main",children:Object(o.jsx)("section",{id:"contact",className:"contact",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h2",{children:"Job Confirmation"})}),Object(o.jsxs)("div",{className:"section-title",children:[Object(o.jsx)("h2",{children:"You successfully signed up for the job!"}),Object(o.jsx)("h3",{children:"An email confirmation has been sent to your contact."})]})]})})})},oe=Object(S.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},mainGrid:{marginTop:e.spacing(3)}}}));function se(e){var t=oe(),a=Object(n.useState)({}),c=Object(p.a)(a,2),i=c[0],r=c[1],s=Object(E.g)().id;return Object(n.useEffect)((function(){q.a.get("/api/jobs/"+s).then((function(e){var t=e.data;r((function(){return t}))})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:" Testingg!!"}),Object(o.jsx)(x.a,{}),Object(o.jsx)(A.a,{maxWidth:"lg",children:Object(o.jsxs)("main",{children:[Object(o.jsx)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i.job_title}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Category: ",i.category]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Description: ",i.description]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Address: ",i.address]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Phone#: ",i.phone]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Email: ",i.email]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Est. Duration: ",i.duration]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Pay: $",i.pay]}),Object(o.jsx)(h.a,{href:"/Confirmation/"+i._id,size:"small",color:"primary",children:"Apply"}),Object(o.jsx)(C.a,{container:!0,spacing:5,className:t.mainGrid})]})}),Object(o.jsx)(ie,{title:"Workerbee"})]})}var le=a(21),de=a(509),je=a(51),me=a(514),be=a(241),pe=a(239),ue=a.n(pe),he=a(149),xe=a.n(he),ge=a(240),Oe=a.n(ge),fe=Object(S.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(m.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(m.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(le.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(le.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(m.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(m.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ve(){var e=fe(),t=c.a.useState(null),a=Object(p.a)(t,2),n=a[0],i=a[1],r=c.a.useState(null),s=Object(p.a)(r,2),l=s[0],d=s[1],j=Boolean(n),m=Boolean(l),b=function(e){i(e.currentTarget)},u=function(){d(null)},x=function(){i(null),u()},g="primary-search-account-menu",O=Object(o.jsxs)(be.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:x,children:[Object(o.jsx)(me.a,{onClick:x,children:Object(o.jsx)(h.a,{component:je.b,to:"/newjob",children:" New Job "})}),Object(o.jsx)(me.a,{onClick:x,children:Object(o.jsx)(h.a,{component:je.b,to:"/account",children:" Account "})})]}),f="primary-search-account-menu-mobile",v=Object(o.jsx)(be.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:f,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:u,children:Object(o.jsxs)(me.a,{onClick:b,children:[Object(o.jsx)(Q.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(o.jsx)(xe.a,{})}),Object(o.jsx)("p",{children:"Profile"})]})});return Object(o.jsxs)("div",{className:e.grow,children:[Object(o.jsx)(de.a,{position:"static",children:Object(o.jsxs)(K.a,{children:[Object(o.jsxs)(Q.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer",children:[Object(o.jsx)(ue.a,{}),Object(o.jsx)(h.a,{component:je.b,to:"/home",children:" Home "}),Object(o.jsx)(h.a,{component:je.b,to:"/account",children:" Account "}),Object(o.jsx)(h.a,{component:je.b,to:"/newjob",children:" New Job "})]}),Object(o.jsx)(w.a,{className:e.title,variant:"h6",noWrap:!0,children:"Workerbee"}),Object(o.jsx)("div",{className:e.grow}),Object(o.jsx)("div",{className:e.sectionDesktop,children:Object(o.jsx)(Q.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:b,color:"inherit",children:Object(o.jsx)(xe.a,{})})}),Object(o.jsx)("div",{className:e.sectionMobile,children:Object(o.jsx)(Q.a,{"aria-label":"show more","aria-controls":f,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(o.jsx)(Oe.a,{})})})]})}),v,O]})}var ye=function(){return Object(o.jsxs)(je.a,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(E.a,{exact:!0,path:["/home","/account","/newjob","/job","/confirmation"],component:ve}),Object(o.jsxs)(E.c,{children:[Object(o.jsx)(E.a,{exact:!0,path:"/",component:W}),Object(o.jsx)(E.a,{exact:!0,path:"/signup",component:R}),Object(o.jsx)(E.a,{exact:!0,path:"/home",component:L}),Object(o.jsx)(E.a,{exact:!0,path:"/account",component:s}),Object(o.jsx)(E.a,{exact:!0,path:"/newjob",component:Y}),Object(o.jsx)(E.a,{exact:!0,path:"/confirmation",component:re}),Object(o.jsx)(E.a,{exact:!0,path:"/details/:id",component:se})]})]}),Object(o.jsx)(E.a,{exact:!0,path:["/home","/account","/newjob","/confirmation"],component:ie})]})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,515)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ye,{})}),document.getElementById("root")),Ce()}},[[451,1,2]]]);
//# sourceMappingURL=main.b7724e2f.chunk.js.map