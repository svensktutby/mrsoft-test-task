(this["webpackJsonpmrsoft-test-task"]=this["webpackJsonpmrsoft-test-task"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={inputWrapper:"Input_inputWrapper__2yl09",errorMessage:"Input_errorMessage__1tf0f",label:"Input_label__2hQwK",text:"Input_text__dTozM",input:"Input_input__mcpaw",error:"Input_error__3k43-"}},,function(e,t,n){e.exports={btn:"Button_btn__10rEY",large:"Button_large__1GZH0",small:"Button_small__2-4Cv",default:"Button_default__2ygXb",error:"Button_error__2MHQV"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",container:"Header_container__21wXn container_container__1o5UP",title:"Header_title__3SEjb"}},function(e,t,n){e.exports={resultsBoard:"ResultsBoard_resultsBoard__1Yb2m",item:"ResultsBoard_item__2l57W"}},function(e,t,n){e.exports={form:"Form_form__3wvE7",inputsWrapper:"Form_inputsWrapper__3Ob09",buttonsWrapper:"Form_buttonsWrapper__fV8y7"}},function(e,t,n){e.exports={checkboxWrapper:"Checkbox_checkboxWrapper__j8NcL",checkbox:"Checkbox_checkbox__2pR3O",label:"Checkbox_label__sOdDM",info:"Checkbox_info__KAIPY"}},,function(e,t,n){e.exports={wrapper:"Preloader_wrapper__28UD2",bar:"Preloader_bar__j9T0h",loading:"Preloader_loading__16C5m"}},function(e,t,n){e.exports={main:"Main_main__3JhNz",container:"Main_container__3nnM7 container_container__1o5UP"}},,function(e,t,n){},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n.n(a),s=n(16),o=n.n(s),i=(n(22),n(3)),l=n(17),u=n.n(l),h=n(4),j=n.n(h),p=n(8),d=n(2),b=function(){return Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://cors-anywhere.herokuapp.com/").concat("http://www.mrsoft.by/data.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()};!function(e){e.SET_LOADING="MRSOFT/RESULTS/SET_LOADING",e.SET_RESULTS_BY_LENGTH="MRSOFT/RESULTS/SET_RESULTS_BY_LENGTH",e.SET_RESULTS_BY_STRING="MRSOFT/RESULTS/SET_RESULTS_BY_STRING"}(r||(r={}));var _={results:[],loading:!1},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_LOADING:return Object(d.a)(Object(d.a)({},e),{},{loading:t.payload});case r.SET_RESULTS_BY_LENGTH:return Object(d.a)(Object(d.a)({},e),{},{results:t.payload.results.filter((function(e){return e.length>t.payload.length}))});case r.SET_RESULTS_BY_STRING:return Object(d.a)(Object(d.a)({},e),{},{results:t.payload.results.filter((function(e){return(t.payload.register?e:e.toLowerCase()).includes(t.payload.string)}))});default:return e}},O=function(e){return{type:r.SET_LOADING,payload:e}},m=function(e,t){return{type:r.SET_RESULTS_BY_LENGTH,payload:{results:e,length:t}}},f=function(e,t,n){return{type:r.SET_RESULTS_BY_STRING,payload:{results:e,string:t,register:n}}},v=n(9),g=n.n(v),w=n(14),S=n.n(w),N=n(0),T=function(){return Object(N.jsx)("div",{className:S.a.wrapper,children:Object(N.jsx)("div",{className:S.a.bar})})},y=function(){var e=(0,Object(a.useContext)(Q).getStateValue)((function(e){return e.loading}));return Object(N.jsxs)("header",{className:g.a.header,children:[e&&Object(N.jsx)(T,{}),Object(N.jsx)("div",{className:g.a.container,children:Object(N.jsx)("h1",{className:g.a.title,children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \xab\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u044b\u0435\xa0\u0440\u0435\u0448\u0435\u043d\u0438\u044f\xbb"})})]})},E=n(15),C=n.n(E),L=n(10),k=n.n(L),M=function(e){var t=e.results;return Object(N.jsx)("ul",{className:k.a.resultsBoard,children:t.length?t.map((function(e){return Object(N.jsx)("li",{className:k.a.item,children:e},Math.floor(1e9*Math.random()).toString(16))})):Object(N.jsx)("li",{className:k.a.item,children:"\u0421\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"})})},z=n(11),B=n.n(z),R=n(6),V=n(5),H=n.n(V),I=function(e){switch(e.type){case"text":return Object(N.jsx)("svg",{viewBox:"0 0 484 484",height:"24",width:"24","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0"})});case"email":return Object(N.jsx)("svg",{viewBox:"0 0 512 512",height:"24",width:"24","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:Object(N.jsx)("path",{d:"M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"})});case"password":return Object(N.jsxs)("svg",{viewBox:"0 0 24 24",height:"24",width:"24","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[Object(N.jsx)("path",{d:"m18.75 24h-13.5c-1.24 0-2.25-1.009-2.25-2.25v-10.5c0-1.241 1.01-2.25 2.25-2.25h13.5c1.24 0 2.25 1.009 2.25 2.25v10.5c0 1.241-1.01 2.25-2.25 2.25zm-13.5-13.5c-.413 0-.75.336-.75.75v10.5c0 .414.337.75.75.75h13.5c.413 0 .75-.336.75-.75v-10.5c0-.414-.337-.75-.75-.75z"}),Object(N.jsx)("path",{d:"m17.25 10.5c-.414 0-.75-.336-.75-.75v-3.75c0-2.481-2.019-4.5-4.5-4.5s-4.5 2.019-4.5 4.5v3.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-3.75c0-3.309 2.691-6 6-6s6 2.691 6 6v3.75c0 .414-.336.75-.75.75z"}),Object(N.jsx)("path",{d:"m12 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.5c-.275 0-.5.224-.5.5s.225.5.5.5.5-.224.5-.5-.225-.5-.5-.5z"}),Object(N.jsx)("path",{d:"m12 20c-.414 0-.75-.336-.75-.75v-2.75c0-.414.336-.75.75-.75s.75.336.75.75v2.75c0 .414-.336.75-.75.75z"})]});case"number":return Object(N.jsxs)("svg",{viewBox:"0 0 467 467",width:"24",height:"24","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[Object(N.jsx)("path",{d:"M42.667 85.333H0v341.333c0 23.573 19.093 42.667 42.667 42.667H384v-42.667H42.667V85.333zM277.333 298.667H320V85.333h-85.333V128h42.666z"}),Object(N.jsx)("path",{d:"M426.667 0H128c-23.573 0-42.667 19.093-42.667 42.667v298.667C85.333 364.907 104.427 384 128 384h298.667c23.573 0 42.667-19.093 42.667-42.667V42.667C469.333 19.093 450.24 0 426.667 0zm0 341.333H128V42.667h298.667v298.666z"})]});default:return Object(N.jsxs)("svg",{viewBox:"0 0 512 512",height:"24",width:"24","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",children:[Object(N.jsx)("path",{d:"M132.893 310.534l-30.082 10.911L91.9 291.364l30.081-10.911z"}),Object(N.jsx)("path",{d:"M271.552 301.072l-77.856-46.72-41.616 15.152 10.944 30.064 27.28-9.92 82.144 49.28 97.6-65.072L480 315.088V480H32V347.2l40.8-14.848-10.928-30.048L0 324.8V512h512V292.912l-146.048-54.768z"}),Object(N.jsx)("path",{d:"M0 0v278.848l66.576-24.224-10.928-30.064L32 233.152V32h448v168.912l-114.048-42.768-94.4 62.928-77.856-46.72-47.84 17.392 10.944 30.064 33.504-12.16 82.144 49.28 97.6-65.072L512 247.088V0z"}),Object(N.jsx)("path",{d:"M96.656 243.686L85.721 213.63l30.07-10.94 10.935 30.055z"})]})}},U=function(e){var t=e.type,n=void 0===t?"text":t,r=e.onChange,a=e.onChangeText,c=e.onKeyPress,s=e.onEnter,o=e.error,i=e.className,l=e.errorClassName,u=e.text,h=void 0===u?"Enter your ".concat(n):u,j=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","errorClassName","text"]),p="".concat(H.a.errorMessage," ").concat(l||""),b="".concat(H.a.input," ").concat(o?H.a.error:""," ").concat(i||"");return Object(N.jsxs)("div",{className:H.a.inputWrapper,children:[o&&Object(N.jsx)("span",{className:p,children:o}),Object(N.jsxs)("label",{className:H.a.label,children:[Object(N.jsx)("span",{className:H.a.text,children:h}),Object(N.jsx)("input",Object(d.a)({type:n,onChange:function(e){r&&r(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&s&&s()},className:b},j)),Object(N.jsx)(I,{type:n})]})]})},G=n(7),W=n.n(G),Y=function(e){var t=e.error,n=e.large,r=e.small,a=e.className,c=Object(R.a)(e,["error","large","small","className"]),s="".concat(W.a.btn," ").concat(n?W.a.large:""," ").concat(r?W.a.small:""," ").concat(t?W.a.error:W.a.default," ").concat(a||"");return Object(N.jsx)("button",Object(d.a)({className:s},c))},P=n(12),D=n.n(P),F=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=e.labelClassName,c=e.children,s=Object(R.a)(e,["type","onChange","onChangeChecked","className","labelClassName","children"]),o="".concat(D.a.label," ").concat(a||""),i="".concat(D.a.checkbox," ").concat(r||"");return Object(N.jsxs)("label",{className:D.a.checkboxWrapper,children:[Object(N.jsx)("input",Object(d.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:i},s)),Object(N.jsx)("span",{className:o,children:c})]})},A=function(e,t){var n=e.trim(),r="";return"undefined"!==typeof n&&""===n&&(r="\u041f\u0443\u0441\u0442\u043e\u0435 \u043f\u043e\u043b\u0435"),t&&n&&isNaN(parseInt(n))&&(r="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"),r},K=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),o=s[0],l=s[1],u=Object(a.useState)(!1),h=Object(i.a)(u,2),_=h[0],x=h[1],v=Object(a.useContext)(Q).dispatch,g=function(e){var t=A(e,!0);if(l(t),!t){var n=Number(e.trim());v(function(e){return function(){var t=Object(p.a)(j.a.mark((function t(n){var r,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(O(!0)),t.prev=1,t.next=4,b();case 4:r=t.sent,a=r.data,n(m(a,e)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error: ",Object(d.a)({},t.t0));case 12:return t.prev=12,n(O(!1)),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e){return t.apply(this,arguments)}}()}(n))}},w=function(e,t){var n=A(e,!1);if(l(n),!n){var r=e.trim();t||(r=r.toLowerCase()),v(function(e,t){return function(){var n=Object(p.a)(j.a.mark((function n(r){var a,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(!0)),n.prev=1,n.next=4,b();case 4:a=n.sent,c=a.data,r(f(c,e,t)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("Error: ",Object(d.a)({},n.t0));case 12:return n.prev=12,r(O(!1)),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(e){return n.apply(this,arguments)}}()}(r,t))}};return Object(N.jsx)("div",{children:Object(N.jsxs)("form",{className:B.a.form,onSubmit:function(e){e.preventDefault()},noValidate:!0,children:[Object(N.jsxs)("div",{className:B.a.inputsWrapper,children:[Object(N.jsx)(U,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435",name:"stringFilter",value:n,onChange:function(e){l(""),r(e.currentTarget.value)},error:o}),Object(N.jsx)(F,{checked:_,onChangeChecked:x,children:"\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0438\u0441\u0442\u0440"})]}),Object(N.jsxs)("div",{className:B.a.buttonsWrapper,children:[Object(N.jsx)(Y,{type:"button",onClick:function(){return g(n)},children:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0443"}),Object(N.jsx)(Y,{type:"button",onClick:function(){return w(n,_)},children:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0435"})]})]})})},J=function(){var e=(0,Object(a.useContext)(Q).getStateValue)((function(e){return e.results}));return Object(N.jsx)("main",{className:C.a.main,children:Object(N.jsxs)("div",{className:C.a.container,children:[Object(N.jsx)(K,{}),Object(N.jsx)(M,{results:e})]})})},Q=Object(a.createContext)({getStateValue:function(){},dispatch:function(){}}),X=function(){var e=function(e,t){var n=Object(a.useReducer)(e,t),r=Object(i.a)(n,2),c=r[0],s=r[1];return[c,function e(t){"function"===typeof t?t(e):s(t)}]}(x,_),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(N.jsx)(Q.Provider,{value:{getStateValue:function(e){return e(n)},dispatch:r},children:Object(N.jsxs)("div",{className:u.a.app,children:[Object(N.jsx)(y,{}),Object(N.jsx)(J,{})]})})};o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(X,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.4e5ebee9.chunk.js.map