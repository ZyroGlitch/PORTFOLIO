// src/app/context/project_context/page.tsx
"use client";

import { ProjectProvider } from "../ProjectProvider";

export default function ProjectPage() {
    return (
        <ProjectProvider>
            <div>Hello from Project Page</div>
        </ProjectProvider>
    );
}