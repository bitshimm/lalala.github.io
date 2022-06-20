<?php
/*	Template Name: Car rental list
 * The template for displaying the car rental list.
 *
 * @package WordPress
 * @subpackage BookYourTravel
 * @since Book Your Travel 1.0
 */

get_header();
BookYourTravel_Theme_Utils::breadcrumbs();
get_sidebar('under-header');


global $bookyourtravel_car_rental_helper, $bookyourtravel_theme_globals, $item_class;

if (get_query_var('paged')) {
	$paged = get_query_var('paged');
} else if (get_query_var('page')) {
	$paged = get_query_var('page');
} else {
	$paged = 1;
}

$posts_per_page = $bookyourtravel_theme_globals->get_car_rentals_archive_posts_per_page();

global $post;
$page_id = $post->ID;
$page_custom_fields = get_post_custom($page_id);

$car_types = wp_get_post_terms($page_id, 'car_type', array("fields" => "all"));

$car_type_ids = array();
if (!is_wp_error($car_types) && count($car_types) > 0) {
	$car_type_ids[] = $car_types[0]->term_id;
}

$sort_by = 'title';
if (isset($page_custom_fields['car_rental_list_sort_by'])) {
	$sort_by = $page_custom_fields['car_rental_list_sort_by'][0];
	$sort_by = empty($sort_by) ? 'title' : $sort_by;
}

$sort_descending = false;
if (isset($page_custom_fields['car_rental_list_sort_descending'])) {
	$sort_descending = $page_custom_fields['car_rental_list_sort_descending'][0] == '1' ? true : false;
}

$show_featured_only = false;
if (isset($page_custom_fields['car_rental_list_show_featured_only'])) {
	$show_featured_only = $page_custom_fields['car_rental_list_show_featured_only'][0] == '1' ? true : false;
}

$sort_order = $sort_descending ? 'DESC' : 'ASC';

$car_rental_tags = wp_get_post_terms($page_id, 'car_rental_tag', array("fields" => "all"));
$car_rental_tag_ids = array();
if (!is_wp_error($car_rental_tags) && count($car_rental_tags) > 0) {
	foreach ($car_rental_tags as $car_rental_tag) {
		$car_rental_tag_ids[] = $car_rental_tag->term_id;
	}
}

$parent_location = null;
$parent_location_id = 0;
if (isset($page_custom_fields['car_rental_list_location_post_id'])) {
	$parent_location_id = $page_custom_fields['car_rental_list_location_post_id'][0];
	$parent_location_id = empty($parent_location_id) ? 0 : (int)$parent_location_id;
}

$page_sidebar_positioning = null;
if (isset($page_custom_fields['page_sidebar_positioning'])) {
	$page_sidebar_positioning = $page_custom_fields['page_sidebar_positioning'][0];
	$page_sidebar_positioning = empty($page_sidebar_positioning) ? '' : $page_sidebar_positioning;
}

$section_class = 'full-width';
$item_class = 'one-fourth';
if ($page_sidebar_positioning == 'both') {
	$section_class = 'one-half';
	$item_class = 'one-half';
} else if ($page_sidebar_positioning == 'left' || $page_sidebar_positioning == 'right') {
	$section_class = 'three-fourth';
	$item_class = 'one-third';
}
?>
<div class="row">
	<?php
	if ($page_sidebar_positioning == 'both' || $page_sidebar_positioning == 'left')
		get_sidebar('left');

	$allowed_tags = array();
	$allowed_tags['span'] = array('class' => array());
	?>
	<section class="<?php echo esc_attr($section_class); ?>">
		<?php while (have_posts()) : the_post(); ?>
			<article id="page-<?php the_ID(); ?>">
				<h1><?php the_title(); ?></h1>
				<?php the_content(wp_kses(__('Continue reading <span class="meta-nav">&rarr;</span>', 'bookyourtravel'), $allowed_tags)); ?>
				<?php wp_link_pages('before=<div class="pagination">&after=</div>'); ?>
			</article>
		<?php endwhile; ?>
		<div class="upper-text">
			<?php echo get_field('text-upper'); ?>
		</div>

		<?php
		// фильтр для страницы "Круизный речной флот"
		if (
			get_the_ID() == 393 || // показываем на странице "Круизный речной флот"
			wp_get_post_parent_id() == 393 // и на всех потомках
		) {
		?>
			<div class="ship-filter js-filter">
				<select id="deck" name="deck">
					<option value="">Палуб</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
				</select>
				<select id="capacity" name="capacity">
					<option value="0-1000">Вместимость</option>
					<option value="100-150">от 100 чел.</option>
					<option value="150-200">от 150 чел.</option>
					<option value="200-250">от 200 чел.</option>
					<option value="250-300">от 250 чел.</option>
					<option value="300-1000">от 300 чел.</option>
				</select>
				<?php
				$river_price_table = get_field('river_price_table', 393);
				if ($river_price_table) : ?>
					<a href="<?php echo $river_price_table; ?>" target="_blank" style="color:#fc4f1d; font-size: 18px;text-decoration: underline;"><i class="fa fa-file-text" style="padding-right: 5px;"></i>Cводная таблица цен</a>
				<?php endif; ?>
			</div>
			<p class="notfound js-notFound" style="text-align:center;"></p>

			<script>
				jQuery(function($) {

					$('.js-filter select').change(function() {

						var rangeFilter = {
							capacity: $('#capacity').val().split('-').map(function(v) {
								return parseInt(v);
							}),
							// 						price: $('#price').val().split('-').map(function(v) { return parseInt(v); })
						};

						$('.car_rental_item').show().each(function() {

							// 						console.log(
							// 							'deck.val: ', $('#deck').val(),
							// 							'capacity.attr: ', $(this).attr('data-capacity'),
							// 							'capcaity.filter', rangeFilter.capacity,
							// 							'deck.attr: ', !!$('#deck').val() && ($(this).attr('data-deck') != $('#deck').val()),
							// 							'capacity[0]: ', $(this).attr('data-capacity') < rangeFilter.capacity[0],
							// 							'capacity[1]: ', $(this).attr('data-capacity') > parseInt(rangeFilter.capacity[1])
							// 						)

							if (
								($('#deck').val() && ($(this).attr('data-deck') != $('#deck').val())) ||

								($(this).attr('data-capacity') < rangeFilter.capacity[0]
									// 							  ||
									// 							   $(this).attr('data-capacity') > rangeFilter.capacity[1]
								)
							) {
								$(this).hide();
							}
						});

						setTimeout(function() {
							if ($('.car_rental_item:visible').length > 0) {
								$('.js-notFound').text('');
							} else {
								$('.js-notFound').text('Теплоходов с такими параметрами не найдено');
							}
						}, 200);

					});

				});
			</script>

		<?php } //endif "Круизный речной флот" filter 
		?>

		<?php
		// Фильтр для "Прогулочный малый флот"
		if (wp_get_post_parent_id() == 5975) { // показываем на всех потомках "Прогулочный малый флот")
		?>

			<div class="ship-filter js-filter">
				<select id="deck" name="deck">
					<option value="">Палуб</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<select id="capacity" name="capacity">
					<option value="0-1000">Вместимость</option>
					<option value="0-60">до 60 чел.</option>
					<option value="60-100">60-100 чел.</option>
					<option value="100-1000">100 и более чел.</option>
				</select>
				<select id="price" name="price">
					<option value="0-100000">Цена</option>
					<option value="0-9000">до 9000 руб/час</option>
					<option value="9000-16000">до 16000 руб/час</option>
					<option value="16000-100000">более 16000 руб/час</option>
				</select>
			</div>
			<p class="notfound js-notFound" style="text-align:center;"></p>

			<script>
				jQuery(function($) {

					$('.js-filter select').change(function() {

						var rangeFilter = {
							capacity: $('#capacity').val().split('-').map(function(v) {
								return parseInt(v);
							}),
							// 						price: $('#price').val().split('-').map(function(v) { return parseInt(v); })
						};

						$('.car_rental_item').show().each(function() {

							// 						console.log(
							// 							'deck.val: ', $('#deck').val(),
							// 							'capacity.attr: ', $(this).attr('data-capacity'),
							// 							'capcaity.filter', rangeFilter.capacity,
							// 							'deck.attr: ', !!$('#deck').val() && ($(this).attr('data-deck') != $('#deck').val()),
							// 							'capacity[0]: ', $(this).attr('data-capacity') < rangeFilter.capacity[0],
							// 							'capacity[1]: ', $(this).attr('data-capacity') > parseInt(rangeFilter.capacity[1])
							// 						)

							if (
								($('#deck').val() && ($(this).attr('data-deck') != $('#deck').val())) ||

								($(this).attr('data-capacity') < rangeFilter.capacity[0]
									// 							  ||
									// 							   $(this).attr('data-capacity') > rangeFilter.capacity[1]
								)
							) {
								$(this).hide();
							}
						});

						setTimeout(function() {
							if ($('.car_rental_item:visible').length > 0) {
								$('.js-notFound').text('');
							} else {
								$('.js-notFound').text('Теплоходов с такими параметрами не найдено');
							}
						}, 200);

					});

				});
				jQuery(function($) {

					$('.js-filter select').change(function() {

						var rangeFilter = {
							capacity: $('#capacity').val().split('-').map(function(v) {
								return parseInt(v);
							}),
							price: $('#price').val().split('-').map(function(v) {
								return parseInt(v);
							})
						};

						$('.car_rental_item').show().each(function() {


							if (
								($('#deck').val() && ($(this).attr('data-deck') != $('#deck').val())) ||

								($(this).attr('data-capacity') < rangeFilter.capacity[0] ||
									$(this).attr('data-capacity') > rangeFilter.capacity[1]) ||

								($(this).attr('data-price') < rangeFilter.price[0] ||
									$(this).attr('data-price') > rangeFilter.price[1])
							) {
								$(this).hide();
							}
						});

						setTimeout(function() {
							if ($('.car_rental_item:visible').length > 0) {
								$('.js-notFound').text('');
							} else {
								$('.js-notFound').text('Теплоходов с такими параметрами не найдено');
							}
						}, 200);

					});

				});
			</script>

		<?php } // endif "Прогулочный малый флот" filter 
		?>

		<?php
		// "Катера, метеоры, яхты" filter id 5978
		if (
			get_the_ID() == 5978 ||
			wp_get_post_parent_id() == 5978
		) {
		?>
			<div class="ship-filter js-filter">
				<select id="type" name="type">
					<option value="">Тип</option>
					<option value="Катер">Катер</option>
					<option value="Яхта">Яхта</option>
					<option value="Метеор">Метеор</option>
				</select>
			</div>
			<p class="notfound js-notFound" style="text-align:center;"></p>

			<script>
				jQuery(function($) {

					$('.js-filter select').change(function() {

						var rangeFilter = {
							type: $('#type').val()
						};

						$('.car_rental_item').show().each(function() {


							if (($('#type').val() && ($(this).attr('data-type') != $('#type').val()))) {
								$(this).hide();
							}
						});

						setTimeout(function() {
							if ($('.car_rental_item:visible').length > 0) {
								$('.js-notFound').text('');
							} else {
								$('.js-notFound').text('Теплоходов с такими параметрами не найдено');
							}
						}, 200);

					});

				});
			</script>

		<?php } //endif "Катера, метеоры, яхты" filter 
		?>

		<?php
		$car_rental_results = $bookyourtravel_car_rental_helper->list_car_rentals($paged, $posts_per_page, 'post_title', 'ASC', 0, $car_type_ids, $car_rental_tag_ids, array(), $show_featured_only);
		?>
		<div class="deals">
			<script>
				window.formMultipleError = <?php echo json_encode(esc_html__('You failed to provide {0} fields. They have been highlighted below.', 'bookyourtravel'));  ?>;
			</script>
			<?php if (count($car_rental_results) > 0 && $car_rental_results['total'] > 0) { ?>
				<div class="row">
					<?php
					foreach ($car_rental_results['results'] as $car_rental_result) {
						global $post;
						$post = $car_rental_result;
						setup_postdata($post);
						get_template_part('includes/parts/car_rental', 'item');
					}

					?>
				</div>
				<nav class="page-navigation bottom-nav">
					<!--back up button-->
					<a href="#" class="scroll-to-top" title="<?php esc_attr_e('Back up', 'bookyourtravel'); ?>"><?php esc_html_e('Наверх', 'bookyourtravel'); ?></a>
					<!--//back up button-->
					<!--pager-->
					<div class="pager">
						<?php
						$total_results = $car_rental_results['total'];
						BookYourTravel_Theme_Utils::display_pager(ceil($total_results / $posts_per_page));
						wp_reset_postdata();
						?>
					</div>
				</nav>
			<?php } // end if ( $query->have_posts() ) 
			?>
		</div>
		<!--//deals-->

		<div class="bottom-text" style="float: left;">
			<?php echo get_field('text-bottom'); ?>
		</div>



	</section>
	<?php
	// 	wp_reset_postdata();
	wp_reset_query();

	if ($page_sidebar_positioning == 'both' || $page_sidebar_positioning == 'right')
		get_sidebar('right');
	?>
</div>
<?php
get_footer();
