import { describe, expect, test } from "@jest/globals";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchChannels from "../../src/hooks/useFetchChannels";

describe("Test on useFetchChannels hook", () => {
  test("Should to return initial state", () => {
    const { result } = renderHook(() => useFetchChannels());
    const { channels, isLoading } = result.current;

    expect(channels.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Should to return channel array and isLoading as false", async () => {
    const { result } = renderHook(() => useFetchChannels());

    await waitFor(() => {
      expect(result.current.channels.length).toBeGreaterThan(0);
    });
    const { isLoading } = result.current;
    expect(isLoading).toBeFalsy();
  });
});
