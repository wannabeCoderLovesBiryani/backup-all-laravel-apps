(self.webpackChunklite=self.webpackChunklite||[]).push([[8127],{42440:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(67294);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o=r.createElement("g",{fillRule:"evenodd"},r.createElement("path",{d:"M4.13 12.21a15.4 15.4 0 0 1-2.54-2.28 6.61 6.61 0 0 1-.16-.2l-.25-.3.25-.3a13.08 13.08 0 0 1 .63-.7 15.4 15.4 0 0 1 1.7-1.51C5.55 5.54 7.5 4.7 9.51 4.7c.62 0 1.28.13 1.98.37l-.8.78a4.54 4.54 0 0 0-1.18-.18c-1.76 0-3.52.76-5.18 2.02-.58.45-1.12.93-1.58 1.41-.28.3-.28.36 0 .65a14.43 14.43 0 0 0 2.08 1.77l-.71.7zm3.05 1.57a6.32 6.32 0 0 0 4.61-.11c1-.38 2.04-.98 3.1-1.72a25.27 25.27 0 0 0 2.68-2.17l.37-.35-.37-.36a23.05 23.05 0 0 0-.76-.68 25.26 25.26 0 0 0-2.28-1.73l-.72.7a24.05 24.05 0 0 1 2.37 1.77c.2.17.2.42 0 .59-.57.49-1.2.97-1.84 1.43-1.01.7-2 1.26-2.9 1.61a5.4 5.4 0 0 1-1.92.42A6.6 6.6 0 0 1 8 13l-.81.78z"}),r.createElement("path",{d:"M12.05 9.06a2.68 2.68 0 0 1-2.7 3A2.74 2.74 0 0 1 9 12l3.06-2.96zM9.72 6.79a2.83 2.83 0 0 0-.37-.02 2.68 2.68 0 0 0-2.7 3l3.07-2.98zM3.6 14.3l-.35.34.68.7.35-.34 10.4-10.08.36-.34-.68-.7-.35.34z"}));const i=function(e){return r.createElement("svg",a({width:19,height:19,viewBox:"0 0 19 19"},e),o)}},68127:(e,t,n)=>{"use strict";n.d(t,{X:()=>P,c:()=>y});var r=n(63038),a=n.n(r),o=n(28655),i=n.n(o),l=n(71439),c=n(67294),s=n(12291),u=n(47875),m=n(65340),p=n(88065),d=n(99046),f=n(65922),g=n(78181),h=n(64504),x=n(72955),E=n(27952);function v(){var e=i()(["\n  fragment PostListingItemRecirc_post on Post {\n    __typename\n    id\n    title\n    isLocked\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n    ...BookmarkButton_post\n    ...MultiVote_post\n    ...PostRecircItemV2_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return v=function(){return e},e}var P=(0,l.Ps)(v(),u.H,x.h_,p.z,d.x,m.D),S=function(e){var t=e.height,n=e.width;return{paddingBottom:"".concat(t/n*100,"%"),position:"relative"}},_={height:"100%",position:"absolute",width:"100%"},w=function(e){var t=e.title,n=e.url;return c.createElement(g.P3,{href:n},c.createElement(h.Dx,{scale:"S",tag:"h3"},t))},y=(0,s.$j)((function(e){return{productName:e.config.productName}}))((function(e){var t,n,r=e.post,o=e.productName,i=e.target,l=c.useState(!1),s=a()(l,2),m=s[0],v=s[1],P=c.useCallback((function(e){!m&&e.isIntersecting&&v(!0)}),[m]);if((0,x.S1)({onIntersect:P,target:i,disconnect:function(){return m},rootMargin:"100px"},[m]),"SuggestedPost"===r.__typename?(t=function(e,t){var n,r,a,o;switch(e&&e[0]&&e[0].reason){case"TOP_SIMILAR_TO_POST":case"CF_POST_SIMILAR_TO_POST":return"Related reads";case"TOP_IN_TOPIC":return o=e[0].topics?e[0].topics[0].name:"topic","Popular in ".concat(o);case"POSTS_SHARING_AUTHOR":return n=e[0].users?e[0].users[0].name:"author","More from ".concat(n);case"POSTS_SHARING_TAGS":return(a=e[0].tags&&e[0].tags[0].name)?"Also tagged ".concat(a):"";case"TOP_IN_COLLECTION":return r=e[0].collections?e[0].collections[0].name:"publication","More from ".concat(r);case"TOP_FOR_THE_DAY_GLOBALLY":return"Top on ".concat(t);case"POSTS_SHARING_COLLECTION_AND_TAGS":return a=e[0].tags&&e[0].tags[0].name,r=e[0].collections?e[0].collections[0].name:"publication",a?"More on ".concat(a," from ").concat(r):"";case"RECOMMENDED_BY_AUTHOR":return(n=e[0].users&&e[0].users[0].name)?"Applause from ".concat(n):"";case"TOP_FOR_THE_DAY":return"Trending on ".concat(t);default:return"Picked for you"}}(r.postSuggestionReasons,o),n=r.post):n=r,!n)return null;var y,I,T,R,B,b,A,O=(y={id:(n.previewImage?n.previewImage.id:"")||"1*hn4v1tCaJy7cWMyb0bpNpQ.png",width:328,height:218,focusPercentX:n.previewImage?n.previewImage.focusPercentX:null,focusPercentY:n.previewImage?n.previewImage.focusPercentY:null},R=y.width,B=y.height,b=y.focusPercentX,A=y.focusPercentY,(T=y.id)?(I="number"==typeof b&&"number"==typeof A?[b,A]:[50,50],c.createElement(g.hS,null,(function(e){return c.createElement("div",{className:e(S({height:B,width:R}))},c.createElement("div",{className:e(_)},c.createElement(f.B,{miroId:T,imgHeight:B,imgWidth:R,width:"100%",height:"100%",freezeGifs:!1,focusPercent:I})))}))):null);return c.createElement(x.ot,{post:n,presentationContext:"PLACEMENT"},c.createElement(g.xu,{md:{marginBottom:"48px"}},c.createElement(g.T5,{alignItems:{xs:"flex-start",sm:"center",md:"center",lg:"flex-start",xl:"flex-start"},direction:{xs:"row",sm:"row-reverse",md:"row-reverse",lg:"row",xl:"row"}},c.createElement(g.P4,{size:{xs:12,sm:6,md:6,lg:12,xl:12}},t&&c.createElement(g.xu,{marginBottom:"12px",md:{display:"none"},xs:{display:"block"}},c.createElement(h.F,{scale:"M",tag:"h4"},t)),O&&c.createElement(g.xu,{marginBottom:"16px",md:{marginBottom:"0px"},xs:{marginBottom:"16px"}},c.createElement(g.rU,{display:"block",href:(0,E.jVf)(n)},m?O:null))),c.createElement(g.P4,{size:{xs:12,sm:6,md:6,lg:12,xl:12}},c.createElement(g.xu,{marginBottom:"16px"},t&&c.createElement(g.xu,{display:"none",marginBottom:"4px",md:{display:"block"},xs:{display:"none"}},c.createElement(h.F,{scale:"M",tag:"h4"},t)),c.createElement(w,{title:n.title?n.title:"",url:(0,E.jVf)(n)})),c.createElement(g.xu,{display:"flex",alignItems:"center",justifyContent:"space-between"},c.createElement(g.xu,{flexShrink:"1",marginRight:"10px"},c.createElement(u.G,{post:n,showBio:!1,scale:"S",showStar:!!n.isLocked,hideAvatar:!m})),c.createElement(g.xu,{display:"flex",alignItems:"center"},c.createElement(d.S,{post:n,buttonStyle:"SUBTLE",susiEntry:"clap_preview"}),c.createElement(g.xu,{borderRight:"BASE_LIGHTER",marginLeft:"12px",marginRight:"10px",height:"20px",width:"1px"}),c.createElement(p.e,{post:n,susiEntry:"bookmark_preview"})))))))}))},47875:(e,t,n)=>{"use strict";n.d(t,{H:()=>X,G:()=>N});var r=n(28655),a=n.n(r),o=n(34575),i=n.n(o),l=n(93913),c=n.n(l),s=n(2205),u=n.n(s),m=n(78585),p=n.n(m),d=n(29754),f=n.n(d),g=n(59713),h=n.n(g),x=n(71439),E=n(67294),v=n(12291),P=n(95482),S=n(9292),_=n(98281),w=n(31001),y=n(78181),I=n(42933),T=n(98024),R=n(80637),B=n(7650),b=n(42440),A=n(27390),O=n(27952);function L(){var e=a()(["\n  fragment PostByline_post on Post {\n    id\n    isPublished\n    firstPublishedAt\n    readingTime\n    statusForCollection\n    isLocked\n    visibility\n    collection {\n      name\n      id\n      ...collectionUrl_collection\n    }\n    creator {\n      id\n      name\n      username\n      bio\n      ...UserAvatar_user\n      ...UserFollowButton_user\n      ...userUrl_user\n    }\n  }\n  ","\n  ","\n  ","\n  ","\n"]);return L=function(){return e},e}var C={XS:{showFollowButton:!1,avatarScale:"XS"},S:{showFollowButton:!1,avatarScale:"S"},M:{showFollowButton:!0,avatarScale:"M"}},k=function(e,t){return h()({marginBottom:e?"2px":"0px",display:"flex",alignItems:"center"},R.xs(t),{marginBottom:"0px"})},M=function(e){u()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=f()(t);if(n){var a=f()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function a(){return i()(this,a),r.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.authDomain,n=e.currentLocation,r=e.post,a=e.showBio,o=e.scale,i=void 0===o?"M":o,l=e.detailScale,c=void 0===l?"M":l,s=e.showStar,u=void 0===s?r.isLocked:s,m=e.hideCollection,p=void 0!==m&&m,d=e.hideAvatar,f=void 0!==d&&d,g=e.hideDescription,h=void 0!==g&&g,x=e.noClamp,v=void 0!==x&&x,R=r.id,L=r.creator,M=r.collection,X=r.statusForCollection,N=r.visibility,D=r.isPublished,F=C[i];if(!r||!R||!L)return null;var Y=r.firstPublishedAt,U=L.username,j=L.name;if(!j||!U)return null;var G=E.createElement(_.Yt,{user:L,scale:F.avatarScale,link:!0}),H=a?E.createElement("div",null,L.bio):null,z="APPROVED"===X,V=F.showFollowButton?E.createElement(I.x,{marginLeft:"8px",xs:{display:"none"},flexShrink:"0"},E.createElement(w.Bv,{user:L,buttonSize:"COMPACT",susiEntry:"follow_byline"})):null,W=E.createElement(y.hS,null,(function(e){return E.createElement(y.Yi,null,(function(r){return E.createElement("div",{className:e(k(F.showFollowButton,r))},E.createElement(T.F,{scale:c,tag:"span",color:"DARKER",clamp:v?void 0:1},E.createElement(y.rU,{href:(0,O.AWr)(L,t),inline:!0},j),M&&z&&!p?E.createElement("span",null," ","in"," ",E.createElement(y.rU,{href:(0,O.WGd)(M,n,t),inline:!0},M.name)):null),V)}))})),$=E.createElement(T.F,{scale:c,tag:"span",clamp:1},H,E.createElement("div",null,D?E.createElement(y.rU,{href:(0,O.jVf)(r),inline:!0},Y&&E.createElement(P.E,{timestamp:Y})):E.createElement("span",null,"Draft")," ","·"," ","UNLISTED"===N?E.createElement(T.F,{scale:"S",tag:"span"},E.createElement(b.Z,null)," Unlisted"):E.createElement(E.Fragment,null,(0,A.Vd)(r.readingTime||0)," min read"),u&&E.createElement("span",{style:{paddingLeft:"4px"}},E.createElement(B.Z,{style:{marginTop:"-2px"}}))));return E.createElement(S.Y,{avatar:!f&&G,title:W,description:!h&&$})}}]),a}(E.Component),X=(0,x.Ps)(L(),O.nfI,_.WQ,w.sj,O.$mN),N=(0,v.$j)((function(e){return{currentLocation:e.navigation.currentLocation,authDomain:e.config.authDomain}}))(M)},65340:(e,t,n)=>{"use strict";n.d(t,{D:()=>E,d:()=>v});var r=n(67154),a=n.n(r),o=n(28655),i=n.n(o),l=n(71439),c=n(67294),s=n(12291),u=n(47875),m=n(61889),p=n(78181),d=n(64504),f=n(72955),g=n(90038),h=n(27952);function x(){var e=i()(["\n  fragment PostRecircItemV2_post on Post {\n    __typename\n    id\n    title\n    mediumUrl\n    previewImage {\n      id\n      focusPercentX\n      focusPercentY\n    }\n    ...PostByline_post\n    ...PostPresentationTracker_post\n  }\n  ","\n  ","\n"]);return x=function(){return e},e}var E=(0,l.Ps)(x(),u.H,f.h_),v=(0,s.$j)((function(e){return{defaultImages:e.config.defaultImages}}))((function(e){var t,n=e.post,r=e.defaultImages,o="SuggestedPost"===n.__typename?null==n?void 0:n.post:n;if(!o)return null;var i,l,s,x,E=o.title,v=o.previewImage,P=null==r||null===(t=r.postPreviewImage)||void 0===t?void 0:t.imageId,S=(s=(i={id:(null==v?void 0:v.id)||P,focusPercentX:null==v?void 0:v.focusPercentX,focusPercentY:null==v?void 0:v.focusPercentY}).focusPercentX,x=i.focusPercentY,(l=i.id)?c.createElement(m.F,{miroId:l,freezeGifs:!1,focusPercentX:s,focusPercentY:x,strategy:g._S.Crop,width:70,height:70,otherWidths:[48,70],expectedWidth:70,rules:[{minWidth:{xs:"48px",sm:"48px",md:"48px",lg:"70px",xl:"70px"},minHeight:{xs:"48px",sm:"48px",md:"48px",lg:"70px",xl:"70px"}}]}):null);return c.createElement(f.ot,{post:o,presentationContext:"PLACEMENT"},c.createElement(p.xu,{display:"flex",justifyContent:"space-between"},c.createElement(p.xu,{flexShrink:"1",xs:{marginRight:"16px"},sm:{marginRight:"16px"},md:{marginRight:"16px"}},c.createElement(p.xu,{paddingBottom:"8px"},c.createElement(d.X6,{scale:{xs:"XXS",sm:"XXS",md:"XXS",lg:"XS",xl:"XS"}},c.createElement(p.P3,{href:(0,h.jVf)(o)},E))),c.createElement(u.G,{post:o,showBio:!1,scale:"S",detailScale:"S",showStar:!!o.isLocked,hideAvatar:!0,hideDescription:!0,noClamp:!0})),S&&c.createElement(p.xu,a()({marginLeft:"12px",marginRight:"8px"},{sm:{marginLeft:"16px",marginRight:"0px"}}),c.createElement(p.rU,{display:"block",href:(0,h.jVf)(o)},S))))}))}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/8127.f1f6c975.chunk.js.map