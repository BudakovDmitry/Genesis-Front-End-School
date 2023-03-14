import * as api from 'src/http/index';
import { API } from 'src/utils/constants';
import { getHeaders } from 'src/utils/helpers';

export const get = async <T>(
  endpoint: string,
  searchParams: Record<string, string>
): Promise<T> =>
  api.get(API + endpoint, searchParams, {
    headers: await getHeaders(),
  });

