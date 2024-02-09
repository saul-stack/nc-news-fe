import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CurrentUserAvatarCard from "./components/CurrentUserAvatarCard";
import LandingPage from "./pages/LandingPage";
import { useLocation } from "react-router-dom";
import { createContext } from "react";
import Articles from "./pages/ArticlesPage";
import SingleArticlePage from "./pages/SingleArticlePage";
//currently hardcoded user details passed as context
export const currentUser = createContext({
  userName: "tickle122",
  name: "Tom Tickle",
  avatar_url:
    "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
});

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      <CurrentUserAvatarCard />
      <div>{pathname !== "/" && <Link to="/">Home</Link>}</div>
      <h1>NC-News</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path={`/articles/:topic`} element={<Articles />} />
        <Route
          path={`/articles/:topic/:article_id`}
          element={<SingleArticlePage />}
        />
      </Routes>
    </div>
  );
}

export default App;
