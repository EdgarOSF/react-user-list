import InputCheckbox from './InputCheckbox';
import InputSearch from './Forms/InputSearch';
import style from './UserListFilter.module.css';
import Select from './Select';
import { SORT_OPTIONS } from '../constants/sortOptions';

const UserListFilter = ({
  search,
  onlyActive,
  sortBy,
  setSearch,
  setOnlyActive,
  setSortBy,
  slot,
}) => {
  return (
    <div className={style.form}>
      <div className={style.row}>
        <InputSearch
          placeholder="Buscar..."
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <Select
          value={sortBy}
          onChange={(ev) => setSortBy(Number(ev.target.value))}
        >
          <option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
          <option value={SORT_OPTIONS.NAME}>Por nombre</option>
          <option value={SORT_OPTIONS.ROLE}>Por rol</option>
          {!onlyActive && (
            <option value={SORT_OPTIONS.ACTIVE}>Por activos</option>
          )}
        </Select>
      </div>
      <div className={style.row}>
        <div className={style.active}>
          <InputCheckbox
            className={style.checkbox}
            checked={onlyActive}
            onChange={(e) => setOnlyActive(e.target.checked)}
          />
          <label>Mostrar solo activos</label>
        </div>
        {slot}
      </div>
    </div>
  );
};

export default UserListFilter;
