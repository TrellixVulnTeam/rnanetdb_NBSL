import { createContext, useReducer } from 'react';

const FORM_SUBMIT = 'FORM_SUBMIT';
const SET_DATA = 'SET_DATA';
const SET_METHODS = "SET_METHODS"

const Store = createContext();

const initialState = {
  formInputsData: {
    sequenceLength: {
      min: '',
      max: '',
    },
    resolution: {
      min: '',
      max: '',
    },
    organism: '',
    method: '',
    releaseDate: {
      min: '',
      max: '',
    }
  },
  organisms: [],
  methods: [],
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'FORM_SUBMIT':
      return { ...state, formInputsData: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    case 'SET_METHODS':
      return { ...state, methods: action.payload };
    default:
      return state;
  }
}

function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

export { Store, StoreProvider };
