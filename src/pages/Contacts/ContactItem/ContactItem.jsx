import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';

import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { getLoading } from 'redux/Contacts/selectors';
import { editContactAction } from 'redux/Contacts/slice';

import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ContactItem = ({ name, number, id }) => {
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  const onClickEdit = () => {
    dispatch(editContactAction({ name, number, id }));
  };

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <div className={s.group}>
        <p className={s.name}>{name}:</p>
        <p>{number}</p>

        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label="delete"
            type="button"
            className={s.button}
            onClick={onDelete}
            disabled={loading}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            type="button"
            className={s.button}
            disabled={loading}
            onClick={onClickEdit}
          >
            <EditIcon />
          </IconButton>
        </Stack>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
