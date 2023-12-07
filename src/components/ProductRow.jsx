import { useState } from "react";

function ProductRow({products}) {
  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>
          <td style={product.inStock ? {} : {color: 'red'}}>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  );
}

export default ProductRow;