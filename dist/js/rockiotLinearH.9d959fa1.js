(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["rockiotLinearH"],{3775:function(t,s,e){"use strict";e.d(s,"a",(function(){return i}));e("e25e"),Math.PI;function i(t,s){for(var e in s)t.setAttributeNS(null,e,s[e])}},"97b5":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{ref:t.$attrs.serial,class:"typeRange rockiot-gauge rockiot-gauge-"+t.$attrs.size,attrs:{height:t.svgheight,width:t.svgwidth,"view-box":"0 0 "+t.svgwidth+" "+t.svgheight,id:t.$attrs.serial}},[e("g",{ref:"scale-"+t.$attrs.serial,staticClass:"scale",style:t.scaleStyle,attrs:{stroke:"red"}}),e("rect",{staticClass:"outline",style:t.outlineStyle,attrs:{id:"outline-"+t.$attrs.serial,x:t.offsetX,width:t.$attrs.max*t.factor,height:t.barHeight,y:t.offsetY-t.barHeight}}),e("rect",{staticClass:"fill",style:t.fillStyle,attrs:{id:"fill-"+t.$attrs.serial,x:t.offsetX,width:t.pos,height:t.barHeight,y:t.offsetY-t.barHeight}}),e("rect",{staticClass:"needle",style:t.animate("x"),attrs:{id:"needle-"+t.$attrs.serial,width:"1",x:this.pos+this.offsetX,y:t.offsetY-t.barHeight-5,height:t.barHeight+10,fill:t.$attrs.needleColor}})])},a=[],r=(e("acd8"),e("e25e"),e("3775")),h={name:"RockiotSvgLinearH",data:function(){return{svgwidth:370,svgheight:90,offsetX:20,offsetY:60,barHeight:20,scaleY:0,factor:3.5,svg:null,scaleX:90,offsetText:10,pos:0,snapObject:null,aniPos:[0,0],oldValue:0}},computed:{scaleStyle:function(){return"stroke:"+this.$attrs.scaleColor+";"},scaleTextColor:function(){return"fill:"+this.$attrs.scaleTextColor+";"},outlineStyle:function(){return"fill:"+this.$attrs.barColor+";stroke:"+this.$attrs.barBorderColor+";"},fillStyle:function(){return"fill:"+this.$attrs.progressColor+";stroke:transparent;"+this.animate("width")}},watch:{"$attrs.barColor":function(t){this.fillStyle()},"$attrs.value":function(t){this.pos=parseInt(t)*this.factor,this.aniPos[0]=this.oldValue,this.aniPos[1]=this.pos,this.oldValue=this.pos}},methods:{animate:function(t){return this.$attrs.animation?"transition: "+t+" "+parseFloat(this.$attrs.animation/1e3)+"s linear;":""},updateGauge:function(){},gaugeSize:function(){switch(this.$attrs.size){case"md":this.offsetX=20,this.offsetY=70,this.barHeight=25,this.scaleY=-15;break;case"sm":this.offsetX=20,this.offsetY=70,this.barHeight=10,this.scaleY=0;break;case"lg":this.offsetX=20,this.offsetY=70,this.barHeight=40,this.scaleY=-30;break;default:this.offsetX=20,this.offsetY=70,this.barHeight=25,this.scaleY=-15;break}},createScale:function(){for(var t="http://www.w3.org/2000/svg",s=parseInt(this.svgwidth)-this.offsetX-this.offsetX,e=s/parseInt(this.$attrs.ticks)/10,i=0,a=0,h=0;i<=10*parseInt(this.$attrs.ticks);h+=e){var l=document.createElementNS(t,"line"),o=5;parseInt(this.$attrs.smallscale)&&i%10!=0&&i>0&&(o=0);var n={class:"scale",style:this.scaleStyle,x1:h+this.offsetX,y1:this.offsetY,x2:h+this.offsetX,y2:this.offsetY-20-o+this.scaleY};if(Object(r["a"])(l,n),this.svg.scale.appendChild(l),i%10===0||0===i){0!==i&&i!==parseInt(this.$attrs.ticks)||4;var f=document.createElementNS(t,"text"),c={class:"scaleNumbersLinear",stroke:"transparent",style:this.scaleTextColor,x:h+this.offsetX,y:this.offsetY-30+this.scaleY};Object(r["a"])(f,c);var g=(parseInt(this.$attrs.max)-parseInt(this.$attrs.min))/parseInt(this.$attrs.ticks);a=parseInt(this.$attrs.min)+i*g,f.textContent=parseInt(a)/10,this.svg.scale.appendChild(f)}i++}}},mounted:function(){var t=this.$attrs.serial;"linear"===this.$attrs.variation&&this.$attrs.svgwidth>this.$attrs.svgheight&&(this.svgwidth=this.$attrs.svgwidth,this.svgheight=this.$attrs.svgheight),this.$attrs.svgwidth>this.$attrs.svgheight&&(this.svgwidth=this.$attrs.svgheight,this.svgheight=this.$attrs.svgwidth);var s=parseInt(this.svgwidth)-2*this.offsetX;this.svg=this.$refs[t],this.svg.scale=this.$refs["scale-"+t],this.factor=s/parseInt(this.$attrs.max),parseInt(this.$attrs.value)>parseInt(this.$attrs.max)&&(this.$attrs.value=this.$attrs.max),this.pos=parseInt(this.$attrs.value)*this.factor,this.gaugeSize(),parseInt(this.$attrs.scale)&&this.createScale(),this.aniPos[1]=this.$attrs.value*this.factor}},l=h,o=e("2877"),n=Object(o["a"])(l,i,a,!1,null,"145325c6",null);s["default"]=n.exports}}]);
//# sourceMappingURL=rockiotLinearH.9d959fa1.js.map