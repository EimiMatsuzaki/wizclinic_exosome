$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
    const height = $(".js-header").height();
    $("main").css("margin-top", height);
  });