$(function () {
  // /ハンバーガーメニュー
  jQuery(".toggle-btn").on("click", function () {
    jQuery("header").toggleClass("open");
  });

  // トップボタン
  // クラス名btnを変数btnに定義
  let btn = $(".btn");
  // 変数btnを非表示
  btn.hide();
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > 550) {
      btn.fadeIn(300);
    } else {
      btn.fadeOut(300);
    }
  });

  // クリックしたらトップに戻る
  btn.on("click", function () {
    jQuery("html, body").animate({ scrollTop: 0 }, 500);
  });

  // 質問
  // ドロワーメニュー
  $(".menu-drawer").on("click", function () {
    $(".drawer").slideToggle();
  });
  $(".menu-drawer2").on("click", function () {
    $(".drawer2").slideToggle();
  });
  $(".menu-drawer3").on("click", function () {
    $(".drawer3").slideToggle();
  });
  $(".menu-drawer4").on("click", function () {
    $(".drawer4").slideToggle();
  });

  // お悩みフェードイン
  $(window).scroll(function () {
    // troubleクラスに対して順に処理を行う
    $(".trouble").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // troubleクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // troubleクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    // お知らせフェードイン
    $(".announce").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // announceクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // announceクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    //地図フェードイン
    $(".map").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // mapクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // mapクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    //当院紹介フェードイン
    $("#js-introduction").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // introductionクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // introductionクラスの要素が画面下にきてから100px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

    //施術左からフェードイン
    $(".surgery-contents").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // introduction-wrapper"クラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // introduction-wrapper"クラスの要素が画面下にきてから50px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        // $(this).css("animation", "slide 1s 1 ease");
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });

    //施術右からフェードイン
    $(".surgery-contents-second").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // introduction-wrapper"クラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // introduction-wrapper"クラスの要素が画面下にきてから50px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateX(0)");
      }
    });

    // スケール
    $(".doctor-img img:first-child, .doctor-img img:last-child").each(
      function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // troubleクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // troubleクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
          $(this).css("opacity", "1");
          $(this).css("animation", "scale 1s 1 ease");
        }
      }
    );

    // 料金フェードイン
    $(".price table, .price-p, .question dl, .access dl").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // troubleクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // troubleクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
      }
    });
  });

  //お知らせ１フェードイン
  $(".announce-contents").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // お知らせ１クラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // お知らせ１クラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });

  // スライド
  $(".introduction-img").slick({
    //     // デフォルトの文字を消す
    arrows: false,
    // 現在のスライドを中央に配置する
    centerMode: true,
    // 中央に配置されたスライドの左右の余白の指定
    centerPadding: "100px",
    // 表示するスライドの数
    slidesToShow: 2,
    // 自動再生
    autoplay: true,
    // スピード
    autoplaySpeed: 4000,
    // 無限ループ
    infinity: true,

    responsive: [
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
    ],
  });
});
