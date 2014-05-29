var barChartData = {
		labels : ["League of Legends","Dota","Angry Birds","Flappy Bird","Spirit of Stones","Dark Souls","Monster Hunter"],
		datasets : [
				{
						fillColor : "rgba(151,187,205,0.8)",
						strokeColor : "rgba(151,187,205,1)",
						data : [100,80,70,50,30,10,5]
				}
		]
}

if (document.getElementById("canvas_least"))
	var myLine = new Chart(document.getElementById("canvas_least").getContext("2d")).Bar(barChartData);
if (document.getElementById("canvas_most"))
	var myLine = new Chart(document.getElementById("canvas_most").getContext("2d")).Bar(barChartData);

$('#items-table .item').each(function() {
	console.log('oasdadsk');
	var name = $(this).find('img').data('name');
	var description = $(this).find('img').data('description');
	var value = $(this).find('img').data('value');
	var qtd_selling = ($(this).find('img').data('selling')) ? ' ' + $(this).find('img').data('selling') : '';
	name += ($(this).hasClass('forsale')) ? ' <span class="badge">selling' + qtd_selling + '</span>' : '';
	var qtd_trading = ($(this).find('img').data('trading')) ? ' ' + $(this).find('img').data('trading') : '';
	name += ($(this).hasClass('fortrade')) ? ' <span class="badge">trading' + qtd_trading + '</span>' : '';

	$(this).find('.item-tip').popover({
		title: '<strong>' + name + '</strong>',
		html: true,
		trigger: 'hover',
		placement: 'bottom',
		content: description + '<br><strong>Value:</strong> <span class="color-yellow"><i class="fa fa-bitcoin"></i> ' + value + '</span>'
	});

	$(this).find('.item-tip').click(function() {
		$('#modal-details').modal('show');
	});
});

$('#selling-items-table tbody tr input').click(function() {
	$('#modal-details').modal('show');
});


$(document).ready(function() {

	$(".store-sale").owlCarousel({

			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true

	});

});
