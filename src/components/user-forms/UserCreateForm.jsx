import { useState } from 'react';
import { USER_ROLES } from '../../constants/useRoles';
import { useCreateForm } from '../../lib/hooks/useCreateForm';
import Button from '../buttons/Button';
import IconButton from '../buttons/IconButton';
import InputText from '../Forms/InputText';
import InputTextAsync from '../Forms/InputTextAsync';
import CrossIcon from '../Icons/CrossIcon';
import InputCheckbox from '../InputCheckbox';
import Select from '../Select';
import style from './UserCreateForm.module.css';

const UserCreateForm = ({ onClose }) => {
  const { name, username, setName, setUsername } = useCreateForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isDisabled =
    !name.value ||
    name.error ||
    !username.value ||
    username.error ||
    username.loading ||
    isSubmitting;

  return (
    <div className={style.wrapper}>
      <IconButton
        className={style.close}
        icon={CrossIcon}
        filled
        onClick={onClose}
      />
      <form
        onSubmit={(ev) =>
          handleSubmit(ev, name, username, setIsSubmitting, onClose)
        }
      >
        <div className={style.row}>
          <InputText
            className={style.input}
            label="Nombre"
            placeholder="Jhon Doe"
            error={name.error}
            value={name.value}
            onChange={(ev) => setName(ev.target.value)}
          />
          <InputTextAsync
            className={style.input}
            label="Username"
            placeholder="jhon doe"
            error={username.error}
            success={username.value && !username.loading && !username.error}
            loading={username.loading}
            name={username.value}
            onChange={(ev) => setUsername(ev.target.value)}
          />
        </div>
        <div className={style.row}>
          <Select name="role">
            <option value={USER_ROLES.TEACHER}>Profesor</option>
            <option value={USER_ROLES.STUDENT}>Alumno</option>
            <option value={USER_ROLES.OTHER}>Otro</option>
          </Select>
          <div className={style.active}>
            <InputCheckbox name="active" />
            <span>¿Activo?</span>
          </div>
          <Button type="submit" disabled={isDisabled}>
            {isSubmitting ? 'Cargando...' : 'Crear usuario'}
          </Button>
        </div>
      </form>
    </div>
  );
};

const handleSubmit = async (ev, name, username, setIsSubmitting, onClose) => {
  ev.preventDefault();
  setIsSubmitting(true);

  const user = {
    id: crypto.randomUUID(),
    name: name.value,
    username: username.value,
    role: ev.target.role.value,
    active: ev.target.active.checked,
  };

  const res = await fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    onClose();
  } else {
    setIsSubmitting(false);
  }
};

export default UserCreateForm;
