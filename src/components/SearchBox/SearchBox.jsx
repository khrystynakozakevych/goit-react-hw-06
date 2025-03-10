import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search_container}>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default SearchBox;
