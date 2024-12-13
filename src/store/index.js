export const initialState = {
  categories: {},
};

export const textReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TEXT': {
      const { category, text, amount } = action.payload;
      const categoryData = state.categories[category] || { total: 0, items: [] };
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: {
            total: categoryData.total + amount,
            items: [...categoryData.items, { text, amount }],
          },
        },
      };
    }
    case 'REMOVE_TEXT': {
      const { category, index } = action.payload;
      const categoryData = state.categories[category];
      const updatedItems = categoryData.items.filter((_, i) => i !== index);
      const updatedTotal = updatedItems.reduce((sum, item) => sum + item.amount, 0);
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]: { total: updatedTotal, items: updatedItems },
        },
      };
    }
    default:
      throw new Error('Action type not recognized');
  }
};
