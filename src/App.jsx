import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import ProjectLayout from "./layouts/ProjectLayout.jsx";

//import dei progetti
import DragonBallCollector from "./pages/projects/DragonBallCollector.jsx";
import LiveLoot from "./pages/projects/LiveLoot.jsx";
import TrapItaliana from "./pages/projects/TrapItaliana.jsx";
import GameVault from "./pages/projects/GameVault.jsx";
import GymManager from "./pages/projects/GymManager.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path={"/"} element={<Homepage />} />
        </Route>

        <Route element={<ProjectLayout />}>
          <Route
            path={"/projects/dragonball-collector"}
            element={<DragonBallCollector />}
          />

          <Route path={"/projects/liveloot"} element={<LiveLoot />} />

          <Route path={"/projects/trap-italiana"} element={<TrapItaliana />} />

          <Route path={"/projects/gamevault"} element={<GameVault />} />

          <Route path={"/projects/gym-manager"} element={<GymManager />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
