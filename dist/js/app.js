(function(e){function t(t){for(var n,i,l=t[0],c=t[1],p=t[2],u=0,d=[];u<l.length;u++)i=l[u],a[i]&&d.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(d.length)d.shift()();return r.push.apply(r,p||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,l=1;l<o.length;l++){var c=o[l];0!==a[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var s=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"3cb3":function(e,t,o){},"557b":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var n=o("a026"),a=o("5c96"),r=o.n(a),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"container"}},[o("router-view")],1)},l=[],c=o("2877"),p={},s=Object(c["a"])(p,i,l,!1,null,null,null);s.options.__file="App.vue";var u=s.exports,d=o("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"openlayer"},[o("div",{attrs:{id:"mapEle"}}),o("div",{staticClass:"el-popover el-popper",class:e.popupData.isShow?"":"hidden",attrs:{id:"popup-content","x-placement":"top"}},[o("div",{staticClass:"el-popover__title"},[e._v(e._s(e.popupData.name))]),o("p",[e._v("经纬度："+e._s(e.popupData.hdms))]),o("P",[e._v("geoType: "+e._s(e.popupData.type))]),o("div",{staticClass:"popper__arrow",staticStyle:{left:"107px"},attrs:{"x-arrow":""}})],1),o("el-slider",{staticClass:"zoomControl",attrs:{vertical:"",min:1,max:18,step:.1,"show-step":"",height:"180px"},on:{change:e.mapZoomChange},model:{value:e.mapZoom,callback:function(t){e.mapZoom=t},expression:"mapZoom"}}),o("div",{staticClass:"custom-control"},[o("el-tooltip",{attrs:{effect:"dark",content:"返回中心点",placement:"left"}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.backToCenterControl}})],1),o("el-tooltip",{attrs:{effect:"dark",content:"地图绘制",placement:"left"}},[o("el-dropdown",{attrs:{trigger:"click"},on:{command:e.editMapControl}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit"}}),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"Point"}},[e._v("点")]),o("el-dropdown-item",{attrs:{command:"LineString"}},[e._v("线")]),o("el-dropdown-item",{attrs:{command:"Polygon"}},[e._v("面")]),o("el-dropdown-item",{attrs:{command:"Circle"}},[e._v("圆")])],1)],1)],1),o("el-tooltip",{attrs:{effect:"dark",content:"切换底图",placement:"left"}},[o("el-dropdown",{attrs:{trigger:"click"},on:{command:e.changeTileServer}},[o("el-button",{attrs:{type:"primary",icon:"el-icon-picture"}}),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"ArcGIS"}},[e._v("默认")]),o("el-dropdown-item",{attrs:{command:"OSM"}},[e._v("OSM")]),o("el-dropdown-item",{attrs:{command:"Bing"}},[e._v("Bing")]),o("el-dropdown-item",{attrs:{command:"Google"}},[e._v("Google")])],1)],1)],1)],1)],1)},y=[],g=o("0038"),w=o.n(g),v=(o("50ce"),o("8439")),A=o.n(v),f=o("bad7"),b=o.n(f),h={name:"openlayer",data:function(){return{olMap:null,center:[12473897.880706105,2811920.244959629],mapZoom:11,popupOverlay:null,canMaker:!1,makerSource:null,drawInteraction:null,snapInteraction:null,mapTileLayer:null,popupData:{isShow:!1,name:"",hdms:"",type:""},tileSourceUrl:"http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",geoJson:{type:"FeatureCollection",name:"LZ",crs:{type:"name",properties:{name:"urn:ogc:def:crs:OGC:1.3:CRS84"}},features:[{type:"Feature",properties:{id:1,Name:"林场1",x:112.0209662239902,y:24.62356960451672},geometry:{type:"Point",coordinates:[111.97005423671791,24.4740833440151]}},{type:"Feature",properties:{id:2,Name:"林场2",x:112.07522938646737,y:24.605875095013296},geometry:{type:"Point",coordinates:[112.10826801650576,24.462888237142177]}},{type:"Feature",properties:{id:3,Name:"林场3",x:112.04219963539431,y:24.54925266460234},geometry:{type:"Point",coordinates:[112.01728525864405,24.527587989167323]}},{type:"Feature",properties:{id:4,Name:"石公山保护区",x:112.05045707316258,y:24.46903755485348},geometry:{type:"Point",coordinates:[112.05045707316258,24.46903755485348]}},{type:"Feature",properties:{id:5,Name:"林场5",x:112.09528316390458,y:24.40769658857494},geometry:{type:"Point",coordinates:[112.03191398825716,24.421237010721825]}},{type:"Feature",properties:{id:6,Name:"林场6",x:112.07051085059979,y:24.544534128734757},geometry:{type:"Point",coordinates:[112.10138301309469,24.534785024789]}}]}}},mounted:function(){this.buildOlMap()},methods:{buildOlMap:function(){var e=this,t=e.mapTileLayer=new w.a.layer.Tile({preload:4,source:new w.a.source.XYZ({url:e.tileSourceUrl})}),o=new w.a.source.Vector({features:new w.a.format.GeoJSON({featureProjection:"EPSG:3857"}).readFeatures(e.geoJson)}),n=function(e){return new w.a.style.Style({image:new w.a.style.Icon({src:A.a}),text:new w.a.style.Text({text:e.getProperties().Name,offsetY:-30,fill:new w.a.style.Fill({color:"#fffc00"})})})},a=e.VectorLayer=new w.a.layer.Vector({source:o,style:n}),r=new w.a.View({center:e.center,zoom:11});window.olMap=e.olMap=new w.a.Map({target:"mapEle",layers:[t,a],view:r}),e.createControl(),e.createMakerVector(),e.createOverlay(),e.bindMapEvent()},backToCenterControl:function(e){var t=this;t.olMap.getView().animate({zoom:11,center:t.center,duration:1e3})},editMapControl:function(e){var t=this;t.canMaker=!t.canMaker,t.drawInteraction=new w.a.interaction.Draw({source:t.makerSource,type:e}),t.olMap.addInteraction(t.drawInteraction),t.snapInteraction=new w.a.interaction.Snap({source:t.makerSource}),t.olMap.addInteraction(t.snapInteraction)},mapZoomChange:function(e){this.olMap.getView().setZoom(e)},createControl:function(){new w.a.control.Control({})},createOverlay:function(){this.popupOverlay=new w.a.Overlay({element:document.getElementById("popup-content")}),this.olMap.addOverlay(this.popupOverlay)},changeTileServer:function(e){var t=this,o=new w.a.source.XYZ({url:t.tileSourceUrl});switch(e){case"OSM":o=new w.a.source.OSM;break;case"Bing":o=new w.a.source.BingMaps({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"AerialWithLabels"});break;case"Google":o=new w.a.source.XYZ({url:"http://mt2.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}"});break}t.mapTileLayer.setSource(o)},createMakerVector:function(){var e=this;e.makerSource=new w.a.source.Vector;var t=this.makerVector=new w.a.layer.Vector({source:e.makerSource,style:new w.a.style.Style({fill:new w.a.style.Fill({color:"rgba(64, 158, 255, 0.2)"}),stroke:new w.a.style.Stroke({color:"#6bb4ff",width:2}),image:new w.a.style.Circle({radius:7,fill:new w.a.style.Fill({color:"#409eff"})})})});e.olMap.addLayer(t);var o=new w.a.interaction.Modify({source:e.makerSource});e.olMap.addInteraction(o)},bindMapEvent:function(){var e=this,t=new w.a.interaction.Select({condition:w.a.events.condition.click,layers:[e.VectorLayer],style:function(e){return new w.a.style.Style({image:new w.a.style.Icon({src:b.a}),text:new w.a.style.Text({text:e.getProperties().Name,offsetY:-30,fill:new w.a.style.Fill({color:"#ff00d6"})})})}});t.on("select",function(t){var o=t.selected;o.length>0?(e.popupOverlay.setPosition(t.mapBrowserEvent.coordinate),e.popupData.isShow=!0,e.popupData.name=o[0].get("Name"),e.popupData.hdms=w.a.coordinate.toStringHDMS(w.a.proj.transform(t.mapBrowserEvent.coordinate,"EPSG:3857","EPSG:4326")),e.popupData.type=o[0].getGeometry().getType()):e.popupData.isShow=!1}),e.olMap.addInteraction(t),document.addEventListener("keyup",function(t){27==t.keyCode&&(e.canMaker=!1,e.olMap.removeInteraction(e.drawInteraction),e.olMap.removeInteraction(e.snapInteraction)),console.log(t)}),e.olMap.getView().addEventListener("change:resolution",function(t){e.mapZoom=t.target.getZoom()})}}},I=h,S=(o("9870"),Object(c["a"])(I,m,y,!1,null,null,null));S.options.__file="index.vue";var k=S.exports;n["default"].use(d["a"]);var E=new d["a"]({routes:[{path:"/ol",name:"ol",component:k,meta:{title:"openlayers"}}]});E.beforeEach(function(e,t,o){e.meta.title&&(document.title=document.title+"-"+e.meta.title),o()});var M=E;o("0fae"),o("557b");n["default"].use(r.a,{size:"small",zIndex:3e3}),n["default"].config.productionTip=!1,new n["default"]({router:M,render:function(e){return e(u)}}).$mount("#app")},8439:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAhCAYAAADH97ugAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+IEmuOgAAA19JREFUSImt1W9oVXUcx/HXPZtTp4hFTZ1SlJCpPUkIelxBQSKd81AowihDyHpgRRBUBEXQs4wKgh4UCC3vCiKsJwmSzuYf1NBtl/y3uaVjm45td7v/Tg/mrbHuOfdq+8IPDr/v5/t9f7/fc87vl4lLUm1mxn3Xr9sTBB4PmrRnWJLPWzRTMDU2ZnhoSHeh4Cdko9CNpDyZJFAce6ZQ8PHixdanFVKpMDhET4/J8XGf4v0oNNEI6M5yWUdTk8fSe/1PYfpynDvncqViexT6LQ20sVJxIAjccyuQuXb1Kl1HzZTLtkehbC3Qqjh2IpPRfruQqg0O0dWlgCei0CEIbvqa8f1CQKB9DRs3asG+bKeVc0Gv4NGFgFTtwQ2sWGEt3mF2dEtwCW1pgcUiIyOmgkBf6zJx61Kbg0BLWkz/AN3d8lgbYFs9SF+On3/x2eEj7mhr8/DyZbYEgVX4Ii1ubTstLZZiazO2ponPnqOnx74otGue6zpevvm8s1ZsENDWxsCAbQG2JEEmp+jtVcGbKbXswUiSc+VK8EiAe5NEQ4PEsbNRqD8FNIEDSc7WpaAtwPIkUX4ajKdAqnYlydHcDBYFGE0SLVkM7s92ytQBJf5/hQIYC3AxSbSmnUzGajyZAmnFU0nOqTzoDXAkSbR8GRseAHuznYm/wAe4KynH6Oy8DgX4IaVamzaxebP1TU1+z3Z6Otv5z2myolTyJV5Nii0WGR4G34pLgrikJy6J09bMlLj/ovjPnMmrg4aL00r1YnI94v0dDsal2cO0grfRkdZZSwvr1mH2nbSmaavd9OWU8Tr/Hqrf4Zt6wbdip88wPe3DKNQ9FwQv4ehCQC5c4NIlP+Ld6t78G/ZunMbq24WMj/PrQSPlsoei0F/V/WCebhgv3i6kUqH7GOWynXMhIC7VXF/V+6JqrT9Oi/d3+LpWzvkdVe01DNxKN6Oj9PUZwO5a/iTQDbyAuBFIqcyx4+I4tiMKjdUUJYyuuj5vZGQnj4v3d9ibliupo6rtwYU0wbVrnD8vJ/1yrAuawA4JIywWOX5CGc9Focn/A4KD+KSW49Qp8nkfRaGuekkaAcFbyM3duDLI5X6n8F4jCRoFTeF5lGF6mpMnFfBsFCosJAgO4w1M9PbqKhTsjkJnGg3+G+c10zgSGakBAAAAAElFTkSuQmCC"},9870:function(e,t,o){"use strict";var n=o("3cb3"),a=o.n(n);a.a},bad7:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAhCAYAAADH97ugAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRjU2OUREQUMxNEYxMUU4OEEzQzkxNEIyMzRFOTRENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRjU2OUREQkMxNEYxMUU4OEEzQzkxNEIyMzRFOTRENSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBGNTY5REQ4QzE0RjExRTg4QTNDOTE0QjIzNEU5NEQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBGNTY5REQ5QzE0RjExRTg4QTNDOTE0QjIzNEU5NEQ1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YBSphgAAA3VJREFUeNqslltIVFEUhv85o6NOg3kJLY0iDcp8ShB6CaKIgkyix6AIo4wg68GKIKgIiqC3bhQ99CAIWVIQYdlDUZllIZZpjuY9b5OOeRlzdJz+NTjgZfaeUWcdFmdx9uXba++91jomL+qgk3G41w1iuNCAscMAUkwwosfwL5LfXU4MObrhqHJj4gW7lu7Hzr+qeUwqkBfefZzgRhQs6bqFTPHpQh9+omV0CCO3+ekKgSOhgBI8mCoxw9iOBQgXBjtaUY/mdsIPEPZBB8pgpzJu0xosUnrRj0rUjHvgEVip/7sxo08yV/V6KRDfJEhENjKjaBaXonzrXFAE9akJphSEQVKIy0CaZRoWNxN0kroFYZSNSEMsbKk0L/rPKJrvNmqSbuAEJrn7gy5urd2KKK8VMZm0LboxHehGFWrHaKaKR7nBIHa04CXe361AdXwSEjbbsCyLkGQ23dONS+UWWhAZQzNHziZH17kOTRIjxbxBJ+Y0DVKPT9v5gcZyMfQgEZ3oyRWPslSQUbjQgNYpmuc0aymk9qsa42CTV7aA1qo6deOPBGIdvenQgCQLlKkarXzkaARkU3ViTpPXUAiX7LeqIQJmeUUKaEDVKRpyIZHGWDAFDR2FMF/KyymgVlWnVTxIBvFKmrs0ENmb3apGF+R2o0FAH1WdeI2xgYFHuUWvVCFwlbpCNccAfJXjnYCe6fZkE0GZWJ9uhvkzYXuo/mwSOwnPA75P6YLcAaeYjyQzGL5wARevEdnrPq7PzYJHT10JWB7PgzbrxjShHd/Q8Ja3dluEr3YBF6glukGMcKxGsv9MrMGuoXjD+uSheWZmUn1MLQpnUqUnDI7xa/Smam49Okb9FA5IC5NOG7qe07wUqPDJPdxL7VkKhP8N9MYuKekovfEEAok4pMNiIfKjwrIAlvF8QnpmJ9j5Ii4/XAyoHr8YNcNFhDyZn8kDy2lq50IgEph2tMmYgsAlI7BIOB/x/UWFIJN8vqDWy0yfR2+cCwGJvKLeDwVUi0ZeAdcdQspVfYwgcxT6bqtGJFs0o7MxSHEMCpKilqfaQon+r/ghV/gQvRldCkjkDfVmoIYaRj+L43VCKoNNYoR4qc5TG2eX1F6mzK4ampdDmSBUkIt6mOqLdOYwVKPeTfMgvXGHEyRSQT0r58Y/o0qWjQJCvoc6+L8AAwC0hyAnCFCR4AAAAABJRU5ErkJggg=="}});