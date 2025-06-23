import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import ProjectSlider from "./projectSlider";
import { Project } from "./mainComponent";
import { Separator } from "@/components/ui/separator";

const ProjectComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("./projects.json", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <Card className="w-full px-4">
      <CardHeader className="px-2">
        <CardTitle className="text-2xl">Projects</CardTitle>
        <CardDescription>
          Everything I have built throughout my journey
        </CardDescription>
      </CardHeader>

      <Separator />

      {projects.length === 0 ? (
        <p className="text-muted">Loading projects...</p>
      ) : (
        <ProjectSlider
          autoplay={true}
          loop={true}
          items={projects}
          pauseOnHover
        />
      )}
    </Card>
  );
};
export default ProjectComponent;
