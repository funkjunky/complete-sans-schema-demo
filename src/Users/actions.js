import { flatten } from '../configured-sans-schema';
import sampleUsers from './sampleUsers';
import { loadNormalized } from '../reducer';

export const loadUsers = () => dispatch =>
    setTimeout(() => {
        const normalizedData = flatten('users')(sampleUsers);
        dispatch(loadNormalized(normalizedData))
    }, 500);
