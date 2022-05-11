import IconButton from '../buttons/IconButton';
import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages || totalPages === 0;

  return (
    <div className={style.wrapper}>
      <IconButton
        disabled={isFirstPage}
        filled
        icon={ArrowLeftIcon}
        onClick={(ev) => setPage(page - 1)}
      />
      <span>
        Página {page} de {totalPages || 1}
      </span>
      <IconButton
        disabled={isLastPage}
        filled
        icon={ArrowRightIcon}
        onClick={(ev) => setPage(page + 1)}
      />
    </div>
  );
};

export default PageSelector;
