import styled from "styled-components"

// StyledA 는 a 태그 링크
// a 태그에서 전역적으로 사용될 속성을 지정하기 위해서는 "attrs((props) => ({}))" 매서드를 사용
const StyledA = styled.a.attrs((props) => ({
    target: "_BLANK",
}))`
    color: ${(props) => props.color};
`

export default StyledA