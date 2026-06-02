import {animal} from './sounds/animal';
import {nature} from './sounds/nature';
import {human} from './sounds/human';
import {thing} from './sounds/thing';
import {reaction} from './sounds/reaction';

export const sounds = [
    ...animal,
    ...nature,
    ...human,
    ...thing,
    ...reaction,
];
