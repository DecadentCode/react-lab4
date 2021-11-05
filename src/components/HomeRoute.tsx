import "./HomeRoute.css";

const HomeRoute = () => {
  return (
    <div className="HomeRoute">
      <a href="/stories">See Saved Stories</a>
      <a href="/create-story">Create a New Story</a>
      <p>
        Mad Libs is a phrasal template word game which consists of one player
        prompting others for a list of words to substitute for blanks in a story
        before reading aloud.
      </p>
    </div>
  );
};

export default HomeRoute;
