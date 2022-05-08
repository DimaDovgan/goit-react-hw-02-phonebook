
export const Personlist = ({persons}) => {
     return (<div><h2>Contacts</h2>
         <ul>{persons.map(({ name, number }) => <li>{name} : {number}</li>)}</ul></div>) 
}