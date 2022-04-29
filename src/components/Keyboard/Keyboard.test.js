import Keyboard from "./Keyboard";
import { render, screen } from "@testing-library/react";
import PhoneContextProvider from "../../contexts/PhoneContextProvider";

describe("Given the Keyboard component", () => {
  describe("When the component is instantiated", () => {
    test("Then 11 keys will be created", () => {
      const addDigit = jest.fn();
      const expectedNumberOfKeys = 11;

      render(
        <PhoneContextProvider value={addDigit}>
          <Keyboard />
        </PhoneContextProvider>
      );

      const createdDisplay = screen.getAllByRole("button");
      expect(createdDisplay.length).toBe(expectedNumberOfKeys);
    });
  });
});
