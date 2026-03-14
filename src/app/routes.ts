import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { PracticeAreas } from "./pages/PracticeAreas";
import { Resources } from "./pages/Resources";
import { Contact } from "./pages/Contact";
import { Root } from "./components/Root";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "practice-areas", Component: PracticeAreas },
      { path: "resources", Component: Resources },
      { path: "contact", Component: Contact },
    ],
  },
]);
