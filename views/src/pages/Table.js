import axios from 'axios';
import React, { useCallback, useContext, useEffect } from 'react'
import TabsList from '../components/Tabs/TabsList'
import { getQueryString } from '../utils/queryStringGenerator';
import { Store } from '../utils/store';
import { getBaseUrl } from '../utils/url';

function Table() {
  const base_url = getBaseUrl();
  const { state: { formInputsData }, dispatch } = useContext(Store);

  const fetchDataBaseOnFormInputsData = useCallback(async () => {
    try {
      const queryString = getQueryString(formInputsData)
      const { data } = await axios.get(`${base_url}/structures?${queryString}`)
      dispatch({ type: 'SET_DATA', payload: data })
    } catch (error) {
      console.log(error);
    }
  }, [base_url, formInputsData]);


  useEffect(() => {
    fetchDataBaseOnFormInputsData();
  }, [fetchDataBaseOnFormInputsData])

  return (
    <>
      <TabsList/>
    </>
  )
}

export default Table