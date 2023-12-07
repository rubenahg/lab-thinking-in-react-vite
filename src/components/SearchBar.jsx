import { useState } from "react";

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

    return (
        <div>
            <input 
            type="text" 
            value={searchTerm}
            onChange={handleChange}
            />
        </div>
    );
}

export default SearchBar;