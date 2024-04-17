import React from "react";

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const[data, setData] = React.useState<T | null>(null);
  const[loading, setLoading] = React.useState(false);
  const[erro, setErro] = React.useState<string | null>(null);
  const optionRef = React.useRef(options);
  optionRef.current  = options;

  React.useEffect(()=> {
    const controller = new AbortController();
    const {signal} = controller;

    const fetchData = async ()=> {
      try {
        setLoading(true);
        setErro(null);
        setData(null);

        const response = await fetch(url, {
          signal,
          ...optionRef.current
        });
        if(!response.ok) throw new Error(`${response.json()}`);

        const json = await response.json();
        if(!signal.aborted) setData(json);
      }
      catch(erro) {
        if(signal.aborted && erro instanceof Error) setErro(erro.message);
      }
      finally {
        if(!signal.aborted) setLoading(false);
      }
    }

    fetchData();

    return ()=> controller.abort();
  }, [url]);

  return {data, loading, erro};
}

export default useFetch;