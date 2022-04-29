import Actions from "./Actions";
import PhoneContext from "../../contexts/PhoneContext";
import { render, screen } from "@testing-library/react";

describe("Given the Actions component", () => {
  describe("When instantiated", () => {
    test("Then both a Display and an Action component will be rendered", () => {
      const inputValue = { calling: true, phoneNumber: "2345" };
      render(
        <PhoneContext.Provider value={inputValue}>
          <Actions />
        </PhoneContext.Provider>
      );

      const createdAction = screen.getByRole("link");
      const createdDisplay = screen.getByText("2345");

      expect(createdAction).toBeInTheDocument();
      expect(createdDisplay.textContent).toEqual("2345");
    });
  });
});
