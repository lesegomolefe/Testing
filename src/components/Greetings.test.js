// src/components/Greetings.test.js

import React from "react";
import renderer from "react-test-renderer";
import Greetings from "./Greetings";

test("renders Greetings component correctly", () => {
  const tree = renderer.create(<Greetings />).toJSON();
  expect(tree).toMatchSnapshot();
});
