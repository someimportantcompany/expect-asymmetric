# Contributing

## Required tooling

When working on this service you'll need the following tools installed:

| Dependency                    | Version |
| ----------------------------- | ------- |
| [`node`](https://nodejs.org/) | `20.x`+ |
| [`pnpm`](https://pnpm.io)     | `10.x`+ |

- **Recommendation:** [Install `corepack`](https://github.com/nodejs/corepack) to manage package
  manager versions between repositories.

## Installing dependencies

To install the dependencies for the entire repository you can run the following command in the root
of the repository:

```sh
$ pnpm install --frozen-lockfile
```

## Working locally

- Unit tests should cover the fine-grained details of the package, and be as detailed as
  possible.
- Integration tests should act as a sanity check that the built package is functioning as
  expected.

### Unit tests

To run the unit tests for this application, you can run the following command in the root of the
repository:

```sh
$ pnpm run test:unit
```

### Building

Build the package with:

```sh
$ pnpm run build
```

### Integration tests

Once the package has been built, you can run integration tests with:

```sh
$ pnpm run test:intg
```

## Pull requests

When you've got some changes pushed to your branch, it's time to open up a pull request!

To get started, open a PR comparing `main` with `your-branch`.

**Your PR will need to be approved by another contributor**, so the more detail you here add
the better!

### Pull-requests workflow

When your PR is opened, the [**Pull Requests** workflow](./.github/workflows/pull-requests.yml) will
trigger, which will:

- Install dependencies
- Build the package
- Run the integration tests

## Publishing packages

This repository uses [changesets](https://github.com/changesets/changesets) to orchestrate publishing,
changelogs and versioning of packages. There is detailed documentation for how to use changesets in the
[changesets repository](https://github.com/changesets/changesets) but here is a simple overview of the
process.

When you want to publish packages you create a changeset:

```sh
pnpm changeset
```

Work through the CLI options and select which packages to release and what version bump they require
(major, minor or patch) and answer any other questions.

Once you have created a changeset you can commit it to your branch and open a PR. When the PR is merged
changeset will generate a changelog off your changeset and open its own PR. When that PR is merged changesets
will publish unpublished packages to the registry.


### Merging

Once your PR has successful [Pull-Requests](#pull-requests-workflow) 🟢 runs, and has been
[approved](#approvals) ✅, you are free to merge your PR whenever you're ready.

Once your PR has been merged into `main`, the [Release workflow](./.github/workflows/release.yml)
will be triggered, which will:

- Install dependencies
- Build the package
- Open a new PR for Changesets to bump package versions
- Merge that PR to publish new package versions

⚠️ You may wish to
[enable auto-merging](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)
for your PR, however you must follow the PR's progress through into publish.
