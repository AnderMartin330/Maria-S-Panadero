"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Loader2, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/lib/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full sm:w-auto" aria-disabled={pending} disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message
          <Send className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      // Optionally reset form fields here if not using a library that handles it
    } else if (state.status === "error" && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);
  
  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <Card className="max-w-xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <Mail className="mx-auto h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-3xl font-bold font-headline">Get in Touch</CardTitle>
            <CardDescription className="font-body text-foreground/80 md:text-lg">
              Have a project in mind or just want to say hello? Fill out the form below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-body">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  className="font-body mt-1"
                  aria-describedby="name-error"
                />
                {state.errors?.name && (
                  <p id="name-error" className="text-sm text-destructive mt-1">{state.errors.name.join(", ")}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="font-body">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="font-body mt-1"
                  aria-describedby="email-error"
                />
                 {state.errors?.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">{state.errors.email.join(", ")}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message" className="font-body">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="font-body mt-1"
                  aria-describedby="message-error"
                />
                {state.errors?.message && (
                  <p id="message-error" className="text-sm text-destructive mt-1">{state.errors.message.join(", ")}</p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
