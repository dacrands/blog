(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{198:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(208),i=a(199),l=function(){return r.a.createElement(i.b,{query:"2202940348",render:function(t){return r.a.createElement("aside",{className:"aside"},r.a.createElement("nav",{className:"aside__nav"},r.a.createElement(i.a,{to:"/",className:"aside__nav-title"},r.a.createElement("h2",null,"Blog"),r.a.createElement("small",null,"by David Crandall")),t.allMarkdownRemark.edges.map(function(t){return r.a.createElement(i.a,{className:"aside__nav-link",to:t.node.frontmatter.path,activeStyle:{color:"#a8b1ce"}},r.a.createElement("p",null,t.node.frontmatter.title),r.a.createElement("small",null,t.node.frontmatter.date))})))},data:o})},s=a(202),d=a(204);function c(t){var e=t.data.markdownRemark,a=e.frontmatter,n=e.html;return r.a.createElement(s.a,null,r.a.createElement(d.a,{title:a.title}),r.a.createElement("main",{className:"grid--aside"},r.a.createElement(l,null),r.a.createElement("article",{className:"blog"},r.a.createElement("header",{className:"blog__header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,a.title),r.a.createElement("h3",null,a.date))),r.a.createElement("div",{className:"blog__post"},r.a.createElement("div",{className:"blog__post-content",dangerouslySetInnerHTML:{__html:n}})))))}a.d(e,"default",function(){return c}),a.d(e,"pageQuery",function(){return u});var u="97180253"},199:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),o=a(66),i=a.n(o);a.d(e,"a",function(){return i.a});a(200),a(9).default.enqueue;var l=r.a.createContext({});function s(t){var e=t.staticQueryData,a=t.data,n=t.query,o=t.render,i=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,n=t.render,o=t.children;return r.a.createElement(l.Consumer,null,function(t){return r.a.createElement(s,{data:e,query:a,render:n||o,staticQueryData:t})})}},200:function(t,e,a){var n;t.exports=(n=a(201))&&n.default||n},201:function(t,e,a){"use strict";a.r(e);a(23);var n=a(0),r=a.n(n),o=a(91);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},202:function(t,e,a){"use strict";var n=a(203),r=a(0),o=a.n(r),i=a(199);a(193);e.a=function(t){var e=t.children;return o.a.createElement(i.b,{query:"755544856",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,e))},data:n})}},203:function(t){t.exports={data:{site:{siteMetadata:{title:"David Crandall"}}}}},204:function(t,e,a){"use strict";var n=a(205),r=a(0),o=a.n(r),i=a(206),l=a.n(i),s=a(199);function d(t){var e=t.description,a=t.lang,r=t.meta,i=t.keywords,d=t.title;return o.a.createElement(s.b,{query:c,render:function(t){var n=e||t.site.siteMetadata.description;return o.a.createElement(l.a,{htmlAttributes:{lang:a},title:d,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:d},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},e.a=d;var c="1025518380"},205:function(t){t.exports={data:{site:{siteMetadata:{title:"David Crandall",description:"David Crandall's portfolio and blog. David is a full-stack web developer with a passion\n    for building things with React and Flask. He is located in the greater New York city area.",author:"dacrands"}}}}},208:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{path:"/blog/7-21-2019",date:"July 21, 2019",title:"Let's Talk Linked-Lists",info:"Memory allocation, pointers, linked-lists in C. A tribute to Nick Parlante."}}},{node:{frontmatter:{path:"/blog/5-3-2019",date:"May 03, 2019",title:"Diving into PHP and SQL",info:"My first exposure to PHP. Come with me as I build basic sign-up page."}}},{node:{frontmatter:{path:"/blog/1-6-2019",date:"January 06, 2019",title:"Connect your SPA with your Back-end",info:"A lesson in cookie-authentication using Gatsby and Flask"}}},{node:{frontmatter:{path:"/blog/11-21-18",date:"November 21, 2018",title:"How NOT to Create a Dropbox Clone",info:"Before finding out about S3, I built a file-uploading site that saved files directly to the server."}}},{node:{frontmatter:{path:"/blog/10-7-2018",date:"October 07, 2018",title:"Hide Your Keys, Folks (Part II)",info:"Build a proxy server with Flask and protect your API key."}}},{node:{frontmatter:{path:"/blog/10-6-18",date:"October 06, 2018",title:"Downloading SVGs FAST with Python",info:"Use Python and the requests library to quickly scrape and download raw SVGs from github"}}},{node:{frontmatter:{path:"/blog/9-27-18",date:"September 27, 2018",title:"Hide your keys, folks (Part I)",info:"Steps beginners can use to protect their API keys when sharing projects"}}},{node:{frontmatter:{path:"/blog/8-24-18",date:"August 24, 2018",title:"NeXT Logo in HTML and CSS",info:"Recreating Rand's NeXT logo using HTML and CSS"}}},{node:{frontmatter:{path:"/blog/8-18-18",date:"August 18, 2018",title:"Revisiting Python Data Analysis: Part 2",info:"Visualizing data with NY State Chemical Dependence Treatment Admissions with Python"}}},{node:{frontmatter:{path:"/blog/8-13-18",date:"August 13, 2018",title:"MIT 6.00.1x Course Review",info:"My experience with MIT's Intro to CS online course"}}},{node:{frontmatter:{path:"/blog/8-11-18",date:"August 11, 2018",title:"Revisiting Python Data Visualizationd",info:"Visualizing WWI casualties with Python"}}},{node:{frontmatter:{path:"/blog/8-09-18",date:"August 09, 2018",title:"Styled Components",info:"Entering of the world of CSS-in-JS, sort of."}}},{node:{frontmatter:{path:"/blog/8-06-18",date:"August 06, 2018",title:"Learning to program",info:"My experience of learning to program"}}},{node:{frontmatter:{path:"/blog/8-05-18",date:"August 05, 2018",title:"Hello World!",info:"How this blog came to be"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-459cdb71b9be104827a9.js.map