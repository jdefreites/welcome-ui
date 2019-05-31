(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/common/styles/form.js":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var o=t("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=t("./src/theme/helpers.js"),i=t("./src/utils/variants.js"),a=Object(o.c)(["",";width:100%;padding:"," ",";border-color:",";transition:",";&::placeholder{",";}&:focus{",";}&[disabled]{",";}"],function(e){return"radioTab"===e.fieldType?Object(r.b)("fields.radiotabs.default"):Object(r.b)("fields.default")},Object(r.a)("space.md"),Object(r.a)("space.sm"),function(e){return Object(i.c)(e.variant)},Object(r.a)("transitions.medium"),Object(r.b)("fields.placeholder"),Object(r.b)("fields.focused"),Object(r.b)("fields.disabled"))},"./src/components/MarkdownEditor/doc.mdx":function(e,n,t){"use strict";t.r(n);var o=t("../wttj-front/node_modules/react/index.js"),r=t.n(o),i=t("./node_modules/@mdx-js/tag/dist/index.js"),a=t("./node_modules/docz/dist/index.m.js"),s=t("./docz.styled.js"),c=(t("./node_modules/easymde/dist/easymde.min.css"),t("./node_modules/prop-types/index.js")),l=(Object(c.shape)({name:c.string.isRequired}).isRequired,Object(c.shape)({error:Object(c.oneOfType)([c.string,c.array]),warnings:Object(c.oneOfType)([c.string,c.array]),submitFailed:c.bool.isRequired,touched:c.bool.isRequired}),c.func,c.func,c.func,Object(c.oneOfType)([c.string,c.number]),c.bool,c.bool,t("./node_modules/styled-components/dist/styled-components.browser.esm.js")),d=t("./node_modules/react-simplemde-editor/lib/index.js"),u=t.n(d),p=t("./src/theme/helpers.js"),b=t("./src/common/styles/form.js"),f=l.d.div.withConfig({componentId:"sc-977ef6-0"})(function(e){return Object(l.c)(["position:relative;pointer-events:",";",";",";",";padding:0;.editor-toolbar{border:0 none;padding:"," ",";opacity:1;background-color:",";border-bottom:"," solid ",";position:sticky;top:0;z-index:2;box-shadow:",";&::before,&::after{content:none;}button{",";height:2rem;width:2rem;line-height:2rem;text-align:center;&::before{line-height:inherit;}}i.separator{color:transparent;border-left:0 none;border-right:1px solid ",";}}.editor-statusbar{display:none;}.CodeMirror{border:none;background:inherit;}.cm-strong{font-weight:",";}"],e.disabled&&"none",b.a,e.focused&&Object(p.b)("fields.focused"),e.disabled&&Object(p.b)("fields.disabled"),Object(p.a)("space.xs"),Object(p.a)("space.xs"),Object(p.a)("colors.light.100"),Object(p.a)("borderWidths.sm"),Object(p.a)("colors.nude.200"),Object(p.a)("boxShadows.sm"),Object(p.b)("fields.mde.icons"),Object(p.a)("colors.nude.200"),Object(p.a)("fontWeights.bold"))}),m=Object(l.d)(u.a).withConfig({componentId:"sc-977ef6-1"})([""]);function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(c){r=!0,i=c}finally{try{o||null==s.return||s.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var n=e.autoFocus,t=e.showIcons,i=void 0===t?[]:t,a=e.hideIcons,s=void 0===a?[]:a,c=e.toolbar,l=e.placeholder,d=e.variant,u=e.disabled,p=e.value,b=e.onBlur,g=e.onFocus,j=e.onChange,O=h(Object(o.useState)(n||!1),2),w=O[0],v=O[1];return r.a.createElement(f,{disabled:u,focused:w,variant:d},r.a.createElement(m,{className:"simple-md-editor-wrapper",events:{blur:function(){b&&b(),v(!1)},focus:function(){g&&g(),v(!0)}},extraKeys:{Tab:!1},onChange:function(){j&&j({target:{name:name,value:p},preventDefault:function(){}})},options:{autofocus:n,placeholder:l,toolbar:c,tabSize:4,spellChecker:!1,showIcons:i,hideIcons:[].concat(y(s),["image","heading","fullscreen","side-by-side"])}}))};function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function w(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,n){return!n||"object"!==j(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,n){return(x=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}g.__docgenInfo={description:"",methods:[],displayName:"MarkdownEditor",props:{autoFocus:{type:{name:"func"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},hideIcons:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:""},placeholder:{type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1,description:""},showIcons:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:""},toolbar:{type:{name:"arrayOf",value:{name:"string"}},required:!1,description:""}},composes:["../../utils/propTypes"]},t.d(n,"default",function(){return E});var E=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=v(this,_(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&x(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=O(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:n},r.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"markdowneditor"}},"MarkdownEditor"),r.a.createElement(i.MDXTag,{name:"p",components:n},"We use library ",r.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/RIP21/react-simplemde-editor"}},"react-simplemde-editor"),"."),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(s.b,{__codesandbox:"undefined",__position:0,__code:'<MarkdownEditor\n  name="description"\n  fieldType="mde"\n  value="Something happening"\n  onChange={console.debug}\n  placeholder="Placeholder"\n  label="Markdown editor example"\n/>',__scope:{props:this?this.props:t,Playground:s.b,MarkdownEditor:g}},r.a.createElement(g,{name:"description",fieldType:"mde",value:"Something happening",onChange:console.debug,placeholder:"Placeholder",label:"Markdown editor example"})),r.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(a.f,{of:g}))}}])&&w(t.prototype,o),c&&w(t,c),n}();E.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./src/utils/variants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"c",function(){return s}),t.d(n,"b",function(){return l});var o=t("./src/theme/helpers.js");function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(e,n){return n?"error":e?"warning":void 0},a={error:"colors.danger.500",warning:"colors.warning.500",info:"colors.info.500"},s=function(e){var n=a[e];return n?Object(o.a)(n):null},c=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({blue:"colors.sub.blue",default:"colors.nude.300",green:"colors.sub.green",orange:"colors.sub.orange",pink:"colors.sub.pink",primary:"colors.primary.500",purple:"colors.sub.purple",red:"colors.sub.red",secondary:"colors.secondary.500",turquoize:"colors.sub.turquoize",yellow:"colors.sub.yellow"},a),l=function(e){var n=c[e];return n?Object(o.a)(n):null}},1:function(e,n){}}]);
//# sourceMappingURL=src-components-markdown-editor-doc.42a6f71d3cbe4d1fd349.js.map