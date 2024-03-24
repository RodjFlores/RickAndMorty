import { Character } from './Character';
import { Episode } from './Episode';

export interface Paginator {
  items: any[];
  page: number;
  hasMorePages: boolean;
}
