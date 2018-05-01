# Module Test Automation
This repository is meant for trainees of Calco to help them learn about automatic tests.

# Setup your local environment
To get started a few things are required:
   - Install Nodejs (Which you can get from https://nodejs.org/en/)
   - Install an IDE or texteditor in which you can edit Javascript (Atom (https://atom.io) is a good choice for this)
   - Install Git (https://git-scm.com)
   - Optional: install a Git Client (like Github Desktop, GitKraken or Sourcetree)
   - Clone the repository to your local environment
   - Install the project dependencies by running the command: 'npm install' in your terminal
   - Install nightwatch (http://nightwatchjs.org) on your machine by running the command: 'npm install -g nightwatch'. This installs Nightwatch globally, so you can run your tests more easily
   - Download selenium-standalone globally by running the command: 'npm install -g selenium-standalone', then install the drivers themselves by running the command 'selenium-standalone install'

Optional:
   - It is advised to use a Git Client to have a clearer understanding of your branches

# Run your tests
Once you thought of an solution for the exercises, you will probably want to run them to see if they work. For this you need to do the following:
  - Start a selenium server. You can do this by opening a command prompt and run the command 'selenium-standalone start'
  - Open another command prompt and run the following command to run your test: 'nightwatch --tag exercise_1'. Since Nightwatch allows the use of tags, I went ahead added tags to all the seperate exercise files. This means that you can run exercise 1 by using the command 'nightwatch --tag exercise_1', exercise 2 by running 'nightwatch --tag exercise_2' etc.

It is also possible to run all the tests at once, for this you only need to run 'nightwatch'
