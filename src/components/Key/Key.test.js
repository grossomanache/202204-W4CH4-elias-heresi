import Key from "./Key";
import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";

describe("Given the Key component", () => {
  describe("When inputted the number 2456", () => {
    test("Then the the phone number 2456 will be displayed", () => {
      const inputtedNumber = "1";

      render(
        <PhoneContext.Provider>
          <Key text={inputtedNumber} className="key" />
        </PhoneContext.Provider>
      );

      const createdDisplay = screen.getByText(inputtedNumber);

      expect(createdDisplay.textContent).toEqual(inputtedNumber);
    });
  });
});
