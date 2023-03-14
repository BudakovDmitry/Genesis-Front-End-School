import * as api from 'src/http/index';
import { API } from 'src/utils/constants';
import { getHeaders } from 'src/utils/helpers';

export const get = async <T>(
  endpoint: string,
  searchParams: Record<string, string>
): Promise<T> =>
  api.get(API + endpoint, searchParams, {
    headers: await getHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTJkM2YzZS00ZWJiLTQ2YjItYTNlMC1kNTdlOGEyZmEyMzIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NDk0NzksImV4cCI6MTY3OTY0OTQ3OX0.zi-CTpfhTkjGtScdLyr2ZPSWTwBTS26tGZW7IXoIqO8'
  }),
  });

