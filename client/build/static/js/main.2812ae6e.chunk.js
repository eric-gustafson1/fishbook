(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(20).concat([function(e,t,a){},,,,,,function(e,t,a){e.exports=a(57)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),c=a.n(l),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(31);var s=a(1),u=a(12),m=a(4),d=a(3),p=a.n(d),f=a(6),E=(a(33),function(e){return r.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},r.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),v=(a(34),function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}),h=(a(35),function(e){var t=e.id,a=e.image,n=e.name,l=e.tripCount;return r.a.createElement("li",{className:"user-item"},r.a.createElement(v,{className:"user-item__content"},r.a.createElement(m.b,{to:"/".concat(t,"/trips")},r.a.createElement("div",{className:"user-item__image"},r.a.createElement(E,{image:"".concat("https://fishbook.s3-us-west-2.amazonaws.com","/").concat(a),alt:n})),r.a.createElement("div",{className:"user-item__info"},r.a.createElement("h2",null,n),r.a.createElement("h3",null,l," ",1===l?"Trip":"Trips")))))}),b=(a(41),function(e){return 0===e.items.length?r.a.createElement("div",{className:"center"},r.a.createElement(v,null,r.a.createElement("h2",null,"No users found..."))):r.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,image:e.image,name:e.name,tripCount:e.trips.length})})))}),g=a(58),O=(a(42),function(e){return c.a.createPortal(r.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),w=(a(43),function(e){var t=r.a.createElement("div",{className:"modal ".concat(e.className),style:e.style},r.a.createElement("header",{className:"modal__header ".concat(e.headerClass)},r.a.createElement("h2",null,e.header)),r.a.createElement("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()}},r.a.createElement("div",{className:"modal__content ".concat(e.contentClass)},e.children),r.a.createElement("footer",{className:"modal__footer ".concat(e.footerClass)},e.footer)));return c.a.createPortal(t,document.getElementById("modal-hook"))}),k=function(e){return r.a.createElement(r.a.Fragment,null,e.show&&r.a.createElement(O,{onClick:e.onCancel}),r.a.createElement(g.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal"},r.a.createElement(w,e)))},j=(a(44),function(e){return e.href?r.a.createElement("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href},e.children):e.to?r.a.createElement(m.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger")},e.children):r.a.createElement("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled},e.children)}),y=function(e){return r.a.createElement(k,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:r.a.createElement(j,{onClick:e.onClear},"Okay")},r.a.createElement("p",null,e.error))},x=(a(45),function(e){return r.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},r.a.createElement("div",{className:"lds-dual-ring"}))}),N=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(),i=Object(s.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(),d=Object(s.a)(m,2),E=d[0],v=d[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/users"));case 4:return t=e.sent,e.next=7,t.json();case 7:if(a=e.sent,t.ok){e.next=10;break}throw new Error(a.message);case 10:v(a.users),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),l(!1),u(e.t0.message);case 17:l(!1);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:o,onClear:function(){u(null)}}),a&&r.a.createElement("div",{className:"center"},r.a.createElement(x,null)),!a&&E&&r.a.createElement(b,{items:E}))},I=a(11),C=function(e){return{type:"MINLENGTH",val:e}},T=function(e,t){var a=!0,n=!0,r=!1,l=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;"REQUIRE"===o.type&&(a=a&&e.trim().length>0),"MINLENGTH"===o.type&&(a=a&&e.trim().length>=o.val),"MAXLENGTH"===o.type&&(a=a&&e.trim().length<=o.val),"MIN"===o.type&&(a=a&&+e>=o.val),"MAX"===o.type&&(a=a&&+e<=o.val),"EMAIL"===o.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(s){r=!0,l=s}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a},S=(a(46),function(e,t){switch(t.type){case"CHANGE":return Object(I.a)({},e,{value:t.val,isValid:T(t.val,t.validators)});case"TOUCH":return Object(I.a)({},e,{isTouched:!0});default:return e}}),V=function(e){var t=Object(n.useReducer)(S,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(s.a)(t,2),l=a[0],c=a[1],i=e.id,o=e.onInput,u=l.value,m=l.isValid;Object(n.useEffect)((function(){o(i,u,m)}),[i,o,u,m]);var d=function(t){c({type:"CHANGE",val:t.target.value,validators:e.validators})},p=function(){c({type:"TOUCH"})},f="input"===e.element?r.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:p,value:l.value}):r.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:p,value:l.value});return r.a.createElement("div",{className:"form-control ".concat(!l.isValid&&l.isTouched&&"form-control--invalid")},r.a.createElement("label",{htmlFor:e.id},e.label),f,!l.isValid&&l.isTouched&&r.a.createElement("p",null,e.errorText))},_=a(14),D=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(I.a)({},e,{inputs:Object(I.a)({},e.inputs,Object(_.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},R=function(e,t){var a=Object(n.useReducer)(D,{inputs:e,isValid:t}),r=Object(s.a)(a,2),l=r[0],c=r[1];return[l,Object(n.useCallback)((function(e,t,a){c({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(n.useCallback)((function(e,t){c({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},L=Object(n.createContext)({isLoggedIn:!1,token:null,userId:null,login:function(){},logout:function(){}}),U=(a(47),function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(),o=Object(s.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),f=p[0],E=p[1],v=Object(n.useRef)();Object(n.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){m(e.result)},e.readAsDataURL(l)}}),[l]);return r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"file",id:e.id,ref:v,style:{display:"none"},accept:".jpg, .png, .jpeg",onChange:function(t){var a,n=f;t.target.files&&1===t.target.files.length?(a=t.target.files[0],c(a),E(!0),n=!0):(E(!1),n=!1),e.onInput(e.id,a,n)}}),r.a.createElement("div",{className:"imageUpload ".concat(e.center&&"center")},r.a.createElement("div",{className:"image-upload__preview"},u&&r.a.createElement("img",{src:u,alt:"preview"}),!u&&r.a.createElement("p",null,"Please upload an image..."))),r.a.createElement(j,{type:"button",onClick:function(){v.current.click()}},"SELECT IMAGE"),!f&&r.a.createElement("p",null,e.errorText))}),A=(a(20),function(){var e=Object(n.useContext)(L),t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),m=o[0],d=o[1],E=R({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},weather:{value:"",isValid:!1},flies:{value:"",isValid:!1},date:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),v=Object(s.a)(E,2),h=v[0],b=v[1],g=Object(u.g)(),O=function(){var t=Object(f.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),d(!0),(n=new FormData).append("title",h.inputs.title.value),n.append("description",h.inputs.description.value),n.append("address",h.inputs.address.value),n.append("weather",h.inputs.weather.value),n.append("flies",h.inputs.flies.value),n.append("date",h.inputs.date.value),n.append("image",h.inputs.image.value),t.prev=10,t.next=13,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/trips"),{method:"POST",body:n,headers:{Authorization:"Bearer "+e.token}});case 13:g.push("/"),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(10),d(!1),c(t.t0.message||"Something went wrong, try again.");case 20:d(!1);case 21:case"end":return t.stop()}}),t,null,[[10,16]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:l,onClear:function(){c(null)}}),m&&r.a.createElement(x,{asOverlay:!0}),r.a.createElement("form",{className:"trip-form",onSubmit:O},r.a.createElement(V,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Enter a title...",onInput:b}),r.a.createElement(V,{id:"description",element:"textarea",label:"Description",validators:[C(5)],errorText:"Enter a description...",onInput:b}),r.a.createElement(V,{id:"address",element:"input",label:"Nearest Town",validators:[{type:"REQUIRE"}],errorText:"Enter the nearest town...",onInput:b}),r.a.createElement(V,{id:"weather",element:"input",label:"Weather Conditions",validators:[{type:"REQUIRE"}],errorText:"Describe the weather...",onInput:b}),r.a.createElement(V,{id:"flies",element:"input",label:"Flies Used",validators:[{type:"REQUIRE"}],errorText:"What flies worked...",onInput:b}),r.a.createElement(V,{id:"date",element:"input",label:"Trip Date",type:"date",validators:[{type:"REQUIRE"}],errorText:"Enter the date...",onInput:b}),r.a.createElement(U,{id:"image",onInput:b,errorText:"Please provide an image..."}),r.a.createElement(j,{type:"submit",disabled:!h.isValid},"ADD TRIP")))}),P=(a(48),function(e){var t=Object(n.useRef)(),a=e.center,l=e.zoom;return Object(n.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:a,zoom:l});new window.google.maps.Marker({position:a,map:e})}),[a,l]),r.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),F=a(23),M=a.n(F),G=(a(50),function(e){var t=e.image,a=e.title,l=e.address,c=e.description,i=e.weather,o=e.flies,u=e.id,m=e.creatorId,d=e.coordinates,E=e.onDelete,h=e.date,b=Object(n.useContext)(L),g=Object(n.useState)(!1),O=Object(s.a)(g,2),w=O[0],N=O[1],I=Object(n.useState)(!1),C=Object(s.a)(I,2),T=C[0],S=C[1],V=Object(n.useState)(!1),_=Object(s.a)(V,2),D=_[0],R=_[1],U=Object(n.useState)(!1),A=Object(s.a)(U,2),F=A[0],G=A[1],z=function(){return N(!1)},H=function(){return S(!1)},W=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!1),e.prev=1,e.next=4,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/trips/").concat(u),{method:"DELETE",headers:{Authorization:"Bearer "+b.token}});case 4:E(u),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),G(!1),R(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:D,onClear:function(){R(null)}}),r.a.createElement(k,{show:w,onCancel:z,header:l,contentClass:"trip-item__modal-content",footerClass:"trip-item__modal-actions",footer:r.a.createElement(j,{onClick:z},"CLOSE")},r.a.createElement("div",{className:"map-container"},r.a.createElement(P,{center:d,zoom:16}))),r.a.createElement(k,{show:T,onCancel:H,header:"Confirm Delete",footerClass:"trip-item__modal-actions",footer:r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{inverse:!0,onClick:H},"CANCEL"),r.a.createElement(j,{danger:!0,onClick:W},"DELETE"))},r.a.createElement("p",null,"You are deleting this trip. Click DELETE to confirm.")),r.a.createElement("li",{className:"trip-item"},r.a.createElement(v,{className:"trip-item__content"},F&&r.a.createElement(x,{asOverlay:!0}),r.a.createElement("div",{className:"trip-item__image"},r.a.createElement("img",{className:"center",src:"".concat("https://fishbook.s3-us-west-2.amazonaws.com","/").concat(t),alt:a})),r.a.createElement("div",{className:"trip-item__info"},r.a.createElement("h2",null,a),r.a.createElement("h3",null,l),r.a.createElement("h4",null,M()(new Date(h)).add(1,"days").format("dddd, MMMM Do YYYY")),b.userId&&r.a.createElement("p",null,r.a.createElement("b",null,"Conditions: "),i),b.userId&&r.a.createElement("p",null,r.a.createElement("b",null,"Description: "),c),b.userId&&r.a.createElement("p",null,r.a.createElement("b",null,"Flies Used: "),o)),r.a.createElement("div",{className:"trip-item__actions"},r.a.createElement(j,{inverse:!0,onClick:function(){return N(!0)}},"VIEW ON MAP"),b.userId===m&&r.a.createElement(j,{to:"/trips/".concat(u)},"EDIT"),b.userId===m&&r.a.createElement(j,{danger:!0,onClick:function(){return S(!0)}},"DELETE")))))}),z=(a(51),function(e){return 0===e.items.length?r.a.createElement("div",{className:"trip-list center"},r.a.createElement(v,null,r.a.createElement("h2",null,"No trips found..."),r.a.createElement(j,{to:"/trips/new"},"Log a Trip"))):r.a.createElement("ul",{className:"trip-list"},e.items.map((function(t){return r.a.createElement(G,{key:t.id,id:t.id,image:t.image,title:t.title,date:t.date,weather:t.weather,flies:t.flies,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeleteTrip})})))}),H=function(){var e=Object(u.h)().userid,t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),m=o[0],d=o[1],E=Object(n.useState)(),v=Object(s.a)(E,2),h=v[0],b=v[1];Object(n.useEffect)((function(){(function(){var t=Object(f.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/trips/user/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:if(n=t.sent,a.ok){t.next=10;break}throw new Error(n.message);case 10:b(n.trips),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),d(!1),c(t.t0.message);case 17:d(!1);case 18:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}})()()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:l,onClear:function(){c(null)}}),m&&r.a.createElement("div",{className:"center"},r.a.createElement(x,null)),!m&&h&&r.a.createElement(z,{items:h,onDeleteTrip:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))}}))},W=(a(52),function(e){return r.a.createElement("header",{className:"main-header"},e.children)}),B=(a(53),function(e){var t=Object(n.useContext)(L);return r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(m.c,{to:"/".concat(t.userId,"/trips")},"MY TRIPS")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(m.c,{to:"/trips/new"},"NEW TRIP")),!t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(m.c,{to:"/auth"},"LOGIN")),t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement("button",{onClick:t.logout},"LOGOUT")))}),Q=(a(54),function(e){var t=r.a.createElement(g.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return c.a.createPortal(t,document.getElementById("drawer-hook"))}),J=(a(55),function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],i=function(){return c(!1)};return r.a.createElement(r.a.Fragment,null,l&&r.a.createElement(O,{onClick:i}),r.a.createElement(Q,{show:l,onClick:i},r.a.createElement("nav",{className:"main-navigation__drawer-nav"},r.a.createElement(B,null))),r.a.createElement(W,null,r.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){return c(!0)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("h1",{className:"main-navigation__title"},r.a.createElement(m.b,{to:"/"},"fishbook")),r.a.createElement("nav",{className:"main-navigation__header-nav"},r.a.createElement(B,null))))}),Y=function(){var e=Object(u.h)().pid,t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(),o=Object(s.a)(i,2),m=o[0],d=o[1],E=Object(n.useState)(),h=Object(s.a)(E,2),b=h[0],g=h[1],O=Object(u.g)(),w=Object(n.useContext)(L),k=R({title:{value:"",isValid:!1},description:{value:"",isValid:!1},weather:{value:"",isValid:!1},flies:{value:"",isValid:!1},date:{value:"",isValid:!1}},!1),N=Object(s.a)(k,3),I=N[0],T=N[1],S=N[2];Object(n.useEffect)((function(){(function(){var t=Object(f.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/trips/").concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:if(n=t.sent,a.ok){t.next=9;break}throw new Error(n.message);case 9:g(n.trip),S({title:{value:n.trip.title,isValid:!0},description:{value:n.trip.description,isValid:!0},weather:{value:n.trip.weather,isValid:!0},flies:{value:n.trip.flies}},!0),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),c(!1),d(t.t0.message);case 17:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var _=function(){var t=Object(f.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/trips/").concat(e),{method:"PATCH",body:JSON.stringify({title:I.inputs.title.value,description:I.inputs.description.value,weather:I.inputs.weather.value,flies:I.inputs.flies.value}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+w.token}});case 4:O.push("/"+w.userId+"/trips"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),c(!1),d(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();if(l)return r.a.createElement("div",{className:"center"},r.a.createElement(x,null));if(!b&&!m)return r.a.createElement("div",{className:"center"},r.a.createElement(v,null,r.a.createElement("h2",null,"Trip was not found")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:m,onClear:function(){d(null)}}),!l&&b&&r.a.createElement("form",{className:"trip-form",onSubmit:_},r.a.createElement(V,{id:"title",element:"input",type:"text",label:"Title",validators:[{type:"REQUIRE"}],errorText:"Please enter a title...",onInput:T,initialValue:b.title,initialValid:!0}),r.a.createElement(V,{id:"description",element:"textarea",label:"Description",validators:[C(5)],errorText:"Please enter a description...",onInput:T,initialValue:b.description,initialValid:!0}),r.a.createElement(V,{id:"weather",element:"input",type:"text",label:"Weather Conditions",validators:[{type:"REQUIRE"}],errorText:"Describe the weather...",onInput:T,initialValue:b.weather,initialValid:!0}),r.a.createElement(V,{id:"flies",element:"input",type:"text",label:"Flies Used",validators:[{type:"REQUIRE"}],errorText:"What flies worked...",onInput:T,initialValue:b.flies,initialValid:!0}),r.a.createElement(j,{type:"submit",disabled:!I.isValid},"UPDATE TRIP")))},X=(a(56),function(){var e=Object(n.useContext)(L),t=Object(n.useState)(!0),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),m=o[0],d=o[1],E=Object(n.useState)(!1),h=Object(s.a)(E,2),b=h[0],g=h[1],O=R({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),w=Object(s.a)(O,3),k=w[0],N=w[1],T=w[2],S=function(){var t=Object(f.a)(p.a.mark((function t(a){var n,r,c,i,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),d(!0),!l){t.next=22;break}return t.prev=3,t.next=6,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:k.inputs.email.value,password:k.inputs.password.value})});case 6:return n=t.sent,t.next=9,n.json();case 9:if(r=t.sent,n.ok){t.next=12;break}throw new Error(r.message);case 12:d(!1),e.login(r.userId,r.token),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),d(!1),g(t.t0.message||"Something went wrong, try again.");case 20:t.next=45;break;case 22:return t.prev=22,(c=new FormData).append("email",k.inputs.email.value),c.append("name",k.inputs.name.value),c.append("password",k.inputs.password.value),c.append("image",k.inputs.image.value),t.next=30,fetch("".concat("https://fishbook-backend.herokuapp.com/api","/users/signup"),{body:c,method:"POST"});case 30:return i=t.sent,t.next=33,i.json();case 33:if(o=t.sent,i.ok){t.next=36;break}throw new Error(o.message);case 36:d(!1),e.login(o.userId,o.token),_.push("/"),t.next=45;break;case 41:t.prev=41,t.t1=t.catch(22),d(!1),g(t.t1.message||"Something went wrong, try again.");case 45:case"end":return t.stop()}}),t,null,[[3,16],[22,41]])})));return function(e){return t.apply(this,arguments)}}(),_=Object(u.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{error:b,onClear:function(){g(null)}}),r.a.createElement(v,{className:"authentication"},m&&r.a.createElement(x,{asOverlay:!0}),r.a.createElement("h2",null,"Login Required"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:S},!l&&r.a.createElement(V,{element:"input",id:"name",type:"text",label:"Enter a Username",validators:[{type:"REQUIRE"}],errorText:"Enter a Username of 6 characters or longer",onInput:N}),!l&&r.a.createElement(U,{center:!0,id:"image",onInput:N,errorText:"Please provide an image..."}),r.a.createElement(V,{element:"input",id:"email",type:"email",label:"Email",validators:[{type:"EMAIL"}],errorText:"Enter a valid email address",onInput:N}),r.a.createElement(V,{element:"input",id:"password",type:"password",label:"Password",validators:[C(6)],errorText:"Password must be at least 6 characters",onInput:N}),r.a.createElement(j,{type:"submit",disabled:!k.isValid},l?"LOGIN":"SIGNUP")),r.a.createElement(j,{inverse:!0,onClick:function(){l?T(Object(I.a)({},k.inputs,{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):T(Object(I.a)({},k.inputs,{name:void 0,image:void 0}),k.inputs.email.isValid&&k.inputs.password.isValid),c((function(e){return!e}))}},"SWITCH TO ",l?"SIGNUP":"LOGIN")))}),$=function(){var e,t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),d=o[0],p=o[1],f=Object(n.useCallback)((function(e,t){c(t),p(e),localStorage.setItem("userData",JSON.stringify({userId:e,token:t}))}),[]),E=Object(n.useCallback)((function(){c(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&f(e.userId,e.token)}),[f]),e=l?r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(u.b,{exact:!0,path:"/:userid/trips"},r.a.createElement(H,null)),r.a.createElement(u.b,{exact:!0,path:"/trips/new"},r.a.createElement(A,null)),r.a.createElement(u.b,{exact:!0,path:"/trips/:pid"},r.a.createElement(Y,null)),r.a.createElement(u.a,{to:"/"})):r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(u.b,{exact:!0,path:"/:userid/trips"},r.a.createElement(H,null)),r.a.createElement(u.b,{exact:!0,path:"/auth"},r.a.createElement(X,null)),r.a.createElement(u.a,{to:"/auth"})),r.a.createElement(L.Provider,{value:{isLoggedIn:!!l,token:l,userId:d,login:f,logout:E}},r.a.createElement(m.a,null,r.a.createElement(J,null),r.a.createElement("main",null,e)))};c.a.render(r.a.createElement($,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");i?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):o(e)}))}}()}]),[[26,1,2]]]);
//# sourceMappingURL=main.2812ae6e.chunk.js.map