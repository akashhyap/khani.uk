"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex justify-center">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="border border-gray-400 rounded-md mr-2 px-3 md:min-w-[500px] h-10"
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-2/4">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
