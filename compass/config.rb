project_path=File.expand_path("..",File.dirname(__FILE__))

# Require any additional compass plugins here.
require "sass-globbing"

# Set this to the root of your project when deployed:
http_path="/"
css_dir="build/stylesheets"
sass_dir="stylesheets"
images_dir="images"
javascripts_dir="scripts"

output_style=:compressed
environment=:development

relative_assets=true

color_output=true

watch=true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass scss scss && rm -rf sass && mv scss sass
