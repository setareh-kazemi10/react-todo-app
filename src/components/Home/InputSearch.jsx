const InputSearch = ({search , setSearch}) => {
    return ( <input type="text" placeholder="search..." value={search} onChange={(e) => setSearch(e.target.value)} /> );
}
 
export default InputSearch;