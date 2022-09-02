$(document).ready(function () {
  첫로드시실행할거();
});
// ============================================================  메인 실행 함수 ============================================================
function 첫로드시실행할거() {
  var products = [];

  // [ ========== json 데이터 ajax로 가져오고 데이터바인딩 ========= ]
  getProducts();

  // [ ========== 드롭가능한 영역 & 장바구니 목록 생성 ========= ]
  // Drop할 수 있는 영역 만들기
  // droppable -> jquery 내장 함수 이며 요소에 뭔가 드랍가능하게 영역을 지정합니다.
  // drop -> 요소가 drop되었을때 내부 함수를 실행합니다.
  $("#drop-area").droppable({
    drop: function (event, ui) {
      //$(ui.draggable) -> 드롭한 요소의 html
      var item = $(ui.draggable);
      // attr() -> 요소 속성의 값을 가져온다.
      // EX) $('div').attr('class') -> div요소의 class속성을 가져온다.
      var index = item.attr("data-index");
      // find() -> 배열에서 특정값을 찾아서 리턴하는 함수
      // 첫번째 요소의 값을 반환한다.
      var img = item.find("img");
      var productName = item.find(".product-name").text();
      var brandName = item.find(".brand-name").text();
      var price = item.find(".price").text();

      // 상품 원위치 시키기
      // position: "realative" ->  원래있던 위치를 기준으로 상,하,좌,우 이동한다.
      item.css({
        position: "relative",
        top: "auto",
        left: "auto",
      });

      //data 는 HTML:5 에서부터 사용되었으며 특정 데이터를 DOM 요소에 저장해두기 위해 사용된다.
      // productInBasket 에  basket-list 의 아이디를 넣는다.
      var productInBasket = $(`#basket-list [data-index=${index}]`);
      // length -> 문자열 길이 반환 함수
      // 만약 productInBasket에 길이가 측정될 경우 해당 index에 일치하는 item이 basket-list에 들어있다는 의미이므로
      // 처음 basket-list에 들어갈때는 당연히 해당 index에 일치하는 html값이 없으니깐 길이 측정이 안된다.
      if (productInBasket.length) {
        // 중복되는 상품이 있을 경우
        alert("이미 장바구니에 담긴 상품입니다.");
        return;
      }

      //드롭했을 시 그 밑에 상품목록 생성해주기
      var 장바구니상품 = $(`
            <div class="card-deck">
                <div class="card mb-3" style="max-width: 540px;" data-index="${index}">
                    <div class="row no-gutters">
                        <div class="col-md-4 overflow-hidden">
                            <img src="${img.attr(
                              "src"
                            )}" class="card-img h-100 w-auto" alt="${productName}" title="${productName}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                            <h5 class="card-title product-name">${productName}</h5>
                            <p class="card-text brand-name">${brandName}</p>
                            <p class="card-text"><small class="text-muted price">${price}</small></p>
                            <p class="card-text">
                                <div class="input-group input-group-sm mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroup-sizing-sm-${index}">수량</span>
                                    </div>
                                    <input type="number" min="1" value="1" class="form-control number" >
                                </div>
                            </p>
                            <p class="card-text">합계 <span class="sum">${price}</span>원</p>
                            </div>
                        </div>
                        <button type="button" class="col-md-1 btn-delete">X</button>
                    </div>
                </div>
            </div>
            `);

      // 수량 늘렸을때 함수
      // on("keyup change") ->하나의 요소에서 두개의 이벤트 처리:  input 값에 keyup 이벤트와 change 이벤트 발생했을때
      // keyup -> 키를 눌렀다 뗄때
      // change -> 해당 셀렉터 값이 변화 할때
      장바구니상품.find("input[type='number']").on("keyup change", function () {
        // parseInt() -> 문자열을 정수로 바꾸는 함수
        // parseInt(string, n) -> string을 n 진법으로 바꾼다.
        // EX)  parseInt("100", 2) -> 100은 2진법으로 4이다.  parseInt("100", 10) -> 100은 10진법으로 100이다.
        // sum= 10진법 가격 * this(input number의 값)
        var sum = parseInt(price, 10) * $(this).val();
        // 계산된 sum을 장바구니 상품 내부 .sum 클래스에 넣는다.
        장바구니상품.find(".sum").text(sum);

        //장바구니 총금액 계산
        setTotalSum();
      });

      // 아이템 취소했을때 함수
      장바구니상품.find("button.btn-delete").on("click", function () {
        장바구니상품.remove();
        //장바구니 총금액 계산
        setTotalSum();
      });

      // 장바구니상품 에  하드코딩된 요소를 basket-list 에 append()한다.
      $("#basket-list").append(장바구니상품);
      //장바구니 총금액 계산
      setTotalSum();
    },
  });
}

// ============================================================  장바구니 총 금액 계산 ============================================================
//장바구니 변동될 때마다 총 금액 계산해주는 기능
function setTotalSum() {
  var totalSum = 0;

  //each() 함수는 배열과,length속성을 갖는 객체들을 index기준으로 반복할 수 있습니다.
  // basket-list 내부 요소들중 .sum 의 값들을 반복한다.
  $("#basket-list .sum").each(function () {
    // parseInt() -> 문자열을 정수로 바꾸는 함수
    // $(this).text() -> .sum 내부 값
    // totalSum 에 .sum내부 값들을 계속해서 누적한다.
    totalSum += parseInt($(this).text(), 10);
  });

  //#total-sum 의 값을 totalSum으로 한다.
  $("#total-sum").text(totalSum);
}
// ============================================================  ajax &  상품 데이터 바인딩 ============================================================
//json 데이터 ajax로 가져오고 데이터바인딩
function getProducts() {
  // get()함수로 로컬 json파일 을 파싱 해 온다.
  // 완료시 data 프로퍼티에 json을 파싱한 값을 넣는다.
  $.get("resources/json/store.json").done(function (data) {
    //cb(data.products);
    // forEach 함수를 통해 json 내부 products 배열의 상품, index 번호를 appendProduct에 반복적으로 할당한다.
    data.products.forEach(function (상품, i) {
      appendProduct(상품, i);
    });
  });
}

//상품 박아넣는 코드, 그리고 박아넣자마자 drag 가능하게 설정하기
// appendProduct
function appendProduct(product, index) {
  // getProducts() 함수로 파싱해온 데이터를 바인딩하기 위한 작업을 진행한다.
  // newItem에 상품들을 하드코딩한뒤 product-list에 반복적으로 append 한다
  var newItem = $(`
        <div class="card col-4 p-0" data-index="${index}">
            <img src="resources/images/${product.photo}" class="card-img-top" alt="${product.product_name}" title="${product.product_name}">
            <div class="card-body">
                <h5 class="card-title product-name">${product.product_name}</h5>
                <p class="card-text brand-name">${product.brand_name}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted price">${product.price}</small>
            </div>
        </div>
    `).draggable({
    // draggable() -> 요소를 드래그 할수 있도록 하는 함수/ jquery에 내장되어있는 함수 이다.
    zIndex: 999,
    revert: "invalid",
    // revert -> droppable() 함수가 아닌 다른곳에 위치 되었을때 처음위치로 돌아가게 할지 여부를 결정
    // revert: true -> 항상되돌립니다. (부울타입)
    // revert: "invalid" -> droppable() 함수가 아닌 다른곳에 위치 되었을때 처음위치로 돌아가게 (문자열타입)
  });

  // product-list 뒤에 newItem을 계속 붙힌다.
  $("#product-list").append(newItem);
}
// ============================================================  상품 구매 ============================================================

function openBuyPopup() {
  // basketList = basket-list 하위 요소들 전부 셀렉트
  var basketList = $("#basket-list *");
  // !는 부정연산자로 basketList.length가 없다면 실행
  if (!basketList.length) {
    alert("장바구니가 비어있습니다.");
    return;
  }

  // name,address 의 값을 초기화
  $("#name, #address").val("");
  // [=============== jquery dialog ===============]
  // alert() -> 브라우저에서 제공하는 팝업창/ 웹상의 레이아웃은 아니고 브라우져의 모달이다.
  // Dialog() -> jQuery 에서 제공하는 팝업창/ 웹상의 레이아웃이다.
  $("#popup-buy").dialog({
    // autoOpen: false,
    width: 350,
    height: 250,
    // 모달여부
    modal: true,
    // 다이얼로그가 open 될때의  설정
    open: function (event, ui) {
      $(event.target).dialog("widget");
    },
    // 다이얼로그가 hide 될때 설정
    hide: {
      effect: "explode",
      duration: 1000,
    },
    //버튼들
    buttons: {
      //구매완료 버튼 누르면 실행할 코드
      구매완료: function () {
        $(this).dialog("close");

        openReceiptPopup();
        $("#basket-list").html("");
        setTotalSum();
      },
      //닫기 버튼 누르면 실행할 코드
      닫기: function () {
        $(this).dialog("close");
      },
    },
  });
}
// ============================================================  영수증 생성 ============================================================
// 영수증 이미지 생성
function openReceiptPopup() {
  // canvas 셀렉트
  var cvs = $("#receipt");
  //  canvas에 자유롭게 내용을 적기위함
  var ctx = cvs[0].getContext("2d");
  // basket-list의 자식 div의 length를  셀렉트
  var itemLen = $("#basket-list > div").length;

  // 켄버스 크기지정
  cvs.attr({
    width: 500,
    height: 200 + 120 * itemLen,
  });

  // 폰트 설정
  ctx.font = "bold 20px Malgun Gothic";
  // "영수증" 문자열 생성
  ctx.fillText("영수증", 10, 20);

  // 현재 날자 셀렉트 후 폰트 설정과 함께 날자 문자열 생성
  var date = new Date();
  ctx.font = "bold 14px Malgun Gothic";
  ctx.fillText(date, 10, 50);

  // basket-list의 자식 div 요소들에 each() 반복함수 적용
  $("#basket-list > div").each(function (i) {
    // basket-list내부 div에서 각각 이름,숫자, 합계, 가격 등을 셀렉트
    var productName = $(this).find(".product-name").text();
    var brandName = $(this).find(".brand-name").text();
    var price = $(this).find(".price").text();
    var number = $(this).find(".number").val();
    var sum = $(this).find(".sum").text();

    // basket-list내부 셀렉트된 요소들을 캔버스에 문자열로 생성
    ctx.fillText(productName, 10, 120 * (i + 1));
    ctx.fillText(brandName, 10, 120 * (i + 1) + 20);
    ctx.fillText(`가격 : ${price}`, 10, 120 * (i + 1) + 40);
    ctx.fillText(`수량 : ${number}`, 10, 120 * (i + 1) + 60);
    ctx.fillText(`합계 : ${sum}`, 10, 120 * (i + 1) + 80);
  });

  var totalSum = $("#total-sum").text();
  ctx.fillText(`총 합계 : ${totalSum}`, 10, 120 * itemLen + 150);

  //영수증 닫기버튼
  $("#popup-receipt").dialog({
    width: 500,
    height: 500,
    modal: true,
    buttons: {
      닫기: function () {
        $(this).dialog("close");
      },
    },
    open: function (event, ui) {
      $(event.target).dialog("widget");
    },
  });
}
// ============================================================  검색창 ============================================================
//검색기능
//검색창에 뭔가 입력할 때마다 이거 실행됨
function onSearch(val) {
  // 검색 결과 변수 생성
  var resultCount = 0;
  // 선택자 -> id가 product-list인 자식요소 div를 선택
  //each() 함수는 배열과,length속성을 갖는 객체들을 index기준으로 반복할 수 있습니다.
  $("#product-list > div").each(function () {
    // this -> 상품리스트
    // 상품이름에서 탐색
    var productName = $(this).find(".product-name");
    // 상품이름에서 탐색
    var brandName = $(this).find(".brand-name");

    // 만약 검색창이 비어있을때
    if (val === "") {
      $(this).show();
      $("#msg-empty").hide();
      return;
    } else {
      $(this).hide();
    }

    // text() -> 선택한 요소 안에서 태그를 재외한 내용을 가져온다.
    //indexOf() -> 문자열에서 특정 문자열을 찾고 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
    // 탐색시 글자기 없다면 "-1" 값을 배출 하기 때문에 -1 과 다르면~
    if (productName.text().indexOf(val) !== -1) {
      //replace() ->  원하는 글자를 찾아서 다른 글자로 교체해줍니다.
      // pnHighlight -> 검색창에 들어간 글자중 productname에서 highlight 클래스로 교체한다.
      var pnHighlight = productName
        .text()
        .replace(val, `<span class='highlight'>${val}</span>`);
      // productName의 html을 pnHighlight로 대체한다.
      productName.html(pnHighlight);
      // 상품 리스트를 보여준다.
      $(this).css("display", "block");
      // 검색 결과 변수 카운트
      resultCount++;
    }

    if (brandName.text().indexOf(val) !== -1) {
      var bnHighlight = brandName
        .text()
        .replace(val, `<span class='highlight'>${val}</span>`);
      brandName.html(bnHighlight);
      $(this).css("display", "block");
      resultCount++;
    }
  });

  // 검색결과 변수가 0 일때 msg-empty 를 보여준다.
  if (resultCount === 0) {
    $("#msg-empty").show();
  } else {
    $("#msg-empty").hide();
  }
}
