const SearchForm = ({ onChange, searchValue, ...props }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Character name"
          value={searchValue}
          onChange={onChange}
        />
      </form>
    </>
  );
};

export default SearchForm;
