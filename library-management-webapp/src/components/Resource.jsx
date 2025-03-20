import { Link } from "react-router-dom";

export default function Resource(props) {
  return (
    <div className="item">
      <img src={props.img} className="resource-image" />
      <Link to={props.route} className="button">
        {props.operation} Resource
      </Link>
    </div>
  );
}
