import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke Tests
it("'BoxList' component renders without crashing", function() {
    render(<BoxList />);
});

// Snapshot Tests
it("'BoxList' matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const { getByLabelText, queryByText } = render(<BoxList />);
  
    // no box yet
    expect(queryByText("X")).not.toBeInTheDocument();
  
    // form elements
    const widthInput = getByLabelText("Box width:");
    const heightInput = getByLabelText("Box height:");
    const colorInput = getByLabelText("Box color:");
    const submitBtn = queryByText("Add Box!");
  
    // fill out the form
    fireEvent.change(widthInput, { target: { value: 200 }});
    fireEvent.change(heightInput, { target: { value: 200 }});
    fireEvent.change(colorInput, { target: { value: "orange" }});
    fireEvent.click(submitBtn);
  
    // box exists!
    expect(queryByText("X")).toBeInTheDocument();
  });