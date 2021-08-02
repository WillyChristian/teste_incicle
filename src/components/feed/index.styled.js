import Styled from "styled-components";

const FeedContainer = Styled.div`
    height: 350px;
    width: 50%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
`;

const Publication = Styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #fff;
    & .write-pub{
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px;
        & .text{
            width: 200px;
            display: flex;
            justify-content: space-around;
            font-weight: 300;
            & .ico {
                color: #999;
            }
        };
        & .icons {
            width: 80px;
            display: flex;
            justify-content: space-around;
            & .ico {
                color: #999;
            }
        };
    };
    & .post-pub {
        background-color: #eaebed;
        height: 30px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 0px 15px;
        & p {
            color: #bbb9c4;
            font-size: small;
            font-weight: 300;
            & .link {
                text-decoration: none;
                color: blue;
            }
        }
    }
`;

export { FeedContainer, Publication };
