
move to linux.md

# Run sed on all files in directory

	$ find content/ -type f -name "*.md" -print0 | xargs -0 sed -i "s|/static/|/files/|g"
# Sed delete

	$ sed "/something/d"
# Sed replace

	$ sed "s/from/to/g"
