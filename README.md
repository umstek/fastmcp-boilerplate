# FastMCP Boilerplate

A boilerplate for [FastMCP](https://github.com/umstek/fastmcp-boilerplate).

This boilerplate is a good starting point for building an MCP server. It includes a basic setup for testing, linting, formatting, and publishing to NPM.

> [!NOTE]
> This is a fork of [fastmcp-boilerplate](https://github.com/punkpeye/fastmcp-boilerplate) by [punkpeye](https://github.com/punkpeye), migrated to use bun, biome, etc. to eliminate most dependencies, cleaned it up a bit, improved to use a separate MCP client in a file and used SSE instead of stdio for communication.

## Development

To get started, clone the repository and install the dependencies.

```bash
git clone https://github.com/umstek/fastmcp-boilerplate.git
cd fastmcp-boilerplate
bun i
bun dev
```

> [!NOTE]
> If you are starting a new project, you may want to fork [fastmcp-boilerplate](https://github.com/punkpeye/fastmcp-boilerplate) and start from there.

### Start the server

If you simply want to start the server, you can use the `start` script.

```bash
bun start
```

However, you can also interact with the server using the `dev` script.

```bash
bun dev
```

This will start the server and allow you to interact with it using CLI.

### Testing

A good MCP server should have tests. However, you don't need to test the MCP server itself, but rather the tools you implement.

```bash
bun test
```

In the case of this boilerplate, we only test the implementation of the `add` tool.

This boilerplate also includes an example of a resource and a prompt.

- **Resource**: An application log file at `file:///logs/app.log`.
- **Prompt**: A `git-commit` prompt that generates a commit message based on a provided diff.

### Linting and Formatting

Having a good linting and formatting setup reduces the friction for other developers to contribute to your project.

This boilerplate uses [Biome](https://biomejs.dev/) for linting and formatting the code.

```bash
bun check
```

### Building

You can build your project for production using the `build` script.

```bash
bun build
```

### Bun Configuration

This project uses Bun as the JavaScript runtime. The configuration is in the `bunfig.toml` file:

```toml
[test]
preload = ["./setup.ts"]

[install]
registry = "https://registry.npmjs.org/"
frozen-lockfile = true

[build]
entrypoints = ["./src/server.ts"]
outdir = "./dist"
target = "node"
```

### GitHub Actions

This repository has a GitHub Actions workflow that runs linting, formatting, tests, and publishes package updates to NPM using [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

In order to use this workflow, you need to:

1. Add `NPM_TOKEN` to the repository secrets
   1. [Create a new automation token](https://www.npmjs.com/settings/umstek/tokens/new)
   2. Add token as `NPM_TOKEN` environment secret (Settings → Secrets and Variables → Actions → "Manage environment secrets" → "release" → Add environment secret)
1. Grant write access to the workflow (Settings → Actions → General → Workflow permissions → "Read and write permissions")
