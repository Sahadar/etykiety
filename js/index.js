$(document).ready(function() {
	var textareas = $('.label-textarea');
	var title = textareas.filter('.label-title');
	var subtitle = textareas.filter('.label-subtitle');
	var description = textareas.filter('.label-description');
	var company = textareas.filter('.label-company');
	var weight = textareas.filter('.label-weight');

	var numberInputs = $('.label-input');
	var countNode = $('.label-count');
	var widthNode = $('.label-width');
	var heightNode = $('.label-height');
	var labelPreview = $('.label-preview');

	function renderLabels() {
		var count = countNode.val();

		labelPreview.empty();
		for(var i = 0; i < count; i++) {(function() {
			var label = $('<div class="label-container">' +
				'<div class="label-section label-title">' + title.val() + '</div>' +
				'<div class="label-section label-subtitle">' + subtitle.val() + '</div>' +
				'<div class="label-section label-description">' + description.val() + '</div>' +
				'<div class="label label-footer">' +
					'<div class="label-section label-company">' + company.val() + '</div>' +
					'<div class="label-section label-weight">' + weight.val() + '</div>' +
				'</div>' +
			'</div>');
			label.width(widthNode.val() + 'cm');
			label.height(heightNode.val() + 'cm');

			labelPreview.append(label);
		})()}
	}

	textareas.on('input', function() {
		var currentTextarea = $(this);
		var part = currentTextarea.data('part');
		var value = currentTextarea.val();

		renderLabels();
	});

	numberInputs.on('input', function() {
		renderLabels();
	});

	console.log('hello world!');
});