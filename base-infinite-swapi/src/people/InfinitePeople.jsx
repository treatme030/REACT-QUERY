import InfiniteScroll from 'react-infinite-scroller';
import { useInfiniteQuery } from 'react-query';

import Person from './Person';

const initialUrl = 'https://swapi.dev/api/people/';
const fetchUrl = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const InfinitePeople = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    'sw-people',
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    { getNextPageParam: (lastPage) => lastPage.next || undefined }
  );

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.toString()}</div>;
  }
  return (
    <>
      {isFetching && <div className='loading'>Loading...</div>}
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {data.pages.map((pageData) =>
          pageData.results.map((person) => (
            <Person key={person.name} person={person} />
          ))
        )}
      </InfiniteScroll>
    </>
  );
};

export default InfinitePeople;
