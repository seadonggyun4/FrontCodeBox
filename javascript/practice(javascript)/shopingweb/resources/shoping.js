// [====== jason 파일 받아온 후에 데이터 바인딩 하는 함수 =====]
function getProducts() {
  // get -> 로컬 json 파일 data로  받아오기
  $.get("resources/store.json").done(function (data) {
    //
    data.products.forEach(function (item, i) {
      appendProduct(item, i);
    });
  });
}
// [====== 상품 append 함수, drag 기능 =====]

function appendProduct(product, index) {
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
  `);

  $("#item-list").append(newItem);
}
