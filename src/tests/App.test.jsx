/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import Form from "../components/Form";
import Error from "../components/Error";

describe("create emi", () => {
  test("Render app", async () => {
    render(<App />);
    expect(screen.getByText(/Equated/i)).toBeInTheDocument();
    expect(screen.getByText("Calculate EMI")).toBeInTheDocument();
    const submitButton = screen.getByText(/Calculate EMI/i);
    expect(submitButton).toBeEnabled();
  });

  test("Render other components", () => {
    render(
      <>
        <Form />
        <Error />
      </>
    );
  });
  test("Validate loan value input", () => {
    render(<App />);
    expect(screen.getByTestId("loan-value-input")).toBeInTheDocument();
    expect(screen.getByTestId("loan-value-input")).toBeEnabled();
    const input = screen.getByTestId("loan-value-input");

    fireEvent.change(input, { target: { value: 100 } });
    expect(
      screen.queryByText("Please enter a positive loan value number.")
    ).not.toBeInTheDocument();
    //Test displaying the error message
    fireEvent.change(input, { target: { value: -12 } });
    expect(
      screen.getByText("Please enter a positive loan value number.")
    ).toBeInTheDocument();
  });
});
