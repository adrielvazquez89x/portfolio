import styled from '@emotion/styled'


const Button = ({text}) => {
    return (
        <Btn>
            {text}
        </Btn>
    )
}

export default Button

const Btn = styled.button`
    font-weight: bold;
    color: #fff;
    background-color: ${props => props.theme.mainColor1} ;
    width: 150px;
    border-radius: 20px;
    padding: 6px;
    &:hover {
        background-color: ${props => props.theme.mainColor2} ;
    }

`