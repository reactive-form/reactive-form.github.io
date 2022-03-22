/*!
 * rcfm 0.3.0-beta.5 | Helper iife | https://jilinxiangyun.com
 * Copyright 2021 - 2022 JLxiangyun | MIT license
 */
(()=>{var He=Object.create;var L=Object.defineProperty,Be=Object.defineProperties,Ee=Object.getOwnPropertyDescriptor,Ae=Object.getOwnPropertyDescriptors,Re=Object.getOwnPropertyNames,re=Object.getOwnPropertySymbols,ke=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var G=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&G(e,r,t[r]);if(re)for(var r of re(t))$e.call(t,r)&&G(e,r,t[r]);return e},q=(e,t)=>Be(e,Ae(t)),Me=e=>L(e,"__esModule",{value:!0});var v=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var Le=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Re(t))!ne.call(e,n)&&n!=="default"&&L(e,n,{get:()=>t[n],enumerable:!(r=Ee(t,n))||r.enumerable});return e},T=e=>Le(Me(L(e!=null?He(ke(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ie=(e,t,r)=>(G(e,typeof t!="symbol"?t+"":t,r),r);(()=>{let e=window.require;window.require=t=>e&&e(t)||{rcfm:window.ReactiveForm,"rcfm/helper":{UI:window.ReactiveForm.UI}}[t]})();function O(e={},t={}){return e._installer||(e._installer=h({},t))}var J=class{constructor(){O(this,{installed:{}})}static create(...t){return new J(...t)}},x=J;ie(x,"exceptions",{CONFLICTED_NAME:"UI_INSTALLER_CONFLICTED_NAME",NOT_FOUND:"UI_INSTALLER_TARGET_NOT_FOUND"});x.prototype.has=function(e=""){let t=O(this).installed;return e in t};var k=T(v("rcfm"));x.prototype.install=function(e={}){let t=e.name,r=e.Component||e.component||e.render,n="force"in e?e.force:!1;k.Type.mustbe.nonblankString(t,"UI installer name"),k.Type.mustbe.boolean(n,"UI installer force option"),k.Type.mustbe.function(r,"UI installer component");let i=O(this).installed;!n&&t in i&&k.Exception.raise({type:x.exceptions.CONFLICTED_NAME,message:`Componet '${t}' has been occupied.
             Please set 'force' to true if the existed
             component should be replaced.`}),i[t]={name:t,force:n,render:r}};var le=T(v("rcfm"));x.prototype.use=function(e=""){let t=O(this).installed;if(e in t)return t[e].render;le.Exception.raise({type:x.exceptions.NOT_FOUND,message:`Component '${e}' is not installed.`})};var V=T(v("rcfm"));x.prototype.try=function(e=[]){V.Type.isnt.array(e)&&(e=[e]);let t=null;if(!e.length)return t=null;if(e.some(n=>{try{return t=this.use(n),!0}catch(i){return t=null,!1}}),t)return t;let r=`None of Component '${JSON.stringify(e)}' is installed.`;V.Exception.raise({type:x.exceptions.NOT_FOUND,message:r})};var P=T(v("rcfm"));function Ve(e){P.Context.mustbeContext(e)}function _e(e){P.Type.mustbe.object(e),P.Type.mustbe.nonblankString(e.id)}function Ue(e){P.Exception.mustbeException(e)}function Z(e={},t="",r={}){let n=[void 0,null],i="default"in r?r.default:void 0,l="dataType"in r?r.dataType:null,o="required"in r?r.required:!1,a="validate"in r?r.validate:null,u=(()=>P.Type.within({type:"Boolean",types:l})?t in e?n.includes(e[t])?!0:e[t]:i:n.includes(e[t])?i:e[t])();return o&&n.includes(u)&&P.Exception.raise(`${t} is required.`),n.includes(u)||(l&&P.Type.mustWithin({type:P.Type.get(u),types:l},`Data type of "${t}" must be within ${JSON.stringify(l)}`),t==="reactive"&&Ve(u),t==="member"&&_e(u),t==="exception"&&Ue(u),a&&a(u)),u}function c(e={},t={}){let r=Object.keys(t);return Object.assign({customProps:P.Struct.object.exclude(e,r)},P.Struct.object.from(r.map(n=>[n,Z(e,n,t[n])])))}var Y=T(v("rcfm"));function C(...e){return e.map(t=>{let r=Y.Type.is.object(t)&&t.root||"",n=Y.Type.is.object(t)?[t.klass]:[t];return n=n.flat(1/0).filter(i=>i),n.map(i=>r?`${r}-${i}`:i)}).flat(1/0).join(" ")}var K=T(v("rcfm"));var De={form:{boolean:{option:{true:"Yes",false:"No"}}}},oe=De;var ze={form:{boolean:{option:{true:"\u662F",false:"\u5426"}}}},ae=ze;K.I18n.global.define({en:{component:oe},zh:{component:ae}});var Q=K.I18n.global;var Lt=T(v("rcfm"));var We=(()=>{function e(r={}){let n=c(r,{type:{dataType:"String",default:"button"},variant:{dataType:"String",default:""},color:{dataType:"String",default:"primary"},size:{dataType:"String",default:""},tabindex:{dataType:"String",default:""},onClick:{dataType:"Function",default:null},fluid:{dataType:"Boolean",default:!1},circle:{dataType:"Boolean",default:!1},active:{dataType:"Boolean",default:!1},disabled:{dataType:"Boolean",default:!1},icon:{dataType:["String","Boolean"],default:""},topIcon:{dataType:["String","Boolean"],default:""},leftIcon:{dataType:["String","Boolean"],default:""},rightIcon:{dataType:["String","Boolean"],default:""}});return n.disabled&&(n.onClick=null),n}function t(r={}){let{variant:n,color:i,size:l,circle:o,active:a,fluid:u,icon:p,topIcon:d,leftIcon:I,rightIcon:F}=e(r);return C({root:"rcfm-component-btn",klass:[n?`${n}-${i}`:`${i}`,l||"",u?"fluid":"",o?"circle":"",a?"active":""]},{root:"rcfm-component-btn-ico",klass:(()=>{if(p)return"middle";if(d)return"top";if(I)return"left";if(F)return"right"})()},r.className)}return{joinWrapperClass:t,getProps:e}})(),Ge=(()=>{function e(r={}){return c(r,{fluid:{type:"Boolean",default:!1},vertical:{type:"Boolean",default:!1}})}function t(r={}){let{vertical:n,fluid:i}=e(r);return C({root:"rcfm-component-btngroup",klass:[n?"y":"x",i?"fluid":""]},r.className)}return{joinWrapperClass:t,getProps:e}})(),ue=q(h({},We),{Group:Ge});var se=T(v("rcfm"));var Je=(()=>{function e(t={}){let r=c(t,{title:{dataType:"String",default:""},labels:{dataType:"Array",default:[]},activeIndex:{dataType:"Number",default:0,validate(l){se.Type.mustbe.integer(l)}},onSwitch:{dataType:"Function",default:null}}),[n,i]=[0,r.labels.length-1];return r.activeIndex>i&&(r.activeIndex=i),r.activeIndex<n&&(r.activeIndex=n),r}return{getProps:e}})(),ce=Je;var pe=T(v("rcfm"));var Ze=(()=>{function e(l={}){let o=c(l,{required:{dataType:"Boolean",default:!1},size:{dataType:"String",default:""},label:{dataType:"String",default:""},hint:{dataType:"String",default:""},error:{dataType:["String","Array"],default:""}});return o.error=(()=>{let a=o.error;return pe.Type.isnt.array(a)&&(a=[a]),a.flat(1/0).filter(u=>u).map(u=>u.message||u.name||u)})(),o}function t(l={}){let{size:o}=e(l);return C("rcfm-component-fmfield",{root:"rcfm-component-fmfield",klass:[o||""]},"rcfm-fmtag",l.className)}function r(l={}){let{size:o,required:a}=e(l);return C("rcfm-component-fmlabel",{root:"rcfm-component-fmlabel",klass:[o||"",a?"required":""]},"rcfm-fmtag")}function n(l={}){let{size:o}=e(l);return C("rcfm-component-fmhint",{root:"rcfm-component-fmhint",klass:[o||""]},"rcfm-fmtag")}function i(l={}){let{size:o}=e(l);return C("rcfm-component-fmerror",{root:"rcfm-component-fmerror",klass:[o||""]},"rcfm-fmtag")}return{getProps:e,joinWrapperClass:t,joinLabelClass:r,joinHintClass:n,joinErrorClass:i}})(),de=Ze;var B=T(v("rcfm"));var E={id:{dataType:"String",default:""},name:{dataType:"String",default:""},invalid:{dataType:"Boolean",default:!1},disabled:{dataType:"Boolean",default:!1},readonly:{dataType:"Boolean",default:!1},size:{dataType:"String",default:""},onChange:{dataType:"Function",default:null}};function $(e={}){let{size:t,invalid:r}=c(e,E);return C({root:"rcfm-component-fm",klass:[t||"",r?"invalid":""]},"rcfm-fmtag",e.className)}var X=(()=>{function e(t={}){return c(t,q(h({},E),{type:{dataType:"String",default:""},value:{default:""},placeholder:{dataType:"String",default:""},multiline:{dataType:"Boolean",default:!1}}))}return{getProps:e,joinModifierClass:$}})(),ee=(()=>{function e(t={}){return c(t,q(h({},E),{value:{default:NaN},placeholder:{dataType:"String",default:""}}))}return{getProps:e,joinModifierClass:$}})(),fe=(()=>{function e(t={}){return c(t,q(h({},E),{value:{default:""},options:{dataType:"Array",required:!0,validate(r){r.forEach(n=>{B.Type.mustbe.object(n)})}}}))}return{getProps:e,joinModifierClass:$}})(),me=(()=>{function e(r={}){let n=c(r,q(h({},E),{value:{default:[]},options:{dataType:"Array",required:!0,validate(i){i.forEach(l=>{B.Type.mustbe.object(l)})}}}));return B.Type.isnt.array(n.value)&&(n.value=[]),n}function t(r={}){let n=r.value.slice(),i="insert"in r?"insert":"remove",l=r[i];return i==="insert"&&n.push(l),i==="remove"&&(n=n.filter(o=>o!==l)),n}return{getProps:e,joinModifierClass:$,mutateValue:t}})(),be=(()=>{function e(r={}){return c(r,q(h({},E),{value:{default:""},placeholder:{dataType:"String",default:""},includeblank:{dataType:"Boolean",default:!1},options:{dataType:"Array",required:!0,validate(n){n.forEach(i=>{B.Type.mustbe.object(i)})}}}))}function t(r={}){var n;return((n=r.options.find(i=>i.value===r.value))==null?void 0:n.label)||""}return{getProps:e,joinModifierClass:$,findLabel:t}})(),ge=(()=>{function e(t={}){let r=c(t,q(h({},E),{value:{default:[]},options:{dataType:"Array",required:!0,validate(n){n.forEach(i=>{B.Type.mustbe.object(i)})}}}));return B.Type.isnt.array(r.value)&&(r.value=[]),r}return{getProps:e,joinModifierClass:$}})();var ye=(()=>{function e(){let t="component.form.boolean.option";return[{value:!0,label:Q.t(`${t}.true`)},{value:!1,label:Q.t(`${t}.false`)}]}return{getOptions:e}})(),he=(()=>{function e(i){return r(i)}function t(i){return function(l){i&&i(n(l))}}function r(i){if([null,void 0,NaN].includes(i))return"";if(typeof i=="string")return i;try{return JSON.stringify(i)}catch(l){return String(i)}}function n(i){if(typeof i!="string")return i;if(i.match(/^\s*$/))return null;if(i!=="undefined"){if(i==="NaN")return NaN;if(i.match(/-\s*NaN/))return NaN;if(i==="Infinity")return 1/0;if(i.match(/-\s*Infinity/))return-1/0;try{return JSON.parse(i)}catch(l){return i}}}return{decorateValue:e,decorateOnChange:t}})();var Ye={Field:de,TextInput:X,NumberInput:ee,Radios:fe,Checkboxes:me,SingleSelect:be,MultipleSelect:ge,String:X,Number:ee,Boolean:ye,Object:he},ve=Ye;var Te=T(v("rcfm"));var Ke=(()=>{function e(r={}){let n=c(r,{type:{dataType:"String",default:"info"},hint:{dataType:["String","Array"],default:[]},on:{dataType:"Boolean",default:!0}});return n.hint=(()=>{let i=n.hint;return Te.Type.isnt.array(i)&&(i=[i]),i.flat(1/0).filter(l=>l).map(l=>l.message||l.name||l)})(),n}function t(r={}){let{type:n,on:i}=e(r);return C({root:"rcfm-component-highlight",klass:[n,i?"":"off"]},r.className)}return{joinWrapperClass:t,getProps:e}})(),xe=Ke;var te=T(v("rcfm"));var Qe={member:{noProviders:"No referenceable objects",prop:{always:"Always",conditional:"Conditional",condition:{elseBranch:{resultTitle:"Else"},whenBranch:{title:"When",resultTitle:"Then",delete:"Delete Branch",add:"New Branch",logics:{and:"And",or:"Or"}}},options:{each:{labelLabel:"Label",valueLabel:"Value"}}},type:{fieldset:{label:"Fieldset"},textField:{label:"Text Field"},multilineTextField:{label:"Multiline Text"},numberField:{label:"Number Field"},radioField:{label:"Radio Field"},checkboxField:{label:"Checkbox Field"},singleSelectField:{label:"Single Select"},multipleSelectField:{label:"Multiple Select"}}}},Ce=Qe;var Xe={member:{noProviders:"\u6CA1\u6709\u53EF\u88AB\u5F15\u7528\u7684\u5BF9\u8C61",prop:{always:"\u603B\u662F",conditional:"\u6309\u6761\u4EF6",condition:{elseBranch:{resultTitle:"\u5426\u5219"},whenBranch:{title:"\u5F53",resultTitle:"\u5219",delete:"\u5220\u9664\u5206\u652F",add:"\u65B0\u589E\u5206\u652F",logics:{and:"\u4E14",or:"\u6216"}}},options:{each:{labelLabel:"\u9009\u9879\u6587\u5B57",valueLabel:"\u9009\u9879\u503C"}}},type:{fieldset:{label:"\u8F93\u5165\u9879\u96C6\u5408"},textField:{label:"\u5355\u884C\u6587\u672C"},multilineTextField:{label:"\u591A\u884C\u6587\u672C"},numberField:{label:"\u6570\u5B57\u8F93\u5165"},radioField:{label:"\u5355\u9879\u9009\u62E9"},checkboxField:{label:"\u591A\u9879\u9009\u62E9"},singleSelectField:{label:"\u4E0B\u62C9\u5355\u9009"},multipleSelectField:{label:"\u4E0B\u62C9\u591A\u9009"}}}},Pe=Xe;te.I18n.global.define({en:{section:Ce},zh:{section:Pe}});var A=te.I18n.global;var _=T(v("rcfm"));var et=(()=>{function e(l={}){return c(l,{reactive:{required:!0},member:{required:!0},onAction:{dataType:"Function",default:r}})}function t(l={}){let{reactive:o,member:a,errors:u}=c(l,{reactive:{required:!0},member:{required:!0},errors:{dataType:"Object",default:{}}});return Object.keys(u).map(p=>{let d=o.schema.for({id:a.id,prop:p}).label;return u[p].map(I=>d?`${d}: ${I.message}`:I.message)})}function r(l={}){if(l.action==="delete"){let{reactive:o,id:a}=c(l,{reactive:{required:!0},id:{required:!0}});o.delete({id:a})}else if(l.action==="update"){let{reactive:o,id:a,prop:u,value:p}=c(l,{reactive:{required:!0},id:{required:!0},prop:{required:!0},value:{required:!1}});o.set({id:a,prop:u,value:p})}else if(l.action==="add"){let{reactive:o,parentId:a,props:u}=c(l,{reactive:{required:!0},parentId:{required:!0},props:{dataType:"Object",required:!0}});o.add({parentId:a,props:u})}else _.Exception.raise({type:"MEMBER_UNSUPPORTED_ACTION",message:`Unsupported action ${l}.`})}function n(l={}){let{reactive:o,member:a}=c(l,{reactive:{required:!0},member:{required:!0}}),u=o.get({id:a.id,prop:"type"}),p=(_.Form.group(`${u}Child`)||[]).map(d=>d.type);return p=p.filter(d=>d!=="Subform"),i(p)}function i(l=[]){return l.map(o=>{let a=o[0].toLowerCase()+o.slice(1);return{type:o,label:A.t(`section.member.type.${a}.label`)}})}return{getProps:e,errorMessages:t,onAction:r,getChildTypes:n}})(),U=et;var Se=T(v("rcfm"));var tt=(()=>{function e(o={}){return c(o,{reactive:{required:!0},onAction:{dataType:"Function",default:U.onAction},member:{required:!0,validate(a){Se.Type.mustbe.nonblankString(a.prop,"Member prop")}}})}function t(o={}){let{reactive:a,member:u}=e(o);return a.schema.for(u).schemable}function r(o={}){let{reactive:a}=c(o,{reactive:{required:!0}});return a.schema.constructor.Condition.isCondition(o.value)}function n(o={}){let{reactive:a,member:u}=e(o);return o.conditional?[{when:[{}],then:a.schema.for(u).default},{else:a.schema.for(u).default}]:a.schema.for(u).default}function i(o={}){var d;let{reactive:a,member:u}=e(o),{validation:p}=a.schema.for(u);return p&&((d=p.find(I=>"dataType"in I))==null?void 0:d.dataType)||"Object"}function l(o={}){let{reactive:a,member:u}=e(o),{validation:p}=a.schema.for(u);return p?!!p.find(d=>"presence"in d):!1}return{getProps:e,getType:i,getDefault:n,isSchemable:t,isCondition:r,isRequired:l}})(),Ie=tt;var M=T(v("rcfm"));var rt=(()=>{function e(s){return M.Type.is.function(s)?s():s}function t(s={},f={},g){let m=h({},f.else),y=f.whens.slice(),{target:j,action:b,branchIndex:N,result:H}=s;return j==="else"?"result"in s&&(m.result=H):j==="when"&&(b==="delete"?y.splice(N,1):b==="append"?y.splice(N+1,0,{rules:[{logic:"",expression:{}}],result:e(g)}):b==="update"&&"result"in s&&(y[N].result=H)),{whens:y,else:m}}function r(s={},f={}){let g=h({},f.else),m=f.whens.slice(),{action:y,branchIndex:j,ruleIndex:b,logic:N,name:H,rule:z,value:W}=s,S=m.slice()[j].rules;return y==="delete"?(S.splice(b,1),b===0&&S.length&&(S[0].logic="")):y==="append"?(N=b===-1?"":"and",S.splice(b+1,0,{logic:N,expression:{}})):y==="update"&&("logic"in s&&(S[b].logic=N),"rule"in s&&(S[b].expression.rule=z),"name"in s&&(S[b].expression.name=H,S[b].expression.rule=void 0),"value"in s&&(S[b].expression.value=W,S[b].expression.name=void 0,S[b].expression.rule=void 0)),{whens:m,else:g}}function n(s={}){let f=c(s,{reactive:{required:!0},member:{required:!0},ResultComponent:{dataType:"Function",required:!0},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null},exception:{default:null},defaultResult:{default:void 0}}),m=f.reactive.schema.constructor.Condition.extract(f.value);return M.Type.is.blank(m.else.result)&&(m.else={result:e(f.defaultResult)}),(M.Type.isnt.array(m.whens)||!m.whens.length)&&(m.whens=[{rules:[{logic:"",expression:{}}],result:e(f.defaultResult)}]),m.whens=m.whens.map(({rules:y,result:j})=>(y=y.length?y.map(({logic:b,expression:N})=>({logic:b,expression:f.reactive.validator.extractValidation(N)})):[{logic:"",expression:{}}],{rules:y,result:j})),f.value=m,f}function i(s={}){let{reactive:f,value:g,defaultResult:m,onChange:y}=c(s,{reactive:{required:!0},value:{dataType:"Object",default:{}},onChange:{dataType:"Function",default:null},defaultResult:{default:void 0}});return function(j={}){if(!y)return;g=(j.target==="rule"?r:t)(j,g,m);let N=f.schema.constructor.Condition;y(N.combine({else:g.else,whens:g.whens.map(({rules:H,result:z})=>(H=H.map(({logic:W,expression:S})=>({logic:W,expression:f.validator.combineValidation(S)})),{rules:H,result:z}))}))}}function l(){let s="section.member.prop.condition.whenBranch.logics";return[{value:"and",label:A.t(`${s}.and`)},{value:"or",label:A.t(`${s}.or`)}]}function o(s={}){let{reactive:f,member:g}=c(s,{reactive:{required:!0},member:{required:!0}});return(M.Form.providers(f,g)||[]).map(m=>({value:a(m),label:f.get({id:m.id,prop:"label"})}))}function a(s={}){return!s||!s.id||!s.prop?"":`${s.id}/${s.prop}`}function u(s=""){let[f,g]=s.split("/");return{id:f||"",prop:g||""}}function p(s={},f=""){var g;return!s||s.type!=="CONDITION_INVALID_CONDITION"?!1:f?((g=s==null?void 0:s.data)==null?void 0:g.dueto)===f:!0}function d(s={}){return p(s,"whens")}function I(s={}){return p(s,"rules")}function F(s={}){return p(s,"logic")}function w(s={}){return p(s,"provider")}function D(s={}){return p(s,"validation")}return{getProps:n,decorateOnChange:i,getLogics:l,getProviders:o,joinProvider:a,splitProvider:u,isConditionException:p,isWhensException:d,isRulesException:I,isLogicException:F,isProviderException:w,isValidationException:D}})(),Ne=rt;var nt=(()=>{function e(t={}){return c(t,{reactive:{required:!0},member:{required:!0},exception:{default:null},value:{dataType:["Object","String"],default:null},onChange:{dataType:"Function",default:null}})}return{getProps:e}})(),qe=nt;var it=(()=>{function e(r={}){let n=c(r,{reactive:{required:!0},member:{required:!0},exception:{default:null},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null}});return n.value.length||(n.value=[{}]),n}function t(r={}){let n=e(r);return function(i={}){if(!n.onChange)return;let l=n.value.slice(),{index:o,action:a,label:u,value:p}=i;a==="delete"?l.splice(o,1):a==="append"?l.splice(o+1,0,{label:"",value:""}):a==="update"&&("label"in i&&(l[o].label=u),"value"in i&&(l[o].value=p)),n.onChange(l)}}return{getProps:e,decorateOnChange:t}})(),Fe=it;var R=T(v("rcfm"));var lt=(()=>{function e(i={}){let l=c(i,{exception:{default:null},reactive:{required:!0},member:{required:!0},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null},actions:{dataType:"Array",default:["append","update","delete"]}});return l.value=l.value.slice(),l.value.length||(l.value=[{}]),l.value=l.value.map(o=>l.reactive.validator.extractValidation(o)),l}function t(i={}){let{reactive:l,value:o,onChange:a}=c(i,{reactive:{required:!0},onChange:{dataType:"Function",default:null},value:{dataType:"Array",default:[]}});return function(u={}){if(!a)return;o=o.slice();let{index:p,action:d,name:I,rule:F}=u;d==="delete"?o.splice(p,1):d==="append"?o.splice(p+1,0,{}):d==="update"&&("rule"in u&&(o[p].rule=F),"name"in u&&(o[p].name=I,o[p].rule=void 0)),a(o.map(w=>(w=l.validator.combineValidation(w),R.Struct.object.exclude(w,["valOf"]))))}}function r(i={}){let{reactive:l,member:o,scope:a}=c(i,{reactive:{required:!0},member:{required:!0},scope:{dataType:"String",validate(u){!["validation","condition"].includes(u)&&raise("The 'scope' prop must be within ['validation', 'condition']")}}});return(R.Form.validators(l,o,{scope:a})||[]).map(u=>({label:A.t(`validator.validators.${u.name}.label`),value:u.name}))}function n(i={}){var w;let{reactive:l,member:o,value:a}=c(i,{reactive:{required:!0},member:{required:!0},value:{dataType:"Object",required:!0}}),{name:u,rule:p}=a,{ruleType:d}=l.validator.get(u)||{};if(!d)return;if(R.Type.is.string(d)&&d!=="*")return d;let{validation:I}=l.schema.for({id:o.id,prop:"value"}),F=(w=(I||[]).find(D=>"dataType"in D))==null?void 0:w.dataType;return R.Type.is.string(F)&&F!=="*"?F:"Object"}return{getProps:e,decorateOnChange:t,getValidators:r,getRuleType:n}})(),je=lt;var ot=q(h({},U),{Prop:Ie,Condition:Ne,Calculation:qe,Options:Fe,Validation:je}),Oe=ot;var at=(()=>{function e(r={}){let{reactive:n,member:i}=c(r,{reactive:{required:!0},member:{required:!0}}),l=i.id,o=n.schema.for({id:l,prop:"value"}),a=n.get({id:l,prop:"validation"});return!!(o.validation||[]).concat(a||[]).find(d=>"presence"in d)}function t(r={}){let{reactive:n,member:i}=c(r,{reactive:{required:!0},member:{required:!0}}),l=i.id;return!!(n.get({id:l,prop:"editable"})===!1||n.get({id:l,prop:"visible"})===!1||n.get({id:l,prop:"calculation"},{include:"raw"}).raw.value)}return{isRequired:e,isReadonly:t}})(),we=at;function ut(){let e=x.create();return e.getProp=Z,e.getProps=c,e.joinClass=C,e.Component={Button:ue,Tabs:ce,Form:ve,Highlight:xe},e.Section={Member:Oe,Field:we},e}var st=ut();typeof window!="undefined"&&window.ReactiveForm&&(window.ReactiveForm.UI=st);})();
//# sourceMappingURL=rcfm.helper.iife.min.js-03a4d837.map