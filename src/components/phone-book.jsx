import React, { Component } from "react"
//import { FormName } from "./forma-name"
import { Personlist } from "./person-list"
//import { AddButton } from "./add-button"
import { nanoid } from 'nanoid'
//import { FormNumber } from './form-number'
//import { Form1} from "./form"
import { Filter } from "./filter"
import {Form} from "./Forma"
export class PhoneBook extends Component{
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: 'fkgyu'
    }
    
    hendelChangeInputFilter = (event) => {
        const arr=[]
        console.log(this.state)
        this.setState({ filter: event.currentTarget.value })
        for (let i = 0; i < this.state.contacts.length; i += 1)
        {
            if (this.state.contacts[i].name.includes(this.state.filter))
            {
                arr.push(this.state.contacts[i]);
            }
        }
        console.log("arr", arr)
        return arr;
        
    }
    formSubmit = ({name,number}) => {
        const arr=[...this.state.contacts]
        let objContact = {
            name: name,
            id: nanoid(),
            number:number
        }
        arr.push(objContact);
        // this.setState(this.state.contacts.push(objContact))
        this.setState({contacts:arr})
        console.log("add")
    }
    FilterArr() {
        return this.state.contacts.filter(contact=>contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    }
    
    render() {
        // console.log(this.state.contacts)
        // const newArr=this.state.contacts.filter(contact=>contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
        return <div>
            <h1>Phonebook</h1>
            <Form onSubmit={this.formSubmit }/>
            
            <h2>Contacts</h2>
            <Filter value={this.state.filter} func={this.hendelChangeInputFilter} contacts={this.state.contacts}/>
            <Personlist persons={ this.FilterArr()}/></div>
        
        
        
    }
}