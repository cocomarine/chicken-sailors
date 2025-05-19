# RPF software engineer: technical challenge

This is a React front-end app for a shop that sells sailing dinghies for chickens.  It is like a typical "brochure" site, and it only has one page.

The aim of this challenge is to allow you to show your skills in creating well-written code.  In the interview you will be asked to run through your code and you must be able to talk through your work and design decisions.  We won't ask you to write any code during the interview itself, but we might ask specific questions about what you show us and how you might approach work on additional features or changes.

It is important to attempt all of the tasks, even if you don't finish them.

During the interview you should be prepared to share your screen to walk us through your submission.

If you get stuck please do get in touch and we'll do our best to help.

## What we're expecting

* You should spend no more than 3 hours on this challenge.
* You should attempt all three tasks.
* Please send back your code (by the date specified in the email from us) either as a link to a GitHub / Gitlab repository, or within a `zip`/`tar.gz` file.

We understand that you will have other commitments and time constraints, please let us know as soon as possible if you will be unable to complete this challenge by the deadline so that we are able to make allowances.

The challenge only needs to be runnable in a local environment; it doesn't need to be hosted anywhere.

If you need help with the challenge, for whatever reason, please do drop us an email and we will do our best to assist.

## Tasks

1. Style the `HeroSlice`
    * It has an header, some copy, an image and some call-to-action buttons, which need arranging appropriately.
    * You can change the DOM as you need to.
    * The rest of the site uses Tailwind CSS but this should be styled without using Tailwind directly.
    * You can use any existing CSS variables, e.g. `--font-sans` or `--border`, and you can define your own.
    * The button styling should be left as-is.
2. You need to change the [testimonial](src/components/TestimonialsSlice.jsx) and [pricing](src/components/PricingSlice.jsx) slices to be able to load data from a remote API.
    * The API does not exist yet, but we have mocked it for you in [src/services/api.js](src/services/api.js)
    * You need to take into account that API is slow and can return errors.
    * You'll need to update the methods in [src/services/api.js](src/services/api.js) to replicate the asynchronous nature of API calls, and include a simulation for our slow, error-prone API.
3. Add a test framework to test an aspect of the app.
    * The app has no test framework or runner at the moment.  You should add one, and write a test that covers one aspect of the site, e.g. the testimonials slice.
    * It is up to you how you want to test it.

