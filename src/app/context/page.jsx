"use client";
import { createContext, useContext, useState } from "react";

// 1. Create the context with a default value
const ProjectContext = createContext({
    project: null,
    setProject: () => { },
});

// 2. Provider component
export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState(null);

    return (
        <ProjectContext.Provider value={{ project, setProject }}>
            {children}
        </ProjectContext.Provider>
    );
};

// 3. Custom hook to use the context
export const useProject = () => useContext(ProjectContext);
