import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Smoke Tests
it("'TodoList' component renders without crashing", function() {
    render(<TodoList />);
});

// Snapshot Tests
it("'TodoList' matches snapshot", function() {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new task", function() {
    const { getByLabelText, queryByText } = render(<TodoList />);
  
    // no todo yet
    expect(queryByText("X")).not.toBeInTheDocument();
  
    // form elements
    const taskInput = getByLabelText("Task:");
    const submitBtn = queryByText("Add Task!");
  
    // fill out the form
    fireEvent.change(taskInput, { target: { value: "test" }});
    fireEvent.click(submitBtn);
  
    // todo exists!
    expect(queryByText("X")).toBeInTheDocument();
  });