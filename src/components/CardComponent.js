import star from "../images/star.png";
function CardComponent(props) {
  let badgeText;
  if (props.dataElement.openSpots == 0) {
    badgeText = "Sold out";
  } else if (props.dataElement.location == "Online") {
    badgeText = "Online";
  }
  return (
    <div className="CardComponent">
      {badgeText && <div className="CardBadge">{badgeText}</div>}
      <img src={props.dataElement.coverImg} className="MainPic" alt="pic"></img>
      <div className="StarLine">
        <img src={star} className="StarPic" alt="pic"></img>
        <p className="Line1">
          {props.dataElement.stats.rating}{" "}
          <span className="Line1Span">
            ({props.dataElement.stats.reviewCount}) {props.dataElement.location}
          </span>
        </p>
      </div>
      <p className="Line2">{props.dataElement.title}</p>
      <p className="Line3">
        <b>From ${props.dataElement.price}</b> / person
      </p>
    </div>
  );
}
export default CardComponent;
