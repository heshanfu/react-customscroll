/*!
 * react-customscroll: 3.0.1
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/react-customscroll)
 * This is little component for custom scroll in React
 * MIT
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.CustomScroll=t(require("react")):e.CustomScroll=t(e.React)}(this,function(e){return function(e){function t(l){if(o[l])return o[l].exports;var r=o[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,l){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:l})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,o){e.exports=o(1)},function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,o,l){return o&&e(t.prototype,o),l&&e(t,l),t}}(),s=o(2),n=l(s),i=o(3),c=l(o(4)),a=l(o(5)),u=l(o(6)),h=l(o(7)),d=(l(o(8)),l(o(9))),f=l(o(10)),p=500,m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));o.nextWrapperHeight=0,o.nextHolderHeight=0,o.scrollID=(0,f.default)();var l=(0,c.default)(),r=o;o.isZero=0===l,o.isZero&&(l=17),o.reset=function(){r.removeListeners(),r.blockSelection(!0)},o.styles=(0,u.default)({isZero:o.isZero,originalScrollWidth:l,scrollWidth:void 0!==e.scrollWidth?e.scrollWidth:"6px",scrollAreaColor:void 0!==e.scrollAreaColor?e.scrollAreaColor:"#494949",scrollBarRadius:void 0!==e.scrollBarRadius?e.scrollBarRadius:"6px",scrollBarColor:void 0!==e.scrollBarColor?e.scrollBarColor:"#aeaeae"});var s=void 0!==e.className?e.className:"react-customscroll";return o.restScrollAfterResize=function(){r.nextWrapperHeight=0,r.nextHolderHeight=0},(0,i.on)(document,["mouseWithoutWindow"],o.reset),(0,i.on)(window,["resize"],o.restScrollAfterResize),o.timer={},o.interval=setInterval(o.reinit.bind(o),p),o.state={width:"calc(100% + "+l+"px)",selection:!0,scrollAreaShow:!1,animate:e.animate||!0,classes:{base:s,holder:s+"-holder",frame:s+"-frame",area:s+"-scrollbar-area","area-holder":s+"-scrollbar-holder","scroll-bar":s+"-scrollbar"}},document&&document.getElementById&&(document.getElementById(o.scrollID)||(0,d.default)("\n#"+o.scrollID+"::-webkit-scrollbar {\n  opacity: 0;\n}\n#"+o.scrollID+"::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n}\n                ",o.scrollID)),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.Component),r(t,[{key:"componentDidMount",value:function(){this.scrollBlock=this.refs.customScrollHolder,this.customScroll=this.refs.customScroll,this.customScrollHolder=this.refs.customScrollFrame}},{key:"componentWillUnmount",value:function(){if(document&&document.getElementById){var e=document.getElementById(this.scrollID);e&&e.parentNode.removeChild(e)}clearInterval(this.interval),this.removeListeners(),clearTimeout(this.timer)}},{key:"getParams",value:function(){var e=this.customScroll.offsetHeight,t=this.customScrollHolder.offsetHeight,o=e/t;return{wrapperHeight:e,holderHeight:t,percentDiff:o,height:e*o}}},{key:"blockSelection",value:function(e){e||(0,a.default)(),this.setState({selection:!!e})}},{key:"onMouseDown",value:function(e){e.stopPropagation(),e.preventDefault();var t;if("which"in e?t=3===e.which:"button"in e&&(t=2===e.button),t)return setTimeout(this.endScroll),!1;var o=this.scrollBlock,l=e.touches?e.touches[0].pageY:e.pageY,r=o.scrollTop;this.blockSelection(!1);var s=this;this.scrollRun=function(e){e.stopPropagation(),e.preventDefault();var t=s.getParams(),n=t.holderHeight/t.wrapperHeight,i=e.touches?e.touches[0].pageY:e.pageY;(0,h.default)(o,(i-l)*n+r)},this.endScroll=function(){s.removeListeners(),s.blockSelection(!0)},(0,i.on)(document,["mouseup","touchend"],this.endScroll),(0,i.on)(document,["mousemove","touchmove"],this.scrollRun)}},{key:"removeListeners",value:function(){(0,i.off)(document,["mouseWithoutWindow"],this.reset),(0,i.off)(window,["resize"],this.restScrollAfterResize),(0,i.off)(document,["mouseup","touchend"],this.endScroll),(0,i.off)(document,["mousemove","touchmove"],this.scrollRun)}},{key:"reinit",value:function(){var e=this.getParams(),t=e.wrapperHeight,o=e.holderHeight;t===this.nextWrapperHeight&&o===this.nextHolderHeight||this.setState({scrollAreaShow:o>t}),this.nextWrapperHeight=t,this.nextHolderHeight=o}},{key:"jump",value:function(e){var t=e.touches?e.touches[0].pageY:e.pageY,o=this.refs.scrollBar,l=this.scrollBlock.scrollTop,r=this.getParams().wrapperHeight,s=this.scrollBlock.getBoundingClientRect().top;if(t<s+o.offsetTop||t>s+o.offsetTop+o.offsetHeight){var n=l+r*(s+o.offsetTop<=t?1:-1);(0,h.default)(this.scrollBlock,n)}}},{key:"getScrollArea",value:function(){return n.default.createElement("div",{ref:"scroll-area",style:this.styles.scrollArea,onClick:this.jump.bind(this),className:this.state.classes.area},n.default.createElement("div",{ref:"scroll-area-holder",style:this.styles.scrollAreaFrame,className:this.state.classes["area-holder"]},n.default.createElement("div",{ref:"scrollBar",style:Object.assign({},this.styles.scrollBar,this.getScrollBarStyles.call(this)),onMouseDown:this.onMouseDown.bind(this),onTouchStart:this.onMouseDown.bind(this),className:this.state.classes["scroll-bar"]})))}},{key:"scroll",value:function(){this.setState({scrollTop:this.scrollBlock.scrollTop})}},{key:"getScrollBarStyles",value:function(){var e=this.getParams(),t=e.holderHeight,o=e.percentDiff,l=e.height;return{top:(this.state.scrollTop||this.scrollBlock.scrollTop)*(l<20?o-(20-l)/t:o),height:l<20?20:l}}},{key:"componentWillReceiveProps",value:function(e){var t=parseInt(e.scrollTo);void 0===t||isNaN(t)||h.default.call(this,this.scrollBlock,t,this.state.animate)}},{key:"setY",value:function(e){h.default.call(this,this.scrollBlock,e,this.state.animate)}},{key:"render",value:function(){var e=this.state.selection?this.styles.ctmScroll:Object.assign({},this.styles.ctmScroll,this.styles.noselect),t=this.state.scrollAreaShow?Object.assign({},this.styles.ctmScrollFrame,this.styles.ctmScrollActive):this.styles.ctmScrollFrame;return n.default.createElement("div",{ref:"customScroll",style:e,className:this.state.classes.base},n.default.createElement("div",{ref:"customScrollHolder",style:Object.assign({},{width:this.state.width},this.styles.ctmScrollHolder),onScroll:this.scroll.bind(this),className:this.state.classes.holder,id:this.scrollID},n.default.createElement("div",{ref:"customScrollFrame",style:t,className:this.state.classes.frame},function(e){return"function"==typeof e}(this.props.children)?this.props.children(this.scrollBlock&&this.scrollBlock.scrollTop?this.scrollBlock.scrollTop:0):this.props.children),this.state.scrollAreaShow?this.getScrollArea.call(this):null))}}]),t}();e.exports=m},function(t,o){t.exports=e},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,o){t.forEach(function(t){e.addEventListener(t,o)})},t.off=function(e,t,o){t.forEach(function(t){e.removeEventListener(t,o)})}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var o=e.offsetWidth;t.style.overflow="scroll";var l=e.offsetWidth;return o===l&&(l=t.clientWidth),document.body.removeChild(t),o-l}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){document.selection?document.selection.empty():window.getSelection&&window.getSelection().removeAllRanges()}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{scrollArea:{background:e.scrollAreaColor,width:e.scrollWidth,padding:"1px",zIndex:"10",top:"0",right:"0",position:"absolute",height:"100%"},scrollAreaFrame:{height:"100%",position:"relative"},scrollBar:{borderRadius:e.scrollBarRadius,position:"absolute",top:"0",width:"100%",background:e.scrollBarColor,cursor:"pointer"},ctmScroll:{overflow:"hidden",height:"100%",position:"relative"},ctmScrollActive:{paddingRight:e.scrollWidth},ctmScrollFrame:Object.assign({},{overflow:"hidden"},e.isZero?{width:"calc(100% - "+e.originalScrollWidth+"px)"}:{}),noselect:{WebkitTouchCallout:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},ctmScrollHolder:{overflowY:"scroll",height:"100%"}}}},function(e,t,o){"use strict";function l(e,t,o){if(o<=0)return!1;var r=(t-e.scrollTop)/o*10;setTimeout(function(){e.scrollTop=e.scrollTop+r,e.scrollTop!==t&&l.call(this,e,t,o-10)}.bind(this),10)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o){o?l.call(this,e,t,500):e.scrollTop=t}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e;return{getInstance:function(){return e||(e=function(){function e(){var e=document.createEvent("Event");e.initEvent("mouseWithoutWindow",!0,!0),document.dispatchEvent(e)}document.addEventListener("mouseup",function(t){var o=window,l=document,r=l.documentElement,s=l.getElementsByTagName("body")[0],n=o.innerWidth||r.clientWidth||s.clientWidth,i=o.innerHeight||r.clientHeight||s.clientHeight;(t.clientX>=n||t.clientX<0||t.clientY>=i||t.clientY<0)&&e()}),window.addEventListener("blur",function(){e()})}()),e}}}().getInstance();t.default=l},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.setAttribute("id",t),l.type="text/css",l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e)),o.appendChild(l)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return"_"+Math.random().toString(36).substr(2,9)}}])});