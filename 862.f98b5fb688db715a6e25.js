"use strict";(self.webpackChunkanime_ql=self.webpackChunkanime_ql||[]).push([[862],{3060:(n,e,i)=>{i.d(e,{t:()=>r});var t,a=i(168),r=(0,i(1429).Ps)(t||(t=(0,a.Z)(["\n  query TopAnime {\n    Page(page:1,perPage:20){\n      media(sort:SCORE_DESC,type:ANIME,isAdult:false){\n        ...media\n      }\n    }\n  }\n  fragment media on Media{\n    id \n    title {\n      userPreferred\n    }\n    coverImage {\n      extraLarge \n      large \n      medium\n      color\n    }\n    startDate{\n      year \n      month \n      day\n    }\n    endDate{\n      year \n      month \n      day\n    }\n    bannerImage \n    season \n    seasonYear \n    description \n    type \n    format \n    status(version:2)\n    episodes \n    duration \n    chapters \n    volumes \n    genres \n    isAdult \n    averageScore \n    popularity \n    mediaListEntry{\n      id status\n    }\n    nextAiringEpisode{\n      airingAt \n      timeUntilAiring \n      episode\n    }\n    studios(isMain:true){\n      edges{\n        isMain \n        node{\n          id name\n        }\n      }\n    }\n  }\n"])))},8862:(n,e,i)=>{i.r(e),i.d(e,{default:()=>s});var t=i(7462),a=(i(7737),i(6138)),r=i(3060),o=i(6232);const s=function(){var n,e,i=(0,a.a)(r.t),s=i.data,d=i.loading,p=function(n){var e,i,t;return(0,o.tZ)("div",{css:{display:"inline-grid",minHeight:"80px",borderRadius:"0.25rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",gridTemplateColumns:"48px auto","--tw-bg-opacity":"1",backgroundColor:"rgba(249, 250, 251, var(--tw-bg-opacity))",":hover":{"--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},padding:"8px"}},(0,o.tZ)("div",{css:{borderRadius:"0.125rem",overflow:"hidden",position:"relative"}},(0,o.tZ)("img",{src:(null===(e=n.coverImage)||void 0===e?void 0:e.medium)||"",css:{height:"100%",left:"0px",objectFit:"cover",position:"absolute",top:"0px",width:"100%"}})),(0,o.tZ)("div",{css:{padding:"8px",minWidth:"0px",gap:"0.625rem",gridTemplateColumns:"minmax(auto, calc(100% - 440px)) 130px 130px 150px",display:"grid"}},(0,o.tZ)("div",{css:{position:"relative"}},(0,o.tZ)("div",{css:{"--tw-text-opacity":"1",color:"rgba(17, 24, 39, var(--tw-text-opacity))",fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"600",marginBottom:"8px"}},null===(i=n.title)||void 0===i?void 0:i.userPreferred),(0,o.tZ)("div",{css:{display:"flex",alignItems:"center",flexWrap:"wrap",height:"18px",overflow:"hidden",marginLeft:"-2px"}},null===(t=n.genres)||void 0===t?void 0:t.map((function(n){return(0,o.tZ)("div",{key:n,css:{fontSize:"10px",fontWeight:"400","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",marginBottom:"0.75rem",padding:"0 10px",borderRadius:"0.5rem","--tw-bg-opacity":"1",backgroundColor:"rgba(245, 158, 11, var(--tw-bg-opacity))",marginLeft:"0.25rem",marginRight:"0.25rem"}},n)})))),(0,o.tZ)("div",null,n.averageScore,"%",(0,o.tZ)("div",{css:{marginTop:"4px"}},n.popularity," users")),(0,o.tZ)("div",null,n.type,(0,o.tZ)("div",{css:{marginTop:"4px"}},n.popularity," users")),(0,o.tZ)("div",null,n.season," ",n.seasonYear,(0,o.tZ)("div",{css:{marginTop:"4px"}},n.status))))};return(0,o.tZ)("div",{css:{display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"1.5rem",cursor:"pointer"}},"100 Top Anime",d?(0,o.tZ)("div",null,"is loading"):null==s||null===(n=s.Page)||void 0===n||null===(e=n.media)||void 0===e?void 0:e.map((function(n){return(0,o.tZ)(p,(0,t.Z)({key:null==n?void 0:n.id},n))})))}}}]);