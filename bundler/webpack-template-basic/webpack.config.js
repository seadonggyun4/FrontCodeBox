//improt
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')




//export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  // entry는 parcel의 index.html 과 같이 번들러가 번들을 시작하는 시작점
  // webpack은 js파일을 시작으로 한다.
  entry: './js/main.js',
  
  
  //결과물(번들)을 반환하는 설정
  output:{
    //path 는 현재 경로가 들어가야되는 변수 이다.
    // --dirname은 webpack 기본변수로 현제 프로젝트 루트 디렉토리이다.
    //resolve(1,2)는 경로 1,2를 합쳐서 path에 제공하는 역할을 한다,
    //즉 루트디렉토리에 'dist'라는 디렉토리 가 결과물이 들어갈 장소로 지정되게 된다.
    // path 명령어를 생략해도 기본적으로 dist를 생성한다
    path: path.resolve(__dirname,'dist'),
    
    //path에 번들될 파일명
    // filename을 생략해도 기본적으로 똑같은 이름으로 번들된다.
    filename: 'main.js',

    //새롭게 build 명령을 실행할때 필요없는 파일 제거
    clean:true
  },

  module:{
    rules:[
      {
        //.scss로 끝나는 파일을 찾는 정규식
        // s는 있을수도 있고 없을수도있어 css또한 호환가능하다.
        test:/\.s?css$/,
        // 찾은 파일에서 사용하는 모듈
        use:[
          'style-loader',//js에서 해석된 css를 html 에 삽입을 하는 용도
          'css-loader', //js에서 css를 해석하도록 한다.
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        //.js로 끝나는 파일을 찾는 정규식
        test: /\.js$/,
        //찾을 파일에서 사용하는 모듈
        use: [
          'babel-loader'//웹팩에서 babelrc 파일을 해석하기 위한 모듈
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  // entry로 들어온 파일이 output으로 번들되어 나온후 그 파일들을 다루기 위한 설정팩이라 보면된다.
  plugins:[
    //html을 연결짓는 플러그인
    new HtmlPlugin({
      template: './index.html'
    }),
    //정적파일들을 번들되게 도와주는 플러그인
    new CopyPlugin({
      patterns: [
        //번들할 디렉토리 위치
        {from: 'static'}
      ]
    })
  ],

  //개발용 서버의 호스트를 설정
  devServer: {
    host: 'localhost'
  }
}