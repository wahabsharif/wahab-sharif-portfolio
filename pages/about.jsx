const AboutPage = () => {
  return (
    <>
      <div>
        <h1>A Little Bit About Me</h1>
      </div>
      <div className="mt mb">
        <h3 className="mt mb">
          <u>Intro:</u>
        </h3>
        <p>
          With over 4 years in front-end development, I excel in maintaining and
          constructing web pages. Eager for fresh challenges to enhance my
          skills, I take pride in FreeSlots—an innovative online service I
          created during my senior year. It aids freelancers and students by
          identifying coffee shops with available tables.
        </p>
      </div>
      <div>
        <h3 className="mt mb">
          <u>Skills:</u>
        </h3>
        <div className="skills-icons">
          <img src="/skills/html-css.png" alt="Html Icon" />
          <img src="/skills/wordpress.png" alt="css Icon" />
          <img src="/skills/node-js.png" alt="node js Icon" />
          <img src="/skills/react.png" alt="React Icon" />
          <img src="/skills/next-js.png" alt="Next Js Icon" />
          <img src="/skills/bootstrap.png" alt="bootstrap Icon" />
          <img src="/skills/sass.png" alt="sass Icon" />
          <img src="/skills/tailwind-css.png" alt="Tailwin Css Icon" />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: " - About" },
  };
}

export default AboutPage;
