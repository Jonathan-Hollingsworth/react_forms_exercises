import React from "react";
import { render, fireEvent } from "@testing-library/react"
import BoxList from "./BoxList";

//smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});
  
//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds boxes properly when form is submitted", function() {
  const { getByLabelText, queryByText, container } = render(<BoxList />);
  
  expect(container.querySelector('.Box')).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Color");
  const submitBtn = queryByText("Add Box")
  
  fireEvent.change(widthInput, { target: { value: 20 }});
  fireEvent.change(heightInput, { target: { value: 20 }});
  fireEvent.change(colorInput, { target: { value: "#A2336C" }});
  fireEvent.click(submitBtn);
  
  expect(container.querySelector('.Box')).toBeInTheDocument();
});

it("deletes box properly when button is pressed", function() {
  const { getByLabelText, queryByText, container } = render(<BoxList />);

  const widthInput = getByLabelText("Width");
  const heightInput = getByLabelText("Height");
  const colorInput = getByLabelText("Color");
  const submitBtn = queryByText("Add Box")
  
  fireEvent.change(widthInput, { target: { value: 20 }});
  fireEvent.change(heightInput, { target: { value: 20 }});
  fireEvent.change(colorInput, { target: { value: "#A2336C" }});
  fireEvent.click(submitBtn);
  
  expect(container.querySelector('.Box')).toBeInTheDocument();

  const deleteBtn = queryByText("X")
  fireEvent.click(deleteBtn);

  expect(container.querySelector('.Box')).not.toBeInTheDocument();
});