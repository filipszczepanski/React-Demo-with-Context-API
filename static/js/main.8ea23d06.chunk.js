(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),o=n(7),a=n.n(o),i=(n(13),n(1)),u=n(2),l=n(4),s=n(3),m=n(5),h={incrementCounter:function(t){return{counter:t.counter+1}}},f=Object(r.createContext)({}),d=f.Provider,v=f.Consumer,b=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).state=t.initState||{},n.actions=n._connectActions(t.actions||{}),n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"_connectActions",value:function(t){var e=this;return Object.keys(t).reduce(function(n,r){return n[r]=function(){return e.setState(t[r])},n},{})}},{key:"render",value:function(){var t=this.state,e=this.actions;return c.a.createElement(d,{value:{state:t,actions:e}},this.props.children||null)}}]),e}(r.PureComponent),p=v,w=(n(15),function(t){var e=t.children;return r.createElement(p,null,function(t){var n=t.actions;return r.createElement("button",{className:"Button",type:"button",onClick:function(){return n.incrementCounter()}},e)})}),j=(n(17),function(t){var e=t.title;return r.createElement("div",null,r.createElement("h1",null,e),r.createElement(p,null,function(t){var e=t.state;return r.createElement("h2",null,"Clicked ",e.counter," times")}),r.createElement(w,null,"Click me"))}),E=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement(b,{initState:{counter:0},actions:h},c.a.createElement(j,{title:"This is a demo with Context API"}))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.8ea23d06.chunk.js.map