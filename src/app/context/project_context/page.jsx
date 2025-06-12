"use client";
import { createContext, useContext, useState } from "react";

// Remove type annotations; these are not valid in .jsx
const ProjectContext = createContext({
    project: null,
    setProject: () => { },
});

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState(null);

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

export const useProject = () => useContext(ProjectContext);
