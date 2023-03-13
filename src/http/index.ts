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
      : await fetch(url);

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};



