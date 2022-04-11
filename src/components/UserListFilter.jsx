import style from './UserListFilter.module.css';

const UserListFilter = ({
  search,
  onlyActive,
  sortBy,
  setSearch,
  setOnlyActive,
  setSortBy,
}) => {
  return (
    <form className={style.form}>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <div className={style.active}>
        <input
          type="checkbox"
          name="active"
          checked={onlyActive}
          onChange={(e) => {
            setOnlyActive(e.target.checked);
          }}
        />
        <label>Activo</label>
      </div>
      <select
        value={sortBy}
        onChange={(ev) => setSortBy(Number(ev.target.value))}
      >
        <option value={0}>Por defecto</option>
        <option value={1}>Por nombre</option>
      </select>
    </form>
  );
};

export default UserListFilter;
