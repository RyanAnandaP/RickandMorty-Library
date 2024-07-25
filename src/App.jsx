import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "./Pages/MainHome.jsx";
import CharacterDetail from "./Pages/CharacterDetail.jsx";
import Header from "./components/Header.jsx";
import Locations from "./Pages/Locations.jsx";
import { AppProvider } from "./components/Provider.jsx";
import LocationDetail from "./Pages/LocationDetail.jsx";

const router = createBrowserRouter([
  { path: "/", element: <MainHome /> },
  { path: "/detail/:id", element: <CharacterDetail /> },
  { path: "/locations", element: <Locations /> },
  {path: 'locations/:locationId', element: <LocationDetail/>}
]);

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router}/>
      </AppProvider>
    </>
  );
}

export default App;
