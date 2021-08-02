import Styled from "styled-components";

const CardContainer = Styled.div`
    height: 350px;
    width: 250px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-image: url("/img/avtr-bg.png ");
    background-repeat: no-repeat ;
    background-position: center ;
`;

const User = Styled.section`
    height: 180px;
    width: 150px;   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    & .avatar {
        height: 100px;
        width: 100px;
        & img {
            width: 100%;
            height: 100%;
            border: 5px solid #559;
            border-radius: 50px;
        };
    };
    & .username {
        width: 150px;
        height: 60px;
        & .name {
            color: #55a;
            font-weight: 700; 
        };
        & .tagname {
        display: flex;
        flex-direction: column;
        & h4 {
            color: #444;
        };
        & small {
            font-weight: 300 ;
            color: #666;
        }
        }
    };
`;

const UserInfo = Styled.section`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & .container {
        width:200px;
        display: flex;
        justify-content: space-around;
        color: #666;
        font-weight: 300;
    };
    & .ico{
        font-size: small;
        margin-top: 4px;    
    }
`;

export { CardContainer, User, UserInfo };
