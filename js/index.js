$(document).ready(function() {
	var textareas = $('.label-textarea');
	var title = textareas.filter('.label-title');
	var titleFontSize = $('.label-input.label-title');
	var subtitle = textareas.filter('.label-subtitle');
	var subtitleFontSize = $('.label-input.label-subtitle');
	var description = textareas.filter('.label-description');
	var descriptionFontSize = $('.label-input.label-description');
	var company = textareas.filter('.label-company');
	var companyFontSize = $('.label-input.label-company');
	var weight = textareas.filter('.label-weight');
	var weightFontSize = $('.label-input.label-weight');

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
				'<div class="label-section label-title" style="font-size:' + titleFontSize.val() + 'px;">' + title.val() + '</div>' +
				'<div class="label-section label-subtitle" style="font-size:' + subtitleFontSize.val() + 'px;">' + subtitle.val() + '</div>' +
				'<div class="label-section label-description" style="font-size:' + descriptionFontSize.val() + 'px;">' + description.val() + '</div>' +
				'<div class="label label-footer">' +
					'<div class="label-section label-company" style="font-size:' + companyFontSize.val() + 'px;">' + company.val() + '</div>' +
					'<div class="label-section label-weight" style="font-size:' + weightFontSize.val() + 'px;">' + weight.val() + '</div>' +
				'</div>' +
			'</div>');
			label.css({
				'min-width' : widthNode.val() + 'cm'
			});
			label.css({
				'min-height' : heightNode.val() + 'cm'
			});

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
	renderLabels();
});