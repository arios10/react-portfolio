import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      title: "Book and Movie Search",
      description: "Book and Movie Search from a term",
      live_url: "https://arios10.github.io/book-and-movie-search/",
      repo_url: "https://github.com/arios10/book-and-movie-search.git",
      img_file: "iiabom",
    },
    {
      title: "Rate My Joke!",
      description: "Joke Post and Rating Site",
      live_url: "https://jokeappproject2.herokuapp.com/",
      repo_url: "https://github.com/Teeemster/Project2.git",
      img_file: "rate-my-joke",
    },
    {
      title: "Budget Tracker",
      description: "Budget Tracking App",
      live_url: "https://young-spire-07560.herokuapp.com/",
      repo_url: "https://github.com/arios10/budget-tracker.git",
      img_file: "budget-tracker",
    }
  ];

  return (
    <section id="portfolio">
      <div className="title-wrapper">
        <h2>Portfolio</h2>
      </div>
      <div className="content-wrapper">
        <ul>
          {projects.map((project) => (
            <Project project={project} key={project.img_file} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;