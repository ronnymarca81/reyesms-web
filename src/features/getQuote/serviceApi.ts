import type{ Steps } from './types'
import { Lightbulb, Users, Rocket } from "lucide-react"; "lucide-react";

export const defaultSteps: Steps[] = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Book Your Package",
    description:
      "Contact us through email or call us directly to book our service.",
    color: "from-purple-500 to-pink-500",
    showArrow: true
  },
  {
    icon: Users,
    number: "02",
    title: "Set The Schedule",
    description:
      "Once you contact us, we call you back to confirm preferred time and date according to your schedule.",
    color: "from-blue-500 to-cyan-500",
    showArrow: true
  },
  {
    icon: Rocket,
    number: "03",
    title: "Cleaning Done!",
    description:
      "We will come to your place and provide our best quality service of cleaning.",
    color: "from-emerald-500 to-teal-500",
    showArrow: false
  }
];

