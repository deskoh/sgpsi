(window.webpackJsonpsgpsi=window.webpackJsonpsgpsi||[]).push([[0],{38:function(e,t,a){e.exports=a(91)},43:function(e,t,a){},71:function(e,t){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),c=a.n(o),l=(a(43),a(13)),i=a(35),s=a.n(i),u=a(36),p=a.n(u),f=a(37),m=a.n(f),d=s()("https://sgpsi.herokuapp.com/"),v=p()();v.configure(m()(d));var h=v.service("reading"),g=a(12),b=a.n(g),E=function(e){var t=e.value,a=void 0===t?0:t,n=e.updatedAt;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"PM2.5 reading"),r.a.createElement("p",null,r.a.createElement("code",{className:"Reading-value"},a)),r.a.createElement("p",{className:"Reading-footer"},n&&"Updated ".concat(b()(n).fromNow()," @ ").concat(b()(n).format("h:mm:ss a"))))};function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("title",null,"GitHub icon"),k=r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}),y=function(e){var t=e.svgRef,a=e.title,n=O(e,["svgRef","title"]);return r.a.createElement("svg",w({role:"img",viewBox:"0 0 24 24",ref:t},n),void 0===a?j:r.a.createElement("title",null,a),k)},A=r.a.forwardRef((function(e,t){return r.a.createElement(y,w({svgRef:t},e))})),N=(a.p,a(90),function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],u=i[1];return Object(n.useEffect)((function(){var e=function(e){o(e.value),u(e.createdAt)};return h.on("created",e),fetch("".concat("https://sgpsi.herokuapp.com/","reading/1")).then((function(e){return e.json()})).then((function(e){var t=e.data;t[0]&&(o(t[0].value),u(t[0].createdAt))})),function(){h.removeListener("created",e)}}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,{value:a,updatedAt:s})),r.a.createElement("div",{className:"App-body"},r.a.createElement("a",{className:"App-link",href:"https://data.heroku.com/dataclips/wkiropunkavnjbzdzafqfhibhzjh"},"Historical Data / Chart")),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("a",{className:"App-link",href:"https://github.com/deskoh/sgpsi",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(A,{className:"App-logo"}),"Source")))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);