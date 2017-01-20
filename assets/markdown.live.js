jQuery(document).ready(function() {

	// Add the button and preview area
	jQuery('textarea[class*=markdown]').addClass('markdown_live').each(function() {
		jQuery(this).after(jQuery('<div class="md-preview-output" /><button class="button md-preview">Show preview</button>'));
	});

	// Button event listener
	jQuery('button.md-preview').on('click', function() {
		var $self = jQuery(this),
			$source = $self.closest('.field').find('.markdown_live'),
			$output = $self.closest('.field').find('.md-preview-output');

		$output.html(textareaVal($source)).slideToggle('fast');

		if ($self.text() == 'Hide preview') {
			$self.text('Show preview');
		} else {
			$self.text('Hide preview');
		}
		return false;
	});
});

function textareaVal(mdsource) {
	return markdown.toHTML(mdsource.val());
}