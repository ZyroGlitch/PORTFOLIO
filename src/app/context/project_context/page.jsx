// src/context/ProjectContext.tsx   (or .jsx)
"use client";
import { createContext, useContext, useState } from "react";

// type Project = {
//     title: string;
//     description: string;
//     /* add the rest of your fields here */
// };

const ProjectContext = createContext < {
    project: any;
    setProject: React.Dispatch < React.SetStateAction < any >>;
} > ({
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
