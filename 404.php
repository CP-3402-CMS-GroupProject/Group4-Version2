<?php
get_header(); ?>

<main role="main" id="contents" class="error404">
  <?php get_template_part('includes/inc', 'breadcrumb'); ?>

  <div id="contents-container" class="wrap">
    <div id="one-column">
      <article class="main-article">
        <section>
          <h1 class="title">404 Not Found</h1>
          <p>The page you were looking for was not found.</p>
        </section>
      </article>
    </div>

    <div id="second-column">
      <?php get_sidebar(); ?>
    </div>
  </div>
</main>

<?php get_footer();
