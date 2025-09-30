
import type { IconName, BenefitItem } from "../Benefit";
import type { TaskItem } from '../Task'
import * as LucideIcons from "lucide-react";
import type { FrequencyOption } from '../types'


export interface Service {
  name: string;
  slug: string;
  description: string;
  paragraphs: string[];
  images: string[]; // ✅ now supports multiple
  tasks: TaskItem[];
  frequencies: Record<string, FrequencyOption>;
  benefits: BenefitItem[];
}


function isFrequencyOption(value: any): value is FrequencyOption {
  return (
    value &&
    typeof value.price === "string" &&
    typeof value.visits === "string" &&
    typeof value.best === "string"
  );
}

function isTaskItem(value: any): value is TaskItem {
  return (
    value &&
    typeof value.icon === "string" &&
    typeof value.title === "string" &&
    typeof value.desc === "string"
  );
}

function isBenefitItem(value: any): value is BenefitItem {
  return (
    value &&
    typeof value.icon === "string" &&
    typeof value.title === "string" &&
    typeof value.desc === "string" &&
    typeof value.stat === "string" &&
    typeof value.metric === "string"
  );
}

function sanitizeIcon(icon: unknown): IconName {
  if (typeof icon === "string" && icon in LucideIcons) {
    return icon as IconName;
  }
  console.warn(`Invalid icon "${icon}", falling back to "CheckCircle"`);
  return "CheckCircle";
}

export function sanitizeServices(raw: any[]): Service[] {
  return raw
    .filter((service) => typeof service === "object" && service !== null)
    .map((service) => {
      const frequencies = Object.fromEntries(
        Object.entries(service.frequencies || {}).filter(([_, value]) =>
          isFrequencyOption(value)
        )
      ) as Record<string, FrequencyOption>;

      // const tasks = Array.isArray(service.tasks)
      //   ? service.tasks.filter(isTaskItem)
      //   : [];
    const tasks: TaskItem[] = Array.isArray(service.tasks)
      ? service.tasks.filter(isTaskItem).map((task: TaskItem) => ({
          ...task,
          icon: sanitizeIcon(task.icon)
        }))
      : [];


      const benefits = Array.isArray(service.benefits)
        ? service.benefits.filter(isBenefitItem)
        : [];

      return {
        name:
          typeof service.name === "string" ? service.name : "Unnamed Service",
        slug:
          typeof service.slug === "string"
            ? service.slug
            : service.name?.toLowerCase().replace(/\s+/g, "-") ?? "unknown",
        description:
          typeof service.description === "string"
            ? service.description
            : "No description available.",
        paragraphs: Array.isArray(service.paragraphs)
          ? service.paragraphs.filter((p: string) => typeof p === "string")
          : [],
        images: Array.isArray(service.images)
          ? service.images.filter((img: string) => typeof img === "string")
          : [],

        tasks,
        frequencies,
        benefits
      };
    });
}

