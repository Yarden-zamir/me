---
aliases: []
tags: [dates/2023/5/2]
source: https://github.com/nektos/act
source: https://github.com/yarden-zamir/zsh-act-completion
source: https://github.com/Yarden-zamir/homebrew-tap
---
![Screen Shot 2023-05-02 at 19 49 58](https://user-images.githubusercontent.com/8178413/235732235-6c44b48d-cfbc-4ad4-ba98-2b572296c0c8.png)
![Screen Shot 2023-05-02 at 19 51 51](https://user-images.githubusercontent.com/8178413/235732595-337392c0-2e8d-4bf5-8f35-8d440a1a7a26.png)

I wanted to use act, but saw they don't have any shell completions anywhere so I made some. Here is my process.

1. shove `act --help` into gpt 4 and ask it to generate a completion script for `zsh` and refine results.
    - The original prompt `Create zsh shell completions for the following app called act {}` where {} is the output of `act --help`
2. This make a really good solution for options but not for the events (which in zct, are basically the commands) so I added a list of events and then to the `_arguments` section I added `'*:event name:->events'` at the end, which means that if there is no hit on an earlier section it will caught and the events will will be passed to the $state variable (a bit weird but that's the way zsh works, and it's much cleaner than bash) then this command `_describe -t events "event name" events ` will add all items from the list of events to the completion list.

3. This is good, but I found that having just the names made for some drab presentation and was less clear on what each event represented. I saw that if I use delimit the entries in the list with `:` the latter will be used as description in [fzf-tab](https://github.com/Aloxaf/fzf-tab) (the terminal autocomplete tool that i use / build upon) which would like like so `'project:Runs your workflow when a project board is created or modified'` this worked for me but I needed to get that data so I wrote a python script for that grabs the markdown source of their docs and parses it to kv pairs `event_name:description` and then I just added that to the list of events.

3. While changes in their api are not that common, because I already wrote a script that is generic I decided to make sure it automatically updates the completions using this script whenever github update their docs. The following is the github action I use to do that.
```yaml
name: Rebuild events section from github docs

on:
  workflow_dispatch:
  schedule:
    - cron: '0 0 * * *'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v4
      - run: pip install -r requirements.txt
      - run: python rebuild_events.py
      - uses: EndBug/add-and-commit@v9
        with:
          add: _act
          message: "Updated completion per changes in github/docs"
```

4. Now I wanted to be able to automatically update latest versions and such of this script and for that it needs to be added to some package manager. I can use my [gh-source](https://github.com/Yarden-zamir/gh-source) zsh plugin manager or I could use brew. I'll go with brew because my flow for publishing brew is setup but not refined, so if I use it more i'll refine it more.

5. I added a skeleton entry to my tap repository and then I added the following to the furmula:
```ruby
  def install
    zsh_completion.install "_act"
  end
```

which makes sure that the completion script is installed in the right place and the user is notified to add it to their fpath.

6. I encountered a problem with the ci workflow I usually, I seem to be getting a weird curl error 
```
curl: (92) HTTP/2 stream 1 was not closed cleanly: PROTOCOL_ERROR (err 1)
```

Looking into it.

7. This is so dumb, it was my token which was bad, creating a new one works. I will not admit how long it took me to figure that out.

8. Done, assuming you are tapped in (`brew tap yarden-zamir/tap`) you can install with `brew install zsh-act-completion` and take not of the printed instructions from brew which may differ on different systems.