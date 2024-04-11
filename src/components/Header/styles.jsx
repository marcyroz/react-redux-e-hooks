import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

// quando vamos utilizar um componente que não é nativo do html colocamos ele entre parênteses
export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  //faz a opacidade demorar o.2 segundos para mudar
  transition: 0.2s;

  /* adicionando hover para que o carrinho tenha um efeito visual quando o usuário passar o mouse por cima */
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
