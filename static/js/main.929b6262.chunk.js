(this.webpackJsonpfactsolotl=this.webpackJsonpfactsolotl||[]).push([[0],{1:function(e,t,a){e.exports={toggleOn:"Search_toggleOn__2GMPh",exceedanceToggle:"Search_exceedanceToggle__1rKxs",toggleOff:"Search_toggleOff__3MPn4",clickExpand:"Search_clickExpand__1KMdK",total:"Search_total__sZChh",searchHeader:"Search_searchHeader__1E-Ce",searchTitle:"Search_searchTitle__1I7ND",toggleBG:"Search_toggleBG__1THoe",exceedanceTitle:"Search_exceedanceTitle__29K3L",select:"Search_select__1gg29",searchToggle:"Search_searchToggle__2sYVV",modal:"Search_modal__1PEdh",detailBox:"Search_detailBox__2C408",animatetop:"Search_animatetop__2yR_B",infoBox:"Search_infoBox__3RgiN",infoIcon:"Search_infoIcon__2T-AX",spinner:"Search_spinner__24dqW"}},19:function(e,t,a){},23:function(e,t,a){e.exports={leftLogo:"Logo_leftLogo__yKmfW"}},38:function(e,t,a){e.exports={list:"List_list__2JTWI",redBG:"List_redBG__3v7Jh",greenBG:"List_greenBG__1EYTT"}},39:function(e,t,a){e.exports={map:"Map_map__2bGnQ",mapLabel:"Map_mapLabel__2chvM"}},44:function(e,t,a){e.exports={nav:"navbar_nav__3qFhO"}},45:function(e,t,a){e.exports=a.p+"static/media/bubbleF.ecb67f7a.png"},46:function(e,t,a){e.exports=a(78)},51:function(e,t,a){},6:function(e,t,a){e.exports={info:"Splash_info__1nnsE",fortyTwo:"Splash_fortyTwo__1N39g",content:"Splash_content__1LjUm",content2:"Splash_content2__1daBF",title:"Splash_title__3tXU1",legend:"Splash_legend__X0Aah",highlightMap:"Splash_highlightMap__29zCB"}},71:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(37),r=a.n(c),o=(a(51),a(12)),s=a(13),i=a(15),m=a(14),u=a(16),d=a(24),h=a(17),p=a.n(h),f=a(20),g=(a(71),function(e){var t;return"Yes"===e.exceedance?t="redBG pulse btn-floating btn waves-effect waves-dark red":"No"===e.exceedance&&(t="greenBG btn-floating btn waves-effect waves-dark white"),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"previewCard",className:"card"},l.a.createElement("div",{className:"details"},l.a.createElement("h4",{className:"schoolPreviewName"},e.name),l.a.createElement("label",null,"  ",e.sampleLocation),l.a.createElement("p",null,e.id),l.a.createElement("div",{className:"Info"},l.a.createElement("button",{onClick:e.clicked,id:"expand",className:t},l.a.createElement("i",{id:"chevron",className:"material-icons"},"expand_more")))))))}),E=a(38),v=function(e){var t=l.a.createElement("p",{style:{textAlign:"center"}},"Something went wrong!");return t=e.queried?e.schools.map((function(t){return l.a.createElement("div",{key:t.id},l.a.createElement(g,{name:t.school_name,district:t.district,exceedance:t.action_level_exceedance,toggleDetails:t.toggleDetails,closeDetais:t.closeDetais,sampleLocation:t.school_site_name,clicked:function(){return e.onSchoolSelect(t.id)}}))})):l.a.createElement("div",{className:"card"},l.a.createElement("h4",null,"Enter a search to see a list of sample previews by school here.")),l.a.createElement("div",{className:E.list},t)},y=a(19),_=function(e){var t=null;if(e.loadedSchool){var a=new Date(e.loadedSchool.sample_date),n=a.getFullYear(),c=a.getMonth()+1,r=a.getDate();t=l.a.createElement("div",{className:y.cardDetail},l.a.createElement("div",{id:"detailInset",className:"card"},l.a.createElement("button",{onClick:function(t){return e.closeDetails(t)},id:"closeBtn",className:" btn-floating btn waves-effect waves-dark white"},l.a.createElement("i",{id:"close",className:"material-icons"},"close")),l.a.createElement("h4",null,e.loadedSchool.school_name),l.a.createElement("p",null,"School district: ",e.loadedSchool.district),l.a.createElement("p",null,"Exceedance: ",e.loadedSchool.action_level_exceedance),l.a.createElement("p",null,"Lead concentration: ",e.loadedSchool.result," ppb"),l.a.createElement("p",null,"Sampled from: ",e.loadedSchool.school_site_name),l.a.createElement("p",null,"Date sampled: ",c,"/",r,"/",n),l.a.createElement("p",null,"Water system: ",e.loadedSchool.water_system_name)))}return t},N=a(1),b=a(6),S=a(39),C=a(40),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return l.a.createElement("div",null,l.a.createElement("div",{id:"chart_div",className:S.map},l.a.createElement(C.a,{chartType:"GeoChart",data:[["County","Exceedances"],["Alameda County",63],["Alpine County",1],["Amador County",2],["Butte County",2],["Calaveras County",3],["Colusa County\t",0],["Contra Costa County",11],["Del Norte County",0],["El Dorado County",5],["Fresno County",17],["Glenn County",1],["Humboldt County",4],["Imperial County",7],["Inyo County",1],["Kern County\t",12],["Kings County",21],["Lake County",8],["Lassen County",0],["Los Angeles County",45],["Madera County",4],["Marin County",2],["Mariposa County",0],["Mendocino County",2],["Merced County",1],["Modoc County",0],["Mono County\t",0],["Monterey County",1],["Napa County",3],["Nevada County",7],["Orange County",17],["Placer County",13],["Plumas County",1],["Riverside County",17],["Sacramento County",15],["San Benito County",1],["San Bernardino County",27],["San Diego County",17],["San Francisco",18],["San Joaquin County",12],["San Luis Obispo County\t",6],["San Mateo County",11],["Santa Barbara County",3],["Santa Clara County\t",29],["Santa Cruz County",2],["Shasta County",5],["Sierra County",13],["Siskiyou County",7],["Solano County",7],["Sonoma County",0],["Stanislaus County",8],["Sutter County",1],["Tehama County",0],["Trinity County",2],["Tulare County",7],["Tuolumne County",1],["Ventura County",6],["Yolo County",4],["Yuba County",0]],options:{region:"US-CA",displayMode:"markers",resolution:"provinces",markerOpacity:.7,colorAxis:{colors:["green","yellow","orange","red"]},datalessRegionColor:"white",backgroundColor:{fill:"transparent"},legend:"none"},mapsApiKey:"AIzaSyDL0sPhoIQ-w6JtRXkZiIwc2izy2m26cPE"})))}}]),t}(l.a.Component),x=a(8),k=function(e){return l.a.createElement("div",{className:b.splash},l.a.createElement("div",{className:b.info},l.a.createElement("h2",{className:b.title},"Factsolotl"),l.a.createElement("p",{className:b.content},"The water quality fact finder."),l.a.createElement("h4",{className:b.content2},"Use Factsolotl to search for lead results from tap water samples taken at public schools across California from 2017 to 2019."),l.a.createElement(x.b,{to:"/Factsolotl/search"},l.a.createElement("button",{className:"btn waves-effect waves-light green"},"Begin Search"))),l.a.createElement("div",{className:b.fortyTwo},l.a.createElement("h1",null,"Don't Panic"),l.a.createElement("p",null,"Stay informed.")),l.a.createElement("div",{className:b.legend},l.a.createElement("label",null,"The ",l.a.createElement("span",{className:b.highlightMap},"map")," shows the number of samples, per county, that had a lead result greater than 15ppb."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Hover over a marker for info.")),l.a.createElement(w,null))},O=a(9),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={schools:[],selectedschoolId:"",loadedSchool:null,query1:"",query2:"",query3:"",exceedance:!1,exceedanceCheck:!1,total:0,info:!1,loading:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"queryHandler",value:function(e){var t=this;this.setState({loading:!0});var a="https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q="+this.state.query1+", "+this.state.query2+", "+this.state.query3,n=a+", yes";""===this.state.query1&&""===this.state.query2&&""===this.state.query3?alert("Please select a year or enter an input in one of the search fields."):this.state.exceedance?this.state.exceedance&&(this.setState({loading:!0}),p.a.get(n).then((function(e){t.setState({loading:!1});var a=e.data.result.records,n=e.data.result.total;0===a.length&&alert("No schools matched this search");var l=a.map((function(e){return Object(d.a)({},e,{id:Object(f.v4)()})}));t.setState({schools:l,queried:!0,total:n})})).catch((function(e){console.log(e),t.setState({loading:!1})}))):p.a.get(a).then((function(e){t.setState({loading:!1});var a=e.data.result.records,n=e.data.result.total;0===a.length&&alert("No schools matched this search");var l=a.map((function(e){return Object(d.a)({},e,{id:Object(f.v4)()})}));t.setState({schools:l,queried:!0,total:n})})).catch((function(e){console.log(e),t.setState({loading:!1})}))}},{key:"schoolDetailsHandler",value:function(e,t){this.setState({selectedSchoolId:e});for(var a=this.state.schools,n=0;n<a.length;n++)a[n].id===e&&this.setState({loadedSchool:a[n]})}},{key:"toggleDetails",value:function(e){this.setState({loadedSchool:null})}},{key:"onToggleQuery",value:function(e){this.setState({exceedance:!this.state.exceedance})}},{key:"handleYearFilter",value:function(e,t){this.setState({query3:e.target.value})}},{key:"handleNameFilter",value:function(e,t){this.setState({query1:e.target.value})}},{key:"handleCountyFilter",value:function(e,t){this.setState({query2:e.target.value})}},{key:"handleNewSearch",value:function(e){this.setState({total:0,loadedSchool:null})}},{key:"openInfoHandler",value:function(){this.setState({info:!0})}},{key:"closeInfoHandler",value:function(){this.setState({info:!1})}},{key:"render",value:function(){var e=this,t=this.state.exceedance?N.toggleOn:N.toggleOff,a=this.state.exceedance?N.toggleOff:N.toggleOn,n=this.state.exceedance?"Only show schools with an exceedance":"Search all schools",c=this.state.loadedSchool&&l.a.createElement("div",{className:N.modal},l.a.createElement("div",{className:N.detailBox},l.a.createElement(_,{id:this.state.selectedSchoolId,loadedSchool:this.state.loadedSchool,closeDetails:function(t){return e.toggleDetails(t)}}))),r=this.state.info&&l.a.createElement("div",{className:N.modal},l.a.createElement("div",{className:N.detailBox},l.a.createElement("div",{className:N.infoBox},l.a.createElement("button",{className:"btn-floating btn-sm waves-effect waves-light grey",onClick:function(t){return e.closeInfoHandler(t)}},l.a.createElement("i",{className:"material-icons"},"close")),l.a.createElement("h5",null,"What is an exceedance?"),l.a.createElement("p",null," ",'"Systems compare sample results from homes to EPA\u2019s action level of 0.015 mg/L (15 ppb). Exceeding the action level is not a violation. Violations can be assessed if a system does not perform certain required actions (e.g., public education or lead service line replacement) after the action level is exceeded. Other violations may also be assessed under the rule. For example, if samples are collected improperly, samples are not reported, or if treatment is done incorrectly."',l.a.createElement("br",null),l.a.createElement("label",null,"-The Lead and Copper rule")),l.a.createElement("p",null,"Understanding the EPA\u2019s lead and copper rule:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.epa.gov/sites/production/files/2019-10/documents/lcr101_factsheet_10.9.19.final_.2.pdf",rel:"noopener noreferrer",target:"_blank"},"A quick guide.")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=60001N8P.txt",rel:"noopener noreferrer",target:"_blank"},"Dig a little deeper."))),l.a.createElement("hr",null),l.a.createElement("h5",null,"Find out more about the data that powers this app:"),l.a.createElement("p",null," ",'"The Division of Drinking Water (DDW), in collaboration with the California Department of Education, has taken the initiative to begin testing for lead in drinking water at all public K-12 schools."'),l.a.createElement("a",{href:"https://data.ca.gov/dataset/drinking-water-results-of-lead-sampling-of-drinking-water-in-california-schools",rel:"noopener noreferrer",target:"_blank"},"CA.gov Open Data Portal")))),o=l.a.createElement("div",{className:N.previewBox},l.a.createElement("h4",{className:N.clickExpand},"Click the down arrow for school sample details:"),l.a.createElement("p",{className:N.clickExpand},"Schools matching search:"," ",l.a.createElement("span",{className:N.total},this.state.total)),l.a.createElement(v,{error:this.state.error,schools:this.state.schools,selectedSchoolId:this.state.selectedSchoolId,onSchoolSelect:function(t){return e.schoolDetailsHandler(t)},loadedSchool:this.state.loadedSchool,queried:this.state.queried,toggleDetails:this.state.detailsSelected})),s=l.a.createElement("div",{className:N.spinner},l.a.createElement("div",{className:"preloader-wrapper small active"},l.a.createElement("div",{className:"spinner-layer spinner-blue"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))),l.a.createElement("div",{className:"spinner-layer spinner-red"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))),l.a.createElement("div",{className:"spinner-layer spinner-yellow"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))),l.a.createElement("div",{className:"spinner-layer spinner-green"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))))),i=l.a.createElement("button",{id:"search",className:"btn waves-effect waves-light green",type:"submit"},l.a.createElement("i",{className:"large material-icons prefix"},"search")),m=this.state.loading?s:i,u=l.a.createElement("div",null,r,l.a.createElement("div",{className:N.searchHeader},l.a.createElement("button",{id:"infoIcon",type:"click",onClick:function(t){return e.openInfoHandler(t)},className:"btn-floating btn-sm waves-effect waves-light transparent"},l.a.createElement("i",{className:"material-icons"},"info")),l.a.createElement("h3",{className:N.searchTitle},"Search by school name and/or county."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"col1",className:"col-md-6"},l.a.createElement("h5",null,"Filter search by year and/or exceedance.")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h5",null,"Your search will return a result for each sample taken that matches the search criteria."))),l.a.createElement("p",null,"Most schools will have several results and results with no exceedance (lead less than 15ppb) will look the same, with lead = 5ppb.")),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"card white"},l.a.createElement("div",{className:"card-content grey-text"},l.a.createElement("span",{className:N.exceedanceTitle},n),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.queryHandler(e.state.query1,e.state.query2)}},l.a.createElement("div",{className:N.select},l.a.createElement("label",null,"Filter by year: "),l.a.createElement("select",{className:"browser-default",value:this.state.query3,onChange:function(t){return e.handleYearFilter(t)}},l.a.createElement("option",{value:""},"ALL YEARS"),l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018"),l.a.createElement("option",{value:"2019"},"2019"))),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.query1,onChange:function(t){return e.handleNameFilter(t)}}),l.a.createElement("label",null,"Enter school name"),l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.query2,onChange:function(t){return e.handleCountyFilter(t)}}),l.a.createElement("label",null,"Enter county")),l.a.createElement("div",{className:"card-action"},l.a.createElement("label",{className:N.toggleBG},l.a.createElement("span",null,"Filter by exceedance: "),l.a.createElement("div",{className:N.exceedanceToggle},l.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:t},"On"),l.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:a},"Off"))),m)),this.state.total>0&&l.a.createElement(O.a,{to:{pathname:"/Factsolotl/searchresults"}})))));return l.a.createElement(O.d,null,l.a.createElement(O.b,{path:"/Factsolotl/",exact:!0,render:function(){return l.a.createElement("div",null,l.a.createElement(k,{seeMap:function(t){return e.toggleMap(t)},mapViewStatus:e.state.map,startSearch:function(t){return e.startSearch(t)}}))}}),l.a.createElement(O.b,{path:"/Factsolotl/search",exact:!0,render:function(){return l.a.createElement("div",null,u)}}),l.a.createElement(O.b,{path:"/Factsolotl/searchresults",exact:!0,render:function(){return l.a.createElement("div",{className:N.display},l.a.createElement(x.b,{to:"/Factsolotl/search"},l.a.createElement("button",{id:"searchToggle",className:"waves-effect waves-dark btn-small   blue-grey",type:"click",onClick:function(t){return e.handleNewSearch(t)}},"New Search")),o,c)}}))}}]),t}(l.a.Component),T=a(44),D=a(45),F=a.n(D),B=a(23),L=function(){return l.a.createElement("div",{className:B.logo},l.a.createElement("a",{href:"https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{className:B.leftLogo,src:F.a,alt:"A pink cartoon axolotl"})))},j=function(e){var t=l.a.createElement("button",{id:"home",type:"click",className:"btn-floating btn-large waves-effect waves-light transparent"},l.a.createElement("i",{id:"homeIcon",className:"material-icons"},"home"));return l.a.createElement("div",{className:T.nav},l.a.createElement(L,null),l.a.createElement(x.b,{to:"/Factsolotl/",exact:!0},t))},I=(a(77),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(x.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"sliding-background"}),l.a.createElement("div",{className:"search container"},l.a.createElement(j,null),l.a.createElement(q,null))))}}]),t}(l.a.Component)),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}p.a.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),p.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),r.a.render(l.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Factsolotl",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Factsolotl","/service-worker.js");M?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):A(e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.929b6262.chunk.js.map