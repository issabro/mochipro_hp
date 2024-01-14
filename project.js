//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
    duration: 1000,//時間指定(1000＝1秒)
    strokeWidth: 0.2,//進捗ゲージの太さ
    color: '#555',//進捗ゲージのカラー
    trailWidth: 0.2,//ゲージベースの線の太さ
    trailColor: '#bbb',//ゲージベースの線のカラー
    text: {//テキストの形状を直接指定
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '-30px 0 0 0',//バーより上に配置
            transform: 'translate(-50%,-50%)',
            'font-size': '1rem',
            color: '#fff',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});


//logoの表示
$(window).on('load', function () {
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

//ハンバーガーメニューのクリック時にメニューを表示・非表示切り替え
document.getElementById('hamburger-menu').addEventListener('click', function () {
    var menu = document.querySelector('.menu-bar');
    menu.classList.toggle('show');

    // ハンバーガーアイコンにアクティブクラスをトグル
    this.classList.toggle('active');
});

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});

$(function () {
    var topBtn = $('#item1');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 1150
        }, 500);
        return false;
    });
    var topBtn = $('#item2');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 2550
        }, 1000);
        return false;
    });
    var topBtn = $('#item3');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 6850
        }, 1000);
        return false;
    });
    var topBtn = $('#item4');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 700
        }, 1000);
        return false;
    });
    var topBtn = $('#item5');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 3250
        }, 1000);
        return false;
    });
    var topBtn = $('#item6');
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 4950
        }, 1000);
        return false;
    });
});

var slider;
var sliderFlag = false;
var breakpoint = 768;//768px以下の場合

function sliderSet() {
    var windowWidth = window.innerWidth;
    if (windowWidth >= breakpoint && !sliderFlag) {//768px以上は1行でスライダー表示
        slider = $('.news').bxSlider({
            touchEnabled: true,//リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
            mode: 'vertical',//縦スライド指定
            controls: false,//前後のコントロールを表示させない。
            auto: 'true',//自動的にスライド
            pager: false//ページ送り無効化
        });
        sliderFlag = true;
    } else if (windowWidth < breakpoint && sliderFlag) {
        slider.destroySlider();//bxSliderのOptionであるdestroySliderを使用してスライダーの動きを除去
        sliderFlag = false;
    }
}

$(window).on('load resize', function () {
    sliderSet();
});

$(document).on('ready', function () {
    $(".full-screen-o").slick({
        centerMode: true, // スライドを中心に表示して部分的に前後のスライドが見えるように設定（奇数番号のスライドに使用）
        centerPadding: '5%', // センターモード時のサイドパディング。見切れるスライドの幅。’px’または’％’。
        dots: true, // ドットインジケーターの表示
        autoplay: true, // 自動再生を設定
        autoplaySpeed: 3000, // 自動再生のスピード（ミリ秒単位）
        speed: 1000, // スライド/フェードアニメーションの速度を設定
        infinite: true // スライドのループを有効にするか]
    });
});