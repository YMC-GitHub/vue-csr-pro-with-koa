#### \#**目录结构**
Settings - Global configuration and variables.
Tools - Mixins and functions.
Generic - High-level styles such as resets and normalize.css.
Elements - Base HTML styling.
Objects - Common non-cosmetic structural design patterns.
Components - Specific cosmetic elements of UI.
Utilities - Helpers and overrides.

#### \#**属性顺序**
@include - use your previously-defined mixins right at the start for ease of modification and readability.
Structure - display, position, margin, padding, width, height, box-sizing, overflow etc.
Typography - font-*, line-height, text-*, letter-spacing etc.
Cosmetic - color, background-*, border-*, animation, transition etc.
Native interaction - appearance, cursor, user-select, pointer-events etc.
Pseudo-elements - ::before, ::after etc.
Nested elements
Pseudo-classes - :hover, :focus, :active etc.
@media - media queries should be defined last for ease of modification and readability.

Defining separately:

State classes
Modifier classes
