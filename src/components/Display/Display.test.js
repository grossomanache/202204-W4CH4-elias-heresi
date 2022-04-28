import Display from "./Display";
import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";

describe("Given the Display component", () => {
  describe("When inputted the number 2456", () => {
    test("Then the the phone number 2456 will be displayed", () => {
      const inputtedNumber = "2456";
      const inputtedObject = { phoneNumber: inputtedNumber };

      render(
        <PhoneContext.Provider value={inputtedObject}>
          <Display />
        </PhoneContext.Provider>
      );

      const createdDisplay = screen.getByText(inputtedNumber);

      expect(createdDisplay.textContent).toEqual(inputtedNumber);
    });
  });
});
