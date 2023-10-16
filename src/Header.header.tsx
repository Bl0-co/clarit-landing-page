import styled from 'styled-components'
import Colors from './Colors/Colors';

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>
                <img src="/clarit-logo.png" alt="" />
                <h1>CLARIT</h1>
            </Logo>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
height: 80px;
width: 100%;
position: fixed;
top: 0;
left: 0;
border-bottom: 1px solid ${Colors.mainGrayLowOpacity};
display: flex;
justify-content: flex-start;
align-items: center;
background-color: rgba(255,255,255,0.6);
z-index: 7;


`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 20px;
    padding-left: 20px;
    img{
    width:50px;
    height:36px;
  }
    h1{
    font-family: Plus Jakarta Sans;
    
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${Colors.darkGreen};
    font-size: 34.307px;
  }
  cursor: pointer;
`;

