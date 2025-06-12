// src/context/ProjectContext.tsx   (or .jsx)
"use client";
import { createContext, useContext, useState } from "react";

type Project = {
    title: string;
    description: string;
    /* add the rest of your fields here */
};

const ProjectContext = createContext<{
    project: Project | null;
    setProject: (p: Project) => void;
}>({
    project: null,
    setProject: () => { },
});

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState<Project | null>(null);
    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => useContext(ProjectContext);
