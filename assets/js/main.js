"use strict";function isScrolledIntoView(e){var t=e.getBoundingClientRect().top,e=e.getBoundingClientRect().bottom;return 0<=t&&e<=window.innerHeight+200}function inViewWithOffset(e,t){return t=t||0,e.getBoundingClientRect().top<=window.innerHeight-t}function boardsInit(){var e=3;if(window.innerWidth<1150&&764<window.innerWidth?e=2:window.innerWidth<764&&(e=1),!$("#boards"))return!1;var t,i=$(".boards__showcase a").not(".boards__showcase-d-none").last(),n=$(".boards__showcase .boards__showcase-d-none").slice(0,e);$(document).scroll(function(){i[0]&&isScrolledIntoView(i[0])&&(n.removeClass("boards__showcase-d-none"),i=n.last(),t=$(".boards__showcase .boards__showcase-hidden").slice(0,e),n=$(".boards__showcase .boards__showcase-d-none").slice(0,e)),t&&0<t.length&&inViewWithOffset(t.last()[0],200)&&t.removeClass("boards__showcase-hidden")})}boardsInit(),GitHubActivity.feed({username:"SymbiFlow",selector:"#feed",limit:10}),$(".news__twitter").delegate("#twitter-widget-0","DOMSubtreeModified propertychange",function(){customizeTweetMedia()});var customizeTweetMedia=function e(){$(".news__twitter").find(".twitter-timeline").contents().find(".timeline-Tweet-text").css({"font-size":"16px",color:"#6d6d6d","line-height":"24px","font-weight":"normal"}),$(".news__twitter").find(".twitter-timeline").contents().find(".timeline-Header").css("height","70px"),$(".news__twitter").find(".twitter-timeline").contents().find(".link").css("color","#9258FF"),$(".news__twitter").find(".twitter-timeline").contents().find(".customisable-highlight").css("color","#5a2ab5"),$(".news__twitter").find(".twitter-timeline").contents().find(".PrettyLink").css("color","#9258FF"),$(".news__twitter").find(".twitter-timeline").contents().find(".timeline-Header-title").css({"font-family":"Nunito,sans","font-weight":"normal","font-size":"21px",padding:"17px 10px 5px",color:"#6d6d6d"}),$(".news__twitter").find(".twitter-timeline").contents().find(".timeline-TweetList").bind("DOMSubtreeModified propertychange",function(){e()})},gliderOptions={type:"carousel",perView:"4",autoplay:"4000",gap:40,animationTimingFunc:"ease-out",breakpoints:{1200:{perView:3},850:{perView:2},650:{perView:1}}};new Glide(".glide",gliderOptions).mount();var lightbox=GLightbox({selector:"glightbox2"});