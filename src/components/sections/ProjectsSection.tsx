import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "Technical Manual Translation",
    category: "Technical Translation",
    description: "Translated a 200-page technical manual for an engineering firm from English to Spanish, ensuring accuracy and consistency of terminology.",
    tags: ["English-Spanish", "Engineering", "SDL Trados"],
    imageUrl: "https://placehold.co/400x225.png", // Adjusted height to match Image component props
    imageHint: "technical document"
  },
  {
    title: "Website Localization for E-commerce",
    category: "Localization",
    description: "Localized a Shopify e-commerce website into French, including product descriptions, UI elements, and marketing copy, adapting content for the French market.",
    tags: ["Spanish-French", "E-commerce", "Shopify"],
    imageUrl: "https://placehold.co/400x225.png", // Adjusted height to match Image component props
    imageHint: "website screen"
  },
  {
    title: "Literary Translation Short Story",
    category: "Literary Translation",
    description: "Translated a contemporary short story from French to Spanish, focusing on preserving the author's unique voice and style.",
    tags: ["French-Spanish", "Literature", "Creative Writing"],
    imageUrl: "https://placehold.co/400x225.png", // Adjusted height to match Image component props
    imageHint: "book cover"
  },
  {
    title: "Conference Interpretation Support",
    category: "Interpretation",
    description: "Provided consecutive interpretation support (EN-ES) for guest speakers at a 3-day international business conference.",
    tags: ["English-Spanish", "Consecutive Interpreting", "Business"],
    imageUrl: "https://placehold.co/400x225.png", // Adjusted height to match Image component props
    imageHint: "conference people"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Projects</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            A selection of projects I've worked on, showcasing my skills in translation and interpretation across various domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.imageUrl}
                alt={project.title}
                data-ai-hint={project.imageHint}
                width={400}
                height={225} 
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="font-body text-sm text-accent">{project.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-body text-foreground/90 text-sm">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-body">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
