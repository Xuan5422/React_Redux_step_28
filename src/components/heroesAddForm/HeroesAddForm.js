//import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid'
import { heroesAdd } from '../../actions';
import { useDispatch } from 'react-redux';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const dispatch = useDispatch();

    return (
        <Formik initialValues={{
            name: '',
            description: '',
            element: ''
        }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Минимум 3 символа!')
                    .required('Обязательное поле!'),
                description: Yup.string()
                    .min(10, 'Минимум 10 символов!')
                    .required('Обязательное поле!'),
                element: Yup.string()
                    .required('Выбитите элемент стихии!')
            })}
            onSubmit={(values, {resetForm}) => {

                const hero = {
                    id: uuidv4(),
                    name: values.name,
                    description: values.description,
                    element: values.element,
                }
                dispatch(heroesAdd(hero));                
                resetForm({values: ''})
            }}
        >

            <Form className="border p-4 shadow-lg rounded">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field
                        className="form-control"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Как меня зовут?"
                    />
                </div>
                <ErrorMessage className="error" name="name" component="div" />
                <div className="mb-3">
                    <label htmlFor="text" className="form-label fs-4">Описание</label>
                    <Field
                        id="description"
                        name="description"
                        placeholder="Что я умею?"
                        className="form-control"
                        as="textarea"
                        style={{ "height": '130px' }}
                    />
                </div>
                <ErrorMessage className="error" name="text" component="div" />

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field
                        id="element"
                        className="form-select"
                        name="element"
                        as="select">
                        <option >Я владею элементом...</option>
                        <option value="fire">Огонь</option>
                        <option value="water">Вода</option>
                        <option value="wind">Ветер</option>
                        <option value="earth">Земля</option>
                    </Field>
                </div>
                <ErrorMessage className="error" name="element" component="div" />
                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>

    )
}

export default HeroesAddForm;