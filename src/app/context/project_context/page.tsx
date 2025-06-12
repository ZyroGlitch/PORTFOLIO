// src/app/context/project_context/page.tsx
"use client";
import { ProjectProvider } from "../ProjectContext";

export default function ProjectPageRoute() {
    return (
        <ProjectProvider>
            <div>Hello from Project Page</div>
        </ProjectProvider>
    );
}
