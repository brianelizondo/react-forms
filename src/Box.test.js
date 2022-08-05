import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

// Smoke Tests
it("'Box' component renders without crashing", function() {
    render(<Box />);
});

// Snapshot Tests
it("'Box' matches snapshot", function() {
    const {asFragment} = render(<Box width={200} height={200} color="blue" id={123} key={123}/>);
    expect(asFragment()).toMatchSnapshot();
});