import React from 'react';

function About(props){

  return(
    <div id="appAbout" className="About">
      <article>
        <h2>The Dragons In The Kitchen</h2>
        <p> These are the people who are putting the time in behind the scenes of this kitchen. The builders the designers the artists ect. Follow them tell people about them find them on your preferd social media location support our team please.</p>
      </article>
      <section class="about-cards">
        <div class="creator-dragon">
          <h3 class="dragon-title">Project Designer/Developer</h3>
          <h3 class="dragon-name">Matt Ravenmoore</h3>
          <p class="dragon-bio">Greetings and salutatiouns, creatures call me Ravenmoore, i am the designer and main driving force behind TDK i am backed by a wonderfull team of friends and collegues that have helped bring TDK to life. I am a developer just getting in to technology, I find that I am drawn to the challenges of learning new things and better ways of doing things that code provides. I am looking forward to Codefellows 401 JS class in December and I am having fun getting ready with this project. </p>
        </div>
        <div class="creator-dragon">
          <h3 class="dragon-title">Graphic Designer</h3>
          <h3 class="dragon-name">Jeremy Odden</h3>
          <p class="dragon-bio">Jeremy Odden is a fledgling graphic designer that can occasionally be found lurking in the shadows of Ravenmoore valley. He works in the realm of entertainment during the day when the world isn't boiling in plague, and takes graphic design classes when it is. He hopes you hold him in as high a regard as he does you.</p>
        </div>
      </section>
    </div>
  )
}

export default About;




