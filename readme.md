# Crank
An extensive HTML5 framework for building robust web sites utilising Jade, SCSS, and Compass with GruntJS.

Crank provides and you decide what you need, experiment and modify as required.

## Pre-requisites
* [Git](http://www.git-scm.org)
* [NodeJS](http://www.nodejs.org)
	* Node modules: load-grunt-config (npm i -D load-grunt-config)
* [Ruby](http://www.ruby.org) (on Windows, install with [rubyinstaller](http://www.rubyinstaller.org))
	* For a guide on how best to install Ruby on Mac, see [Rails Apps great guide](http://railsapps.github.io/installrubyonrails-mac.html)
* Ruby Gems: Sass, Compass, Sass-Globbing
* [Bower](http://www.bower.io)

## If you're on Mac...
* I recommend installing Ruby Version Manager (RVM) with AutoLibs enabled so you don't get any conflicts with system Ruby
* If you experience issues with Node permissions, run:
	sudo chown -R `whoami` ~/.npm
	sudo chown -R `whoami` /usr/local/lib/node_modules

## If you're on Windows...
* Always run Powershell as Admin
* Install Git and Node to your PATH
* There are some caveats that apply to Sass Globbing on Windows, check out stylesheets/style.scss for notes if you're having trouble

## Quick Start
1. With pre-requites installed - open Terminal or Powershell
2. Move to the location you'd like to clone Crank
3. Run "git clone https://github.com/mksanderson/crank"
4. Cd to the Crank directory
5. Run "npm i"
6. Run "bower i"
7. Run "grunt" to build out all files for the first time
8. Run "grunt server" to fire up a server that is accessible on localhost:1337

## Important
* Crank separates source and build. All build files are stored within the generated folder "build"
* Directories:
	* Browser: Browser specification configuration - for instance xml file for Windows Phone
	* Compass: Compass configuration file
	* Data: Any application JSON you may have stored
	* Dependencies (created by Bower): All Bower dependencies
	* Images: Icons, logos, content images
	* Node_modules (created by NPM): All node dependencies
	* Scripts: JavaScript, Angular focussed but with examples of modular patterns for use
	* Stylesheets: All Sass, divided by purpose, based on BEM
	* Views: All Jade, divided by purpose

## Style
Crank has been developed with a particular and consistent style.

* (BEM style syntax)[http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/]
* Tabs! Each consisting of 4 spaces
* No spaces where they are not needed
* Indenting that makes it easy to read
* Alphabetise things where you can, it's the only logical pattern anyone can understand with no other knowledge
* Commenting for file description

### Markup
* No spaces are used where they are no needed, for instance a meta tag:

		meta(content="black",name="apple-mobile-web-app-status-bar-style")
		meta(content=application.title,name="apple-mobile-web-app-title")
		meta(content=application.title,name="application-name")


* Comments are used to keep things clear in structure and purpose, closing off blocks for instance

		.application

			header.application-header

				block header

			//-@.header

			main.application-main.rich-text

				block content

			//-@.main

		//-@.application

### Styles
* Folders dictate purpose, files are broken into small groups, keeping readability and maintainability at the fore
* Directories:
	* Animations: Contains reusable keyframe animations and transitions
	* Blocks: Modules with purpose, columns, buttons, forms, lists, break things down to a purpose to keep them DRY and clean
	* Config: Configuration variables for other parts of Crank - determines which columns, colours, sprites and helper classes are to be generated
	* Functions: Functions to perform math for mixins
	* Media: Videos, images, objects, iframes, style them here
	* MediaQueries: If you like to keep your media queries seperate to your other markup, or you have specific queries that fit nowhere else, they can go here
	* Plugins: Have a JS plugin you've created or sourced? Style it here to keep it away from your own styling
	* Polyfills: Any specific styles for older or less capable browsers
	* Typography: Vertical rhythms, rich text areas, paragraphical elements, all styled here
	* Utilities: Helper classes galore - from background and foreground colours to nudging will margin and padding classes

#### Blocks
Let's talk about blocks a little more. What is a block? It's a module, it's a group of styles related to
a group of markup that servers a purpose. Let's construct an example, how about a button - we all need buttons!

It's probable that we'd have some stock ideas for how buttons were constructed so we could have consistent markup.
Using that mindset, let's construct the base of our button block.

		.button

			@extend %appearance-none;
			@extend %block;
			@extend %display-table;

			background:transparent;border:0;padding:0;

			//% Elements
			&__title
				{
					@extend %display-table-cell;
					@extend %vertical-align-middle;
				}

			&__visual
				{
					@extend %display-table-cell;
				}
			//%

		//-@.button

Ok so we've constructed the following generated classes:

* .button
	* .button__title
	* .button__visual

The title class will be used to hold our title and the visual can hold an icon, logo, or other visual element
(note the abstraction, nothing too specific). These selectors are in the style of BEM.

Now, it's also conceivable that we would have an alternative type of button - a modifier on our base style.

Using BEM style syntax, let's do just that.

		.button

			@extend %appearance-none;
			@extend %block;
			@extend %display-table;

			background:transparent;border:0;padding:0;

			//% Elements
			&__title
				{
					@extend %display-table-cell;
					@extend %vertical-align-middle;
				}

			&__visual
				{
					@extend %display-table-cell;
				}
			//%

			//% Modifiers
			&--pill
				{
					@extend .button;

					border:{radius:20px;};padding:5px 10px;

					//% Elements
					&__title
						{
							@include float-left;
						}

					&__visual
						{
							@include float-right;
						}
					//%
				}
			//%

		//-@.button

Notice we've redefined our style within the modifier, this doesn't suffer from inheritance
but can be easily coerced into benefitting from our base class through extending.

These modified classes would look like:

* .button--pill
	* .button--pill__title
	* .button--pill__visual

### JavaScript
* Modular pattern based on singleton and modular JS structures
* Private closure based
* Initialisation function utilised as kickstarter
* Focus on reusability and cleanliness

## Features
* AngularJS - Includes a base project structure to build Angular apps
* Sass. Includes some ready to go reusable patterns to help you develop your own
* Compass - the best way to implement x-browser compatibility and efficiency
* Some of the best ideas from SMACSS, MVCSS, and OOCSS, BEMS
* Local Connect server set up so you don't need to do anything else but develop
* Configurable. If you need it to include columns for every width, it can, if you want to scale it down, that can be done too!

## Author Information
* GitHub:[http://github.com/mksanderson/](http://github.com/mksanderson/)
* Twitter:[@mksanderson](http://www.twitter.com/mksanderson)
