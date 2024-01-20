import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searrchItem, setSearchItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searrchItem}`);
  }

  return (
    <form
      autoComplete="off"
      className="p-2 text-gray-500 focus-within:text-gray-400"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search-field" className="sr-only"> Search </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-10 ml-3" />
        <input name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          value={searrchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-full h-10 ml-3 p-4 bg-transparent focus:outline-none text-white text-lg"
        />
      </div>
    </form>
  )

};

export default Searchbar;
