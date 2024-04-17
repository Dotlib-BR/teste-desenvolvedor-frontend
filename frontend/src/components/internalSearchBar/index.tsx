import SearchIcon from '@mui/icons-material/Search';
import { useContext, useEffect, useRef, useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { SearchContext } from '@/contexts/searchContext';
import { useApi } from '@/hooks/useApi';

export const InternalSearchBar = ({
  placeholder,
}: {
  placeholder: string;
}): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

  const [search, setsearch] = useState<string>('');

  const [iconColor, setIconColor] = useState<string>('gray');

  const { searchType, setInputValue, setData, setPage } =
    useContext(SearchContext);

  const fetchData = useApi();

  function focusin() {
    containerRef.current.style.borderColor = '#1875D0';
    setIconColor('#1875D0');
  }

  function focusout() {
    containerRef.current.style.borderColor = 'gray';
    setIconColor('gray');
  }

  async function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (event.key == 'Enter') {
      setInputValue(search);
      try {
        const result = await fetchData({
          searchType,
          searchValue: search,
        });
        setData(result);
        setPage(1);
      } catch (error) {
        setData(null);
      }
    }
  }

  useEffect(() => {
    const currentRef = inputRef.current;
    currentRef.addEventListener('focusin', focusin);
    currentRef.addEventListener('focusout', focusout);

    return () => {
      currentRef.removeEventListener('focusin', focusin);
      currentRef.removeEventListener('focusout', focusout);
    };
  }, []);

  return (
    <Search ref={containerRef}>
      <SearchIconWrapper>
        <SearchIcon htmlColor={iconColor} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={`Nome ${placeholder}`}
        inputProps={{ 'aria-label': 'search' }}
        ref={inputRef}
        value={search}
        onKeyDown={handleKeyDown}
        onChange={(event) => setsearch(event.currentTarget.value)}
      />
    </Search>
  );
};
