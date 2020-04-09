import React from "react";
import { render } from "@testing-library/react";
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

test('')