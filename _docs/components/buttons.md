---
title: Buttons
category: Components
order: 2
---

We strive to maintain consistency throughout all applications, so any implementation of buttons should fulfill the appropriate use case and requirements. Buttons consist of three different levels: Primary, Secondary, and Tertiary. They are styled and controlled in buttons.scss and should follow a systematic class naming system detailed below: 

Type | Type | Class
-------------- | -------------- | --------------
<button class="btn-base btn-primary">Submit</button> | Primary | .btn-primary
<button class="btn-base btn-secondary">Filter</button> | Secondary | .btn-secondary
<button class="btn-base btn-tertiary">Cancel</button> | Tertiary | .btn-tertiary


### Primary Buttons

These are buttons that are necessary to complete a task or goal. Generally, they are meant to guide the user to complete one main action. You may use them within a form or as an inline element on a page.

<button class="btn-primary btn-reverse btn-arrow">
	<span>Get Started<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enable-background="new 0 0 36.1 25.8" xml:space="preserve"><g><line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   "></polyline></g></svg></span>
</button>


```html
<button class="btn-primary">Primary Button</button>

```

#### Rules & Guidelines

Do Not Use:

1. Excessively within a page
2. More than one primary button within an element or container
3. More than two words within the button to describe the action

### Implementation
FDS utilizes SASS to compile code. 

Name | Params | Description
-------------- | -------------- | --------------
btn-base |  | Base styles used in every button. 
Row 2 col 1 | Row 2 col 2 | Row 2 col 3



### Secondary Buttons
These are buttons that assist the user when completing a task or goal. Icons are optional within secondary buttons. 




<button class="btn btn-arrow btn-border">
<span>Get Started<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enable-background="new 0 0 36.1 25.8" xml:space="preserve"><g><line fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" x1="0" y1="12.9" x2="34" y2="12.9"></line><polyline fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" points="22.2,1.1 34,12.9 22.2,24.7   "></polyline></g></svg></span>
</button>


# Rules & Guidelines






> See a typo? Uh oh! Please let us know what we can fix by contacting us at [CDX@fanniemae.com](a href="mailto:cdx@fanniemae.com).