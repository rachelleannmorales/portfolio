import {
    faAws, faDrupal,
    faGit,
    faJs,
    faLaravel,
    faNodeJs,
    faPhp,
    faReact,
    faSymfony, faVuejs,
    faWordpress
} from "@fortawesome/free-brands-svg-icons";
import TypeScript from '../assets/typescript.svg';
import Jest from '../assets/jest.png';
import Mongodb from '../assets/mongodb.png';
import Postgresql from '../assets/postgresql.png';
import { SkillsItem } from "../components/types/Skills";

export const skillsList: SkillsItem[] = [
    {
        icon: faPhp,
        title: 'PHP'
    },
    {
        image: TypeScript,
        title: 'Typescript'
    },
    {
        icon: faNodeJs,
        title: 'NodeJs'
    },
    {
        icon: faReact,
        title: 'ReactJs'
    },
    {
        icon: faJs,
        title: 'Javascript'
    },
    {
        image: Jest,
        title: 'Jest'
    },
    {
        icon: faLaravel,
        title: 'Laravel'
    },
    {
        icon: faGit,
        title: 'Git'
    },
    {
        icon: faSymfony,
        title: 'Symfony'
    },
    {
        icon: faAws,
        title: 'AWS'
    },
    {
        image: Mongodb,
        title: 'MongoDb'
    },
    {
        image: Postgresql,
        title: 'Postgresql'
    },
    {
        icon: faWordpress,
        title: 'Wordpress'
    },
    {
        icon: faDrupal,
        title: 'Drupal'
    },
    {
        icon: faVuejs,
        title: 'VueJs'
    },
];