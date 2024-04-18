import React from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"
          
        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"

        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"

        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"

        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"
        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src=" https://i0.wp.com/umaturistanasnuvens.com/wp-content/uploads/2020/10/doces-ao-redor-do-mundo-macarons.jpg?resize=1170%2C780&ssl=1"
          alt="macarons"
        />
        <strong>Macarons deliciosos!</strong>
        <span>R$5,00</span>
        <button type="button">
          {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
          <div>
            <MdAddShoppingCart size={16} color="#FFF" />3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
