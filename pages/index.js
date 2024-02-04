import { useEffect, useState } from 'react';
import { fetchData } from '../lib/api';
import ProvidersWidget from '../components/ProvidersWidget';
import LoadingIcon from '../components/icons/Loading';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      <h1 className="hidden">Service Providers</h1>
      {loading ? (
        <LoadingIcon />
      ) : (
        <ProvidersWidget providers={data} />
      )}
    </div>
  );
};

export default Home;