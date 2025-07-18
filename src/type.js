'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 120,
  deleteSpeed: 60,
  waitUntilVisible: true,
})
  .pause(1000)
  .delete()
  .type('Full Stack Developer') 
  .pause(1000)
  .delete() 
  .type('Yoga instructor')
  .pause(1000)
  .delete()
  .go();