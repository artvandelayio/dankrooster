(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,a,r,o,i,s,l,d,u,p,j,x,b,h,f,g,O=e(1),C=e(85),m=e.n(C),v=e(16),y=e.n(v),w=e(43),A=e(69),E=e(14),S=e(58),_=e(68),T=e.n(_),N=e(220),k=e.n(N),M=e(70),D=e(221),I=e(19),L={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(I.a)(Object(I.a)({},L),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(I.a)(Object(I.a)({},L),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(I.a)(Object(I.a)({},n),{},{account:t.payload.account});default:return n}},R={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},U=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(I.a)(Object(I.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(I.a)(Object(I.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(I.a)(Object(I.a)({},R),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},F=Object(M.b)({blockchain:K,data:U}),P=[D.a],z=Object(M.c)(M.a.apply(void 0,P)),W=Object(M.d)(F,z),Y=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(w.a)(y.a.mark((function n(t){var e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,W.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(Y("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},B=function(n){return{type:"CONNECTION_FAILED",payload:n}},G=function(n){return function(){var t=Object(w.a)(y.a.mark((function t(e){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(H());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},Q=e(15),X=Q.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),q=Q.a.div(a||(a=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),J=Q.a.div(r||(r=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),V=Q.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),Z=Q.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),$=Q.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),nn=Q.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),tn=(Q.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),Q.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),en=(Q.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3)),cn=Q.a.button(j||(j=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: #add8e6;\n  padding: 10px;\n  font-weight: bold;\n  color: #000000;\n  width: 300px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),an=Q.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: #add8e6;\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: #000000;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),rn=Q.a.div(b||(b=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: justify;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),on=Q.a.img(h||(h=Object(E.a)(["\n  width: 512px;\n  @media (min-width: 767px) {\n    width: 512px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),sn=Q.a.img(f||(f=Object(E.a)(["\n  \n  background-color: var(--accent);\n  \n  width: 512px;\n  @media (min-width: 512px) {\n    width: 512px;\n  }\n  @media (min-width: 900px) {\n    width: 900px;\n  }\n  transition: width 0.5s;\n"]))),ln=Q.a.a(g||(g=Object(E.a)(["\n  color: #000000;\n  text-decoration: none;\n"])));var dn=function(){var n=Object(S.b)(),t=Object(S.c)((function(n){return n.blockchain})),e=Object(S.c)((function(n){return n.data})),c=Object(O.useState)(!1),a=Object(A.a)(c,2),r=a[0],o=a[1],i=Object(O.useState)("Click buy to mint your NFT."),s=Object(A.a)(i,2),l=s[0],d=s[1],u=Object(O.useState)(1),p=Object(A.a)(u,2),j=p[0],x=p[1],b=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),h=Object(A.a)(b,2),f=h[0],g=h[1],C=function(){""!==t.account&&null!==t.smartContract&&n(H(t.account))},m=function(){var n=Object(w.a)(y.a.mark((function n(){var t,e;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,g(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){m()}),[]),Object(O.useEffect)((function(){C()}),[t.account]),Object(en.jsx)(X,{children:Object(en.jsxs)($,{flex:1,ai:"center",style:{padding:0,backgroundColor:"var(--primary)"},image:f.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(en.jsx)(sn,{alt:"example",src:"/config/images/roadmap.png"}),Object(en.jsx)(J,{}),Object(en.jsxs)(rn,{flex:1,style:{padding:0},test:!0,children:[Object(en.jsx)($,{flex:1,jc:"center",ai:"center"}),Object(en.jsx)(Z,{}),Object(en.jsxs)($,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:1},children:[Object(en.jsxs)(nn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[e.totalSupply," / ",f.MAX_SUPPLY]}),Object(en.jsx)(J,{}),Number(e.totalSupply)>=f.MAX_SUPPLY?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",f.NFT_NAME," on"]}),Object(en.jsx)(J,{}),Object(en.jsx)(ln,{target:"_blank",href:f.MARKETPLACE_LINK,children:f.MARKETPLACE})]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(nn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Free Mint - Just Pay Gas!"}),Object(en.jsx)(q,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"}}),Object(en.jsx)(J,{}),""===t.account||null===t.smartContract?Object(en.jsxs)($,{ai:"center",jc:"center",children:[Object(en.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",f.NETWORK.NAME," network"]}),Object(en.jsx)(J,{}),Object(en.jsx)(cn,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(w.a)(y.a.mark((function n(t){var e,c,a,r,o,i,s,l,d;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=n.sent,n.next=12,a.json();case 12:if(r=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return T.a.setProvider(i),s=new k.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==r.NETWORK.ID?(d=new T.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(G(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(B("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(B("Something went wrong."));case 31:n.next=34;break;case 33:t(B("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==t.errorMsg?Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(J,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(en.jsxs)(en.Fragment,{children:[Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{ai:"center",jc:"center",fd:"row",children:[Object(en.jsx)(an,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),x(n)}()},children:"-"}),Object(en.jsx)(V,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(en.jsx)(V,{}),Object(en.jsx)(an,{disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),x(n)}()},children:"+"})]}),Object(en.jsx)(J,{}),Object(en.jsx)($,{ai:"center",jc:"center",fd:"row",children:Object(en.jsx)(cn,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=f.WEI_COST,c=f.GAS_LIMIT,a=String(e*j),r=String(c*j);console.log("Cost: ",a),console.log("Gas limit: ",r),d("Minting your ".concat(f.NFT_NAME,"...")),o(!0),t.smartContract.methods.mint(j).send({gasLimit:String(r),to:f.CONTRACT_ADDRESS,from:t.account,value:a}).once("error",(function(n){console.log(n),d("Sorry, something went wrong please try again later."),o(!1)})).then((function(e){console.log(e),d("WOW, the ".concat(f.NFT_NAME," is yours! go visit Opensea.io to view it.")),o(!1),n(H(t.account))}))}(),C()},children:r?"BUSY":"BUY"})})]})]}),Object(en.jsx)(V,{})]}),Object(en.jsx)(Z,{}),Object(en.jsx)($,{flex:1,jc:"center",ai:"center"})]}),Object(en.jsx)(V,{}),Object(en.jsxs)($,{jc:"center",ai:"center",style:{width:"50%"},children:[Object(en.jsx)(sn,{alt:"example",src:"/config/images/roadmapdetails.png"}),Object(en.jsx)(sn,{alt:"example",src:"/config/images/roosterbot.png"}),Object(en.jsx)(ln,{target:"_blank",href:"https://discord.com/api/oauth2/authorize?client_id=832624236513722399&permissions=2148006976&scope=bot",children:Object(en.jsx)(on,{alt:"logo",src:"/config/images/invitebot.png"})}),Object(en.jsx)(ln,{target:"_blank",href:"https://discord.gg/Xg8SAMQbhY",children:Object(en.jsx)(on,{alt:"logo",src:"/config/images/discord.png"})}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(en.jsx)(ln,{target:"_blank",href:f.SCAN_LINK,children:Object(en.jsx)("a",{href:"https://etherscan.io/address/0x38418b48160d6a778a1173cf4664eb3c5c026dcc#code",children:"Verified Contract"})})}),Object(en.jsx)(J,{}),Object(en.jsx)(tn,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})})},un=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;e(n),c(n),a(n),r(n),o(n)}))};e(533);m.a.render(Object(en.jsx)(S.a,{store:W,children:Object(en.jsx)(dn,{})}),document.getElementById("root")),un()}},[[534,1,2]]]);
//# sourceMappingURL=main.376ebfec.chunk.js.map