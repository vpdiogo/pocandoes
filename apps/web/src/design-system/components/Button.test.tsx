import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

test("can be activated using the keyboard", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Buscar eventos</Button>);
  await user.tab();
  expect(document.activeElement).toBe(screen.getByRole("button", { name: "Buscar eventos" }));
  await user.keyboard("{Enter}");
  expect(onClick).toHaveBeenCalledOnce();
});

test("disabled buttons cannot trigger an action", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();
  render(<Button disabled onClick={onClick}>Enviar</Button>);
  await user.click(screen.getByRole("button", { name: "Enviar" }));
  expect(onClick).not.toHaveBeenCalled();
});

test("only submits a form when explicitly configured", async () => {
  const user = userEvent.setup();
  const onSubmit = vi.fn((event) => event.preventDefault());
  render(<form onSubmit={onSubmit}><Button>Cancelar</Button><Button type="submit">Salvar</Button></form>);
  await user.click(screen.getByRole("button", { name: "Cancelar" }));
  expect(onSubmit).not.toHaveBeenCalled();
  await user.click(screen.getByRole("button", { name: "Salvar" }));
  expect(onSubmit).toHaveBeenCalledOnce();
});
