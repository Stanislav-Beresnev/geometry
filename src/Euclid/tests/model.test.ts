import { describe, expect, it } from "vitest";
import { Model, type } from "../model";
import { DefineModelRepositoryError } from "../errors";

describe("model", () => {
  it("define unexpectable", () => {
    const model = new Model();
    expect(() => model.define({ absurd: {} } as any)).toThrow(
      DefineModelRepositoryError
    );
  });
  it("define type", () => {
    const model = new Model();
    model.define(type("Test"));
    expect(model.repos.typeRepository).toMatchSnapshot();
  });
});
