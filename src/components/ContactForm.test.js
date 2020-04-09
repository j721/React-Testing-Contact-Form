import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test ('inputs are visible',()=>{
    //Arrange-set up testing environment
    const {getByLabelText} = render (<ContactForm/>);

    //Act. NONE.

    //Assert
    const firstNameInput = getByLabelText(/firstName/i);
    expect (firstNameInput).toBeVisible();

    const lastNameInput = getByLabelText(/lastName/i);
    expect (lastNameInput).toBeVisible();

    const emailInput = getByLabelText(/email/i);
    expect (emailInput).toBeVisible();

    const messageInput = getByLabelText(/message/i);
    expect (messageInput).toBeVisible(); 
})