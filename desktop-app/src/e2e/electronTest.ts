/**
 * This file is based on
 * https://github.com/microsoft/playwright/blob/v1.41.2/tests/electron/electronTest.ts
 */

import { mergeTests, test } from "@playwright/test";
import { ElectronApplication, Page, Electron } from "playwright";
import path from "path"
import { getSecondWindow } from "./utils";

type ElectronTestFixtures = {
  page: Page
  electronApp: ElectronApplication;
  launchElectronApp: (appFile: string, args?: string[], options?: Parameters<Electron['launch']>[0]) => Promise<ElectronApplication>;
};

const base = test;
const baseTest = mergeTests(base);
export const electronTest = baseTest.extend<ElectronTestFixtures, {}>({
  launchElectronApp: async ({ playwright }, use) => {
    // This env prevents 'Electron Security Policy' console message.
    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
    const apps: ElectronApplication[] = [];
    await use(async (appFile: string, args: string[] = [], options?: Parameters<Electron['launch']>[0]) => {
      const app = await playwright._electron.launch({ ...options, args: [path.join(__dirname, appFile), ...args] });
      apps.push(app);
      return app;
    });
    for (const app of apps)
      await app.close();
  },

  electronApp: async ({ launchElectronApp }, use) => {
    await use(await launchElectronApp('../../dist-electron/main.js', [], {
      // recordVideo: {
      //   dir: path.join(__dirname, '../../test-results')
      // }
    }));
  },

  page: async ({ electronApp }, run) => {
    await run(await getSecondWindow(electronApp));
  },

  context: async ({ electronApp }, run) => {
    await run(electronApp.context());
  },
})