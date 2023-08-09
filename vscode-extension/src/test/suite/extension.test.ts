import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});

	test('Generate GUID', async () => {
		// Activate the extension
		const extension = vscode.extensions.getExtension('osman-koc.guidgenerator');
		await extension?.activate();

		// Open a new untitled text document
		const document = await vscode.workspace.openTextDocument({ content: '' });
		const editor = await vscode.window.showTextDocument(document);

		// Get the active editor
		const activeEditor = vscode.window.activeTextEditor;

		// Execute the 'extension.generateGuid' command
		await vscode.commands.executeCommand('extension.generateGuid');

		// Get the updated editor content
		const updatedContent = activeEditor?.document.getText();

		// Test whether a GUID has been inserted
		assert(updatedContent?.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i));
	});
});
