/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import Form from "../components/Form";
import Error from "../components/Error";

describe("Render app", () => {
  test("Render components", () => {
    render(
      <>
        <App />
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
    //Test displaying the error message when the input value is negative
    fireEvent.change(input, { target: { value: -12 } });
    expect(
      screen.getByText("Please enter a positive loan value number.")
    ).toBeInTheDocument();
  });

  test("Validate loan term input", () => {
    render(<App />);
    expect(screen.getByTestId("loan-term-input")).toBeInTheDocument();
    expect(screen.getByTestId("loan-term-input")).toBeEnabled();
    const input = screen.getByTestId("loan-term-input");
    fireEvent.change(input, { target: { value: 20 } });
    expect(
      screen.queryByText("Please enter a positive number between 0 and 30.")
    ).not.toBeInTheDocument();
    //Test displaying the error message when the input value is greater than 30
    fireEvent.change(input, { target: { value: 40 } });
    expect(
      screen.getByText("Please enter a positive number between 0 and 30.")
    ).toBeInTheDocument();
  });

  test("Validate interest rate input", () => {
    render(<App />);
    expect(screen.getByTestId("interest-rate-input")).toBeInTheDocument();
    expect(screen.getByTestId("interest-rate-input")).toBeEnabled();
    const input = screen.getByTestId("interest-rate-input");
    fireEvent.change(input, { target: { value: 80 } });
    expect(
      screen.queryByText("Please enter a positive number between 0 and 100.")
    ).not.toBeInTheDocument();
    //Test displaying the error message when the input value is greater than 100
    fireEvent.change(input, { target: { value: 109 } });
    expect(
      screen.getByText("Please enter a positive number between 0 and 100.")
    ).toBeInTheDocument();
  });

  test("Validate email address input", () => {
    render(<App />);
    expect(screen.getByTestId("email-address-input")).toBeInTheDocument();
    expect(screen.getByTestId("email-address-input")).toBeEnabled();
    const input = screen.getByTestId("email-address-input");
    fireEvent.change(input, { target: { value: "test@gmail.com" } });
    expect(
      screen.queryByText("Please enter a valid email address.")
    ).not.toBeInTheDocument();
    //Test displaying the error message when the email address is invalid
    fireEvent.change(input, { target: { value: "test@.com" } });
    expect(
      screen.getByText("Please enter a valid email address.")
    ).toBeInTheDocument();
  });

  test("Validate calculate emi button", () => {
    render(<App />);
    expect(screen.getByText(/Equated/i)).toBeInTheDocument();
    expect(screen.getByText("Calculate EMI")).toBeInTheDocument();
    const submitButton = screen.getByText(/Calculate EMI/i);
    expect(submitButton).toBeEnabled();
  });
});

describe("Validate fetch", () => {
  it("Check the fetch response", async () => {
    const mockData = { emi: "10" };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    const port = process.env.REACT_APP_PORT;
    const res = await fetch(`http://localhost:${port}/calculateEmi`);
    const result = await res.json();
    expect(result).toBe(mockData);
  });
});
