import styled, {css} from "styled-components"


// styled-components 의 방식으로 button 생성
const StyledButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    font-size: 20px;
    cursor: pointer;

    ${(props) => props.primary && css`
        background: palevioletred;
        color: white;
    `}
`;

export default StyledButton