import InputCheckbox from './InputCheckbox';
import InputSearch from './Forms/InputSearch';
import style from './UserListFilter.module.css';
import Select from './Select';

const UserListFilter = ({
  search,
  onlyActive,
  sortBy,
  setSearch,
  setOnlyActive,
  setSortBy,
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
          <option value={0}>Por defecto</option>
          <option value={1}>Por nombre</option>
          <option value={2}>Por rol</option>
          {!onlyActive && <option value={3}>Por activos</option>}
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
      </div>
    </div>
  );
};

export default UserListFilter;
