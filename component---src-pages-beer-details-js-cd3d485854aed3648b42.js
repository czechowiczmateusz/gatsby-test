(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(165),o=a(172),c=a(170),l=a(169),u=l.b.img.withConfig({displayName:"beer-details__ImgStyled",componentId:"hinmoi-0"})(["height:100px;"]),s=l.b.p.withConfig({displayName:"beer-details__ParagraphStyled",componentId:"hinmoi-1"})(["color:white;"]);t.default=function(e){var t=e.pageContext;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:t.title}),r.a.createElement("h1",null,"Hi, im ",t.title),r.a.createElement(s,null,t.description),r.a.createElement(u,{src:t.image,alt:""}),r.a.createElement(i.a,{to:"/beers"},"Go back to beers"))}},165:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=a(40),l=a.n(c);a.d(t,"a",function(){return l.a});a(166);var u=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(u.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},166:function(e,t,a){var n;e.exports=(n=a(167))&&n.default||n},167:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),r=a.n(n),i=a(6),o=a.n(i),c=a(64),l=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},168:function(e){e.exports={data:{site:{siteMetadata:{title:"World of beer"}}}}},170:function(e,t,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(6),c=a.n(o),l=a(175),u=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,c=n.data.site,l=t||c.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=s},171:function(e){e.exports={data:{site:{siteMetadata:{title:"World of beer",description:"Find your favourite beer.",author:"@gatsbyjs"}}}}},172:function(e,t,a){"use strict";var n=a(173),r=a.n(n),i=a(168),o=a(0),c=a.n(o),l=a(6),u=a.n(l),s=a(165),d=a(169),p=function(e){var t=e.siteTitle;return c.a.createElement("header",null,c.a.createElement("div",null,c.a.createElement("h1",null,c.a.createElement(s.a,{to:"/"},t))))};p.propTypes={siteTitle:u.a.string},p.defaultProps={siteTitle:""};var m=p;a(174);function g(){var e=r()(["\n  html {\n    height: 100%;\n  }\n  body {\n    background: linear-gradient(to bottom, #3494e6, #ec6ead);\n    height: 100%;\n    margin: 0;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n  }\n"]);return g=function(){return e},e}var f=Object(d.a)(g()),h=function(e){var t=e.children;return c.a.createElement(s.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),c.a.createElement("main",null,t),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with ",c.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},data:i})};h.propTypes={children:u.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-beer-details-js-cd3d485854aed3648b42.js.map