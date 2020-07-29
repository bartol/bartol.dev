# React provider composer

	const ProviderComposer = ({ contexts, children }) => {
		return contexts.reduceRight(
			(kids, parent) =>
				React.cloneElement(parent, {
					children: kids,
				}),
			children
		)
	}