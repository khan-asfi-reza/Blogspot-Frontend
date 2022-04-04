import React from "react";
import {render} from '@testing-library/react';
import {Container} from "../../components/UI/Container";
import '@testing-library/jest-dom';

describe("Container Component", () => {
    let expectedProps;

    beforeEach(() => {
        expectedProps = {
            overwrite: true,
            className: "max-w-7xl"
        }
    })

    test("Container should not have default classname", () => {
            const {container} = render(<Container {...expectedProps}/>)
            expect(container.firstChild).toHaveClass("max-w-7xl")
            expect(container.firstChild).not.toHaveClass("container")
        }
    )
})