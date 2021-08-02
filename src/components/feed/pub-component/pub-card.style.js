import Styled from "styled-components";

const Btn = Styled.button`
    width: 150px;
    height: 25px;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? "#f2f3f5" : "#1556ed")};
    color: ${(props) => (props.active ? "#666" : "#fdfdfd")};
    border: none;
    text-transform: capitalize;
    font-size: small;
    
`;

const PostCard = Styled.div`
    height: 170px;
    width: 100%;
    margin: 20px 0px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #fff;
    & .post-data{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        & .friend-data {

            height: 55px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            & .avatar-div {
                display:flex;
                padding: 0px 15px;
                & img {
                    width: 50px;
                    height: 50px;
                    margin: 0px 3px;
                    border: 3px solid #559;
                    border-radius: 25px;
                }
                & .text {
                    padding: 0px 5px;
                    & p{
                        color: #55a;
                        font-weight: 700;
                        margin-left: 5px; 
                    };
                    & .status {
                        width: 270px;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin: 5px 0px;
                        font-weight: 300 ;
                        color: #666;
                        & .icons {
                            font-size: x-small;
                            margin: 0px 5px;
                        }
                    };
                }; 
            };
            & .arrow {
                width: 50px;
                padding: 5px 0px;
                display: flex;
                justify-content: center;
                & .arrow-icon {
                    font-weight: 300 ;
                    color: #666;
                    font-size: small;
                }
            }
        };
        & .post-status{
            height: 25px;
            width: 100%;
            margin: 0px 20px;
            font-weight: 300 ;
            color: #666;
        };
        & .interaction-status {
            height: 25px;
            width: 100%;
            padding: 0px 20px;
            display: flex;
            justify-content: space-between;
            & .like-row {
                width: 200px;
                display: flex;
                align-items: center;
                font-weight: 300 ;
                color: #666;
            };
            & .share-row {
                width: 250px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                font-weight: 300 ;
                color: #666;
            };
        };
    };
    & .post-buttons{
        height: 45px;
        border-top: 2px solid #f2f3f5;
        border-bottom: 2px solid #f2f3f5;
        display: flex;
        justify-content: space-around;
        align-items: center;
        & .ico {
            margin: 0px 3px;
        }
    }
`;

export { Btn, PostCard };
