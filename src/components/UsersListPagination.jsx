import IconButton from './buttons/IconButton';
import Select from './Select';
import style from './UsersListPagination.module.css';
import SearchIcon from './icons/SearchIcon';
import PageSelector from './Forms/PageSelector';

const UsersListPagination = ({
  totalPages,
  page,
  itemsPerPage,
  setPage,
  setItemsPerPage,
}) => (
  <div className={style.wrapper}>
    <div className={style.itemsPerPage}>
      <Select
        value={itemsPerPage}
        onChange={(ev) => {
          setItemsPerPage(Number(ev.target.value));
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </Select>
      <p>Elementos por pagina</p>
    </div>
    <PageSelector page={page} totalPages={totalPages} setPage={setPage} />
    {/* <IconButton disabled icon={SearchIcon} /> */}
  </div>
);

export default UsersListPagination;
