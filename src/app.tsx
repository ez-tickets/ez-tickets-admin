import {Fragment} from "react";
import TitleBar from "@/applications/titlebar.tsx";
import Routing from "@/routing.tsx";

function App() {
  return (
    <Fragment>
      <TitleBar />
      <Routing />
    </Fragment>
  );
}

export default App;