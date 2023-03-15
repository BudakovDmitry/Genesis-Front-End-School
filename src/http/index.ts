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

    const token = await fetch('http://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions').then(res => res.json()).then(value => value.token)

    const res = searchParams
      ? await fetch(`${url}?${new URLSearchParams(searchParams)}`, options)
      : await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
      }
      });

    return res.json();
  } catch (e: any) {
    throw new Error(e);
  }
};



