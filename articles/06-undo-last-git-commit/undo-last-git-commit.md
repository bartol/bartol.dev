---
title: Undo last Git commit
date: 2019-08-11
tags:
  - git
  - til
---

Yeah, we've all been there. You accidentally committed but forgot to add one file. Quick! Search how to undo it on Stack Overflow! This comment looks nice, lets copy it in terminal. Ohh, this command messed up my whole project. I guess I'll just delete and clone last version from Github.

You have sure encountered this issue many times, I certainly have. But you shouldn't anymore!

All you need to is run this command.

```terminal
git reset --hard HEAD^
```

## But I pushed my commit to Github

_Am I screwed?_

No, just run these commands instead.

```bash
git reset --hard HEAD^
git push origin -f
```

That's it! Be careful next time!
