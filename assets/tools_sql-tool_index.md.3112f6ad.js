import{c as tt,g as et,E as M}from"./chunks/index.b58c256d.js";import{_ as nt,Z as rt,C as T,o as H,c as I,H as g,w as E,a as F}from"./chunks/framework.421c57a2.js";import"./chunks/index.a9f531e0.js";var U={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(C,h){(function(b,m){C.exports=m()})(tt,function(){return function(){var A={686:function(s,o,t){t.d(o,{default:function(){return W}});var u=t(279),c=t.n(u),f=t(370),v=t.n(f),y=t(817),x=t.n(y);function d(a){try{return document.execCommand(a)}catch{return!1}}var _=function(n){var e=x()(n);return d("cut"),e},p=_;function S(a){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=a,e}var D=function(n,e){var r=S(n);e.container.appendChild(r);var i=x()(r);return d("copy"),r.remove(),i},B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=D(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=D(n.value,e):(r=x()(n),d("copy")),r},j=B;function k(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(a)}var q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,i=n.container,l=n.target,w=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(l!==void 0)if(l&&k(l)==="object"&&l.nodeType===1){if(r==="copy"&&l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(l.hasAttribute("readonly")||l.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(w)return j(w,{container:i});if(l)return r==="cut"?p(l):j(l,{container:i})},z=q;function O(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(a)}function Y(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function V(a,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function $(a,n,e){return n&&V(a.prototype,n),e&&V(a,e),a}function G(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&N(a,n)}function N(a,n){return N=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},N(a,n)}function J(a){var n=K();return function(){var r=L(a),i;if(n){var l=L(this).constructor;i=Reflect.construct(r,arguments,l)}else i=r.apply(this,arguments);return X(this,i)}}function X(a,n){return n&&(O(n)==="object"||typeof n=="function")?n:Z(a)}function Z(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function K(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(a){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(a)}function R(a,n){var e="data-clipboard-".concat(a);if(n.hasAttribute(e))return n.getAttribute(e)}var Q=function(a){G(e,a);var n=J(e);function e(r,i){var l;return Y(this,e),l=n.call(this),l.resolveOptions(i),l.listenClick(r),l}return $(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=O(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var l=this;this.listener=v()(i,"click",function(w){return l.onClick(w)})}},{key:"onClick",value:function(i){var l=i.delegateTarget||i.currentTarget,w=this.action(l)||"copy",P=z({action:w,container:this.container,target:this.target(l),text:this.text(l)});this.emit(P?"success":"error",{action:w,text:P,trigger:l,clearSelection:function(){l&&l.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return R("action",i)}},{key:"defaultTarget",value:function(i){var l=R("target",i);if(l)return document.querySelector(l)}},{key:"defaultText",value:function(i){return R("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return j(i,l)}},{key:"cut",value:function(i){return p(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],l=typeof i=="string"?[i]:i,w=!!document.queryCommandSupported;return l.forEach(function(P){w=w&&!!document.queryCommandSupported(P)}),w}}]),e}(c()),W=Q},828:function(s){var o=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(c,f){for(;c&&c.nodeType!==o;){if(typeof c.matches=="function"&&c.matches(f))return c;c=c.parentNode}}s.exports=u},438:function(s,o,t){var u=t(828);function c(y,x,d,_,p){var S=v.apply(this,arguments);return y.addEventListener(d,S,p),{destroy:function(){y.removeEventListener(d,S,p)}}}function f(y,x,d,_,p){return typeof y.addEventListener=="function"?c.apply(null,arguments):typeof d=="function"?c.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(S){return c(S,x,d,_,p)}))}function v(y,x,d,_){return function(p){p.delegateTarget=u(p.target,x),p.delegateTarget&&_.call(y,p)}}s.exports=f},879:function(s,o){o.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},o.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||o.node(t[0]))},o.string=function(t){return typeof t=="string"||t instanceof String},o.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(s,o,t){var u=t(879),c=t(438);function f(d,_,p){if(!d&&!_&&!p)throw new Error("Missing required arguments");if(!u.string(_))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return v(d,_,p);if(u.nodeList(d))return y(d,_,p);if(u.string(d))return x(d,_,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function v(d,_,p){return d.addEventListener(_,p),{destroy:function(){d.removeEventListener(_,p)}}}function y(d,_,p){return Array.prototype.forEach.call(d,function(S){S.addEventListener(_,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(S){S.removeEventListener(_,p)})}}}function x(d,_,p){return c(document.body,d,_,p)}s.exports=f},817:function(s){function o(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),v=document.createRange();v.selectNodeContents(t),f.removeAllRanges(),f.addRange(v),u=f.toString()}return u}s.exports=o},279:function(s){function o(){}o.prototype={on:function(t,u,c){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:u,ctx:c}),this},once:function(t,u,c){var f=this;function v(){f.off(t,v),u.apply(c,arguments)}return v._=u,this.on(t,v,c)},emit:function(t){var u=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),f=0,v=c.length;for(f;f<v;f++)c[f].fn.apply(c[f].ctx,u);return this},off:function(t,u){var c=this.e||(this.e={}),f=c[t],v=[];if(f&&u)for(var y=0,x=f.length;y<x;y++)f[y].fn!==u&&f[y].fn._!==u&&v.push(f[y]);return v.length?c[t]=v:delete c[t],this}},s.exports=o,s.exports.TinyEmitter=o}},b={};function m(s){if(b[s])return b[s].exports;var o=b[s]={exports:{}};return A[s](o,o.exports,m),o.exports}return function(){m.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return m.d(o,{a:o}),o}}(),function(){m.d=function(s,o){for(var t in o)m.o(o,t)&&!m.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:o[t]})}}(),function(){m.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)}}(),m(686)}().default})})(U);var ot=U.exports;const it=et(ot),at=C=>{const h=(C==null?void 0:C.appendToBody)===void 0?!0:C.appendToBody;return{toClipboard(A,b){return new Promise((m,s)=>{const o=document.createElement("button"),t=new it(o,{text:()=>A,action:()=>"copy",container:b!==void 0?b:document.body});t.on("success",u=>{t.destroy(),m(u)}),t.on("error",u=>{t.destroy(),s(u)}),h&&document.body.appendChild(o),o.click(),h&&document.body.removeChild(o)})}}};const ut={__name:"index",setup(C){const h=rt({left_textarea:"",right_textarea:""}),A=async()=>{if((!h.left_textarea||h.left_textarea==="")&&M({message:"请先在左侧输入内容！",type:"warning"}),h.left_textarea&&h.left_textarea.length>0){h.right_textarea="in ('"+h.left_textarea.replaceAll(`\r
`,`
`).split(`
`).filter(b=>b.length>0).join("','")+"')";try{const{toClipboard:b}=at();await b(h.right_textarea),M({message:"已复制",type:"success"})}catch(b){M({message:`复制出错: ${b}`,type:"error"})}}};return(b,m)=>{const s=T("el-text"),o=T("el-col"),t=T("el-row"),u=T("el-header"),c=T("el-input"),f=T("el-main"),v=T("el-button"),y=T("el-footer"),x=T("el-container");return H(),I("div",null,[g(x,null,{default:E(()=>[g(u,null,{default:E(()=>[g(t,{gutter:20,justify:"center"},{default:E(()=>[g(o,{span:24},{default:E(()=>[g(s,{type:"primary",size:"large"},{default:E(()=>[F("Sql处理工具")]),_:1})]),_:1})]),_:1})]),_:1}),g(f,null,{default:E(()=>[g(t,{gutter:20,justify:"center"},{default:E(()=>[g(o,{span:12},{default:E(()=>[g(c,{modelValue:h.left_textarea,"onUpdate:modelValue":m[0]||(m[0]=d=>h.left_textarea=d),rows:25,type:"textarea",placeholder:"支持各种表格列数据..."},null,8,["modelValue"])]),_:1}),g(o,{span:12},{default:E(()=>[g(c,{modelValue:h.right_textarea,"onUpdate:modelValue":m[1]||(m[1]=d=>h.right_textarea=d),rows:25,type:"textarea",placeholder:"转换后..."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),g(y,null,{default:E(()=>[g(t,{gutter:20,justify:"center"},{default:E(()=>[g(o,{span:24},{default:E(()=>[g(v,{type:"success",onClick:A},{default:E(()=>[F(" 转换 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}},ct=nt(ut,[["__scopeId","data-v-cc61feb1"]]),yt=JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"tools/sql-tool/index.md","filePath":"tools/sql-tool/index.md","lastUpdated":1711337229000}'),lt={name:"tools/sql-tool/index.md"},vt=Object.assign(lt,{setup(C){return(h,A)=>(H(),I("div",null,[g(ct)]))}});export{yt as __pageData,vt as default};
