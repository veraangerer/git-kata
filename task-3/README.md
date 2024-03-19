# Task 3

Now, when the CI is working for sometime, you realized that you have a lot of unused runs. One third of your team is working on the python code for backend, another part on the desktop app and the rest on the company website.

You still want to use monorepo for the code. You were asked to only run tests for desktop-app, when the code in `desktop-app` directory changes. Moreover you know that the tests are currently only written for the `ts` files. So no tests are needed for when other files change (e.g, css, html).

## Definition of done

- [ ] unit tests for desktop-app are only run when ts files in `desktop-app` are changed
- [ ] unit tests for desktop-app are not run when files other then typescript are changed (e.g. css, html or e2e)

## Hints & help

<details>
<summary>Those hints will help you start</summary>

- [Running workflow on path changes](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#running-your-workflow-only-when-a-push-affects-specific-files)

Here is an example solution for this task:
- [Branch with ready solution](https://github.com/Ubax/github-actions-kata/pull/4)
</details>
