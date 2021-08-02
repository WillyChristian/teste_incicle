import Styled from "styled-components";

const Main = Styled.div`
    border-radius: 15px;
    height: 400px;
    width: 300px;

`;

const Divider = Styled.div`
    height: 10px;
    width: 100%;
    margin: 10px 0px;
    background-color: #dedede;
`;

const DividerWithText = Styled(Divider)`
    height: 15px;
    padding: 0 10px;
`;
const TableOne = Styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 110px;
    padding: 0px 5px;
`;
const Line = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0px 5px;
    border-radius: 8px;
    margin: 2px 5px 2px 5px;
`;
const HalfLineOne = Styled(Line)`
    background-color: #00c4f8;
    width: 46%;
`;
const HalfLineTwo = Styled(Line)`
    background-color: #8dcd00;
    width: 46%;
`;
const FullLine = Styled(Line)`
    background-color: #ff7f00;
    width: 100%;
`;

const Efficient = Styled.div`
    background-color: #fff;
    border-radius: 15px;
    width: 100%;
    height: 350px;
    margin: 10px 0px;
    & .title{
        border-radius: 15px 15px 0px 0px;
        height: 60px;
        display:flex;
        justify-content: center;
        align-items: center;
        & img{
            width: 30px;
            height: 20px;
            margin: 0 10px;
        };
        & h4{
            color: #55a;
            font-weight: 700; 
        }
    };
`;
const TableTwo = Styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 5px;
`;

const Col = Styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    & .header {
        width: 100%;
        display: flex;
        justify-content: center;
    };
    & .item {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const ColOne = Styled(Col)`
    border: 2px solid #71969c;
    border-radius: 10px;
    padding: 2px 5px;
`;
const ColTwo = Styled(Col)`
    border: 2px solid #a2aa7b;
    border-radius: 10px;
    padding: 2px 5px;  
`;
const ColThree = Styled(Col)`
    border: 2px solid #a7956f;
    border-radius: 10px;
    padding: 2px 5px;
`;

const Card = Styled.div` 
    background-color: #fff;
    border-radius: 15px;
    width: 100%;
    height: 120px;
    margin: 15px 0px;
    & .title {
        border-radius: 15px 15px 0px 0px;
        height: 40px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-weight: 300;
        & h4{
            color: #55a;
            font-weight: 700; 
        };
        & img {
            width: 20px;
            height: 20px;
            margin: 0 10px;
        };
    };
    & .content {
        text-align: center;
        font-weight: 300;       
    }
`;

export {
  Efficient,
  Main,
  Card,
  Divider,
  DividerWithText,
  ColOne,
  ColTwo,
  ColThree,
  TableOne,
  TableTwo,
  HalfLineOne,
  HalfLineTwo,
  FullLine,
};
