import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/Contacts/filterSlice';

import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const handleFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        onChange={handleFilter}
        value={filter}
        type="text"
        name="filter"
        title="Find contacts by name"
        id="filter"
      />
    </div>
  );
};

export default Filter;
