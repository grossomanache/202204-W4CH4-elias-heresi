import Info from "./Info";
import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";

describe("Given the Info component", () => {
  describe("When instantiated", () => {
    test("Then a message 'Calling...' will be rendered", () => {
      const expectedMessage = "Calling...";
      const inputtedObject = { calling: true };

      render(
        <PhoneContext.Provider value={inputtedObject}>
          <Info />
        </PhoneContext.Provider>
      );

      const createdDisplay = screen.getByText(expectedMessage);

      expect(createdDisplay.textContent).toEqual(expectedMessage);
      expect(createdDisplay).toBeInTheDocument();
    });
  });
});
