import React, { Component } from "react"
import { FormName } from "./forma-name"
import { Personlist } from "./person-list"
import { AddButton } from "./add-button"
import { nanoid } from 'nanoid'
import { FormNumber } from './form-number'
import { Form } from "./form"
export class PhoneBook extends Component{
    state = {
    contacts: [],
        name: '',
        number:''
    }
    hendelChangeName=(event)=> {
        this.setState({name:event.currentTarget.value})
        
    }
    hendelChangeNumber=(event)=> {
        this.setState({number:event.currentTarget.value})
        
    }
    addPerson = (event) => {
        event.preventDefault();
        const arr=[...this.state.contacts]
        let objContact = {
            name: this.state.name,
            id: nanoid(),
            number:this.state.number
        }
        arr.push(objContact);
        // this.setState(this.state.contacts.push(objContact))
        this.setState({contacts:arr})
        console.log("add")
    }
    render() {
        console.log(this.state.contacts)
        return <div>
            <Form name={this.state.name} funcFormName={this.hendelChangeName} number={this.state.number} funcFormNumber={this.hendelChangeNumber}  funcAddButton={this.addPerson} />
            {/* <FormName name={this.state.name} func={this.hendelChangeName} /> 
            <FormNumber number={this.state.number} func={this.hendelChangeNumber }/>
            <AddButton func={this.addPerson}></AddButton> */}


            <Personlist persons={ this.state.contacts}/></div>
        
        
        
    }
}