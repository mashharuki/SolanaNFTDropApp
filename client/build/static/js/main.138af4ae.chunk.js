(this["webpackJsonpcandy-drop"]=this["webpackJsonpcandy-drop"]||[]).push([[0],{105:function(e,t,n){"use strict";(function(e){var r=n(0),a=n.n(r),i=n(1),c=n(12),o=n(29),s=n(4),u=n(14),l=n(18),p=n(109),b=(n(176),n(21)),f=n(17),d=u.d.SystemProgram,g="processed";t.a=function(t){var n=t.walletAddress,r=Object(o.useState)(null),m=Object(c.a)(r,2),h=m[0],v=m[1],x=function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new s.PublicKey(n),t.next=3,u.d.PublicKey.findProgramAddress([e.from("candy_machine"),r.toBuffer()],b.d);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.PublicKey.findProgramAddress([e.from("metadata"),b.c.toBuffer(),n.toBuffer()],b.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.PublicKey.findProgramAddress([e.from("metadata"),b.c.toBuffer(),n.toBuffer(),e.from("edition")],b.c);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:u.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:l.b,isSigner:!1,isWritable:!1},{pubkey:u.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new u.d.TransactionInstruction({keys:i,programId:b.b,data:e.from([])})},S=function(){var e=Object(i.a)(a.a.mark((function e(){var t,r,i,o,s,f,g,m,v,S,O,j,K,T,P,E,_,A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.d.Keypair.generate(),e.next=3,Object(b.e)(t.publicKey,n.publicKey);case 3:if(r=e.sent[0],!h.state.tokenMint){e.next=10;break}return e.next=7,Object(b.e)(h.state.tokenMint,n.publicKey);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n.publicKey;case 11:return i=e.t0,o=h.id,s=[],f=[t],g=[],e.t1=u.d.SystemProgram,e.t2=n.publicKey,e.t3=t.publicKey,e.t4=l.a.span,e.next=22,h.program.provider.connection.getMinimumBalanceForRentExemption(l.a.span);case 22:if(e.t5=e.sent,e.t6=l.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=l.c.createInitMintInstruction(l.b,t.publicKey,0,n.publicKey,n.publicKey),e.t10=w(r,n.publicKey,n.publicKey,t.publicKey),e.t11=l.c.createMintToInstruction(l.b,t.publicKey,r,n.publicKey,[],1),m=[e.t8,e.t9,e.t10,e.t11],!h.state.gatekeeper){e.next=45;break}return e.t12=s,e.next=34,Object(b.g)(n.publicKey,h.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!h.state.gatekeeper.expireOnUse){e.next=45;break}return s.push({pubkey:b.a,isWritable:!1,isSigner:!1}),e.t15=s,e.next=42,Object(b.f)(h.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!h.state.whitelistMintSettings){e.next=60;break}return v=new u.d.PublicKey(h.state.whitelistMintSettings.mint),e.next=49,Object(b.e)(v,n.publicKey);case 49:if(S=e.sent[0],s.push({pubkey:S,isWritable:!0,isSigner:!1}),!h.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return O=u.d.Keypair.generate(),s.push({pubkey:v,isWritable:!0,isSigner:!1}),s.push({pubkey:O.publicKey,isWritable:!1,isSigner:!0}),f.push(O),e.next=58,h.program.provider.connection.getAccountInfo(S);case 58:e.sent&&(m.push(l.c.createApproveInstruction(l.b,S,O.publicKey,n.publicKey,[],1)),g.push(l.c.createRevokeInstruction(l.b,S,n.publicKey,[])));case 60:return h.state.tokenMint&&(j=u.d.Keypair.generate(),f.push(j),s.push({pubkey:i,isWritable:!0,isSigner:!1}),s.push({pubkey:j.publicKey,isWritable:!1,isSigner:!0}),m.push(l.c.createApproveInstruction(l.b,i,j.publicKey,n.publicKey,[],h.state.price.toNumber())),g.push(l.c.createRevokeInstruction(l.b,i,n.publicKey,[]))),e.next=63,y(t.publicKey);case 63:return K=e.sent,e.next=66,k(t.publicKey);case 66:return T=e.sent,e.next=69,x(o);case 69:return P=e.sent,E=Object(c.a)(P,2),_=E[0],A=E[1],e.t18=m,e.next=76,h.program.instruction.mintNft(A,{accounts:{candyMachine:o,candyMachineCreator:_,payer:n.publicKey,wallet:h.state.treasury,mint:t.publicKey,metadata:K,masterEdition:T,mintAuthority:n.publicKey,updateAuthority:n.publicKey,tokenMetadataProgram:b.c,tokenProgram:l.b,systemProgram:d.programId,rent:u.d.SYSVAR_RENT_PUBKEY,clock:u.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:u.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:s.length>0?s:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(p.a)(h.program.provider.connection,h.program.provider.wallet,[m,g],[f,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n,r,i,c,o,s,l,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j(),e.next=3,u.a.fetchIdl(b.d,t);case 3:return n=e.sent,r=new u.a(n,b.d,t),e.next=7,r.account.candyMachine.fetch(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_MACHINE_ID);case 7:i=e.sent,c=i.data.itemsAvailable.toNumber(),o=i.itemsRedeemed.toNumber(),s=c-o,l=i.data.goLiveDate.toNumber(),p=i.data.whitelistMintSettings&&i.data.whitelistMintSettings.presale&&(!i.data.goLiveDate||i.data.goLiveDate.toNumber()>(new Date).getTime()/1e3),f="".concat(new Date(1e3*l).toLocaleDateString()," @ ").concat(new Date(1e3*l).toLocaleTimeString()),v({id:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CANDY_MACHINE_ID,program:r,state:{itemsAvailable:c,itemsRedeemed:o,itemsRemaining:s,goLiveData:l,goLiveDateTimeString:f,isSoldOut:0===s,isActive:(p||i.data.goLiveDate.toNumber()<(new Date).getTime()/1e3)&&(!i.endSettings||(i.endSettings.endSettingType.date?i.endSettings.number.toNumber()>(new Date).getTime()/1e3:o<i.endSettings.number.toNumber())),isPresale:p,goLiveDate:i.data.goLiveDate,treasury:i.wallet,tokenMint:i.tokenMint,gatekeeper:i.data.gatekeeper,endSettings:i.data.endSettings,whitelistMintSettings:i.data.whitelistMintSettings,hiddenSettings:i.data.hiddenSettings,price:i.data.price}}),console.log({itemsAvailable:c,itemsRedeemed:o,itemsRemaining:s,goLiveData:l,goLiveDateTimeString:f,presale:p});case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SOLANA_RPC_HOST,t=new s.Connection(e);return new u.b(t,window.solana,g)};return Object(o.useEffect)((function(){O()}),[]),h?Object(f.jsxs)("div",{className:"machine-container",children:[Object(f.jsx)("p",{children:"Drop Date: ".concat(h.state.goLiveDateTimeString)}),Object(f.jsx)("p",{children:"Items Minted: ".concat(h.state.itemsRedeemed," / ").concat(h.state.itemsAvailable)}),Object(f.jsx)("button",{className:"cta-button mint-button",onClick:S,children:"Mint NFT"})]}):null}}).call(this,n(6).Buffer)},109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(10),a=n(0),i=n.n(a),c=n(1),o=n(4),s=n(71);var u=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a,c){var u,l,p,f,d,g,m,h,v,x,y,k,w,S,O=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=O.length>4&&void 0!==O[4]?O[4]:"Parallel",l=O.length>5&&void 0!==O[5]?O[5]:"singleGossip",p=O.length>6&&void 0!==O[6]?O[6]:function(e,t){},f=O.length>7&&void 0!==O[7]?O[7]:function(e,t){return!1},d=O.length>8?O[8]:void 0,n.publicKey){e.next=7;break}throw new s.a;case 7:if(g=[],d){e.next=12;break}return e.next=11,t.getRecentBlockhash(l);case 11:d=e.sent;case 12:m=function(e){var t=a[e],i=c[e];if(0===t.length)return"continue";var s=new o.Transaction;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=d.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(r.a)(i.map((function(e){return e.publicKey}))))),i.length>0&&s.partialSign.apply(s,Object(r.a)(i)),g.push(s)},h=0;case 14:if(!(h<a.length)){e.next=21;break}if("continue"!==m(h)){e.next=18;break}return e.abrupt("continue",18);case 18:h++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(g);case 23:v=e.sent,x=[],y={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",a.length),k=i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((r=b({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;p(t,n)})).catch((function(e){f(v[n],n),"StopOnFailure"===u&&(y.breakEarly=!0,y.i=n)})),"Parallel"===u){e.next=21;break}return e.prev=3,e.next=6,r;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!y.breakEarly){e.next=19;break}return console.log("Died on ",y.i),e.t1=y.i,e.next=16,Promise.all(x);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:x.push(r);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),w=0;case 29:if(!(w<v.length)){e.next=37;break}return e.delegateYield(k(w),"t0",31);case 31:if("object"!==typeof(S=e.t0)){e.next=34;break}return e.abrupt("return",S.v);case 34:w++,e.next=29;break;case 37:if("Parallel"===u){e.next=40;break}return e.next=40,Promise.all(x);case 40:return e.t1=v.length,e.next=43,Promise.all(x);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),l=function(){return(new Date).getTime()/1e3},p=15e3;function b(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(i.a.mark((function e(t){var n,r,a,o,s,u,b,f,g,h,x,y,k;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,o=void 0===a?p:a,s=n.serialize(),u=l(),b=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return f=e.sent,console.log("Started awaiting confirmation for",f),g=!1,Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g||!(l()-u<o)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(f,o,r,"recent",!0);case 13:if(h=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!h.err){e.next=19;break}throw console.error(h.err),new Error("Transaction failed: Custom instruction error");case 19:b=(null===h||void 0===h?void 0:h.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,d(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}y=x.logs.length-1;case 39:if(!(y>=0)){e.next=46;break}if(!(k=x.logs[y]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+k.slice("Program log: ".length));case 43:--y,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,g=!0,e.finish(47);case 50:return console.log("Latency",f,l()-u),e.abrupt("return",{txid:f,slot:b});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function d(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(i.a.mark((function e(t,n,r){var a,c,o,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),c=n._serialize(a),o=c.toString("base64"),s=[o,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return h.apply(this,arguments)}function h(){return h=Object(c.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l,p=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=p.length>3&&void 0!==p[3]?p[3]:"recent",o=p.length>4&&void 0!==p[4]&&p[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(p,b){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),p(u))}),a)}catch(f){s=!0,console.error("WS error in setup",t,f)}case 2:if(s||!o){e.next=8;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,p(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},116:function(e,t,n){},117:function(e,t,n){},120:function(e,t){},121:function(e,t){},152:function(e,t){},153:function(e,t){},176:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n.n(r),i=n(104),c=n.n(i),o=(n(116),n(0)),s=n.n(o),u=n(1),l=n(12),p=(n(117),n.p+"static/media/twitter-logo.d89d9a86.svg"),b=n(105),f=n(17),d="HARUKI05758694",g="https://twitter.com/".concat(d),m=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],i=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,!(n=t.solana)||!n.isPhantom){e.next=11;break}return console.log("Phantom wallet found!"),e.next=6,n.connect({onlyIfTrusted:!0});case 6:r=e.sent,console.log("Connected with Public Key:",r.publicKey.toString()),a(r.publicKey.toString()),e.next=12;break;case 11:alert("Solana object not found! Get a Phantom Wallet \ud83d\udc7b");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,!(n=t.solana)){e.next=7;break}return e.next=4,n.connect();case 4:r=e.sent,console.log("Connected with Public Key:",r.publicKey.toString()),a(r.publicKey.toString());case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return window.addEventListener("load",e),function(){return window.removeEventListener("load",e)}}),[]),Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"header-container",children:[Object(f.jsx)("p",{className:"header",children:"\ud83c\udf6d Candy Drop"}),Object(f.jsx)("p",{className:"sub-text",children:"NFT drop machine with fair mint"}),!n&&Object(f.jsx)("button",{className:"cta-button connect-wallet-button",onClick:c,children:"Connect to Wallet"})]}),n&&Object(f.jsx)(b.a,{walletAddress:window.solana}),Object(f.jsxs)("div",{className:"footer-container",children:[Object(f.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:p}),Object(f.jsx)("a",{className:"footer-text",href:g,target:"_blank",rel:"noreferrer",children:"built on @".concat(d)})]})]})})};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root"))},21:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return d}));var r=n(0),a=n.n(r),i=n(1),c=n(14),o=n(18),s=(n(4),new c.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ")),u=new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),l=new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),p=new c.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),b=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],l);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),f=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(6).Buffer)}},[[178,1,2]]]);
//# sourceMappingURL=main.138af4ae.chunk.js.map