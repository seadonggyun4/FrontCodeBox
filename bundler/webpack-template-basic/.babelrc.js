module.exports = {
  presets: ['@babel/preset-env'], //js 기능을 한번에 지원
  plugins: [
    ['@babel/plugin-transform-runtime'] //비동기 처리를 위한 패키지
  ]
}