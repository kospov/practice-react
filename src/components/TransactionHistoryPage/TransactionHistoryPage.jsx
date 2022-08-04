import Header from '../Header/Header';
import sprite from '../../assets/sprite.svg';
import s from './TransactionHistoryPage.module.css';

const TransactionHistoryPage = ({ transType, onReturnBtnClick, transactions }) => {
  const transactionName = transType === 'costs' ? 'Costs' : 'Incomes';
  const cbOnClick = () => {
    onReturnBtnClick('main');
  };
  // const { date, time, category, summ, currency, comment, transType } = form;
  return (
    <div className="container">
      <Header
        title={`Transaction  ${transactionName}`}
        icon={'#icon-arrow-left'}
        cbOnClick={cbOnClick}
      />
      <ul className={s.list}>
        {transactions.map((el, idx) => (
          <li key={idx} className={s.item}>
            <div>
              <p>
                {el.date}
                <span className={s.span}> {el.time} </span>
              </p>
              <p className={s.comment}>{el.comment} </p>
            </div>

            <div className={s.right}>
              <div className={s.rightBlock}>
                <p className={s.summ}>{el.summ} </p>
                <p className={s.currency}>{el.currency} </p>
              </div>
              <button type="button" className={s.btnInfo}>
                <svg className={s.svg}>
                  <use href={sprite + '#icon-navigation-more'} />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;
