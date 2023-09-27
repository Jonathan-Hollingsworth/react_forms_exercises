import React from "react";
import { render, fireEvent } from "@testing-library/react"
import TodoList from "./TodoList";

//smoke test
it("renders without crashing", function() {
  render(<TodoList />);
});
  
//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds todos properly when form is submitted", function() {
  const { getByLabelText, queryByText } = render(<TodoList />);
  
  expect(queryByText("Check if Form works")).not.toBeInTheDocument();

  const taskInput = getByLabelText("Task");
  const submitBtn = queryByText("Add Todo")
  
  fireEvent.change(taskInput, { target: { value: "Check if Form works" }});
  fireEvent.click(submitBtn);
  
  expect(queryByText("Check if Form works")).toBeInTheDocument();
});

it("deletes todo properly when button is pressed", function() {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const taskInput = getByLabelText("Task");
  const submitBtn = queryByText("Add Todo")
  
  fireEvent.change(taskInput, { target: { value: "Check if deleting works" }});
  fireEvent.click(submitBtn);
  
  expect(queryByText("Check if deleting works")).toBeInTheDocument();

  const deleteBtn = queryByText("X")
  fireEvent.click(deleteBtn);

  expect(queryByText("Check if deleting works")).not.toBeInTheDocument();
});