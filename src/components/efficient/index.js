import React from "react";
import {
  Efficient,
  Main,
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
  Card,
} from "./index.styled";

const Complement = () => {
  return (
    <Main>
      <Efficient>
        <div className="title">
          <img src="/img/termometro.jpg" alt="termometro" />
          <h4>Eficiência</h4>
        </div>
        <Divider />

        <TableOne>
          <HalfLineOne>
            <div className="indicator">
              <h5>Atividades</h5> 23/165
            </div>
            <div className="result">50%</div>
          </HalfLineOne>
          <HalfLineTwo>
            <div className="indicator">
              <h5>Projetos</h5> 23/165
            </div>
            <div className="result">50%</div>
          </HalfLineTwo>
          <FullLine>
            <div className="indicator">
              <h5>Total</h5>
              23/165
            </div>
            <div className="result">50%</div>
          </FullLine>
        </TableOne>

        <TableTwo>
          <ColOne>
            <div className="header">Atividade</div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
          </ColOne>
          <ColTwo>
            <div className="header">Projeto</div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>3</p>
            </div>
          </ColTwo>
          <ColThree>
            <div className="header">Total</div>
            <div className="item">
              <h6>Pendente</h6>
              <p>6</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>6</p>
            </div>
            <div className="item">
              <h6>Pendente</h6>
              <p>6</p>
            </div>
          </ColThree>
        </TableTwo>
      </Efficient>
      <Card>
        <div className="title">
          <img src="/img/cake.svg" alt="cake" />
          <h4>Aniversariantes</h4>
        </div>
        <Divider />
        <div className="content">
          <p>Nenhum dos seus amigos comemora</p>
          <p>aniversário hoje</p>
        </div>
      </Card>
      <Card>
        <div className="title">
          <img src="/img/pendency.png" alt="pendencies" />
          <h4>Pendências</h4>
        </div>
        <DividerWithText>
          <h5>Seg, 21 de Junho</h5>
        </DividerWithText>
        <div className="content">
          <p>Voce não possui nenhuma</p>
          <p>pendência para hoje</p>
        </div>
      </Card>
    </Main>
  );
};

export default Complement;
