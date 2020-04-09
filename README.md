# Accessibility for Teams

Practices for embedding accessibility and inclusive design into a team’s workflow.

Each person on a team, whether you’re a manager, designer, or developer, has a role to play in making federal resources accessible and inclusive. Your responsibilities are different depending on your role. So that’s how we structured the guide, with a separate section for each of five roles:

- Product management
- Content design
- UX design
- Visual design
- Front-end development

**This guide provides:**

- An overview of how each team member can contribute to a product's accessibility
- A framework for thinking about accessibility and inclusive design in your role
- An understanding of the human need behind accessibility practices

We focus on the issues most likely to impact government sites. These guidelines do not provide a comprehensive list of all possible issues. Your team will need additional resources and work to conduct manual audits to conform to the standards of [Section 508](https://www.section508.gov/) (which aligns with the [W3C Web Content Accessibility Guidelines (WCAG) 2.0 Level AA](https://www.w3.org/WAI/WCAG20/quickref/)), a law that ensures all web content is accessible to anybody with a disability.

This guide is maintained by the Accessibility Guild in the [Technology Transformation Services (TTS)](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) at the U.S. General Services Administration (GSA).

## Running the site

The Accessibility for Teams runs on Jekyll. To run it locally:

- Clone the repository.
- Get [Jekyll](https://jekyllrb.com/) and the necessary dependencies: `bundle install`
- Run the web server with `jekyll serve`
- Visit the local site at http://localhost:4000


### Updating USWDS to a later version.

There are a couple ways to update the USWDS:

#### Change theme settings

This site uses custom USWDS theme settings in `_src/assets/uswds-theme`. Use this if you want to include or remove utilities or update utility settings.

1. Compile uswds.css `gulp uswds-build-sass`
2. Run jekyll `bundle exec jekyll serve`


#### Only update the USWDS.css without getting new functions and tokens for use in project files

Use this to patch any display bugs through updates to USWDS.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Compile uswds.css `gulp uswds-build-sass`
3. Run jekyll `bundle exec jekyll serve`

#### Update USWDS and get new functions and tokens for use in project files

This will will update some of the scss files in `_src/assets/uswds-sass`, but will not overwrite any of your files in `_src/assets/uswds-theme`.

1. Install the package `npm install --save-dev *new-USWDS-version-number*`
2. Run `gulp update`
3. Compile uswds.css `gulp uswds-build-sass`
4. Run Jekyll `bundle exec jekyll serve`.

## Contributing

For more information on contributing to the Accessibility for Teams (or even making a suggestion), see [CONTRIBUTING](CONTRIBUTING.md).

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
