(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s});var n=a(0),r=a.n(n),i=a(149),o=a(154),c=a(146),s="4183683446";t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Blog"}),r.a.createElement("header",{className:"header header--green"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text-focus-in"},"Blog"),r.a.createElement("hr",null),r.a.createElement("p",null,"This is where I write about programming."))),r.a.createElement("div",{className:"pages"},r.a.createElement("div",{className:"pages__container"},t.allMarkdownRemark.edges.map(function(e){return r.a.createElement(c.Link,{className:"pages__item",to:e.node.frontmatter.path},r.a.createElement("div",{className:"pages__item-title"},r.a.createElement("h3",null,e.node.frontmatter.title),r.a.createElement("h4",null,e.node.frontmatter.date)),r.a.createElement("div",{className:"pages__item-content"},r.a.createElement("p",null,e.node.frontmatter.info)))}))))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(147),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(148))&&n.default||n},148:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(146),l=(a(151),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,t))},data:n})});l.propTypes={children:c.a.node.isRequired},t.a=l},150:function(e){e.exports={data:{site:{siteMetadata:{title:"David Crandall"}}}}},151:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(156),l=a.n(s),u=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},155:function(e){e.exports={data:{site:{siteMetadata:{title:"David Crandall",description:"David Crandall's portfolio and blog. David is a full-stack web developer with a passiong\n    for building things with React and Flask.",author:"dacrands"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5bff5169c69fb788a4f8.js.map