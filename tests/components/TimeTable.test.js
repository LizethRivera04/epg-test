import { describe, expect, test } from "@jest/globals";
import { TimeTable } from "../../src/components/TimeTable";
import { fireEvent, render, screen } from "@testing-library/react";
import useFetchChannels from "../../src/hooks/useFetchChannels";

jest.mock("../../src/hooks/useFetchChannels");
describe("Test in <TimeTable/>", () => {
  const setShowModal = jest.fn();

  test("should to show loading", () => {
    useFetchChannels.mockReturnValue({
      channels: [],
      isLoading: true,
    });
    render(<TimeTable setShowModal={setShowModal} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
  });

  test("should to match with snapshot", () => {
    const { container } = render(<TimeTable setShowModal={setShowModal} />);
    expect(container).toMatchSnapshot();
  });

  test("IconTimes should to call setShowModal function", () => {
    render(<TimeTable setShowModal={setShowModal} />);

    const divCloseModal = screen.getByLabelText("div-close-modal");
    fireEvent.click(divCloseModal);
    expect(setShowModal).toHaveBeenCalled();
    expect(setShowModal).toHaveBeenCalledWith(false);
  });
});
