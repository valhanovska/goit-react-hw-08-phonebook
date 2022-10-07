import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={handleFilter}
          value={filter}
          type="text"
          name="filter"
          title="Find contacts by name"
        />
      </label>
    </div>
  );
};

export default Filter;
