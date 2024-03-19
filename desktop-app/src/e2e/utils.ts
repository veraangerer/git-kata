import { ElectronApplication, Page, PlaywrightTestArgs, TestInfo } from '@playwright/test'
import path from "path"

export async function getSecondWindow(app: ElectronApplication, timeout = 1000): Promise<Page> {
    if (app.windows().length >= 2) {
        return app.windows()[1];
    }
    return new Promise<Page>((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject("Second window timeout")
        }, timeout);
        app.on("window", () => {
            clearTimeout(timeoutId);
            if (app.windows().length >= 2) {
                resolve(app.windows()[1]);
            }
        })
    })
}

export function saveScreenshotOnFailure(dir: string) {
    return async ({ page }: PlaywrightTestArgs, testInfo: TestInfo) => {
        const imagePath = path.join(__dirname, '../../test-results', dir, `/${testInfo.title.replace(/\s+/g, '-')}.png`);
        if (testInfo.status !== testInfo.expectedStatus) {
            await page.screenshot({
                path: imagePath,
                caret: 'initial'
            })
        }
    }

}