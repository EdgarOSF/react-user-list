import CheckIcon from './CheckIcon';
import style from './InputCheckbox.module.css';

const InputCheckbox = ({className, ...props}) => {
  return (
    <label className={`${style.label} ${className || ''}`}>
      <input className={style.input} {...props} type="checkbox" />
      <CheckIcon className={style.check} />
    </label>
  );
};

export default InputCheckbox;
