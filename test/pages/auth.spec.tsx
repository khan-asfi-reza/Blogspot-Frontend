import React from "react";
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Auth from "../../pages/auth";
import {LOGIN_PAGE_TEXT} from "../../content";
import userEvent from "@testing-library/user-event";
import Login from "../../containers/auth/login";
import Signup from "../../containers/auth/signup";

describe("Auth Page Initial Login", () => {

    test('Initial Render Must have login page', () => {
        const {getByText} = render(<Auth/>);
        const text = getByText(LOGIN_PAGE_TEXT);
        expect(text).toBeInTheDocument();
    })

    test("Check Button click change page", async () => {
        const {getByTestId} = render(<Auth/>);
        const button = getByTestId("CHANGE_PAGE");
        expect(button).toBeInTheDocument();
        fireEvent.click(button)
    })

    test("Login Button Disabled", () => {
        const setState = jest.fn();
        const {getByTestId} = render(<Login state={{email: "", password: ""}} setState={setState}/>);
        const button = getByTestId("ACTION_BUTTON");
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })

    test("Login Button Enabled", () => {
        const setState = jest.fn();
        const {getByTestId,} = render(<Login state={{email: "test@email.com", password: "password"}}
                                             setState={setState}/>);
        const button = getByTestId("ACTION_BUTTON");
        const email_input = getByTestId("email");
        userEvent.type(email_input, "TEST");
        expect(button).toBeEnabled();
    })

    test("Signup Button Disabled", () => {
        const setState = jest.fn();
        const state = {
            email: "",
            password: "",
            confirm_password: "",
            first_name: "",
            last_name: ""
        }
        const {getByTestId} = render(<Signup state={state} setState={setState}/>);
        const button = getByTestId("ACTION_BUTTON");
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })

    test("Signup Button Enabled", () => {
        const setState = jest.fn();
        const state = {
            email: "test",
            password: "test",
            confirm_password: "test",
            first_name: "test",
            last_name: "test"
        }
        const {getByTestId} = render(<Signup state={state} setState={setState}/>);
        const button = getByTestId("ACTION_BUTTON");
        expect(button).toBeInTheDocument();
        expect(button).toBeEnabled();
    })

    test("Signup Button Disabled by unmatching password", () => {
        const setState = jest.fn();
        const state = {
            email: "test",
            password: "test",
            confirm_password: "test1",
            first_name: "test",
            last_name: "test"
        }
        const {getByTestId} = render(<Signup state={state} setState={setState}/>);
        const button = getByTestId("ACTION_BUTTON");
        expect(button).toBeInTheDocument();
        expect(button).toBeDisabled();
    })

})