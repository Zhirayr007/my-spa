import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import '../style/Exchangerate.css';

function Exchange_rate() {
	let [numbre_one, state_one] = useState('6000');
	let [numbre_two, state_two] = useState('');
	const [ValutEUR, setValutEUR] = useState();
	const [ValutUSD, setValutUSD] = useState();
	const [ValutCNY, setValutCNY] = useState();
	let select = document.querySelector('#select2');
	// Функция конвертации
	function convertValue() {
		if (select.value == 'EUR') {
			state_two((parseFloat(numbre_one) / ValutUSD).toFixed(2));
		}
		else if (select.value == 'USD') {
			state_two((parseFloat(numbre_one) / ValutEUR).toFixed(2));
		}
		else if (select.value == 'CNY') {
			state_two((parseFloat(numbre_one) / ValutCNY).toFixed(2));
		}
		else {
			state_two('ozon');
		}
		console.log(numbre_two);
	}
	// Функция получения курса валют и отображения их на странице
	async function getCurrencies() {
		const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
		setValutUSD(response.data.Valute.USD.Value);
		setValutEUR(response.data.Valute.EUR.Value);
		setValutCNY(response.data.Valute.CNY.Value);
	}
	getCurrencies();
	// let numbre_two = convertValue();

	return (
		<div className="wrapper">
			<div className="title">
				Калькулятор конвертации валюты
			</div>
			<div className="block">
				<div className="block__input">
					<span> Ввудите сумму для перевода</span>
					<div className="onwrite">
						<input className="input-valute" type="text" id="input" name="many" value={numbre_one}
							onChange={event => state_one(event.target.value)}
						/>
						<div className="onwrite__text">
							RUB - Российский рубль
						</div>
					</div>
					<span> Результат</span>
					<div className="outwrite">
						<input className="input-valute" type="text" id="result" name="many_result" value={numbre_two} />
						<select name="" id="select2" onChange={convertValue}>
							<option value="USD">USD - Доллар США</option>
							<option value="EUR">EUR - Евро</option>
							<option value="CNY">CNY - Китайских юаней</option>
						</select>
					</div>
				</div>
			</div>
		</div >
	);
}

export default Exchange_rate;
