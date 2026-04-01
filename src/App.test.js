import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("renders Word Processor title", () => {
    render(<App />);
    expect(screen.getByText(/word processor/i)).toBeInTheDocument();
  });

  test("renders input field and process button", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("updates input value when typing", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "hello");
    expect(input).toHaveValue("hello");
  });

  test("processes input and displays output", async () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    await userEvent.type(input, "test");
    await userEvent.click(button);

    expect(screen.getByText(/processed word:/i)).toBeInTheDocument();
    expect(screen.getByText(/test/i)).toBeInTheDocument(); // depends on processWord logic
  });

  test("does not display output for empty input", async () => {
    render(<App />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(screen.queryByText(/processed word:/i)).not.toBeInTheDocument();
  });
});
