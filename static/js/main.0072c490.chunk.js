(this.webpackJsonpfactsolotl=this.webpackJsonpfactsolotl||[]).push([[0],{21:function(e,t,a){e.exports={toggleSchool:"Search_toggleSchool__3l9Ba",toggleCounty:"Search_toggleCounty__3QFZ9",footer:"Search_footer__2Eo_C"}},24:function(e,t,a){e.exports={nav:"navbar_nav__3IIWD"}},25:function(e,t,a){e.exports=a.p+"static/media/bubbleF.ecb67f7a.png"},26:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(22),l=a.n(c),r=(a(31),a(4)),s=a(5),i=a(7),u=a(6),d=a(8),m=a(2),h=a(3),f=a.n(h),v=a(23),g=(a(51),function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12 m4"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-image"},o.a.createElement("div",{className:"details"},o.a.createElement("h4",null,e.name),o.a.createElement("div",{className:"Info"},o.a.createElement("p",null,"Exceedance: ",e.exceedance),o.a.createElement("button",{onClick:e.clicked,id:"expand",className:"btn btn waves-effect waves-dark white"},o.a.createElement("i",{id:"chevron",className:"material-icons"},"chevron_right")))))))))}),E=(a(52),function(e){var t=o.a.createElement("p",{style:{textAlign:"center"}},"Something went wrong!");return e.error||(t=e.schools.map((function(t){return o.a.createElement(g,{key:t.id,name:t.school_name,district:t.district,exceedance:t.action_level_exceedance,clicked:function(){return e.onSchoolSelect(t.id)}})}))),o.a.createElement("div",null,t,o.a.createElement("section",null))}),p=(a(53),function(e){var t=o.a.createElement("div",null,o.a.createElement("p",{className:"FullPost"},"Please select a school!"));return e.loadedSchool&&(t=o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col s12 m4"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-image"},o.a.createElement("div",{className:"details"},o.a.createElement("h1",null,e.loadedSchool.school_name),o.a.createElement("p",null,e.loadedSchool.district),o.a.createElement("p",null,e.loadedSchool.id),o.a.createElement("p",null,e.loadedSchool.result)))))))),t}),y=(a(21),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={schools:[],selectedschoolId:"",error:!1,loadedSchool:null,query:"",schoolQuery:!0,queried:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"queryHandler",value:function(e,t){var a=this;this.setState(Object(m.a)({},t,{query:e})),""===this.state.query?alert("Please enter a query."):f.a.get("https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q="+this.state.query).then((function(e){console.log(e);var n=e.data.result.records.map((function(e){return Object(m.a)({},e,{id:Object(v.v4)()})}));a.setState(Object(m.a)({},t,{schools:n,schoolQuery:!0,queried:!0}))})).catch((function(e){a.setState({error:!0})}))}},{key:"schoolDetailsHandler",value:function(e,t){this.setState({selectedSchoolId:e});for(var a=this.state.schools,n=0;n<a.length;n++)a[n].id===e&&this.setState(Object(m.a)({},t,{loadedSchool:a[n]}))}},{key:"updateQuery",value:function(e,t){this.setState(Object(m.a)({},t,{query:e}))}},{key:"onToggleQuery",value:function(e){this.setState(Object(m.a)({},e,{schoolQuery:!this.state.schoolQuery}))}},{key:"render",value:function(){var e=this,t=this.state.schoolQuery?"toggleSchool":"toggleCounty",a=this.state.schoolQuery?"toggleCounty":"toggleSchool",n=this.state.schoolQuery?"Search by school":"Search by county";return o.a.createElement("div",null,o.a.createElement(E,{error:this.state.error,schools:this.state.schools,selectedSchoolId:this.state.selectedSchoolId,onSchoolSelect:function(t){return e.schoolDetailsHandler(t)},loadedSchool:this.state.loadedSchool}),o.a.createElement(p,{id:this.state.selectedSchoolId,loadedSchool:this.state.loadedSchool}),o.a.createElement("div",{className:"footer"},o.a.createElement("div",{className:"card white"},o.a.createElement("div",{className:"card-content grey-text"},o.a.createElement("span",{className:"card-title"},n),o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.queryHandler(e.state.query)}},o.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.query,onChange:function(t){return e.setState({query:t.target.value})}}),o.a.createElement("div",{className:"card-action"},o.a.createElement("div",{className:"switch"},o.a.createElement("label",null,o.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:t},"School"),o.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:a},"County")),o.a.createElement("button",{id:"search",className:"btn waves-effect waves-light green",type:"submit"},o.a.createElement("i",{className:"large material-icons prefix"},"search")))))))))}}]),t}(n.Component)),b=a(24),S=a(25),w=a.n(S),N=a(9),_=function(){return o.a.createElement("div",{className:N.logo},o.a.createElement("a",{href:"https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("img",{className:N.leftLogo,src:w.a,alt:"A pink cartoon axolotl"})))},k=function(){return o.a.createElement("div",{className:b.nav},o.a.createElement(_,null))},j=(a(54),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.queried?this.props.queried&&this.props.schoolQuery?o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"sliding-background"}),o.a.createElement(k,null),o.a.createElement("div",{className:"footer"},o.a.createElement(y,null))):void 0:o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"sliding-background"}),o.a.createElement(k,null),o.a.createElement("div",{className:"footer"},o.a.createElement(y,null)))}}]),t}(o.a.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}f.a.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),f.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),l.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Factsolotl",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Factsolotl","/service-worker.js");x?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):O(e)}))}}()},9:function(e,t,a){e.exports={leftLogo:"Logo_leftLogo__yKmfW",header:"Logo_header__1wXHb"}}},[[26,1,2]]]);
//# sourceMappingURL=main.0072c490.chunk.js.map