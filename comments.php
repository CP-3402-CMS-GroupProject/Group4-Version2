<?php
/**
 * Theme Name: JCU OPEN DAYS
 * Author: CMS GROUP 4
 * Template: comment
 * Description: comment
 */
bb_theme_check();
?>

<?php
if (post_password_required()) {
  return;
}
?>
<?php if ((comments_open() || get_comments_number()) && post_type_supports(get_post_type(), 'comments')) : ?>
  <section id="comments" class="bb-form-style">
    <?php if (have_comments()) : ?>
      <div id="comments-title">commont view</div>
      <ol class="comment-list">
        <?php wp_list_comments(array('callback' => 'bb_theme_comment')); ?>
      </ol>
    <?php endif; ?>

    <?php
    if (comments_open()) {
      bb_theme_comment_form();
    }
  ?>
  </section>
<?php endif;
