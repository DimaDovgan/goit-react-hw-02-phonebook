import React, { Component } from "react"

export class Form extends Component{
    state = {
        name: '',
        number: '',
    }
    hendelChangeName=(event)=> {
        this.setState({name:event.currentTarget.value})
        
    }
    hendelChangeNumber=(event)=> {
        this.setState({number:event.currentTarget.value})
        
    }
    addPerson = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.formReset();
        
    }
    formReset = () => {
        this.setState({
            name: '',
            number: '',
        });
    }
    
    render() {
        const {name,number}=this.state
        return <form onSubmit={this.addPerson}>
        <label>Name<input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
                onChange={this.hendelChangeName} /></label>
            <label>Number
        <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={this.hendelChangeNumber}
        /></label>
        <button type="submit" >add</button>
      </form>
    }
}