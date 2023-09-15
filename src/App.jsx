import { useEffect } from "react";
import "./App.css";
import { getNotifications } from "./actions/notifications.actions";
import { useState } from "react";

const App = () => {
  const [notifications,setNotifications] = useState(null)
  const getdata = async () => {
    const data = await getNotifications();
    setNotifications(data)
  };
  useEffect(() => {
    getdata();
  }, []);
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


    {
      notifications.map((item)=>{
        
      })
    }
        <div className="single-box unread">
          <div className="avatar">
            <img src="/avatar-mark-webber.webp" alt="Mark-Webber" />
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
            <img src="/avatar-angela-gray.webp" alt="Angela-Gray" />
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
            <img src="/avatar-jacob-thompson.webp" alt="Jacob-Thompson" />
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
            <img src="/avatar-rizky-hasanuddin.webp" alt="Rizky" />
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
            <img src="/avatar-kimberly-smith.webp" alt="Kimberly-Smith" />
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
            <img src="/image-chess.webp" alt="myPic" />
          </div>
        </div>

        {/* Single notification end */}

        {/* single notification starts */}

        <div className="single-box">
          <div className="avatar">
            <img src="/avatar-nathan-peterson.webp" alt="Nathan-Peterson" />
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
            <img src="/avatar-anna-kim.webp" alt="Anna-Kim" />
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
};

export default App;
