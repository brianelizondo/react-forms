import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

// Smoke Tests
it("'Todo' component renders without crashing", function() {
    render(<Todo />);
});

// Snapshot Tests
it("'Todo' matches snapshot", function() {
    const {asFragment} = render(<Todo task="test" id={123} key={123}/>);
    expect(asFragment()).toMatchSnapshot();
});