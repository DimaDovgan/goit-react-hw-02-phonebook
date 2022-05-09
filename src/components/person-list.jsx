
export const Personlist = ({persons}) => {
     return (<div><ul>{persons.map(({ name, number }) => <li>{name} : {number}</li>)}</ul></div>) 
}