import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { ChannelList } from "../../src/components/ChannelList";

describe("Test in <ChannelList/>", () => {
  const channel = {
    number: 3,
    name: "CANAL 3 GT",
    image:
      "https://clarovideocdn8.clarovideo.net/CVPER/PELICULAS/CANAL3GT/EXPORTACION_WEB/SS/CANAL3GT_t-290x163.png",
  };
  test("should to show the image with the correct alt and url", () => {
    render(<ChannelList channel={channel} />);
    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(channel.image);
    expect(alt).toBe(channel.name);
  });
  test("should to show channel name in the component", () => {
    render(<ChannelList channel={channel} />);

    expect(screen.getByText(channel.number)).toBeTruthy();
  });
});
