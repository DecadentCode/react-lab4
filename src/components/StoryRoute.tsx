import { Link } from "react-router-dom";
import Story from "../models/Story";
import "./StoryRoute.css";

interface Props {
  story: Story;
}

const StoryRoute = ({ story }: Props) => {
  return (
    <li className="StoryRoute">
      <Link to={`/stories/${story.id}`}>Mad Lib by: {story.author}</Link>
    </li>
  );
};

export default StoryRoute;
