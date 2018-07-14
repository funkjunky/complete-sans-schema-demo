import { flatten } from '../configured-sans-schema';
import sampleUsers from './sampleUsers';
import { loadNormalized } from '../reducer';

export const loadUsers = () => dispatch =>
    setTimeout(() => {
        const normalizedData = flatten('users')(sampleUsers);
        console.log('normalized: ', normalizedData);
        dispatch(loadNormalized(normalizedData))
    }, 500);
