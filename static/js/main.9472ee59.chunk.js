(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(11)},11:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),o=r(4),u=r(3),c=r(5),i=r(9),l=r(0),m=r.n(l),h=r(7),d=r.n(h);r(17);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(i.a)(t[r],3),n=a[0],s=a[1],o=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[o])return e[n]}return null}function p(e){return m.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var b=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(s.a)(t,[{key:"renderSquare",value:function(e){var t=this;return m.a.createElement(p,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),m.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),m.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(m.a.Component);function f(e){var t=e.move?"Go to move #".concat(e.move," (").concat(e.step.coord.x,", ").concat(e.step.coord.y,")"):"Go to game start",r=e.move===e.stepNumber?"thick":"";return m.a.createElement("li",{key:e.move},m.a.createElement("button",{onClick:function(){return e.onClick(e.move)}},m.a.createElement("p",{className:r},t)))}var N=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null),coord:{x:null,y:null}}],stepNumber:0,xIsNext:!0},r}return Object(c.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),n={x:parseInt(e/3)+1,y:parseInt(e%3)+1};v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:[].concat(Object(a.a)(t),[{squares:r,coord:n}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:!(1&e)})}},{key:"renderHistoryButton",value:function(e){var t=this;return m.a.createElement(f,{move:e,step:this.state.history[e],stepNumber:this.state.stepNumber,onClick:function(e){return t.jumpTo(e)}})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=v(a.squares),s=r.map(function(e,r){return t.renderHistoryButton(r)});return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),m.a.createElement("div",{className:"game"},m.a.createElement("div",{className:"game-board"},m.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),m.a.createElement("div",{className:"game-info"},m.a.createElement("div",null,e),m.a.createElement("ol",null,s)))}}]),t}(m.a.Component);d.a.render(m.a.createElement(N,null),document.getElementById("root"))},17:function(e,t,r){}},[[10,2,1]]]);
//# sourceMappingURL=main.9472ee59.chunk.js.map