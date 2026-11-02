import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import ProjectHeader from "../components/projects/ProjectHeader.jsx";

export default function ProjectLayout() {
  return (
    <>
      <ProjectHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
