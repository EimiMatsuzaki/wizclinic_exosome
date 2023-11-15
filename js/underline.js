$(window).on('scroll',function(){$(".JS_ScrollAnimationItem").each(function(){

   //ページの一番上から要素までの距離を取得
   var position = $(this).offset().top;
   
   //スクロールの位置を取得
   var scroll = $(window).scrollTop();
   
   //ウインドウの高さを取得
   var windowHeight = $(window).height();
   
   //スクロール位置が要素の位置を過ぎたとき
   if (scroll > position - windowHeight + 200 ){
   
   //クラス「isActive」を与える
     $(this).addClass('isActive');
   }
 });
 
});