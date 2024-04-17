import { ApiProvider } from "./assets/services/context";

import Routes from "./assets/services/routes";

export default function App() {
  return (
    <ApiProvider>
      <Routes />
    </ApiProvider>
  );
}