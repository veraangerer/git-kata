# Task 4

Except for unit tests you also have e2e tests for your application. Add them to CI whenever the app code is changed.

To run electron E2E tests in github actions you need to start virtual client with screen in Ubuntu. `xvfb-run --auto-servernum --server-args="-screen 0 1280x960x24" -- npm run e2e`

## Definition of done

- [ ] Whenever code is changed for `desktop-app`, e2e tests are run.
- [ ] When any test fails, screenshots from the tests that failed, are saved as one zip archive with retention of 7 days
- [ ] Optional: Url of the zip archive is displayed

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- `npm run e2e`
- [artifacts](https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts) - how to save files from the job
- Playwright saves screenshots in `desktop-app/test-results/[TEST_FILE_NAME]/[TEST_NAME].png`.
- [running step when previous step fails](https://docs.github.com/en/actions/learn-github-actions/expressions#failure)
- [using output of the previous step](https://docs.github.com/en/actions/using-jobs/defining-outputs-for-jobs)
- [outputs of upload action](https://github.com/actions/upload-artifact?tab=readme-ov-file#outputs)

Here is an example solution for this task:

- [PR with ready solution](https://github.com/Ubax/github-actions-kata/pull/5)
</details>
