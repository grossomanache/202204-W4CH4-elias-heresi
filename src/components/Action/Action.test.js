import Action from "./Action";
import PhoneContext from "../../contexts/PhoneContext";
import { render, screen } from "@testing-library/react";

describe("Given the Action component", () => {
  describe("When inputted the action 'call'", () => {
    test("Then a button with the text 'Call' should be renderized", () => {
      const inputtedAction = "call";
      const expectedName = "Call";

      render(
        <PhoneContext.Provider>
          <Action action={inputtedAction} />
        </PhoneContext.Provider>
      );

      const createdDisplay = screen.getByRole("link");

      expect(createdDisplay.textContent).toEqual(expectedName);
    });
  });
});
