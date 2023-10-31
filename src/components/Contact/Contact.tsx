import "./contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () => {
  return (
    <div className="contact">
      <span>Here to help you:</span>
      <div className="form">
        <input type="text" placeholder="Type your message..." />
        <button>Join Us</button>
      </div>
      <div className="logos">
        <span>
          <FacebookIcon className="facebook" />
        </span>
        <span>
          <InstagramIcon className="instagram" />
        </span>
        <span>
          <YouTubeIcon className="youtube" />
        </span>
        <span>
          <TwitterIcon className="twitter" />
        </span>
      </div>
    </div>
  );
};

export default Contact;
