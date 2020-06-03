# Slack Parrot Emoji Capture

Get all the parrot related emojis in slack

# Description

On some of the slack channels we have a lot of cute pictures and emojis. One of my my friend's comments I added a whole bunch of parrots to her comment. I then relaized that that is very time consuming. If I could get a list of all the parrot emojis, I could paste them all everytime there is great news.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. This way you too can have a parrot party. See deployment for notes on how to deploy the project on your system.

### Prerequisites

Things you will need to use this program are 
* Slack access
* Node installed on your system

### Installing

A step by step series of examples that tell you how to get a development env running

Clone the repository to your system
```
git clone https://github.com/vsparrow/slack-parrot-emoji-capture.git
```
## Getting data from Slack

Your Slack system may have different parrots uploaded than the ones on my system. You can always chhose to use the default input.txt file, but to get the most parrots out of your system follow the next steps:

* Open up Slack on a web browser
* Bottom write of any channel click on emoku
* In the searchbar type in "parrot" without quotes
* Right click a parrot and "Inspect"
* Press left on your keypad untill all paarots are highlighted
* Right click the blue text and click Copy -> Copy Element
* Open a new text file and paste the results 
* Save this file as input.txt or whatever name you prefer

## Transform input data into pastable emoji shortcuts 

Using the input file we created in the steps above, we will get our emoji short cuts

```
node get-emoji.js input.txt output.txt
```
* the default input file name is input.txt
* the default output file name is parrotparty.txt

## Using the output 

Once you have the output, you can paste all your parrots into a slack message. Slack will automatically convert the parrot shortcuts to emojis


