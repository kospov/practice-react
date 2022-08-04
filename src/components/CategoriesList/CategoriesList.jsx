import { nanoid } from 'nanoid';
import { useContext, useState } from 'react';
import { CategoriesContext } from '../../context/CategoriesProvider';
import s from './CategoriesList.module.css';
import sprite from '../../assets/sprite.svg';

const CategoriesList = ({ transType, setCategories }) => {
  const contextValue = useContext(CategoriesContext);

  const [input, setInput] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    contextValue.addCategory({ title: input, id: nanoid() }, transType);
  };

  const categories = contextValue[transType];

  return (
    <>
      <main>
        <ul className={s.list}>
          {categories.map(({ title, id }) => (
            <li key={id} className={s.item}>
              <p onClick={() => setCategories(title)}>{title}</p>
              <button type="button" className={s.btnInfo}>
                <svg className={s.svg}>
                  <use href={sprite + '#icon-navigation-more'} />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            onChange={handleChange}
            className={s.input}
            type="text"
            name="input"
            placeholder="Нова категорія"
          />
          <button className={s.btnAdd} type="submit">
            <svg width="15" height="15">
              <use href={sprite + '#icon-plus'} />
            </svg>
          </button>
        </form>
      </main>
    </>
  );
};
export default CategoriesList;
