(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{299:function(e,t,n){"use strict";var r=n(27),a=n.n(r),o=n(17),i=n.n(o),l=n(39),u=n(0),c=n.n(u),s=n(515),p=n(99),m=n(54),f=n(74),d=n(254),g=n(517),v=n(514),h=n(511),b=n(520),E=n(518),w=n(12),y=n(516),x=n(13),O=n.n(x),k=n(14),j=n.n(k),P=n(11),S=n.n(P),C=n(301),T=n(19),_=n.n(T),R=n(20),D=n(512),V=n(285);function q(){var e=_()(["\n  font-weight: 600;\n  margin-right: 10px;\n  margin-left: 10px;\n"]);return q=function(){return e},e}function F(){var e=_()(["\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 5px;\n"]);return F=function(){return e},e}var B=R.a.View(F()),z=R.a.Text(q()),I=function(e){var t=e.onPress,n=e.text,r=e.icon;return c.a.createElement(l.f,{onPress:t},c.a.createElement(B,null,c.a.createElement(h.a,{name:r,color:"white",size:22}),c.a.createElement(z,{style:{color:"white"}},n)))},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return e.length>t?e.slice(0,t)+"...":e},M=function(e){return new Date(e).toLocaleDateString("ko",{day:"numeric",month:"long",year:"numeric"})},N=n(1),H=n.n(N),L=n(105);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){var t=e.loading,n=e.children,r=e.backgroundColor,a=e.contentContainerStyle,o=e.refreshFn,s=Object(u.useState)(!1),p=i()(s,2),m=p[0],f=p[1];return c.a.createElement(l.d,{refreshControl:c.a.createElement(L.a,{onRefresh:function(){return j.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,j.a.awrap(o());case 3:f(!1);case 4:case"end":return e.stop()}}),null,null,null,Promise)},refreshing:m,enabled:!1,tintColor:"white"}),style:{backgroundColor:r},contentContainerStyle:J({flex:t?1:0,justifyContent:t?"center":"flex-start"},a)},t?c.a.createElement(V.a,{color:"white",size:"small"}):n)};Q.propTypes={loading:H.a.bool.isRequired,backgroundColor:H.a.string.isRequired,children:H.a.node.isRequired,contentContainerStyle:H.a.object,refreshFn:H.a.func};var G=Q,K=n(287),X=n.n(K);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e,t){return X.a.get("https://api.themoviedb.org/3"+e,{params:U({},t,{api_key:"10923b261ba94d897ac6b81148314a3f"})})},$=function(e){var t,n,r,a,o=arguments;return j.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:{},i.prev=1,i.next=4,j.a.awrap(Z(e,t));case 4:return n=i.sent,r=n.data.results,a=n.data,i.abrupt("return",[r||a,null]);case 10:return i.prev=10,i.t0=i.catch(1),console.log(i.t0),i.abrupt("return",[null,i.t0]);case 14:case"end":return i.stop()}}),null,null,[[1,10]],Promise)},ee=function(){return $("/movie/now_playing")},te=function(){return $("/movie/popular")},ne=function(){return $("/movie/upcoming",{region:"kr"})},re=function(e){return $("/search/movie",{query:e})},ae=function(e){return $("/movie/"+e,{append_to_response:"videos"})},oe=function(){return $("/discover/movie")},ie=function(){return $("/tv/airing_today")},le=function(){return $("/tv/on_the_air")},ue=function(){return $("/tv/top_rated")},ce=function(){return $("/tv/popular")},se=function(e){return $("/search/tv",{query:e})},pe=function(e){return $("/tv/"+e,{append_to_response:"videos"})},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80";return e?"https://image.tmdb.org/t/p/w500"+e:t},fe=n(37);function de(){var e=_()(["\n  width: 100px;\n  height: 160px;\n  border-radius: 4px;\n"]);return de=function(){return e},e}var ge=R.a.Image(de()),ve=function(e){var t=e.url;return c.a.createElement(ge,{source:{uri:me(t)}})};ve.propTypes={url:H.a.string};var he=ve;function be(){var e=_()(["\n  color: rgb(220, 220, 220);\n  margin-bottom: 7px;\n  font-weight: 500;\n  font-size: 12px;\n"]);return be=function(){return e},e}var Ee=R.a.Text(be()),we=function(e){var t=e.votes;return c.a.createElement(Ee,null,"\u2b50\ufe0f ",t," / 10")};function ye(){var e=_()(["\n  color: white;\n  opacity: 0.8;\n  font-weight: 500;\n"]);return ye=function(){return e},e}function xe(){var e=_()(["\n  margin-top: 30px;\n  color: white;\n  opacity: 0.8;\n  font-weight: 800;\n  font-size: 17px;\n  margin-bottom: 15px;\n"]);return xe=function(){return e},e}function Oe(){var e=_()(["\n  margin-top: 30px;\n  padding: 0px 30px;\n"]);return Oe=function(){return e},e}function ke(){var e=_()(["\n  color: white;\n  font-weight: 600;\n  font-size: 24px;\n  margin-bottom: 10px;\n"]);return ke=function(){return e},e}function je(){var e=_()(["\n  width: 50%;\n  margin-left: 40px;\n"]);return je=function(){return e},e}function Pe(){var e=_()(["\n  flex-direction: row;\n  align-items: center;\n  top: 30px;\n"]);return Pe=function(){return e},e}function Se(){var e=_()(["\n  height: ","px;\n  align-items: center;\n  justify-content: flex-end;\n"]);return Se=function(){return e},e}function Ce(){var e=_()(["\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  position: absolute;\n"]);return Ce=function(){return e},e}var Te=R.a.Image(Ce()),_e=R.a.View(Se(),fe.a.get("window").height/3),Re=R.a.View(Pe()),De=R.a.View(je()),Ve=R.a.Text(ke()),qe=R.a.View(Oe()),Fe=R.a.Text(xe()),Be=R.a.Text(ye()),ze=function(e){var t,n=e.openBrowser,r=e.result,a=e.loading;return c.a.createElement(G,{loading:!1,backgroundColor:r.backgroundColor,contentContainerStyle:{paddingBottom:80}},c.a.createElement(c.a.Fragment,null,c.a.createElement(_e,null,c.a.createElement(Te,{source:{uri:me(r.backgroundImage,"-")}}),c.a.createElement(Re,null,c.a.createElement(he,{url:r.poster}),c.a.createElement(De,null,c.a.createElement(D.a,null),c.a.createElement(Ve,null,r.title),r.votes?c.a.createElement(we,{votes:r.votes}):null,c.a.createElement(D.a,null)))),c.a.createElement(qe,null,r.overview?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Overview"),c.a.createElement(Be,null,r.overview),c.a.createElement(D.a,null)):null,a?c.a.createElement(V.a,{style:{marginTop:30},color:"white"}):null,r.spoken_languages?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Languages"),c.a.createElement(Be,null,r.spoken_languages.map((function(e){return e.name+" "}))),c.a.createElement(D.a,null)):null,r.release_date?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Release Date"),c.a.createElement(Be,null,M(r.release_date)),c.a.createElement(D.a,null)):null,r.status?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Status"),c.a.createElement(Be,null,r.status),c.a.createElement(D.a,null)):null,r.runtime?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Runtime"),c.a.createElement(Be,null,r.runtime," minutes"),c.a.createElement(D.a,null)):null,r.first_air_date?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"First Air Date"),c.a.createElement(Be,null,M(r.first_air_date)),c.a.createElement(D.a,null)):null,r.genres?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Genres"),c.a.createElement(Be,null,r.genres.map((function(e,t){return t+1===r.genres.length?e.name:e.name+", "}))),c.a.createElement(D.a,null)):null,r.number_of_episodes?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Seasons / Episodes"),c.a.createElement(Be,null,r.number_of_seasons," / ",r.number_of_episodes),c.a.createElement(D.a,null)):null,r.imdb_id?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Links"),c.a.createElement(I,{text:"IMDB Page",icon:"imdb",onPress:function(){return n("https://www.imdb.com/title/"+r.imdb_id)}}),c.a.createElement(D.a,null)):null,(null==(t=r.videos.results)?void 0:t.length)>0?c.a.createElement(c.a.Fragment,null,c.a.createElement(D.a,null),c.a.createElement(Fe,null,"Videos"),r.videos.results.map((function(e){return c.a.createElement(I,{text:e.name,key:e.id,icon:"youtube-play",onPress:function(){return n("https://www.youtube.com/watch?v="+e.key)}})})),c.a.createElement(D.a,null)):null)))};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function We(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(e){var t=e.navigation,n=e.route.params,r=n.isTv,a=n.id,o=n.title,l=n.backgroundImage,s=n.poster,p=n.votes,m=n.overview,f=n.backgroundColor,d=Object(u.useState)({loading:!0,result:{title:o,backgroundImage:l,poster:s,overview:m,votes:p,videos:{results:[]},backgroundColor:f}}),g=i()(d,2),v=g[0],h=g[1];Object(u.useEffect)((function(){!function(){var e,t,n;j.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!r){o.next=6;break}return o.next=3,j.a.awrap(pe(a));case 3:o.t0=o.sent,o.next=9;break;case 6:return o.next=8,j.a.awrap(ae(a));case 8:o.t0=o.sent;case 9:e=o.t0,t=i()(e,2),n=t[0],t[1],h({loading:!1,result:We({},n,{title:n.title||n.name,backgroundImage:n.backdrop_path,poster:n.poster_path,overview:n.overview,votes:n.vote_average,backgroundColor:f})});case 14:case"end":return o.stop()}}),null,null,null,Promise)}()}),[a]),c.a.useLayoutEffect((function(){t.setOptions({title:o})}));return c.a.createElement(ze,O()({openBrowser:function(e){return j.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.awrap(C.a(e));case 2:case"end":return t.stop()}}),null,null,null,Promise)}},v))},Ne=n(300),He=n(138),Le=n(513),Ae=n(31);function Je(){var e=_()(["\n  color: rgb(220, 220, 220);\n  font-size: 14px;\n  font-weight: 500;\n"]);return Je=function(){return e},e}function Qe(){var e=_()([""]);return Qe=function(){return e},e}function Ge(){var e=_()(["\n  color: white;\n  font-weight: bold;\n  font-size: 19px;\n  margin-bottom: 10px;\n"]);return Ge=function(){return e},e}function Ke(){var e=_()(["\n  width: 50%;\n  align-items: flex-start;\n"]);return Ke=function(){return e},e}function Xe(){var e=_()(["\n  height: 100%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n"]);return Xe=function(){return e},e}function Ye(){var e=_()(["\n  height: 100%;\n  width: 100%;\n  opacity: 0.4;\n  position: absolute;\n"]);return Ye=function(){return e},e}function Ue(){var e=_()(["\n  height: 100%;\n  width: 100%;\n"]);return Ue=function(){return e},e}var Ze=R.a.View(Ue()),$e=R.a.Image(Ye()),et=R.a.View(Xe()),tt=R.a.View(Ke()),nt=R.a.Text(Ge()),rt=R.a.View(Qe()),at=R.a.Text(Je()),ot=function(e){var t=e.id,n=e.title,r=e.backgroundImage,a=e.votes,o=e.overview,i=e.poster,l=e.backgroundColor,u=Object(Ae.useNavigation)();return c.a.createElement(Ze,null,c.a.createElement($e,{source:{uri:me(r)}}),c.a.createElement(et,null,c.a.createElement(he,{url:i}),c.a.createElement(tt,null,c.a.createElement(nt,null,W(n,30)),c.a.createElement(rt,null,c.a.createElement(we,{votes:a})),c.a.createElement(at,null,W(o,80)),c.a.createElement(Le.a,{style:"web"===w.a.OS?{marginTop:15}:{marginTop:10},color:"#e74c3c",theme:{roundness:3},mode:"contained",uppercase:!1,compact:!0,onPress:function(){return u.navigate("Detail",{id:t,title:n,backgroundImage:r,votes:a,overview:o,poster:i,backgroundColor:l})}},"View details"))))};ot.propTypes={id:H.a.number.isRequired,title:H.a.string.isRequired,backgroundImage:H.a.string.isRequired,votes:H.a.number.isRequired,overview:H.a.string.isRequired,poster:H.a.string.isRequired};var it=ot;function lt(){var e=_()(["\n  color: white;\n  font-weight: 500;\n  margin: 10px 0px 5px 0px;\n"]);return lt=function(){return e},e}function ut(){var e=_()(["\n  align-items: center;\n  margin-right: 20px;\n"]);return ut=function(){return e},e}var ct=R.a.View(ut()),st=R.a.Text(lt()),pt=function(e){var t=e.isTv,n=void 0!==t&&t,r=e.id,a=e.poster,o=e.title,i=e.votes,u=e.backgroundColor,s=Object(Ae.useNavigation)();return c.a.createElement(l.f,{onPress:function(){s.navigate("Detail",{isTv:n,id:r,title:o,poster:a,votes:i,backgroundColor:u})}},c.a.createElement(ct,null,c.a.createElement(he,{url:a}),c.a.createElement(st,null,W(o,10)),i>0&&c.a.createElement(we,{votes:i})))};pt.propTypes={id:H.a.number.isRequired,poster:H.a.string,title:H.a.string.isRequired,votes:H.a.number.isRequired};var mt=pt;function ft(){var e=_()(["\n  margin-top: 10px;\n  color: white;\n  opacity: 0.8;\n"]);return ft=function(){return e},e}function dt(){var e=_()(["\n  color: white;\n  opacity: 0.8;\n  font-size: 12px;\n"]);return dt=function(){return e},e}function gt(){var e=_()(["\n  color: white;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]);return gt=function(){return e},e}function vt(){var e=_()(["\n  align-items: flex-start;\n  width: 65%;\n  margin-left: 25px;\n"]);return vt=function(){return e},e}function ht(){var e=_()(["\n  padding: 0px 30px;\n  margin-bottom: 30px;\n  flex-direction: row;\n  align-items: flex-start;\n"]);return ht=function(){return e},e}var bt=R.a.View(ht()),Et=R.a.View(vt()),wt=R.a.Text(gt()),yt=R.a.Text(dt()),xt=R.a.Text(ft()),Ot=function(e){var t=e.isTv,n=void 0!==t&&t,r=e.id,a=e.title,o=e.poster,i=e.overview,u=e.releaseDate,s=e.backgroundColor,p=Object(Ae.useNavigation)();return c.a.createElement(l.f,{onPress:function(){p.navigate("Detail",{isTv:n,id:r,title:a,poster:o,overview:i,releaseDate:u,backgroundColor:s})}},c.a.createElement(bt,null,c.a.createElement(he,{url:o}),c.a.createElement(Et,null,c.a.createElement(wt,null,W(a,30)),u?c.a.createElement(yt,null,M(u)):null,c.a.createElement(xt,null,W(i,80)))))};Ot.propTypes={id:H.a.number.isRequired,title:H.a.string.isRequired,releaseDate:H.a.string,poster:H.a.string.isRequired,overview:H.a.string.isRequired};var kt=Ot;function jt(){var e=_()(["\n  color: white;\n  font-weight: bold;\n  font-size: 16px;\n  margin-left: 30px;\n"]);return jt=function(){return e},e}var Pt=R.a.Text(jt()),St=function(e){var t=e.title;return c.a.createElement(Pt,null,t)};St.propTypes={title:H.a.string.isRequired};var Ct=St,Tt=n(48),_t=n(5),Rt=function(e){var t=e.title,n=e.children;return c.a.createElement(_t.a,null,c.a.createElement(Ct,{title:t}),c.a.createElement(Tt.a,{style:{marginTop:20,marginBottom:40},contentContainerStyle:{paddingLeft:30},horizontal:!0,showsHorizontalScrollIndicator:!1},n))};Rt.propTypes={title:H.a.string.isRequired,children:H.a.node.isRequired};var Dt=Rt;function Vt(){var e=_()(["\n  margin-top: 20px;\n"]);return Vt=function(){return e},e}var qt=R.a.View(Vt()),Ft=function(e){var t=e.title,n=e.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Ct,{title:t}),c.a.createElement(qt,null,n))};function Bt(){var e=_()([""]);return Bt=function(){return e},e}function zt(){var e=_()(["\n  width: 100%;\n  height: ","px;\n  margin-bottom: 40px;\n"]);return zt=function(){return e},e}var It=fe.a.get("screen"),Wt=(It.width,It.height),Mt=R.a.View(zt(),Wt/3),Nt=R.a.View(Bt()),Ht=function(e){var t=e.refreshFn,n=e.loading,r=e.nowPlaying,a=e.popular,o=e.upcoming;return c.a.createElement(G,{refreshFn:t,loading:n,backgroundColor:"#1e2465"},c.a.createElement(c.a.Fragment,null,c.a.createElement(Mt,null,c.a.createElement(Ne.a,{controlsProps:{dotsTouchable:!0,prevPos:"bottom-left",nextPos:"bottom-right",nextTitle:"Next",dotsPos:!1,nextTitleStyle:{color:"red",fontSize:14,fontWeight:"500"},PrevComponent:function(e){var t=e.onPress;return c.a.createElement(l.f,{onPress:t},c.a.createElement(He.a,{style:{color:"tomato",fontSize:14,fontWeight:"500"}},"Prev"))}},loop:!0,timeout:4},r.map((function(e){return c.a.createElement(it,{key:e.id,id:e.id,title:e.original_title,overview:e.overview,votes:e.vote_average,backgroundImage:e.backdrop_path,poster:e.poster_path,backgroundColor:"#1e2465"})})))),c.a.createElement(Nt,null,c.a.createElement(Dt,{title:"Popular Movies"},a.map((function(e){return c.a.createElement(mt,{id:e.id,key:e.id,poster:e.poster_path,title:e.title,votes:e.vote_average,backgroundColor:"#1e2465"})}))),c.a.createElement(Ft,{title:"Coming Soon"},o.map((function(e){return c.a.createElement(kt,{key:e.id,id:e.id,title:e.title,releaseDate:e.release_date,poster:e.poster_path,overview:e.overview,backgroundColor:"#1e2465"})}))))))},Lt=function(){var e=Object(u.useState)({loading:!0,nowPlaying:[],popular:[],upcoming:[],nowPlayingError:null,popularError:null,upcomingError:null}),t=i()(e,2),n=t[0],r=t[1],a=function(){var e,t,n,a,o,l,u,c,s,p,m,f;return j.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,j.a.awrap(ee());case 2:return e=d.sent,t=i()(e,2),n=t[0],a=t[1],d.next=8,j.a.awrap(te());case 8:return o=d.sent,l=i()(o,2),u=l[0],c=l[1],d.next=14,j.a.awrap(ne());case 14:s=d.sent,p=i()(s,2),m=p[0],f=p[1],r({loading:!1,nowPlaying:n,popular:u,upcoming:m,nowPlayingError:a,popularError:c,upcomingError:f});case 19:case"end":return d.stop()}}),null,null,null,Promise)};return Object(u.useEffect)((function(){a()}),[]),c.a.createElement(Ht,O()({refreshFn:a},n))};function At(){var e=_()(["\n  margin-top: 30px;\n"]);return At=function(){return e},e}var Jt=R.a.View(At()),Qt=function(e){var t=e.refreshFn,n=e.loading,r=e.popular,a=e.topRated,o=e.today;return c.a.createElement(G,{refreshFn:t,loading:n,backgroundColor:"#3e2465"},c.a.createElement(Jt,null,c.a.createElement(Dt,{title:"Popular Shows"},r.map((function(e){return c.a.createElement(mt,{isTv:!0,id:e.id,key:e.id,poster:e.poster_path,title:e.name,votes:e.vote_average,backgroundColor:"#3e2465"})}))),c.a.createElement(Dt,{title:"Top Rated"},a.map((function(e){return c.a.createElement(mt,{isTv:!0,id:e.id,key:e.id,poster:e.poster_path,title:e.name,votes:e.vote_average,backgroundColor:"#3e2465"})}))),c.a.createElement(Ft,{title:"Airing Today"},o.map((function(e){return c.a.createElement(kt,{isTv:!0,key:e.id,id:e.id,title:e.name,poster:e.poster_path,overview:e.overview,backgroundColor:"#3e2465"})})))))},Gt=function(){var e=Object(u.useState)({loading:!0,today:[],thisWeek:[],topRated:[],popular:[],todayError:null,thisWeekError:null,topRatedError:null,popularError:null}),t=i()(e,2),n=t[0],r=t[1],a=function(){var e,t,n,a,o,l,u,c,s,p,m,f,d,g,v,h;return j.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,j.a.awrap(ie());case 2:return e=b.sent,t=i()(e,2),n=t[0],a=t[1],b.next=8,j.a.awrap(le());case 8:return o=b.sent,l=i()(o,2),u=l[0],c=l[1],b.next=14,j.a.awrap(ue());case 14:return s=b.sent,p=i()(s,2),m=p[0],f=p[1],b.next=20,j.a.awrap(ce());case 20:d=b.sent,g=i()(d,2),v=g[0],h=g[1],r({loading:!1,today:n,thisWeek:u,topRated:m,popular:v,todayError:a,thisWeekError:c,topRatedError:f,popularError:h});case 25:case"end":return b.stop()}}),null,null,null,Promise)};return Object(u.useEffect)((function(){a()}),[]),c.a.createElement(Qt,O()({refreshFn:a},n))},Kt=n(519),Xt=function(e){var t=e.placeholder,n=e.value,r=e.onChange,a=e.onSubmit;return c.a.createElement(Kt.a,{style:{marginHorizontal:30,marginVertical:0,paddingHorizontal:10,marginBottom:50},theme:{roundness:30},placeholder:t,returnKeyType:"search",onChangeText:r,onSubmitEditing:a,value:n})};Xt.propTypes={placeholder:H.a.string.isRequired,value:H.a.string.isRequired,onChange:H.a.func.isRequired,onSubmit:H.a.func.isRequired};var Yt=Xt,Ut=function(e){var t=e.movies,n=e.shows,r=e.keyword,a=e.onChange,o=e.onSubmit;return c.a.createElement(G,{refreshFn:o,loading:!1,backgroundColor:"#6e2465",contentContainerStyle:{paddingTop:10}},c.a.createElement(Yt,{placeholder:"Write a keyword",value:r,onChange:a,onSubmit:o}),0!==t.length&&c.a.createElement(Dt,{title:"Movie Results"},t.map((function(e){return c.a.createElement(mt,{key:e.id,id:e.id,votes:e.vote_average,title:e.title,poster:e.poster_path||e.backdrop_path,backgroundColor:"#6e2465"})}))),0!==n.length&&c.a.createElement(Dt,{title:"TV Results"},n.map((function(e){return c.a.createElement(mt,{isTv:!0,key:e.id,id:e.id,votes:e.vote_average,title:e.name,poster:e.poster_path,backgroundColor:"#6e2465"})}))))},Zt=function(){var e=Object(u.useState)(""),t=i()(e,2),n=t[0],r=t[1],a=Object(u.useState)({movies:[],shows:[],movieError:null,showsError:null}),o=i()(a,2),l=o[0],s=o[1];return c.a.createElement(Ut,O()({},l,{onChange:function(e){return r(e)},onSubmit:function(){var e,t,r,a,o,l,u,c;return j.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(""!==n){p.next=2;break}return p.abrupt("return");case 2:return p.next=4,j.a.awrap(re(n));case 4:return e=p.sent,t=i()(e,2),r=t[0],a=t[1],p.next=10,j.a.awrap(se(n));case 10:o=p.sent,l=i()(o,2),u=l[0],c=l[1],s({movies:r,shows:u,movieError:a,showsError:c});case 15:case"end":return p.stop()}}),null,null,null,Promise)},keyword:n}))},$t=n(83),en=n(4);function tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?tn(Object(n),!0).forEach((function(t){S()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function rn(){var e=_()(["\n  border-radius: 20px;\n  width: 100%;\n  height: 100%;\n"]);return rn=function(){return e},e}function an(){var e=_()(["\n  flex: 1;\n  background-color: #be2465;\n  align-items: center;\n"]);return an=function(){return e},e}var on=fe.a.get("window"),ln=on.width,un=on.height,cn=R.a.View(an()),sn=R.a.Image(rn()),pn={top:50,height:un/1.5,width:"90%",position:"absolute"},mn=function(e){var t=e.results,n=Object(u.useState)(0),r=i()(n,2),o=r[0],l=r[1],s=function(){return l((function(e){return e+1}))},p=new en.a.ValueXY,m=$t.a.create({onStartShouldSetPanResponder:function(){return!0},onPanResponderMove:function(e,t){var n=t.dx,r=t.dy;p.setValue({x:n,y:r})},onPanResponderRelease:function(e,t){var n=t.dx,r=t.dy;n>=150?en.a.spring(p,{toValue:{x:ln+100,y:r}}).start(s):n<=-150?en.a.spring(p,{toValue:{x:-ln-100,y:r}}).start(s):en.a.spring(p,{toValue:{x:0,y:0}}).start()}}),f=p.x.interpolate({inputRange:[-255,0,255],outputRange:["-8deg","0deg","8deg"],extrapolate:"clamp"}),d=p.x.interpolate({inputRange:[-255,0,255],outputRange:[1,.2,1],extrapolate:"clamp"}),g=p.x.interpolate({inputRange:[-255,0,255],outputRange:[1,.8,1],extrapolate:"clamp"});return Object(u.useEffect)((function(){p.setValue({x:0,y:0})}),[o]),c.a.createElement(cn,null,t.map((function(e,t){return t<o?null:t===o?c.a.createElement(en.a.View,O()({style:nn({},pn,{zIndex:1,transform:[{rotate:f}].concat(a()(p.getTranslateTransform()))}),key:e.id},m.panHandlers),c.a.createElement(sn,{source:{uri:me(e.poster_path)}})):t===o+1?c.a.createElement(en.a.View,O()({style:nn({},pn,{zIndex:-t,opacity:d,transform:[{scale:g}]}),key:e.id},m.panHandlers),c.a.createElement(sn,{source:{uri:me(e.poster_path)}})):c.a.createElement(en.a.View,O()({style:nn({},pn,{zIndex:-t,opacity:0}),key:e.id},m.panHandlers),c.a.createElement(sn,{source:{uri:me(e.poster_path)}}))})))},fn=function(){var e=Object(u.useState)({results:[],error:null}),t=i()(e,2),n=t[0],r=t[1];return Object(u.useEffect)((function(){!function(){var e,t,n,a;j.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,j.a.awrap(oe());case 2:e=o.sent,t=i()(e,2),n=t[0],a=t[1],r({results:n,error:a});case 7:case"end":return o.stop()}}),null,null,null,Promise)}()}),[]),c.a.createElement(mn,n)},dn=Object(y.a)(),gn=function(){return c.a.createElement(dn.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#1e2465",borderBottomColor:"#1e2465",shadowColor:"#1e2465"},headerTintColor:"white",headerBackTitleVisible:!1}},c.a.createElement(dn.Screen,{name:"Movies",component:Lt}),c.a.createElement(dn.Screen,{name:"Detail",component:Me}))},vn=function(){return c.a.createElement(dn.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#3e2465",borderBottomColor:"#3e2465",shadowColor:"#3e2465"},headerTintColor:"white",headerBackTitleVisible:!1}},c.a.createElement(dn.Screen,{name:"TV",component:Gt}),c.a.createElement(dn.Screen,{name:"Detail",component:Me}))},hn=function(){return c.a.createElement(dn.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#6e2465",borderBottomColor:"#6e2465",shadowColor:"#6e2465"},headerTintColor:"white",headerBackTitleVisible:!1}},c.a.createElement(dn.Screen,{name:"Search",component:Zt}),c.a.createElement(dn.Screen,{name:"Detail",component:Me}))},bn=function(){return c.a.createElement(dn.Navigator,{screenOptions:{headerStyle:{backgroundColor:"#be2465",borderBottomColor:"#be2465",shadowColor:"#be2465"},headerTintColor:"white",headerBackTitleVisible:!1}},c.a.createElement(dn.Screen,{name:"Discovery",component:fn}),c.a.createElement(dn.Screen,{name:"Detail",component:Me}))},En=Object(E.a)(),wn=function(){return c.a.createElement(En.Navigator,{activeColor:"#f0edf6",inactiveColor:"#3e2465",barStyle:{backgroundColor:"#694fad"},initialRouteName:"Movies"},c.a.createElement(En.Screen,{options:{tabBarColor:"#1e2465",tabBarIcon:function(e){var t=e.focused;return c.a.createElement(v.a,{name:"ios"===w.a.OS?"ios-film":"md-film",color:t?"white":"grey",size:26})}},name:"Movies",component:gn}),c.a.createElement(En.Screen,{options:{tabBarColor:"#3e2465",tabBarIcon:function(e){var t=e.focused;return c.a.createElement(v.a,{name:"ios"===w.a.OS?"ios-tv":"md-tv",color:t?"white":"grey",size:26})}},name:"TV",component:vn}),c.a.createElement(En.Screen,{options:{tabBarColor:"#6e2465",tabBarIcon:function(e){var t=e.focused;return c.a.createElement(v.a,{name:"ios"===w.a.OS?"ios-search":"md-search",color:t?"white":"grey",size:26})}},name:"Search",component:hn}),c.a.createElement(En.Screen,{options:{tabBarColor:"#be2465",tabBarIcon:function(e){var t=e.focused;return c.a.createElement(v.a,{name:"ios"===w.a.OS?"ios-heart":"md-heart",color:t?"white":"grey",size:26})}},name:"Discovery",component:bn}))};n.d(t,"a",(function(){return yn}));function yn(){var e=Object(u.useState)(!1),t=i()(e,2),r=t[0],o=t[1];return r?c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement(wn,null)),c.a.createElement(f.a,{barStyle:"light-content"})):c.a.createElement(s.a,{startAsync:function(){var e=function(e){return e.map((function(e){return"string"===typeof e?m.a.prefetch(e):g.a.fromModule(e).downloadAsync()}))}(["https://images.unsplash.com/photo-1571847140471-1d7766e825ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=673&q=80",n(492)]),t=function(e){return e.map((function(e){return[p.b(e),p.b(e)]}))}([v.a.font,h.a.font]);return Promise.all([].concat(a()(e),a()(t)))},onFinish:function(){return o(!0)},onError:console.error})}},310:function(e,t,n){n(311),e.exports=n(498)},311:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/movie-app/expo-service-worker.js",{scope:"/movie-app/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},492:function(e,t,n){e.exports=n.p+"static/media/splash.43ec0dcb.png"}},[[310,1,2]]]);
//# sourceMappingURL=app.87538df4.chunk.js.map