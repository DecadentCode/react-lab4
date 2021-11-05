import Story from "../models/Story";
import "./ListStoriesRoute.css";
import StoryRoute from "./StoryRoute";

interface Props {
  storiesArray: Story[];
}

const ListStoriesRoute = ({ storiesArray }: Props) => {
  return (
    <ul className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <div className="StoriesArray">
        {storiesArray.map((story) => (
          <StoryRoute key={story.id} story={story} />
        ))}
      </div>
    </ul>
  );
};

export default ListStoriesRoute;
