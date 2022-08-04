const keys = {
  CATEGORIES: 'categories',
  COSTS: 'costs',
  INCOMES: 'incomes',
  COSTS_CAT: 'costsCategories',
  INCOMES_CAT: 'incomesCategories',
};

const setDataToLS = (key, data) => {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem(key, dataJSON);
};

const getDataFromLS = (key, initialValue) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data) ?? initialValue;
};

const lsApi = { keys, setDataToLS, getDataFromLS };

export default lsApi;
