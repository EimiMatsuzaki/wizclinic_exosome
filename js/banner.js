//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200){//上から200pxスクロールしたら
		$('.banner_sp').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('.banner_sp').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('.banner_sp').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('.banner_sp').removeClass('UpMove');//UpMoveというクラス名を除き
			$('.banner_sp').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
