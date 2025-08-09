import { FastMCP } from "fastmcp";

import { name, version } from "../package.json";

import { addTool } from "./add.js";

const server = new FastMCP({
  name: name,
  version: version as `${number}.${number}.${number}`,
  ping: {
    enabled: true,
    intervalMs: 10000,
    logLevel: "debug",
  },
});

server.addTool(addTool);

server.addResource({
  async load() {
    return {
      text: "Example log content",
    };
  },
  mimeType: "text/plain",
  name: "Application Logs",
  uri: "file:///logs/app.log",
});

server.addPrompt({
  arguments: [
    {
      description: "Git diff or description of changes",
      name: "changes",
      required: true,
    },
  ],
  description: "Generate a Git commit message",
  load: async (args) => {
    return `Generate a concise but descriptive commit message for these changes:\n\n${args.changes}`;
  },
  name: "git-commit",
});

server.start({
  transportType: "httpStream",
  httpStream: {
    stateless: false,
    port: 8080,
  },
});
