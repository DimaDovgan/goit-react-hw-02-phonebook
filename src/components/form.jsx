import { FormName } from "./forma-name"
import { AddButton } from "./add-button"
import {FormNumber} from './form-number'
export const Form = ({name,funcFormName,number,funcFormNumber,funcAddButton}) => {
    return(<form onSubmit={funcAddButton}>
        <FormName name={name} func={funcFormName} /> 
        <FormNumber number={number} func={funcFormNumber}/>
        <AddButton ></AddButton>
      </form>)
}