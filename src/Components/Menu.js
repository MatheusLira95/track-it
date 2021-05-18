import styled from "styled-components";

export default function Menu(){
    return(
        <>
            <MenuBar>
                <p>Hábitos</p>
                <p>Histórico</p>
                <Hoje>
                    Hoje
                </Hoje>
            </MenuBar>
        </>
    );
}
const MenuBar = styled.div`
    background-color: #fff;
    height:70px;
    width: 100%;
    padding: 0px 30px;
    font-size:17.98px;

    position: fixed;
    bottom: 0;
    left: 0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#52b6ff;
`;

const Hoje = styled.div`
    height:91px;
    width:91px;
    border-radius: 50px;
    background-color:#52b6ff;
    position:fixed;
    bottom:10px;
    margin-left:auto;
    margin-right:auto;
    left: 0;
    right: 0;
    color: #fff;
    display:flex;
    justify-content:center;
    align-items:center;

`;