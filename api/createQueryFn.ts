
interface ICreateQueryFn {
  queryFn: () => Promise<Response | null>,
}

async function createQueryFn<T,>({ queryFn }: ICreateQueryFn) {
  const response = await queryFn();
  if (!response?.ok) {
    return Promise.reject(new Error(`HTTP error! status: ${response?.status}`))
  }
  const data: T = await response.json();

  return data;
};

export default createQueryFn;