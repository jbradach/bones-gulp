<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="utf-8">
		<?php // force Internet Explorer to use the latest rendering engine available ?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">

		<title><?php wp_title(''); ?></title>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body <?php body_class(); ?>>

        <header id="masthead" class="site-header" role="banner">
                <div class="site-branding container">
                        <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                        <h2 class="site-description"><?php bloginfo( 'description' ); ?></h2>
                </div><!-- .site-branding -->
                <div class="clearfix"></div>
                <div class="navbar navbar-material-#4caf50green navbar-fixed-top shadow-z-1">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php bloginfo( 'name' ); ?></a>
                    </div>
                    <div class="navbar-collapse collapse navbar-responsive-collapse">
<?php wp_nav_menu( array( 'theme_location'    => 'primary',
                          'menu_id'           => 'primary-menu',
                          'menu_class'        => 'nav navbar-nav',
                          'container'         => false,//div
                          //'container_class'   => 'navbar-collapse collapse navbar-responsive-collapse',
                          'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
                          'walker'            => new wp_bootstrap_navwalker()
                          ) ); ?>
                        <form class="navbar-form navbar-right">
                            <input type="text" class="form-control col-lg-8" placeholder="Search">
                        </form>
                   </div><!-- navbar-collapse -->
            </div><!-- #site-nav -->

        </header><!-- #masthead -->

        <div id="content" class="site-content container-fluid">
<?php  //             <div id="primary" class="content-area col-sm-12 col-md-9">?>
