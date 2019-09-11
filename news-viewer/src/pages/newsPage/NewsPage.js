import React from 'react';
import Categories from '../../components/categories/Categories';
import NewsList from '../../components/newsList/NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
