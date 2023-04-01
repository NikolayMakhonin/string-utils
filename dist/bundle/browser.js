var StringUtils=function(e){"use strict"
;function t(e){
if(!Number.isFinite(e))throw new Error("value is not finite: ".concat(e))
;return e}var n;!function(e){
e.Root="root",e.Text="text",e.Directive="directive",
e.Comment="comment",e.Script="script",
e.Style="style",e.Tag="tag",e.CDATA="cdata",
e.Doctype="doctype"}(n||(n={}))
;const r=n.Root,o=n.Text,a=n.Directive,i=n.Comment,s=n.Script,l=n.Style,u=n.Tag,c=n.CDATA,d=n.Doctype
;function f(e){
return(t=e).type===n.Tag||t.type===n.Script||t.type===n.Style
;var t}function p(e){return e.type===n.CDATA}
function h(e){return e.type===n.Text}
function g(e){return e.type===n.Comment}
function m(e){
return Object.prototype.hasOwnProperty.call(e,"children")
}
const b=/["&'<>$\x80-\uFFFF]/g,v=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]),y=null!=String.prototype.codePointAt?(e,t)=>e.codePointAt(t):(e,t)=>55296==(64512&e.charCodeAt(t))?1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536:e.charCodeAt(t)
;function C(e){let t,n="",r=0
;for(;null!==(t=b.exec(e));){
const o=t.index,a=e.charCodeAt(o),i=v.get(a)
;void 0!==i?(n+=e.substring(r,o)+i,r=o+1):(n+=`${e.substring(r,o)}&#x${y(e,o).toString(16)};`,
r=b.lastIndex+=Number(55296==(64512&a)))}
return n+e.substr(r)}function A(e,t){
return function(n){let r,o=0,a=""
;for(;r=e.exec(n);)o!==r.index&&(a+=n.substring(o,r.index)),
a+=t.get(r[0].charCodeAt(0)),o=r.index+1
;return a+n.substring(o)}}
const w=A(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),x=A(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]])),T=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map((e=>[e.toLowerCase(),e]))),E=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map((e=>[e.toLowerCase(),e]))),S=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])
;function F(e){return e.replace(/"/g,"&quot;")}
const k=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"])
;function N(e,t={}){const n="length"in e?e:[e]
;let r="";for(let e=0;e<n.length;e++)r+=D(n[e],t)
;return r}function D(e,t){switch(e.type){case r:
return N(e.children,t);case d:case a:
return`<${e.data}>`;case i:return function(e){
return`\x3c!--${e.data}--\x3e`}(e);case c:
return function(e){
return`<![CDATA[${e.children[0].data}]]>`}(e)
;case s:case l:case u:return function(e,t){var n
;"foreign"===t.xmlMode&&(e.name=null!==(n=T.get(e.name))&&void 0!==n?n:e.name,
e.parent&&O.has(e.parent.name)&&(t={...t,
xmlMode:!1}));!t.xmlMode&&M.has(e.name)&&(t={...t,
xmlMode:"foreign"});let r=`<${e.name}`
;const o=function(e,t){var n;if(!e)return
;const r=!1===(null!==(n=t.encodeEntities)&&void 0!==n?n:t.decodeEntities)?F:t.xmlMode||"utf8"!==t.encodeEntities?C:w
;return Object.keys(e).map((n=>{var o,a
;const i=null!==(o=e[n])&&void 0!==o?o:""
;return"foreign"===t.xmlMode&&(n=null!==(a=E.get(n))&&void 0!==a?a:n),
t.emptyAttrs||t.xmlMode||""!==i?`${n}="${r(i)}"`:n
})).join(" ")}(e.attribs,t);o&&(r+=` ${o}`)
;0===e.children.length&&(t.xmlMode?!1!==t.selfClosingTags:t.selfClosingTags&&k.has(e.name))?(t.xmlMode||(r+=" "),
r+="/>"):(r+=">",
e.children.length>0&&(r+=N(e.children,t)),!t.xmlMode&&k.has(e.name)||(r+=`</${e.name}>`))
;return r}(e,t);case o:return function(e,t){var n
;let r=e.data||""
;!1===(null!==(n=t.encodeEntities)&&void 0!==n?n:t.decodeEntities)||!t.xmlMode&&e.parent&&S.has(e.parent.name)||(r=t.xmlMode||"utf8"!==t.encodeEntities?C(r):x(r))
;return r}(e,t)}}
const O=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),M=new Set(["svg","math"])
;function P(e,t){return N(e,t)}function L(e){
return Array.isArray(e)?e.map(L).join(""):m(e)&&!g(e)?L(e.children):h(e)?e.data:""
}function q(e){
return Array.isArray(e)?e.map(q).join(""):m(e)&&(e.type===n.Tag||p(e))?q(e.children):h(e)?e.data:""
}function I(e){return m(e)?e.children:[]}
function $(e){return e.parent||null}function U(e){
if(e.prev&&(e.prev.next=e.next),
e.next&&(e.next.prev=e.prev),e.parent){
const t=e.parent.children
;t.splice(t.lastIndexOf(e),1)}}
function R(e,t,n=!0,r=1/0){
return Array.isArray(t)||(t=[t]),j(e,t,n,r)}
function j(e,t,n,r){const o=[];for(const a of t){
if(e(a)&&(o.push(a),--r<=0))break
;if(n&&m(a)&&a.children.length>0){
const t=j(e,a.children,n,r)
;if(o.push(...t),(r-=t.length)<=0)break}}return o}
function _(e,t,n=!0){let r=null
;for(let o=0;o<t.length&&!r;o++){const a=t[o]
;f(a)&&(e(a)?r=a:n&&a.children.length>0&&(r=_(e,a.children,!0)))
}return r}const G={
tag_name:e=>"function"==typeof e?t=>f(t)&&e(t.name):"*"===e?f:t=>f(t)&&t.name===e,
tag_type:e=>"function"==typeof e?t=>e(t.type):t=>t.type===e,
tag_contains:e=>"function"==typeof e?t=>h(t)&&e(t.data):t=>h(t)&&t.data===e
};function V(e,t){
return"function"==typeof t?n=>f(n)&&t(n.attribs[e]):n=>f(n)&&n.attribs[e]===t
}function W(e,t){return n=>e(n)||t(n)}
function B(e){const t=Object.keys(e).map((t=>{
const n=e[t]
;return Object.prototype.hasOwnProperty.call(G,t)?G[t](n):V(t,n)
}));return 0===t.length?null:t.reduce(W)}
function H(e,t,n=!0,r=1/0){
return R(G.tag_name(e),t,n,r)}var Y
;function z(e,t){const n=[],r=[];if(e===t)return 0
;let o=m(e)?e:e.parent
;for(;o;)n.unshift(o),o=o.parent
;for(o=m(t)?t:t.parent;o;)r.unshift(o),o=o.parent
;const a=Math.min(n.length,r.length);let i=0
;for(;i<a&&n[i]===r[i];)i++
;if(0===i)return Y.DISCONNECTED
;const s=n[i-1],l=s.children,u=n[i],c=r[i]
;return l.indexOf(u)>l.indexOf(c)?s===t?Y.FOLLOWING|Y.CONTAINED_BY:Y.FOLLOWING:s===e?Y.PRECEDING|Y.CONTAINS:Y.PRECEDING
}!function(e){
e[e.DISCONNECTED=1]="DISCONNECTED",e[e.PRECEDING=2]="PRECEDING",e[e.FOLLOWING=4]="FOLLOWING",
e[e.CONTAINS=8]="CONTAINS",
e[e.CONTAINED_BY=16]="CONTAINED_BY"}(Y||(Y={}))
;const Z=["url","type","lang"],X=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"]
;function J(e){
return H("media:content",e).map((e=>{
const{attribs:t}=e,n={medium:t.medium,
isDefault:!!t.isDefault}
;for(const e of Z)t[e]&&(n[e]=t[e])
;for(const e of X)t[e]&&(n[e]=parseInt(t[e],10))
;return t.expression&&(n.expression=t.expression),
n}))}function K(e,t){return H(e,t,!0,1)[0]}
function Q(e,t,n=!1){return L(H(e,t,n,1)).trim()}
function ee(e,t,n,r,o=!1){const a=Q(n,r,o)
;a&&(e[t]=a)}function te(e){
return"rss"===e||"feed"===e||"rdf:RDF"===e}
var ne,re,oe=Object.freeze({__proto__:null,
isTag:f,isCDATA:p,isText:h,isComment:g,
isDocument:function(e){return e.type===n.Root},
hasChildren:m,getOuterHTML:P,
getInnerHTML:function(e,t){
return m(e)?e.children.map((e=>P(e,t))).join(""):""
},getText:function e(t){
return Array.isArray(t)?t.map(e).join(""):f(t)?"br"===t.name?"\n":e(t.children):p(t)?e(t.children):h(t)?t.data:""
},textContent:L,innerText:q,getChildren:I,
getParent:$,getSiblings:function(e){const t=$(e)
;if(null!=t)return I(t);const n=[e]
;let{prev:r,next:o}=e
;for(;null!=r;)n.unshift(r),({prev:r}=r)
;for(;null!=o;)n.push(o),({next:o}=o);return n},
getAttributeValue:function(e,t){var n
;return null===(n=e.attribs)||void 0===n?void 0:n[t]
},hasAttrib:function(e,t){
return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&null!=e.attribs[t]
},getName:function(e){return e.name},
nextElementSibling:function(e){let{next:t}=e
;for(;null!==t&&!f(t);)({next:t}=t);return t},
prevElementSibling:function(e){let{prev:t}=e
;for(;null!==t&&!f(t);)({prev:t}=t);return t},
removeElement:U,replaceElement:function(e,t){
const n=t.prev=e.prev;n&&(n.next=t)
;const r=t.next=e.next;r&&(r.prev=t)
;const o=t.parent=e.parent;if(o){
const n=o.children
;n[n.lastIndexOf(e)]=t,e.parent=null}},
appendChild:function(e,t){
if(U(t),t.next=null,t.parent=e,e.children.push(t)>1){
const n=e.children[e.children.length-2]
;n.next=t,t.prev=n}else t.prev=null},
append:function(e,t){U(t)
;const{parent:n}=e,r=e.next
;if(t.next=r,t.prev=e,e.next=t,t.parent=n,r){
if(r.prev=t,n){const e=n.children
;e.splice(e.lastIndexOf(r),0,t)}
}else n&&n.children.push(t)},
prependChild:function(e,t){
if(U(t),t.parent=e,t.prev=null,1!==e.children.unshift(t)){
const n=e.children[1];n.prev=t,t.next=n
}else t.next=null},prepend:function(e,t){U(t)
;const{parent:n}=e;if(n){const r=n.children
;r.splice(r.indexOf(e),0,t)}
e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,
e.prev=t},filter:R,find:j,
findOneChild:function(e,t){return t.find(e)},
findOne:_,existsOne:function e(t,n){
return n.some((n=>f(n)&&(t(n)||n.children.length>0&&e(t,n.children))))
},findAll:function(e,t){var n
;const r=[],o=t.filter(f);let a
;for(;a=o.shift();){
const t=null===(n=a.children)||void 0===n?void 0:n.filter(f)
;t&&t.length>0&&o.unshift(...t),e(a)&&r.push(a)}
return r},testElement:function(e,t){const n=B(e)
;return!n||n(t)},
getElements:function(e,t,n,r=1/0){const o=B(e)
;return o?R(o,t,n,r):[]},
getElementById:function(e,t,n=!0){
return Array.isArray(t)||(t=[t]),_(V("id",e),t,n)
},getElementsByTagName:H,
getElementsByTagType:function(e,t,n=!0,r=1/0){
return R(G.tag_type(e),t,n,r)},
removeSubsets:function(e){let t=e.length
;for(;--t>=0;){const n=e[t]
;if(t>0&&e.lastIndexOf(n,t-1)>=0)e.splice(t,1);else for(let r=n.parent;r;r=r.parent)if(e.includes(r)){
e.splice(t,1);break}}return e},
get DocumentPosition(){return Y},
compareDocumentPosition:z,uniqueSort:function(e){
return(e=e.filter(((e,t,n)=>!n.includes(e,t+1)))).sort(((e,t)=>{
const n=z(e,t)
;return n&Y.PRECEDING?-1:n&Y.FOLLOWING?1:0})),e},
getFeed:function(e){const t=K(te,e)
;return t?"feed"===t.name?function(e){var t
;const n=e.children,r={type:"atom",
items:H("entry",n).map((e=>{var t
;const{children:n}=e,r={media:J(n)}
;ee(r,"id","id",n),ee(r,"title","title",n)
;const o=null===(t=K("link",n))||void 0===t?void 0:t.attribs.href
;o&&(r.link=o)
;const a=Q("summary",n)||Q("content",n)
;a&&(r.description=a);const i=Q("updated",n)
;return i&&(r.pubDate=new Date(i)),r}))}
;ee(r,"id","id",n),ee(r,"title","title",n)
;const o=null===(t=K("link",n))||void 0===t?void 0:t.attribs.href
;o&&(r.link=o);ee(r,"description","subtitle",n)
;const a=Q("updated",n);a&&(r.updated=new Date(a))
;return ee(r,"author","email",n,!0),r
}(t):function(e){var t,n
;const r=null!==(n=null===(t=K("channel",e.children))||void 0===t?void 0:t.children)&&void 0!==n?n:[],o={
type:e.name.substr(0,3),id:"",
items:H("item",e.children).map((e=>{
const{children:t}=e,n={media:J(t)}
;ee(n,"id","guid",t),ee(n,"title","title",t),ee(n,"link","link",t),
ee(n,"description","description",t)
;const r=Q("pubDate",t)
;return r&&(n.pubDate=new Date(r)),n}))}
;ee(o,"title","title",r),ee(o,"link","link",r),
ee(o,"description","description",r)
;const a=Q("lastBuildDate",r)
;a&&(o.updated=new Date(a))
;return ee(o,"author","managingEditor",r,!0),o
}(t):null}}),ae={trueFunc:function(){return!0},
falseFunc:function(){return!1}};!function(e){
e.Attribute="attribute",e.Pseudo="pseudo",
e.PseudoElement="pseudo-element",e.Tag="tag",
e.Universal="universal",e.Adjacent="adjacent",
e.Child="child",e.Descendant="descendant",
e.Parent="parent",e.Sibling="sibling",
e.ColumnCombinator="column-combinator"
}(ne||(ne={})),function(e){
e.Any="any",e.Element="element",e.End="end",e.Equals="equals",
e.Exists="exists",
e.Hyphen="hyphen",e.Not="not",e.Start="start"
}(re||(re={}))
;const ie=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,se=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,le=new Map([[126,re.Element],[94,re.Start],[36,re.End],[42,re.Any],[33,re.Not],[124,re.Hyphen]]),ue=new Set(["has","not","matches","is","where","host","host-context"])
;const ce=new Set(["contains","icontains"])
;function de(e,t,n){const r=parseInt(t,16)-65536
;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)
}function fe(e){return e.replace(se,de)}
function pe(e){return 39===e||34===e}
function he(e){
return 32===e||9===e||10===e||12===e||13===e}
function ge(e){const t=[],n=me(t,`${e}`,0)
;if(n<e.length)throw new Error(`Unmatched selector: ${e.slice(n)}`)
;return t}function me(e,t,n){let r=[]
;function o(e){const r=t.slice(n+e).match(ie)
;if(!r)throw new Error(`Expected name, found ${t.slice(n)}`)
;const[o]=r;return n+=e+o.length,fe(o)}
function a(e){
for(n+=e;n<t.length&&he(t.charCodeAt(n));)n++}
function i(){const e=n+=1;let r=1
;for(;r>0&&n<t.length;n++)40!==t.charCodeAt(n)||s(n)?41!==t.charCodeAt(n)||s(n)||r--:r++
;if(r)throw new Error("Parenthesis not matched")
;return fe(t.slice(e,n-1))}function s(e){let n=0
;for(;92===t.charCodeAt(--e);)n++;return 1==(1&n)}
function l(){if(r.length>0&&function(e){
switch(e.type){case ne.Adjacent:case ne.Child:
case ne.Descendant:case ne.Parent:case ne.Sibling:
case ne.ColumnCombinator:return!0;default:return!1
}
}(r[r.length-1]))throw new Error("Did not expect successive traversals.")
}function u(e){
r.length>0&&r[r.length-1].type===ne.Descendant?r[r.length-1].type=e:(l(),
r.push({type:e}))}function c(e,t){r.push({
type:ne.Attribute,name:e,action:t,value:o(1),
namespace:null,ignoreCase:"quirks"})}function d(){
if(r.length&&r[r.length-1].type===ne.Descendant&&r.pop(),
0===r.length)throw new Error("Empty sub-selector")
;e.push(r)}if(a(0),t.length===n)return n
;e:for(;n<t.length;){const e=t.charCodeAt(n)
;switch(e){case 32:case 9:case 10:case 12:case 13:
0!==r.length&&r[0].type===ne.Descendant||(l(),
r.push({type:ne.Descendant})),a(1);break;case 62:
u(ne.Child),a(1);break;case 60:u(ne.Parent),a(1)
;break;case 126:u(ne.Sibling),a(1);break;case 43:
u(ne.Adjacent),a(1);break;case 46:
c("class",re.Element);break;case 35:
c("id",re.Equals);break;case 91:{let e;a(1)
;let i=null
;124===t.charCodeAt(n)?e=o(1):t.startsWith("*|",n)?(i="*",e=o(2)):(e=o(0),
124===t.charCodeAt(n)&&61!==t.charCodeAt(n+1)&&(i=e,
e=o(1))),a(0);let l=re.Exists
;const u=le.get(t.charCodeAt(n));if(u){
if(l=u,61!==t.charCodeAt(n+1))throw new Error("Expected `=`")
;a(2)
}else 61===t.charCodeAt(n)&&(l=re.Equals,a(1))
;let c="",d=null;if("exists"!==l){
if(pe(t.charCodeAt(n))){const e=t.charCodeAt(n)
;let r=n+1
;for(;r<t.length&&(t.charCodeAt(r)!==e||s(r));)r+=1
;if(t.charCodeAt(r)!==e)throw new Error("Attribute value didn't end")
;c=fe(t.slice(n+1,r)),n=r+1}else{const e=n
;for(;n<t.length&&(!he(t.charCodeAt(n))&&93!==t.charCodeAt(n)||s(n));)n+=1
;c=fe(t.slice(e,n))}a(0)
;const e=32|t.charCodeAt(n)
;115===e?(d=!1,a(1)):105===e&&(d=!0,a(1))}
if(93!==t.charCodeAt(n))throw new Error("Attribute selector didn't terminate")
;n+=1;const f={type:ne.Attribute,name:e,action:l,
value:c,namespace:i,ignoreCase:d};r.push(f);break}
case 58:{if(58===t.charCodeAt(n+1)){r.push({
type:ne.PseudoElement,name:o(2).toLowerCase(),
data:40===t.charCodeAt(n)?i():null});continue}
const e=o(1).toLowerCase();let a=null
;if(40===t.charCodeAt(n))if(ue.has(e)){
if(pe(t.charCodeAt(n+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`)
;if(a=[],
n=me(a,t,n+1),41!==t.charCodeAt(n))throw new Error(`Missing closing parenthesis in :${e} (${t})`)
;n+=1}else{if(a=i(),ce.has(e)){
const e=a.charCodeAt(0)
;e===a.charCodeAt(a.length-1)&&pe(e)&&(a=a.slice(1,-1))
}a=fe(a)}r.push({type:ne.Pseudo,name:e,data:a})
;break}case 44:d(),r=[],a(1);break;default:{
if(t.startsWith("/*",n)){
const e=t.indexOf("*/",n+2)
;if(e<0)throw new Error("Comment was not terminated")
;n=e+2,0===r.length&&a(0);break}let i,s=null
;if(42===e)n+=1,i="*";else if(124===e){
if(i="",124===t.charCodeAt(n+1)){
u(ne.ColumnCombinator),a(2);break}}else{
if(!ie.test(t.slice(n)))break e;i=o(0)}
124===t.charCodeAt(n)&&124!==t.charCodeAt(n+1)&&(s=i,
42===t.charCodeAt(n+1)?(i="*",
n+=2):i=o(1)),r.push("*"===i?{type:ne.Universal,
namespace:s}:{type:ne.Tag,name:i,namespace:s})}}}
return d(),n}
const be=new Map([[ne.Universal,50],[ne.Tag,30],[ne.Attribute,1],[ne.Pseudo,0]])
;function ve(e){return!be.has(e.type)}
const ye=new Map([[re.Exists,10],[re.Equals,8],[re.Not,7],[re.Start,6],[re.End,6],[re.Any,5]])
;function Ce(e){const t=e.map(Ae)
;for(let n=1;n<e.length;n++){const r=t[n]
;if(!(r<0))for(let o=n-1;o>=0&&r<t[o];o--){
const n=e[o+1]
;e[o+1]=e[o],e[o]=n,t[o+1]=t[o],t[o]=r}}}
function Ae(e){var t,n
;let r=null!==(t=be.get(e.type))&&void 0!==t?t:-1
;return e.type===ne.Attribute?(r=null!==(n=ye.get(e.action))&&void 0!==n?n:4,
e.action===re.Equals&&"id"===e.name&&(r=9),
e.ignoreCase&&(r>>=1)):e.type===ne.Pseudo&&(e.data?"has"===e.name||"contains"===e.name?r=0:Array.isArray(e.data)?(r=Math.min(...e.data.map((e=>Math.min(...e.map(Ae))))),
r<0&&(r=0)):r=2:r=3),r}
const we=/[-[\]{}()*+?.,\\^$|#\s]/g
;function xe(e){return e.replace(we,"\\$&")}
const Te=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"])
;function Ee(e,t){
return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!t.quirksMode:!t.xmlMode&&Te.has(e.name)
}const Se={equals(e,t,n){
const{adapter:r}=n,{name:o}=t;let{value:a}=t
;return Ee(t,n)?(a=a.toLowerCase(),t=>{
const n=r.getAttributeValue(t,o)
;return null!=n&&n.length===a.length&&n.toLowerCase()===a&&e(t)
}):t=>r.getAttributeValue(t,o)===a&&e(t)},
hyphen(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t;const i=a.length
;return Ee(t,n)?(a=a.toLowerCase(),function(t){
const n=r.getAttributeValue(t,o)
;return null!=n&&(n.length===i||"-"===n.charAt(i))&&n.substr(0,i).toLowerCase()===a&&e(t)
}):function(t){const n=r.getAttributeValue(t,o)
;return null!=n&&(n.length===i||"-"===n.charAt(i))&&n.substr(0,i)===a&&e(t)
}},element(e,t,n){
const{adapter:r}=n,{name:o,value:a}=t
;if(/\s/.test(a))return ae.falseFunc
;const i=new RegExp(`(?:^|\\s)${xe(a)}(?:$|\\s)`,Ee(t,n)?"i":"")
;return function(t){
const n=r.getAttributeValue(t,o)
;return null!=n&&n.length>=a.length&&i.test(n)&&e(t)
}},
exists:(e,{name:t},{adapter:n})=>r=>n.hasAttrib(r,t)&&e(r),
start(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t;const i=a.length
;return 0===i?ae.falseFunc:Ee(t,n)?(a=a.toLowerCase(),
t=>{const n=r.getAttributeValue(t,o)
;return null!=n&&n.length>=i&&n.substr(0,i).toLowerCase()===a&&e(t)
}):t=>{var n
;return!!(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.startsWith(a))&&e(t)
}},end(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t;const i=-a.length
;return 0===i?ae.falseFunc:Ee(t,n)?(a=a.toLowerCase(),
t=>{var n
;return(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.substr(i).toLowerCase())===a&&e(t)
}):t=>{var n
;return!!(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.endsWith(a))&&e(t)
}},any(e,t,n){
const{adapter:r}=n,{name:o,value:a}=t
;if(""===a)return ae.falseFunc;if(Ee(t,n)){
const t=new RegExp(xe(a),"i");return function(n){
const i=r.getAttributeValue(n,o)
;return null!=i&&i.length>=a.length&&t.test(i)&&e(n)
}}return t=>{var n
;return!!(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.includes(a))&&e(t)
}},not(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t
;return""===a?t=>!!r.getAttributeValue(t,o)&&e(t):Ee(t,n)?(a=a.toLowerCase(),
t=>{const n=r.getAttributeValue(t,o)
;return(null==n||n.length!==a.length||n.toLowerCase()!==a)&&e(t)
}):t=>r.getAttributeValue(t,o)!==a&&e(t)}
},Fe=new Set([9,10,12,13,32]),ke="0".charCodeAt(0),Ne="9".charCodeAt(0)
;function De(e){return function(e){
const t=e[0],n=e[1]-1
;if(n<0&&t<=0)return ae.falseFunc
;if(-1===t)return e=>e<=n;if(0===t)return e=>e===n
;if(1===t)return n<0?ae.trueFunc:e=>e>=n
;const r=Math.abs(t),o=(n%r+r)%r
;return t>1?e=>e>=n&&e%r===o:e=>e<=n&&e%r===o
}(function(e){
if("even"===(e=e.trim().toLowerCase()))return[2,0]
;if("odd"===e)return[2,1];let t=0,n=0,r=a(),o=i()
;if(t<e.length&&"n"===e.charAt(t)&&(t++,
n=r*(null!=o?o:1),s(),t<e.length?(r=a(),
s(),o=i()):r=o=0),null===o||t<e.length)throw new Error(`n-th rule couldn't be parsed ('${e}')`)
;return[n,r*o];function a(){
return"-"===e.charAt(t)?(t++,-1):("+"===e.charAt(t)&&t++,
1)}function i(){const n=t;let r=0
;for(;t<e.length&&e.charCodeAt(t)>=ke&&e.charCodeAt(t)<=Ne;)r=10*r+(e.charCodeAt(t)-ke),
t++;return t===n?null:r}function s(){
for(;t<e.length&&Fe.has(e.charCodeAt(t));)t++}
}(e))}function Oe(e,t){return n=>{
const r=t.getParent(n)
;return null!=r&&t.isTag(r)&&e(n)}}const Me={
contains:(e,t,{adapter:n})=>function(r){
return e(r)&&n.getText(r).includes(t)},
icontains(e,t,{adapter:n}){const r=t.toLowerCase()
;return function(t){
return e(t)&&n.getText(t).toLowerCase().includes(r)
}},"nth-child"(e,t,{adapter:n,equals:r}){
const o=De(t)
;return o===ae.falseFunc?ae.falseFunc:o===ae.trueFunc?Oe(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=0;e<a.length&&!r(t,a[e]);e++)n.isTag(a[e])&&i++
;return o(i)&&e(t)}},
"nth-last-child"(e,t,{adapter:n,equals:r}){
const o=De(t)
;return o===ae.falseFunc?ae.falseFunc:o===ae.trueFunc?Oe(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=a.length-1;e>=0&&!r(t,a[e]);e--)n.isTag(a[e])&&i++
;return o(i)&&e(t)}},
"nth-of-type"(e,t,{adapter:n,equals:r}){
const o=De(t)
;return o===ae.falseFunc?ae.falseFunc:o===ae.trueFunc?Oe(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=0;e<a.length;e++){const o=a[e]
;if(r(t,o))break
;n.isTag(o)&&n.getName(o)===n.getName(t)&&i++}
return o(i)&&e(t)}},
"nth-last-of-type"(e,t,{adapter:n,equals:r}){
const o=De(t)
;return o===ae.falseFunc?ae.falseFunc:o===ae.trueFunc?Oe(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=a.length-1;e>=0;e--){const o=a[e]
;if(r(t,o))break
;n.isTag(o)&&n.getName(o)===n.getName(t)&&i++}
return o(i)&&e(t)}},root:(e,t,{adapter:n})=>t=>{
const r=n.getParent(t)
;return(null==r||!n.isTag(r))&&e(t)},
scope(e,t,n,r){const{equals:o}=n
;return r&&0!==r.length?1===r.length?t=>o(r[0],t)&&e(t):t=>r.includes(t)&&e(t):Me.root(e,t,n)
},hover:Pe("isHovered"),visited:Pe("isVisited"),
active:Pe("isActive")};function Pe(e){
return function(t,n,{adapter:r}){const o=r[e]
;return"function"!=typeof o?ae.falseFunc:function(e){
return o(e)&&t(e)}}}const Le={
empty:(e,{adapter:t})=>!t.getChildren(e).some((e=>t.isTag(e)||""!==t.getText(e))),
"first-child"(e,{adapter:t,equals:n}){
if(t.prevElementSibling)return null==t.prevElementSibling(e)
;const r=t.getSiblings(e).find((e=>t.isTag(e)))
;return null!=r&&n(e,r)},
"last-child"(e,{adapter:t,equals:n}){
const r=t.getSiblings(e)
;for(let o=r.length-1;o>=0;o--){
if(n(e,r[o]))return!0;if(t.isTag(r[o]))break}
return!1},"first-of-type"(e,{adapter:t,equals:n}){
const r=t.getSiblings(e),o=t.getName(e)
;for(let a=0;a<r.length;a++){const i=r[a]
;if(n(e,i))return!0
;if(t.isTag(i)&&t.getName(i)===o)break}return!1},
"last-of-type"(e,{adapter:t,equals:n}){
const r=t.getSiblings(e),o=t.getName(e)
;for(let a=r.length-1;a>=0;a--){const i=r[a]
;if(n(e,i))return!0
;if(t.isTag(i)&&t.getName(i)===o)break}return!1},
"only-of-type"(e,{adapter:t,equals:n}){
const r=t.getName(e)
;return t.getSiblings(e).every((o=>n(e,o)||!t.isTag(o)||t.getName(o)!==r))
},
"only-child":(e,{adapter:t,equals:n})=>t.getSiblings(e).every((r=>n(e,r)||!t.isTag(r)))
};function qe(e,t,n,r){if(null===n){
if(e.length>r)throw new Error(`Pseudo-class :${t} requires an argument`)
}else if(e.length===r)throw new Error(`Pseudo-class :${t} doesn't have any arguments`)
}const Ie={"any-link":":is(a, area, link)[href]",
link:":any-link:not(:visited)",
disabled:":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
enabled:":not(:disabled)",
checked:":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
required:":is(input, select, textarea)[required]",
optional:":is(input, select, textarea):not([required])",
selected:"option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
checkbox:"[type=checkbox]",file:"[type=file]",
password:"[type=password]",radio:"[type=radio]",
reset:"[type=reset]",image:"[type=image]",
submit:"[type=submit]",parent:":not(:empty)",
header:":is(h1, h2, h3, h4, h5, h6)",
button:":is(button, input[type=button])",
input:":is(input, textarea, select, button)",
text:"input:is(:not([type!='']), [type=text])"
},$e={};function Ue(e,t){
return e===ae.falseFunc?ae.falseFunc:n=>t.isTag(n)&&e(n)
}function Re(e,t){const n=t.getSiblings(e)
;if(n.length<=1)return[];const r=n.indexOf(e)
;return r<0||r===n.length-1?[]:n.slice(r+1).filter(t.isTag)
}function je(e){return{xmlMode:!!e.xmlMode,
lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,
lowerCaseTags:!!e.lowerCaseTags,
quirksMode:!!e.quirksMode,
cacheResults:!!e.cacheResults,pseudos:e.pseudos,
adapter:e.adapter,equals:e.equals}}
const _e=(e,t,n,r,o)=>{const a=o(t,je(n),r)
;return a===ae.trueFunc?e:a===ae.falseFunc?ae.falseFunc:t=>a(t)&&e(t)
},Ge={is:_e,matches:_e,where:_e,not(e,t,n,r,o){
const a=o(t,je(n),r)
;return a===ae.falseFunc?e:a===ae.trueFunc?ae.falseFunc:t=>!a(t)&&e(t)
},has(e,t,n,r,o){const{adapter:a}=n,i=je(n)
;i.relativeSelector=!0
;const s=t.some((e=>e.some(ve)))?[$e]:void 0,l=o(t,i,s)
;if(l===ae.falseFunc)return ae.falseFunc
;const u=Ue(l,a);if(s&&l!==ae.trueFunc){
const{shouldTestNextSiblings:t=!1}=l;return n=>{
if(!e(n))return!1;s[0]=n
;const r=a.getChildren(n),o=t?[...r,...Re(n,a)]:r
;return a.existsOne(u,o)}}
return t=>e(t)&&a.existsOne(u,a.getChildren(t))}}
;function Ve(e,t){const n=t.getParent(e)
;return n&&t.isTag(n)?n:null}
function We(e,t,n,r,o){const{adapter:a,equals:i}=n
;switch(t.type){case ne.PseudoElement:
throw new Error("Pseudo-elements are not supported by css-select")
;case ne.ColumnCombinator:
throw new Error("Column combinators are not yet supported by css-select")
;case ne.Attribute:
if(null!=t.namespace)throw new Error("Namespaced attributes are not yet supported by css-select")
;return n.xmlMode&&!n.lowerCaseAttributeNames||(t.name=t.name.toLowerCase()),
Se[t.action](e,t,n);case ne.Pseudo:
return function(e,t,n,r,o){var a
;const{name:i,data:s}=t;if(Array.isArray(s)){
if(!(i in Ge))throw new Error(`Unknown pseudo-class :${i}(${s})`)
;return Ge[i](e,s,n,r,o)}
const l=null===(a=n.pseudos)||void 0===a?void 0:a[i],u="string"==typeof l?l:Ie[i]
;if("string"==typeof u){
if(null!=s)throw new Error(`Pseudo ${i} doesn't have any arguments`)
;const t=ge(u);return Ge.is(e,t,n,r,o)}
if("function"==typeof l)return qe(l,i,s,1),
t=>l(t,s)&&e(t);if(i in Me)return Me[i](e,s,n,r)
;if(i in Le){const t=Le[i]
;return qe(t,i,s,2),r=>t(r,n,s)&&e(r)}
throw new Error(`Unknown pseudo-class :${i}`)
}(e,t,n,r,o);case ne.Tag:{
if(null!=t.namespace)throw new Error("Namespaced tag names are not yet supported by css-select")
;let{name:r}=t
;return n.xmlMode&&!n.lowerCaseTags||(r=r.toLowerCase()),function(t){
return a.getName(t)===r&&e(t)}}case ne.Descendant:
{
if(!1===n.cacheResults||"undefined"==typeof WeakSet)return function(t){
let n=t;for(;n=Ve(n,a);)if(e(n))return!0;return!1}
;const t=new WeakSet;return function(n){let r=n
;for(;r=Ve(r,a);)if(!t.has(r)){
if(a.isTag(r)&&e(r))return!0;t.add(r)}return!1}}
case"_flexibleDescendant":return function(t){
let n=t;do{if(e(n))return!0}while(n=Ve(n,a))
;return!1};case ne.Parent:return function(t){
return a.getChildren(t).some((t=>a.isTag(t)&&e(t)))
};case ne.Child:return function(t){
const n=a.getParent(t)
;return null!=n&&a.isTag(n)&&e(n)}
;case ne.Sibling:return function(t){
const n=a.getSiblings(t)
;for(let r=0;r<n.length;r++){const o=n[r]
;if(i(t,o))break;if(a.isTag(o)&&e(o))return!0}
return!1};case ne.Adjacent:
return a.prevElementSibling?function(t){
const n=a.prevElementSibling(t)
;return null!=n&&e(n)}:function(t){
const n=a.getSiblings(t);let r
;for(let e=0;e<n.length;e++){const o=n[e]
;if(i(t,o))break;a.isTag(o)&&(r=o)}return!!r&&e(r)
};case ne.Universal:
if(null!=t.namespace&&"*"!==t.namespace)throw new Error("Namespaced universal selectors are not yet supported by css-select")
;return e}}function Be(e,t,n){
return Xe("string"==typeof e?ge(e):e,t,n)}
function He(e){
return e.type===ne.Pseudo&&("scope"===e.name||Array.isArray(e.data)&&e.data.some((e=>e.some(He))))
}const Ye={type:ne.Descendant},ze={
type:"_flexibleDescendant"},Ze={type:ne.Pseudo,
name:"scope",data:null};function Xe(e,t,n){var r
;e.forEach(Ce),n=null!==(r=t.context)&&void 0!==r?r:n
;const o=Array.isArray(n),a=n&&(Array.isArray(n)?n:[n])
;if(!1!==t.relativeSelector)!function(e,{adapter:t},n){
const r=!!(null==n?void 0:n.every((e=>{
const n=t.isTag(e)&&t.getParent(e)
;return e===$e||n&&t.isTag(n)})))
;for(const t of e){
if(t.length>0&&ve(t[0])&&t[0].type!==ne.Descendant);else{
if(!r||t.some(He))continue;t.unshift(Ye)}
t.unshift(Ze)}
}(e,t,a);else if(e.some((e=>e.length>0&&ve(e[0]))))throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled")
;let i=!1;const s=e.map((e=>{if(e.length>=2){
const[t,n]=e
;t.type!==ne.Pseudo||"scope"!==t.name||(o&&n.type===ne.Descendant?e[1]=ze:n.type!==ne.Adjacent&&n.type!==ne.Sibling||(i=!0))
}return function(e,t,n){var r
;return e.reduce(((e,r)=>e===ae.falseFunc?ae.falseFunc:We(e,r,t,n,Xe)),null!==(r=t.rootFunc)&&void 0!==r?r:ae.trueFunc)
}(e,t,a)})).reduce(Je,ae.falseFunc)
;return s.shouldTestNextSiblings=i,s}
function Je(e,t){
return t===ae.falseFunc||e===ae.trueFunc?e:e===ae.falseFunc||t===ae.trueFunc?t:function(n){
return e(n)||t(n)}}const Ke=(e,t)=>e===t,Qe={
adapter:oe,equals:Ke};function et(e){var t,n,r,o
;const a=null!=e?e:Qe
;return null!==(t=a.adapter)&&void 0!==t||(a.adapter=oe),null!==(n=a.equals)&&void 0!==n||(a.equals=null!==(o=null===(r=a.adapter)||void 0===r?void 0:r.equals)&&void 0!==o?o:Ke),
a}const tt=(nt=function(e,t,n){
return Ue(Be(e,t,n),t.adapter)},function(e,t,n){
const r=et(t);return nt(e,r,n)});var nt
;function rt(e){return function(t,n,r){
const o=et(r);"function"!=typeof t&&(t=Be(t,o,n))
;const a=function(e,t,n=!1){n&&(e=function(e,t){
const n=Array.isArray(e)?e.slice(0):[e],r=n.length
;for(let e=0;e<r;e++){const r=Re(n[e],t)
;n.push(...r)}return n}(e,t))
;return Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)
}(n,o.adapter,t.shouldTestNextSiblings)
;return e(t,a,o)}}
const ot=rt(((e,t,n)=>e!==ae.falseFunc&&t&&0!==t.length?n.adapter.findAll(e,t):[])),at=rt(((e,t,n)=>e!==ae.falseFunc&&t&&0!==t.length?n.adapter.findOne(e,t):null))
;var it=new Map;function st(e){var t=it.get(e)
;return t||(t=tt(e),it.set(e,t)),t}
function lt(e,t,n,r){var o=ot(st(t),e)
;if(null!=n&&o.length<n)throw new Error("elems.length (".concat(o.length,") < ").concat(n," for: ").concat(t))
;if(null!=r&&o.length>r)throw new Error("elems.length (".concat(o.length,") > ").concat(n," for: ").concat(t))
;return o}function ut(e,t){
return e?(null!=(n=(null==t?void 0:t.separator)&&Array.isArray(e)?e.map((function(t){
return q(e)
})).join(null==t?void 0:t.separator):e&&q(e))&&(null==t?void 0:t.transform)&&(n=null==t?void 0:t.transform(n)),
n):null;var n}function ct(e,t,n){
var r=null==t?e:new Date(e.toLocaleString("en-US",{
timeZone:t
})),o=null==n?e:new Date(e.toLocaleString("en-US",{
timeZone:n}))
;return new Date(e.getTime()+o.getTime()-r.getTime())
}
var dt="af8d84dcb2744318bdba99451742baa5:",ft="0a66b184c2bb4c8fae1d34525c6399a8",pt="/53d2f4a13de341eda24673cbd677bbd6/"
;return e.EMPTY_HOST=ft,
e.EMPTY_PATH=pt,e.EMPTY_PROTOCOL=dt,e.assertIsFinite=t,e.convertTimeZone=ct,
e.cropText=function(e,t,n){
var r,o,a,i=void 0===n?{}:n,s=i.ellipsis,l=void 0===s?"…":s,u=i.cropHead,c=void 0!==u&&u,d=i.removeCroppedWord,f=void 0===d||d
;return e.length>t&&(c?(null==(a=f?null===(r=new RegExp("(?<=\\s|^)(?=\\S.{0,".concat(t-l.length-1,"}$)"),"s").exec(e))||void 0===r?void 0:r.index:null)&&(a=e.length-t+l.length),
e=a>=e.length?e.substring(e.length-t):l+e.substring(a)):(null==(a=f?null===(o=new RegExp("(^.{0,".concat(t-l.length-1,"}\\S)(\\s|$)"),"s").exec(e))||void 0===o?void 0:o[1].length:null)&&(a=t-l.length),
e=a<=0?e.substring(0,t):e.substring(0,a)+l)),e
},e.dateToString=function(e,t){
var n=(e=ct(e,"UTC",t)).getUTCFullYear().toString().padStart(4,"0"),r=(e.getUTCMonth()+1).toString().padStart(2,"0"),o=e.getUTCDate().toString().padStart(2,"0"),a=e.getUTCHours().toString().padStart(2,"0"),i=e.getUTCMinutes().toString().padStart(2,"0"),s=e.getUTCSeconds().toString().padStart(2,"0")
;return"".concat(n,"-").concat(r,"-").concat(o," ").concat(a,":").concat(i,":").concat(s)
},
e.getSelector=st,e.innerText=ut,e.innerTextNotEmpty=function(e,t){
var n=ut(e,t)
;if(!n)throw new Error("innerText is empty")
;return n},e.parseNumberFloat=function(e){
return t(parseFloat(e))
},e.parseNumberInt=function(e){
return t(parseInt(e,10))
},e.removeExtraSpaces=function(e,t){
var n=void 0===t?{}:t,r=n.keepLines,o=n.noTrim
;return e?(e=r?(e=(e=e.replace(/[^\S\n]+/g," ")).replace(/[^\S\n]+(?=\n)|(?<=\n)[^\S\n]+/g,"")).replace(new RegExp("(?<=\n{".concat(r,"})\n+"),"g"),""):e.replace(/\s+/g," "),
o||(e=e.trim()),e):e
},e.selectAll=lt,e.selectFirst=function(e,t){
var n=at(st(t),e)
;if(!n)throw new Error("elem not found for: ".concat(t))
;return n},e.selectFirstOrNull=function(e,t){
var n=lt(e,t);return n.length?n[0]:null
},e.selectOne=function(e,t){return lt(e,t,1,1)[0]
},e.selectOneOrNull=function(e,t){
var n=lt(e,t,0,1);return n.length?n[0]:null
},e.urlJoin=function(){
for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
;for(var n=new URL("".concat(dt,"//").concat(ft).concat(pt)),r=0,o=e.length;r<o;r++){
var a=e[r];a&&(n=new URL(a,n))}
var i=function(e,t){
var n="function"==typeof Symbol&&e[Symbol.iterator]
;if(!n)return e;var r,o,a=n.call(e),i=[];try{
for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)
}catch(e){o={error:e}}finally{try{
r&&!r.done&&(n=a.return)&&n.call(a)}finally{
if(o)throw o.error}}return i
}(n.href.match(/((?:\?[^#+]*)?)((?:#.*)?)$/s),3),s=i[1],l=i[2]
;return n.pathname.startsWith(pt)?n.pathname.substring(pt.length)+s+l:n.host===ft?n.pathname+s+l:n.protocol===dt?"//"+n.host+n.pathname+s+l:n.href
},Object.defineProperty(e,"__esModule",{value:!0
}),e}({});
