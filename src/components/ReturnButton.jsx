import { Link } from "react-router-dom";

const ReturnBtn = ({ href }) => {
  return (
    <div className="products-bottom-nav">
      <Link to={href} className="back-link">
        <span aria-hidden="true">←</span> Wróć
      </Link>
    </div>
  );
};

export default ReturnBtn;
