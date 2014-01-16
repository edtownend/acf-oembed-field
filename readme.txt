=== Advanced Custom Fields: oEmbed Field ===
Contributors: edwardtownend
Tags: advanced-custom-fields, acf, oembed
Requires at least: 3.4
Tested up to: 3.8
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adds an oEmbed field type to Advanced Custom Fields.

== Description ==

Requires the Advanced Custom Fields plugin. Output can be selected as HTML embed, URL, or data object. Includes settings for preview and output resolution and will accept any provider registered in WordPress.

= Compatibility =

This add-on will work with:

* version 4 and up
* Repeater Field

== Installation ==

This add-on can be treated as both a WP plugin and a theme include.

= Plugin =
1. Copy the 'acf-oembed' folder into your plugins folder
2. Activate the plugin via the Plugins admin page

= Include =
1.	Copy the 'acf-oembed' folder into your theme folder (can use sub folders). You can place the folder anywhere inside the 'wp-content' directory
2.	Edit your functions.php file and add the code below (Make sure the path is correct to include the acf-oembed.php file)

`
add_action('acf/register_fields', 'my_register_fields');

function my_register_fields()
{
	include_once('acf-oembed/acf-oembed.php');
}
`

== Frequently Asked Questions ==

= What oEmbed sources are supported? =

Any supported by WordPress. See [Embeds on wordpress.org](http://codex.wordpress.org/Embeds)

= Can I use this in a repeater field? =

Yep.

== Screenshots ==

1. The Add Field interface.
2. The field in an Advanced Custom Field.

== Changelog ==

= 1.0.0 =
* Initial Release.
