import type{ StepProps } from './types'
import { Lightbulb, Users, Rocket, Medal } from "lucide-react"; "lucide-react";

export const defaultSteps: StepProps[] = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Free Assessment",
    description:
      "We visit your space, discuss your needs, and evaluate the best cleaning or maintenance solution for your business",
    color: "from-purple-500 to-pink-500",
    showArrow: true
  },
  {
    icon: Users,
    number: "02",
    title: "Custom Quote & Easy Scheduling",
    description:
      "Competitive quote along with a tailored service plan. Once approved, you simply pick the schedule that works best for you.",
    color: "from-blue-500 to-cyan-500",
    showArrow: true
  },
  {
    icon: Rocket,
    number: "03",
    title: "Professional Cleaning",
    description:
      "Our trained and insured team arrives fully equipped with eco-friendly products and commercial grade tools. ",
    color: "from-emerald-500 to-teal-500",
    showArrow: true
  },
  {
    icon: Medal,
    number: "04",
    title: "Guaranteed Results",
    description:
      "We deliver spotless results with minimal disruption, backed by our 100% satisfaction guarantee.",
    color: "from-emerald-300 to-teal-900",
    showArrow: false
  }
];

