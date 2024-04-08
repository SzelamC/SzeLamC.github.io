import { Routes, Route } from "react-router-dom";
import Main from "@layouts/Main";
import { Home, GithubRedirect } from "@pages/index";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/github" element={<GithubRedirect />} />
      </Routes>
    </Main>
  );
}

export default App;
