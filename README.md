# Casino Slot Machine App 
Built using Ruby on Rails, ReactJS, TailwindCSS and [deployed to heroku](https://slot-machine-2021.herokuapp.com/).
# Task Description
When a user opens the app, a session is created on the server, and they have 10 starting credits.
## Server side:
- When a user has less than 40 credits in the game session, their rolls are truly random.
- If a user has between 40 and 60 credits, then the server begins to slightly cheat:
For each winning roll, before communicating back to client, the server does one 30% chance roll which decides if server will re-roll the that round. If that roll is true, then server re-rolls and communicates the new result back.
- If user has above 60 credits, the server acts the same, but in this case the chance of re-rolling the round increases to 60%. If that roll is true, then server re-rolls and communicates the new result back.
There is a cash-out endpoint which moves credits from the game session to user's account and closes the session.
## Client side:
- Include a super simple, minimalistic table with 3 blocks in 1 row.
- Include a button next to the table that starts the game.
- The components for each sign can be a starting letter (C for cherry, L for lemon, O for orange, W for watermelon), but bonus points for using SVG assets (maybe get something from the internet).
- After submitting a roll-request to server, all blocks should enter a spinning state (can be 'X' character spinning, but bonus points for getting spinner SVG from internet).
- After receiving response from server, the first sign should spin for 1 second more and then display the result, then display the second sign at 2 seconds, then the third sign at 3 seconds.
- If the user wins the round, their session credit is increased by the amount from the server response, else it is deducted by 1.
- Include a button on the screen that says "CASH OUT", but when the user hovers it, there is 50% chance that button moves in a random direction by 300px, and 40% chance that it becomes unclickable (this roll should be done on client side). If they succeed to hit it, credits from session are moved to their account.