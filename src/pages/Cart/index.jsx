import React from 'react';
import { Container, ProductTable, Total } from './styles.jsx';
//importando os icones de aumentar e diminuir a quantidade do produto e para deletar o produto
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
                alt="macarons"
              />
            </td>
            <td>
              <strong>Macarons deliciosos!</strong>
              <span>R$5,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#ff689a" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#ff689a" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$10,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#ff689a" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>Total</span>
          <strong>R$1920,50</strong>
        </Total>
      </footer>
    </Container>
  );
}
