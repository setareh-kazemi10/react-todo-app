const Input = ({inputVal , handleInput}) => {
    return ( <input type="text" placeholder="Enter ..." onChange={handleInput} value={inputVal} /> );
}
 
export default Input;