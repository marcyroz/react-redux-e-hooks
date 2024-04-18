import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  /* cria 3 espaçamentos de grid com uma altura igual */
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    //o > serve para que a instrução não funcione em qualquer coisa que não esta dentro do li
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #ff689a;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      //faz com que o botão seja jogado para o mais perto da margem possível
      margin-top: auto;
      display: flex;
      align-items: center;
      //atrasando o escurecimento do botão
      transition: background 0.2s;

      &:hover {
        /* usando a função darken da biblioteca polished para escurecer a cor do botão quando o mouse passar por cima */
        background: ${darken(0.03, '#ff689a')};
      }
      //parte do carrinho dentro do botão
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      //texto dentro do botão
      span {
        //faz com que ele ocupe todo tamanho possível
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
