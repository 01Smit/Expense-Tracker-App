import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import { styled } from 'styled-components'
import { useGlobalContext } from '../../Context/GlobalContext'

const Form = () => {

    const {addIncomes} = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        descrption: ''
    })

    const categories = [{ id: 1, value: 'Salary' }, { id: 2, value: 'Freelancing' }, { id: 3, value: 'Investments' } , { id: 4, value: 'Stocks' }, { id: 5, value: 'Bank Transfers' }, { id: 6, value: 'Cigarettes' }, { id: 7, value: 'Others' }];

    const { title, amount, date, category, descrption } = inputState

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addIncomes(inputState);
    }

    return (
        <FormStyled onSubmit={() => handleSubmit}>
            <div className="input-control">
                <input type="text" value={title} name={title} id='title' placeholder='Salary Title' onChange={handleInput('title')} />
            </div>
            <div className="input-control">
                <input type="text" value={amount} name={amount} id='amount' placeholder='Salary Amount' onChange={handleInput('amount')} />
            </div>
            {/* <div className="input-control"> */}
                {/* below code was in the video */}
                {/* <ReactDatePicker id='date' placeholderText='Enter A Date' selected={date} dateFormat='dd/mm/yyyy' onChange={(date) => {setInputState(...inputState, date: date)}} />       */}
                {/* this is my version of code */}
                {/* <ReactDatePicker id='date' placeholderText='Enter A Date' selected={date} dateFormat='dd/mm/yyyy' onChange={handleInput('date')} /> */}
            {/* </div> */}
            <div className="select input-control">
                <select required name="category" id="category"  onChange={handleInput('category')}>
                    <option value="" selected disabled>Select Option</option>
                    {categories.map((category) => {
                        return (
                            <option value={category.value} key={category.id}>{category.value}</option>
                        )
                    })}
                </select>
            </div>
            <div className="submit-btn">
                <button type="submit">Add Income</button>
            </div>
        </FormStyled>
    )
}

const FormStyled = styled.form`
    display: grid
`;


export default Form