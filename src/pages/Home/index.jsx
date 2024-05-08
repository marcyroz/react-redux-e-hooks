import React, { useEffect, useState } from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchHomeData = async () => {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            width={300}
            height={200}
          />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button type="button">
            {/* div para fazer a parte do botão que contem o carrinho de compras e a quantidade de itens */}
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />3
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
