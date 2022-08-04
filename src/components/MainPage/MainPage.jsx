import TransactionForm from '../TransactionForm/TransactionForm';
import CategoriesList from '../CategoriesList/CategoriesList';
import Header from '../Header/Header';
import s from './MainPage.module.css';
import { Component } from 'react';

const initialForm = {
  date: '2022-07-28',
  time: '14:14',
  summ: '',
  currency: 'UAH',
  comment: '',
  transType: 'costs',
};

class MainPage extends Component {
  state = {
    category: 'Різне',
    isCategoriesList: false,
    ...initialForm,
  };
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const currentCategories = nextProps.categories[prevState.transType];
  //   if (currentCategories.length && !prevState.category) {
  //     return { category: currentCategories[0].title };
  //   }
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.transType !== this.state.transType) {
      const title = this.props.categories[this.state.transType][0].title;
      this.setState({ category: title });
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setCategories = category => {
    this.setState({ category });
    this.handleCloseCategoriesList();
  };

  handleOpenCategoriesList = () => {
    this.setState({ isCategoriesList: true });
  };
  handleCloseCategoriesList = () => {
    this.setState({ isCategoriesList: false });
  };

  resetForm = () => {
    this.setState(initialForm);
  };

  render() {
    console.log('main page', this.props.categories);

    const { onOpenPage, addTransaction } = this.props;
    const { isCategoriesList, ...form } = this.state;
    return (
      <div className="container">
        <Header
          title={isCategoriesList ? ' Категорії ' : 'Журнал витрат'}
          icon={isCategoriesList ? '#icon-arrow-left' : null}
          cbOnClick={this.handleCloseCategoriesList}
        />
        <main className={s.main}>
          {isCategoriesList ? (
            <CategoriesList
              setCategories={this.setCategories}
              transType={this.state.transType}
            />
          ) : (
            <>
              <TransactionForm
                handleChange={this.handleChange}
                form={form}
                handleOpenCategoriesList={this.handleOpenCategoriesList}
                addTransaction={addTransaction}
                resetForm={this.resetForm}
              />
              <div className={s.blockBtn}>
                <button className={s.costs} onClick={() => onOpenPage('costs')}>
                  Всі витрати
                </button>
                <button
                  className={s.incomes}
                  onClick={() => onOpenPage('incomes')}
                >
                  Всі прибутки
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    );
  }
}
export default MainPage;
