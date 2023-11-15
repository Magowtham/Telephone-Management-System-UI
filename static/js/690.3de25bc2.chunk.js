"use strict";(self.webpackChunkadmin_panel=self.webpackChunkadmin_panel||[]).push([[690],{690:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var s=a(791),n=a(689),r=(a(176),a(48)),c=a.n(r),l=a(184);const i=function(e){let{totalElements:t,pageSize:a,handlePageChange:n,isVisible:r}=e;const[i,o]=(0,s.useState)(!1),d=()=>{window.innerWidth<=1200?o(!0):o(!1)};return(0,s.useEffect)((()=>(window.addEventListener("resize",d),d(),()=>window.removeEventListener("resize",d))),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c(),{previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",pageCount:Math.ceil(t/a),marginPagesDisplayed:2,pageRangeDisplayed:2,onPageChange:n,containerClassName:" pagination-container ".concat(i?"media-screen":""," ").concat(r?"":"hide"),activeClassName:"page-active",pageClassName:"page-btn",pageLinkClassName:"page-btn-link",previousClassName:"page-next-btn",nextClassName:"page-prev-btn",previousLinkClassName:"page-next-btn-link",nextLinkClassName:"page-next-btn-link"})})};var o=a(834);let d=[];const u=function(e){let{adminUserName:t,isSearchLoading:a,searchData:r,searchRefresh:c,initialRefresh:u,inputClear:h,isOverlay:m,setIsOverlay:x,reductionStatus:v,setNavigation:g,refreshUserInfoTable:j,setRefreshUserInfoTable:p,handleLogout:f}=e;const b=(0,n.s0)(),[N,y]=(0,s.useState)(!1),[S,w]=(0,s.useState)(!1),[E,k]=(0,s.useState)(""),[D,R]=(0,s.useState)([]),[C]=(0,s.useState)(9),[L,T]=(0,s.useState)(0),[I,_]=(0,s.useState)(null),[M,A]=(0,s.useState)(!1),[F,O]=(0,s.useState)(!1),[U,P]=(0,s.useState)(""),[q,Y]=(0,s.useState)(""),[z,G]=(0,s.useState)(""),[H,V]=(0,s.useState)(null),[W,Z]=(0,s.useState)({admin:"",rfid:"",name:"",rollNumber:"",password:""}),[J,B]=(0,s.useState)(!1),[$,K]=(0,s.useState)(!1),[Q,X]=(0,s.useState)({}),[ee,te]=(0,s.useState)(""),[ae,se]=(0,s.useState)(!1),[ne,re]=(0,s.useState)(!1),[ce,le]=(0,s.useState)({}),[ie,oe]=(0,s.useState)(""),[de,ue]=(0,s.useState)(!1),[he,me]=(0,s.useState)(!1),xe=(0,s.useRef)(null),ve=(0,s.useRef)(null),ge=(0,s.useRef)(null),je=(0,s.useRef)(null),pe=async(e,t)=>{try{y(!0),w(!1),d.forEach((e=>{e.abort()}));const a=new AbortController;t||d.push(a);const s=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/get_users?pageNumber=").concat(e,"&pageLimit=").concat(C),{credentials:"include",signal:a.signal}),n=await s.json();switch(s.status){case 200:t&&_(null===n||void 0===n?void 0:n.totalUsers),d=[],R(null===n||void 0===n?void 0:n.users);break;case 401:await f(),d=[];break;default:k(n.error+"!"),d=[],w(!0)}}catch(a){"AbortError"!==a.name?(d=[],k("oops something went wrong!"),w(!0)):alert(a.message)}finally{0===d.length&&y(!1)}},fe=(e,a)=>{a||e.preventDefault(),K(!1),Z(a?{admin:t,rfid:xe.current[0].value,name:xe.current[1].value,rollNumber:xe.current[2].value,password:xe.current[3].value}:{admin:t,rfid:e.target[0].value,name:e.target[1].value,rollNumber:e.target[2].value,password:e.target[3].value}),B(!0)},be=e=>{const{name:t,value:a}=e.target;"rfid"===t&&Y(a),"name"===t&&P(a),"rollNumber"===t&&G(a)},Ne=(e,t)=>{t||e.preventDefault(),re(!1),te(t?ve.current[0].value:e.target[0].value),se(!0)},ye=e=>{ue(!de),e.current.type=de?"password":"text"},Se=e=>{"Enter"===e.key&&(M&&fe(xe.current,!0),F&&Ne(ve.current,!0))};return(0,s.useEffect)((()=>(window.addEventListener("keydown",Se),()=>window.removeEventListener("keydown",Se)))),(0,s.useEffect)((()=>{$&&0===Object.keys(Q).length&&(async()=>{try{me(!0);const e=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/edit_user/").concat(D[H]._id),{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),t=await e.json();switch(e.status){case 200:A(!1),pe(L,!1),x(!1);break;case 401:await f();break;default:X({serverMessage:null===t||void 0===t?void 0:t.error})}}catch(e){alert(e.message)}finally{me(!1)}})()}),[$]),(0,s.useEffect)((()=>{ne&&0===Object.keys(ce).length&&(async()=>{try{me(!0);const e=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/delete_user"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({admin:t,rfid:ie,password:ee})}),a=await e.json();switch(e.status){case 200:O(!1),pe(L,!0),x(!1);break;case 401:await f();break;default:le({serverMessage:null===a||void 0===a?void 0:a.error})}}catch(e){alert(e.message)}finally{me(!1)}})()}),[ne]),(0,s.useEffect)((()=>{m||(A(!1),O(!1))}),[m]),(0,s.useEffect)((()=>{J&&(K((()=>{const e={};return W.rfid||(e.rfidError="RFID required"),W.name||(e.nameError="Name required"),W.rollNumber||(e.rollNumberError="Roll Number Required"),W.password||(e.adminError="Admin Passowrd Required"),X(e),!0})()),B(!1))}),[J]),(0,s.useEffect)((()=>{ae&&(re((()=>{const e={};return ee||(e.adminError="Admin Password Required"),le(e),!0})()),se(!1))}),[ae]),(0,s.useEffect)((()=>{R(r)}),[r]),(0,s.useEffect)((()=>{c&&!u&&pe(L,!1)}),[c]),(0,s.useEffect)((()=>{j&&(w(!1),_(null),pe(0,!0),p(!1))}),[j]),(0,s.useEffect)((()=>{g(1),pe(0,!0)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"sub-table-sec",children:[S?(0,l.jsxs)("div",{className:"retry-form",children:[(0,l.jsx)("p",{children:E}),(0,l.jsx)("button",{onClick:()=>{pe(0,!0)},children:"Retry"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"empty-animation-container ".concat(0===I||!c&&0===r.length&&!a?"":"hide"),children:(0,l.jsx)("h1",{children:"".concat(c||0!==r.length||a?"oops table is empty!":"user not found!")})}),(0,l.jsxs)("table",{className:"".concat(null===I||0===I?"hide":""),children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"SL. NO."}),(0,l.jsx)("th",{children:"RFID"}),(0,l.jsx)("th",{children:"Student Name"}),(0,l.jsx)("th",{children:"Roll Number"}),(0,l.jsx)("th",{className:"".concat(v?"hide":""),children:"Balance Amount"}),(0,l.jsx)("th",{children:"Manage"}),(0,l.jsxs)("th",{children:[v?"Recharge":"View"," Details"]})]})}),(0,l.jsx)("tbody",{className:"".concat(N||a?"hide":""),children:null===D||void 0===D?void 0:D.map(((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{className:"slno",children:L*C+(t+1)}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.rfid}),(0,l.jsx)("td",{style:{textTransform:"capitalize"},children:null===e||void 0===e?void 0:e.name}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.rollNumber}),(0,l.jsx)("td",{className:"".concat(v?"hide":""),children:null===e||void 0===e?void 0:e.balance}),(0,l.jsxs)("td",{className:"manage-sec",children:[(0,l.jsx)("button",{onClick:()=>{(e=>{var t,a,s;h(!0),A(!0),V(e),X({}),P(null===(t=D[e])||void 0===t?void 0:t.name),Y(null===(a=D[e])||void 0===a?void 0:a.rfid),G(null===(s=D[e])||void 0===s?void 0:s.rollNumber),je.current.value="",x(!0),ue(!1)})(t)},className:"edit-btn",children:(0,l.jsx)("img",{src:"/Icons/edit.png",alt:""})}),(0,l.jsx)("button",{onClick:()=>{(e=>{h(!0),O(!0),le({}),ge.current.value="",oe(D[e].rfid),x(!0),ue(!1)})(t)},className:"delete-btn",children:(0,l.jsx)("img",{src:"/Icons/remove.png",alt:""})})]}),(0,l.jsxs)("td",{className:"view-details-sec",children:[(0,l.jsx)("button",{onClick:()=>{var t;t=null===e||void 0===e?void 0:e.rfid,g(2),b("recharge_history",{state:{rfid:t}})},className:"recharge-history-btn",children:"Recharge"}),(0,l.jsx)("button",{onClick:()=>{var t;t=null===e||void 0===e?void 0:e.rfid,g(3),b("expense_history",{state:{rfid:t}})},className:"expense-history-btn ".concat(v?"hide":""),children:"Expense"})]})]},t+1)))})]})]}),(0,l.jsx)("div",{className:"table-loader-container ".concat(N||a?"":"hide"),children:(0,l.jsx)(o.Z,{})})]}),(0,l.jsx)("div",{className:"paginater-sec",children:(0,l.jsx)(i,{totalElements:I,pageSize:C,handlePageChange:e=>{pe(e.selected,!1),T(e.selected),h(!0)},isVisible:c&&!S&&null!==I&&0!==I})}),(0,l.jsxs)("form",{className:"edit-form ".concat(M?"open":""),onSubmit:fe,ref:xe,children:[(0,l.jsx)("div",{className:"form-overlay ".concat(he?"open":"")}),(0,l.jsx)("div",{className:"progress-bar ".concat(he?"open":""),children:(0,l.jsx)("div",{className:"progress-bar-value"})}),(0,l.jsx)("div",{className:"heading-sec",children:(0,l.jsx)("h1",{children:"Edit User "})}),(0,l.jsx)("p",{children:Q.rfidError}),(0,l.jsx)("input",{type:"text",name:"rfid",value:q,onChange:be,placeholder:"RFID Number"}),(0,l.jsx)("p",{children:Q.nameError}),(0,l.jsx)("input",{type:"text",name:"name",value:U,onChange:be,placeholder:"Student Name",style:{textTransform:"capitalize"}}),(0,l.jsx)("p",{children:Q.rollNumberError}),(0,l.jsx)("input",{type:"text",name:"rollNumber",value:z,onChange:be,placeholder:"Roll Number",style:{textTransform:"uppercase"}}),(0,l.jsx)("p",{children:Q.adminError}),(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{ref:je,type:"password",placeholder:"Admin Password"}),(0,l.jsx)("button",{className:"material-symbols-outlined",onClick:e=>{e.preventDefault(),ye(je)},children:(0,l.jsx)("img",{src:"/Icons/".concat(de?"visibility.png":"visibility_off.png"),alt:""})})]}),(0,l.jsxs)("div",{className:"form-footer-sec",children:[(0,l.jsx)("p",{children:null===Q||void 0===Q?void 0:Q.serverMessage}),(0,l.jsx)("button",{type:"submit",className:"save-btn",children:"Submit"})]})]}),(0,l.jsxs)("form",{className:"remove-form ".concat(F?"open":""),onSubmit:Ne,ref:ve,children:[(0,l.jsx)("div",{className:"form-overlay ".concat(he?"open":"")}),(0,l.jsx)("div",{className:"progress-bar ".concat(he?"open":""),children:(0,l.jsx)("div",{className:"progress-bar-value"})}),(0,l.jsx)("div",{className:"heading-sec",children:(0,l.jsx)("h1",{children:"Remove User"})}),(0,l.jsx)("p",{children:null===ce||void 0===ce?void 0:ce.adminError}),(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"password",placeholder:"Admin Password..",ref:ge}),(0,l.jsx)("button",{className:"material-symbols-outlined",onClick:e=>{e.preventDefault(),ye(ge)},children:(0,l.jsx)("img",{src:"/Icons/".concat(de?"visibility.png":"visibility_off.png"),alt:""})})]}),(0,l.jsxs)("div",{className:"form-footer-sec",children:[(0,l.jsx)("p",{children:null===ce||void 0===ce?void 0:ce.serverMessage}),(0,l.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]})]})]})};const h=function(e){let{reductionStatus:t,setNavigation:a,refreshRechargeTable:r,setRefreshRechargeTable:c,handleLogout:d}=e;const{state:u}=(0,n.TH)(),[h,m]=(0,s.useState)(!1),[x,v]=(0,s.useState)(""),[g,j]=(0,s.useState)([]),[p,f]=(0,s.useState)(null),[b]=(0,s.useState)(14),[N,y]=(0,s.useState)(1),[S,w]=(0,s.useState)(!1),E=async(e,a)=>{try{w(!0),m(!1);const s=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/recharge_history?rfid=").concat(null===u||void 0===u?void 0:u.rfid,"&pageNumber=").concat(e,"&pageLimit=").concat(b,"&reductionStatus=").concat(t?1:0),{method:"GET",credentials:"include"}),n=await s.json();switch(s.status){case 200:a&&f(null===n||void 0===n?void 0:n.historyLength),j(null===n||void 0===n?void 0:n.history);break;case 401:await d();break;default:v(n.error+"!"),m(!0)}}catch(s){v("oops something went wrong!"),m(!0)}finally{w(!1)}};return(0,s.useEffect)((()=>{r&&(m(!1),f(null),E(0,!0),c(!1))}),[r]),(0,s.useEffect)((()=>{a(2),E(0,!0)}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"recharge-table-container",children:h?(0,l.jsxs)("div",{className:"retry-form",children:[(0,l.jsx)("p",{children:x}),(0,l.jsx)("button",{onClick:()=>{E(0,!0)},children:"Retry"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"empty-animation-container ".concat(0===p?"":"hide"),children:(0,l.jsx)("h1",{children:"oops the table is empty!"})}),(0,l.jsxs)("table",{className:"".concat(null===p||0===p?"hide":""),children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"SL. NO."}),(0,l.jsx)("th",{children:"Date"}),(0,l.jsx)("th",{children:"Time"}),(0,l.jsx)("th",{children:"Amount"})]})}),(0,l.jsx)("tbody",{className:"".concat(S?"hide":""),children:null===g||void 0===g?void 0:g.map(((e,t)=>{const a=new Date(e.date);return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(N-1)*b+(t+1)}),(0,l.jsx)("td",{children:"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear())}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.amount})]},t)}))})]}),(0,l.jsx)("div",{className:"table-loader-container ".concat(S?"":"hide"),children:(0,l.jsx)(o.Z,{})}),(0,l.jsx)("div",{className:"paginater-sec ".concat(null===p||0===p?"hide":"")})]})}),(0,l.jsx)(i,{totalElements:p,pageSize:b,handlePageChange:e=>{E(e.selected,!1),y(e.selected+1)},isVisible:!h&&null!==p&&0!==p})]})};const m=function(e){let{reductionStatus:t,setNavigation:a,refreshExpenseTable:r,setRefreshExpenseTable:c,handleLogout:d}=e;const{state:u}=(0,n.TH)(),[h,m]=(0,s.useState)(!1),[x,v]=(0,s.useState)(""),[g,j]=(0,s.useState)([]),[p,f]=(0,s.useState)(null),[b]=(0,s.useState)(15),[N,y]=(0,s.useState)(1),[S,w]=(0,s.useState)(!1),E=async(e,a)=>{try{w(!0),m(!1);const s=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/expense_history?rfid=").concat(null===u||void 0===u?void 0:u.rfid,"&pageNumber=").concat(e,"&pageLimit=").concat(b,"&reductionStatus=").concat(t?1:0),{method:"GET",credentials:"include"}),n=await s.json();switch(s.status){case 200:a&&f(null===n||void 0===n?void 0:n.historyLength),j(null===n||void 0===n?void 0:n.history);break;case 401:await d();break;default:v(n.error+"!"),m(!0)}}catch(s){v("oops something went wrong!"),m(!0)}finally{w(!1)}};return(0,s.useEffect)((()=>{r&&(m(!1),f(null),E(0,!0),c(!1))}),[r]),(0,s.useEffect)((()=>{a(3),E(0,!0)}),[]),(0,l.jsxs)(l.Fragment,{children:[h?(0,l.jsxs)("div",{className:"retry-form",children:[(0,l.jsx)("p",{children:x}),(0,l.jsx)("button",{onClick:()=>{E(0,!0)},children:"Retry"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"empty-animation-container ".concat(0===p?"":"hide"),children:(0,l.jsx)("h1",{children:"oops the table is empty!"})}),(0,l.jsxs)("div",{className:"expense-table-container",children:[(0,l.jsxs)("table",{className:"".concat(null===p||0===p?"hide":""),children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"SL. NO."}),(0,l.jsx)("th",{children:"Date"}),(0,l.jsx)("th",{children:"Call Start Time"}),(0,l.jsx)("th",{children:"Call End Time"}),(0,l.jsx)("th",{children:"Reducted Amount"})]})}),(0,l.jsx)("tbody",{className:"".concat(S?"hide":""),children:null===g||void 0===g?void 0:g.map(((e,t)=>{const a=new Date(e.date);return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(N-1)*b+(t+1)}),(0,l.jsx)("td",{children:"".concat(a.getDate(),"/").concat(a.getMonth()+1,"/").concat(a.getFullYear())}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.callStartTime}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.callEndTime}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.reductedAmount})]},t)}))})]}),(0,l.jsx)("div",{className:"table-loader-container ".concat(S?"":"hide"),children:(0,l.jsx)(o.Z,{})})]})]}),(0,l.jsx)("div",{className:"paginater-sec ".concat(0===p||null===p?"hide":""),children:(0,l.jsx)(i,{totalElements:p,pageSize:b,handlePageChange:e=>{E(e.selected,!1),y(e.selected+1)},isVisible:!h&&null!==p&&0!==p})})]})};const x=function(){const e=(0,n.s0)(),[t,a]=(0,s.useState)(""),[r,c]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),[d,x]=(0,s.useState)([]),[v,g]=(0,s.useState)({rfid:"",name:"",rollNumber:""}),[j,p]=(0,s.useState)(!1),[f,b]=(0,s.useState)({}),[N,y]=(0,s.useState)(!1),[S,w]=(0,s.useState)(""),[E,k]=(0,s.useState)(!1),[D,R]=(0,s.useState)(!1),[C,L]=(0,s.useState)(!0),[T,I]=(0,s.useState)(!1),[_,M]=(0,s.useState)(!1),[A,F]=(0,s.useState)(!1),[O,U]=(0,s.useState)([]),[P,q]=(0,s.useState)(!1),[Y,z]=(0,s.useState)(new Date),[G,H]=(0,s.useState)([]),[V,W]=(0,s.useState)(""),[Z,J]=(0,s.useState)(""),[B,$]=(0,s.useState)(!1),[K,Q]=(0,s.useState)(!1),[X,ee]=(0,s.useState)(!1),[te,ae]=(0,s.useState)(!1),[se,ne]=(0,s.useState)(""),[re,ce]=(0,s.useState)({startDate:"",endDate:""}),[le,ie]=(0,s.useState)(!1),[oe,de]=(0,s.useState)(!1),[ue,he]=(0,s.useState)(!1),[me,xe]=(0,s.useState)(!1),[ve,ge]=(0,s.useState)(!1),[je,pe]=(0,s.useState)(1),fe=(0,s.useRef)(null),be=(0,s.useRef)(null),Ne=(0,s.useRef)(null),ye=(0,s.useRef)(null),Se=(0,s.useRef)(null),we=(e,t)=>{t||e.preventDefault(),y(!1),b({}),g(t?{rfid:fe.current[0].value,name:fe.current[1].value,rollNumber:fe.current[2].value}:{rfid:e.target[0].value,name:e.target[1].value,rollNumber:e.target[2].value}),p(!0)},Ee=e=>{"Escape"!==e.key||_||oe||(o(!1),F(!1),ee(!1),$(!1),ae(!1))},ke=async()=>{try{const t=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/logout"),{method:"GET",credentials:"include"});200===t.status||401===t.status||alert("cookie is not cleared!"),e("/logout")}catch(t){alert("cookie is not cleared!"),e("/logout")}e("/login")},De=e=>{"Enter"===e.key&&i&&we(fe.current,!0)},Re=e=>{const t=Y,a=[];t.setMonth(e?t.getMonth()+1:t.getMonth()-1);const s=new Date(t.getFullYear(),t.getMonth()+1,0);for(let n=1;n<=s.getDate();n++)a.push(n);H(a),z(t),W(t.getMonth()+1),J(t.getFullYear())},Ce=e=>{const t=Y,a=[],s=new Date(t.getFullYear(),t.getMonth()+1,0);for(let n=1;n<=s.getDate();n++)a.push(n);H(a),W(t.getMonth()+1),J(t.getFullYear()),Q(!!e),$(!B)};return(0,s.useEffect)((()=>{(async()=>{try{const t=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/validate"),{method:"GET",credentials:"include"}),s=await t.json();if(200===t.status)a(s.admin),c(s.reduction);else e("/login")}catch(t){alert(t.message)}})()}),[]),(0,s.useEffect)((()=>(window.addEventListener("keydown",De),()=>window.removeEventListener("keydown",De)))),(0,s.useEffect)((()=>{S?((async t=>{if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(t))try{R(!0),O.forEach((e=>{e.abort()}));const a=new AbortController;U((e=>[...e,a]));const s=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/search_user?query=").concat(t),{method:"GET",signal:a.signal,credentials:"include"}),n=await s.json();switch(s.status){case 200:x(n.users);break;case 401:e("/login");break;case 404:x([]);break;default:alert(n.error)}}catch(a){alert(a.message)}finally{R(!1),U([])}})(S),k(!1),L(!1)):k(!0)}),[S]),(0,s.useEffect)((()=>{T&&(be.current.value="",I(!1))}),[T]),(0,s.useEffect)((()=>{j&&(y((()=>{const e={};return v.rfid||(e.rfidError="RFID Required"),v.name||(e.nameError="Student Name Required"),v.rollNumber||(e.rollNumberError="Studnet Roll Number Required"),b(e),!0})()),p(!1))}),[j]),(0,s.useEffect)((()=>{N&&0===Object.keys(f).length&&(async()=>{try{M(!0);const e=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/add_user"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(v)}),t=await e.json();switch(e.status){case 201:b({serverMessage:t.message});break;case 401:await ke();break;case 409:b({rfidError:t.error});break;default:b({serverMessage:t.error})}}catch(e){alert(e.message)}finally{M(!1)}})()}),[N]),(0,s.useEffect)((()=>(document.addEventListener("keydown",Ee),()=>{document.removeEventListener("keydown",Ee)}))),(0,s.useEffect)((()=>{le&&(async()=>{try{de(!0);const e=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/download_recharge_history?reductionStatus=").concat(r?1:0,"&startDate=").concat(re.startDate,"&endDate=").concat(re.endDate),{method:"GET",credentials:"include",headers:{Accept:"application/pdf"}});switch(e.status){case 200:const t=await e.blob(),a=window.URL.createObjectURL(t),s=document.createElement("a");s.href=a,s.download="recharge.pdf",s.click(),s.remove(),window.URL.revokeObjectURL(a);break;case 401:await ke();break;case 500:const n=await e.json();ae(!0),ne(n.error)}}catch(e){alert(e.message)}finally{ie(!1),de(!1),ee(!1),F(!1)}})()}),[le]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"overlay ".concat(A?"open":""),onClick:()=>{_||oe||(o(!1),F(!1),ee(!1),$(!1),ae(!1))}}),(0,l.jsxs)("div",{className:"home-page-container",children:[(0,l.jsxs)("div",{className:"home-notification ".concat(te?"show":""),children:[(0,l.jsx)("p",{children:se}),(0,l.jsx)("button",{onClick:()=>{ae(!1),$(!1)},children:(0,l.jsx)("img",{src:"/Icons/close.png",alt:""})})]}),(0,l.jsxs)("nav",{children:[(0,l.jsx)("div",{className:"logo-sec",children:(0,l.jsx)("img",{src:"/vsense.png",alt:""})}),(0,l.jsxs)("div",{className:"heading-sec",children:[(0,l.jsx)("h1",{children:"TELEPHONE TRANSACTION MANAGEMENT SYSTEM"}),(0,l.jsx)("h3",{children:"For Secure Data And Management"})]}),(0,l.jsx)("div",{className:"search-bar-sec",children:(0,l.jsxs)("div",{className:"search-bar",children:[(0,l.jsx)("input",{ref:be,type:"text",placeholder:"Search...",onChange:e=>{w(e.target.value)}}),(0,l.jsx)("button",{children:"Search"})]})})]}),(0,l.jsxs)("div",{className:"side-nvigation-sec",children:[(0,l.jsx)("button",{className:"".concat(1===je?"selected":""),onClick:()=>{k(!0),I(!0),e("/")},children:(0,l.jsx)("img",{src:"/Icons/home.png",alt:""})}),(0,l.jsx)("button",{className:"".concat(1!==je?"selected":""),children:(0,l.jsx)("img",{src:"/Icons/history.png",alt:""})}),(0,l.jsx)("button",{onClick:()=>{switch(k(!0),I(!0),je){case 1:he(!0);break;case 2:xe(!0);break;case 3:ge(!0)}},children:(0,l.jsx)("img",{src:"/Icons/refresh_black.png",alt:""})})]}),(0,l.jsx)("div",{className:"user-table-sec",children:(0,l.jsxs)(n.Z5,{children:[(0,l.jsx)(n.AW,{exact:!0,path:"/",element:(0,l.jsx)(u,{adminUserName:t,reductionStatus:r,isSearchLoading:D,searchData:d,searchRefresh:E,initialRefresh:C,inputClear:I,isOverlay:A,setIsOverlay:F,setNavigation:pe,refreshUserInfoTable:ue,setRefreshUserInfoTable:he,handleLogout:ke})}),(0,l.jsx)(n.AW,{path:"/recharge_history",element:(0,l.jsx)(h,{reductionStatus:r,setNavigation:pe,refreshRechargeTable:me,setRefreshRechargeTable:xe,handleLogout:ke})}),(0,l.jsx)(n.AW,{path:"/expense_history",element:(0,l.jsx)(m,{reductionStatus:r,setNavigation:pe,refreshExpenseTable:ve,setRefreshExpenseTable:ge,handleLogout:ke})})]})}),(0,l.jsxs)("div",{className:"footer-sec",children:[(0,l.jsxs)("button",{className:"daily-history-btn button-loading",onClick:async()=>{const t=new Date,a=Se.current,s="".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()),n=new Date(t);n.setDate(t.getDate()+1);const c="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear());try{q(!0),a.disabled=!0;const t=await fetch("".concat("https://test-telephone-server.onrender.com/admin","/download_recharge_history?reductionStatus=").concat(r?1:0,"&startDate=").concat(s,"&endDate=").concat(c),{method:"GET",credentials:"include",headers:{Accept:"application/pdf"}});switch(t.status){case 200:const a=await t.blob(),s=window.URL.createObjectURL(a),n=document.createElement("a");n.href=s,n.download="recharge.pdf",n.click(),n.remove(),window.URL.revokeObjectURL(s);break;case 401:e("/login");break;default:const r=await t.json();alert(r.error)}}catch(l){alert(l.message)}finally{q(!1),a.disabled=!1}},ref:Se,children:["Daily Recharge History",(0,l.jsx)("div",{className:"button_loader-container",style:{opacity:"".concat(P?"1":"0")},children:(0,l.jsx)("div",{className:"button_any-element button_animation button_is_loading"})}),(0,l.jsx)("img",{src:"/Icons/download.png",alt:"",style:{opacity:"".concat(P?"0":"1")}})]}),(0,l.jsxs)("button",{className:"monthly-history-btn",onClick:()=>{z(new Date),Ne.current.textContent="Select Start Date",ye.current.textContent="Select End Date",ce({startDate:"",endDate:""}),ee(!0),F(!0)},children:["Recharge History",(0,l.jsx)("img",{src:"/Icons/download.png",alt:""})]}),(0,l.jsxs)("button",{onClick:()=>{o(!0),F(!0),b({});for(let e=0;e<3;e++)fe.current[e].value=""},className:"add-user-btn",children:["Add New User",(0,l.jsx)("img",{src:"/Icons/add.png",alt:""})]}),(0,l.jsxs)("button",{onClick:ke,className:"logout-btn",children:["Logout",(0,l.jsx)("img",{src:"/Icons/logout.png",alt:""})]})]}),(0,l.jsxs)("form",{className:"add-user-form ".concat(i?"open":""),onSubmit:we,ref:fe,children:[(0,l.jsx)("div",{className:"form-overlay ".concat(_?"open":"")}),(0,l.jsx)("div",{className:"progress-bar ".concat(_?"open":""),children:(0,l.jsx)("div",{className:"progress-bar-value"})}),(0,l.jsx)("div",{className:"heading-sec",children:(0,l.jsx)("h1",{children:"Add New User"})}),(0,l.jsx)("p",{children:f.rfidError}),(0,l.jsx)("input",{type:"text",placeholder:"RFID"}),(0,l.jsx)("p",{children:f.nameError}),(0,l.jsx)("input",{type:"text",placeholder:"Full Name"}),(0,l.jsx)("p",{children:f.rollNumberError}),(0,l.jsx)("input",{type:"text",placeholder:"RollNumber"}),(0,l.jsxs)("div",{className:"form-footer-sec",children:[(0,l.jsx)("p",{style:{color:"".concat("successfull"===f.serverMessage?"green":"red")},children:null===f||void 0===f?void 0:f.serverMessage}),(0,l.jsxs)("div",{className:"btn-sec",children:[(0,l.jsx)("button",{className:"material-symbols-outlined refresh-btn",onClick:e=>{e.preventDefault(),b({});for(let t=0;t<3;t++)fe.current[t].value=""},children:(0,l.jsx)("img",{src:"/Icons/refresh.png",alt:""})}),(0,l.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]})]})]}),(0,l.jsxs)("div",{className:"recharge-download-form ".concat(X?"show":""),children:[(0,l.jsx)("div",{className:"form-overlay ".concat(oe?"open":"")}),(0,l.jsx)("div",{className:"progress-bar ".concat(oe?"open":""),children:(0,l.jsx)("div",{className:"progress-bar-value"})}),(0,l.jsx)("h1",{children:"Recharge History"}),(0,l.jsx)("button",{onClick:()=>{Ce(!0)},ref:Ne,children:"Select Start Date"}),(0,l.jsx)("button",{onClick:()=>{Ce(!1)},ref:ye,children:"Select End Date"}),(0,l.jsxs)("button",{onClick:()=>(ae(!1),re.startDate?re.endDate?void(se||ie(!0)):(ne("End date is required"),void ae(!0)):(ne("Start date is required"),void ae(!0))),children:["Download",(0,l.jsx)("img",{src:"/Icons/download.png",alt:""})]}),(0,l.jsxs)("div",{className:"calender-container ".concat(B?"show":""),children:[(0,l.jsxs)("div",{className:"calender-header",children:[(0,l.jsx)("button",{onClick:()=>{Re(!1)},children:(0,l.jsx)("img",{src:"/Icons/prev.png",alt:""})}),(0,l.jsx)("h1",{children:"".concat(V,"-").concat(Z)}),(0,l.jsx)("button",{onClick:()=>{Re(!0)},children:(0,l.jsx)("img",{src:"/Icons/next.png",alt:""})})]}),(0,l.jsx)("div",{className:"calender-days-container",children:G.map(((e,t)=>(0,l.jsx)("div",{onClick:()=>{(e=>{if(K)ce({startDate:"".concat(e,"/").concat(V,"/").concat(Z),endDate:""}),Ne.current.textContent="Start Date: ".concat(e,"/").concat(V,"/").concat(Z);else{if(!re.startDate)return ne("Please select start date first"),void ae(!0);ce({startDate:re.startDate,endDate:"".concat(e,"/").concat(V,"/").concat(Z)});const t=re.startDate.split("/");if(+new Date(t[2],t[1]-1,t[0])>=+new Date(Z,V-1,e))return ne("End date should be greaterthan start date"),void ae(!0);ne(""),ae(!1),ce({startDate:re.startDate,endDate:"".concat(e,"/").concat(V,"/").concat(Z)}),ye.current.textContent="End Date: ".concat(e,"/").concat(V,"/").concat(Z)}$(!1)})(t+1)},children:e},t)))})]})]})]})]})}},176:()=>{}}]);
//# sourceMappingURL=690.3de25bc2.chunk.js.map