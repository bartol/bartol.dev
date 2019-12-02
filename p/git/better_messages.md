---
layout: post
title: Better Commit Messages
date: 2019-10-10
---

I'll start with a disclaimer. Whole idea and content from this article is heavily inspired by [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages) post.

I am sure there was at least few times you were searching for something in _that_ commit. And you couldn't find it in sea of other bug fixes, features and “codebase cleanups”.

Let me introduce you to better (semantic) commit messages. All you need to do is prepend commit message with one of multiple prefixes like `feat` for feature of `fix` for, well, bug fix.

```text
feat:       new feature for the user, not a new feature for build script
fix:        bug fix for the user, not a fix to a build script
docs:       changes to the documentation
style:      formatting, missing semi colons, etc; no production code change
refactor:   refactoring production code, eg. renaming a variable
test:       adding missing tests, refactoring tests; no production code change
chore:      updating dependencies etc; no production code change
```

After using this system for a while, you'll be able to easily navigate through your Git history.
