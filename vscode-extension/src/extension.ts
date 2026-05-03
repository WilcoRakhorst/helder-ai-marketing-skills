import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

const SKILLS = ['seo-strategy', 'geo-optimization', 'seo-keyword-research', 'content-creator'];
const REPO_URL = 'https://github.com/WilcoRakhorst/helder-ai-marketing-skills.git';

export function activate(context: vscode.ExtensionContext) {
	const installCmd = vscode.commands.registerCommand('marketingSkills.install', async () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('Open a workspace first.');
			return;
		}

		const rootPath = workspaceFolders[0].uri.fsPath;
		const skillsDir = path.join(rootPath, '.github', 'skills', 'marketing');

		if (fs.existsSync(skillsDir)) {
			const choice = await vscode.window.showWarningMessage(
				'Marketing skills already installed. Update instead?',
				'Update', 'Cancel'
			);
			if (choice !== 'Update') { return; }
		}

		const terminal = vscode.window.createTerminal('Marketing Skills');
		terminal.show();
		terminal.sendText(`git clone ${REPO_URL} "${skillsDir}" 2>$null || git -C "${skillsDir}" pull`);

		vscode.window.showInformationMessage(
			'Marketing Skills installed! Copilot will auto-discover them in agent mode.'
		);
	});

	const updateCmd = vscode.commands.registerCommand('marketingSkills.update', async () => {
		const workspaceFolders = vscode.workspace.workspaceFolders;
		if (!workspaceFolders) {
			vscode.window.showErrorMessage('Open a workspace first.');
			return;
		}

		const rootPath = workspaceFolders[0].uri.fsPath;
		const skillsDir = path.join(rootPath, '.github', 'skills', 'marketing');

		if (!fs.existsSync(skillsDir)) {
			vscode.window.showErrorMessage('Skills not installed yet. Run "Marketing Skills: Install" first.');
			return;
		}

		const terminal = vscode.window.createTerminal('Marketing Skills');
		terminal.show();
		terminal.sendText(`git -C "${skillsDir}" pull`);

		vscode.window.showInformationMessage('Marketing Skills updated to latest version.');
	});

	context.subscriptions.push(installCmd, updateCmd);
}

export function deactivate() {}
