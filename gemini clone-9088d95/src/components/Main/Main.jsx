import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Friend!</span>
              </p>
              <p>How can I assist you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Enter your preferences and we'll suggest the perfect travel
                  spot. Where do you want to go?
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Browse through inspirational content to spark creativity. Need
                  some motivation?
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Dive back into productivity and inspiration with Gemini's
                  latest features and updates.
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Review and manage your latest code snippets. Need help with
                  debugging?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />{" "}
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <span>
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638537295338932620-2172194540&p=privacy_notice&rd=1#privacy_notice">
                Your privacy and Gemini Apps.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
