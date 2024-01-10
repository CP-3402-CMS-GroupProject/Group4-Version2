<?php
function bb_config_default() {
  return array(
    // title tag separator [string]
    'title_separator'      => '｜',
    // Catchphrase to be written along with the title (default is the catchphrase in general settings) [string]
    'title_catchphrase'    => get_bloginfo('description'),
    // Archive page title suffix [string]
    'archive_title_suffix' => 'view',
    // Eye-catching image size (width [int], height [int], cropping [bool]) [array]
    'post_thumbnail'       => array(1200, 630, true),
    // Archive page thumbnail image size (width [int], height [int], crop [bool]) [array]
    'archive_thumbnail'    => array(300, 300, true),
    // Abbreviation for article excerpts [string]
    'excerpt_more'         => ' ⋯',
    // Number of characters in article excerpt [int]
    'excerpt_length'       => 110,
    // RSS article output character count [int]e
    'excerpt_length_rss'   => 200,
    // Individual format for year, month, and day (year [string], month [string], day [string], separator [string]) [array]
    'date_format'          => array('Yy', 'nm', 'jd', ''),
    // MORE text display for posts and fixed pages[string]
    'more_text'            => ' ⋯ continue',
    'ja_auto_post_slug'    => array(
      // スラッグにIDを使って自動設定する [bool]
      'rewrite' => true,
      // 自動設定するスラッグの接頭辞（無指定はpost_type） [string]
      'prefix'  => '',
    ),
    // Logo image image (default is{theme_name}/img/logo.png） [string(url)]
    'logo_image'           => get_template_directory_uri() . '/assets/img/logo.png',
    // Logo size (width [number], height [number]) [array]
    'logo_size'            => array(230, 40),
    // Logo alt output (default is blog name) [string]
    'logo_alt'             => get_bloginfo('name'),
    // Copyright settings [array]
    'copyright'            =>  array(
      // Copyright prefix (default is unspecified) [string]
      'prefix'     => '',
      // Site start year (used in copyright section) [string]
      'start_year' => date_i18n('Y'),
      // Copyright display text (default is blog name) [string]
      'text'       => get_bloginfo('name') . '.',
      // Copyright suffix (default is unspecified) [string]
      'suffix'     => '',
    ),
    // Presence of loading screen [bool]
    'loading_screen'       => false,
    // Fixed global navigation [bool]
    'fixed_global_nav'     => true,
    // Fixed sidebar (widget) [bool]
    'fixed_widget'         => true,
    // Presence or absence of canonical output [bool]
    'output_canonical'     => true,
    // Load parent theme CSS file when using child theme [bool]
    'with_parent_css'      => true,
    // Load parent theme functions.js file when using child theme [bool]
    'with_parent_script'   => true,
    // Specifying widgets to use when mobile (#global-nav is global navigation) [array]
    'mobile_nav'           => array('#global-nav', '#header-nav'),
    // Direction of slide navigation on mobile (left: unspecified/right: right) [string]
    'mobile_nav_position'  => '',
    // Specifying widgets to add to footer on mobile [array]
    'mobile_nav_footer'    => array(),
    // Category ID to be excluded (category widget, feed, etc.) [string] *extension
    'exclude_cat_id'       => '',
    // Breadcrumb display for each category on post pages [bool] *extension
    'bread_crumb_multi'    => false,
    // Disable emojis [bool]
    'disable_emoji'        => true,
    // All links to images will open in a new window (_blank)[bool]
    'image_link_target'    => false,
    // Display the image when it enters the screen [bool]
    'image_fade_in'        => true,
    // Added WP standard body_class settings [bool]
    'add_body_class'       => false,
    // Common post list layout type（list/tiles） [string]
    'taxonomy_layout'      => 'list',
    // Main visual image [string(url)]
    'mv_image'             => '',
    // Main visual image size (width [int], height [int], crop [bool]) [array]
    'mv_image_size'        => array(2000, 600, true),
    // Top page main visual (for Home or Front Page) [string(url)]
    'mv_home_image'        => get_template_directory_uri() . '/assets/img/img-hero.jpg',
    // Top page main visual content (for Home or Front Page) [string]
    'mv_home_content'      => '',
    // Default column layout（twocolumn, onecolumn, fullwidth, nowrapwidth） [string]
    'column_layout'        => 'twocolumn',
    // Top page layout (for Home or Front Page) [array]
    'homepage_layout'      => array(
      // column layout（twocolumn, onecolumn, fullwidth, nowrapwidth） [string]
      'column'   => 'twocolumn',
      // Post list layout（list/tiles） [string]
      'articles' => 'list',
    ),
    // Enable table of contents feature [bool] *extension
    'use_toc'              => true,
    // Directory settings [array]
    'toc_config'           => array(
      // Show table of contents [bool]
      'toc_active'   => true,
      // Close table of contents [bool]
      'toc_closed'   => false,
      // Table of contents title [string]
      'toc_title'    => 'Contents',
      // Headings to exclude（h1~h6） [array]
      'toc_hidden'   => array('h1'),
      // String to be added to anchor ID (Index-number) [string]
      'toc_prefix'   => 'Index-',
      // Insert location of table of contents (Top of body: 0 Bottom of body: -1 Before xth heading: 1~) [int]
      'toc_position' => 1,
    ),
    // Favicon URL [string(url)]
    'favicon'              => '',
    // Site icon URL [string(url)]
    'siteicon'             => '',
    // Display cookie usage consent screen [array]
    'cookie_banner'        => array(
      // Show consent screen [bool]
      'indicate' => false,
      // button label [string]
      'label'    => 'OK',
      // What to display [string]
      'text'     => 'This site uses cookies to improve usability and track browsing. By continuing to use the site, you consent to the use of cookies. For more information, please see <a href="' . home_url('/privacy-policy/') . '">Privacy Policy</a>.',
    ),
    // Separately specify CSS/JS version parameters for the theme *For browser cache countermeasures [bool/string]
    'version_param'        => false,
    // Theme version information
    'theme_version'        => wp_get_theme(basename(__DIR__))->get('Version'),
  );
}
require_once __DIR__ . '/functions/config.php';
