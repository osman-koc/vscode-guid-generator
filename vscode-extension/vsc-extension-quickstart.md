# GuidGenerator - Visual Studio Code Extension

## What's in the folder

- This folder contains all of the files necessary for your GuidGenerator extension.
- `package.json` - This is the manifest file where you declare your extension and command.
  - The extension registers a command to generate and insert GUIDs into your code.
- `src/extension.ts` - This is the main file where you implement the GUID generation command.
  - The `activate` function is called when the extension is activated, and it registers the command.

## Setup

- Install the recommended extensions (amodio.tsl-problem-matcher and dbaeumer.vscode-eslint).

## Get up and running straight away

- Press `F5` to open a new window with your GuidGenerator extension loaded.
- Run your GUID generation command from the command palette by pressing (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and typing `Generate GUID`.
- Set breakpoints in your code inside `src/extension.ts` to debug your extension.
- Find output from your extension in the debug console.

## Make changes

- You can relaunch the extension from the debug toolbar after changing code in `src/extension.ts`.
- You can also reload (`Ctrl+R` or `Cmd+R` on Mac) the VS Code window with your GuidGenerator extension to load your changes.

## Run tests

- Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown, pick `Extension Tests`.
- Press `F5` to run the tests in a new window with your GuidGenerator extension loaded.
- See the output of the test result in the debug console.
- Modify `src/test/suite/extension.test.ts` or create new test files inside the `test/suite` folder to add more tests.
  - The provided test runner will consider files matching the name pattern `**.test.ts`.
  - You can structure your tests inside folders within the `test` folder.

## Go further

- Reduce the extension size and improve startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
- [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VS Code extension marketplace to share with others.
- Set up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration) for automated builds and testing.

## Feedback and Contributions

- Feedback and contributions are welcome! Please create issues or pull requests on the [GitHub repository](https://github.com/osman-koc/guid-generator-extension).

## License

This project is licensed under the [MIT License](LICENSE).

---

## Following Extension Guidelines

Make sure to follow the [VS Code extension guidelines](https://code.visualstudio.com/api/references/extension-guidelines) to ensure the best practices for creating your extension.

## For More Information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy generating GUIDs with GuidGenerator!**
