# Serverless Framework v4 Startup Template:

---

💡 A developer experience for serverless framework that feels instant, safe, and
fun — write code, and immediately see your changes reflected with clean
formatting and full type safety. Enjoy interactive debugging with vscode.

## Technologies

- Node: Runtime
- Typescript: Language
- Offline + Watcher: Serverless Framework plugins
- VSCode: Interactive debugging
- Deno: Typescript checker and formatter

## Get Started:

- Clone this repo and cd into project root.
- Delete the `.gitignore` and rename `app.gitignore` to `.gitignore`.
- Change the "org" in `serverless.yml`.
- Run below commands to get started:

```bash
npm install
serverless --verbose
npm run dev
```

- Run `npm run watch:format` command to format and type check the code with deno
  while writing the code.
- Start putting break points and debug code with VSCode's interactive debugger
  by using provided launch config.
