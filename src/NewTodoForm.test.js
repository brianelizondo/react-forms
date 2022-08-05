import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

// Smoke Tests
it("'NewTodoForm' component renders without crashing", function() {
    render(<NewTodoForm />);
});

// Snapshot Tests
it("'NewTodoForm' matches snapshot", function() {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});
