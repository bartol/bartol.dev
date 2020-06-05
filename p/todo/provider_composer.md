---
layout: post
title: Provider Composer
date: 2019-02-27
---

If you hate having 10 nested providers on your root component, you should try
this out. Simply wrap root component with `ProviderComposer` and pass all
providers in array as props.

```javascript
const ProviderComposer = ({ contexts, children }) => {
	return contexts.reduceRight(
		(kids, parent) =>
			React.cloneElement(parent, {
				children: kids,
			}),
		children
	)
}
```
