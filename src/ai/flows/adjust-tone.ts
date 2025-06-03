'use server';

/**
 * @fileOverview Adjusts the formality of a given text.
 *
 * - adjustTone - A function that adjusts the tone of the text.
 * - AdjustToneInput - The input type for the adjustTone function.
 * - AdjustToneOutput - The return type for the adjustTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdjustToneInputSchema = z.object({
  text: z.string().describe('The text to adjust the formality of.'),
  formality: z
    .enum(['business', 'neutral', 'casual'])
    .describe('The desired level of formality: business, neutral, or casual.'),
});
export type AdjustToneInput = z.infer<typeof AdjustToneInputSchema>;

const AdjustToneOutputSchema = z.object({
  adjustedText: z.string().describe('The text adjusted to the specified formality.'),
});
export type AdjustToneOutput = z.infer<typeof AdjustToneOutputSchema>;

export async function adjustTone(input: AdjustToneInput): Promise<AdjustToneOutput> {
  return adjustToneFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adjustTonePrompt',
  input: {schema: AdjustToneInputSchema},
  output: {schema: AdjustToneOutputSchema},
  prompt: `You are a professional editor. Adjust the following text to the specified level of formality.

Text: {{{text}}}

Formality: {{{formality}}}

Adjusted Text:`,
});

const adjustToneFlow = ai.defineFlow(
  {
    name: 'adjustToneFlow',
    inputSchema: AdjustToneInputSchema,
    outputSchema: AdjustToneOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
