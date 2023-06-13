var StringUtils=function(e){"use strict";var t
;!function(e){
e.Root="root",e.Text="text",e.Directive="directive",e.Comment="comment",
e.Script="script",
e.Style="style",e.Tag="tag",e.CDATA="cdata",e.Doctype="doctype"
}(t||(t={}))
;const n=t.Root,r=t.Text,o=t.Directive,a=t.Comment,i=t.Script,s=t.Style,l=t.Tag,u=t.CDATA,c=t.Doctype
;function d(e){
return(n=e).type===t.Tag||n.type===t.Script||n.type===t.Style
;var n}function f(e){return e.type===t.CDATA}
function p(e){return e.type===t.Text}
function h(e){return e.type===t.Comment}
function g(e){
return Object.prototype.hasOwnProperty.call(e,"children")
}
const m=/["&'<>$\x80-\uFFFF]/g,b=new Map([[34,"&quot;"],[38,"&amp;"],[39,"&apos;"],[60,"&lt;"],[62,"&gt;"]]),v=null!=String.prototype.codePointAt?(e,t)=>e.codePointAt(t):(e,t)=>55296==(64512&e.charCodeAt(t))?1024*(e.charCodeAt(t)-55296)+e.charCodeAt(t+1)-56320+65536:e.charCodeAt(t)
;function y(e){let t,n="",r=0
;for(;null!==(t=m.exec(e));){
const o=t.index,a=e.charCodeAt(o),i=b.get(a)
;void 0!==i?(n+=e.substring(r,o)+i,r=o+1):(n+=`${e.substring(r,o)}&#x${v(e,o).toString(16)};`,
r=m.lastIndex+=Number(55296==(64512&a)))}
return n+e.substr(r)}function C(e,t){
return function(n){let r,o=0,a=""
;for(;r=e.exec(n);)o!==r.index&&(a+=n.substring(o,r.index)),
a+=t.get(r[0].charCodeAt(0)),o=r.index+1
;return a+n.substring(o)}}
const A=C(/["&\u00A0]/g,new Map([[34,"&quot;"],[38,"&amp;"],[160,"&nbsp;"]])),w=C(/[&<>\u00A0]/g,new Map([[38,"&amp;"],[60,"&lt;"],[62,"&gt;"],[160,"&nbsp;"]])),x=new Map(["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","textPath"].map((e=>[e.toLowerCase(),e]))),E=new Map(["definitionURL","attributeName","attributeType","baseFrequency","baseProfile","calcMode","clipPathUnits","diffuseConstant","edgeMode","filterUnits","glyphRef","gradientTransform","gradientUnits","kernelMatrix","kernelUnitLength","keyPoints","keySplines","keyTimes","lengthAdjust","limitingConeAngle","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","numOctaves","pathLength","patternContentUnits","patternTransform","patternUnits","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","refX","refY","repeatCount","repeatDur","requiredExtensions","requiredFeatures","specularConstant","specularExponent","spreadMethod","startOffset","stdDeviation","stitchTiles","surfaceScale","systemLanguage","tableValues","targetX","targetY","textLength","viewBox","viewTarget","xChannelSelector","yChannelSelector","zoomAndPan"].map((e=>[e.toLowerCase(),e]))),S=new Set(["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])
;function T(e){return e.replace(/"/g,"&quot;")}
const F=new Set(["area","base","basefont","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr"])
;function k(e,t={}){const n="length"in e?e:[e]
;let r="";for(let e=0;e<n.length;e++)r+=N(n[e],t)
;return r}function N(e,t){switch(e.type){case n:
return k(e.children,t);case c:case o:
return`<${e.data}>`;case a:return function(e){
return`\x3c!--${e.data}--\x3e`}(e);case u:
return function(e){
return`<![CDATA[${e.children[0].data}]]>`}(e)
;case i:case s:case l:return function(e,t){var n
;"foreign"===t.xmlMode&&(e.name=null!==(n=x.get(e.name))&&void 0!==n?n:e.name,
e.parent&&D.has(e.parent.name)&&(t={...t,
xmlMode:!1}));!t.xmlMode&&O.has(e.name)&&(t={...t,
xmlMode:"foreign"});let r=`<${e.name}`
;const o=function(e,t){var n;if(!e)return
;const r=!1===(null!==(n=t.encodeEntities)&&void 0!==n?n:t.decodeEntities)?T:t.xmlMode||"utf8"!==t.encodeEntities?y:A
;return Object.keys(e).map((n=>{var o,a
;const i=null!==(o=e[n])&&void 0!==o?o:""
;return"foreign"===t.xmlMode&&(n=null!==(a=E.get(n))&&void 0!==a?a:n),
t.emptyAttrs||t.xmlMode||""!==i?`${n}="${r(i)}"`:n
})).join(" ")}(e.attribs,t);o&&(r+=` ${o}`)
;0===e.children.length&&(t.xmlMode?!1!==t.selfClosingTags:t.selfClosingTags&&F.has(e.name))?(t.xmlMode||(r+=" "),
r+="/>"):(r+=">",
e.children.length>0&&(r+=k(e.children,t)),!t.xmlMode&&F.has(e.name)||(r+=`</${e.name}>`))
;return r}(e,t);case r:return function(e,t){var n
;let r=e.data||""
;!1===(null!==(n=t.encodeEntities)&&void 0!==n?n:t.decodeEntities)||!t.xmlMode&&e.parent&&S.has(e.parent.name)||(r=t.xmlMode||"utf8"!==t.encodeEntities?y(r):w(r))
;return r}(e,t)}}
const D=new Set(["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]),O=new Set(["svg","math"])
;function M(e,t){return k(e,t)}function P(e){
return Array.isArray(e)?e.map(P).join(""):g(e)&&!h(e)?P(e.children):p(e)?e.data:""
}function L(e){
return Array.isArray(e)?e.map(L).join(""):g(e)&&(e.type===t.Tag||f(e))?L(e.children):p(e)?e.data:""
}function q(e){return g(e)?e.children:[]}
function I(e){return e.parent||null}function $(e){
if(e.prev&&(e.prev.next=e.next),
e.next&&(e.next.prev=e.prev),e.parent){
const t=e.parent.children
;t.splice(t.lastIndexOf(e),1)}}
function U(e,t,n=!0,r=1/0){
return Array.isArray(t)||(t=[t]),R(e,t,n,r)}
function R(e,t,n,r){const o=[];for(const a of t){
if(e(a)&&(o.push(a),--r<=0))break
;if(n&&g(a)&&a.children.length>0){
const t=R(e,a.children,n,r)
;if(o.push(...t),(r-=t.length)<=0)break}}return o}
function j(e,t,n=!0){let r=null
;for(let o=0;o<t.length&&!r;o++){const a=t[o]
;d(a)&&(e(a)?r=a:n&&a.children.length>0&&(r=j(e,a.children,!0)))
}return r}const _={
tag_name:e=>"function"==typeof e?t=>d(t)&&e(t.name):"*"===e?d:t=>d(t)&&t.name===e,
tag_type:e=>"function"==typeof e?t=>e(t.type):t=>t.type===e,
tag_contains:e=>"function"==typeof e?t=>p(t)&&e(t.data):t=>p(t)&&t.data===e
};function G(e,t){
return"function"==typeof t?n=>d(n)&&t(n.attribs[e]):n=>d(n)&&n.attribs[e]===t
}function V(e,t){return n=>e(n)||t(n)}
function W(e){const t=Object.keys(e).map((t=>{
const n=e[t]
;return Object.prototype.hasOwnProperty.call(_,t)?_[t](n):G(t,n)
}));return 0===t.length?null:t.reduce(V)}
function B(e,t,n=!0,r=1/0){
return U(_.tag_name(e),t,n,r)}var H
;function Y(e,t){const n=[],r=[];if(e===t)return 0
;let o=g(e)?e:e.parent
;for(;o;)n.unshift(o),o=o.parent
;for(o=g(t)?t:t.parent;o;)r.unshift(o),o=o.parent
;const a=Math.min(n.length,r.length);let i=0
;for(;i<a&&n[i]===r[i];)i++
;if(0===i)return H.DISCONNECTED
;const s=n[i-1],l=s.children,u=n[i],c=r[i]
;return l.indexOf(u)>l.indexOf(c)?s===t?H.FOLLOWING|H.CONTAINED_BY:H.FOLLOWING:s===e?H.PRECEDING|H.CONTAINS:H.PRECEDING
}!function(e){
e[e.DISCONNECTED=1]="DISCONNECTED",e[e.PRECEDING=2]="PRECEDING",e[e.FOLLOWING=4]="FOLLOWING",
e[e.CONTAINS=8]="CONTAINS",
e[e.CONTAINED_BY=16]="CONTAINED_BY"}(H||(H={}))
;const z=["url","type","lang"],Z=["fileSize","bitrate","framerate","samplingrate","channels","duration","height","width"]
;function X(e){
return B("media:content",e).map((e=>{
const{attribs:t}=e,n={medium:t.medium,
isDefault:!!t.isDefault}
;for(const e of z)t[e]&&(n[e]=t[e])
;for(const e of Z)t[e]&&(n[e]=parseInt(t[e],10))
;return t.expression&&(n.expression=t.expression),
n}))}function J(e,t){return B(e,t,!0,1)[0]}
function K(e,t,n=!1){return P(B(e,t,n,1)).trim()}
function Q(e,t,n,r,o=!1){const a=K(n,r,o)
;a&&(e[t]=a)}function ee(e){
return"rss"===e||"feed"===e||"rdf:RDF"===e}
var te,ne,re=Object.freeze({__proto__:null,
isTag:d,isCDATA:f,isText:p,isComment:h,
isDocument:function(e){return e.type===t.Root},
hasChildren:g,getOuterHTML:M,
getInnerHTML:function(e,t){
return g(e)?e.children.map((e=>M(e,t))).join(""):""
},getText:function e(t){
return Array.isArray(t)?t.map(e).join(""):d(t)?"br"===t.name?"\n":e(t.children):f(t)?e(t.children):p(t)?t.data:""
},textContent:P,innerText:L,getChildren:q,
getParent:I,getSiblings:function(e){const t=I(e)
;if(null!=t)return q(t);const n=[e]
;let{prev:r,next:o}=e
;for(;null!=r;)n.unshift(r),({prev:r}=r)
;for(;null!=o;)n.push(o),({next:o}=o);return n},
getAttributeValue:function(e,t){var n
;return null===(n=e.attribs)||void 0===n?void 0:n[t]
},hasAttrib:function(e,t){
return null!=e.attribs&&Object.prototype.hasOwnProperty.call(e.attribs,t)&&null!=e.attribs[t]
},getName:function(e){return e.name},
nextElementSibling:function(e){let{next:t}=e
;for(;null!==t&&!d(t);)({next:t}=t);return t},
prevElementSibling:function(e){let{prev:t}=e
;for(;null!==t&&!d(t);)({prev:t}=t);return t},
removeElement:$,replaceElement:function(e,t){
const n=t.prev=e.prev;n&&(n.next=t)
;const r=t.next=e.next;r&&(r.prev=t)
;const o=t.parent=e.parent;if(o){
const n=o.children
;n[n.lastIndexOf(e)]=t,e.parent=null}},
appendChild:function(e,t){
if($(t),t.next=null,t.parent=e,e.children.push(t)>1){
const n=e.children[e.children.length-2]
;n.next=t,t.prev=n}else t.prev=null},
append:function(e,t){$(t)
;const{parent:n}=e,r=e.next
;if(t.next=r,t.prev=e,e.next=t,t.parent=n,r){
if(r.prev=t,n){const e=n.children
;e.splice(e.lastIndexOf(r),0,t)}
}else n&&n.children.push(t)},
prependChild:function(e,t){
if($(t),t.parent=e,t.prev=null,1!==e.children.unshift(t)){
const n=e.children[1];n.prev=t,t.next=n
}else t.next=null},prepend:function(e,t){$(t)
;const{parent:n}=e;if(n){const r=n.children
;r.splice(r.indexOf(e),0,t)}
e.prev&&(e.prev.next=t),t.parent=n,t.prev=e.prev,t.next=e,
e.prev=t},filter:U,find:R,
findOneChild:function(e,t){return t.find(e)},
findOne:j,existsOne:function e(t,n){
return n.some((n=>d(n)&&(t(n)||n.children.length>0&&e(t,n.children))))
},findAll:function(e,t){var n
;const r=[],o=t.filter(d);let a
;for(;a=o.shift();){
const t=null===(n=a.children)||void 0===n?void 0:n.filter(d)
;t&&t.length>0&&o.unshift(...t),e(a)&&r.push(a)}
return r},testElement:function(e,t){const n=W(e)
;return!n||n(t)},
getElements:function(e,t,n,r=1/0){const o=W(e)
;return o?U(o,t,n,r):[]},
getElementById:function(e,t,n=!0){
return Array.isArray(t)||(t=[t]),j(G("id",e),t,n)
},getElementsByTagName:B,
getElementsByTagType:function(e,t,n=!0,r=1/0){
return U(_.tag_type(e),t,n,r)},
removeSubsets:function(e){let t=e.length
;for(;--t>=0;){const n=e[t]
;if(t>0&&e.lastIndexOf(n,t-1)>=0)e.splice(t,1);else for(let r=n.parent;r;r=r.parent)if(e.includes(r)){
e.splice(t,1);break}}return e},
get DocumentPosition(){return H},
compareDocumentPosition:Y,uniqueSort:function(e){
return(e=e.filter(((e,t,n)=>!n.includes(e,t+1)))).sort(((e,t)=>{
const n=Y(e,t)
;return n&H.PRECEDING?-1:n&H.FOLLOWING?1:0})),e},
getFeed:function(e){const t=J(ee,e)
;return t?"feed"===t.name?function(e){var t
;const n=e.children,r={type:"atom",
items:B("entry",n).map((e=>{var t
;const{children:n}=e,r={media:X(n)}
;Q(r,"id","id",n),Q(r,"title","title",n)
;const o=null===(t=J("link",n))||void 0===t?void 0:t.attribs.href
;o&&(r.link=o)
;const a=K("summary",n)||K("content",n)
;a&&(r.description=a);const i=K("updated",n)
;return i&&(r.pubDate=new Date(i)),r}))}
;Q(r,"id","id",n),Q(r,"title","title",n)
;const o=null===(t=J("link",n))||void 0===t?void 0:t.attribs.href
;o&&(r.link=o);Q(r,"description","subtitle",n)
;const a=K("updated",n);a&&(r.updated=new Date(a))
;return Q(r,"author","email",n,!0),r
}(t):function(e){var t,n
;const r=null!==(n=null===(t=J("channel",e.children))||void 0===t?void 0:t.children)&&void 0!==n?n:[],o={
type:e.name.substr(0,3),id:"",
items:B("item",e.children).map((e=>{
const{children:t}=e,n={media:X(t)}
;Q(n,"id","guid",t),Q(n,"title","title",t),Q(n,"link","link",t),
Q(n,"description","description",t)
;const r=K("pubDate",t)
;return r&&(n.pubDate=new Date(r)),n}))}
;Q(o,"title","title",r),Q(o,"link","link",r),
Q(o,"description","description",r)
;const a=K("lastBuildDate",r)
;a&&(o.updated=new Date(a))
;return Q(o,"author","managingEditor",r,!0),o
}(t):null}}),oe={trueFunc:function(){return!0},
falseFunc:function(){return!1}};!function(e){
e.Attribute="attribute",e.Pseudo="pseudo",
e.PseudoElement="pseudo-element",e.Tag="tag",
e.Universal="universal",e.Adjacent="adjacent",
e.Child="child",e.Descendant="descendant",
e.Parent="parent",e.Sibling="sibling",
e.ColumnCombinator="column-combinator"
}(te||(te={})),function(e){
e.Any="any",e.Element="element",e.End="end",e.Equals="equals",
e.Exists="exists",
e.Hyphen="hyphen",e.Not="not",e.Start="start"
}(ne||(ne={}))
;const ae=/^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,ie=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,se=new Map([[126,ne.Element],[94,ne.Start],[36,ne.End],[42,ne.Any],[33,ne.Not],[124,ne.Hyphen]]),le=new Set(["has","not","matches","is","where","host","host-context"])
;const ue=new Set(["contains","icontains"])
;function ce(e,t,n){const r=parseInt(t,16)-65536
;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)
}function de(e){return e.replace(ie,ce)}
function fe(e){return 39===e||34===e}
function pe(e){
return 32===e||9===e||10===e||12===e||13===e}
function he(e){const t=[],n=ge(t,`${e}`,0)
;if(n<e.length)throw new Error(`Unmatched selector: ${e.slice(n)}`)
;return t}function ge(e,t,n){let r=[]
;function o(e){const r=t.slice(n+e).match(ae)
;if(!r)throw new Error(`Expected name, found ${t.slice(n)}`)
;const[o]=r;return n+=e+o.length,de(o)}
function a(e){
for(n+=e;n<t.length&&pe(t.charCodeAt(n));)n++}
function i(){const e=n+=1;let r=1
;for(;r>0&&n<t.length;n++)40!==t.charCodeAt(n)||s(n)?41!==t.charCodeAt(n)||s(n)||r--:r++
;if(r)throw new Error("Parenthesis not matched")
;return de(t.slice(e,n-1))}function s(e){let n=0
;for(;92===t.charCodeAt(--e);)n++;return 1==(1&n)}
function l(){if(r.length>0&&function(e){
switch(e.type){case te.Adjacent:case te.Child:
case te.Descendant:case te.Parent:case te.Sibling:
case te.ColumnCombinator:return!0;default:return!1
}
}(r[r.length-1]))throw new Error("Did not expect successive traversals.")
}function u(e){
r.length>0&&r[r.length-1].type===te.Descendant?r[r.length-1].type=e:(l(),
r.push({type:e}))}function c(e,t){r.push({
type:te.Attribute,name:e,action:t,value:o(1),
namespace:null,ignoreCase:"quirks"})}function d(){
if(r.length&&r[r.length-1].type===te.Descendant&&r.pop(),
0===r.length)throw new Error("Empty sub-selector")
;e.push(r)}if(a(0),t.length===n)return n
;e:for(;n<t.length;){const e=t.charCodeAt(n)
;switch(e){case 32:case 9:case 10:case 12:case 13:
0!==r.length&&r[0].type===te.Descendant||(l(),
r.push({type:te.Descendant})),a(1);break;case 62:
u(te.Child),a(1);break;case 60:u(te.Parent),a(1)
;break;case 126:u(te.Sibling),a(1);break;case 43:
u(te.Adjacent),a(1);break;case 46:
c("class",ne.Element);break;case 35:
c("id",ne.Equals);break;case 91:{let e;a(1)
;let i=null
;124===t.charCodeAt(n)?e=o(1):t.startsWith("*|",n)?(i="*",e=o(2)):(e=o(0),
124===t.charCodeAt(n)&&61!==t.charCodeAt(n+1)&&(i=e,
e=o(1))),a(0);let l=ne.Exists
;const u=se.get(t.charCodeAt(n));if(u){
if(l=u,61!==t.charCodeAt(n+1))throw new Error("Expected `=`")
;a(2)
}else 61===t.charCodeAt(n)&&(l=ne.Equals,a(1))
;let c="",d=null;if("exists"!==l){
if(fe(t.charCodeAt(n))){const e=t.charCodeAt(n)
;let r=n+1
;for(;r<t.length&&(t.charCodeAt(r)!==e||s(r));)r+=1
;if(t.charCodeAt(r)!==e)throw new Error("Attribute value didn't end")
;c=de(t.slice(n+1,r)),n=r+1}else{const e=n
;for(;n<t.length&&(!pe(t.charCodeAt(n))&&93!==t.charCodeAt(n)||s(n));)n+=1
;c=de(t.slice(e,n))}a(0)
;const e=32|t.charCodeAt(n)
;115===e?(d=!1,a(1)):105===e&&(d=!0,a(1))}
if(93!==t.charCodeAt(n))throw new Error("Attribute selector didn't terminate")
;n+=1;const f={type:te.Attribute,name:e,action:l,
value:c,namespace:i,ignoreCase:d};r.push(f);break}
case 58:{if(58===t.charCodeAt(n+1)){r.push({
type:te.PseudoElement,name:o(2).toLowerCase(),
data:40===t.charCodeAt(n)?i():null});continue}
const e=o(1).toLowerCase();let a=null
;if(40===t.charCodeAt(n))if(le.has(e)){
if(fe(t.charCodeAt(n+1)))throw new Error(`Pseudo-selector ${e} cannot be quoted`)
;if(a=[],
n=ge(a,t,n+1),41!==t.charCodeAt(n))throw new Error(`Missing closing parenthesis in :${e} (${t})`)
;n+=1}else{if(a=i(),ue.has(e)){
const e=a.charCodeAt(0)
;e===a.charCodeAt(a.length-1)&&fe(e)&&(a=a.slice(1,-1))
}a=de(a)}r.push({type:te.Pseudo,name:e,data:a})
;break}case 44:d(),r=[],a(1);break;default:{
if(t.startsWith("/*",n)){
const e=t.indexOf("*/",n+2)
;if(e<0)throw new Error("Comment was not terminated")
;n=e+2,0===r.length&&a(0);break}let i,s=null
;if(42===e)n+=1,i="*";else if(124===e){
if(i="",124===t.charCodeAt(n+1)){
u(te.ColumnCombinator),a(2);break}}else{
if(!ae.test(t.slice(n)))break e;i=o(0)}
124===t.charCodeAt(n)&&124!==t.charCodeAt(n+1)&&(s=i,
42===t.charCodeAt(n+1)?(i="*",
n+=2):i=o(1)),r.push("*"===i?{type:te.Universal,
namespace:s}:{type:te.Tag,name:i,namespace:s})}}}
return d(),n}
const me=new Map([[te.Universal,50],[te.Tag,30],[te.Attribute,1],[te.Pseudo,0]])
;function be(e){return!me.has(e.type)}
const ve=new Map([[ne.Exists,10],[ne.Equals,8],[ne.Not,7],[ne.Start,6],[ne.End,6],[ne.Any,5]])
;function ye(e){const t=e.map(Ce)
;for(let n=1;n<e.length;n++){const r=t[n]
;if(!(r<0))for(let o=n-1;o>=0&&r<t[o];o--){
const n=e[o+1]
;e[o+1]=e[o],e[o]=n,t[o+1]=t[o],t[o]=r}}}
function Ce(e){var t,n
;let r=null!==(t=me.get(e.type))&&void 0!==t?t:-1
;return e.type===te.Attribute?(r=null!==(n=ve.get(e.action))&&void 0!==n?n:4,
e.action===ne.Equals&&"id"===e.name&&(r=9),
e.ignoreCase&&(r>>=1)):e.type===te.Pseudo&&(e.data?"has"===e.name||"contains"===e.name?r=0:Array.isArray(e.data)?(r=Math.min(...e.data.map((e=>Math.min(...e.map(Ce))))),
r<0&&(r=0)):r=2:r=3),r}
const Ae=/[-[\]{}()*+?.,\\^$|#\s]/g
;function we(e){return e.replace(Ae,"\\$&")}
const xe=new Set(["accept","accept-charset","align","alink","axis","bgcolor","charset","checked","clear","codetype","color","compact","declare","defer","dir","direction","disabled","enctype","face","frame","hreflang","http-equiv","lang","language","link","media","method","multiple","nohref","noresize","noshade","nowrap","readonly","rel","rev","rules","scope","scrolling","selected","shape","target","text","type","valign","valuetype","vlink"])
;function Ee(e,t){
return"boolean"==typeof e.ignoreCase?e.ignoreCase:"quirks"===e.ignoreCase?!!t.quirksMode:!t.xmlMode&&xe.has(e.name)
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
;if(/\s/.test(a))return oe.falseFunc
;const i=new RegExp(`(?:^|\\s)${we(a)}(?:$|\\s)`,Ee(t,n)?"i":"")
;return function(t){
const n=r.getAttributeValue(t,o)
;return null!=n&&n.length>=a.length&&i.test(n)&&e(t)
}},
exists:(e,{name:t},{adapter:n})=>r=>n.hasAttrib(r,t)&&e(r),
start(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t;const i=a.length
;return 0===i?oe.falseFunc:Ee(t,n)?(a=a.toLowerCase(),
t=>{const n=r.getAttributeValue(t,o)
;return null!=n&&n.length>=i&&n.substr(0,i).toLowerCase()===a&&e(t)
}):t=>{var n
;return!!(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.startsWith(a))&&e(t)
}},end(e,t,n){const{adapter:r}=n,{name:o}=t
;let{value:a}=t;const i=-a.length
;return 0===i?oe.falseFunc:Ee(t,n)?(a=a.toLowerCase(),
t=>{var n
;return(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.substr(i).toLowerCase())===a&&e(t)
}):t=>{var n
;return!!(null===(n=r.getAttributeValue(t,o))||void 0===n?void 0:n.endsWith(a))&&e(t)
}},any(e,t,n){
const{adapter:r}=n,{name:o,value:a}=t
;if(""===a)return oe.falseFunc;if(Ee(t,n)){
const t=new RegExp(we(a),"i");return function(n){
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
},Te=new Set([9,10,12,13,32]),Fe="0".charCodeAt(0),ke="9".charCodeAt(0)
;function Ne(e){return function(e){
const t=e[0],n=e[1]-1
;if(n<0&&t<=0)return oe.falseFunc
;if(-1===t)return e=>e<=n;if(0===t)return e=>e===n
;if(1===t)return n<0?oe.trueFunc:e=>e>=n
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
;for(;t<e.length&&e.charCodeAt(t)>=Fe&&e.charCodeAt(t)<=ke;)r=10*r+(e.charCodeAt(t)-Fe),
t++;return t===n?null:r}function s(){
for(;t<e.length&&Te.has(e.charCodeAt(t));)t++}
}(e))}function De(e,t){return n=>{
const r=t.getParent(n)
;return null!=r&&t.isTag(r)&&e(n)}}const Oe={
contains:(e,t,{adapter:n})=>function(r){
return e(r)&&n.getText(r).includes(t)},
icontains(e,t,{adapter:n}){const r=t.toLowerCase()
;return function(t){
return e(t)&&n.getText(t).toLowerCase().includes(r)
}},"nth-child"(e,t,{adapter:n,equals:r}){
const o=Ne(t)
;return o===oe.falseFunc?oe.falseFunc:o===oe.trueFunc?De(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=0;e<a.length&&!r(t,a[e]);e++)n.isTag(a[e])&&i++
;return o(i)&&e(t)}},
"nth-last-child"(e,t,{adapter:n,equals:r}){
const o=Ne(t)
;return o===oe.falseFunc?oe.falseFunc:o===oe.trueFunc?De(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=a.length-1;e>=0&&!r(t,a[e]);e--)n.isTag(a[e])&&i++
;return o(i)&&e(t)}},
"nth-of-type"(e,t,{adapter:n,equals:r}){
const o=Ne(t)
;return o===oe.falseFunc?oe.falseFunc:o===oe.trueFunc?De(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=0;e<a.length;e++){const o=a[e]
;if(r(t,o))break
;n.isTag(o)&&n.getName(o)===n.getName(t)&&i++}
return o(i)&&e(t)}},
"nth-last-of-type"(e,t,{adapter:n,equals:r}){
const o=Ne(t)
;return o===oe.falseFunc?oe.falseFunc:o===oe.trueFunc?De(e,n):function(t){
const a=n.getSiblings(t);let i=0
;for(let e=a.length-1;e>=0;e--){const o=a[e]
;if(r(t,o))break
;n.isTag(o)&&n.getName(o)===n.getName(t)&&i++}
return o(i)&&e(t)}},root:(e,t,{adapter:n})=>t=>{
const r=n.getParent(t)
;return(null==r||!n.isTag(r))&&e(t)},
scope(e,t,n,r){const{equals:o}=n
;return r&&0!==r.length?1===r.length?t=>o(r[0],t)&&e(t):t=>r.includes(t)&&e(t):Oe.root(e,t,n)
},hover:Me("isHovered"),visited:Me("isVisited"),
active:Me("isActive")};function Me(e){
return function(t,n,{adapter:r}){const o=r[e]
;return"function"!=typeof o?oe.falseFunc:function(e){
return o(e)&&t(e)}}}const Pe={
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
};function Le(e,t,n,r){if(null===n){
if(e.length>r)throw new Error(`Pseudo-class :${t} requires an argument`)
}else if(e.length===r)throw new Error(`Pseudo-class :${t} doesn't have any arguments`)
}const qe={"any-link":":is(a, area, link)[href]",
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
},Ie={};function $e(e,t){
return e===oe.falseFunc?oe.falseFunc:n=>t.isTag(n)&&e(n)
}function Ue(e,t){const n=t.getSiblings(e)
;if(n.length<=1)return[];const r=n.indexOf(e)
;return r<0||r===n.length-1?[]:n.slice(r+1).filter(t.isTag)
}function Re(e){return{xmlMode:!!e.xmlMode,
lowerCaseAttributeNames:!!e.lowerCaseAttributeNames,
lowerCaseTags:!!e.lowerCaseTags,
quirksMode:!!e.quirksMode,
cacheResults:!!e.cacheResults,pseudos:e.pseudos,
adapter:e.adapter,equals:e.equals}}
const je=(e,t,n,r,o)=>{const a=o(t,Re(n),r)
;return a===oe.trueFunc?e:a===oe.falseFunc?oe.falseFunc:t=>a(t)&&e(t)
},_e={is:je,matches:je,where:je,not(e,t,n,r,o){
const a=o(t,Re(n),r)
;return a===oe.falseFunc?e:a===oe.trueFunc?oe.falseFunc:t=>!a(t)&&e(t)
},has(e,t,n,r,o){const{adapter:a}=n,i=Re(n)
;i.relativeSelector=!0
;const s=t.some((e=>e.some(be)))?[Ie]:void 0,l=o(t,i,s)
;if(l===oe.falseFunc)return oe.falseFunc
;const u=$e(l,a);if(s&&l!==oe.trueFunc){
const{shouldTestNextSiblings:t=!1}=l;return n=>{
if(!e(n))return!1;s[0]=n
;const r=a.getChildren(n),o=t?[...r,...Ue(n,a)]:r
;return a.existsOne(u,o)}}
return t=>e(t)&&a.existsOne(u,a.getChildren(t))}}
;function Ge(e,t){const n=t.getParent(e)
;return n&&t.isTag(n)?n:null}
function Ve(e,t,n,r,o){const{adapter:a,equals:i}=n
;switch(t.type){case te.PseudoElement:
throw new Error("Pseudo-elements are not supported by css-select")
;case te.ColumnCombinator:
throw new Error("Column combinators are not yet supported by css-select")
;case te.Attribute:
if(null!=t.namespace)throw new Error("Namespaced attributes are not yet supported by css-select")
;return n.xmlMode&&!n.lowerCaseAttributeNames||(t.name=t.name.toLowerCase()),
Se[t.action](e,t,n);case te.Pseudo:
return function(e,t,n,r,o){var a
;const{name:i,data:s}=t;if(Array.isArray(s)){
if(!(i in _e))throw new Error(`Unknown pseudo-class :${i}(${s})`)
;return _e[i](e,s,n,r,o)}
const l=null===(a=n.pseudos)||void 0===a?void 0:a[i],u="string"==typeof l?l:qe[i]
;if("string"==typeof u){
if(null!=s)throw new Error(`Pseudo ${i} doesn't have any arguments`)
;const t=he(u);return _e.is(e,t,n,r,o)}
if("function"==typeof l)return Le(l,i,s,1),
t=>l(t,s)&&e(t);if(i in Oe)return Oe[i](e,s,n,r)
;if(i in Pe){const t=Pe[i]
;return Le(t,i,s,2),r=>t(r,n,s)&&e(r)}
throw new Error(`Unknown pseudo-class :${i}`)
}(e,t,n,r,o);case te.Tag:{
if(null!=t.namespace)throw new Error("Namespaced tag names are not yet supported by css-select")
;let{name:r}=t
;return n.xmlMode&&!n.lowerCaseTags||(r=r.toLowerCase()),function(t){
return a.getName(t)===r&&e(t)}}case te.Descendant:
{
if(!1===n.cacheResults||"undefined"==typeof WeakSet)return function(t){
let n=t;for(;n=Ge(n,a);)if(e(n))return!0;return!1}
;const t=new WeakSet;return function(n){let r=n
;for(;r=Ge(r,a);)if(!t.has(r)){
if(a.isTag(r)&&e(r))return!0;t.add(r)}return!1}}
case"_flexibleDescendant":return function(t){
let n=t;do{if(e(n))return!0}while(n=Ge(n,a))
;return!1};case te.Parent:return function(t){
return a.getChildren(t).some((t=>a.isTag(t)&&e(t)))
};case te.Child:return function(t){
const n=a.getParent(t)
;return null!=n&&a.isTag(n)&&e(n)}
;case te.Sibling:return function(t){
const n=a.getSiblings(t)
;for(let r=0;r<n.length;r++){const o=n[r]
;if(i(t,o))break;if(a.isTag(o)&&e(o))return!0}
return!1};case te.Adjacent:
return a.prevElementSibling?function(t){
const n=a.prevElementSibling(t)
;return null!=n&&e(n)}:function(t){
const n=a.getSiblings(t);let r
;for(let e=0;e<n.length;e++){const o=n[e]
;if(i(t,o))break;a.isTag(o)&&(r=o)}return!!r&&e(r)
};case te.Universal:
if(null!=t.namespace&&"*"!==t.namespace)throw new Error("Namespaced universal selectors are not yet supported by css-select")
;return e}}function We(e,t,n){
return Ze("string"==typeof e?he(e):e,t,n)}
function Be(e){
return e.type===te.Pseudo&&("scope"===e.name||Array.isArray(e.data)&&e.data.some((e=>e.some(Be))))
}const He={type:te.Descendant},Ye={
type:"_flexibleDescendant"},ze={type:te.Pseudo,
name:"scope",data:null};function Ze(e,t,n){var r
;e.forEach(ye),n=null!==(r=t.context)&&void 0!==r?r:n
;const o=Array.isArray(n),a=n&&(Array.isArray(n)?n:[n])
;if(!1!==t.relativeSelector)!function(e,{adapter:t},n){
const r=!!(null==n?void 0:n.every((e=>{
const n=t.isTag(e)&&t.getParent(e)
;return e===Ie||n&&t.isTag(n)})))
;for(const t of e){
if(t.length>0&&be(t[0])&&t[0].type!==te.Descendant);else{
if(!r||t.some(Be))continue;t.unshift(He)}
t.unshift(ze)}
}(e,t,a);else if(e.some((e=>e.length>0&&be(e[0]))))throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled")
;let i=!1;const s=e.map((e=>{if(e.length>=2){
const[t,n]=e
;t.type!==te.Pseudo||"scope"!==t.name||(o&&n.type===te.Descendant?e[1]=Ye:n.type!==te.Adjacent&&n.type!==te.Sibling||(i=!0))
}return function(e,t,n){var r
;return e.reduce(((e,r)=>e===oe.falseFunc?oe.falseFunc:Ve(e,r,t,n,Ze)),null!==(r=t.rootFunc)&&void 0!==r?r:oe.trueFunc)
}(e,t,a)})).reduce(Xe,oe.falseFunc)
;return s.shouldTestNextSiblings=i,s}
function Xe(e,t){
return t===oe.falseFunc||e===oe.trueFunc?e:e===oe.falseFunc||t===oe.trueFunc?t:function(n){
return e(n)||t(n)}}const Je=(e,t)=>e===t,Ke={
adapter:re,equals:Je};function Qe(e){var t,n,r,o
;const a=null!=e?e:Ke
;return null!==(t=a.adapter)&&void 0!==t||(a.adapter=re),null!==(n=a.equals)&&void 0!==n||(a.equals=null!==(o=null===(r=a.adapter)||void 0===r?void 0:r.equals)&&void 0!==o?o:Je),
a}const et=(tt=function(e,t,n){
return $e(We(e,t,n),t.adapter)},function(e,t,n){
const r=Qe(t);return tt(e,r,n)});var tt
;function nt(e){return function(t,n,r){
const o=Qe(r);"function"!=typeof t&&(t=We(t,o,n))
;const a=function(e,t,n=!1){n&&(e=function(e,t){
const n=Array.isArray(e)?e.slice(0):[e],r=n.length
;for(let e=0;e<r;e++){const r=Ue(n[e],t)
;n.push(...r)}return n}(e,t))
;return Array.isArray(e)?t.removeSubsets(e):t.getChildren(e)
}(n,o.adapter,t.shouldTestNextSiblings)
;return e(t,a,o)}}
const rt=nt(((e,t,n)=>e!==oe.falseFunc&&t&&0!==t.length?n.adapter.findAll(e,t):[])),ot=nt(((e,t,n)=>e!==oe.falseFunc&&t&&0!==t.length?n.adapter.findOne(e,t):null))
;var at=new Map;function it(e){var t=at.get(e)
;return t||(t=et(e),at.set(e,t)),t}
function st(e,t,n,r){var o=rt(it(t),e)
;if(null!=n&&o.length<n)throw new Error("elems.length (".concat(o.length,") < ").concat(n," for: ").concat(t))
;if(null!=r&&o.length>r)throw new Error("elems.length (".concat(o.length,") > ").concat(n," for: ").concat(t))
;return o}function lt(e,t){
return e?(null!=(n=(null==t?void 0:t.separator)&&Array.isArray(e)?e.map((function(t){
return L(e)
})).join(null==t?void 0:t.separator):e&&L(e))&&(null==t?void 0:t.transform)&&(n=null==t?void 0:t.transform(n)),
n):null;var n}function ut(e,t,n){
var r=null==t?e:new Date(e.toLocaleString("en-US",{
timeZone:t
})),o=null==n?e:new Date(e.toLocaleString("en-US",{
timeZone:n}))
;return new Date(e.getTime()+o.getTime()-r.getTime())
}
var ct="0a66b184c2bb4c8fae1d34525c6399a8",dt="/53d2f4a13de341eda24673cbd677bbd6/"
;return e.EMPTY_HOST=ct,
e.EMPTY_PATH=dt,e.assertIsFinite=function(e){
if(!Number.isFinite(e))throw new Error("value is not finite: ".concat(e))
;return e
},e.convertTimeZone=ut,e.cropText=function(e,t,n){
var r,o,a,i=void 0===n?{}:n,s=i.ellipsis,l=void 0===s?"…":s,u=i.cropHead,c=void 0!==u&&u,d=i.removeCroppedWord,f=void 0===d||d
;return e.length>t&&(c?(null==(a=f?null===(r=new RegExp("(?<=\\s|^)(?=\\S.{0,".concat(t-l.length-1,"}$)"),"s").exec(e))||void 0===r?void 0:r.index:null)&&(a=e.length-t+l.length),
e=a>=e.length?e.substring(e.length-t):l+e.substring(a)):(null==(a=f?null===(o=new RegExp("(^.{0,".concat(t-l.length-1,"}\\S)(\\s|$)"),"s").exec(e))||void 0===o?void 0:o[1].length:null)&&(a=t-l.length),
e=a<=0?e.substring(0,t):e.substring(0,a)+l)),e
},e.dateToString=function(e,t){
var n=(e=ut(e,"UTC",t)).getUTCFullYear().toString().padStart(4,"0"),r=(e.getUTCMonth()+1).toString().padStart(2,"0"),o=e.getUTCDate().toString().padStart(2,"0"),a=e.getUTCHours().toString().padStart(2,"0"),i=e.getUTCMinutes().toString().padStart(2,"0"),s=e.getUTCSeconds().toString().padStart(2,"0")
;return"".concat(n,"-").concat(r,"-").concat(o," ").concat(a,":").concat(i,":").concat(s)
},
e.getSelector=it,e.innerText=lt,e.innerTextNotEmpty=function(e,t){
var n=lt(e,t)
;if(!n)throw new Error("innerText is empty")
;return n},e.parseNumberFloat=function(e){
var t=parseFloat(e)
;if(!Number.isFinite(t))throw new Error("value is not finite: ".concat(e))
;return t},e.parseNumberInt=function(e){
var t=parseInt(e,10)
;if(!Number.isFinite(t))throw new Error("value is not finite: ".concat(e))
;return t},e.removeExtraSpaces=function(e,t){
var n=void 0===t?{}:t,r=n.keepLines,o=n.noTrim
;return e?(e=r?(e=(e=e.replace(/[^\S\n]+/g," ")).replace(/[^\S\n]+(?=\n)|(?<=\n)[^\S\n]+/g,"")).replace(new RegExp("(?<=\n{".concat(r,"})\n+"),"g"),""):e.replace(/\s+/g," "),
o||(e=e.trim()),e):e
},e.selectAll=st,e.selectFirst=function(e,t){
var n=ot(it(t),e)
;if(!n)throw new Error("elem not found for: ".concat(t))
;return n},e.selectFirstOrNull=function(e,t){
var n=st(e,t);return n.length?n[0]:null
},e.selectOne=function(e,t){return st(e,t,1,1)[0]
},e.selectOneOrNull=function(e,t){
var n=st(e,t,0,1);return n.length?n[0]:null
},e.urlJoin=function(){
for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
;for(var n=new URL("http://".concat(ct).concat(dt)),r=!1,o=0,a=e.length;o<a;o++){
var i=e[o]
;i&&("string"==typeof i&&/^\w+:\/\//.test(i)&&(r=!0),n=new URL(i,n))
}var s=function(e,t){
var n="function"==typeof Symbol&&e[Symbol.iterator]
;if(!n)return e;var r,o,a=n.call(e),i=[];try{
for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)
}catch(e){o={error:e}}finally{try{
r&&!r.done&&(n=a.return)&&n.call(a)}finally{
if(o)throw o.error}}return i
}(n.href.match(/((?:\?[^#+]*)?)((?:#.*)?)$/s),3),l=s[1],u=s[2]
;return n.pathname.startsWith(dt)?n.pathname.substring(dt.length)+l+u:n.host===ct?n.pathname+l+u:r?n.href:"//"+n.host+n.pathname+l+u
},Object.defineProperty(e,"__esModule",{value:!0
}),e}({});
