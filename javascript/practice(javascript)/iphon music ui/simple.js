//뷰포트가 스크롤 될때 실행
$(window).scroll(function () {
  // scroll값을 height변수에 할당
  var height = $(window).scrollTop();
  // 개발자도구에서 scroll 값을 확인 하기 위함
  console.log(height);

  //조건문으로 애니메이션 범위 지정
  if ($(window).scrollTop() >= 800 && $(window).scrollTop() < 1400) {
    // [.card-box 1번]
    // $(".card-box").eq(0)
    // 시작 : 800
    // 끝: 1400
    // var y0 = (-1 / 600) * height + 7 / 3;
    // $(".card-box").eq(0).css("opacity", y0);
    // var c0 = (-1 / 6000) * height + 17 / 15;
    // $(".card-box").eq(0).css("transform", `scale( ${c0} )`);
  } else if ($(window).scrollTop() >= 1400 && $(window).scrollTop() < 2000) {
    // [.card-box 2번]
    // $(".card-box").eq(1)
    // 시작 : 1400
    // 끝: 2000
    // var y1 = (-1 / 600) * height + 10 / 3;
    // $(".card-box").eq(1).css("opacity", y1);
    // var c1 = (-1 / 6000) * height + 37 / 30;
    // $(".card-box").eq(1).css("transform", `scale( ${c1} )`);
  }
});

// ===================================================================================
// [opacity change]
// $(".card-box").eq(0) 가 opacity가 1~0이 되는 기준
// 시작 : 800
// 끝: 1400

// 스크롤 값에 따라 변하는 값 y를 그래프로(1차 함수로 표현)
// y의 식을 수식으로 표현
//   y = a * height + b;
//   1 = a * 800 + b;
//   0 = a * 1400 + b;

// 대입법을 통해 a,b 값 도출
//   a = -1/600
//   b = 7/3
// ===================================================================================
// [transform change]
// $(".card-box").eq(0) 가 transform scale 가 1~0.9가 되는 기준
// 시작 : 800
// 끝: 1400

// 스크롤 값에 따라 변하는 값 c를 그래프로(1차 함수로 표현)
// c의 식을 수식으로 표현
//   c = a * height + b;
//   1 = a * 800 + b;
//   0.9 = a * 1400 + b;

// 대입법을 통해 a,b 값 도출
//   a = -1 / 6000
//   b = 17 / 15

// ===================================================================================
