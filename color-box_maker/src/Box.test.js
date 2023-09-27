import React from "react";
import { render } from "@testing-library/react"
import Box from "./Box";

//smoke test
it("renders without crashing", function() {
  render(<Box width={10} height={10} color="#000000"/>);
});
  
//snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<Box width={10} height={10} color="#000000"/>);
  expect(asFragment()).toMatchSnapshot();
});