(this["webpackJsonpcrwn-clothing"]=this["webpackJsonpcrwn-clothing"]||[]).push([[0],{59:function(n,e,t){n.exports=t(99)},71:function(n,e,t){},99:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(30),i=t.n(c),o=t(16),l=t(6),u=t(50),s=t(9),d=t(29),p=(t(68),t(51)),f=t(52),m=t.n(f),b=t(5),h="SET_CURRENT_USER",g={currentUser:null},v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(b.a)(Object(b.a)({},n),{},{currentUser:e.payload});default:return n}},O={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},E=t(58),x=function(n,e){return n.find((function(n){return n.id===e.id}))?n.map((function(n){return n.id===e.id?Object(b.a)(Object(b.a)({},n),{},{quantity:n.quantity+1}):n})):[].concat(Object(E.a)(n),[Object(b.a)(Object(b.a)({},e),{},{quantity:1})])},y=function(n,e){return 1===n.find((function(n){return n.id===e.id})).quantity?n.filter((function(n){return n.id!==e.id})):n.map((function(n){return n.id===e.id?Object(b.a)(Object(b.a)({},n),{},{quantity:n.quantity-1}):n}))},j={hidden:!0,cartItems:[]},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O.TOGGLE_CART_HIDDEN:return Object(b.a)(Object(b.a)({},n),{},{hidden:!n.hidden});case O.ADD_ITEM:return Object(b.a)(Object(b.a)({},n),{},{cartItems:x(n.cartItems,e.payload)});case O.REMOVE_ITEM:return Object(b.a)(Object(b.a)({},n),{},{cartItems:y(n.cartItems,e.payload)});case O.CLEAR_ITEM_FROM_CART:return Object(b.a)(Object(b.a)({},n),{},{cartItems:n.cartItems.filter((function(n){return n.id!==e.payload.id}))});default:return n}},C={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;return e.type,n},I={FETCH_COLLECTIONS_START:"FETCH_COLLECTIONS_START",FETCH_COLLECTIONS_SUCCESS:"FETCH_COLLECTIONS_SUCCESS",FETCH_COLLECTIONS_FAILURE:"FETCH_COLLECTIONS_FAILURE"},S={collections:null,isFetching:!1,errorMessage:void 0},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I.FETCH_COLLECTIONS_START:return Object(b.a)(Object(b.a)({},n),{},{isFetching:!0});case I.FETCH_COLLECTIONS_SUCCESS:return Object(b.a)(Object(b.a)({},n),{},{isFetching:!1,collections:e.payload});case I.FETCH_COLLECTIONS_FAILURE:return Object(b.a)(Object(b.a)({},n),{},{isFetching:!1,errorMessage:e.payload});default:return n}},_={key:"root",storage:m.a,whitelist:["cart"]},U=Object(s.c)({user:v,cart:w,directory:k,shop:T}),A=Object(d.a)(_,U),L=[p.a];var R=Object(s.e)(A,s.a.apply(void 0,L)),N=Object(d.b)(R),z=(d.b,t(71),t(11)),P=t.n(z),M=t(18),F=t(19),H=t(20),D=t(22),G=t(21),q=t(8),W=t(4),V=t(1),B=t(2);function K(){var n=Object(V.a)(["\n\nbody {\n    font-family: Open Sans Condensed'\n    padding: 20px 60px;\n\n    @media screen and (max-width: 800px){\n        padding: 10px\n    }\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n"]);return K=function(){return n},n}var $=Object(B.a)(K()),Q=t(17),Z=Object(W.a)([function(n){return n.directory}],(function(n){return n.sections}));function J(){var n=Object(V.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]);return J=function(){return n},n}function Y(){var n=Object(V.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]);return Y=function(){return n},n}function X(){var n=Object(V.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]);return X=function(){return n},n}function nn(){var n=Object(V.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"]);return nn=function(){return n},n}function en(){var n=Object(V.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 1px solid black;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\t&:hover {\n\t\tcursor: pointer;\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  @media screen and (max-width: 800px){\n    height: 200px;\n  }\n"]);return en=function(){return n},n}var tn=B.c.div(en(),(function(n){return n.size?"380px":"240px"})),rn=B.c.div(nn(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")})),an=B.c.div(X()),cn=B.c.span(Y()),on=B.c.span(J()),ln=Object(q.g)((function(n){var e=n.title,t=n.imageUrl,r=n.size,c=n.history,i=n.linkUrl,o=n.match;return a.a.createElement(tn,{size:r,onClick:function(){return c.push("".concat(o.url).concat(i))}},a.a.createElement(rn,{className:"background-image",imageUrl:t}),a.a.createElement(an,{className:"content"},a.a.createElement(cn,null,e.toUpperCase()),a.a.createElement(on,null,"SHOP NOW")))}));function un(){var n=Object(V.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return un=function(){return n},n}var sn=B.c.div(un()),dn=Object(W.b)({sections:Z}),pn=Object(l.b)(dn)((function(n){var e=n.sections;return a.a.createElement(sn,null,e.map((function(n){var e=n.id,t=Object(Q.a)(n,["id"]);return a.a.createElement(ln,Object.assign({key:e},t))})))}));function fn(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return fn=function(){return n},n}var mn=B.c.div(fn()),bn=function(n){n.history;return a.a.createElement(mn,null,a.a.createElement(pn,null))},hn=t(28),gn=t.n(hn);t(77),t(81);gn.a.initializeApp({apiKey:"AIzaSyDxk7_XHWB0a5wUzfrdI0z79778FIVOKiw",authDomain:"crown-clothing-36ec3.firebaseapp.com",databaseURL:"https://crown-clothing-36ec3.firebaseio.com",projectId:"crown-clothing-36ec3",storageBucket:"crown-clothing-36ec3.appspot.com",messagingSenderId:"71620557705",appId:"1:71620557705:web:a788242a164d185b3e3f58",measurementId:"G-EVNZZ78RHW"});var vn=function(){var n=Object(M.a)(P.a.mark((function n(e,t){var r,a,c,i;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return r=En.doc("users/".concat(e.uid)),n.next=5,r.get();case 5:if(n.sent.exists){n.next=17;break}return a=e.displayName,c=e.email,i=new Date,n.prev=9,n.next=12,r.set(Object(b.a)({displayName:a,email:c,createdAt:i},t));case 12:n.next=17;break;case 14:n.prev=14,n.t0=n.catch(9),console.log("error creating user",n.t0.message);case 17:return n.abrupt("return",r);case 18:case"end":return n.stop()}}),n,null,[[9,14]])})));return function(e,t){return n.apply(this,arguments)}}(),On=gn.a.auth(),En=gn.a.firestore(),xn=new gn.a.auth.GoogleAuthProvider;xn.setCustomParameters({prompt:"select_account"});var yn=function(){return On.signInWithPopup(xn)},jn=(gn.a,function(){return function(n){var e=En.collection("collections");n({type:I.FETCH_COLLECTIONS_START}),e.get().then((function(e){var t=e.docs.map((function(n){var e=n.data(),t=e.title,r=e.items;return{routeName:encodeURI(t.toLowerCase()),id:n.id,title:t,items:r}})).reduce((function(n,e){return n[e.title.toLowerCase()]=e,n}),{});n(function(n){return{type:I.FETCH_COLLECTIONS_SUCCESS,payload:n}}(t))})).catch((function(e){return n((t=e.message,{type:I.FETCH_COLLECTIONS_FAILURE,payload:t}));var t}))}}),wn=function(n){return n.shop},Cn=Object(W.a)([wn],(function(n){return n.collections})),kn=Object(W.a)([Cn],(function(n){return n?Object.keys(n).map((function(e){return n[e]})):[]})),In=Object(W.a)([wn],(function(n){return n.isFetching})),Sn=Object(W.a)([wn],(function(n){return!!n.collections}));function Tn(){var n=Object(V.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Tn=function(){return n},n}function _n(){var n=Object(V.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _n=function(){return n},n}var Un=B.c.div(_n()),An=B.c.div(Tn()),Ln=function(n){return function(e){var t=e.isLoading,r=Object(Q.a)(e,["isLoading"]);return t?a.a.createElement(Un,null,a.a.createElement(An,null)):a.a.createElement(n,r)}},Rn=function(){return{type:O.TOGGLE_CART_HIDDEN}},Nn=function(n){return{type:O.ADD_ITEM,payload:n}};function zn(){var n=Object(V.a)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  ","\n"]);return zn=function(){return n},n}function Pn(){var n=Object(V.a)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]);return Pn=function(){return n},n}function Mn(){var n=Object(V.a)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]);return Mn=function(){return n},n}function Fn(){var n=Object(V.a)(["\n  background-color: black;\n  color: white;\n  border: none;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]);return Fn=function(){return n},n}var Hn=Object(B.b)(Fn()),Dn=Object(B.b)(Mn()),Gn=Object(B.b)(Pn()),qn=B.c.button(zn(),(function(n){return n.isGoogleSignIn?Gn:n.inverted?Dn:Hn})),Wn=function(n){var e=n.children,t=Object(Q.a)(n,["children"]);return a.a.createElement(qn,t,e)};function Vn(){var n=Object(V.a)(["\n  width: 10%;\n  text-align: right;\n"]);return Vn=function(){return n},n}function Bn(){var n=Object(V.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]);return Bn=function(){return n},n}function Kn(){var n=Object(V.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n"]);return Kn=function(){return n},n}function $n(){var n=Object(V.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"]);return $n=function(){return n},n}function Qn(){var n=Object(V.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n\n  @media screen and (max-width: 800px){\n  display: block;\n  opacity: 0.9;\n  min-width: unset;\n  padding: 0 10px;\n  }\n"]);return Qn=function(){return n},n}function Zn(){var n=Object(V.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  \n\n  @media screen and (max-width: 800px){\n    width: 40vw;\n    \n    \n    &:hover {\n    .image {\n      opacity: unset;\n    }\n    button {\n      opacity: unset;\n      display: flex;\n    }\n  }\n}\n"]);return Zn=function(){return n},n}var Jn=B.c.div(Zn()),Yn=Object(B.c)(Wn)(Qn()),Xn=B.c.div($n(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")})),ne=B.c.div(Kn()),ee=B.c.span(Bn()),te=B.c.span(Vn()),re=Object(l.b)(null,(function(n){return{addItem:function(e){return n(Nn(e))}}}))((function(n){var e=n.item,t=n.addItem,r=e.name,c=e.price,i=e.imageUrl;return a.a.createElement(Jn,null,a.a.createElement(Xn,{className:"image",imageUrl:i}),a.a.createElement(ne,null,a.a.createElement(ee,null,r),a.a.createElement(te,null,c)),a.a.createElement(Yn,{onClick:function(){return t(e)},inverted:!0},"Add to cart"))}));function ae(){var n=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media screen and (max-width: 800px){\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 15px;\n  }\n"]);return ae=function(){return n},n}function ce(){var n=Object(V.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]);return ce=function(){return n},n}function ie(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 800px){\n    align-items: center;\n  }\n"]);return ie=function(){return n},n}var oe=B.c.div(ie()),le=B.c.h1(ce()),ue=B.c.div(ae()),se=Object(q.g)((function(n){var e=n.title,t=n.items,r=n.history,c=n.match,i=n.routeName;return a.a.createElement(oe,null,a.a.createElement(le,{onClick:function(){return r.push("".concat(c.path,"/").concat(i))}},e.toUpperCase()),a.a.createElement(ue,null,t.filter((function(n,e){return e<4})).map((function(n){return a.a.createElement(re,{key:n.id,item:n})}))))}));function de(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return de=function(){return n},n}var pe=B.c.div(de()),fe=Object(W.b)({collections:kn}),me=Object(l.b)(fe)((function(n){var e=n.collections;return a.a.createElement(pe,null,e.map((function(n){var e=n.id,t=Object(Q.a)(n,["id"]);return a.a.createElement(se,Object.assign({key:e},t))})))})),be=Object(W.b)({isLoading:In}),he=Object(s.d)(Object(l.b)(be),Ln)(me);function ge(){var n=Object(V.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 10px;\n  & > div {\n    margin-bottom: 30px;\n  }\n"]);return ge=function(){return n},n}function ve(){var n=Object(V.a)(["\n  font-size: 38px;\n  margin: 0 auto 30px;\n"]);return ve=function(){return n},n}function Oe(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return Oe=function(){return n},n}var Ee=B.c.div(Oe()),xe=B.c.h2(ve()),ye=B.c.div(ge()),je=Object(l.b)((function(n,e){return{collection:(t=e.match.params.collectionId,Object(W.a)([Cn],(function(n){return n?n[t]:null})))(n)};var t}))((function(n){var e=n.collection,t=e.title,r=e.items;return a.a.createElement(Ee,null,a.a.createElement(xe,null,t),a.a.createElement(ye,null,r.map((function(n){return a.a.createElement(re,{key:n.id,item:n})}))))})),we=Object(W.b)({isLoading:function(n){return!Sn(n)}}),Ce=Object(s.d)(Object(l.b)(we),Ln)(je),ke=function(n){Object(D.a)(t,n);var e=Object(G.a)(t);function t(){return Object(F.a)(this,t),e.apply(this,arguments)}return Object(H.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStartAsync)()}},{key:"render",value:function(){var n=this.props.match;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(q.b,{exact:!0,path:"".concat(n.path),component:he}),a.a.createElement(q.b,{path:"".concat(n.path,"/:collectionId"),component:Ce}))}}]),t}(a.a.Component),Ie=Object(l.b)(null,(function(n){return{fetchCollectionsStartAsync:function(){return n(jn())}}}))(ke),Se=t(27);function Te(){var n=Object(V.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"]);return Te=function(){return n},n}function _e(){var n=Object(V.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"]);return _e=function(){return n},n}function Ue(){var n=Object(V.a)(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]);return Ue=function(){return n},n}function Ae(){var n=Object(V.a)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"]);return Ae=function(){return n},n}var Le=Object(B.b)(Ae(),"black"),Re=B.c.div(Ue()),Ne=B.c.input(_e(),"grey","grey",Le),ze=B.c.label(Te(),"grey",Le),Pe=function(n){var e=n.handleChange,t=n.label,r=Object(Q.a)(n,["handleChange","label"]);return a.a.createElement(Re,null,a.a.createElement(Ne,Object.assign({onChange:e},r)),t?a.a.createElement(ze,{className:r.value.length?"shrink":""},t):null)};function Me(){var n=Object(V.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Me=function(){return n},n}function Fe(){var n=Object(V.a)(["\n  margin: 10px 0;\n"]);return Fe=function(){return n},n}function He(){var n=Object(V.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]);return He=function(){return n},n}var De=B.c.div(He()),Ge=B.c.h2(Fe()),qe=B.c.div(Me()),We=function(n){Object(D.a)(t,n);var e=Object(G.a)(t);function t(n){var r;return Object(F.a)(this,t),(r=e.call(this,n)).handleSubmit=function(){var n=Object(M.a)(P.a.mark((function n(e){var t,a,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=r.state,a=t.email,c=t.password,n.prev=2,n.next=5,On.signInWithEmailAndPassword(a,c);case 5:r.setState({email:"",password:""}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(2),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(e){return n.apply(this,arguments)}}(),r.handleChange=function(n){var e=n.target,t=e.value,a=e.name;r.setState(Object(Se.a)({},a,t))},r.state={email:"",password:""},r}return Object(H.a)(t,[{key:"render",value:function(){return a.a.createElement(De,null,a.a.createElement(Ge,null,"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(Pe,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),a.a.createElement(Pe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),a.a.createElement(qe,null,a.a.createElement(Wn,{type:"submit"}," Sign in "),a.a.createElement(Wn,{onClick:yn,isGoogleSignIn:!0},"Sign in with Google"))))}}]),t}(a.a.Component);function Ve(){var n=Object(V.a)(["\n  margin: 10px 0;\n"]);return Ve=function(){return n},n}function Be(){var n=Object(V.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]);return Be=function(){return n},n}var Ke=B.c.div(Be()),$e=B.c.h2(Ve()),Qe=function(n){Object(D.a)(t,n);var e=Object(G.a)(t);function t(){var n;return Object(F.a)(this,t),(n=e.call(this)).handleSubmit=function(){var e=Object(M.a)(P.a.mark((function e(t){var r,a,c,i,o,l,u;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.state,a=r.displayName,c=r.email,i=r.password,o=r.confirmPassword,i===o){e.next=5;break}return alert("passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,On.createUserWithEmailAndPassword(c,i);case 8:return l=e.sent,u=l.user,e.next=12,vn(u,{displayName:a});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[5,15]])})));return function(n){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(Se.a)({},r,a))},n.state={displayName:"",email:"",password:"",confirmPassword:""},n}return Object(H.a)(t,[{key:"render",value:function(){var n=this.state,e=n.displayName,t=n.email,r=n.password,c=n.confirmPassword;return a.a.createElement(Ke,null,a.a.createElement($e,null,"I do not have a account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(Pe,{type:"text",name:"displayName",value:e,onChange:this.handleChange,label:"Display Name",required:!0}),a.a.createElement(Pe,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),a.a.createElement(Pe,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),a.a.createElement(Pe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),a.a.createElement(Wn,{type:"submit"},"SIGN UP")))}}]),t}(a.a.Component);function Ze(){var n=Object(V.a)(["\n  width: 850px;\n  display: flex;\n  justify-content: space-between;\n  margin: 30px auto;\n"]);return Ze=function(){return n},n}var Je=B.c.div(Ze()),Ye=function(){return a.a.createElement(Je,null,a.a.createElement(We,null),a.a.createElement(Qe,null))},Xe=t(56),nt=t.n(Xe),et=t(57),tt=t.n(et),rt=function(n){var e=n.price,t=100*e;return a.a.createElement(nt.a,{label:"Pay Now",name:"CRWN Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(e),amount:t,panelLabel:"Pay Now",token:function(n){tt()({url:"payment",method:"post",data:{amount:t,token:n}}).then((function(n){alert("succesful payment")})).catch((function(n){console.log("Payment Error: ",n),alert("There was an issue with your payment! Please make sure you use the provided credit card.")}))},stripeKey:"pk_test_b7a3hFL5nC3qlBCZ6bQACpez00gyMMP52H"})};function at(){var n=Object(V.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]);return at=function(){return n},n}function ct(){var n=Object(V.a)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]);return ct=function(){return n},n}function it(){var n=Object(V.a)(["\n  width: 23%;\n"]);return it=function(){return n},n}function ot(){var n=Object(V.a)(["\n  width: 23%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);return ot=function(){return n},n}function lt(){var n=Object(V.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]);return lt=function(){return n},n}var ut=B.c.div(lt()),st=B.c.div(ot()),dt=B.c.span(it()),pt=Object(B.c)(dt)(ct()),ft=B.c.div(at()),mt=Object(l.b)(null,(function(n){return{clearItem:function(e){return n(function(n){return{type:O.CLEAR_ITEM_FROM_CART,payload:n}}(e))},addItem:function(e){return n(Nn(e))},removeItem:function(e){return n(function(n){return{type:O.REMOVE_ITEM,payload:n}}(e))}}}))((function(n){var e=n.cartItem,t=n.clearItem,r=n.addItem,c=n.removeItem,i=e.name,o=e.imageUrl,l=e.price,u=e.quantity;return a.a.createElement(ut,null,a.a.createElement(st,null,a.a.createElement("img",{src:o,alt:"item"})),a.a.createElement(dt,null,i),a.a.createElement(pt,null,a.a.createElement("div",{onClick:function(){return c(e)}},"\u276e"),a.a.createElement("span",null,u),a.a.createElement("div",{onClick:function(){return r(e)}},"\u276f")),a.a.createElement(dt,null,l),a.a.createElement(ft,{onClick:function(){return t(e)}},"\u2715"))})),bt=function(n){return n.cart},ht=Object(W.a)([bt],(function(n){return n.cartItems})),gt=Object(W.a)([bt],(function(n){return n.hidden})),vt=Object(W.a)([ht],(function(n){return n.reduce((function(n,e){return n+e.quantity}),0)})),Ot=Object(W.a)([ht],(function(n){return n.reduce((function(n,e){return n+e.quantity*e.price}),0)}));function Et(){var n=Object(V.a)(["\n  text-align: center;\n  margin-top: 40px;\n  font-size: 24px;\n  color: red;\n"]);return Et=function(){return n},n}function xt(){var n=Object(V.a)(["\n  margin-top: 30px;\n  margin-left: auto;\n  font-size: 36px;\n"]);return xt=function(){return n},n}function yt(){var n=Object(V.a)(["\n  text-transform: capitalize;\n  width: 23%;\n  &:last-child {\n    width: 8%;\n  }\n"]);return yt=function(){return n},n}function jt(){var n=Object(V.a)(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid darkgrey;\n"]);return jt=function(){return n},n}function wt(){var n=Object(V.a)(["\n  width: 55%;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 50px auto 0;\n  button {\n    margin-left: auto;\n    margin-top: 50px;\n  }\n"]);return wt=function(){return n},n}var Ct=B.c.div(wt()),kt=B.c.div(jt()),It=B.c.div(yt()),St=B.c.div(xt()),Tt=B.c.div(Et()),_t=Object(W.b)({cartItems:ht,total:Ot}),Ut=Object(l.b)(_t)((function(n){var e=n.cartItems,t=n.total;return a.a.createElement(Ct,null,a.a.createElement(kt,null,a.a.createElement(It,null,a.a.createElement("span",null,"Product")),a.a.createElement(It,null,a.a.createElement("span",null,"Description")),a.a.createElement(It,null,a.a.createElement("span",null,"Quantity")),a.a.createElement(It,null,a.a.createElement("span",null,"Price")),a.a.createElement(It,null,a.a.createElement("span",null,"Remove"))),e.map((function(n){return a.a.createElement(mt,{key:n.id,cartItem:n})})),a.a.createElement(St,null,"TOTAL: $",t),a.a.createElement(Tt,null,"*Please use the following test credit card for payments*",a.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/21 - CVV: 123"),a.a.createElement(rt,{price:t}))}));function At(){return(At=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Lt(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var Rt=a.a.createElement("g",null),Nt=a.a.createElement("g",null),zt=a.a.createElement("g",null),Pt=a.a.createElement("g",null),Mt=a.a.createElement("g",null),Ft=a.a.createElement("g",null),Ht=a.a.createElement("g",null),Dt=a.a.createElement("g",null),Gt=a.a.createElement("g",null),qt=a.a.createElement("g",null),Wt=a.a.createElement("g",null),Vt=a.a.createElement("g",null),Bt=a.a.createElement("g",null),Kt=a.a.createElement("g",null),$t=a.a.createElement("g",null),Qt=function(n){var e=n.svgRef,t=n.title,r=Lt(n,["svgRef","title"]);return a.a.createElement("svg",At({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:e},r),t?a.a.createElement("title",null,t):null,a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Rt,Nt,zt,Pt,Mt,Ft,Ht,Dt,Gt,qt,Wt,Vt,Bt,Kt,$t)},Zt=a.a.forwardRef((function(n,e){return a.a.createElement(Qt,At({svgRef:e},n))}));t.p;function Jt(){var n=Object(V.a)(["\n  position: absolute;\n  font-size: 10px;\n  font-weight: bold;\n  bottom: 12px;\n"]);return Jt=function(){return n},n}function Yt(){var n=Object(V.a)(["\n  width: 24px;\n  height: 24px;\n"]);return Yt=function(){return n},n}function Xt(){var n=Object(V.a)(["\n  width: 45px;\n  height: 45px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n"]);return Xt=function(){return n},n}var nr=B.c.div(Xt()),er=Object(B.c)(Zt)(Yt()),tr=B.c.span(Jt()),rr=Object(W.b)({itemCount:vt}),ar=Object(l.b)(rr,(function(n){return{toggleCartHidden:function(){return n(Rn())}}}))((function(n){var e=n.toggleCartHidden,t=n.itemCount;return a.a.createElement(nr,{onClick:e},a.a.createElement(er,null),a.a.createElement(tr,null,t))}));function cr(){var n=Object(V.a)(["\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 10px 20px;\n"]);return cr=function(){return n},n}function ir(){var n=Object(V.a)(["\n  width: 30%;\n"]);return ir=function(){return n},n}function or(){var n=Object(V.a)(["\n  width: 100%;\n  display: flex;\n  height: 80px;\n  margin-bottom: 15px;\n"]);return or=function(){return n},n}var lr=B.c.div(or()),ur=B.c.img(ir()),sr=B.c.div(cr()),dr=function(n){var e=n.item,t=e.imageUrl,r=e.price,c=e.name,i=e.quantity;return a.a.createElement(lr,null,a.a.createElement(ur,{src:t,alt:"item"}),a.a.createElement(sr,null,a.a.createElement("span",null,c),a.a.createElement("span",null,i," x $",r)))};function pr(){var n=Object(V.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n"]);return pr=function(){return n},n}function fr(){var n=Object(V.a)(["\n  font-size: 18px;\n  margin: 50px auto;\n"]);return fr=function(){return n},n}function mr(){var n=Object(V.a)(["\n  margin-top: auto;\n"]);return mr=function(){return n},n}function br(){var n=Object(V.a)(["\n  position: absolute;\n  width: 240px;\n  height: 340px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n  background-color: white;\n  top: 90px;\n  right: 40px;\n  z-index: 5;\n"]);return br=function(){return n},n}var hr=B.c.div(br()),gr=Object(B.c)(Wn)(mr()),vr=B.c.span(fr()),Or=B.c.div(pr()),Er=Object(W.b)({cartItems:ht}),xr=Object(q.g)(Object(l.b)(Er)((function(n){var e=n.cartItems,t=n.history,r=n.dispatch;return a.a.createElement(hr,null,a.a.createElement(Or,null,e.length?e.map((function(n){return a.a.createElement(dr,{key:n.id,item:n})})):a.a.createElement(vr,null,"Your cart is empty")),a.a.createElement(gr,{onClick:function(){t.push("/checkout"),r(Rn())}},"GO TO CHECKOUT"))}))),yr=Object(W.a)([function(n){return n.user}],(function(n){return n.currentUser}));function jr(){return(jr=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function wr(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var Cr=a.a.createElement("title",null,"Group"),kr=a.a.createElement("desc",null,"Created with Sketch."),Ir=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Sr=function(n){var e=n.svgRef,t=n.title,r=wr(n,["svgRef","title"]);return a.a.createElement("svg",jr({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:e},r),void 0===t?Cr:t?a.a.createElement("title",null,t):null,kr,Ir)},Tr=a.a.forwardRef((function(n,e){return a.a.createElement(Sr,jr({svgRef:e},n))}));t.p;function _r(){var n=Object(V.a)(["\n  padding: 10px 11px;\n  cursor: pointer;\n  \n  @media screen and (max-width: 800px){\n    align-items: right;\n  }\n"]);return _r=function(){return n},n}function Ur(){var n=Object(V.a)(["\n  width: 50%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n\n  @media screen and (max-width: 800px){\n  width: 80%;\n  }\n"]);return Ur=function(){return n},n}function Ar(){var n=Object(V.a)(["\n  height: 100%;\n  width: 70px;\n  padding: 25px;\n\n  @media screen and (max-width: 800px){\n    width: 30 px;\n    padding: 0px;\n  }\n"]);return Ar=function(){return n},n}function Lr(){var n=Object(V.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  @media screen and (max-width: 800px){\n    height: 60 px;\n    padding: 10px;\n    margin-bottom: 20px;\n  }\n"]);return Lr=function(){return n},n}var Rr=B.c.div(Lr()),Nr=Object(B.c)(o.b)(Ar()),zr=B.c.div(Ur()),Pr=Object(B.c)(o.b)(_r()),Mr=Object(W.b)({currentUser:yr,hidden:gt}),Fr=Object(l.b)(Mr)((function(n){var e=n.currentUser,t=n.hidden;return a.a.createElement(Rr,null,a.a.createElement(Nr,{to:"/"},a.a.createElement(Tr,{className:"logo"})),a.a.createElement(zr,null,a.a.createElement(Pr,{to:"/shop"},"SHOP"),a.a.createElement(Pr,{to:"/shop"},"CONTACT"),e?a.a.createElement(Pr,{as:"div",onClick:function(){return On.signOut()}},"SIGN OUT"):a.a.createElement(Pr,{to:"/signin"},"SIGN IN"),a.a.createElement(ar,null)),t?null:a.a.createElement(xr,null))})),Hr=function(n){Object(D.a)(t,n);var e=Object(G.a)(t);function t(){var n;Object(F.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=e.call.apply(e,[this].concat(a))).unsubscribeFromAuth=null,n}return Object(H.a)(t,[{key:"componentDidMount",value:function(){var n=this.props.setCurrentUser;this.unsubscribeFromAuth=On.onAuthStateChanged(function(){var e=Object(M.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,vn(t);case 3:e.sent.onSnapshot((function(e){n(Object(b.a)({id:e.id},e.data()))}));case 5:n(t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var n=this;return a.a.createElement("div",null,a.a.createElement($,null),a.a.createElement(Fr,null),a.a.createElement(q.d,null,a.a.createElement(q.b,{exact:!0,path:"/",component:bn}),a.a.createElement(q.b,{path:"/shop",component:Ie}),a.a.createElement(q.b,{exact:!0,path:"/checkout",component:Ut}),a.a.createElement(q.b,{exact:!0,path:"/signin",render:function(){return n.props.currentUser?a.a.createElement(q.a,{to:"/"}):a.a.createElement(Ye,null)}})))}}]),t}(a.a.Component),Dr=Object(W.b)({currentUser:yr}),Gr=Object(l.b)(Dr,(function(n){return{setCurrentUser:function(e){return n(function(n){return{type:h,payload:n}}(e))}}}))(Hr),qr=Boolean("."===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Wr(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}i.a.render(a.a.createElement(l.a,{store:R},a.a.createElement(o.a,null,a.a.createElement(u.a,{persistor:N},a.a.createElement(Gr,null)))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");qr?(!function(n,e){fetch(n).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):Wr(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Wr(e,n)}))}}()}},[[59,1,2]]]);
//# sourceMappingURL=main.33b8ca27.chunk.js.map