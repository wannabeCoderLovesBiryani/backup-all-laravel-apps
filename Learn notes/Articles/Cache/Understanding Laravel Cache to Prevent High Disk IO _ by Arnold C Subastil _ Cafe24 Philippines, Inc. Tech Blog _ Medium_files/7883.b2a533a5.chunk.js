(self.webpackChunklite=self.webpackChunklite||[]).push([[7883],{7883:(e,n,t)=>{"use strict";t.d(n,{Z:()=>ne,G:()=>te});var o=t(28655),i=t.n(o),r=t(63038),l=t.n(r),a=t(71439),c=t(67294),s=t(12291),u=t(93653),d=t(46829);function m(){var e=i()(["\n  mutation DismissPostMutation($postId: ID!) {\n    dismissPost(postId: $postId)\n  }\n"]);return m=function(){return e},e}var p=(0,a.Ps)(m()),E=t(35848),f=t(42963),v=t(53962),h=t(62806),g=t(1506),b=t(73882),C=t(71245),x=t(74871),y=t(32262),w=t(78181),P=t(64504),S=t(85277),I="manageSubmissionPopover",F=function(e){var n=e.viewer,t=e.show,o=e.post;return n&&"PENDING"===o.statusForCollection&&((0,x.DM)(o)||(0,x.py)(o,n))?c.createElement(y.Sl,null,c.createElement(w.rU,{ariaControls:I,ariaExpanded:"false",onClick:t},"Manage submission")):null},D=function(e){var n=e.children,t=e.isVisible,o=e.post,i=e.hide,r=e.showLoadingIndicator,l=(0,C.h3)(o),a=(0,C.yb)(o),u=(0,s.I0)(),d=o.pendingCollection;return d?c.createElement(w.J2,{ariaId:I,isVisible:t,hide:i,popoverRenderFn:function(){return c.createElement(w.xu,{padding:"16px",maxWidth:"280px"},c.createElement(w.xu,{display:"flex",flexDirection:"row",alignItems:"center"},c.createElement(w.xu,{paddingRight:"8px"},c.createElement(b.v,{collection:d,size:40})),c.createElement(P.F,{scale:"S"},"This draft is submitted to ",d.name,".")),c.createElement(w.xu,{flexDirection:"row",display:"flex",paddingTop:"16px"},c.createElement(w.xu,{paddingRight:"8px"},c.createElement(w.zx,{buttonStyle:"OBVIOUS",onClick:function(){i(),r(),l(o.pendingCollection).then((function(){window.location.reload(!1)}))}},"Accept")),c.createElement(w.zx,{buttonStyle:"SUBTLE",onClick:function(){a(o.pendingCollection).then((function(){u((0,S.Dx)({message:"Story removed from ".concat(d.name||"publication")}))})),i()}},"Don't accept")))}},n):n},k="removeFromPublicationPopover",_=function(e){var n=e.viewer,t=e.show,o=e.post;return n&&("APPROVED"===o.statusForCollection&&((0,x.DM)(o)||(0,x.py)(o,n)||(0,x.Hj)(o,n))||"PENDING"===o.statusForCollection&&(0,x.Hj)(o,n))?c.createElement(y.Sl,null,c.createElement(w.rU,{ariaControls:k,ariaExpanded:"false",onClick:t},"Remove story from publication")):null},R=function(e){var n=e.children,t=e.isVisible,o=e.hide,i=e.post,r=e.viewer,l=(0,s.I0)(),a=(0,C.yb)(i),u=i.collection||i.pendingCollection;return u?c.createElement(w.J2,{ariaId:k,isVisible:t,hide:o,popoverRenderFn:function(){return c.createElement(w.xu,{padding:"16px",maxWidth:"280px"},c.createElement(w.xu,{display:"flex",flexDirection:"row",alignItems:"center"},c.createElement(w.xu,{paddingRight:"8px"},c.createElement(b.v,{collection:u,size:40})),"APPROVED"===i.statusForCollection?c.createElement(P.F,{scale:"S"},(0,x.Hj)(i,r)?"Your":"This"," story is published in"," ",u.name,"."):"PENDING"===i.statusForCollection?c.createElement(P.F,{scale:"S"},"Your story is being reviewed by ",u.name," editors."):c.createElement(P.F,{scale:"S"},"This draft is submitted to ",u.name)),c.createElement(w.xu,{flexDirection:"row",display:"flex",paddingTop:"16px"},c.createElement(w.xu,{paddingRight:"8px"},c.createElement(w.zx,{buttonStyle:"SUBTLE",onClick:function(){a(u).then((function(){l((0,S.Dx)({message:"Story removed from ".concat(u.name||"publication")}))}),(function(){l((0,S.Dx)({message:"There was a problem removing the story from ".concat(u.name||"publication"),toastStyle:"ERROR"}))})),o()}},"PENDING"===i.statusForCollection?"Cancel submission":"Remove from ".concat(u.name||"")))))}},n):n},T=t(965),M=t(49925),A=t(78820),U=t(73232),O=t(85740),V=t(53976),L=t(34675),B=t(62181),N=t(57469),H=t(23824),K=t(29169),z=t(14391),Q=t(65347),G=t(67297),j=t(93394),q=t(39171),J=t(51064),W=t(95614),$=t(55573),X=t(27952);function Y(){var e=i()(["\n  fragment CreatorActionOverflowPopover_post on Post {\n    allowResponses\n    id\n    statusForCollection\n    isLocked\n    isPublished\n    clapCount\n    mediumUrl\n    pinnedAt\n    pinnedByCreatorAt\n    curationEligibleAt\n    mediumUrl\n    responseDistribution\n    visibility\n    ...useIsPinnedInContext_post\n    pendingCollection {\n      id\n      name\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      viewerEdge {\n        id\n        isEditor\n      }\n      domain\n      slug\n    }\n    creator {\n      id\n      viewerEdge {\n        id\n        isBlocking\n      }\n      ...MutePopoverOptions_creator\n      ...auroraHooks_publisher\n    }\n    collection {\n      id\n      name\n      creator {\n        id\n      }\n      avatar {\n        id\n      }\n      viewerEdge {\n        id\n        isEditor\n      }\n      domain\n      slug\n      ...MutePopoverOptions_collection\n      ...auroraHooks_publisher\n    }\n    viewerEdge {\n      clapCount\n      id\n      shareKey\n    }\n    ...ClapMutation_post\n  }\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return Y=function(){return e},e}var Z=function(e){return{fill:e.baseColor.fill.normal,":hover":{fill:e.baseColor.fill.darker},":focus":{fill:e.baseColor.fill.darker}}};function ee(){return c.createElement(w.hS,null,(function(e){return c.createElement(j.Z,{className:e(Z)})}))}var ne=function(e){var n,t,o=e.creator,i=e.post,r=e.collection,a=e.showLoadingIndicator,m=e.setIsAuthorOrPubMuted,b=e.setMutedAuthorId,C=e.setMutedPubId,x=e.onPostDismissed,P=e.isMutingFromHomeFeed,I=e.isDismissDisabled,k=e.isMuteDisabled,j=e.hideUndoApplause,Y=void 0!==j&&j,Z=c.useState(!1),ne=l()(Z,2),te=ne[0],oe=ne[1],ie=c.useState(!1),re=l()(ie,2),le=re[0],ae=re[1],ce=c.useState(!1),se=l()(ce,2),ue=se[0],de=se[1],me=(0,G.b$)((function(e){return e.multiVote.clapsPerPost})),pe=(0,s.I0)(),Ee=c.useCallback((function(e){return pe((0,Q.at)(e))}),[pe]),fe=(0,$.l)(me,i,i.viewerEdge),ve=fe.clapCount,he=fe.viewerClapCount,ge=(0,S.w)(),be=(0,L.Hk)().value,Ce=null==be?void 0:be.id,xe=!!(0,V.V)({name:"enable_updated_three_dot_menu",placeholder:!1}),ye=(0,T.CP)(),we=function(e){return(0,d.useMutation)(p,{variables:{postId:e}})}(i.id),Pe=l()(we,1)[0],Se=(0,A.KQ)(i),Ie=l()(Se,2),Fe=Ie[0],De=Ie[1],ke=(0,M.UL)(i.collection),_e=(0,M.UL)(i.creator),Re=c.useCallback((function(e){var n;ge({extraParams:{collectionName:(null===(n=i.collection)||void 0===n?void 0:n.name)||"",becamePinned:!!e.data.setPinnedAt.pinnedAt},message:"",toastStyle:"POST_PINNED_TO_COLLECTION_HOMEPAGE"})}),[null===(n=i.collection)||void 0===n?void 0:n.name]),Te=c.useCallback((function(e){ge({message:e.data.postSetPinnedByCreatorAt.pinnedByCreatorAt?"This story has been pinned to your profile's homepage":"This story has been unpinned from your profile's homepage"})}),[]),Me=c.useCallback((function(){De().then(Re)}),[De,Re,null==i||null===(t=i.collection)||void 0===t?void 0:t.name]),Ae=(0,A.In)(i),Ue=l()(Ae,2),Oe=Ue[0],Ve=Ue[1],Le=c.useCallback((function(){Ve().then(Te)}),[Ve,Te]),Be=!(0,W.T)(),Ne=(0,G.v9)((function(e){return e.config.authDomain})),He=c.useState(!1),Ke=l()(He,2),ze=Ke[0],Qe=Ke[1],Ge=i.responseDistribution===z.Et.DISTRIBUTED,je=(0,J.O)(!1),qe=l()(je,3),Je=qe[0],We=qe[1],$e=qe[2],Xe=(0,J.O)(!1),Ye=l()(Xe,4),Ze=Ye[0],en=Ye[2],nn=Ye[3],tn=(0,u.j)(i.id),on=l()(tn,1)[0],rn=(0,J.O)(!1),ln=l()(rn,3),an=ln[0],cn=ln[1],sn=ln[2],un=c.useCallback((function(){on().then((function(){return window.location.reload()}))}),[on]),dn="Delete story".concat(Ge?" and response":""),mn=Ge?U.Q:"Are you sure you want to delete this story?",pn=(0,O.P5)("can_edit_members_only_posts");if(!o||!be)return null;var En=i.allowResponses,fn=i.id,vn=i.pendingCollection,hn=i.mediumUrl,gn=i.viewerEdge.shareKey,bn=i.visibility,Cn=Ce===o.id,xn=(null==r?void 0:r.viewerEdge.isEditor)||(null==vn?void 0:vn.viewerEdge.isEditor),yn=Cn||xn,wn=pn&&i&&i.isLocked,Pn=yn||wn,Sn="creatorActionOverflowMenu",In="LOCKED"===bn,Fn=xn&&!Cn||!yn,Dn=function(){return c.createElement(E.qT,{hidePopover:en,creator:o,collection:r,postId:i.id,setIsAuthorOrPubMuted:m,setMutedAuthorId:b,setMutedPubId:C,isMutingFromHomeFeed:P})},kn=function(){return c.createElement(_,{viewer:be,post:i,show:function(){de(!0),en()}})},_n=function(){return c.createElement(h.r,{hidePopover:en,postId:i.id,allowResponses:En})},Rn=function(){return c.createElement(c.Fragment,null,be.id&&ve&&he&&he>0?c.createElement(y.Sl,null,c.createElement(w.rU,{onClick:function(){ye(i,(null==be?void 0:be.id)||"",-he),Ee({postId:fn,clapCount:ve-he,viewerClapCount:0,viewerHasClappedSinceFetch:!0}),en()}},"Undo applause for this post")):null)},Tn=function(){return c.createElement(c.Fragment,null,Ce?c.createElement(K.z,{targetUserId:o.id,postId:i.id,hidePopover:en,viewerId:Ce}):c.createElement(y.Sl,null,c.createElement(B.R9,{operation:"register",post:i,susiEntry:"report_footer"},"Report this story")))};return ze?c.createElement(f.l,{to:(0,X.d0A)(Ne,i.id)}):c.createElement(c.Fragment,null,c.createElement(w.QH,{buttonStyle:"STRONG",cancelText:"Cancel",isVisible:Je,onConfirm:function(){Qe(!0)},hide:$e,titleText:"Edit story and response",confirmText:"Continue",isDestructiveAction:!1},U.t),c.createElement(w.QH,{buttonStyle:"ERROR",cancelText:"Cancel",isVisible:an,onConfirm:un,hide:sn,titleText:dn,confirmText:"Delete",isDestructiveAction:!0},mn),c.createElement(w.J2,{ariaId:Sn,isVisible:Ze,hide:en,popoverRenderFn:function(){return c.createElement(y.mX,null,c.createElement(c.Fragment,null,Be&&Pn?c.createElement(y.Sl,null,Ge?c.createElement(w.rU,{linkStyle:"SUBTLE",onClick:(0,q.B)(en,We)},"Edit story"):c.createElement(w.rU,{linkStyle:"SUBTLE",href:(0,X.d0A)(Ne,i.id)},"Edit story")):null,r&&xn&&ke&&c.createElement(y.Sl,null,c.createElement(w.rU,{onClick:Me},Fe?"Unpin this story from ":"Pin this story to ",r.name)),Cn&&_e&&c.createElement(y.Sl,null,c.createElement(w.rU,{onClick:Le},Oe?"Unpin this story from your profile":"Pin this story to your profile")),Ce&&!I?c.createElement(y.Sl,null,c.createElement(w.rU,{onClick:function(){Pe({variables:{postId:i.id}}),x&&x(i.id),en()}},"Dismiss this story")):null,yn?c.createElement(c.Fragment,null,c.createElement(y.oK,null),c.createElement(y.Sl,null,c.createElement(w.rU,{href:(0,X.KIb)(Ne,i.id)},"Story settings"))):null,yn&&c.createElement(y.Sl,null,c.createElement(w.rU,{href:(0,X.T0G)(Ne,i.id)},xe?"Story stats":"View stats")),yn&&In&&hn&&gn&&c.createElement(v.$,{post:i,shareKey:gn}),xe?c.createElement(c.Fragment,null,yn&&c.createElement(y.oK,null)):c.createElement(c.Fragment,null,yn?c.createElement(c.Fragment,null,!k&&Dn(),c.createElement(g.yi,{post:i,show:function(){ae(!0),en()}}),kn(),c.createElement(F,{viewer:be,post:i,show:function(){oe(!0),en()}}),_n()):null),xe?c.createElement(c.Fragment,null,yn?c.createElement(c.Fragment,null,_n(),kn(),Cn&&c.createElement(y.Sl,null,c.createElement(w.rU,{onClick:(0,q.B)(en,cn)},"Delete story"))):null):yn?c.createElement(c.Fragment,null,c.createElement(y.oK,null),!Cn&&Rn(),Tn(),c.createElement(N.F,{hidePopover:en,creator:o,viewer:be})):null,xe?c.createElement(c.Fragment,null,Fn?c.createElement(c.Fragment,null,xn&&c.createElement(y.oK,null),!Y&&Rn(),Tn(),c.createElement(E.qT,{hidePopover:en,creator:o}),c.createElement(N.F,{hidePopover:en,creator:o,viewer:be}),c.createElement(H.j,{hidePopover:en,creator:o,viewer:be})):null):c.createElement(c.Fragment,null,yn?null:c.createElement(c.Fragment,null,Dn(),!Y&&Rn(),Tn(),c.createElement(N.F,{hidePopover:en,creator:o,viewer:be})))))}},c.createElement(g.jB,{post:i,isVisible:le,hide:function(){ae(!1)},showLoadingIndicator:a},c.createElement(R,{viewer:be,post:i,isVisible:ue,hide:function(){de(!1)}},c.createElement(D,{post:i,isVisible:te,hide:function(){oe(!1)},showLoadingIndicator:a},c.createElement(w.xu,{flexGrow:"0",marginRight:"-4px"},c.createElement(w.rU,{ariaControls:Sn,ariaExpanded:Ze?"true":"false",ariaLabel:"More options",onClick:nn},c.createElement(ee,null))))))))},te=(0,a.Ps)(Y(),E.mz,E.Gj,T.JP,A.xt,M.C5)},1506:(e,n,t)=>{"use strict";t.d(n,{x7:()=>k,yi:()=>M,jB:()=>O});var o=t(63038),i=t.n(o),r=t(28655),l=t.n(r),a=t(71439),c=t(80439),s=t(67294),u=t(73882),d=t(71245),m=t(74871),p=t(34675),E=t(32262),f=t(78181),v=t(64504),h=t(72955);function g(){var e=l()(["\n  fragment CollectionSubmission_post on Post {\n    id\n    ...CollectionSubmissionPopover_post\n    ...CollectionSubmissionPopoverMenuItem_post\n  }\n  ","\n  ","\n"]);return g=function(){return e},e}function b(){var e=l()(["\n  fragment CollectionSubmissionPopover_post on Post {\n    id\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);return b=function(){return e},e}function C(){var e=l()(["\n  fragment CollectionSubmissionPopoverMenuItem_post on Post {\n    id\n    statusForCollection\n    isPublished\n    creator {\n      id\n    }\n  }\n"]);return C=function(){return e},e}function x(){var e=l()(["\n  query CollectionSubmissionPopoverQuery {\n    viewer {\n      id\n      writerCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n      adminCollections {\n        ...CollectionSubmissionPopoverQuery_collection\n      }\n    }\n  }\n  ","\n"]);return x=function(){return e},e}function y(){var e=l()(["\n  fragment CollectionSubmissionPopoverQuery_collection on Collection {\n    ...CollectionSubmissionOption_collection\n    ...ManageSubmission_collection\n  }\n  ","\n  ","\n"]);return y=function(){return e},e}function w(){var e=l()(["\n  fragment CollectionSubmissionOption_collection on Collection {\n    id\n    name\n    slug\n    ...CollectionAvatar_collection\n  }\n  ","\n"]);return w=function(){return e},e}var P=(0,a.Ps)(w(),u.d),S=(0,a.Ps)(y(),P,m.a6),I=(0,a.Ps)(x(),S),F=(0,a.Ps)(C()),D=(0,a.Ps)(b()),k=(0,a.Ps)(g(),D,F),_="collectionSubmissionPopover",R=[{name:"",value:"No publication",content:s.createElement(f.xu,{height:"32px",display:"flex",alignItems:"center",marginLeft:"5px"},s.createElement(v.F,{scale:"M",color:"DARKER"},"No publication"))}];function T(e){var n=e.collection;return n.name?s.createElement(f.xu,{display:"flex",justifyContent:"space-between",width:"200px",alignItems:"center",marginLeft:"5px"},s.createElement(v.F,{scale:"M",color:"DARKER"},n.name),s.createElement(u.v,{collection:n,size:32})):null}function M(e){var n=e.show,t=e.post,o=t.statusForCollection,r=t.isPublished,l=s.useState(!1),a=i()(l,2),c=a[0],u=a[1];return c||h.V6.on("load",(function(){return u(!0)})),!o&&r&&c?s.createElement(U,{post:t,noQueryReturn:null},(function(e){var o=e.loading,i=e.error,r=e.data;if(o||i)return null;var l=(void 0===r?{viewer:void 0}:r).viewer,a=t.creator;if(!l||!a||l.id!==a.id)return null;var c=l.adminCollections,u=l.writerCollections;return 0===c.length&&0===u.length?null:s.createElement(E.Sl,null,s.createElement(f.rU,{ariaControls:_,ariaExpanded:"false",onClick:n},"Add to publication"))})):null}function A(e){var n=e.isVisible,t=e.hide;return s.createElement(f.Vq,{isVisible:n,hide:t,withCloseButton:!0},s.createElement(f.xu,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",maxWidth:"480px"},s.createElement(v.X6,{scale:"M",tag:"h3"},"Story submitted"),s.createElement(f.xu,{paddingTop:"8px",paddingBottom:"24px"},s.createElement(v.QE,{scale:"M"},"We’ll email you when the publication editor has reviewed your submission.")),s.createElement(f.zx,{buttonStyle:"OBVIOUS",onClick:t},"OK")))}var U=function(e){var n=e.children,t=e.post,o=e.noQueryReturn,i=t.creator;return i?s.createElement(p.I8,null,(function(e){return e?e.id!==i.id?o:s.createElement(c.AE,{query:I,ssr:!1},(function(e){var t=e.loading,o=e.error,i=e.data;return n({loading:t,error:o,data:i})})):o})):o},O=function(e){var n=e.post,t=e.hide,o=e.showLoadingIndicator,r=e.isVisible,l=e.children,a=s.useState(!1),c=i()(a,2),u=c[0],m=c[1],p=s.useState(""),E=i()(p,2),g=E[0],b=E[1],C=(0,d.h3)(n),x=(0,d.Lf)(n);return u||h.V6.on("load",(function(){return m(!0)})),n.isPublished&&u?s.createElement(f.Bn,null,(function(e){var i=e.isVisible,a=e.hide,c=e.show;return s.createElement(s.Fragment,null,s.createElement(A,{hide:a,isVisible:i}),s.createElement(U,{post:n,noQueryReturn:l},(function(e){var i=e.loading,a=e.error,u=e.data;if(i||a)return l;var d=(void 0===u?{viewer:void 0}:u).viewer,m=n.creator;if(!d||!m||d.id!==m.id)return l;var p=d.adminCollections,E=d.writerCollections;if(0===p.length&&0===E.length)return l;var h=p.concat(E).filter((function(e){return!!e&&!!e.slug&&!!e.name})).map((function(e){return{name:e.slug||"",value:e.name||"",content:s.createElement(T,{collection:e})}})),y=R.concat(h),w=p.reduce((function(e,n){return e[n.slug||""]=n,e}),{}),P=E.reduce((function(e,n){return e[n.slug||""]=n,e}),{}),S="";if(g){var I=y.find((function(e){return e.name===g}));I&&(S=I.value)}var F="addStoryToPublicationTitle";return s.createElement(f.J2,{ariaId:_,hide:t,isVisible:r,popoverRenderFn:function(){return s.createElement(f.xu,{padding:"20px",width:"280px",display:"flex",flexDirection:"column"},s.createElement(v.F,{scale:"M",color:"DARKER",ariaLabelledById:F},"Add your story to a publication:"),s.createElement(f.xu,{marginTop:"10px",position:"relative"},s.createElement(f.xu,{position:"absolute",height:"16px",width:"100%",bottom:"0",zIndex:"100",backgroundImage:"linear-gradient(transparent, #ffffff)"}),s.createElement(f.xu,{maxHeight:"160px",overflow:"auto"},s.createElement(f.Ee,{value:S,onChange:b,options:y,radioButtonsName:"addStory",ariaLabelledBy:F}))),s.createElement(f.xu,{display:"flex",marginTop:"20px"},g in w?s.createElement(f.zx,{onClick:function(){var e=w[g];t(),o(),C(e).then((function(){window.location.reload(!1)}))},buttonStyle:"OBVIOUS"},"Add story"):s.createElement(f.zx,{onClick:function(){var e=P[g];x(e),t(),c()},disabled:!g},"Submit"),s.createElement(f.xu,{marginLeft:"10px"},s.createElement(v.F,{scale:"M",color:"LIGHTER"},s.createElement(f.rU,{onClick:t},s.createElement(f.xu,{padding:"10px"},"Cancel"))))),s.createElement(f.xu,{marginTop:"10px"},s.createElement(v.F,{scale:"M"},"This story will be automatically submitted to the publication. When you submit your story, the publication's editors will be notified and will be able to edit your story.")))}},l)})))})):l}},74871:(e,n,t)=>{"use strict";t.d(n,{Hj:()=>s,py:()=>u,DM:()=>d,a6:()=>m,En:()=>p});var o=t(28655),i=t.n(o),r=t(71439),l=t(73882);function a(){var e=i()(["\n  fragment ManageSubmission_post on Post {\n    id\n    statusForCollection\n    collection {\n      ...ManageSubmission_collection\n    }\n    pendingCollection {\n      ...ManageSubmission_collection\n    }\n    creator {\n      id\n    }\n  }\n  ","\n"]);return a=function(){return e},e}function c(){var e=i()(["\n  fragment ManageSubmission_collection on Collection {\n    name\n    creator {\n      id\n    }\n    viewerEdge {\n      id\n      isEditor\n    }\n    ...CollectionAvatar_collection\n  }\n  ","\n"]);return c=function(){return e},e}var s=function(e,n){return n&&e.creator&&n.id===e.creator.id},u=function(e,n){var t=e.pendingCollection||e.collection;return t&&t.creator&&n.id===t.creator.id},d=function(e){var n=e.pendingCollection||e.collection;return null==n?void 0:n.viewerEdge.isEditor},m=(0,r.Ps)(c(),l.d),p=(0,r.Ps)(a(),m)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7883.b2a533a5.chunk.js.map