import React from "react";
import { render } from "@testing-library/react"
import Todo from "./Todo";

//smoke test
it("renders without crashing", function() {
  render(<Todo task="Run Tests"/>);
});
  
//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Todo task="Run Tests"/>);
  expect(asFragment()).toMatchSnapshot();
});