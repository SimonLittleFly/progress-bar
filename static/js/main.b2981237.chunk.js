(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l);var s=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h2",null,"My awesome"),r.a.createElement("h1",null,"PROGRESS BAR"),r.a.createElement("h3",null,"by ",r.a.createElement("a",{href:"https://www.linkedin.com/in/simone-moschetta-a03b1588/",target:"_blank",rel:"noopener noreferrer"},"Simone Moschetta"))))},c=a(3),i=a(4),u=a(6),m=a(5),d=a(7),v=function(e){return r.a.createElement("div",{id:e.id,className:e.class},r.a.createElement("div",{value:e.value,className:"percent"},e.num),r.a.createElement("div",{style:{width:e.num},className:"back"}))},h=function(e){return console.log(e.value),r.a.createElement("button",{value:e.value,onClick:function(t){var a=document.querySelector(".progressBar.selected .percent"),n=document.querySelector(".progressBar.selected .back"),r=e.limit,l=a.getAttribute("value"),o=t.target.value;if(-1===o.indexOf("-")){console.log("Positive!");var s=Math.round(100*l/r)+Math.round(100*o/r),c=parseInt(l)+parseInt(o);n.classList.remove("error"),s>100?(n.style.width="100%",n.classList.add("error")):n.style.width=s+"%",a.setAttribute("value",c),a.innerHTML=s+"%"}else{console.log("Negative!");var i=-1*o,u=Math.round(100*l/r)-Math.round(100*i/r),m=parseInt(l)-parseInt(i);u<0?(n.style.width="0%",a.setAttribute("value",0),a.innerHTML="0%"):(n.style.width=u+"%",a.setAttribute("value",m),a.innerHTML=u+"%",u<100&&n.classList.remove("error"))}console.log("Limit: "+r,"ValueBar: "+a.getAttribute("value"))}},e.value<0?e.value:"+"+e.value)},g=function(e){return r.a.createElement("select",{onChange:function(e){var t=e.target.value,a=document.getElementsByClassName("progressBar");console.log(t);for(var n=0;n<a.length;n++)a[n].classList.remove("selected");document.getElementById(t).classList.add("selected")}},e.value.map((function(e,t){return r.a.createElement("option",{key:t,value:"progress"+t},"Progress ",t+1)})))},p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,progData:[]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pb-api.herokuapp.com/bars").then((function(e){return e.json()})).then((function(t){e.setState({progData:t,loading:!1})})).catch((function(t){e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.progData,a=e.loading;return e.error?r.a.createElement("main",null,r.a.createElement("span",null,"Something went wrong...")):a?r.a.createElement("main",null,r.a.createElement("h2",null,"Please wait...")):(console.log(t.bars,t.limit),r.a.createElement("main",null,r.a.createElement("section",{id:"progressBox"},t&&t.bars&&t.bars.map((function(e,a){return r.a.createElement(v,{class:0===a?"progressBar selected":"progressBar",key:a,id:"progress"+a,value:e,num:Math.round(100*e/t.limit)+"%"})}))),r.a.createElement("section",{id:"controls"},r.a.createElement("div",{className:"choose"},r.a.createElement("span",null,"Choose your progress bar:"),t&&t.bars&&r.a.createElement(g,{value:t.bars})),r.a.createElement("div",{className:"change"},r.a.createElement("span",null,"Change your progress bar:"),t&&t.buttons&&t.buttons.map((function(e,a){return r.a.createElement(h,{key:a,limit:t.limit,value:e})}))))))}}]),t}(n.Component);a(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement("div",{id:"container"},r.a.createElement(s,null),r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b2981237.chunk.js.map