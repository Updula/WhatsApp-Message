var telInput=$("#phone"),errorMsg=$("#error-msg"),validMsg=$("#valid-msg"),shareLink=$("#share"),output=$("#output");telInput.intlTelInput({initialCountry:"auto",geoIpLookup:function(t){$.get("https://ipinfo.io",function(){},"jsonp").always(function(e){var n=e&&e.country?e.country:"";t(n)})},nationalMode:!0,preferredCountries:["sa","ae","kw","bh"],excludeCountries:["qa"],utilsScript:"http://updu.la/w/js/utils.js"});var reset=function(){telInput.removeClass("error"),errorMsg.addClass("hide"),validMsg.addClass("hide"),shareLink.addClass("hide")};telInput.blur(function(){if(reset(),$.trim(telInput.val()))if(telInput.intlTelInput("isValidNumber")){var t=telInput.intlTelInput("getNumber").replace("+","");shareLink.removeClass("hide").val("https://api.whatsapp.com/send?phone="+t).select(),validMsg.removeClass("hide")}else telInput.addClass("error"),errorMsg.removeClass("hide")}),$(shareLink).on("click",function(){$(this).select()}),telInput.on("keyup change",reset),telInput.on("keyup change",function(){var t=telInput.intlTelInput("getNumber");t&&output.text(t)}),$("#valid-msg").click(function(){var t=telInput.intlTelInput("getNumber");withoutplusnumber=t.replace("+",""),$("a").attr("href","https://api.whatsapp.com/send?phone="+withoutplusnumber)}),$(function(){var t=$("body").translate({lang:"ar",t:{"WhatsApp Message":{ar:"رسالة واتس آب"},"Send a message to anyone without adding them to contact":{ar:"ارسل رسالة لأي شخص بدون الحاجة لإضافته لجهات الإتصال"},"Enter phone number":{ar:"ادخل رقم الجوال"},"Send a message on WhatsApp!":{ar:"ارسال رسالة على واتس آب!"},"Cannot message this number":{ar:"لا يمكن مراسلة هذا الرقم"},Developer:{ar:"تطوير"},"Share link":{ar:"مشاركة الرابط"}}}),e=t.g("translate");console.log(e),$(".ltr").click(function(){$("html").attr("dir","ltr")}),$(".rtl").click(function(){$("html").attr("dir","rtl")}),$(".lang_selector").click(function(e){var n=$(this).attr("data-value");t.lang(n),console.log(n),e.preventDefault()})});
