// pages/index.js
import { useEffect, useState } from 'react';
import { fetchData } from '../lib/api';
import ProviderSearch from '../components/ProviderSearch';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      setData(result);
      setLoading(false);
      console.log('fetchData', result)
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1 className="hidden">Service Providers</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ProviderSearch providers={data} />
      )}
    </div>
  );
};

export default Home;