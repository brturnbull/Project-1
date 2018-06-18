# WDI Project 4: Sloth Burger

---

### Overview
   After tackling HTML, CSS and JavaScript for two and a half weeks, we were given the brief for our first project which was to build a game using what we had learnt so far. With such a wide scope of options I decided to combine two things I love most in life - sloths and burgers. The finished product was a collision based game which required the player to move the sloth at the bottom of the screen to collect burgers and score as many points as they could while at the same time avoiding the carrots as they deducted points.

### Created By
  Bridget Turnbull


### Timeframe
  7 days

### Instructions
  The game is set to a 30 second timer so the aim is essentially score as many points as possible within this time frame.
  The player, directs the sloth to the left and right of the screen to 'catch' the burgers falling from the sky. Each burger is 10 points added to the players total score.
  The player needs to avoid the carrots, however, as they detract 5 points from the score.
  When the time is up, the score is logged and the top 5 scores recorded are displayed on the leaderboard.

### Technology Used
  * HTML5
  * HTML5 Audio
  * CSS3
  * JavaScript
  * jQuery
  * Google Fonts
  * GitHub/GH Pages
  * Git
  * localStorage

### Process
  This project went relatively smoothly for me and I think that was due to the
  planning I sat down to do before hand. I knew first of all that the collision
  detection would be the trickiest part, having not conquered that in class.
  I started working the animations before anything else, first of all just div's
  falling which would eventually be the burgers, and then the sloth at the bottom
  too. This was all done using CSS animations.

  Once I had both animated, I needed to register the collision detection as that was
  the basis of the game. This was a little more tricky (and would eventually
  need some serious refactoring) but using conditional statements and a few calculations
  proved the most effective in the end. On detection now the burger would simply
  hide for 1 second and reappear when the animation continued to as to appear as if
  had been eaten by the sloth. Eventually I came to add some sound and a points system on
  collision too.

  Now I had a two divs - one moving from the top to bottom and another moving left
  to right on arrow keypress. I felt I had most of the tricky stuff down so was
  time to get on with the styling.

  Styling was really fun for me on this project. I had a pretty clear idea of what
  I wanted in terms of layout etc and I knew above all I wanted it to have a fun
  vibe about it. I used a colour palette from one of the online resources and matched
  that with a bright background of the jungle.

### Wins
  All in all, I'm happy with the outcome of the project. The biggest win, however,
  is getting up and running with the collision detection early on in the week. It
  felt like a bit of an uphill battle at times but taking it in the smaller steps
  meant I was able to approach it more methodically and spend longer on styling
  and adding extra features.

  One of the features I was most happy with was the leaderboard. That was something
  I really wanted to implement as I wanted players to be able to track their scores
  and make it more competitive - it is a game after all! I enjoyed working through
  because it gave me more confidence working with objects and arrays. The scores
  being saved as strings meant I needed to split the objects then convert the scores
  to a number and marry those up with the right players names, and that kind of
  problem solving was a fun little problem to solve.

### Blockers
  The biggest blocker for me was that it was my first individual project of this scale.
  This meant for me that, while I was cautiously optimistic, I still wasn't 100% sure what was within the realm of possibilities for me.

---

### Future Features
  I think for future features I would most like to implement different difficulty
  levels. After having to play the game approximately 324,231 times over the week I can
  imagine the game becoming quite tiresome eventually so being able to have players
  move up to different levels would be great!
