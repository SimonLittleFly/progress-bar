(this["webpackJsonpprogress-bar"]=this["webpackJsonpprogress-bar"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i);var s=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo"},r.a.createElement("h2",null,"Calculate"),r.a.createElement("h1",null,"Your budget"),r.a.createElement("h3",null,"by ",r.a.createElement("a",{href:"https://www.linkedin.com/in/simone-moschetta-a03b1588/",target:"_blank",rel:"noopener noreferrer"},"Simone Moschetta"))))},c=a(1),l=a(2),u=a(3),h=a(5),m=a(4),p=a(6),d=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"percentBar",value:function(){return Math.round(100*this.props.info.val/this.props.limit)+"%"}},{key:"render",value:function(){var e=this.props,t=e.barActive,a=e.info,n=e.action,i=t===a.index?"progressBar selected":"progressBar";return r.a.createElement("div",{className:i,onClick:function(){return n(a.index)}},r.a.createElement("div",{className:"percent"},this.percentBar()),r.a.createElement("div",{className:"back",style:{width:this.percentBar()}}))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"changeValue",value:function(){var e=this.props.value,t=this.props.limit,a=this.props.bar,n=document.getElementsByClassName("progressBar")[a.index],r=n.querySelector(".percent"),i=n.querySelector(".back");if(e>=0){var o=Math.round(100*a.val/t)+Math.round(100*e/t),s=parseInt(a.val)+parseInt(e);i.classList.remove("error"),o>100?(i.style.width="100%",i.classList.add("error")):i.style.width=o+"%",r.innerHTML=o+"%",this.props.action(s)}else{var c=-1*e,l=Math.round(100*a.val/t)-Math.round(100*c/t),u=parseInt(a.val)-parseInt(c);l<0?(i.style.width="0%",r.innerHTML="0%",this.props.action(0)):(i.style.width=l+"%",r.innerHTML=l+"%",this.props.action(u),l<100&&i.classList.remove("error"))}}},{key:"render",value:function(){var e=this,t=this.props.value;return r.a.createElement("button",{onClick:function(){return e.changeValue()}},t<0?t+" $":"+"+t+" $")}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).changeBar=a.changeBar.bind(Object(c.a)(a)),a.changeVal=a.changeVal.bind(Object(c.a)(a)),a.state={loading:!0,bars:[],buttons:[],limit:0,selectedBar:0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://pb-api.herokuapp.com/bars").then((function(e){return e.json()})).then((function(t){var a=t.bars.map((function(e,t){return{index:t,val:e}}));e.setState({loading:!1,bars:a,buttons:t.buttons,limit:t.limit})})).catch((function(t){e.setState({error:t})}))}},{key:"changeBar",value:function(e){this.setState({selectedBar:e})}},{key:"changeVal",value:function(e){var t=this.state.bars;t[this.state.selectedBar].val=e,this.setState({bars:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.bars,n=t.buttons,i=t.limit,o=t.selectedBar,s=t.loading;return t.error?r.a.createElement("main",null,r.a.createElement("span",null,"Something went wrong...")):s?r.a.createElement("main",null,r.a.createElement("h2",null,"Please wait...")):(console.clear(),console.log("Progress bars: "+JSON.stringify(a)),console.log("Buttons: "+n,"Limit: "+i,"Bar Selected: "+o),r.a.createElement("main",null,r.a.createElement("section",{id:"progressBox"},r.a.createElement("span",null,"Choose your progress bar:"),r.a.createElement("div",{className:"choose"},a&&a.map((function(t,a){return r.a.createElement(d,{key:a,info:t,barActive:o,limit:i,action:e.changeBar})})))),r.a.createElement("section",{id:"controls"},r.a.createElement("div",{className:"change"},r.a.createElement("span",null,"Add or remove money:"),n&&n.map((function(t,n){return r.a.createElement(b,{key:n,value:t,limit:i,bar:a[o],action:e.changeVal})})))),r.a.createElement("section",{id:"limit"},r.a.createElement("span",null,"Budget limit: ",i,"$ ",r.a.createElement("i",null,"(limit = 100%)")))))}}]),t}(n.Component);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement("div",{id:"container"},r.a.createElement(s,null),r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5a88c0dc.chunk.js.map