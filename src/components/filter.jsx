export const Filter = ({ value, func }) => {
    
    return <div><input
        type="text"
        name="filter"
        value={value}
        required
        onChange={func}
    /><ul>{ }</ul>
    </div>
}