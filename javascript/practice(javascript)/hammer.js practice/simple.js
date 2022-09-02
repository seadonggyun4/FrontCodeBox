// [ Hammer.js 이벤트 ]
//Pan -> 슬라이드
//rotate -> 회전
//pinch -> 이미지 확대 및 축소
// isFinal -> 터치가 끝났는지 확인
// deltaX -> X축으로 이동한 수치
//=============================================
var imgnumber = 1;
// 1. 터치를 구현할 HTML 요소를 찾는다.
var image1 = document.querySelectorAll(".slide-box img")[0];
var image2 = document.querySelectorAll(".slide-box img")[1];

function Swipe(a) {
  // 2. 찾은 요소를 new Hammer.Manager()라는 함수에 담아줍니다.
  var manager = new Hammer.Manager(a);
  // 3. 내가 사용할 이벤트를 add()함수로 등록하고 threshold 값을 세팅
  // treshold -> 이벤트 발동되기 전까지의 수치값
  manager.add(new Hammer.Pan({ threshold: 0 }));
  // 4. 이벤트리스너로 설정한 값을 실행하는 코드 작성
  manager.on("pan", function (e) {
    // e -> 터치에 반응하는 값
    console.log(e.deltaX);
    //왼쪽스와이프 기능 함수
    leftSwipe(e);
  });
}

Swipe(image1);
Swipe(image2);
//=============================================
function leftSwipe(e) {
  // x축값이 -100보다 작은경우
  if (e.deltaX < -1) {
    // deltaX 의 수치에 맞게 translateX 시킨다.
    $(".slide-container").css("transform", "translateX(" + e.deltaX + "px)");

    // [요소에 대한 터치가 끝났을때 이동하는 모션]
    if (e.isFinal && imgnumber == 1) {
      $(".slide-container").addClass("transforming");
      // -100vw만큼 이동한다.
      $(".slide-container").css("transform", "translateX(-100vw)");
      // 코드 실행까지 걸리는 시간을 설정하는 함수
      setTimeout(function () {
        $(".slide-container").removeClass("transforming");
      }, 1000);
      if (imgnumber < 2) {
        imgnumber = imgnumber + 1;
      }
    } else if (e.isFinal && imgnumber == 2) {
      $(".slide-container").addClass("transforming");
      // -200vw만큼 이동한다.
      $(".slide-container").css("transform", "translateX(-200vw)");
      // 코드 실행까지 걸리는 시간을 설정하는 함수
      setTimeout(function () {
        $(".slide-container").removeClass("transforming");
      }, 1000);
    }
  }
}

//=============================================
function leftSwipe(e) {
  // x축값이 -100보다 작은경우
  if (e.deltaX < -1) {
    // deltaX 의 수치에 맞게 translateX 시킨다.
    $(".slide-container").css("transform", "translateX(" + e.deltaX + "px)");

    // [요소에 대한 터치가 끝났을때 이동하는 모션]
    if (e.isFinal && imgnumber == 1) {
      $(".slide-container").addClass("transforming");
      // -100vw만큼 이동한다.
      $(".slide-container").css("transform", "translateX(-100vw)");
      // 코드 실행까지 걸리는 시간을 설정하는 함수
      setTimeout(function () {
        $(".slide-container").removeClass("transforming");
      }, 1000);
      if (imgnumber < 2) {
        imgnumber = imgnumber + 1;
      }
    } else if (e.isFinal && imgnumber == 2) {
      $(".slide-container").addClass("transforming");
      // -200vw만큼 이동한다.
      $(".slide-container").css("transform", "translateX(-200vw)");
      // 코드 실행까지 걸리는 시간을 설정하는 함수
      setTimeout(function () {
        $(".slide-container").removeClass("transforming");
      }, 1000);
    }
  }
}
