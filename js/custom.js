// Show more and less card content js

!function(e){e.fn.shorten=function(s){"use strict";var t={showChars:100,minHideChars:10,ellipsesText:"...",moreText:"more",lessText:"less",onLess:function(){},onMore:function(){},errMsg:null,force:!1};return s&&e.extend(t,s),e(this).data("jquery.shorten")&&!t.force?!1:(e(this).data("jquery.shorten",!0),e(document).off("click",".morelink"),e(document).on({click:function(){var s=e(this);return s.hasClass("less")?(s.removeClass("less"),s.html(t.moreText),s.parent().prev().animate({height:"0%"},function(){s.parent().prev().prev().show()}).hide("fast",function(){t.onLess()})):(s.addClass("less"),s.html(t.lessText),s.parent().prev().animate({height:"100%"},function(){s.parent().prev().prev().hide()}).show("fast",function(){t.onMore()})),!1}},".morelink"),this.each(function(){var s=e(this),n=s.html(),r=s.text().length;if(r>t.showChars+t.minHideChars){var o=n.substr(0,t.showChars);if(o.indexOf("<")>=0){for(var a=!1,i="",h=0,l=[],c=null,f=0,u=0;u<=t.showChars;f++)if("<"!=n[f]||a||(a=!0,c=n.substring(f+1,n.indexOf(">",f)),"/"==c[0]?c!="/"+l[0]?t.errMsg="ERROR en HTML: the top of the stack should be the tag that closes":l.shift():"br"!=c.toLowerCase()&&l.unshift(c)),a&&">"==n[f]&&(a=!1),a)i+=n.charAt(f);else if(u++,h<=t.showChars)i+=n.charAt(f),h++;else if(l.length>0){for(j=0;j<l.length;j++)i+="</"+l[j]+">";break}o=e("<div/>").html(i+'<span class="ellip">'+t.ellipsesText+"</span>").html()}else o+=t.ellipsesText;var m='<div class="shortcontent">'+o+'</div><div class="allcontent">'+n+'</div><span><a href="javascript://nop/" class="morelink">'+t.moreText+"</a></span>";s.html(m),s.find(".allcontent").hide(),e(".shortcontent p:last",s).css("margin-bottom",0)}}))}}(jQuery);