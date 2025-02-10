import { useRoutes } from "react-router-dom";
import routes from "./routes/Index.tsx";

function App() {
  const content = useRoutes(routes);
  return content;
}

export default App;
