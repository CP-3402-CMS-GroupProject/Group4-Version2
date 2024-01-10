<?php
/**
 * Theme Name: JCU OPEN DAYS
 * Author: CMS GROUP 4
 * Template: page
 * Description: fixpage
 */
get_header(); ?>

<main role="main" id="contents" class="article fixed-page">
  <?php get_template_part('includes/inc', 'mainvisual'); ?>
  <?php get_template_part('includes/inc', 'breadcrumb'); ?>

  <div id="contents-container" class="wrap">
    <div id="first-column">
      <article class="main-article">
        <?php if (have_posts()) : ?>
          <?php get_template_part('includes/inc', 'page'); ?>
        <?php else : ?>
          <div id="no-result">
            <p>No content</p>
          </div>
        <?php endif; ?>
      </article>
    </div>

    <div id="second-column">
      <?php get_sidebar(); ?>
    </div>
  </div>
</main>

<?php get_footer();
