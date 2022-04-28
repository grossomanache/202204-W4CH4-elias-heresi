import PhoneContext from "./PhoneContext";
import { render, screen } from "@testing-library/react";

describe("Given the PhoneContextProvider context", () => {
  describe("When an object with property name: 'Piter' is inputted, with a child of li", () => {
    test("Then an li will be rendered, with the text content of Piter", () => {
      const inputtedNumber = "123";
      const inputtedValue = { phoneNumber: inputtedNumber };

      render(
        <PhoneContext.Provider value={inputtedValue}>
          <p>{inputtedValue.phoneNumber}</p>
        </PhoneContext.Provider>
      );
      const createdDisplay = screen.getByText(inputtedNumber);

      expect(createdDisplay.textContent).toEqual(inputtedNumber);
    });
  });
});
