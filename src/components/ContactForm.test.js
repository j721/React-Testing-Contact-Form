import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
    render(<ContactForm />);
  });
  

test ('inputs are in the document',()=>{
    //Arrange-set up testing environment
    const {getByText} = render (<ContactForm />);

    //Act. NONE.

    //Assert
    const firstNameInput = getByText(/first name/i);
    expect (firstNameInput).toBeInTheDocument();

    const lastNameInput = getByText(/last name/i);
    expect (lastNameInput).toBeInTheDocument();

    const emailInput = getByText(/email/i);
    expect (emailInput).toBeInTheDocument();

    const messageInput = getByText(/message/i);
    expect (messageInput).toBeInTheDocument(); 
})

test('form submits displays user data below',()=>{
    const {getByLabelText} = render (<ContactForm />)

    const firstInput = getByLabelText(/first name/i);
    const lastInput = getByLabelText(/last name/i);
    const emailForm = getByLabelText(/email/i);
    const messageForm =getByLabelText(/message/i); 

    fireEvent.change(firstInput, {target:{name: 'firstName', value: 'Lily'}})
    fireEvent.change(lastInput,{target: {name: 'lastName', value: 'White' }})
    fireEvent.change(emailForm, {target: {name: 'email', value:'lilywhite@gmail.com'}})
    fireEvent.change(messageForm,{target:{name: 'message', value: 'notes'}})

});

