import React from "react";
import Logo from "../Assets/logo.png";
import {
  StyledAppHeader,
  StyledAppHeaderContent,
  StyledAppHeaderNavgitationBar,
  StyledExploreButton,
  StyledSignInButton,
} from "./APP.styled";
import { IoSearchOutline } from "react-icons/io5";
import About from "../About";
import Cooking from "../Cooking";
import Dinner from "../Dinner";
import Recipes from "../Recipes";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function index() {
  return (
    <React.Fragment>
      <div className="content-title">Let's Get Cooking!</div>
      <div className="content-text">
        <div>Explore the best recipes from around</div>
        <div>the world.Make cooking enjoyable again.</div>
      </div>
      <StyledExploreButton>Explore Recipes</StyledExploreButton>
    </React.Fragment>
  );
}
function App() {
  const [searchStart, setsearchStart] = React.useState(false);
  // const [pathname, setPathname] = React.useState("/");
  // React.useEffect(() => {
  //   const pn = window.location.pathname;
  //   setPathname(pn);
  // }, []);
  return (
    <StyledAppHeader>
      <StyledAppHeaderNavgitationBar>
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        <div className="navgitation-list">
          <div className="search">
            <IoSearchOutline onClick={() => setsearchStart(!searchStart)} />
            <input
              className={searchStart ? "open" : ""}
              type="text"
              placeholder="搜尋網站目標"
            />
          </div>
          <div className="native">
            <ul>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>

              <li>
                <Link to="/dinner">Dinner TV</Link>
              </li>

              <li>
                <Link to="/cooking">Cooking School </Link>
              </li>

              <li>
                <Link to="/about">About </Link>
              </li>
            </ul>
          </div>
          <div>
            <StyledSignInButton className="sign-in-btn">
              Sign in
            </StyledSignInButton>
          </div>
        </div>
      </StyledAppHeaderNavgitationBar>
      <StyledAppHeaderContent>
        <Route path="/" exact component={index} />
        <Route path="/about" exact component={About} />
        <Route path="/cooking" exact component={Cooking} />
        <Route path="/dinner" exact component={Dinner} />
        <Route path="/recipes" exact component={Recipes} />
      </StyledAppHeaderContent>
    </StyledAppHeader>
  );
}

export default App;
