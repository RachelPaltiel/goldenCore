/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$header.length > 0) {

			$window.on('load', function() {

				$header.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

		document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".system-tab");
		const panels = document.querySelectorAll(".system-panel");

    tabs.forEach(tab => {

			tab.addEventListener("click", () => {

				const target = tab.dataset.tab;

				tabs.forEach(t => t.classList.remove("active"));
				panels.forEach(p => p.classList.remove("active"));

				tab.classList.add("active");
				document.getElementById(target).classList.add("active");

			});

    });

});

	const floatingContact = document.querySelector(".floating-contact-div");

	window.addEventListener("scroll", () => {

		if (window.scrollY > 50) {
			floatingContact.classList.add("scrolled");
		} else {
			floatingContact.classList.remove("scrolled");
		}

	});

	document.addEventListener("DOMContentLoaded", () => {
		const steps = document.querySelectorAll(".roadmap-step");

		const titleEl = document.getElementById("roadmap-title");
		const textEl = document.getElementById("roadmap-text");
		const imgEl = document.getElementById("roadmap-image");

		if (!steps.length || !titleEl || !textEl || !imgEl) return;

		steps.forEach(step => {
			step.addEventListener("click", () => {

				// remove active
				steps.forEach(s => s.classList.remove("active"));

				// add active
				step.classList.add("active");

				// update preview
				titleEl.textContent = step.dataset.title;
				textEl.textContent = step.dataset.text;
				imgEl.src = step.dataset.image;
			});
		});
	});

})(jQuery);