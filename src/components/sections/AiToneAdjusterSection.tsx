"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, Loader2 } from "lucide-react";
import { adjustTone, type AdjustToneInput, type AdjustToneOutput } from "@/ai/flows/adjust-tone";
import { useToast } from "@/hooks/use-toast";

type Formality = "business" | "neutral" | "casual";

export default function AiToneAdjusterSection() {
  const [inputText, setInputText] = useState("");
  const [formality, setFormality] = useState<Formality>("neutral");
  const [adjustedText, setAdjustedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some text to adjust.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setAdjustedText(""); 
    try {
      const input: AdjustToneInput = { text: inputText, formality };
      const result: AdjustToneOutput = await adjustTone(input);
      setAdjustedText(result.adjustedText);
    } catch (error) {
      console.error("Error adjusting tone:", error);
      toast({
        title: "Error",
        description: "Failed to adjust tone. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-tool" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Wand2 className="mx-auto h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-3xl font-bold font-headline">AI Tone Adjuster</CardTitle>
            <CardDescription className="font-body text-foreground/80 md:text-lg">
              Need to change the formality of your text? Enter your paragraph below and let AI help you rewrite it.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="inputText" className="text-lg font-medium font-body mb-2 block">Your Text:</Label>
                <Textarea
                  id="inputText"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter text to adjust..."
                  rows={5}
                  className="font-body"
                  disabled={isLoading}
                />
              </div>

              <div>
                <Label className="text-lg font-medium font-body mb-2 block">Desired Formality:</Label>
                <RadioGroup
                  value={formality}
                  onValueChange={(value: string) => setFormality(value as Formality)}
                  className="flex flex-col sm:flex-row gap-4 font-body"
                  disabled={isLoading}
                >
                  {(["business", "neutral", "casual"] as Formality[]).map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <RadioGroupItem value={level} id={`formality-${level}`} />
                      <Label htmlFor={`formality-${level}`} className="capitalize font-body">{level}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adjusting...
                  </>
                ) : (
                  <>
                    Adjust Tone
                    <Wand2 className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {adjustedText && (
              <div className="mt-8 pt-6 border-t">
                <h3 className="text-xl font-semibold font-headline mb-2 text-primary">Adjusted Text:</h3>
                <div className="p-4 bg-muted rounded-md">
                  <p className="font-body whitespace-pre-wrap">{adjustedText}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
