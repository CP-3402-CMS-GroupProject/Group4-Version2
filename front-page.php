<?php
/**
 * Theme Name: JCU OPEN DAYS
 * Author: CMS GROUP 4
 * Template: front-page
 * Description: front-page
 */
get_header(); ?>

<main role="main" id="contents" class="front-page <?php echo is_page() ? 'fixed' : 'archive';?>-page">
  <?php get_template_part('includes/inc', 'mainvisual'); ?>
  <?php get_template_part('includes/inc', 'breadcrumb'); ?>

  <div id="contents-container" class="wrap">
    <div id="first-column">
      <?php if (is_page()) : // fix page ?>
        <article class="main-article">
          <?php if (have_posts()) : ?>
            <?php echo 'Fix da page';?>
            <?php get_template_part('includes/inc', 'page'); ?>
          <?php endif; ?>
        </article>
      <?php else : // lastest post ?>
        <div class="archive-<?php echo bb_get_taxonomy_layout(); ?>">
          <?php if (have_posts()) : ?>
            <h1><?php echo 'WELCOM TO THE JCU OPEN HOUSE';?></h1>
            <br>
            <h1><?php echo 'It was our pleasure to welcome you and showcase the vibrancy of our campus and the exceptional offerings that our university has to offer.'?><h1>
            <!-- <?php get_template_part('includes/inc', 'archive'); ?> -->
            <section id="comments" class="bb-form-style">
    <!-- <?php if (have_comments()) : ?>
      <div id="comments-title">comment vuew</div>
      <ol class="comment-list">
        <?php wp_list_comments(array('callback' => 'bb_theme_comment')); ?>
      </ol>
    <?php endif; ?> -->

            <?php
            if (comments_open()) {
              bb_theme_comment_form();
            }?>
          <?php endif; ?>
          
        </div>
      <?php endif; ?>
    </div>

    <div id="second-column">
      <?php get_sidebar(); ?>
    </div>
  </div>
</main>

<?php get_footer();
