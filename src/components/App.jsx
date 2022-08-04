import { useState, useEffect } from 'react';
import lsApi from '../utils/localStorage';
import MainPage from './MainPage/MainPage';
import TransactionHistoryPage from './TransactionHistoryPage/TransactionHistoryPage';

export const App = () => {
  const [activePage, setActivePage] = useState('main');

  const [costs, setCosts] = useState(() =>
    lsApi.getDataFromLS(lsApi.keys.COSTS, [])
  );
  const [incomes, setIncomes] = useState(() =>
    lsApi.getDataFromLS(lsApi.keys.INCOMES, [])
  );

  const onOpenPage = activePage => {
    setActivePage(activePage);
  };

  const addTransaction = transaction => {
    const { transType } = transaction;

    transType === 'costs' && setCosts(prev => [...prev, transaction]);
    transType === 'incomes' && setIncomes(prev => [...prev, transaction]);
  };

  // useEffect(
  //   () => lsApi.setDataToLS(lsApi.keys.COSTS_CAT, costsCategories),
  //   [costsCategories]
  // );
  // useEffect(
  //   () => lsApi.setDataToLS(lsApi.keys.INCOMES_CAT, incomesCategories),
  //   [incomesCategories]
  // );
  useEffect(() => lsApi.setDataToLS(lsApi.keys.COSTS, costs), [costs]);
  useEffect(() => lsApi.setDataToLS(lsApi.keys.INCOMES, incomes), [incomes]);

  switch (activePage) {
    case 'main':
      return (
        <MainPage onOpenPage={onOpenPage} addTransaction={addTransaction} />
      );
    case 'costs':
      return (
        <TransactionHistoryPage
          transactions={costs}
          transType={activePage}
          onReturnBtnClick={onOpenPage}
        />
      );
    case 'incomes':
      return (
        <TransactionHistoryPage
          transactions={incomes}
          transType={activePage}
          onReturnBtnClick={onOpenPage}
        />
      );
    default:
      return;
  }
};
