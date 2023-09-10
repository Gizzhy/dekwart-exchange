import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-t">
          <span className="footer-w">
            Made With
            <FontAwesomeIcon
              icon={faHeart}
              size="xl"
              style={{
                color: "#f5f5f5",
                paddingRight: "8px",
                paddingLeft: "8px",
              }}
            />
            By TechMaven
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
