(window.webpackJsonp=window.webpackJsonp||[]).push([[336,181],{1144:function(e,t,r){"use strict";r.r(t);r(8);var n=r(1),o=r(5),c=r(423),l={data:()=>({suppliers:[]}),head(){return this.tags},asyncData:e=>Object(n.a)((function*(){try{var{storeUrl:t,productsSuppliers:r}=e.store.getters.storeInformation,{query:n}=e.route,l="suppliers",d=(yield e.$api.stores.getPageHeadTags(t,l)).data,f=(yield e.$api.stores.getStoreSlugPage({storeUrl:t,urlSlug:l,query:n})).data,y={withProducts:!0};return r&&r.length&&(y.filter={_id:r}),{tags:d,pageData:f,suppliers:(yield e.$axios.get("/suppliers",{params:y,paramsSerializer:o.a})).data}}catch(t){return yield Object(c.a)(e,t)}}))()},d=r(42),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",e._l(e.pageData,(function(r){return t("div",{key:r.name},[r.name.includes("SuppliersList")?t("NuxtDynamic",e._b({attrs:{component:r.name,suppliers:e.suppliers}},"NuxtDynamic",r.props,!1)):t("NuxtDynamic",e._b({attrs:{component:r.name}},"NuxtDynamic",r.props,!1))],1)})),0)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NuxtDynamic:r(424).default})},422:function(e,t,r){"use strict";r(35),r(19),r(6);t.a={created(){var e=[],t=r=>{r&&Object.keys(r).forEach((n=>{if(r[n])if("object"==typeof r[n])t(r[n]);else if("string"==typeof r[n]){var o=new RegExp("\\${([A-Za-z0-9\\-\\_]+)\\}","g");r[n].match(o)&&(r[n]=r[n].replace(o,(t=>{var r=t.match("\\{(.*)\\}"),n=r[r.index];if(n){var o=this.parseResources.find((i=>i.key===n||i.orkey===n));return o?o.resource[o.key]||o.resource[o.orkey]||"":(e.push(n),"")}return""})))}}))};t(this.componentProps),e.length&&console.log("".concat(e.join(", ")," resource not not declared"))}}},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(1);r(7),r(6);function o(e,t,r){return c.apply(this,arguments)}function c(){return(c=Object(n.a)((function*(e,t,r){var n,o=t.message||t.data||t.statusText,c=t.response&&t.response.status||t.status||r,l="";try{var d=e.route.path.replace("/","").split("/");l=[3===d.length?"cat-facetgroup":d[0]||"facets",d.slice(1).join("/")].filter((e=>e)).join("/")}catch(t){}if(404===c)try{var{path:path}=e.route,f="/"!==path?(path||"").replace(/\/+/,""):path,{_id:y}=e.store.getters.storeInformation,{urlSlug:h,additionalSlug:v}=yield e.$api.stores.getPageRedirectUrl(y,f);if(h)return e.redirect(301,v?"/".concat(h,"/").concat(v):"/".concat(h))}catch(t){}return e.error({message:o,statusCode:c,pageRequest:l,statusText:(null===(n=t.response)||void 0===n||null===(n=n.data)||void 0===n?void 0:n.message)||""})}))).apply(this,arguments)}},424:function(e,t,r){"use strict";r.r(t);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c=new Map;function l(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(c.has(t))return c.get(t);var r=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return c.set(t,r),r}function d(e,t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){n(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({render:function(t){var r=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),t(r)}},t)}function f(component){var e,t=new Promise((function(t){e=t}));return t._resolve=function(){e("function"==typeof component?component():component)},t}var y="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean,r(6);var h=e=>e.replace(/_/,"").toUpperCase(),v=e=>e.replace(/-/,"").toUpperCase(),m=e=>e=(e=e.replace(/(^\w|-\w)/g,v)).replace(/(^\w|_\w)/g,h),O=r(422),w={name:"Dynamic",inheritAttrs:!1,props:{component:{type:String,default:null},hydration:{type:String,default:"WhenVisible"},parseResources:{type:Array,default:()=>[]},componentProps:Object},mixins:[O.a],computed:{hydrate(){var e;return null!==(e=this["hydrate".concat(this.hydration)])&&void 0!==e?e:null},name(){var e;return null!==(e=this.component)&&void 0!==e?e:this.$attrs.name},componentLoader(){var e;return null!==(e=["",...this.$nuxtDynamic.prefixes].map((e=>{var t="Lazy".concat(m(e)).concat(m(this.name));return t in this.$nuxtDynamic.loaders?this.$nuxtDynamic.loaders[t]:null})).filter((e=>e)).shift())&&void 0!==e?e:null},lazyComponent(){return this.hydrate&&this.componentLoader?this.hydrate(this.componentLoader):this.name}},methods:{hydrateOnInteraction:function(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.event,r=void 0===t?"focus":t,n=e.ignoredProps;if(y)return component;var o=f(component),c=Array.isArray(r)?r:[r],l=d(o,{props:n,mounted:function(){var e=this;c.forEach((function(t){e.$el.addEventListener(t,o._resolve,{capture:!0,once:!0,passive:!0})}))}});return function(){return{component:o,delay:0,loading:l}}},hydrateWhenIdle:function(component){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoredProps;if(y)return component;var t=f(component),r=d(t,{props:e,mounted:function(){if("requestIdleCallback"in window&&"requestAnimationFrame"in window){var e=requestIdleCallback((function(){requestAnimationFrame(t._resolve)}),{timeout:this.idleTimeout});t.then((function(){return cancelIdleCallback(e)}))}else t._resolve()}});return function(){return{component:t,delay:0,loading:r}}},hydrateWhenVisible:function(component){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.ignoredProps,r=e.observerOptions;if(y)return component;var n=f(component),o=l(r),c=d(n,{props:t,mounted:function(){var e=this;if(o){this.$el.hydrate=n._resolve;n.then((function(){return o.unobserve(e.$el)})),o.observe(this.$el)}else n._resolve()}});return function(){return{component:n,delay:0,loading:c}}},hydrateNever:function(component){if(y)return component;var e=f(component),t=d(e);return function(){return{component:e,delay:0,loading:t}}}}},_=w,j=r(42),component=Object(j.a)(_,(function(){var e=this,t=e._self._c;return e.lazyComponent?t(e.lazyComponent,e._g(e._b({tag:"component",scopedSlots:e._u([e._l(e.$slots,(function(t,r){return{key:r,fn:function(){return[e._t(r)]},proxy:!0}})),e._l(e.$scopedSlots,(function(t,r){return{key:r,fn:function(t){return[e._t(r,null,null,t)]}}}))],null,!0)},"component",e.$attrs,!1),e.$listeners)):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);