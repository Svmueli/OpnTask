
const SearchBar = () => (
    <div className="flex items-center bg-gray-200 p-4 rounded">
      <input type="text" placeholder="Search jobs..." aria-label="Search jobs" className="w-full p-2 rounded bg-white" />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Search</button>
    </div>
  );
  
  export default SearchBar;
  