import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke Tests
it("'NewBoxForm' component renders without crashing", function() {
    render(<NewBoxForm />);
});

// Snapshot Tests
it("'NewBoxForm' matches snapshot", function() {
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});
