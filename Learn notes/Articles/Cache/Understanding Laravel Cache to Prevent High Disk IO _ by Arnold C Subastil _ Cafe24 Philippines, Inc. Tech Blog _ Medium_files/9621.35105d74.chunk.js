(self.webpackChunklite=self.webpackChunklite||[]).push([[9621],{93653:(t,e,n)=>{"use strict";n.d(e,{j:()=>u});var o=n(28655),r=n.n(o),i=n(71439),a=n(46829);function s(){var t=r()(["\n  mutation DeletePostMutation($targetPostId: ID!) {\n    deletePost(targetPostId: $targetPostId)\n  }\n"]);return s=function(){return t},t}var l=(0,i.Ps)(s()),u=function(t){var e=t?{variables:{targetPostId:t}}:{};return(0,a.useMutation)(l,e)}},33241:(t,e,n)=>{"use strict";n.d(e,{g:()=>d,H:()=>p});var o=n(28655),r=n.n(o),i=n(71439),a=n(80439),s=n(67294),l=n(12291),u=n(85277);function c(){var t=r()(["\n  mutation UserReportStoryMutation(\n    $targetPostId: ID!\n    $targetAuthorId: ID!\n    $alsoBlockAuthor: Boolean!\n    $reason: String!\n  ) {\n    reportStoryAndMaybeBlockAuthor(\n      targetPostId: $targetPostId\n      targetAuthorId: $targetAuthorId\n      alsoBlockAuthor: $alsoBlockAuthor\n      reason: $reason\n    ) {\n      id\n      viewerEdge {\n        id\n        isBlocking\n      }\n    }\n  }\n"]);return c=function(){return t},t}var d=(0,i.Ps)(c()),p=(0,l.$j)()((function(t){var e=t.targetAuthorId,n=t.targetPostId,o=t.dispatch,r=t.children,i=t.onOptimisticComplete,l=t.isBlocking,c=t.viewerId;return s.createElement(a.mm,{mutation:d,onCompleted:function(){o((0,u.Dx)({message:"Successfully reported post."}))}},(function(t){return r({mutate:function(o,r){var a=t({variables:{targetAuthorId:e,targetPostId:n,alsoBlockAuthor:o,reason:r},optimisticResponse:{__typename:"Mutation",reportStoryAndMaybeBlockAuthor:{__typename:"User",id:e,viewerEdge:{id:"userId:".concat(e,"-viewerId:").concat(c),isBlocking:l||o}}}});return i&&i(),a}})}))}))},53962:(t,e,n)=>{"use strict";n.d(e,{$:()=>p,g:()=>m});var o=n(28655),r=n.n(o),i=n(71439),a=n(67294),s=n(32262),l=n(76579),u=n(96879),c=n(27952);function d(){var t=r()(["\n  fragment CopyFriendLinkMenuItem_post on Post {\n    id\n    viewerEdge {\n      id\n      shareKey\n    }\n  }\n"]);return d=function(){return t},t}var p=function(t){var e=t.post,n=t.shareKey;return e&&n?a.createElement(s.Sl,null,a.createElement(l.b,{url:(0,u.Rk)((0,c.jVf)(e),{sk:n}),linkStyle:"SUBTLE"},(function(t){return t?"Copied!":"Copy Friend Link"}))):null},m=(0,i.Ps)(d())},62806:(t,e,n)=>{"use strict";n.d(e,{r:()=>P});var o=n(63038),r=n.n(o),i=n(67294),a=n(28655),s=n.n(a),l=n(71439),u=n(80439),c=n(12291),d=n(85277);function p(){var t=s()(["\n  mutation PostAllowResponsesMutation($targetPostId: ID!, $allowResponses: Boolean!) {\n    setPostAllowResponses(targetPostId: $targetPostId, allowResponses: $allowResponses) {\n      id\n      allowResponses\n    }\n  }\n"]);return p=function(){return t},t}var m=(0,l.Ps)(p()),f=(0,c.$j)()((function(t){var e=t.children,n=t.dispatch,o=t.onCompleted,r=t.targetPostId;return i.createElement(u.mm,{mutation:m,onCompleted:function(){n((0,d.Dx)({message:"Responses are now hidden for this post."})),o&&o()},variables:{targetPostId:r,allowResponses:!1},optimisticResponse:{__typename:"Mutation",setPostAllowResponses:{__typename:"Post",id:r,allowResponses:!1}}},(function(t){return e({mutate:t})}))})),g=(0,c.$j)()((function(t){var e=t.children,n=t.dispatch,o=t.onCompleted,r=t.targetPostId;return i.createElement(u.mm,{mutation:m,onCompleted:function(){n((0,d.Dx)({message:"Responses are now shown for this post."})),o&&o()},variables:{targetPostId:r,allowResponses:!0},optimisticResponse:{__typename:"Mutation",setPostAllowResponses:{__typename:"Post",id:r,allowResponses:!0}}},(function(t){return e({mutate:t})}))})),I=n(78181),E=function(t){var e=t.onConfirm,n=t.isVisible,o=t.hide;return i.createElement(I.QH,{onConfirm:e,isVisible:n,hide:o,titleText:"Hide responses",confirmText:"Confirm",isDestructiveAction:!1},"People will still be able to respond, but the link to see responses will not be displayed at the bottom of your post.")},v=n(32262),_=n(51064),P=function(t){var e=t.hidePopover,n=t.postId,o=t.allowResponses,a=(0,_.O)(!1),s=r()(a,3),l=s[0],u=s[1],c=s[2],d=function(){c(),e()};return i.createElement(i.Fragment,null,i.createElement(f,{targetPostId:n},(function(t){var e=t.mutate;return i.createElement(E,{onConfirm:e,isVisible:l,hide:d})})),i.createElement(g,{targetPostId:n},(function(t){var e=t.mutate;return i.createElement(v.Sl,null,i.createElement(I.rU,{onClick:function(){o?u():e()}},o?"Hide responses":"Show responses"))})))}},86948:(t,e,n)=>{"use strict";n.d(e,{z:()=>k,e:()=>L});var o=n(63038),r=n.n(o),i=n(28655),a=n.n(i),s=n(71439),l=n(67294),u=n(8774),c=n(66249),d=n(3021),p=n(53976),m=n(34675),f=n(62181),g=n(267),I=n(78181),E=n(33914),v=n(27599),_=n(27572),P=n(28309),y=n(14391),b=n(67297),h=n(71254),A=n(6106),S=n(94892),R=n(27952);function C(){var t=a()(["\n  fragment BookmarkButton_post on Post {\n    ...SusiClickable_post\n    ...WithSetReadingList_post\n    ...AddToCatalogBookmarkButton_post\n  }\n  ","\n  ","\n  ","\n"]);return C=function(){return t},t}var k=(0,s.Ps)(C(),f.qU,d.jy,c.GD),w=function(t){return{fill:t.baseColor.fill.light}},D=function(t){return{fill:t.baseColor.border.light,cursor:"default"}},x=function(){var t=(0,P.Iq)();return l.createElement(S.Z,{className:t(D)})};function N(t){return{READING_LIST_NONE:"Bookmark Post",READING_LIST_ARCHIVE:"Archived",READING_LIST_QUEUE:"Remove Bookmark"}[t]}function L(t){var e=t.post,n=t.withTooltip,o=void 0===n||n,i=t.susiEntry,a=e.id,s=e.viewerEdge.readingList,S=(0,P.Iq)(),C=(0,b.v9)((function(t){return t.config.authDomain})),k=(0,v.Av)(),D=(0,_.pK)(),L=(0,g.XC)(),$=(0,m.Hk)(),T=$.value,B=$.loading,U=(0,p.V)({name:"enable_lists",placeholder:!1}),O=null==L?void 0:L.READING_LIST_UPDATED,G=l.useState(o),V=r()(G,2),j=V[0],M=V[1],H=l.useState(s||y.sx.READING_LIST_NONE),Q=r()(H,2),Z=Q[0],F=Q[1];l.useEffect((function(){F(s||y.sx.READING_LIST_NONE)}),[s]);var K=l.useCallback((function(){o&&M(!0)}),[o]);return B?null:T?U?l.createElement(c.o0,{kind:u.kK.Post,target:e}):s?l.createElement("div",{className:S(w)},l.createElement(d.sN,{post:e},(function(t){return l.createElement(E._,{isVisible:j,targetDistance:10,tooltipText:(n=s,{READING_LIST_NONE:"Save story",READING_LIST_ARCHIVE:"Archived",READING_LIST_QUEUE:"Unsave Story"}[n]),onMouseLeave:K},l.createElement(I.rU,{onClick:function(){return function(t){if(s){var n=(r=s,{READING_LIST_NONE:y.sx.READING_LIST_QUEUE,READING_LIST_ARCHIVE:null,READING_LIST_QUEUE:y.sx.READING_LIST_NONE}[r]);if(!n)return;F(n),k.event(function(t){return{READING_LIST_NONE:"post.addedBookmark",READING_LIST_ARCHIVE:"post.addedArchive",READING_LIST_QUEUE:"post.removedBookmark"}[t]}(s),{postId:a,source:D}),t(n)().catch((function(){F(s)})),o&&M(!1),O&&O(e,n)}var r}(t)},ariaLabel:N(Z)},function(t){return{READING_LIST_NONE:l.createElement(h.Z,null),READING_LIST_ARCHIVE:l.createElement(x,null),READING_LIST_QUEUE:l.createElement(A.Z,null)}[t]}(Z)));var n}))):null:l.createElement(E._,{isVisible:j,placement:"top",targetDistance:10,tooltipText:"Bookmark story"},l.createElement(f.R9,{post:e,operation:"register",actionUrl:(0,R.XET)(C,a),susiEntry:i},l.createElement(h.Z,{className:S(w)})))}},3021:(t,e,n)=>{"use strict";n.d(e,{jy:()=>y,sN:()=>b});var o=n(63038),r=n.n(o),i=n(28655),a=n.n(i),s=n(71439),l=n(46829),u=n(14391);function c(){var t=a()(["\n  fragment WithSetReadingList_post on Post {\n    ...ReadingList_post\n  }\n  ","\n"]);return c=function(){return t},t}function d(){var t=a()(["\n  mutation UnarchivePostDefault($targetPostId: ID!) {\n    unarchivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return d=function(){return t},t}function p(){var t=a()(["\n  mutation ArchivePostDefault($targetPostId: ID!) {\n    archivePost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return p=function(){return t},t}function m(){var t=a()(["\n  mutation UnbookmarkPostDefault($targetPostId: ID!) {\n    unbookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return m=function(){return t},t}function f(){var t=a()(["\n  mutation BookmarkPostDefault($targetPostId: ID!) {\n    bookmarkPost(targetPostId: $targetPostId) {\n      ...ReadingList_post\n    }\n  }\n  ","\n"]);return f=function(){return t},t}function g(){var t=a()(["\n  fragment ReadingList_post on Post {\n    __typename\n    id\n    viewerEdge {\n      id\n      readingList\n    }\n  }\n"]);return g=function(){return t},t}var I=(0,s.Ps)(g()),E=(0,s.Ps)(f(),I),v=(0,s.Ps)(m(),I),_=(0,s.Ps)(p(),I),P=(0,s.Ps)(d(),I),y=(0,s.Ps)(c(),I),b=function(t){var e=t.children,n=t.post,o=n.id,i=function(t){var e=(0,l.useMutation)(E,{variables:{targetPostId:t},optimisticResponse:{bookmarkPost:{__typename:"Post",id:t,viewerEdge:{id:"test-post-viewer-edge-id",readingList:u.sx.READING_LIST_QUEUE}}}});return r()(e,1)[0]}(o),a=function(t){var e=(0,l.useMutation)(v,{variables:{targetPostId:t},optimisticResponse:{unbookmarkPost:{__typename:"Post",id:t,viewerEdge:{id:"test-post-viewer-edge-id",readingList:u.sx.READING_LIST_NONE}}}});return r()(e,1)[0]}(o),s=function(t){var e=(0,l.useMutation)(_,{variables:{targetPostId:t},optimisticResponse:{archivePost:{__typename:"Post",id:t,viewerEdge:{id:"test-post-viewer-edge-id",readingList:u.sx.READING_LIST_ARCHIVE}}}});return r()(e,1)[0]}(o),c=function(t){var e=(0,l.useMutation)(P,{variables:{targetPostId:t},optimisticResponse:{unarchivePost:{__typename:"Post",id:t,viewerEdge:{id:"test-post-viewer-edge-id",readingList:u.sx.READING_LIST_QUEUE}}}});return r()(e,1)[0]}(o);return o?e((function(t){return function(){switch(n.viewerEdge.readingList){case u.sx.READING_LIST_NONE:if("READING_LIST_QUEUE"===t)return i();break;case u.sx.READING_LIST_QUEUE:if("READING_LIST_NONE"===t)return a();if("READING_LIST_ARCHIVE"===t)return s();break;case u.sx.READING_LIST_ARCHIVE:if(!t)return o;if("READING_LIST_NONE"===t)return a();if("READING_LIST_QUEUE"===t)return c()}throw new Error('Invalid reading list change from "'.concat(n.viewerEdge.readingList||"unkown",'" to "').concat(t,'".'))}})):null}},71245:(t,e,n)=>{"use strict";n.d(e,{Lf:()=>g,h3:()=>I,yb:()=>E});var o=n(63038),r=n.n(o),i=n(28655),a=n.n(i),s=n(71439),l=n(46829),u=n(67294),c=n(14391);function d(){var t=a()(["\n  mutation RejectPostFromPubMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      collection {\n        id\n      }\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return d=function(){return t},t}function p(){var t=a()(["\n  mutation ManageCollectionPostStatusMutation(\n    $postId: ID!\n    $collectionSlug: String!\n    $status: CollectionPostStatus!\n  ) {\n    manageCollectionPostStatus(postId: $postId, collectionSlug: $collectionSlug, status: $status) {\n      __typename\n      id\n      statusForCollection\n      pendingCollection {\n        id\n        slug\n      }\n    }\n  }\n"]);return p=function(){return t},t}var m=(0,s.Ps)(p()),f=(0,s.Ps)(d()),g=function(t){var e=(0,l.useMutation)(m),n=r()(e,1)[0];return(0,u.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.PENDING},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:t.id,statusForCollection:c.Zj.PENDING,pendingCollection:e}}})}),[t])},I=function(t){var e=(0,l.useMutation)(m),n=r()(e,1)[0];return(0,u.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.APPROVED}})}),[t])},E=function(t){var e=(0,l.useMutation)(f),n=r()(e,1)[0];return(0,u.useCallback)((function(e){return n({variables:{collectionSlug:(null==e?void 0:e.slug)||"",postId:t.id,status:c.Zj.REMOVED},optimisticResponse:{manageCollectionPostStatus:{__typename:"Post",id:t.id,statusForCollection:null,collection:null,pendingCollection:null}}}).then((function(t){if(t.errors&&t.errors[0])throw t.errors[0];return t}))}),[t])}},49925:(t,e,n)=>{"use strict";n.d(e,{UL:()=>s,GT:()=>l,KW:()=>u,Iq:()=>c,C5:()=>d});var o=n(28655),r=n.n(o),i=n(71439);function a(){var t=r()(["\n  fragment auroraHooks_publisher on Publisher {\n    __typename\n    ... on Collection {\n      isAuroraEligible\n      isAuroraVisible\n      viewerEdge {\n        id\n        isEditor\n      }\n    }\n    ... on User {\n      isAuroraVisible\n    }\n  }\n"]);return a=function(){return t},t}var s=function(t){return!!t&&(t.isAuroraVisible||"Collection"===t.__typename&&t.isAuroraEligible&&t.viewerEdge.isEditor)},l=function(t){return!!t&&t.isAuroraVisible},u=function(t){return!!t&&t.isAuroraVisible},c=function(t){return!!t&&("Collection"===t.__typename?t.isAuroraVisible||t.isAuroraEligible&&t.viewerEdge.isEditor:t.isAuroraVisible)},d=(0,i.Ps)(a())},78820:(t,e,n)=>{"use strict";n.d(e,{Zu:()=>b,n_:()=>P,xt:()=>E,KQ:()=>v,In:()=>_,PB:()=>y});var o=n(63038),r=n.n(o),i=n(28655),a=n.n(i),s=n(46829),l=n(71439),u=n(67294);function c(){var t=a()(["\n  mutation postSetPinnedByCreatorAt($postId: ID!, $isPinned: Boolean!) {\n    postSetPinnedByCreatorAt(targetPostId: $postId, isPinned: $isPinned) {\n      __typename\n      ... on Post {\n        id\n        pinnedByCreatorAt\n      }\n    }\n  }\n"]);return c=function(){return t},t}function d(){var t=a()(["\n  mutation setPinnedAt($postId: ID!, $collectionId: ID!, $pinnedAt: Boolean!) {\n    __typename\n    setPinnedAt(targetPostId: $postId, targetCollectionId: $collectionId, pinnedAt: $pinnedAt) {\n      __typename\n      ... on Post {\n        id\n        collection {\n          id\n        }\n        pendingCollection {\n          id\n        }\n        pinnedAt\n      }\n    }\n  }\n"]);return d=function(){return t},t}var p=(0,l.Ps)(d()),m=(0,l.Ps)(c()),f=n(61250),g=n(27952);function I(){var t=a()(["\n  fragment useIsPinnedInContext_post on Post {\n    id\n    collection {\n      id\n    }\n    pendingCollection {\n      id\n    }\n    pinnedAt\n    pinnedByCreatorAt\n  }\n"]);return I=function(){return t},t}var E=(0,l.Ps)(I()),v=function(t){var e=t.id,n=t.collection,o=t.pendingCollection,i=t.pinnedAt,a=(n||o||{id:""}).id,l=(0,s.useMutation)(p,{optimisticResponse:{__typename:"Mutation",setPinnedAt:{__typename:"Post",id:e,collection:n,pendingCollection:o,pinnedAt:i?0:Date.now()}}}),c=r()(l,1)[0],d=u.useCallback((function(){return c({variables:{postId:e,collectionId:a,pinnedAt:!i}})}),[e,a,i,c]);return[i,d]},_=function(t){var e=t.id,n=t.pinnedByCreatorAt,o=(0,s.useMutation)(m,{optimisticResponse:{postSetPinnedByCreatorAt:{__typename:"Post",id:e,pinnedByCreatorAt:n?0:Date.now()}}}),i=r()(o,1)[0],a=u.useCallback((function(){return i({variables:{postId:e,isPinned:!n}})}),[e,i,n]);return[n,a]},P=function(t,e){var n=v(t),o=r()(n,2),i=o[0],a=o[1],s=_(t),l=r()(s,2),c=l[0],d=l[1],p=u.useCallback((function(){return"Collection"===e?a():d()}),[e,a,d]);return["Collection"===e?i:c,p]},y=function(t,e){var n="Collection"===t.__typename?t.slug:null,o=(0,f.GE)("ShowCollectionHome",n?{collectionSlug:n}:{collectionSlug:""});return"Collection"===t.__typename?o:"User"===t.__typename&&t.username?(0,g.AWr)(t,e):""},b=function(t){switch(t.__typename){case"Collection":return"Publication";case"User":return"Author";default:return"Publisher"}}},73232:(t,e,n)=>{"use strict";n.d(e,{Q:()=>o,t:()=>r});var o="This story is also a response to another story. Are you sure you want to delete this story?",r="This story is also a response to another story. Any edits are applied to both."},90639:(t,e,n)=>{"use strict";n.d(e,{$:()=>l});var o=n(63038),r=n.n(o),i=n(67294),a=n(78181),s=n(64504),l=function(t){var e=t.isVisible,n=t.hide,o=t.onSubmit,l=t.isResponse,u=i.useState(!1),c=r()(u,2),d=c[0],p=c[1],m=i.useState("Spam"),f=r()(m,2),g=f[0],I=f[1],E=i.useCallback((function(t,e){return I(e)}),[]),v="reportStoryTitle";return i.createElement(a.Vq,{isVisible:e,hide:n,noPortal:l,withCloseButton:!1,customBackgroundColor:l?"rgba(255, 255, 255, 0.97)":"rgba(255, 255, 255, 0.94)"},i.createElement(a.xu,{height:"550px",width:l?"100%":"900px",background:l?"none":"white",borderRadius:"4px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:l?"none":"rgba(0, 0, 0, 0.15) 0px 2px 10px",padding:"18px",position:"relative",sm:{boxShadow:"none",background:"none"},xs:{boxShadow:"none",background:"none"}},i.createElement(a.xu,{display:"flex",margin:"auto",flexDirection:"column",alignItems:l?"flex-start":"center"},i.createElement(s.X6,{scale:"M",ariaLabelledById:v},"Report ",l?"Response":"Story"),i.createElement(a.xu,{display:"flex",flexDirection:"column",width:"100%",paddingRight:"5px",marginBottom:"30px"},i.createElement(a.xu,{marginTop:"25px",marginBottom:"30px",padding:"5px 0"},i.createElement(a.Ee,{onChange:E,value:g,radioStyle:"SUBTLE",options:[{name:"Spam",value:"Spam"},{name:"Harassment",value:"Harassment"},{name:"Rules Violation",value:"Other"}],radioButtonsName:"reportStory",ariaLabelledBy:v})),i.createElement(a.XZ,{checked:d,onChange:function(){p(!d)}},i.createElement(a.xu,{paddingTop:l?"16px":"0"},"Also block the author of this ",l?"response":"story"))),i.createElement(a.xu,{display:"flex",justifyContent:"center",marginBottom:"10px"},i.createElement(a.xu,{marginRight:"8px"},i.createElement(a.zx,{onClick:n},"Cancel")),i.createElement(a.zx,{buttonStyle:"ERROR",onClick:function(){o(d,g),n()}},"Report")),i.createElement(a.xu,{marginTop:"50px",textAlign:l?"left":"center"},i.createElement(s.F,{scale:"M",tag:"div"},"Report"," ",i.createElement(a.rU,{href:"https://medium.com/policy/mediums-copyright-and-dmca-policy-d126f73695",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"copyright infringement")," ","or"," ",i.createElement(a.rU,{href:"https://medium.com/policy/mediums-trademark-policy-e3bb53df59a7",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"trademark infringement"),". ",!l&&i.createElement("br",null),"Read"," ",i.createElement(a.rU,{href:"https://medium.com/policy/medium-rules-30e5502c4eb4",linkStyle:"OBVIOUS",target:"_blank",inline:!0},"our rules"),"."))),!l&&i.createElement(a.PZ,{onClick:n,size:"LARGE",absoluteOffset:"18px"})))}},29169:(t,e,n)=>{"use strict";n.d(e,{z:()=>p});var o=n(63038),r=n.n(o),i=n(67294),a=n(33241),s=n(32589),l=n(32262),u=n(90639),c=n(78181),d=n(51064),p=function(t){var e=t.hidePopover,n=t.targetUserId,o=t.postId,p=t.viewerId,m=(0,s.P)(n).viewerEdge,f=!(null==m||!m.isBlocking),g=(0,d.O)(!1),I=r()(g,3),E=I[0],v=I[1],_=I[2];return i.createElement(i.Fragment,null,i.createElement(a.H,{targetAuthorId:n,targetPostId:o,isBlocking:f,onOptimisticComplete:function(){_(),e()},viewerId:p},(function(t){var e=t.mutate;return i.createElement(u.$,{onSubmit:e,isVisible:E,hide:_})})),i.createElement(l.Sl,null,i.createElement(c.rU,{onClick:function(){v()}},"Report this story")))}},267:(t,e,n)=>{"use strict";n.d(e,{XC:()=>u,EI:()=>c});var o=n(59713),r=n.n(o),i=n(67294);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=i.createContext({}),u=function(){return i.useContext(l)},c=function(t){var e=t.context,n=t.extendContext,o=void 0!==n&&n,r=t.children,a=u();return o&&a&&(e=s(s({},a),e)),i.createElement(l.Provider,{value:e},r)}},39171:(t,e,n)=>{"use strict";function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}n.d(e,{B:()=>i});var i=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){var t,n=o(e);try{for(n.s();!(t=n.n()).done;)(0,t.value)()}catch(t){n.e(t)}finally{n.f()}}}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9621.35105d74.chunk.js.map