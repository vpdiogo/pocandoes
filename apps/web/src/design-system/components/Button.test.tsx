import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("can be activated using the keyboard", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Search events</Button>);
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("button", { name: "Search events" }));
  await user.keyboard("{Enter}");
  expect(onClick).toHaveBeenCalledOnce();
});

test("disabled buttons cannot trigger an action", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button disabled onClick={onClick}>Submit</Button>);
  await user.click(screen.getByRole("button", { name: "Submit" }));
  expect(onClick).not.toHaveBeenCalled();
});

test("only submits a form when explicitly configured", async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn((event) => event.preventDefault());
  render(<form onSubmit={onSubmit}><Button>Cancel</Button><Button type="submit">Save</Button></form>);
  await user.click(screen.getByRole("button", { name: "Cancel" }));
  expect(onSubmit).not.toHaveBeenCalled();
  await user.click(screen.getByRole("button", { name: "Save" }));
  expect(onSubmit).toHaveBeenCalledOnce();
});
