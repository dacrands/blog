(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(157),i=n(145),l=function(){return r.a.createElement(i.StaticQuery,{query:"2202940348",render:function(e){return r.a.createElement("aside",{className:"aside"},r.a.createElement("nav",{className:"aside__nav"},r.a.createElement(i.Link,{to:"/",className:"aside__nav-title"},r.a.createElement("h2",null,"Blog"),r.a.createElement("small",null,"by David Crandall")),e.allMarkdownRemark.edges.map(function(e){return r.a.createElement(i.Link,{className:"aside__nav-link",to:e.node.frontmatter.path,activeStyle:{color:"#a8b1ce"}},r.a.createElement("p",null,e.node.frontmatter.title),r.a.createElement("small",null,e.node.frontmatter.date))})))},data:o})},s=n(148);function u(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(s.a,null,r.a.createElement("main",{className:"grid--aside"},r.a.createElement(l,null),r.a.createElement("article",{className:"blog"},r.a.createElement("header",{className:"blog__header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,n.title),r.a.createElement("h3",null,n.date))),r.a.createElement("div",{className:"blog__post"},r.a.createElement("div",{className:"blog__post-content",dangerouslySetInnerHTML:{__html:a}})))))}n.d(t,"default",function(){return u}),n.d(t,"pageQuery",function(){return d});var d="97180253"},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(151)),o=a(n(152)),i=a(n(7)),l=a(n(52)),s=a(n(53)),u=a(n(4)),d=a(n(0)),c=n(22),f=n(145);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,s=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(n);return d.default.createElement(c.Link,(0,o.default)({to:g,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(n,{state:u,replace:h})),!0}},m))},t}(d.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var g=m;t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(144),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(146),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var c=n(32);n.d(t,"parsePath",function(){return c.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(51),s=n(2),u=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,n){"use strict";var a=n(149),r=n(0),o=n.n(r),i=n(4),l=n.n(i),s=n(145),u=(n(150),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,t))},data:a})});u.propTypes={children:l.a.node.isRequired},t.a=u},149:function(e){e.exports={data:{site:{siteMetadata:{title:"David Crandall"}}}}},150:function(e,t,n){},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},152:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},157:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{path:"/blog/4-2-2019",date:"April 02, 2019",title:"My First Technical Interview! Part 1: The Phoner",info:"A review of the phone screen that led to my on-site technical interview."}}},{node:{frontmatter:{path:"/blog/1-6-2019",date:"January 06, 2019",title:"Connect your SPA with your Back-end",info:"A lesson in cookie-authentication using Gatsby and Flask"}}},{node:{frontmatter:{path:"/blog/11-21-18",date:"November 21, 2018",title:"How NOT to Create a Dropbox Clone",info:"Before finding out about S3, I built a file-uploading site that saved files directly to the server."}}},{node:{frontmatter:{path:"/blog/10-7-2018",date:"October 07, 2018",title:"Hide Your Keys, Folks (Part II)",info:"Build a proxy server with Flask and protect your API key."}}},{node:{frontmatter:{path:"/blog/10-6-18",date:"October 06, 2018",title:"Downloading SVGs FAST with Python",info:"Use Python and the requests library to quickly scrape and download raw SVGs from github"}}},{node:{frontmatter:{path:"/blog/9-27-18",date:"September 27, 2018",title:"Hide your keys, folks (Part I)",info:"Steps beginners can use to protect their API keys when sharing projects"}}},{node:{frontmatter:{path:"/blog/8-24-18",date:"August 24, 2018",title:"NeXT Logo in HTML and CSS",info:"Recreating Rand's NeXT logo using HTML and CSS"}}},{node:{frontmatter:{path:"/blog/8-18-18",date:"August 18, 2018",title:"Revisiting Python Data Analysis: Part 2",info:"Visualizing data with NY State Chemical Dependence Treatment Admissions with Python"}}},{node:{frontmatter:{path:"/blog/8-13-18",date:"August 13, 2018",title:"MIT 6.00.1x Course Review",info:"My experience with MIT's Intro to CS online course"}}},{node:{frontmatter:{path:"/blog/8-11-18",date:"August 11, 2018",title:"Revisiting Python Data Visualizationd",info:"Visualizing WWI casualties with Python"}}},{node:{frontmatter:{path:"/blog/8-09-18",date:"August 09, 2018",title:"Styled Components",info:"Entering of the world of CSS-in-JS, sort of."}}},{node:{frontmatter:{path:"/blog/8-06-18",date:"August 06, 2018",title:"Learning to program",info:"My experience of learning to program"}}},{node:{frontmatter:{path:"/blog/8-05-18",date:"August 05, 2018",title:"Hello World!",info:"How this blog came to be"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-d00e7388dbd8e07b0027.js.map