import "./App.css";
import markwebber from "./assets/avatar-mark-webber.webp";
import angela from "./assets/avatar-angela-gray.webp";
import jacob from "./assets/avatar-jacob-thompson.webp";
import rizky from "./assets/avatar-rizky-hasanuddin.webp";
import kimberly from "./assets/avatar-kimberly-smith.webp";
import nathan from "./assets/avatar-nathan-peterson.webp";
import anna from "./assets/avatar-anna-kim.webp";
import myPic from "./assets/image-chess.webp";

function App() {
  return (
    <>
      <div className="top-bar">
        <div className="title">
          <h2 className="title-text">Notifications</h2>
          <h3 className="num" id="num">
            0
          </h3>
        </div>
        <a href="#" className="read" id="read">
          Mark all as read
        </a>
      </div>
      <div className="notifications">
        {/* single notification starts */}

        <div className="single-box unread">
          <div className="avatar">
            <img src={markwebber} alt="Mark-Webber" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Mark Webber
              </a>{" "}
              reacted to your recent post{" "}
              <a href="#" className="post">
                My First tournament today!
              </a>
              <span className="dot"></span>
            </p>
            <p className="time">1m ago</p>
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src={angela} alt="Angela-Gray" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Angela Gray
              </a>{" "}
              followed you
              <span className="dot"></span>
            </p>
            <p className="time">5m ago</p>
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src={jacob} alt="Jacob-Thompson" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Jacob Thompson
              </a>{" "}
              has joined your group{" "}
              <a href="#" className="post">
                Chess Club
              </a>
              <span className="dot"></span>
            </p>
            <p className="time">1 day ago</p>
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src={rizky} alt="Rizky" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Rizky Hasanuddin
              </a>{" "}
              sent you a private message
              <span className="dot"></span>
            </p>
            <p className="time">5 days ago</p>
            <div className="private-text">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </div>
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box ">
          <div className="avatar">
            <img src={kimberly} alt="Kimberly-Smith" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Kimberly Smith
              </a>{" "}
              commented on your picture
              <span className="dot"></span>
            </p>
            <p className="time">1 week ago</p>
          </div>

          <div className="left-img">
            <img src={myPic} alt="myPic" />
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src={nathan} alt="Nathan-Peterson" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Nathan Peterson
              </a>{" "}
              reacted to your recent post{" "}
              <a href="#" className="post">
                5 end-game strategies to increase your win rate
              </a>
              <span className="dot"></span>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src={anna} alt="Anna-Kim" />
          </div>
          <div className="box-text">
            <p className="notifi-text">
              <a href="#" className="profile-name">
                Anna Kim{" "}
              </a>
              left the group{" "}
              <a href="#" className="post">
                Chess Club
              </a>
              <span className="dot"></span>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>

        {/* Single notification end */}
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Erick384">Erick-384</a>.
      </div>
    </>
  );
}

export default App;
