                                <div id="secondary" class="col-sm-12 col-md-2 sidebar" role="complementary">
					<?php if ( is_active_sidebar( 'sidebar1' ) ) : ?>
						<?php dynamic_sidebar( 'sidebar1' ); ?>
					<?php else : ?>

						<?php
							/*
							 * This content shows up if there are no widgets defined in the backend.
							*/
						?>

						<div class="no-widgets">
							<p><?php _e( 'This is a widget ready area. Add some and they will appear here.', 'bonestheme' );  ?></p>
						</div>

					<?php endif; ?>

				</div>
