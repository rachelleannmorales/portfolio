import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SkillsProps {
    isMobile:boolean;
}

interface SkillsItem{
    icon?: IconDefinition,
    image?: string,
    title: string
}

export type {SkillsProps, SkillsItem}