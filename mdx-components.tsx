import { IconCard } from "@/components/mdx/icon-card";
import { Mermaid } from "@/components/mdx/mermaid";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import {
  Activity,
  Ban,
  BarChart3,
  BookOpen,
  Bot,
  BrainCog,
  Check,
  CirclePlay,
  Cloud,
  Cpu,
  EyeOff,
  GitMerge,
  Lock,
  Rocket,
  Server,
  Settings,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { SiPython, SiTypescript } from "react-icons/si";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Mermaid,
    IconCard,
    // Lucide icons
    Shield,
    BookOpen,
    BrainCog,
    CirclePlay,
    Ban,
    Lock,
    Zap,
    GitMerge,
    BarChart3,
    Rocket,
    Settings,
    Cloud,
    Workflow,
    Cpu,
    Server,
    Bot,
    Activity,
    Check,
    EyeOff,
    TypeScriptIcon: SiTypescript,
    PythonIcon: SiPython,
    img: (props) => <ImageZoom {...(props as any)} />,
    ...TabsComponents,
    ...components,
  };
}
