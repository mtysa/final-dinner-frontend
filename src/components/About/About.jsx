//a presentational component that displays information about the author
import "./About.css";
import author from "../../assets/author.jpg";

function About() {
  return (
    <div className="about-container">
      <img src={author} alt="Mustafa Ysa, Author" className="about__author" />
      <section className="about__bio">
        <h1 className="about__title">About the Developer</h1>
        <p>
          Howdy, my name is Mustafa, I like long talks, walks on the beach and
          I'm a Virgo. Just kidding, on a more serious note, I’m an aspiring
          software engineer! Welcome to my site, I built DinnerTime to make
          cooking with what’s in your fridge easier and more fun. Using the
          Spoonacular API, this app lets you enter ingredients you already have
          to discover new recipes and experiment in the kitchen.
        </p>
        <p>
          I’m currently wrapping up my certification with TripleTen, where I’ve
          been learning full-stack development, including essential technologies
          like HTML, CSS, JavaScript, and React. Throughout the program, I’ve
          tackled real-world projects, worked with APIs, managed code in GitHub,
          and improved my problem-solving skills. In this project, I’ve focused
          on reusable components, clean code organization (using the BEM
          methodology), and responsive design to create a seamless experience.
        </p>
        <p>
          With my background in software development and experience in
          troubleshooting and optimizing software systems, I’m equipped to
          deliver applications that meet user needs. I look forward to helping
          people through technology, whether it's building tools for simpler
          daily tasks, improving existing systems, or offering fresh solutions
          to complex problems.
        </p>
      </section>
    </div>
  );
}

export default About;
