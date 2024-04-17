import { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface Medicine {
  id: string;
  name: string;
  published_at: string;
  company: string;
}

interface ApiContextProps {
  medicines: Medicine[];
  loading: boolean;
}

const ApiContext = createContext<ApiContextProps>({
  medicines: [],
  loading: true,
});

interface ApiProviderProps {
  children: ReactNode;
}

const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Medicine[]>('http://localhost:3000/data');
        setMedicines(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <ApiContext.Provider value={{ medicines, loading }}>
      {children}
    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider };
