// src/context/ProjectContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ProjectData {
    // Define your project data structure here
    // Example:
    id?: string;
    title?: string;
    description?: string;
    // Add other fields as needed
}

type ProjectContextType = {
    projectData: ProjectData | null;
    setProjectData: (data: ProjectData | null) => void;
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider = ({ children }: { children: ReactNode }) => {
    const [projectData, setProjectData] = useState<ProjectData | null>(null);

    return (
        <ProjectContext.Provider value={{ projectData, setProjectData }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProject must be used within a ProjectProvider");
    }
    return context;
};