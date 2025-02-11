import React from 'react';
import './ProductIntroduction.css'; // 외부 CSS 파일 포함
import { PRODUCTS } from './Constant/Products';
const ProductIntroduction = () => {

  return (
    <div className="product-container">
      <table className="product-table" width="95%">
        <tbody>
          {PRODUCTS.map((product) => (
            <tr key={product.id}>
              <td width="20%" align="center" valign="top">
                <a href={`product/${product.id}`}>
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                </a>
              </td>
              <td width="80%" valign="top">
                <table width="100%" className="product-details" cellspacing="0">
                  <tbody>
                    <tr>
                      <td className="product-title">
                        <strong>
                          <a href={product.detailUrl}>{product.name}</a>
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="product-description" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductIntroduction;
