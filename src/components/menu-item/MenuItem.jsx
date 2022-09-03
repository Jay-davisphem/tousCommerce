import { useNavigate, useLocation } from "react-router-dom";
import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${linkUrl}`)}
      title={`${location.href}${linkUrl}/`}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtititle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
