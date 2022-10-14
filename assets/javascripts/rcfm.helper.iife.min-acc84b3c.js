/*!
 * rcfm 2.0.0-alpha.0 | rcfm/helper iife | https://reactive-form.github.io/
 * Copyright 2021 - 2022 JLxiangyun | MIT license
 */
(()=>{var Be=Object.create;var L=Object.defineProperty,Ae=Object.defineProperties,Re=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyDescriptors,ke=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols,Me=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var G=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t)=>{for(var r in t||(t={}))ne.call(t,r)&&G(e,r,t[r]);if(le)for(var r of le(t))Le.call(t,r)&&G(e,r,t[r]);return e},I=(e,t)=>Ae(e,$e(t)),Ve=e=>L(e,"__esModule",{value:!0});var g=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var _e=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ke(t))!ne.call(e,i)&&i!=="default"&&L(e,i,{get:()=>t[i],enumerable:!(r=Re(t,i))||r.enumerable});return e},y=e=>_e(Ve(L(e!=null?Be(Me(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ie=(e,t,r)=>(G(e,typeof t!="symbol"?t+"":t,r),r);(()=>{let e=window.require;window.require=t=>e&&e(t)||{rcfm:window.ReactiveForm,"rcfm/helper":{UI:window.ReactiveForm.UI}}[t]})();function O(e={},t={}){return e._installer||(e._installer=T({},t))}var J=class{constructor(){O(this,{installed:{}})}static create(...t){return new J(...t)}},x=J;ie(x,"exceptions",{CONFLICTED_NAME:"UI_INSTALLER_CONFLICTED_NAME",NOT_FOUND:"UI_INSTALLER_TARGET_NOT_FOUND"});x.prototype.has=function(e=""){let t=O(this).installed;return e in t};var E=y(g("rcfm"));x.prototype.install=function(e={}){let t=e.name,r=e.Component||e.component||e.render,i="force"in e?e.force:!1;E.Type.mustbe.nonblankString(t,"UI installer name"),E.Type.mustbe.boolean(i,"UI installer force option"),E.Type.mustWithin({type:E.Type.get(r),types:["Function","Object"]});let l=O(this).installed;!i&&t in l&&E.Exception.raise({type:x.exceptions.CONFLICTED_NAME,message:`Componet '${t}' has been occupied.
             Please set 'force' to true if the existed
             component should be replaced.`}),l[t]={name:t,force:i,render:r}};var oe=y(g("rcfm"));x.prototype.use=function(e=""){let t=O(this).installed;if(e in t)return t[e].render;oe.Exception.raise({type:x.exceptions.NOT_FOUND,message:`Component '${e}' is not installed.`})};var V=y(g("rcfm"));x.prototype.try=function(e=[]){V.Type.isnt.array(e)&&(e=[e]);let t=null;if(!e.length)return t=null;if(e.some(i=>{try{return t=this.use(i),!0}catch(l){return t=null,!1}}),t)return t;let r=`None of Component '${JSON.stringify(e)}' is installed.`;V.Exception.raise({type:x.exceptions.NOT_FOUND,message:r})};var S=y(g("rcfm"));function De(e){S.Context.mustbeContext(e)}function Ue(e){S.Type.mustbe.object(e),S.Type.mustbe.nonblankString(e.id)}function ze(e){S.Exception.mustbeException(e)}function Z(e={},t="",r={}){let i=[void 0,null],l="default"in r?r.default:void 0,n="dataType"in r?r.dataType:null,o="required"in r?r.required:!1,a="validate"in r?r.validate:null,u="transform"in r?r.transform:null,c=(()=>(S.Type.is.array(n)?n:[n]).every(F=>F==="Boolean")?t in e?e[t]!==!1:l:i.includes(e[t])?l:e[t])();return u&&(c=(()=>S.Type.is.function(u)?u(c):c in u?u[c]:c)()),o&&i.includes(c)&&S.Exception.raise(`${t} is required.`),i.includes(c)||(n&&S.Type.mustWithin({type:S.Type.get(c),types:n},`Data type of "${t}" must be within ${JSON.stringify(n)}`),t==="reactive"&&De(c),t==="member"&&Ue(c),t==="exception"&&ze(c),a&&a(c)),c}function s(e={},t={}){let r=Object.keys(t);return Object.assign({customProps:S.Struct.object.exclude(e,r)},S.Struct.object.from(r.map(i=>[i,Z(e,i,t[i])])))}var Y=y(g("rcfm"));function C(...e){return e.map(t=>{let r=Y.Type.is.object(t)&&t.root||"",i=Y.Type.is.object(t)?[t.klass]:[t];return i=i.flat(1/0).filter(l=>l),i.map(l=>r?`${r}-${l}`:l)}).flat(1/0).join(" ")}var K=y(g("rcfm"));var We={form:{boolean:{option:{true:"Yes",false:"No"}}}},ae=We;var Ge={form:{boolean:{option:{true:"\u662F",false:"\u5426"}}}},ue=Ge;K.I18n.global.define({en:{component:ae},zh:{component:ue}});var Q=K.I18n.global;var Dt=y(g("rcfm"));var Je=(()=>{function e(r={}){let i=s(r,{type:{dataType:"String",default:"button"},variant:{dataType:"String",default:""},color:{dataType:"String",default:"primary"},size:{dataType:"String",default:""},tabindex:{dataType:"String",default:""},onClick:{dataType:"Function",default:null},fluid:{dataType:"Boolean",default:!1},circle:{dataType:"Boolean",default:!1},active:{dataType:"Boolean",default:!1},disabled:{dataType:"Boolean",default:!1},icon:{dataType:["String","Boolean"],transform:{"":!0}},topIcon:{dataType:["String","Boolean"],transform:{"":!0}},leftIcon:{dataType:["String","Boolean"],transform:{"":!0}},rightIcon:{dataType:["String","Boolean"],transform:{"":!0}}});return i.disabled&&(i.onClick=null),i}function t(r={}){let{variant:i,color:l,size:n,circle:o,active:a,fluid:u,icon:c,topIcon:f,leftIcon:F,rightIcon:q}=e(r);return C({root:"rcfm-component-btn",klass:[i?`${i}-${l}`:`${l}`,n||"",u?"fluid":"",o?"circle":"",a?"active":""]},{root:"rcfm-component-btn-ico",klass:(()=>{if(c)return"middle";if(f)return"top";if(F)return"left";if(q)return"right"})()},r.className)}return{joinWrapperClass:t,getProps:e}})(),Ze=(()=>{function e(r={}){return s(r,{fluid:{dataType:"Boolean",default:!1},vertical:{dataType:"Boolean",default:!1}})}function t(r={}){let{vertical:i,fluid:l}=e(r);return C({root:"rcfm-component-btngroup",klass:[i?"y":"x",l?"fluid":""]},r.className)}return{joinWrapperClass:t,getProps:e}})(),se=I(T({},Je),{Group:Ze});var ce=y(g("rcfm"));var Ye=(()=>{function e(t={}){let r=s(t,{title:{dataType:"String",default:""},labels:{dataType:"Array",default:[]},activeIndex:{dataType:"Number",default:0,validate(n){ce.Type.mustbe.integer(n)}},onSwitch:{dataType:"Function",default:null}}),[i,l]=[0,r.labels.length-1];return r.activeIndex>l&&(r.activeIndex=l),r.activeIndex<i&&(r.activeIndex=i),r}return{getProps:e}})(),pe=Ye;var fe=y(g("rcfm"));var Ke=(()=>{function e(n={}){let o=s(n,{required:{dataType:"Boolean",default:!1},size:{dataType:"String",default:""},label:{dataType:"String",default:""},hint:{dataType:"String",default:""},error:{dataType:["String","Array"],default:""}});return o.error=(()=>{let a=o.error;return fe.Type.isnt.array(a)&&(a=[a]),a.flat(1/0).filter(u=>u).map(u=>u.message||u.name||u)})(),o}function t(n={}){let{size:o}=e(n);return C("rcfm-component-fmfield",{root:"rcfm-component-fmfield",klass:[o||""]},"rcfm-fmtag",n.className)}function r(n={}){let{size:o,required:a}=e(n);return C("rcfm-component-fmlabel",{root:"rcfm-component-fmlabel",klass:[o||"",a?"required":""]},"rcfm-fmtag")}function i(n={}){let{size:o}=e(n);return C("rcfm-component-fmhint",{root:"rcfm-component-fmhint",klass:[o||""]},"rcfm-fmtag")}function l(n={}){let{size:o}=e(n);return C("rcfm-component-fmerror",{root:"rcfm-component-fmerror",klass:[o||""]},"rcfm-fmtag")}return{getProps:e,joinWrapperClass:t,joinLabelClass:r,joinHintClass:i,joinErrorClass:l}})(),de=Ke;var B=y(g("rcfm"));var A={id:{dataType:"String",default:""},name:{dataType:"String",default:""},invalid:{dataType:"Boolean",default:!1},disabled:{dataType:"Boolean",default:!1},readonly:{dataType:"Boolean",default:!1},size:{dataType:"String",default:""},onChange:{dataType:"Function",default:null}};function k(e={}){let{size:t,invalid:r}=s(e,A);return C({root:"rcfm-component-fm",klass:[t||"",r?"invalid":""]},"rcfm-fmtag",e.className)}var X=(()=>{function e(t={}){return s(t,I(T({},A),{type:{dataType:"String",default:""},value:{default:""},placeholder:{dataType:"String",default:""},multiline:{dataType:"Boolean",default:!1}}))}return{getProps:e,joinModifierClass:k}})(),ee=(()=>{function e(t={}){return s(t,I(T({},A),{value:{default:NaN},placeholder:{dataType:"String",default:""}}))}return{getProps:e,joinModifierClass:k}})(),me=(()=>{function e(t={}){return s(t,I(T({},A),{value:{default:""},options:{dataType:"Array",required:!0,validate(r){r.forEach(i=>{B.Type.mustbe.object(i)})}}}))}return{getProps:e,joinModifierClass:k}})(),be=(()=>{function e(r={}){let i=s(r,I(T({},A),{value:{default:[]},options:{dataType:"Array",required:!0,validate(l){l.forEach(n=>{B.Type.mustbe.object(n)})}}}));return B.Type.isnt.array(i.value)&&(i.value=[]),i}function t(r={}){let i=r.value.slice(),l="insert"in r?"insert":"remove",n=r[l];return l==="insert"&&i.push(n),l==="remove"&&(i=i.filter(o=>o!==n)),i}return{getProps:e,joinModifierClass:k,mutateValue:t}})(),ge=(()=>{function e(r={}){return s(r,I(T({},A),{value:{default:""},placeholder:{dataType:"String",default:""},includeblank:{dataType:"Boolean",default:!1},options:{dataType:"Array",required:!0,validate(i){i.forEach(l=>{B.Type.mustbe.object(l)})}}}))}function t(r={}){var i;return((i=r.options.find(l=>l.value===r.value))==null?void 0:i.label)||""}return{getProps:e,joinModifierClass:k,findLabel:t}})(),ye=(()=>{function e(t={}){let r=s(t,I(T({},A),{value:{default:[]},options:{dataType:"Array",required:!0,validate(i){i.forEach(l=>{B.Type.mustbe.object(l)})}}}));return B.Type.isnt.array(r.value)&&(r.value=[]),r}return{getProps:e,joinModifierClass:k}})();var he=(()=>{function e(){let t="component.form.boolean.option";return[{value:!0,label:Q.t(`${t}.true`)},{value:!1,label:Q.t(`${t}.false`)}]}return{getOptions:e}})(),ve=(()=>{function e(l){return r(l)}function t(l){return function(n){l&&l(i(n))}}function r(l){if([null,void 0,NaN].includes(l))return"";if(typeof l=="string")return l;try{return JSON.stringify(l)}catch(n){return String(l)}}function i(l){if(typeof l!="string")return l;if(l.match(/^\s*$/))return null;if(l!=="undefined"){if(l==="NaN")return NaN;if(l.match(/-\s*NaN/))return NaN;if(l==="Infinity")return 1/0;if(l.match(/-\s*Infinity/))return-1/0;try{return JSON.parse(l)}catch(n){return l}}}return{decorateValue:e,decorateOnChange:t}})();var Qe={Field:de,TextInput:X,NumberInput:ee,Radios:me,Checkboxes:be,SingleSelect:ge,MultipleSelect:ye,String:X,Number:ee,Boolean:he,Object:ve},Te=Qe;var xe=y(g("rcfm"));var Xe=(()=>{function e(r={}){let i=s(r,{type:{dataType:"String",default:"info"},hint:{dataType:["String","Array"],default:[]},hintPosition:{dataType:"String",default:"bottom"},on:{dataType:"Boolean",default:!0}});return i.hint=(()=>{let l=i.hint;return xe.Type.isnt.array(l)&&(l=[l]),l.flat(1/0).filter(n=>n).map(n=>n.message||n.name||n)})(),i}function t(r={}){let{type:i,on:l}=e(r);return C({root:"rcfm-component-highlight",klass:[i,l?"":"off"]},r.className)}return{joinWrapperClass:t,getProps:e}})(),Se=Xe;var te=y(g("rcfm"));var et={member:{noProviders:"No referenceable objects",prop:{always:"Always",conditional:"Conditional",condition:{elseBranch:{resultTitle:"Else"},whenBranch:{title:"When",resultTitle:"Then",delete:"Delete Branch",add:"New Branch",logics:{and:"And",or:"Or"}}},options:{each:{labelLabel:"Label",valueLabel:"Value"}}},type:{fieldset:{label:"Fieldset"},textField:{label:"Text Field"},multilineTextField:{label:"Multiline Text"},numberField:{label:"Number Field"},radioField:{label:"Radio Field"},checkboxField:{label:"Checkbox Field"},singleSelectField:{label:"Single Select"},multipleSelectField:{label:"Multiple Select"},subform:{label:"Subform"},subformFieldset:{label:"Subform Fieldset"},subformTextField:{label:"Subform Text Field"},subformMultilineTextField:{label:"Subform Multiline Text"},subformNumberField:{label:"Subform Number Field"},subformRadioField:{label:"Subform Radio Field"},subformCheckboxField:{label:"Subform Checkbox Field"},subformSingleSelectField:{label:"Subform Single Select"},subformMultipleSelectField:{label:"Subform Multiple Select"}}},subform:{fieldset:{insert:"Insert A New Set",remove:"Delete The Above Set"}}},Ce=et;var tt={member:{noProviders:"\u6CA1\u6709\u53EF\u88AB\u5F15\u7528\u7684\u5BF9\u8C61",prop:{always:"\u603B\u662F",conditional:"\u6309\u6761\u4EF6",condition:{elseBranch:{resultTitle:"\u5426\u5219"},whenBranch:{title:"\u5F53",resultTitle:"\u5219",delete:"\u5220\u9664\u5206\u652F",add:"\u65B0\u589E\u5206\u652F",logics:{and:"\u4E14",or:"\u6216"}}},options:{each:{labelLabel:"\u9009\u9879\u6587\u5B57",valueLabel:"\u9009\u9879\u503C"}}},type:{fieldset:{label:"\u8F93\u5165\u9879\u96C6\u5408"},textField:{label:"\u5355\u884C\u6587\u672C"},multilineTextField:{label:"\u591A\u884C\u6587\u672C"},numberField:{label:"\u6570\u5B57\u8F93\u5165"},radioField:{label:"\u5355\u9879\u9009\u62E9"},checkboxField:{label:"\u591A\u9879\u9009\u62E9"},singleSelectField:{label:"\u4E0B\u62C9\u5355\u9009"},multipleSelectField:{label:"\u4E0B\u62C9\u591A\u9009"},subform:{label:"\u5B50\u8868\u5355"},subformFieldset:{label:"\u5B50\u8868\u5355\u8F93\u5165\u9879\u96C6\u5408"},subformTextField:{label:"\u5B50\u8868\u5355\u5355\u884C\u6587\u672C"},subformMultilineTextField:{label:"\u5B50\u8868\u5355\u591A\u884C\u6587\u672C"},subformNumberField:{label:"\u5B50\u8868\u5355\u6570\u5B57\u8F93\u5165"},subformRadioField:{label:"\u5B50\u8868\u5355\u5355\u9879\u9009\u62E9"},subformCheckboxField:{label:"\u5B50\u8868\u5355\u591A\u9879\u9009\u62E9"},subformSingleSelectField:{label:"\u5B50\u8868\u5355\u4E0B\u62C9\u5355\u9009"},subformMultipleSelectField:{label:"\u5B50\u8868\u5355\u4E0B\u62C9\u591A\u9009"}}},subform:{fieldset:{insert:"\u63D2\u5165\u65B0\u7684\u4E00\u7EC4",remove:"\u5220\u9664\u4E0A\u9762\u4E00\u7EC4"}}},Fe=tt;te.I18n.global.define({en:{section:Ce},zh:{section:Fe}});var R=te.I18n.global;var _=y(g("rcfm"));var rt=(()=>{function e(n={}){return s(n,{reactive:{required:!0},member:{required:!0},onAction:{dataType:"Function",default:r}})}function t(n={}){let{reactive:o,member:a,errors:u}=s(n,{reactive:{required:!0},member:{required:!0},errors:{dataType:"Object",default:{}}});return Object.keys(u).map(c=>{let f=o.schema.for({id:a.id,prop:c}).label;return u[c].map(F=>f?`${f}: ${F.message}`:F.message)})}function r(n={}){if(n.action==="delete"){let{reactive:o,id:a}=s(n,{reactive:{required:!0},id:{required:!0}});return o.delete({id:a})}else if(n.action==="update"){let{reactive:o,id:a,prop:u,value:c}=s(n,{reactive:{required:!0},id:{required:!0},prop:{required:!0},value:{required:!1}});return o.set({id:a,prop:u,value:c})}else if(n.action==="add"){let{reactive:o,parentId:a,props:u}=s(n,{reactive:{required:!0},parentId:{required:!0},props:{dataType:"Object",required:!0}});return o.add({parentId:a,props:u})}else _.Exception.raise({type:"MEMBER_UNSUPPORTED_ACTION",message:`Unsupported action ${n}.`})}function i(n={}){let{reactive:o,member:a}=s(n,{reactive:{required:!0},member:{required:!0}}),u=o.get({id:a.id,prop:"type"}),c=(_.Form.group(`${u}Child`)||[]).map(f=>f.type);return l(c)}function l(n=[]){return n.map(o=>{let a=o[0].toLowerCase()+o.slice(1);return{type:o,label:R.t(`section.member.type.${a}.label`)}})}return{getProps:e,errorMessages:t,onAction:r,getChildTypes:i}})(),D=rt;var Pe=y(g("rcfm"));var lt=(()=>{function e(o={}){return s(o,{reactive:{required:!0},onAction:{dataType:"Function",default:D.onAction},member:{required:!0,validate(a){Pe.Type.mustbe.nonblankString(a.prop,"Member prop")}}})}function t(o={}){let{reactive:a,member:u}=e(o);return a.schema.for(u).schemable}function r(o={}){let{reactive:a}=s(o,{reactive:{required:!0}});return a.schema.constructor.Condition.isCondition(o.value)}function i(o={}){let{reactive:a,member:u}=e(o);return o.conditional?[{when:[{}],then:a.schema.for(u).default},{else:a.schema.for(u).default}]:a.schema.for(u).default}function l(o={}){var f;let{reactive:a,member:u}=e(o),{validation:c}=a.schema.for(u);return c&&((f=c.find(F=>"dataType"in F))==null?void 0:f.dataType)||"Object"}function n(o={}){let{reactive:a,member:u}=e(o),{validation:c}=a.schema.for(u);return c?!!c.find(f=>"presence"in f):!1}return{getProps:e,getType:l,getDefault:i,isSchemable:t,isCondition:r,isRequired:n}})(),Ne=lt;var M=y(g("rcfm"));var nt=(()=>{function e(p){return M.Type.is.function(p)?p():p}function t(p={},d={},h){let m=T({},d.else),v=d.whens.slice(),{target:j,action:b,branchIndex:N,result:H}=p;return j==="else"?"result"in p&&(m.result=H):j==="when"&&(b==="delete"?v.splice(N,1):b==="append"?v.splice(N+1,0,{rules:[{logic:"",expression:{}}],result:e(h)}):b==="update"&&"result"in p&&(v[N].result=H)),{whens:v,else:m}}function r(p={},d={}){let h=T({},d.else),m=d.whens.slice(),{action:v,branchIndex:j,ruleIndex:b,logic:N,name:H,rule:z,value:W}=p,P=m.slice()[j].rules;return v==="delete"?(P.splice(b,1),b===0&&P.length&&(P[0].logic="")):v==="append"?(N=b===-1?"":"and",P.splice(b+1,0,{logic:N,expression:{}})):v==="update"&&("logic"in p&&(P[b].logic=N),"rule"in p&&(P[b].expression.rule=z),"name"in p&&(P[b].expression.name=H,P[b].expression.rule=void 0),"value"in p&&(P[b].expression.value=W,P[b].expression.name=void 0,P[b].expression.rule=void 0)),{whens:m,else:h}}function i(p={}){let d=s(p,{reactive:{required:!0},member:{required:!0},ResultComponent:{dataType:["Function","Object"],required:!0},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null},exception:{default:null},defaultResult:{default:void 0}}),m=d.reactive.schema.constructor.Condition.extract(d.value);return M.Type.is.blank(m.else.result)&&(m.else={result:e(d.defaultResult)}),(M.Type.isnt.array(m.whens)||!m.whens.length)&&(m.whens=[{rules:[{logic:"",expression:{}}],result:e(d.defaultResult)}]),m.whens=m.whens.map(({rules:v,result:j})=>(v=v.length?v.map(({logic:b,expression:N})=>({logic:b,expression:d.reactive.validator.extractValidation(N)})):[{logic:"",expression:{}}],{rules:v,result:j})),d.value=m,d}function l(p={}){let{reactive:d,value:h,defaultResult:m,onChange:v}=s(p,{reactive:{required:!0},value:{dataType:"Object",default:{}},onChange:{dataType:"Function",default:null},defaultResult:{default:void 0}});return function(j={}){if(!v)return;h=(j.target==="rule"?r:t)(j,h,m);let N=d.schema.constructor.Condition;v(N.combine({else:h.else,whens:h.whens.map(({rules:H,result:z})=>(H=H.map(({logic:W,expression:P})=>({logic:W,expression:d.validator.combineValidation(P)})),{rules:H,result:z}))}))}}function n(){let p="section.member.prop.condition.whenBranch.logics";return[{value:"and",label:R.t(`${p}.and`)},{value:"or",label:R.t(`${p}.or`)}]}function o(p={}){let{reactive:d,member:h}=s(p,{reactive:{required:!0},member:{required:!0}});return(M.Form.providers(d,h)||[]).map(m=>({value:a(m),label:d.get({id:m.id,prop:"label"})}))}function a(p={}){return!p||!p.id||!p.prop?"":`${p.id}/${p.prop}`}function u(p=""){let[d,h]=p.split("/");return{id:d||"",prop:h||""}}function c(p={},d=""){var h;return!p||p.type!=="CONDITION_INVALID_CONDITION"?!1:d?((h=p==null?void 0:p.data)==null?void 0:h.dueto)===d:!0}function f(p={}){return c(p,"whens")}function F(p={}){return c(p,"rules")}function q(p={}){return c(p,"logic")}function w(p={}){return c(p,"provider")}function U(p={}){return c(p,"validation")}return{getProps:i,decorateOnChange:l,getLogics:n,getProviders:o,joinProvider:a,splitProvider:u,isConditionException:c,isWhensException:f,isRulesException:F,isLogicException:q,isProviderException:w,isValidationException:U}})(),Ie=nt;var it=(()=>{function e(t={}){return s(t,{reactive:{required:!0},member:{required:!0},exception:{default:null},value:{dataType:["Object","String"],default:null},onChange:{dataType:"Function",default:null}})}return{getProps:e}})(),qe=it;var ot=(()=>{function e(r={}){let i=s(r,{reactive:{required:!0},member:{required:!0},exception:{default:null},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null}});return i.value.length||(i.value=[{}]),i}function t(r={}){let i=e(r);return function(l={}){if(!i.onChange)return;let n=i.value.slice(),{index:o,action:a,label:u,value:c}=l;a==="delete"?n.splice(o,1):a==="append"?n.splice(o+1,0,{label:"",value:""}):a==="update"&&("label"in l&&(n[o].label=u),"value"in l&&(n[o].value=c)),i.onChange(n)}}return{getProps:e,decorateOnChange:t}})(),je=ot;var $=y(g("rcfm"));var at=(()=>{function e(l={}){let n=s(l,{exception:{default:null},reactive:{required:!0},member:{required:!0},value:{dataType:"Array",default:[]},onChange:{dataType:"Function",default:null},actions:{dataType:"Array",default:["append","update","delete"]}});return n.value=n.value.slice(),n.value.length||(n.value=[{}]),n.value=n.value.map(o=>n.reactive.validator.extractValidation(o)),n}function t(l={}){let{reactive:n,value:o,onChange:a}=s(l,{reactive:{required:!0},onChange:{dataType:"Function",default:null},value:{dataType:"Array",default:[]}});return function(u={}){if(!a)return;o=o.slice();let{index:c,action:f,name:F,rule:q}=u;f==="delete"?o.splice(c,1):f==="append"?o.splice(c+1,0,{}):f==="update"&&("rule"in u&&(o[c].rule=q),"name"in u&&(o[c].name=F,o[c].rule=void 0)),a(o.map(w=>(w=n.validator.combineValidation(w),$.Struct.object.exclude(w,["valOf"]))))}}function r(l={}){let{reactive:n,member:o,scope:a}=s(l,{reactive:{required:!0},member:{required:!0},scope:{dataType:"String",validate(u){!["validation","condition"].includes(u)&&raise("The 'scope' prop must be within ['validation', 'condition']")}}});return($.Form.validators(n,o,{scope:a})||[]).map(u=>({label:R.t(`validator.validators.${u.name}.label`),value:u.name}))}function i(l={}){var w;let{reactive:n,member:o,value:a}=s(l,{reactive:{required:!0},member:{required:!0},value:{dataType:"Object",required:!0}}),{name:u,rule:c}=a,{ruleType:f}=n.validator.get(u)||{};if(!f)return;if($.Type.is.string(f)&&f!=="*")return f;let{validation:F}=n.schema.for({id:o.id,prop:"value"}),q=(w=(F||[]).find(U=>"dataType"in U))==null?void 0:w.dataType;return $.Type.is.string(q)&&q!=="*"?q:"Object"}return{getProps:e,decorateOnChange:t,getValidators:r,getRuleType:i}})(),Oe=at;var ut=I(T({},D),{Prop:Ne,Condition:Ie,Calculation:qe,Options:je,Validation:Oe}),we=ut;var st=(()=>{function e(r={}){let{reactive:i,member:l}=s(r,{reactive:{required:!0},member:{required:!0}}),n=l.id,o=i.schema.for({id:n,prop:"value"}),a=i.get({id:n,prop:"validation"});return!!(o.validation||[]).concat(a||[]).find(f=>"presence"in f)}function t(r={}){let{reactive:i,member:l}=s(r,{reactive:{required:!0},member:{required:!0}}),n=l.id;return!!(i.get({id:n,prop:"editable"})===!1||i.get({id:n,prop:"visible"})===!1||i.get({id:n,prop:"calculation"},{include:"raw"}).raw.value)}return{isRequired:e,isReadonly:t}})(),He=st;var re=y(g("rcfm"));var ct=(()=>{function e(r={}){let i=re.Form.group("Field");if(!i)return;let{installer:l,namespace:n}=s(r,{installer:{required:!0},namespace:{required:!0,dataType:"String"}});i.forEach(o=>{let a=`${n}${o.type}`;!l.has(a)||l.install({name:`${n}Subform${o.type}`,Component:l.use(a)})})}function t(r={}){let{reactive:i,collection:l}=s(r,{reactive:{required:!0},collection:{dataType:"Array"}});if(!l||!l.length)return[];let n=re.Form.group("SubformField");if(!n)return[];let o=n.map(a=>a.type);return l.filter(a=>o.includes(i.get({id:a.id,prop:"type"})))}return{installFieldComponents:e,collectFields:t}})(),Ee=ct;function pt(){let e=x.create();return e.getProp=Z,e.getProps=s,e.joinClass=C,e.Component={Button:se,Tabs:pe,Form:Te,Highlight:Se},e.Section={Member:we,Field:He,Subform:Ee},e}var ft=pt();typeof window!="undefined"&&window.ReactiveForm&&(window.ReactiveForm.UI=ft);})();
//# sourceMappingURL=rcfm.helper.iife.min.js-dcdf5c85.map
