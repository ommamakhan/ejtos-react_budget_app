import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';

import ExpenseList from './components/ExpenseList';

import ExpenseTotal from './components/ExpenseTotal';

import ExpenseItem from './components/ExpenseItem';

import AllocationForm from './components/AllocationForm';

import Remaining from './components/Remaining';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under




const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>


                    <div className='col-sm'>
                        <Remaining />
                    </div>

                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>

                    <h3 className='mt-3'>Allocation</h3>
                    <div className='col-12'>
                        <ExpenseList />
                    </div>

                    <div className='row'>
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    </div>
                    <h3 className='mt-3'>Change allocation</h3>
                    <div className='col-9'>
                        <AllocationForm />
                    </div>

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
