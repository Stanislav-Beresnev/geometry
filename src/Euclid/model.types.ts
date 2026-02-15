export const enum Repository {
  Object = "objectRepository",
  Type = "typeRepository",
  Relation = "relationRepository",
}

interface ContinuatorResult {
  is(): void;
  with(): void;
  where(): void;
}

type RepositoryItemResolverResult = Record<string, ContinuatorResult>;

type RepositoryResolverResult = Partial<
  Record<Repository, RepositoryItemResolverResult>
>;

export type Continuator = (name: string) => RepositoryResolverResult;
