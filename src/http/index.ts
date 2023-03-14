export const get = async <T>(
  url: string,
  searchParams?: Record<string, string>,
  config: object = {}
): Promise<T> => {
  const options = {
    method: 'GET',
    ...config
  };

  try {
    const res = searchParams
      ? await fetch(`${url}?${new URLSearchParams(searchParams)}`, options)
      : await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Vary': 'Origin',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTJkM2YzZS00ZWJiLTQ2YjItYTNlMC1kNTdlOGEyZmEyMzIiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3NDk0NzksImV4cCI6MTY3OTY0OTQ3OX0.zi-CTpfhTkjGtScdLyr2ZPSWTwBTS26tGZW7IXoIqO8'
      }
      });

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};



