import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { UserContext } from '../../../Providers/UserContext/UserContext';

const SearchForm = () => {
  const { setFilteredProducts, searchValue, setSearchValue } =
    useContext(UserContext);

  const submit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFilteredProducts(searchValue);
    setSearchValue('');
  };

  return (
    <StyledSearchForm onSubmit={submit}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
