(this.webpackJsonpavocation=this.webpackJsonpavocation||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";var a=n(6),c=n(0);t.a=function(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)(a.b,{to:"/about",children:"Who We Are"}),Object(c.jsx)(a.b,{to:"/contact",children:"Contact Us"})]})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),s=n.n(r),o=(n(19),n(3)),i=n(6),l=n(2),u=n.p+"static/media/avocado_icon.7d4eb976.png",d=n(7),h=n(8),j=n(0),b=function(e){var t=e.user,n=e.setUser,c=Object(a.useState)(!1),r=Object(o.a)(c,2),s=r[0],l=r[1];return Object(j.jsxs)("header",{children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("img",{alt:"logo",src:u})}),Object(j.jsx)("h1",{children:"Avocation|"}),Object(j.jsx)("p",{children:"your bright side hobbies"}),Object(j.jsx)("div",{className:"user",children:t?Object(j.jsxs)("div",{className:"userAvatar",children:[Object(j.jsx)("img",{alt:"avatar",src:"male"===t.gender?h.a:d.a,onClick:function(){return l(!s)}}),Object(j.jsxs)("div",{className:(s?"show ":"")+"userOptions",children:[Object(j.jsxs)("h3",{children:["@",t.userName]}),Object(j.jsx)(i.b,{to:"/",onClick:function(){fetch("https://avocation.herokuapp.com/user",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){localStorage.removeItem("user"),localStorage.removeItem("expiryDate"),l(!1),n(!1)})).catch(console.log)},children:"Log Out"}),Object(j.jsx)("p",{onClick:function(e){if(l(!1),prompt("Sorry to see you leave T-T \n Enter your password to confirm","")!==t.password)return alert("password is not correct");fetch("https://avocation.herokuapp.com/user",{method:"DELETE",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.deleted?(localStorage.removeItem("user"),localStorage.removeItem("expiryDate"),n(!1),alert("your account and avocatas were deleted succesfully")):alert("couldn't delete your account, erro:",e.error)}))},style:{color:"red",marginTop:"10px",cursor:"pointer"},children:"Delete Account"})]})]}):Object(j.jsx)(i.b,{to:"/log-in",children:"Log In"})})]})},f=function(e){var t=e.setChosenCategs,n=e.user,c=Object(a.useState)([]),r=Object(o.a)(c,2),s=r[0],i=r[1];Object(a.useEffect)((function(){var e=new AbortController;return fetch("https://avocation.herokuapp.com/tags",{signal:e.signal}).then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return e.count>0})).sort((function(e,t){return t.count-e.count}));i(t.slice(0,5))})).catch(console.log),function(){return e.abort()}}),[]);return Object(j.jsxs)("aside",{onClick:function(e){if("BUTTON"===e.target.nodeName){e.target.classList.toggle("selected-categ");var n=Array.from(e.target.parentElement.getElementsByClassName("selected-categ")).map((function(e){return e.textContent}));t(n.length?n:[""])}},children:[n&&Object(j.jsx)("button",{style:{border:"solid rgb(124, 69, 32) 2px"},children:"Mine"}),s.map((function(e){return Object(j.jsx)("button",{children:e.tag},e.tag)}))]})},p=n(24),g=n(25),m=n(11),O=n(29),v=n(28),x=n.p+"static/media/loading.ecfdf316.gif",y=n.p+"static/media/\u0623\u0645\u064a.b50a9144.jpg",S=function(e){var t,n=e.data,c=e.user,r=e.users,s=e.avocatas,i=e.updataAvocatas,l=Object(a.useState)(!1),u=Object(o.a)(l,2),b=u[0],f=u[1],p=r.find((function(e){return e.userName===n.creator})),g=n.contentType;Object(a.useEffect)((function(){return function(){return URL.revokeObjectURL(t)}}),[t]);return Object(j.jsxs)("article",{className:"avocata",children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{src:"male"===p.gender?h.a:d.a,alt:"avatar"}),c&&p.logged&&Object(j.jsxs)("svg",{width:"18",height:"18",children:[" ",Object(j.jsx)("circle",{cx:"10",cy:"10",r:"35%",fill:"#19d154"})," "]}),Object(j.jsxs)("p",{children:[p.name,Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"date-created",children:n.createdAt.slice(0,10)})]}),b&&Object(j.jsx)("img",{alt:"loading..",src:x}),(null===c||void 0===c?void 0:c.userName)===p.userName&&Object(j.jsx)("button",{onClick:function(e){f(!0),fetch("https://avocation.herokuapp.com/avocata",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n._id})}).then((function(e){return e.json()})).then((function(e){f(!1),e.deleted?(i(s.filter((function(e){return e!==n}))),URL.revokeObjectURL(t)):(alert("couldn't be deleted"),console.log(e.error))})).catch(console.log)},children:"Delete"})]}),Object(j.jsxs)("div",{className:"content",children:[n.tags.indexOf("POE")>=0||n.tags.indexOf("\u0634\u0639\u0631")>=0?Object(j.jsx)("pre",{style:{textAlign:n.text.match(/\w/)?"left":"center"},children:n.text}):Object(j.jsx)("p",{style:{textAlign:n.text.match(/\w/)?"left":"center"},children:n.text}),"undefined"!==g&&function(){if("Azza"===n.creator)return Object(j.jsx)("img",{alt:"the most beautiful woman",src:y,className:"media",id:"mother"});var e=function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a<e.length;++a)n[a]=e[a];return t}(n.fileBuffer.data),a=new File([e],n.fileName,{type:g});return t=URL.createObjectURL(a),g.startsWith("image/")?Object(j.jsx)("img",{alt:n.fileName,src:t,className:"media"}):Object(j.jsx)("audio",{controls:!0,className:"media",children:Object(j.jsx)("source",{src:t,type:"audio/mpeg"})})}()]})]})},A=c.a.memo(S);var k=n(18),N=n.n(k),C=n(26),w=n(13),E=n(27),T=c.a.lazy((function(){return n.e(4).then(n.bind(null,47))})),U=function(e){var t=e.user,n=e.avocatas,r=e.updataAvocatas,s=Object(a.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],b=Object(a.useState)([]),f=Object(o.a)(b,2),p=f[0],g=f[1],m=Object(a.useRef)(null),O=Object(a.useState)(""),v=Object(o.a)(O,2),y=v[0],S=v[1],A=Object(a.useState)(!1),k=Object(o.a)(A,2),U=k[0],D=k[1],L=Object(a.useState)(!1),I=Object(o.a)(L,2),B=I[0],z=I[1];Object(a.useEffect)((function(){var e=new AbortController;return fetch("https://avocation.herokuapp.com/tags",{signal:e.signal}).then((function(e){return e.json()})).then((function(e){u(e.map((function(e){return e.tag})))})).catch(console.log),function(){return e.abort()}}),[]),Object(a.useEffect)((function(){m.current.addEventListener("change",(function(e){var t=e.target.files[0];if(!t)return z(!1);t.type.startsWith("image/")||"audio/mpeg"===t.type?t.size/1048576>8?(alert("file size it too big, files below 8MB only"),e.target.value=null,z(!1),S("")):(z(!0),S(t.name)):(alert("please upload an image or mp3 file only"),e.target.value=null,z(!1),S(""))}))}),[]);var F=function(){var e=Object(C.a)(N.a.mark((function e(a){var c,s,o,i,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),"Enter"!==a.key){e.next=3;break}return e.abrupt("return");case 3:if(D(!0),s=new FormData(a.target),!(o=s.get("media"))||!o.type.includes("image")){e.next=12;break}return i={maxSizeMB:1,maxWidthOrHeight:620},e.next=10,Object(E.a)(o,i);case 10:l=e.sent,s.set("media",l);case 12:s.append("creator",t.userName),s.append("tags",p.join(" ")),s.append("fileName",y),s.append("contentType",null===(c=m.current.files[0])||void 0===c?void 0:c.type),fetch("https://avocation.herokuapp.com/avocata",{method:"POST",body:s}).then((function(e){return e.json()})).then((function(e){D(!1),e.successful?(r([e.avocata].concat(Object(w.a)(n))),a.target.reset(),g([]),z(!1)):(alert("couldn't post the avocata "+e.error),console.log(e.error))})).catch(console.log);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{onSubmit:F,children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("img",{alt:"avatar",src:"male"===t.gender?h.a:d.a}),Object(j.jsx)("p",{children:t.name}),U&&Object(j.jsx)("img",{alt:"loading..",src:x})]}),Object(j.jsx)("textarea",{placeholder:"content/caption",required:!0,name:"text"}),Object(j.jsx)(c.a.Suspense,{fallback:Object(j.jsx)("div",{children:"loading..."}),children:Object(j.jsx)(T,{savedTags:l,saveTag:function(e){-1===l.indexOf(e)&&u([].concat(Object(w.a)(l),[e]))},addedTags:p,setAddedTags:g})}),B&&Object(j.jsx)("span",{className:"fileData",children:y}),Object(j.jsxs)("label",{id:"upload",children:[" Upload image/mp3",Object(j.jsx)("input",{type:"file",accept:"image/*,audio/mpeg",ref:m,name:"media"})]}),Object(j.jsx)("button",{children:"Publish"})]})},D=function(e){Object(O.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={avocatas:[],users:[]},a.controller=new AbortController,a.updataAvocatas=a.updataAvocatas.bind(Object(m.a)(a)),a.handleObserver=a.handleObserver.bind(Object(m.a)(a)),a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://avocation.herokuapp.com/users",{signal:this.controller.signal}).then((function(e){return e.json()})).then((function(t){e.setState({users:t}),fetch("https://avocation.herokuapp.com/all-avocatas",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({createdBefore:Date.now()}),signal:e.controller.signal}).then((function(e){return e.json()})).then((function(t){var n;t[0]._id!==(null===(n=e.state.avocatas[0])||void 0===n?void 0:n._id)&&e.updataAvocatas(t)})).catch((function(e){"AbortError"!==e.name&&console.log(e)}))})).catch((function(e){"AbortError"!==e.name&&console.log(e)}))}},{key:"componentDidUpdate",value:function(e,t){var n=this;if(0!==t.users.length){var a=new IntersectionObserver(this.handleObserver,{threeshold:.1}),c=document.getElementById("feed"),r=c.children[c.children.length-2];a.observe(r),fetch("https://avocation.herokuapp.com/users",{signal:this.controller.signal}).then((function(e){return e.json()})).then((function(e){(e.length>n.state.users.length||e.some((function(e,t){return e.logged!==n.state.users[t].logged})))&&n.setState({users:e})})).catch(console.log)}}},{key:"componentWillUnmount",value:function(){this.controller.abort()}},{key:"updataAvocatas",value:function(e){this.setState({avocatas:e}),document.getElementById("feed").lastElementChild.style.visibility="hidden"}},{key:"handleObserver",value:function(e,t){var n=this,a=document.getElementById("feed");null===e[0].target.querySelector("#mother")&&"FORM"!==e[0].target.nodeName&&e[0].isIntersecting&&(a.lastElementChild.style.visibility="visible",fetch("https://avocation.herokuapp.com/all-avocatas",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({createdBefore:this.state.avocatas[this.state.avocatas.length-1].createdAt}),signal:this.controller.signal}).then((function(e){return e.json()})).then((function(c){c.length>0&&c[0]._id!==n.state.avocatas[n.state.avocatas.length-1]._id&&n.updataAvocatas(n.state.avocatas.concat(c)),a.lastElementChild.style.visibility="hidden",t.unobserve(e[0].target)})).catch((function(e){"AbortError"!==e.name&&console.log(e)})))}},{key:"render",value:function(){var e=this;return this.state.users.length?Object(j.jsxs)("section",{id:"feed",children:[Object(j.jsx)(A,{user:!1,users:this.state.users,data:{text:"for my beloved Mother, who used to love avocado juice :)",creator:"Azza",tags:"THANKS",filename:"\u0623\u0645\u064a.jpg",contentType:"image/jpeg",createdAt:"Forever"}}),this.props.user&&Object(j.jsx)(U,{user:this.props.user,avocatas:this.state.avocatas,updataAvocatas:this.updataAvocatas}),this.state.avocatas.length>0&&this.state.avocatas.map((function(t){var n=e.props.chosenCategs;if(n.includes("mine")){if(t.creator!==e.props.user.userName)return null;n=e.props.chosenCategs.filter((function(e){return"mine"!==e}))}return n.some((function(e){return-1===t.tags.indexOf(e)}))?null:Object(j.jsx)(A,{data:t,user:e.props.user,users:e.state.users,avocatas:e.state.avocatas,updataAvocatas:e.updataAvocatas},t.createdAt)})),Object(j.jsx)("article",{style:{margin:"20px"},children:"Loading fresh avocatas..."})]}):Object(j.jsx)("section",{children:"loading..."})}}]),n}(c.a.Component),L=n(20),I=(n(44),function(e){var t=e.user,n=Object(a.useState)([""]),c=Object(o.a)(n,2),r=c[0],s=c[1];return Object(j.jsxs)("main",{id:"home",children:[Object(j.jsx)(f,{setChosenCategs:s,user:t}),Object(j.jsx)(D,{user:t,chosenCategs:r}),Object(j.jsx)(L.a,{})]})}),B=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,52))})),z=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,48))})),F=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,49))})),J=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,50))})),P=function(){var e,t=JSON.parse(localStorage.getItem("user"));t&&(e=new Date(localStorage.getItem("expiryDate"))>new Date);var n=Object(a.useState)(!!e&&t),r=Object(o.a)(n,2),s=r[0],u=r[1],d=Object(a.useState)([]),h=Object(o.a)(d,2),f=h[0],p=h[1];return Object(a.useEffect)((function(){fetch("https://avocation.herokuapp.com/express_backend").then((function(e){return e.json()})).then((function(e){return console.log(e.express)})).catch(console.log)}),[]),Object(a.useEffect)((function(){fetch("https://avocation.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){e.length>f.length&&p(e)})).catch((function(e){return console.log("error fetching users ",e)}))})),Object(j.jsx)(i.a,{basename:"/Avocation",children:Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(b,{user:s,setUser:u}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(I,{user:s})}),Object(j.jsxs)(a.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading...."}),children:[Object(j.jsx)(l.a,{exact:!0,path:"/sign-up",children:Object(j.jsx)(J,{users:f,setUsers:p})}),Object(j.jsx)(l.a,{exact:!0,path:"/log-in",children:Object(j.jsx)(F,{users:f,setUser:u})}),Object(j.jsx)(l.a,{exact:!0,path:"/about",children:Object(j.jsx)(B,{})}),Object(j.jsx)(l.a,{path:"/contact",children:Object(j.jsx)(z,{})})]})]})]})})},R=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,51)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root")),R()},7:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar-f.b8f900aa.png"},8:function(e,t,n){"use strict";t.a=n.p+"static/media/avatar-m.5eef229f.png"}},[[45,1,2]]]);
//# sourceMappingURL=main.7be1d77a.chunk.js.map