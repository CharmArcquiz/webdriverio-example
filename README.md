# WebdriverIO Test

This repo contains an example website with a few simple pages, and a "Request a Demo" form.

- Home
- About
- Request a Demo
- Request a Demo - Thanks


When submitted, the request demo form is validated - if validation succeeds, the user is redirected to a "Thank You" page. When validation errors remain the user is shown error messages on the form.

## Running the sample site

To run the app:

```
npm i;
npm start;
```

This should run the app at localhost:3000. You can navigate to http://localhost:3000/ to view it.

To run tests:

```
npm run test:browser;
```

This will run your webdriverIO tests. You will need to have your app running via `yarn start` before running these tests.

## Complete the following testing using webdriverIO.

We want to write automated browser tests for the following acceptance criteria:

- Page Traversal
    - Ensure that following the links on the nav (Home, About, and Request a Demo) take you to the relevant pages.
- Form Submission
    - Ensure that the form validates properly - each field is required and should be present before the form submits.
    - When the form is properly filled out, the user should be redirected - ensure that the user is redirected.
- Screenshot comparison
    - We want to do screenshot comparison - using a "baseline", we want to compare our current page against the
       old page and ensure it has not changed visually. You can use WebdriverIO's [Visual Regression Service](http://v4.webdriver.io/v4.7/guide/services/visual-regression.html)
       or the [v5 Visual Regression](https://webdriver.io/blog/2019/05/18/visual-regression-for-v5.html)
       (still in active dev at this time) to achieve this feature.


## Submitting your test 

- Please clone this repository as the starting project and load into your own git repository.
- After completing the above test criteria commit/push your work into the new repository. 
- Share a link to your completed repository to the Crescendo team member who requested you complete the test.