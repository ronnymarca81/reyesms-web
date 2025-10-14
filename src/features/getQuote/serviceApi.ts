import type{ StepProps } from './types'
import { Lightbulb, Users, Rocket, Medal } from "lucide-react"; "lucide-react";

export const defaultSteps: StepProps[] = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Free Assessment",
    description:
      "We visit your space, discuss your needs, and evaluate the best cleaning or maintenance solution for your business",
    color: "from-emerald-50 to-emerald-200",
    showArrow: true
  },
  {
    icon: Users,
    number: "02",
    title: "Custom Quote",
    description:
      "Competitive quote along with a tailored service plan.",
    color: "from-sky-50 to-sky-200",
    showArrow: true
  },
  {
    icon: Rocket,
    number: "03",
    title: "Easy Scheduling ",
    description:
      "Simply pick the schedule that works best for you.",
    color: "from-violet-50 to-violet-200",
    showArrow: true
  },
  {
    icon: Medal,
    number: "04",
    title: "Guaranteed Results",
    description:
      "We deliver spotless results with minimal disruption, backed by our 100% satisfaction guarantee.",
    color: "from-amber-50 to-amber-300",
    showArrow: false
  }
];

