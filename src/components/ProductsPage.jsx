import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar onSearch={handleSearch} />
        <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;