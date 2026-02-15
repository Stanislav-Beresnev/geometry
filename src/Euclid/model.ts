import { DefineModelRepositoryError } from "./errors";
import { Repository, type Continuator } from "./model.types";

export const type: Continuator = (name: string) => {
  return {
    [Repository.Type]: {
      [name]: {
        is() {},
        with() {},
        where() {},
      },
    },
  };
};

export class Model {
  repos: ReturnType<Continuator> = {};
  define(args: ReturnType<Continuator>) {
    for (let repositoryName in args) {
      switch (repositoryName) {
        case Repository.Type:
          this.repos[repositoryName] = args[repositoryName];
          break;
        default:
          throw new DefineModelRepositoryError();
      }
    }
  }
}
