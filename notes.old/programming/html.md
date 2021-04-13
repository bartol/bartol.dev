# HTML

empty title
	<title>&lrm;</title>

symbols

arrows
	&larr;
	&rarr;
	&uarr;
	&darr;

copyright
	&copy;

multiplication sign
	&times;

## Clock

	<body onload="setInterval(()=>document.getElementById('clock').innerHTML=new Date().toGMTString().slice(17,25))">
		<div id="clock"></div>
	</body>

## HTML skip to content button

html:

	<button type="button" class="skipToContent">
		Skip to content
	</button>

css:

	.skipToContent {
		transform: translateY(-500px);
	}

	.skipToContent:focus {
		transform: translateY(0);
	}

js:

	document.querySelector("skipToContent").addEventListener("click", () => {
		document.getElementById("content").focus();
	});

## SEO

### Checklist

**Optimize content for your users, not search engines.**

1. Don't let your internal pages be crawled
3. Create unique and descriptive page titles
4. Create description meta tag with summary of page content
5. Use headings to emphasize important text
6. Create structured data (rich search results)
7. Organize your site hierarchy (breadcrumbs, sitemap, all pages reachable through links)
8. Create 404 Not found page that kindly guides users back to a working page
9. Use descriptive URLs that convey content information
10. Provide one version of a URL to reach a document (setup 301 redirect or `rel="canonical"`)
11. Avoid embedding text in images and videos for textual content
12. Write concise and descriptive link text
13. Add `rel="nofollow"` to links that shouldn't be followed (user generated content)
14. Use alt attribute on images
15. Make your site mobile friendly
16. Add social sharing meta tags
17. Setup asset caching
18. Optimize and resize images
19. Use SSL

### SEO tools

- [Twitter card validator](https://cards-dev.twitter.com/validator)
- [Facebook Open Graph debugger](https://developers.facebook.com/tools/debug/)
- [Structured data testing tool](https://search.google.com/structured-data/testing-tool/)
- [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Google Search Console](https://search.google.com/search-console/about)
- [Bing webmaster tools](https://www.bing.com/toolbox/webmaster)
- [Rich results test](https://search.google.com/test/rich-results)
- [Rich results gallery](https://developers.google.com/search/docs/guides/search-gallery)

### Social sharing meta tags

#### Open Graph

	<meta property="og:locale" content="...">
	<meta property="og:type" content="...">
	<meta property="og:title" content="...">
	<meta property="og:description" content="">
	<meta property="og:url" content="...">
	<meta property="og:site_name" content="...">
	<meta property="og:image" content="...">
	<meta property="og:image:width" content="...">
	<meta property="og:image:height" content="...">
	<meta property="article:published_time" content="...">

#### Twitter

	<meta name="twitter:card" content="...">
	<meta name="twitter:image" content="...">
	<meta name="twitter:site" content="...">
	<meta name="twitter:creator" content="...">
	<meta name="twitter:title" content="...">
	<meta name="twitter:description" content="...">
	<meta name="twitter:url" content="...">

### Structured data for article

	<script type="application/ld+json">
	  {
	    "@context": "http://schema.org",
	    "@type": "BlogPosting",
	    "mainEntityOfPage": {
	      "@type":"WebPage",
	      "@id":"..."
	    },
	    "headline": "...",
	    "image": {
	      "@type": "ImageObject",
	      "url": "...",
	      "height": 640,
	      "width": 1024
	    },
	    "datePublished": "...",
	    "dateModified": "...",
	    "author": {
	      "@type": "Person",
	      "name": "..."
	    },
	    "publisher": {
	      "@type": "...",
	      "name": "...",
	      "logo": {
	        "@type": "ImageObject",
	        "url": "...",
	        "width": 600,
	        "height": 60
	      }
	    },
	    "description": "...",
	    "keywords": "..."
	  }
	</script>

### Allow access with robots.txt

	User-agent: *
	Disallow:

or don't create it
