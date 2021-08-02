import { useLocation } from 'react-router-dom';

/**
 * get the search params of the current address location
 * @returns object, its key:value are url params and their values
 */
const useQuery = () => {
  const location = useLocation();
  return (new URLSearchParams(location.search));
};

export default useQuery;
export { useQuery };
