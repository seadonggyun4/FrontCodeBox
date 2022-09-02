import axios  from "axios";

function fetchMovies(){
  // axios -> 쿼리스트링 주소로 접근해서 요청받은 내용을 js 파일내부에서 핸들링 할수 있게 도와준다.
  // 쿼리스트링은 https로 작성하는것이 좋다.
  // .get() -> 서버에 요정하는 메서드
  // .then() -> 응답받은 데이터를 핸들링 하는 메서드
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then((response) => {
      console.log(response)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')

      //h1E1의 텍스트 명을 바꾼다. -> 응답받은 영화 데이터의 타이틀 값으로
      h1El.textContent = response.data.Search[0].Title
      //imgEl의 src 를 바꾼다 -> 응답받은 영화 데이터의 포스터 주소로
      imgEl.src = response.data.Search[0].Poster
    })
}

fetchMovies()