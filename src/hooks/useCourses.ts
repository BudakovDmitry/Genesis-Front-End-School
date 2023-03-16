import { API } from 'src/utils/constants';
import { Endpoints } from 'src/utils/endpoints';
import useSWR from 'swr';

export const useCourses = (searchParams: string = '') => {
  const {
    data,
    isLoading,
    error
  } = useSWR(() => `${API}${Endpoints.COURSES}${searchParams}`);

  return { data, isLoading, error };
};