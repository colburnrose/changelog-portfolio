import {Social} from './social.interface';
import {ChangeLog} from './changelog.interface';
import {Updates} from './updates.interface';
// tslint:disable-next-line:no-empty-interface
export interface Portfolio {
    firstName: string;
    lastName: string;
    socialMedia: Social[];
    description: string;
    changeLog: ChangeLog[];
    bioDescription: string;
    updates: Updates[];
}
