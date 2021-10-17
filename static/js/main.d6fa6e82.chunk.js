(this["webpackJsonpmovie-catalogue"]=this["webpackJsonpmovie-catalogue"]||[]).push([[0],{106:function(e,t,a){},110:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(59),o=a.n(i),s=(a(106),a(22)),u=a(46),p=a(17),l=a(42);!function(e){e.SetPopularMovieList="SET_POPULAR_MOVIE_LIST",e.SetTopRatedMovieList="SET_TOP_RATED_MOVIE_LIST",e.SetUpcomingMovieList="SET_UPCOMING_MOVIE_LIST",e.SetMovieListFailed="SET_MOVIE_LIST_FAILED"}(n||(n={}));var v,d={popularMovieList:[],topRatedMovieList:[],upcomingMovieList:[],error:void 0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=Object(l.a)(t,["type"]);switch(a){case n.SetPopularMovieList:case n.SetTopRatedMovieList:case n.SetUpcomingMovieList:case n.SetMovieListFailed:return Object(p.a)(Object(p.a)({},e),r);default:return e}};!function(e){e.SetMovieDetails="SET_MOVIE_DETAILS",e.SetMovieDetailsFailed="SET_MOVIE_DETAILS_FAILED",e.ResetMovieDetails="RESET_MOVIE_DETAILS"}(v||(v={}));var b,h={movieDetails:void 0,error:void 0},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(l.a)(t,["type"]);switch(a){case v.SetMovieDetails:case v.SetMovieDetailsFailed:return Object(p.a)(Object(p.a)({},e),n);default:return e}};!function(e){e.SetMovieList="SET_MOVIE_LIST",e.SetMovieListFailed="SET_MOVIE_LIST_FAILED"}(b||(b={}));var O,f={movieList:[],page:1,totalPage:1,error:void 0},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(l.a)(t,["type"]);switch(a){case b.SetMovieList:case b.SetMovieListFailed:return Object(p.a)(Object(p.a)({},e),n);default:return e}};!function(e){e.SearchByLanguage="SEARCH_BY_LANGUAGE",e.SearchByGenre="SEARCH_BY_GENRE",e.SearchByQuery="SEARCH_BY_QUERY",e.SearchMoviesFailed="SEARCH_MOVIES_FAILED"}(O||(O={}));var m,S={language:void 0,genreID:void 0,query:void 0,page:1,movieList:[],totalPages:1,error:void 0},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=Object(l.a)(t,["type"]);switch(a){case O.SearchByLanguage:return Object(p.a)(Object(p.a)(Object(p.a)({},e),n),{},{genreID:void 0,query:void 0});case O.SearchByGenre:return Object(p.a)(Object(p.a)(Object(p.a)({},e),n),{},{language:void 0,query:void 0});case O.SearchByQuery:return Object(p.a)(Object(p.a)(Object(p.a)({},e),n),{},{language:void 0,genreID:void 0});case O.SearchMoviesFailed:return Object(p.a)(Object(p.a)({},e),n);default:return e}},_=Object(u.b)({home:j,movies:x,movie:g,search:y}),M=a(35),L=a(21),w=(a(110),a(169)),k=a(170),E=a(173),T=a(180),I=a(181),A=a(183),B=a(184),D=a(185),R=a(175),F=a(186);!function(e){e.Home="/home",e.Root="/",e.Movies="/movies/",e.Movie="/movie/",e.SearchByGenre="/search/genre/",e.SearchByLanguage="/search/language/",e.SearchByQuery="/search/query/"}(m||(m={}));var P,G=a(1),U=function(){var e=Object(L.f)();return Object(G.jsx)(T.a,{sx:{flexGrow:1},children:Object(G.jsx)(I.a,{position:"static",children:Object(G.jsxs)(A.a,{children:[Object(G.jsx)(B.a,{color:"inherit",onClick:function(){return e.push(m.Home)},children:Object(G.jsx)(w.a,{})}),Object(G.jsx)(B.a,{color:"inherit",onClick:function(){return e.push("".concat(m.Movies,"page/1"))},children:Object(G.jsx)(k.a,{})}),Object(G.jsx)("div",{children:Object(G.jsx)(D.a,{variant:"outlined",children:Object(G.jsx)(R.a,{onKeyDown:function(t){if("Enter"===t.nativeEvent.key){var a=t.target.value;a&&e.push("".concat(m.SearchByQuery).concat(a,"/page/1"))}},placeholder:"Search",id:"outlined-adornment-weight",size:"small",endAdornment:Object(G.jsx)(F.a,{position:"end",children:Object(G.jsx)(B.a,{onClick:function(){},children:Object(G.jsx)(E.a,{})})})})})})]})})})};!function(e){e.SetPopularMovieListSaga="SET_LATEST_MOVIE_LIST_SAGA",e.SetTopRatedMovieListSaga="SET_TOP_RATED_MOVIE_LIST_SAGA",e.SetUpcomingMovieListSaga="SET_UPCOMING_MOVIE_LIST_SAGA"}(P||(P={}));var C,V=a(188),Q=a(93),q=a.n(Q);a(126);!function(e){e.PosterURL="https://image.tmdb.org/t/p/w500/"}(C||(C={}));var H,N=function(e){var t=e.type,a=Object(s.c)((function(e){return"Popular"===t?e.home.popularMovieList:"Top Rated"===t?e.home.topRatedMovieList:"Upcoming"===t?e.home.upcomingMovieList:[]})),n=Object(s.c)((function(e){return e.home.error}));return n?Object(G.jsx)("h1",{children:n.message}):Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)("h1",{children:t}),Object(G.jsx)(q.a,{responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},showDots:!0,infinite:!0,keyBoardControl:!0,children:null===a||void 0===a?void 0:a.map((function(e){return Object(G.jsx)("div",{children:Object(G.jsx)(V.a,{href:"".concat(m.Movie).concat(e.id),children:Object(G.jsx)("img",{src:"".concat(C.PosterURL).concat(e.poster_path),alt:e.original_title})})},e.id)}))})]})},Y=function(){var e=Object(s.b)();return e({type:P.SetPopularMovieListSaga}),e({type:P.SetTopRatedMovieListSaga}),e({type:P.SetUpcomingMovieListSaga}),Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)(U,{}),Object(G.jsx)(N,{type:"Popular"}),Object(G.jsx)(N,{type:"Top Rated"}),Object(G.jsx)(N,{type:"Upcoming"})]})};!function(e){e.SetMovieListSaga="SET_MOVIE_LIST_SAGA"}(H||(H={}));var W,z=a(189),J=a(176),K=function(){var e=Object(s.c)((function(e){return e.movies})),t=e.movieList,a=e.page,n=e.totalPage,c=e.error,i=Object(L.f)();return c?Object(G.jsx)("h1",{children:c.message}):Object(G.jsx)(r.Fragment,{children:t.length?Object(G.jsxs)(r.Fragment,{children:[t.map((function(e){return Object(G.jsx)(M.b,{to:"".concat(m.Movie).concat(e.id),children:Object(G.jsx)("img",{src:"".concat(C.PosterURL).concat(e.poster_path),alt:e.original_title,width:window.innerWidth/6,height:window.innerWidth/6*1.5})},e.id)})),Object(G.jsx)(z.a,{maxWidth:"sm",children:Object(G.jsx)(J.a,{count:n,page:a,color:"primary",size:"large",variant:"outlined",shape:"rounded",onChange:function(e,t){i.push("".concat(m.Movies,"page/").concat(t))}})})]}):"No Results"})},X=function(e){var t=Object(s.b)(),a=e.match.params.page;return t(function(e){return{type:H.SetMovieListSaga,page:e}}(void 0===a?"1":a)),Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)(U,{}),Object(G.jsx)(K,{})]})};!function(e){e.SetMovieDetailsSaga="SET_MOVIE_DETAILS_SAGA"}(W||(W={}));var Z=a(190),$=a(179),ee=a(191),te=a(192),ae=a(177),ne=function(){var e=Object(s.c)((function(e){return e.movie})),t=e.movieDetails,a=e.error,n=Object(s.b)();return Object(r.useEffect)((function(){return function(){n({type:v.SetMovieDetails,movieDetails:void 0})}}),[n]),a?Object(G.jsx)("h1",{children:a.message}):t?Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),Object(G.jsx)(Z.a,{raised:!0,children:Object(G.jsxs)($.a,{container:!0,children:[Object(G.jsx)($.a,{item:!0,xs:4,children:Object(G.jsx)(ee.a,{component:"img",alt:t.title,image:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),title:t.title})}),Object(G.jsx)($.a,{item:!0,xs:8,children:Object(G.jsxs)(te.a,{children:[Object(G.jsxs)(ae.a,{children:["Title: ",t.title]}),t.title!==t.original_title&&Object(G.jsxs)(ae.a,{children:["Original Title: ",t.original_title]}),!!t.genres.length&&Object(G.jsxs)(ae.a,{children:["Genres:",t.genres.map((function(e,t){return Object(G.jsxs)(r.Fragment,{children:["\xa0\xa0",Object(G.jsx)(M.b,{to:"".concat(m.SearchByGenre).concat(e.id,"/page/1"),children:e.name},t)]},t)}))]}),!!t.spoken_languages.length&&Object(G.jsxs)(ae.a,{children:["Language:",t.spoken_languages.map((function(e,t){return Object(G.jsxs)(r.Fragment,{children:["\xa0\xa0",Object(G.jsx)(M.b,{to:"".concat(m.SearchByLanguage).concat(e.iso_639_1,"/page/1"),children:e.english_name},t)]},t)}))]}),t.overview&&Object(G.jsxs)(ae.a,{children:["Overview: ",t.overview]}),!!t.videos.results.length&&Object(G.jsx)("iframe",{title:"trailer",width:"1280",height:"720",src:"https://www.youtube.com/embed/".concat(t.videos.results[0].key)})]})})]})})]}):null},re=function(e){var t;return Object(s.b)()((t=e.match.params.id,{type:W.SetMovieDetailsSaga,movieID:t})),Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)(U,{}),Object(G.jsx)(ne,{})]})},ce=a(95),ie=a(7),oe=a.n(ie),se=a(11),ue="6fdc960c4cb19000df3556ff8e8b5831",pe={PopularMoviesEndpoint:"https://api.themoviedb.org/3/movie/popular?api_key=".concat(ue,"&page=1"),TopRatedMoviesEndpoint:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(ue,"&page=1"),UpcomingMoviesEndpoint:"https://api.themoviedb.org/3/movie/upcoming?api_key=".concat(ue,"&page=1")},le=a(37),ve=a(30),de=a.n(ve),je=de.a.CancelToken.source(),be=function(){var e=Object(le.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get(t,{cancelToken:je.token});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=oe.a.mark(ye),ge=oe.a.mark(_e),Oe=oe.a.mark(Me),fe=oe.a.mark(Le),xe=oe.a.mark(we),me=oe.a.mark(ke),Se=oe.a.mark(Ee);function ye(){var e,t;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(be,pe.PopularMoviesEndpoint);case 3:return e=a.sent,t=e.data.results,a.next=7,Object(se.b)({type:n.SetPopularMovieList,popularMovieList:t});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(se.b)({type:n.SetMovieListFailed,error:a.t0});case 13:case"end":return a.stop()}}),he,null,[[0,9]])}function _e(){var e,t;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(be,pe.TopRatedMoviesEndpoint);case 3:return e=a.sent,t=e.data.results,a.next=7,Object(se.b)({type:n.SetTopRatedMovieList,topRatedMovieList:t});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(se.b)({type:n.SetMovieListFailed,error:a.t0});case 13:case"end":return a.stop()}}),ge,null,[[0,9]])}function Me(){var e,t;return oe.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(se.a)(be,pe.UpcomingMoviesEndpoint);case 3:return e=a.sent,t=e.data.results,a.next=7,Object(se.b)({type:n.SetUpcomingMovieList,upcomingMovieList:t});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(se.b)({type:n.SetMovieListFailed,error:a.t0});case 13:case"end":return a.stop()}}),Oe,null,[[0,9]])}function Le(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(P.SetUpcomingMovieListSaga,Me);case 2:case"end":return e.stop()}}),fe)}function we(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(P.SetTopRatedMovieListSaga,_e);case 2:case"end":return e.stop()}}),xe)}function ke(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(P.SetPopularMovieListSaga,ye);case 2:case"end":return e.stop()}}),me)}function Ee(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.c)(we);case 2:return e.next=4,Object(se.c)(ke);case 4:return e.next=6,Object(se.c)(Le);case 6:case"end":return e.stop()}}),Se)}var Te=de.a.CancelToken.source(),Ie=function(){var e=Object(le.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("6fdc960c4cb19000df3556ff8e8b5831","&language=en-US&append_to_response=videos,imagess&include_image_language=en,null"),{cancelToken:Te.token});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=oe.a.mark(Re),Be=oe.a.mark(Fe),De=oe.a.mark(Pe);function Re(e){var t,a,n;return oe.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.movieID,r.prev=1,r.next=4,Object(se.a)(Ie,t);case 4:return a=r.sent,n=a.data,r.next=8,Object(se.b)({type:v.SetMovieDetails,movieDetails:n});case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(1),r.next=14,Object(se.b)({type:v.SetMovieDetailsFailed,error:r.t0});case 14:case"end":return r.stop()}}),Ae,null,[[1,10]])}function Fe(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(W.SetMovieDetailsSaga,Re);case 2:case"end":return e.stop()}}),Be)}function Pe(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.c)(Fe);case 2:case"end":return e.stop()}}),De)}var Ge,Ue=function(){var e=Object(le.a)(oe.a.mark((function e(t){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("6fdc960c4cb19000df3556ff8e8b5831","&page=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=oe.a.mark(qe),Ve=oe.a.mark(He),Qe=oe.a.mark(Ne);function qe(e){var t,a,n,r,c;return oe.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.page,i.prev=1,i.next=4,Object(se.a)(Ue,t);case 4:return a=i.sent,n=a.data,r=n.results,c=n.total_results,i.next=8,Object(se.b)({type:b.SetMovieList,movieList:r,totalPage:Math.ceil(c/20),page:parseInt(t)});case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(se.b)({type:b.SetMovieListFailed,error:i.t0});case 14:case"end":return i.stop()}}),Ce,null,[[1,10]])}function He(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(H.SetMovieListSaga,qe);case 2:case"end":return e.stop()}}),Ve)}function Ne(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.c)(He);case 2:case"end":return e.stop()}}),Qe)}!function(e){e.SearchByLanguageSaga="SEARCH_BY_LANGUAGE_SAGA",e.SearchByGenreSaga="SEARCH_BY_GENRE_SAGA",e.SearchByQuerySaga="SEARCH_BY_QUERY_SAGA"}(Ge||(Ge={}));var Ye=de.a.CancelToken.source(),We=function(){var e=Object(le.a)(oe.a.mark((function e(t,a){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("https://api.themoviedb.org/3/discover/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&with_original_language=".concat(t,"&page=").concat(a),{cancelToken:Ye.token});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),ze=function(){var e=Object(le.a)(oe.a.mark((function e(t,a){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("https://api.themoviedb.org/3/discover/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&with_genres=".concat(t,"&page=").concat(a),{cancelToken:Ye.token});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Je=function(){var e=Object(le.a)(oe.a.mark((function e(t,a){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de.a.get("https://api.themoviedb.org/3/search/movie?api_key=6fdc960c4cb19000df3556ff8e8b5831&query=".concat(t,"&page=").concat(a),{cancelToken:Ye.token});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ke=oe.a.mark(nt),Xe=oe.a.mark(rt),Ze=oe.a.mark(ct),$e=oe.a.mark(it),et=oe.a.mark(ot),tt=oe.a.mark(st),at=oe.a.mark(ut);function nt(e){var t,a,n,r,c,i;return oe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.language,a=e.page,o.prev=1,o.next=4,Object(se.a)(We,t,a);case 4:return n=o.sent,r=n.data,c=r.results,i=r.total_results,o.next=8,Object(se.b)({type:O.SearchByLanguage,movieList:c,page:parseInt(a),language:t,totalPages:Math.ceil(i/20),error:void 0});case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(se.b)({type:O.SearchMoviesFailed,error:o.t0});case 14:case"end":return o.stop()}}),Ke,null,[[1,10]])}function rt(e){var t,a,n,r,c,i;return oe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.genreID,a=e.page,o.prev=1,o.next=4,Object(se.a)(ze,t,a);case 4:return n=o.sent,r=n.data,c=r.results,i=r.total_results,o.next=8,Object(se.b)({type:O.SearchByGenre,movieList:c,page:parseInt(a),genreID:t,totalPages:Math.ceil(i/20),error:void 0});case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(se.b)({type:O.SearchMoviesFailed,error:o.t0});case 14:case"end":return o.stop()}}),Xe,null,[[1,10]])}function ct(e){var t,a,n,r,c,i;return oe.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.query,a=e.page,o.prev=1,o.next=4,Object(se.a)(Je,t,a);case 4:return n=o.sent,r=n.data,c=r.results,i=r.total_results,o.next=8,Object(se.b)({type:O.SearchByQuery,movieList:c,page:a,query:t,totalPages:Math.ceil(i/20),error:void 0});case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(se.b)({type:O.SearchMoviesFailed,error:o.t0});case 14:case"end":return o.stop()}}),Ze,null,[[1,10]])}function it(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(Ge.SearchByQuerySaga,ct);case 2:case"end":return e.stop()}}),$e)}function ot(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(Ge.SearchByLanguageSaga,nt);case 2:case"end":return e.stop()}}),et)}function st(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.d)(Ge.SearchByGenreSaga,rt);case 2:case"end":return e.stop()}}),tt)}function ut(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.c)(st);case 2:return e.next=4,Object(se.c)(ot);case 4:return e.next=6,Object(se.c)(it);case 6:case"end":return e.stop()}}),at)}var pt=oe.a.mark(lt);function lt(){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(se.c)(Ee);case 2:return e.next=4,Object(se.c)(Pe);case 4:return e.next=6,Object(se.c)(Ne);case 6:return e.next=8,Object(se.c)(ut);case 8:case"end":return e.stop()}}),pt)}var vt=function(){var e=Object(s.c)((function(e){return e.search})),t=e.movieList,a=e.page,n=e.totalPages,c=e.language,i=e.genreID,o=e.query,u=Object(L.f)();return Object(G.jsx)(r.Fragment,{children:t.length?Object(G.jsxs)(r.Fragment,{children:[t.map((function(e){return Object(G.jsx)(M.b,{to:"".concat(m.Movie).concat(e.id),children:Object(G.jsx)("img",{src:"".concat(C.PosterURL).concat(e.poster_path),alt:e.original_title,width:window.innerWidth/6,height:window.innerWidth/6*1.5})},e.id)})),Object(G.jsx)(z.a,{maxWidth:"sm",children:Object(G.jsx)(J.a,{count:n,page:a,color:"primary",size:"large",variant:"outlined",shape:"rounded",onChange:function(e,t){i?u.push("".concat(m.SearchByGenre).concat(i,"/page/").concat(t)):c?u.push("".concat(m.SearchByLanguage).concat(c,"/page/").concat(t)):o&&u.push("".concat(m.SearchByQuery).concat(o,"/page/").concat(t))}})})]}):"No Results"})},dt=function(e){var t=Object(s.b)(),a=e.match.params,n=a.page,c=a.language,i=void 0===c?void 0:c,o=a.genreID,u=void 0===o?void 0:o,p=a.query,l=void 0===p?void 0:p;return!u||i||l?!i||u||l?!l||i||u||t(function(e,t){return{type:Ge.SearchByQuerySaga,query:e,page:t}}(l,n)):t(function(e,t){return{type:Ge.SearchByLanguageSaga,language:e,page:t}}(i,n)):t(function(e,t){return{type:Ge.SearchByGenreSaga,genreID:e,page:t}}(u,n)),Object(G.jsxs)(r.Fragment,{children:[Object(G.jsx)(U,{}),Object(G.jsx)(vt,{})]})},jt=function(){var e=Object(ce.a)(),t=Object(u.d)(_,Object(u.a)(e));return e.run(lt),Object(G.jsx)(s.a,{store:t,children:Object(G.jsx)("div",{className:"App",children:Object(G.jsx)(M.a,{children:Object(G.jsxs)(L.c,{children:[Object(G.jsx)(L.a,{exact:!0,path:"".concat(m.SearchByGenre,":genreID/page/:page"),component:dt}),Object(G.jsx)(L.a,{exact:!0,path:"".concat(m.SearchByLanguage,":language/page/:page"),component:dt}),Object(G.jsx)(L.a,{exact:!0,path:"".concat(m.SearchByQuery,":query/page/:page"),component:dt}),Object(G.jsx)(L.a,{exact:!0,path:"".concat(m.Movies,"page/:page"),component:X}),Object(G.jsx)(L.a,{exact:!0,path:"".concat(m.Movie,":id"),component:re}),Object(G.jsx)(L.a,{path:[m.Root,m.Home],component:Y})]})})})})},bt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,193)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};o.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(jt,{})}),document.getElementById("root")),bt()}},[[146,1,2]]]);
//# sourceMappingURL=main.d6fa6e82.chunk.js.map