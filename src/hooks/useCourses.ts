import { API } from 'src/utils/constants';
import { Endpoints } from 'src/utils/endpoints';
import useSWR from 'swr';

export const useCourses = (searchParams: string = '') => {
  const {
    data: courses,
    mutate,
    error
  } = useSWR(() => API + Endpoints.COURSES);

  return { courses, mutate, error };
};