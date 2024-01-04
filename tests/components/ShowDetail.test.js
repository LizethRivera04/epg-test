import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ShowDetail } from "../../src/components/ShowDetail";

describe("Test in <ShowDetail/>", () => {
  const showDetail = {
    show: true,
    event: {
      name: "The Mentalist",
      date_begin: "2021/08/13 18:02:56",
      date_end: "2021/08/13 19:02:56",
    },
  };
  test("should to show the event detail", () => {
    render(<ShowDetail showDetail={showDetail} />);

    const scheduleTag = screen.getByLabelText("schedule-tag");

    expect(screen.getAllByText(showDetail.event.name)).toBeTruthy();
    expect(scheduleTag.innerHTML).toContain("18:02hrs");
    expect(scheduleTag.innerHTML).toContain("19:02hrs");
  });
});
