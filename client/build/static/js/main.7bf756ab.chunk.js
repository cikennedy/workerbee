(this.webpackJsonpworkerbee=this.webpackJsonpworkerbee||[]).push([[0],{308:function(e,t){},310:function(e,t){},335:function(e,t){},337:function(e,t){},365:function(e,t){},367:function(e,t){},368:function(e,t){},373:function(e,t){},375:function(e,t){},381:function(e,t){},383:function(e,t){},402:function(e,t){},414:function(e,t){},417:function(e,t){},455:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),r=a.n(i),o=a(1);var s=function(){return Object(o.jsx)("main",{id:"main",children:Object(o.jsx)("section",{id:"contact",className:"contact",children:Object(o.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h2",{children:"Account Info"})}),Object(o.jsxs)("div",{className:"row mt-1",children:[Object(o.jsx)("div",{className:"col-lg-4",children:Object(o.jsxs)("div",{className:"info",children:[Object(o.jsxs)("div",{className:"address",children:[Object(o.jsx)("i",{className:"icofont-google-map"}),Object(o.jsx)("h4",{}),Object(o.jsx)("p",{})]}),Object(o.jsxs)("div",{className:"email",children:[Object(o.jsx)("i",{className:"icofont-envelope"}),Object(o.jsx)("h4",{children:"Email:"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{})})]}),Object(o.jsxs)("div",{className:"phone",children:[Object(o.jsx)("i",{className:"icofont-phone"}),Object(o.jsx)("h4",{children:"Phone"}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{})})]})]})}),Object(o.jsx)("div",{className:"col-lg-8 mt-5 mt-lg-0",children:Object(o.jsxs)("form",{action:"forms/contact.php",method:"post",role:"form",className:"php-email-form",children:[Object(o.jsxs)("div",{className:"form-row",children:[Object(o.jsxs)("div",{className:"col-md-6 form-group",children:[Object(o.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"col-md-6 form-group",children:[Object(o.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(o.jsx)("div",{className:"validate"})]})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(o.jsx)("div",{className:"validate"})]}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("div",{className:"loading",children:"Loading"}),Object(o.jsx)("div",{className:"error-message"}),Object(o.jsx)("div",{className:"sent-message",children:"Your message has been sent. Thank you!"})]}),Object(o.jsx)("div",{className:"text-center",children:Object(o.jsx)("button",{type:"submit",children:"Return to Login"})})]})})]})]})})})},l=a(43),d=a.n(l),j=a(59),p=a(23),m=a(25),u=a(35),b=a(515),h=a(501),g=a(498),x=a(512),O=a(499),f=a(513),v=a(502),y=a(243),C=a(496),k=a(89),N=a.n(k),w=a(244),S=a(493),T=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://i.imgur.com/icEZhs1.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var W=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=T();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(p.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.email,c=a.password,!n||!c){e.next=8;break}return e.next=6,fetch("/api/users/signin",{method:"POST",body:JSON.stringify({email:n,password:c}),headers:{"Content-Type":"application/json"}});case 6:(i=e.sent).ok?(console.log("Successful Sign In"),document.location.replace("/home")):alert(i.statusText);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(C.a,{container:!0,component:"main",className:i.root,children:[Object(o.jsx)(g.a,{}),Object(o.jsx)(C.a,{item:!0,xs:!1,sm:4,md:7,className:i.image}),Object(o.jsx)(C.a,{item:!0,xs:12,sm:8,md:5,component:y.a,elevation:6,square:!0,children:Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(b.a,{className:i.avatar,children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"email",onChange:r,autoFocus:!0}),Object(o.jsx)(x.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",autoComplete:"current-password",onChange:r}),Object(o.jsx)(O.a,{control:Object(o.jsx)(f.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign In"}),Object(o.jsx)(C.a,{container:!0,children:Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(v.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})]})},B=a(504),P=a(507),D=a(506),A=a(505),I=a(503),E=a(74),M=a.n(E),J=a(20),q=(a(159),Object(S.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})));function L(){var e=q(),t=Object(J.f)(),a=Object(n.useState)([]),i=Object(u.a)(a,2),r=i[0],s=i[1];Object(n.useEffect)((function(){l()}),[]);var l=function(){M.a.get("/api/jobs").then((function(e){var t=e.data;s((function(){return t}))})).catch((function(e){return console.log(e)}))},d=function(e){t.push(e)};return Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)(g.a,{}),Object(o.jsxs)("main",{children:[Object(o.jsx)("div",{className:e.heroContent,children:Object(o.jsxs)(I.a,{maxWidth:"sm",children:[Object(o.jsx)(w.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0,children:"Workerbee"}),Object(o.jsx)(w.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0,children:"Here are the jobs available in your area."}),Object(o.jsx)("div",{className:e.heroButtons,children:Object(o.jsx)(C.a,{container:!0,spacing:2,justifyContent:"center",children:Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(h.a,{onClick:function(){d("/newjob")},variant:"contained",color:"primary",children:"Post a Job"})})})})]})}),Object(o.jsx)(I.a,{className:e.cardGrid,maxWidth:"md",children:Object(o.jsx)(C.a,{container:!0,spacing:4,children:r.map((function(a){return Object(o.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(o.jsxs)(B.a,{className:e.card,children:[Object(o.jsx)(A.a,{className:e.cardMedia,image:(n=a.category,"Auto Care"===n?"https://i.imgur.com/WRvdAxT.jpg":"Home/Lawn Care"===n?"https://i.imgur.com/2uOxjai.jpg":"Moving Help"===n?"https://i.imgur.com/H2au5ID.jpg":void 0)}),Object(o.jsxs)(D.a,{className:e.cardContent,children:[Object(o.jsx)(w.a,{variant:"h6",color:"inherit",children:a.job_title}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["Category: ",a.category]}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["Address: ",a.address]}),Object(o.jsxs)(w.a,{variant:"h6",color:"inherit",children:["$",a.pay]})]}),Object(o.jsxs)(P.a,{children:[Object(o.jsx)(h.a,{onClick:function(){d("/details/"+a._id)},size:"small",color:"primary",children:"Details"}),Object(o.jsx)(h.a,{onClick:function(){!function(e){var a={from:'"Workerbee" <workerbeeproject@gmail.com>',to:e,subject:"workerbee - Someone has applied to your poster job!",text:"Job Applied",html:"HTML BODY MESSAGE"};M.a.post("/api/mailer",a).then((function(e){t.push("/confirmation")}))}(a.email)},size:"small",color:"primary",children:"Apply"})]})]})},a._id);var n}))})})]})]})}var R=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var G=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=R();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(p.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.username,c=a.email,i=a.password,!(n&&c&&i)){e.next=9;break}return e.next=7,fetch("/api/users/signup",{method:"POST",body:JSON.stringify({username:n,email:c,password:i}),headers:{"Content-Type":"application/json"}});case 7:(r=e.sent).ok?(console.log("Account Generated."),document.location.replace("/home")):alert(r.statusText);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(I.a,{component:"main",maxWidth:"xs",children:[Object(o.jsx)(g.a,{}),Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(b.a,{className:i.avatar,children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsxs)(C.a,{container:!0,spacing:2,children:[Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"signupusername",label:"Username",name:"username",autoComplete:"username",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"signupemail",label:"Email Address",name:"email",autoComplete:"email",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"signuppassword",autoComplete:"current-password",onChange:r})})]}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign Up"}),Object(o.jsx)(C.a,{container:!0,justify:"flex-end",children:Object(o.jsx)(C.a,{item:!0,children:Object(o.jsx)(v.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},H=a(232),z=a.n(H),F=(a(441),Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}))),Y=[{label:"Home/Lawn Care",value:"Home/Lawn Care"},{label:"Auto Care",value:"Auto Care"},{label:"Moving Help",value:"Moving Help"}];var _=function(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=F();function r(e){var t=e.target,n=t.name,i=t.value;c(Object(m.a)(Object(m.a)({},a),{},Object(p.a)({},n,i)))}function s(){return(s=Object(j.a)(d.a.mark((function e(t){var n,c,i,r,o,s,l,j,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.job_title,c=a.category,i=a.description,r=a.address,o=a.phone,s=a.email,l=a.duration,j=a.pay,!(n&&c&&i&&r&&o&&s&&l&&j)){e.next=14;break}return e.next=12,fetch("/api/jobs",{method:"POST",body:JSON.stringify({job_title:n,category:c,description:i,address:r,phone:o,email:s,duration:l,pay:j}),headers:{"Content-Type":"application/json"}});case 12:(p=e.sent).ok?(alert("Job Posted"),document.location.replace("/home")):alert(p.statusText);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(I.a,{component:"main",maxWidth:"xs",children:[Object(o.jsx)(g.a,{}),Object(o.jsxs)("div",{className:i.paper,children:[Object(o.jsx)(b.a,{className:i.avatar,children:Object(o.jsx)(N.a,{})}),Object(o.jsx)(w.a,{component:"h1",variant:"h5",children:"Post a New Job"}),Object(o.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(o.jsxs)(C.a,{container:!0,spacing:2,children:[Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"job_title",label:"Job Title",name:"job_title",autoComplete:"Job Title",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(z.a,{placeholder:"Select Category...",label:"Category",onChange:function(e){return function(e){var t=e[0].value;c(Object(m.a)(Object(m.a)({},a),{},Object(p.a)({},"category",t)))}(e)},options:Y})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"description",label:"Description",name:"description",autoComplete:"description",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"address",label:"Address",name:"address",autoComplete:"address",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"phone",label:"Phone",name:"phone",type:"phone",autoComplete:"phone",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,id:"duration",label:"Duration (Minutes)",name:"duration",autoComplete:"duration",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"pay",label:"Pay (USD)",type:"pay",id:"pay",autoComplete:"pay",onChange:r})}),Object(o.jsx)(C.a,{item:!0,xs:12,children:Object(o.jsx)(x.a,{variant:"outlined",required:!0,fullWidth:!0,name:"date",label:"",type:"date",id:"date",autoComplete:"date",onChange:r})})]}),Object(o.jsx)(h.a,{onClick:function(e){return s.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Post Job"})]})]})]})},U=a(236),V=a.n(U),$=a(238),X=a.n($),Z=a(237),K=a.n(Z),Q=a(508),ee=a(500);a(234),Object(S.a)((function(e){return{toolbar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:e.spacing(1),flexShrink:0}}}));Object(S.a)((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(p.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0})}}));a(509),a(514),Object(S.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});a(510);var te=a(241),ae=(a(235),a(6)),ne=["classes"];w.a,w.a,w.a,w.a,w.a,v.a,Object(ae.a)((function(e){return{listItem:{marginTop:e.spacing(1)}}}))((function(e){var t=e.classes,a=Object(te.a)(e,ne);return Object(o.jsx)("li",{className:t.listItem,children:Object(o.jsx)(w.a,Object(m.a)({component:"span"},a))})}));Object(S.a)((function(e){return{markdown:Object(m.a)(Object(m.a)({},e.typography.body2),{},{padding:e.spacing(3,0)})}}));Object(S.a)((function(e){return{sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)}}}));function ce(){return Object(o.jsxs)(w.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(o.jsx)(v.a,{color:"inherit",href:"https://nameless-reef-77530.herokuapp.com/",children:"Workerbee"})," ",(new Date).getFullYear(),"."]})}var ie=Object(S.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(6,0)}}}));function re(e){var t=ie(),a=e.description,n=e.title;return Object(o.jsx)("footer",{className:t.footer,children:Object(o.jsxs)(I.a,{maxWidth:"lg",children:[Object(o.jsx)(w.a,{variant:"h6",align:"center",gutterBottom:!0,children:n}),Object(o.jsx)(w.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:a}),Object(o.jsx)(ce,{})]})})}a.p,a.p,a.p,Object(S.a)((function(e){return{mainGrid:{marginTop:e.spacing(3)}}})),V.a,K.a,X.a;var oe=function(){return Object(o.jsx)("main",{id:"main",children:Object(o.jsx)("section",{id:"contact",className:"contact",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"section-title",children:Object(o.jsx)("h2",{children:"Job Confirmation"})}),Object(o.jsxs)("div",{className:"section-title",children:[Object(o.jsx)("h2",{children:"You successfully signed up for the job!"}),Object(o.jsx)("h3",{children:"You will be notified if you are accepted."})]})]})})})},se=Object(S.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},mainGrid:{marginTop:e.spacing(3)},homeBtn:{marginLeft:e.spacing(3)}}}));function le(e){var t=se(),a=Object(J.f)(),c=Object(n.useState)({}),i=Object(u.a)(c,2),r=i[0],s=i[1],l=Object(J.g)().id;Object(n.useEffect)((function(){M.a.get("/api/jobs/"+l).then((function(e){var t=e.data;s((function(){return t}))})).catch((function(e){return console.log(e)}))}),[]);return Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a,{}),Object(o.jsx)(I.a,{maxWidth:"lg",children:Object(o.jsxs)("main",{children:[Object(o.jsxs)(w.a,{className:t.heroContent,gutterBottom:!0,variant:"h2",component:"h2",children:[" ","Job Details"]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Job Title:"})," ",r.job_title]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Category:"})," ",r.category]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Description:"})," ",r.description]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Address:"})," ",r.address]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Phone#:"})," ",r.phone]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Email:"})," ",r.email]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Est. Duration:"})," ",r.duration]}),Object(o.jsxs)(w.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[Object(o.jsx)("strong",{children:"Pay:"})," $",r.pay]}),Object(o.jsx)(h.a,{variant:"contained",onClick:function(){!function(e){var t={from:'"Workerbee" <workerbeeproject@gmail.com>',to:e,subject:"workerbee - Someone has applied to your poster job!",text:"Job Applied",html:"HTML BODY MESSAGE"};M.a.post("/api/mailer",t).then((function(e){a.push("/confirmation")}))}(r.email)},size:"large",color:"primary",children:"Apply"}),Object(o.jsx)(h.a,{className:t.homeBtn,onClick:function(){var e;e="/home",a.push(e)},variant:"contained",size:"large",color:"default","margin-left":"25px",children:"Return to Home"}),Object(o.jsx)(C.a,{container:!0,spacing:5,className:t.mainGrid})]})}),Object(o.jsx)(re,{title:"Workerbee"})]})}var de=a(21),je=a(511),pe=a(58),me=a(516),ue=a(240),be=a(147),he=a.n(be),ge=a(239),xe=a.n(ge),Oe=Object(S.a)((function(e){return{root:{height:"100vh",submit:{margin:e.spacing(3,0,2)}}}}));var fe=function(){var e=Oe();function t(){return(t=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/api/users/signout",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:(a=e.sent).ok?(console.log("Successful Sign Out"),document.location.replace("/")):alert(a.statusText);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsx)(h.a,{onClick:function(e){return t.apply(this,arguments)},fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Log Out"})},ve=Object(S.a)((function(e){var t;return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:(t={display:"none"},Object(p.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(p.a)(t,"align","center"),t),navItem:{color:"white",display:"flex"},search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(de.a)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(de.a)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(p.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(p.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ye(){var e=ve(),t=c.a.useState(null),a=Object(u.a)(t,2),n=a[0],i=a[1],r=c.a.useState(null),s=Object(u.a)(r,2),l=s[0],d=s[1],j=Boolean(n),p=Boolean(l),m=function(e){i(e.currentTarget)},b=function(){d(null)},g=function(){i(null),b()},x="primary-search-account-menu",O=Object(o.jsx)(ue.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:x,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:j,onClose:g,children:Object(o.jsx)(me.a,{onClick:g,children:Object(o.jsx)(fe,{})})}),f="primary-search-account-menu-mobile",v=Object(o.jsx)(ue.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:f,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:b,children:Object(o.jsxs)(me.a,{onClick:m,children:[Object(o.jsx)(ee.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(o.jsx)(he.a,{})}),Object(o.jsx)("p",{children:"Profile"})]})});return Object(o.jsxs)("div",{className:e.grow,children:[Object(o.jsx)(je.a,{position:"static",children:Object(o.jsxs)(Q.a,{children:[Object(o.jsx)(h.a,{component:pe.b,to:"/home",children:Object(o.jsx)(w.a,{className:e.navItem,variant:"h6",color:"inherit",noWrap:!0,children:"Home"})}),Object(o.jsx)(h.a,{component:pe.b,to:"/newjob",children:Object(o.jsx)(w.a,{className:e.navItem,variant:"h6",color:"inherit",noWrap:!0,children:"New Job"})}),Object(o.jsx)("div",{className:e.grow}),Object(o.jsx)("div",{className:e.sectionDesktop,children:Object(o.jsx)(ee.a,{edge:"end","aria-label":"account of current user","aria-controls":x,"aria-haspopup":"true",onClick:m,color:"inherit",children:Object(o.jsx)(he.a,{})})}),Object(o.jsx)("div",{className:e.sectionMobile,children:Object(o.jsx)(ee.a,{"aria-label":"show more","aria-controls":f,"aria-haspopup":"true",onClick:function(e){d(e.currentTarget)},color:"inherit",children:Object(o.jsx)(xe.a,{})})})]})}),v,O]})}var Ce=function(){return Object(o.jsxs)(pe.a,{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(J.a,{exact:!0,path:["/home","/account","/newjob","/job","/confirmation"],component:ye}),Object(o.jsxs)(J.c,{children:[Object(o.jsx)(J.a,{exact:!0,path:"/",component:W}),Object(o.jsx)(J.a,{exact:!0,path:"/signup",component:G}),Object(o.jsx)(J.a,{exact:!0,path:"/home",component:L}),Object(o.jsx)(J.a,{exact:!0,path:"/account",component:s}),Object(o.jsx)(J.a,{exact:!0,path:"/newjob",component:_}),Object(o.jsx)(J.a,{exact:!0,path:"/confirmation",component:oe}),Object(o.jsx)(J.a,{exact:!0,path:"/details/:id",component:le})]})]}),Object(o.jsx)(J.a,{exact:!0,path:["/home","/account","/newjob","/confirmation"],component:re})]})},ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,517)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(Ce,{})}),document.getElementById("root")),ke()}},[[455,1,2]]]);
//# sourceMappingURL=main.7bf756ab.chunk.js.map