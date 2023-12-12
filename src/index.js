import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Search from "./Search";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Search city="{city}" />
    <div>
      <a href="https://github.com/prakadw-dev/react-new">Github link</a>
    </div>
  </StrictMode>
);
