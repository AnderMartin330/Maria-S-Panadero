import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Languages, Users, MessageSquare } from "lucide-react";

const skills = [
  { icon: <Languages className="h-6 w-6 text-primary" />, name: "Translation (EN/FR <> ES)" },
  { icon: <MessageSquare className="h-6 w-6 text-primary" />, name: "Interpretation (Consecutive & Simultaneous)" },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, name: "Proofreading & Editing" },
  { icon: <Users className="h-6 w-6 text-primary" />, name: "Cultural Consulting" },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, name: "SDL Trados Studio" },
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, name: "MemoQ" },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">About Me</h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
            I am a dedicated and meticulous translator and interpreter, recently graduated from the University of [University Name] with a degree in Translation and Interpreting. My linguistic expertise spans English, French, and Spanish. I am committed to delivering high-quality linguistic solutions that bridge communication gaps and foster understanding across cultures.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center font-headline text-primary">My Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  {skill.icon}
                  <span className="text-md font-medium font-body">{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
