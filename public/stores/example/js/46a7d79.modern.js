(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1212:function(r,t,e){"use strict";e.r(t);var c={props:{productsList:Array,currentCategory:Object,categories:Object|Array},computed:{breadcrumbsCategories(){for(var r=[],t=[...this.currentCategory.parents],{_id:e}=this.currentCategory.parentCategory||{};e;){var c=t.findIndex((r=>r._id===e));if(c>-1){var n=t.splice(c,1)[0];r.unshift(n),e=n.parentCategory}else e=null}return r}}},n=e(42),component=Object(n.a)(c,(function(){var r=this,t=r._self._c;return r.productsList?t("div",{class:r.categories.class||"container-max"},[r.currentCategory.parents&&r.currentCategory.parents.length>0&&!r.categories.hideBreadcrumbs?t("nav",{attrs:{"aria-label":"breadcrumb"}},[t("ol",{staticClass:"breadcrumb"},[r._l(r.breadcrumbsCategories,(function(e,c){return t("li",{key:e._id,staticClass:"breadcrumb-item"},[t("n-link",{attrs:{to:"/cat/".concat(e.slug)}},[r._v(r._s(e.name))])],1)})),r._v(" "),t("li",{staticClass:"breadcrumb-item active"},[t("n-link",{attrs:{to:"/cat/".concat(r.currentCategory.slug)}},[r._v(r._s(r.currentCategory.name))])],1)],2)]):r._e()]):r._e()}),[],!1,null,null,null);t.default=component.exports}}]);