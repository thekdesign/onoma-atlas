import {sounds} from 'data/sounds';
import {mockResponse} from 'apis/base';

export const getSoundList = () => mockResponse(sounds);

export const getSoundById = (id) => mockResponse(sounds.find((s) => s.id === id));
