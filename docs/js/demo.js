$(function(){
	/* Semantic UI */
	$('.popup, .refresh').popup({
		position : 'top center',
		className : {
			popup: 'ui popup inverted'
		}
	});
	$('.dropdown').dropdown({
		// you can use any ui transition
		transition: 'drop',
		className : {
			dropdown: 'ui dropdown inverted'
		}
	});

	var cleanupCode = function(code){
		return $.trim(code).replace(/[<>\"\'\t\n]/g, function(m) { return {
			'<' : '&lt;',
			'>' : '&gt;',
			"'" : '&#39;',
			'"' : '&quot;',
			'\t': '  ',
			'\n': '<br/>' // needed for IE
		}[m];});
	};

	// get javascript source
	if ($("script#js").length) {
		$("pre.lang-js").addClass('mod').html( cleanupCode( $("script#js").html() ) );
	}
	if ($("style#css").length) {
		$("pre.lang-css").addClass('mod').html( cleanupCode( $("style#css").html() ) );
	}
	if ($("#source").length && $("pre.lang-html").length) {
		$("pre.lang-html").addClass('mod').html( cleanupCode( $("#source").html() ) );
	}

	// apply to already pre-formatted blocks to add <br> for IE
	$('pre.prettyprint:not(.mod)').each(function(){
		$t = $(this);
		$t.html( cleanupCode( $t.html() ) );
	});

	if (typeof prettyPrint !== 'undefined') { prettyPrint(); }

});
