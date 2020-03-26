<script type='text/javascript'>
//<![CDATA[
function openTabs(t,e){var o,s,i;for(s=document.getElementsByClassName("tabcontent"),o=0;o<s.length;o++)s[o].style.display="none";for(i=document.getElementsByClassName("tablinks"),o=0;o<i.length;o++)i[o].className=i[o].className.replace(" active","");document.getElementById(e).style.display="block",t.currentTarget.className+=" active"}"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),function(r,l,p,m){var o={init:function(t,e){var o=this;o.$elem=r(e),o.options=r.extend({},r.fn.owlCarousel.options,o.$elem.data(),t),o.userOptions=t,o.loadContent()},loadContent:function(){var s=this;if("function"==typeof s.options.beforeInit&&s.options.beforeInit.apply(this,[s.$elem]),"string"==typeof s.options.jsonPath){var t=s.options.jsonPath;r.getJSON(t,function(t){if("function"==typeof s.options.jsonSuccess)s.options.jsonSuccess.apply(this,[t]);else{var e="";for(var o in t.owl)e+=t.owl[o].item;s.$elem.html(e)}s.logIn()})}else s.logIn()},logIn:function(t){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible,e.setVars()},setVars:function(){var t=this;if(0===t.$elem.children().length)return!1;t.baseClass(),t.eventTypes(),t.$userItems=t.$elem.children(),t.itemsAmount=t.$userItems.length,t.wrapItems(),t.$owlItems=t.$elem.find(".owl-item"),t.$owlWrapper=t.$elem.find(".owl-wrapper"),t.playDirection="next",t.prevItem=0,t.prevArr=[0],t.currentItem=0,t.customEvents(),t.onStartup()},onStartup:function(){var t=this;t.updateItems(),t.calculateAll(),t.buildControls(),t.updateControls(),t.response(),t.moveEvents(),t.stopOnHover(),t.owlStatus(),!1!==t.options.transitionStyle&&t.transitionTypes(t.options.transitionStyle),!0===t.options.autoPlay&&(t.options.autoPlay=5e3),t.play(),t.$elem.find(".owl-wrapper").css("display","block"),t.$elem.is(":visible")?t.$elem.css("opacity",1):t.watchVisibility(),t.onstartup=!1,t.eachMoveUpdate(),"function"==typeof t.options.afterInit&&t.options.afterInit.apply(this,[t.$elem])},eachMoveUpdate:function(){var t=this;!0===t.options.lazyLoad&&t.lazyLoad(),!0===t.options.autoHeight&&t.autoHeight(),t.onVisibleItems(),"function"==typeof t.options.afterAction&&t.options.afterAction.apply(this,[t.$elem])},updateVars:function(){var t=this;"function"==typeof t.options.beforeUpdate&&t.options.beforeUpdate.apply(this,[t.$elem]),t.watchVisibility(),t.updateItems(),t.calculateAll(),t.updatePosition(),t.updateControls(),t.eachMoveUpdate(),"function"==typeof t.options.afterUpdate&&t.options.afterUpdate.apply(this,[t.$elem])},reload:function(t){var e=this;setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var t=this;if(!1!==t.$elem.is(":visible"))return!1;t.$elem.css({opacity:0}),clearInterval(t.autoPlayInterval),clearInterval(t.checkVisible),t.checkVisible=setInterval(function(){t.$elem.is(":visible")&&(t.reload(),t.$elem.animate({opacity:1},200),clearInterval(t.checkVisible))},500)},wrapItems:function(){var t=this;t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),t.wrapperOuter=t.$elem.find(".owl-wrapper-outer"),t.$elem.css("display","block")},baseClass:function(){var t=this,e=t.$elem.hasClass(t.options.baseClass),o=t.$elem.hasClass(t.options.theme);e||t.$elem.addClass(t.options.baseClass),o||t.$elem.addClass(t.options.theme)},updateItems:function(){var t=this;if(!1===t.options.responsive)return!1;if(!0===t.options.singleItem)return t.options.items=t.orignalItems=1,t.options.itemsCustom=!1,t.options.itemsDesktop=!1,t.options.itemsDesktopSmall=!1,t.options.itemsTablet=!1,t.options.itemsTabletSmall=!1,t.options.itemsMobile=!1;var e=r(t.options.responsiveBaseWidth).width();if(e>(t.options.itemsDesktop[0]||t.orignalItems)&&(t.options.items=t.orignalItems),void 0!==t.options.itemsCustom&&!1!==t.options.itemsCustom)for(var o in t.options.itemsCustom.sort(function(t,e){return t[0]-e[0]}),t.options.itemsCustom)void 0!==t.options.itemsCustom[o]&&t.options.itemsCustom[o][0]<=e&&(t.options.items=t.options.itemsCustom[o][1]);else e<=t.options.itemsDesktop[0]&&!1!==t.options.itemsDesktop&&(t.options.items=t.options.itemsDesktop[1]),e<=t.options.itemsDesktopSmall[0]&&!1!==t.options.itemsDesktopSmall&&(t.options.items=t.options.itemsDesktopSmall[1]),e<=t.options.itemsTablet[0]&&!1!==t.options.itemsTablet&&(t.options.items=t.options.itemsTablet[1]),e<=t.options.itemsTabletSmall[0]&&!1!==t.options.itemsTabletSmall&&(t.options.items=t.options.itemsTabletSmall[1]),e<=t.options.itemsMobile[0]&&!1!==t.options.itemsMobile&&(t.options.items=t.options.itemsMobile[1]);t.options.items>t.itemsAmount&&!0===t.options.itemsScaleUp&&(t.options.items=t.itemsAmount)},response:function(){var t,e=this;if(!0!==e.options.responsive)return!1;var o=r(l).width();e.resizer=function(){r(l).width()!==o&&(!1!==e.options.autoPlay&&clearInterval(e.autoPlayInterval),clearTimeout(t),t=setTimeout(function(){o=r(l).width(),e.updateVars()},e.options.responsiveRefreshRate))},r(l).resize(e.resizer)},updatePosition:function(){var t=this;t.jumpTo(t.currentItem),!1!==t.options.autoPlay&&t.checkAp()},appendItemsSizes:function(){var o=this,s=0,i=o.itemsAmount-o.options.items;o.$owlItems.each(function(t){var e=r(this);e.css({width:o.itemWidth}).data("owl-item",Number(t)),t%o.options.items!=0&&t!==i||i<t||(s+=1),e.data("owl-roundPages",s)})},appendWrapperSizes:function(){var t=this,e=t.$owlItems.length*t.itemWidth;t.$owlWrapper.css({width:2*e,right:0}),t.appendItemsSizes()},calculateAll:function(){var t=this;t.calculateWidth(),t.appendWrapperSizes(),t.loops(),t.max()},calculateWidth:function(){var t=this;t.itemWidth=Math.round(t.$elem.width()/t.options.items)},max:function(){var t=this,e=-1*(t.itemsAmount*t.itemWidth-t.options.items*t.itemWidth);return t.options.items>t.itemsAmount?(e=t.maximumItem=0,t.maximumPixels=0):(t.maximumItem=t.itemsAmount-t.options.items,t.maximumPixels=e),e},min:function(){return 0},loops:function(){var t=this;t.positionsInArray=[0],t.pagesInArray=[];for(var e=0,o=0,s=0;s<t.itemsAmount;s++)if(o+=t.itemWidth,t.positionsInArray.push(-o),!0===t.options.scrollPerPage){var i=r(t.$owlItems[s]).data("owl-roundPages");i!==e&&(t.pagesInArray[e]=t.positionsInArray[s],e=i)}},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=r('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var e=this,t=r('<div class="owl-buttons"/>');e.owlControls.append(t),e.buttonPrev=r("<div/>",{class:"owl-prev",html:e.options.navigationText[0]||""}),e.buttonNext=r("<div/>",{class:"owl-next",html:e.options.navigationText[1]||""}),t.append(e.buttonPrev).append(e.buttonNext),t.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(t){t.preventDefault()}),t.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(t){t.preventDefault(),r(this).hasClass("owl-next")?e.next():e.prev()})},buildPagination:function(){var e=this;e.paginationWrapper=r('<div class="owl-pagination"/>'),e.owlControls.append(e.paginationWrapper),e.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(t){t.preventDefault(),Number(r(this).data("owl-page"))!==e.currentItem&&e.goTo(Number(r(this).data("owl-page")),!0)})},updatePagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.html("");for(var e=0,o=t.itemsAmount-t.itemsAmount%t.options.items,s=0;s<t.itemsAmount;s++)if(s%t.options.items==0){if(e+=1,o===s)var i=t.itemsAmount-t.options.items;var n=r("<div/>",{class:"owl-page"}),a=r("<span></span>",{text:!0===t.options.paginationNumbers?e:"",class:!0===t.options.paginationNumbers?"owl-numbers":""});n.append(a),n.data("owl-page",o===s?i:s),n.data("owl-roundPages",e),t.paginationWrapper.append(n)}t.checkPagination()},checkPagination:function(){var o=this;if(!1===o.options.pagination)return!1;o.paginationWrapper.find(".owl-page").each(function(t,e){r(this).data("owl-roundPages")===r(o.$owlItems[o.currentItem]).data("owl-roundPages")&&(o.paginationWrapper.find(".owl-page").removeClass("active"),r(this).addClass("active"))})},checkNavigation:function(){var t=this;if(!1===t.options.navigation)return!1;!1===t.options.rewindNav&&(0===t.currentItem&&0===t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.addClass("disabled")):0===t.currentItem&&0!==t.maximumItem?(t.buttonPrev.addClass("disabled"),t.buttonNext.removeClass("disabled")):t.currentItem===t.maximumItem?(t.buttonPrev.removeClass("disabled"),t.buttonNext.addClass("disabled")):0!==t.currentItem&&t.currentItem!==t.maximumItem&&(t.buttonPrev.removeClass("disabled"),t.buttonNext.removeClass("disabled")))},updateControls:function(){var t=this;t.updatePagination(),t.checkNavigation(),t.owlControls&&(t.options.items>=t.itemsAmount?t.owlControls.hide():t.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(t){var e=this;if(e.isTransition)return!1;if(e.currentItem+=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem>e.maximumItem+(1==e.options.scrollPerPage?e.options.items-1:0)){if(!0!==e.options.rewindNav)return e.currentItem=e.maximumItem,!1;e.currentItem=0,t="rewind"}e.goTo(e.currentItem,t)},prev:function(t){var e=this;if(e.isTransition)return!1;if(!0===e.options.scrollPerPage&&0<e.currentItem&&e.currentItem<e.options.items?e.currentItem=0:e.currentItem-=!0===e.options.scrollPerPage?e.options.items:1,e.currentItem<0){if(!0!==e.options.rewindNav)return e.currentItem=0,!1;e.currentItem=e.maximumItem,t="rewind"}e.goTo(e.currentItem,t)},goTo:function(t,e,o){var s=this;if(s.isTransition)return!1;if("function"==typeof s.options.beforeMove&&s.options.beforeMove.apply(this,[s.$elem]),t>=s.maximumItem?t=s.maximumItem:t<=0&&(t=0),s.currentItem=s.owl.currentItem=t,!1!==s.options.transitionStyle&&"drag"!==o&&1===s.options.items&&!0===s.browser.support3d)return s.swapSpeed(0),!0===s.browser.support3d?s.transition3d(s.positionsInArray[t]):s.css2slide(s.positionsInArray[t],1),s.afterGo(),s.singleItemTransition(),!1;var i=s.positionsInArray[t];!0===s.browser.support3d?(!(s.isCss3Finish=!1)===e?(s.swapSpeed("paginationSpeed"),setTimeout(function(){s.isCss3Finish=!0},s.options.paginationSpeed)):"rewind"===e?(s.swapSpeed(s.options.rewindSpeed),setTimeout(function(){s.isCss3Finish=!0},s.options.rewindSpeed)):(s.swapSpeed("slideSpeed"),setTimeout(function(){s.isCss3Finish=!0},s.options.slideSpeed)),s.transition3d(i)):!0===e?s.css2slide(i,s.options.paginationSpeed):"rewind"===e?s.css2slide(i,s.options.rewindSpeed):s.css2slide(i,s.options.slideSpeed),s.afterGo()},jumpTo:function(t){var e=this;"function"==typeof e.options.beforeMove&&e.options.beforeMove.apply(this,[e.$elem]),t>=e.maximumItem||-1===t?t=e.maximumItem:t<=0&&(t=0),e.swapSpeed(0),!0===e.browser.support3d?e.transition3d(e.positionsInArray[t]):e.css2slide(e.positionsInArray[t],1),e.currentItem=e.owl.currentItem=t,e.afterGo()},afterGo:function(){var t=this;t.prevArr.push(t.currentItem),t.prevItem=t.owl.prevItem=t.prevArr[t.prevArr.length-2],t.prevArr.shift(0),t.prevItem!==t.currentItem&&(t.checkPagination(),t.checkNavigation(),t.eachMoveUpdate(),!1!==t.options.autoPlay&&t.checkAp()),"function"==typeof t.options.afterMove&&t.prevItem!==t.currentItem&&t.options.afterMove.apply(this,[t.$elem])},stop:function(){this.apStatus="stop",clearInterval(this.autoPlayInterval)},checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var t=this;if(!(t.apStatus="play")===t.options.autoPlay)return!1;clearInterval(t.autoPlayInterval),t.autoPlayInterval=setInterval(function(){t.next(!0)},t.options.autoPlay)},swapSpeed:function(t){var e=this;"slideSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)):"paginationSpeed"===t?e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)):"string"!=typeof t&&e.$owlWrapper.css(e.addCssSpeed(t))},addCssSpeed:function(t){return{"-webkit-transition":"all "+t+"ms ease","-moz-transition":"all "+t+"ms ease","-o-transition":"all "+t+"ms ease",transition:"all "+t+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(t){return{"-webkit-transform":"translate3d("+t+"px, 0px, 0px)","-moz-transform":"translate3d("+t+"px, 0px, 0px)","-o-transform":"translate3d("+t+"px, 0px, 0px)","-ms-transform":"translate3d("+t+"px, 0px, 0px)",transform:"translate3d("+t+"px, 0px,0px)"}},transition3d:function(t){this.$owlWrapper.css(this.doTranslate(t))},css2move:function(t){this.$owlWrapper.css({right:t})},css2slide:function(t,e){var o=this;o.isCssFinish=!1,o.$owlWrapper.stop(!0,!0).animate({right:t},{duration:e||o.options.slideSpeed,complete:function(){o.isCssFinish=!0}})},checkBrowser:function(){var t="translate3d(0px, 0px, 0px)",e=p.createElement("div");e.style.cssText="  -moz-transform:"+t+"; -ms-transform:"+t+"; -o-transform:"+t+"; -webkit-transform:"+t+"; transform:"+t;var o=e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g),s=null!==o&&1===o.length,i="ontouchstart"in l||navigator.msMaxTouchPoints;this.browser={support3d:s,isTouch:i}},moveEvents:function(){!1===this.options.mouseDrag&&!1===this.options.touchDrag||(this.gestures(),this.disabledEvents())},eventTypes:function(){var t=this,e=["s","e","x"];t.ev_types={},!0===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===t.options.mouseDrag&&!0===t.options.touchDrag?e=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===t.options.mouseDrag&&!1===t.options.touchDrag&&(e=["mousedown.owl","mousemove.owl","mouseup.owl"]),t.ev_types.start=e[0],t.ev_types.move=e[1],t.ev_types.end=e[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(t){t.preventDefault()}),this.$elem.on("mousedown.disableTextSelect",function(t){return r(t.target).is("input, textarea, select, option")})},gestures:function(){function o(t){return t.touches?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.pageX!==m?{x:t.pageX,y:t.pageY}:{x:t.clientX,y:t.clientY}}function i(t){"on"===t?(r(p).on(n.ev_types.move,e),r(p).on(n.ev_types.end,s)):"off"===t&&(r(p).off(n.ev_types.move),r(p).off(n.ev_types.end))}function e(t){t=t.originalEvent||t||l.event;n.newPosX=o(t).x-a.offsetX,n.newPosY=o(t).y-a.offsetY,n.newRelativeX=n.newPosX-a.relativePos,"function"==typeof n.options.startDragging&&!0!==a.dragging&&0!==n.newRelativeX&&(a.dragging=!0,n.options.startDragging.apply(n,[n.$elem])),(8<n.newRelativeX||n.newRelativeX<-8&&!0===n.browser.isTouch)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,a.sliding=!0),(10<n.newPosY||n.newPosY<-10)&&!1===a.sliding&&r(p).off("touchmove.owl");n.newPosX=Math.max(Math.min(n.newPosX,n.newRelativeX/5),n.maximumPixels+n.newRelativeX/5),!0===n.browser.support3d?n.transition3d(n.newPosX):n.css2move(n.newPosX)}function s(e){if((e=e.originalEvent||e||l.event).target=e.target||e.srcElement,!(a.dragging=!1)!==n.browser.isTouch&&n.$owlWrapper.removeClass("grabbing"),n.newRelativeX<0?n.dragDirection=n.owl.dragDirection="right":n.dragDirection=n.owl.dragDirection="left",0!==n.newRelativeX){var t=n.getNewPosition();if(n.goTo(t,!1,"drag"),a.targetElement===e.target&&!0!==n.browser.isTouch){r(e.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),r(e.target).off("click.disable")});var o=r._data(e.target,"events").click,s=o.pop();o.splice(0,0,s)}}i("off")}var n=this,a={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};n.isCssFinish=!0,n.$elem.on(n.ev_types.start,".owl-wrapper",function(t){if(3===(t=t.originalEvent||t||l.event).which)return!1;if(!(n.itemsAmount<=n.options.items)){if(!1===n.isCssFinish&&!n.options.dragBeforeAnimFinish)return!1;if(!1===n.isCss3Finish&&!n.options.dragBeforeAnimFinish)return!1;!1!==n.options.autoPlay&&clearInterval(n.autoPlayInterval),!0===n.browser.isTouch||n.$owlWrapper.hasClass("grabbing")||n.$owlWrapper.addClass("grabbing"),n.newPosX=0,n.newRelativeX=0,r(this).css(n.removeTransition());var e=r(this).position();a.relativePos=e.right,a.offsetX=o(t).x-e.right,a.offsetY=o(t).y-e.top,i("on"),a.sliding=!1,a.targetElement=t.target||t.srcElement}})},getNewPosition:function(){var t,e=this;return(t=e.closestItem())>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):0<=e.newPosX&&(t=0,e.currentItem=0),t},closestItem:function(){var o=this,s=!0===o.options.scrollPerPage?o.pagesInArray:o.positionsInArray,i=o.newPosX,n=null;return r.each(s,function(t,e){i-o.itemWidth/20>s[t+1]&&i-o.itemWidth/20<e&&"right"===o.moveDirection()?(n=e,!0===o.options.scrollPerPage?o.currentItem=r.inArray(n,o.positionsInArray):o.currentItem=t):i+o.itemWidth/20<e&&i+o.itemWidth/20>(s[t+1]||s[t]-o.itemWidth)&&"left"===o.moveDirection()&&(!0===o.options.scrollPerPage?(n=s[t+1]||s[s.length-1],o.currentItem=r.inArray(n,o.positionsInArray)):(n=s[t+1],o.currentItem=t+1))}),o.currentItem},moveDirection:function(){var t;return this.newRelativeX<0?(t="left",this.playDirection="next"):(t="right",this.playDirection="prev"),t},customEvents:function(){var o=this;o.$elem.on("owl.next",function(){o.next()}),o.$elem.on("owl.prev",function(){o.prev()}),o.$elem.on("owl.play",function(t,e){o.options.autoPlay=e,o.play(),o.hoverStatus="play"}),o.$elem.on("owl.stop",function(){o.stop(),o.hoverStatus="stop"}),o.$elem.on("owl.goTo",function(t,e){o.goTo(e)}),o.$elem.on("owl.jumpTo",function(t,e){o.jumpTo(e)})},stopOnHover:function(){var t=this;!0===t.options.stopOnHover&&!0!==t.browser.isTouch&&!1!==t.options.autoPlay&&(t.$elem.on("mouseover",function(){t.stop()}),t.$elem.on("mouseout",function(){"stop"!==t.hoverStatus&&t.play()}))},lazyLoad:function(){var t=this;if(!1===t.options.lazyLoad)return!1;for(var e=0;e<t.itemsAmount;e++){var o=r(t.$owlItems[e]);if("loaded"!==o.data("owl-loaded")){var s=o.data("owl-item"),i=o.find(".lazyOwl");"string"==typeof i.data("src")?(o.data("owl-loaded")===m&&(i.hide(),o.addClass("loading").data("owl-loaded","checked")),(!0!==t.options.lazyFollow||s>=t.currentItem)&&s<t.currentItem+t.options.items&&i.length&&t.lazyPreload(o,i)):o.data("owl-loaded","loaded")}}},lazyPreload:function(t,e){function o(){t.data("owl-loaded","loaded").removeClass("loading"),e.removeAttr("data-src"),"fade"===s.options.lazyEffect?e.fadeIn(400):e.show(),"function"==typeof s.options.afterLazyLoad&&s.options.afterLazyLoad.apply(this,[s.$elem])}var s=this,i=0;if("DIV"===e.prop("tagName")){e.css("background-image","url("+e.data("src")+")");var n=!0}else e[0].src=e.data("src");!function t(){i+=1,s.completeImg(e.get(0))||!0===n?o():i<=100?setTimeout(t,100):o()}()},autoHeight:function(){function e(){var t=r(o.$owlItems[o.currentItem]).height();o.wrapperOuter.css("height",t+"px"),o.wrapperOuter.hasClass("autoHeight")||setTimeout(function(){o.wrapperOuter.addClass("autoHeight")},0)}var o=this,s=r(o.$owlItems[o.currentItem]).find("img");if(s.get(0)!==m){var i=0;!function t(){i+=1,o.completeImg(s.get(0))?e():i<=100?setTimeout(t,100):o.wrapperOuter.css("height","")}()}else e()},completeImg:function(t){return!!t.complete&&(void 0===t.naturalWidth||0!=t.naturalWidth)},onVisibleItems:function(){var t=this;!0===t.options.addClassActive&&t.$owlItems.removeClass("active"),t.visibleItems=[];for(var e=t.currentItem;e<t.currentItem+t.options.items;e++)t.visibleItems.push(e),!0===t.options.addClassActive&&r(t.$owlItems[e]).addClass("active");t.owl.visibleItems=t.visibleItems},transitionTypes:function(t){this.outClass="owl-"+t+"-out",this.inClass="owl-"+t+"-in"},singleItemTransition:function(){var t=this;t.isTransition=!0;var e=t.outClass,o=t.inClass,s=t.$owlItems.eq(t.currentItem),i=t.$owlItems.eq(t.prevItem),n=Math.abs(t.positionsInArray[t.currentItem])+t.positionsInArray[t.prevItem],a=Math.abs(t.positionsInArray[t.currentItem])+t.itemWidth/2;t.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":a+"px","-moz-perspective-origin":a+"px","perspective-origin":a+"px"});var r,l="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";i.css((r=n,{position:"relative",right:r+"px"})).addClass(e).on(l,function(){t.endPrev=!0,i.off(l),t.clearTransStyle(i,e)}),s.addClass(o).on(l,function(){t.endCurrent=!0,s.off(l),t.clearTransStyle(s,o)})},clearTransStyle:function(t,e){var o=this;t.css({position:"",right:""}).removeClass(e),o.endPrev&&o.endCurrent&&(o.$owlWrapper.removeClass("owl-origin"),o.endPrev=!1,o.endCurrent=!1,o.isTransition=!1)},owlStatus:function(){var t=this;t.owl={userOptions:t.userOptions,baseElement:t.$elem,userItems:t.$userItems,owlItems:t.$owlItems,currentItem:t.currentItem,prevItem:t.prevItem,visibleItems:t.visibleItems,isTouch:t.browser.isTouch,browser:t.browser,dragDirection:t.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect"),r(p).off(".owl owl"),r(l).off("resize",this.resizer)},unWrap:function(){var t=this;0!==t.$elem.children().length&&(t.$owlWrapper.unwrap(),t.$userItems.unwrap().unwrap(),t.owlControls&&t.owlControls.remove()),t.clearEvents(),t.$elem.attr("style",t.$elem.data("owl-originalStyles")||"").attr("class",t.$elem.data("owl-originalClasses"))},destroy:function(){this.stop(),clearInterval(this.checkVisible),this.unWrap(),this.$elem.removeData()},reinit:function(t){var e=r.extend({},this.userOptions,t);this.unWrap(),this.init(e,this.$elem)},addItem:function(t,e){var o,s=this;return!!t&&(0===s.$elem.children().length?(s.$elem.append(t),s.setVars(),!1):(s.unWrap(),(o=e===m||-1===e?-1:e)>=s.$userItems.length||-1===o?s.$userItems.eq(-1).after(t):s.$userItems.eq(o).before(t),void s.setVars()))},removeItem:function(t){var e;if(0===this.$elem.children().length)return!1;e=t===m||-1===t?-1:t,this.unWrap(),this.$userItems.eq(e).remove(),this.setVars()}};r.fn.owlCarousel=function(e){return this.each(function(){if(!0===r(this).data("owl-init"))return!1;r(this).data("owl-init",!0);var t=Object.create(o);t.init(e,this),r.data(this,"owlCarousel",t)})},r.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:l,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),$(document).ready(function(){$("#menu-button").click(function(){$("#nav").slideToggle()}),$(".myselect").select2()}),$(".sam-web-widget").each(function(){$(this).removeClass("section")}),$("#HTML1").each(function(){$(this).removeAttr("id","none"),$(this).removeAttr("data-version","1"),$(this).removeAttr("class","widget "),$(this).removeAttr("class","HTML "),$(this).addClass("sam-web-live-table")}),$(".sidebar-post .sam-web-tumb").each(function(){$(".sidebar-post ul li:first-child .sam-web-tumb").attr("style",function(t,e){return e.replace("s72-c","w300-h250-p-k-nu")}),$(this).attr("style",function(t,e){return e.replace("s72-c","w145-h100-p-k-nu")})}),$("#sidebar-wrapper .widget h2").each(function(){$(this).replaceWith("<div class='title'>"+$(this).text()+"</div>")}),$("#sidebar-wrapper .widget").each(function(){$(this).removeAttr("data-version","1")}),$(".sidebar-post ul li:first-child .sam-web-tumb").each(function(){var t=$(this).attr("href");$.ajax({url:t,type:"get",success:function(t){var e=$(t).find(".post-footer span.post-lable a").text(),o="";o+="<a href='"+$(t).find(".post-footer span.post-lable a").attr("href")+'">'+e+"</a>",$(".sidebar-post ul li .post-lable").html(o)}})}),$("span.video_box").each(function(){var m=$(this).attr("data-label"),t=($(this),$(this).attr("data-no"));$.ajax({url:"/feeds/posts/default/-/"+m+"?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(t){for(var e="",o="",s=0;s<t.feed.entry.length;s++){for(var i=0;i<t.feed.entry[s].link.length;i++)if("alternate"==t.feed.entry[s].link[i].rel){e=t.feed.entry[s].link[i].href;break}var n=t.feed.entry[s].title.$t,a=(t.feed.entry[s].category[0].term,t.feed.entry[s].author[0].name.$t,t.feed.entry[s].content.$t);$("<div>").html(a);try{var r=t.feed.entry[s].media$thumbnail.url.replace("/s72-c/","/w260-h150-p-k-nu/")}catch(t){r="http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"}var l=t.feed.entry[s].id.$t.split("-")[2],p=" <nav class='navigation pagination' role='navigation'><div class='nav-links'><a class='prev page-numbers' href='/search/label/"+m+"?&max-results=20' >المزيد</a></div></nav>";o+="<div id='post-"+l+"' class='post-outer col-md-4 col-sm-6 col-xs-6'><div class='inner-content'><div class='post-thumbnail'><a href='"+e+"' title='"+n+"' class='sam-web-tumb' rel='bookmark' style='background:url("+r+")no-repeat center center;background-size: cover;'></a></div><div class='post-info details'><a href='"+e+"' title='"+n+"' rel='bookmark'><div class='sam-web-Title'>"+n+"</div></a></div></div></div>"}o+="",o+=p,$("#HTML2").each(function(){$(this).removeAttr("id","none"),$(this).removeAttr("data-version","1"),$(this).removeAttr("class","widget "),$(this).removeAttr("class","HTML "),$(this).addClass("sam-web-video"),$(this).attr("id","sam-web-video")}),$("span.video_box").each(function(){$(this).attr("data-label")==m&&$(this).parent().html(o)})}})}),$("span.channel_box").each(function(){var u=$(this).attr("data-label"),t=($(this),$(this).attr("data-no"));$.ajax({url:"/feeds/posts/default/-/"+u+"?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(t){for(var e="",o="",s=0;s<t.feed.entry.length;s++){for(var i=0;i<t.feed.entry[s].link.length;i++)if("alternate"==t.feed.entry[s].link[i].rel){e=t.feed.entry[s].link[i].href;break}var n=t.feed.entry[s].title.$t,a=t.feed.entry[s].category[0].term,r=(t.feed.entry[s].author[0].name.$t,t.feed.entry[s].content.$t);$("<div>").html(r);try{var l=t.feed.entry[s].media$thumbnail.url.replace("/s72-c/","/w260-h150-p-k-nu/")}catch(t){l="http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"}var p=t.feed.entry[s].id.$t.split("-")[2],m="";o+="<div id='post-"+p+"' class='post-outer col-md-3 col-sm-6 col-xs-6'><div class='inner-content'><div class='post-thumbnail'><a href='"+e+"' title='"+n+"' class='sam-web-tumb' rel='bookmark' style='' class='sam-web-tumb' rel='bookmark' style='background:url("+a+")'><img src='"+l+"' style='position: absolute;'></a></div><div class='post-info details'><a href='"+e+"' title='"+n+"' rel='bookmark'><div class='sam-web-Title'>"+n+"</div></a></div></div></div>"}o+="",o+=m,$("#HTML2").each(function(){$(this).removeAttr("id","none"),$(this).removeAttr("data-version","1"),$(this).removeAttr("class","widget "),$(this).removeAttr("class","HTML "),$(this).addClass("sam-web-channel"),$(this).attr("id","sam-web-channel")}),$("span.channel_box").each(function(){$(this).attr("data-label")==u&&$(this).parent().html(o)})}})}),$("span.slider_related").each(function(){var p=$(this).attr("data-label"),t=($(this),$(this).attr("data-no"));$.ajax({url:"/feeds/posts/default/-/"+p+"?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(t){for(var e="",o="<ul class='rnav'>",s=0;s<t.feed.entry.length;s++){for(var i=0;i<t.feed.entry[s].link.length;i++)if("alternate"==t.feed.entry[s].link[i].rel){e=t.feed.entry[s].link[i].href;break}var n=t.feed.entry[s].title.$t,a=(t.feed.entry[s].category[0].term,t.feed.entry[s].author[0].name.$t,t.feed.entry[s].content.$t);$("<div>").html(a);try{var r=t.feed.entry[s].media$thumbnail.url.replace("/s72-c/","/w260-h150-p-k-nu/")}catch(t){r="http://4.bp.blogspot.com/-OI0BoYP677M/VZu1TW7a3DI/AAAAAAAAFsE/4BRdE2YFS5A/s1600/noimg.png"}var l=t.feed.entry[s].id.$t.split("-")[2];o+="<div id='post-"+l+"' class='post-outer col-md-4 col-sm-6 col-xs-6' style='width: 100% !important;'><div class='inner-content'><div class='post-thumbnail'><a href='"+e+"' title='"+n+"' class='sam-web-tumb' rel='bookmark' style='background:url("+r+") no-repeat center center;background-size: cover'></a></div><div class='post-info details'><a href='"+e+"' title='"+n+"' rel='bookmark'><div class='sam-web-Title'>"+n+"</div></a></div></div></div>"}o+="</ul>",$(document).ready(function(){$("#related-posts ul").owlCarousel({items:3,navigation:!0,navigationText:["<i id='prev'></i>","<i id='next'></i>"],itemsDesktop:[1e3,3],itemsDesktopSmall:[647,2],itemsTablet:[396,1],itemsMobile:!1,pagination:!1})}),$("span.slider_related").each(function(){$(this).attr("data-label")==p&&$(this).parent().html(o)})}})});
//]]>
