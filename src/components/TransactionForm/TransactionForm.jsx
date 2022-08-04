import s from './TransactionForm.module.css';

function TransactionForm({
  form,
  handleOpenCategoriesList,
  handleChange,
  addTransaction,
  resetForm,
}) {
  const { date, time, category, summ, currency, comment, transType } = form;
  return (
    <form
      className={s.form}
      onSubmit={e => {
        e.preventDefault();
        addTransaction(form);
        resetForm();
      }}
    >
      <button type="submit">Відправити</button>
      <select name="transType" value={transType} onChange={handleChange}>
        <option value="costs">Витрати</option>
        <option value="incomes">Прибуток</option>
      </select>
      <div className={s.div}>
        <label className={s.day}>
          День
          <input
            onChange={handleChange}
            className={s.inputDay}
            type="date"
            name="date"
            value={date}
          />
        </label>
        <label className={s.time}>
          Час
          <input
            className={s.inputTime}
            onChange={handleChange}
            type="time"
            name="time"
            value={time}
          />
        </label>
      </div>
      <label className={s.category}>
        Категорія
        <input
          className={s.categoryInput}
          onClick={handleOpenCategoriesList}
          type="button"
          name="category"
          value={category}
        />
      </label>
      <label className={s.summa}>
        Сума
        <input
          className={s.summaInput}
          onChange={handleChange}
          type="text"
          name="summ"
          value={summ}
          placeholder="Введіть суму"
        />
      </label>
      <label className={s.valyta}>
        Валюта
        <input
          className={s.valytaInput}
          onChange={handleChange}
          type="button"
          name="currency"
          value={currency}
        />
      </label>
      <label className={s.comment}>
        <input
          className={s.commentInput}
          onChange={handleChange}
          type="text"
          name="comment"
          value={comment}
          placeholder="Коментар"
        />
      </label>
    </form>
  );
}

export default TransactionForm;
