(this["webpackJsonpreact-rate-thing-example"]=this["webpackJsonpreact-rate-thing-example"]||[]).push([[0],{17:function(e,n,t){e.exports=t(30)},18:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);t(18);var r=t(0),a=t.n(r),i=t(9),o=t.n(i),c=t(16),u=t(1),s=t.n(u),l=t(11),v=t(10),p=t(6),f=t(15);function m(){return(m=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(){var e,n,t=(e=["\n  display: inline-block;\n  color: #fcc95c;\n  :hover {\n    cursor: pointer;\n  }\n"],n||(n=e.slice(0)),e.raw=n,e);return g=function(){return t},t}var b=l.a.div(g()),h=function(e){var n=e.value,t=e.onClick,i=Object(r.useState)({isHovering:!1}),o=i[0],c=i[1];Object(r.useEffect)((function(){n>5?t(5):n<0&&t(0)}));for(var u=n,s=[],l=function(e){var n=f.a,r={onMouseEnter:function(){return c({position:e,isHovering:!0})},onMouseLeave:function(){return c({isHovering:!1})},onClick:function(){return t(e)}};(o.isHovering&&e<=o.position||!o.isHovering&&e<=u)&&(n=p.a),s.push(a.a.createElement(b,m({},r,{key:e}),a.a.createElement(v.a,{icon:n})))},g=1;g<=5;g+=1)l(g);return s};h.propTypes={value:s.a.number.isRequired};var y=h;var E=()=>{const e=Object(r.useState)(0),n=Object(c.a)(e,2),t=n[0],i=n[1];return a.a.createElement("div",{style:{margin:"1em"}},a.a.createElement(y,{value:t,onClick:i}),a.a.createElement("div",{style:{marginTop:"1em"}},"Rate: ",t))};o.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.925432ec.chunk.js.map