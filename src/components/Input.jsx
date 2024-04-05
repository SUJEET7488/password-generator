import PropTypes from 'prop-types';
function Input({value,type,label,setFunction}){
    return (<>
    <label htmlFor="length">
                <input type={type} onChange={(e)=>{
                    setFunction(e.target.value)
                }} value={value} max={32}/>
                 {label}
              </label>
    </>)
}

Input.propTypes={
    value:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    setFunction:PropTypes.fn.isRequired
}

export default Input;