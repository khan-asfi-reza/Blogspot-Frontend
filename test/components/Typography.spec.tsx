import React from "react";
import {render} from '@testing-library/react';
import {P} from "@UI/Typography";
import '@testing-library/jest-dom';

describe("Test P Element To have classnames", () => {

    test("P Element must have classname text-5xl", () => {
        const {getByText} = render(
            <P size={'5xl'}>Test</P>)

        expect(getByText(/Test/)).toHaveClass("text-5xl")
    }
    )

    test("P Element must have multiple classnames", () => {
            const {getByText} = render(
                <P size={{xl: '5xl', lg: '4xl'}}>Test</P>)
        expect(getByText(/Test/)).toHaveClass("xl:text-5xl");
        expect(getByText(/Test/)).toHaveClass("lg:text-4xl");
        }
    )
})