import React, { useState, useEffect } from 'react';
import icon from "./restart.svg";
import fon from "./fon.png";
import '../style/Mortgagecredit.css';
import Modal from '../UI/Modal';
// import { Nameinput } from '../UI/Nameinput';
import '../style/input.css';

export default function Mortgage_credit() {
	let [isModal, setModal] = useState(false);
	let [Stoimost, setS] = useState("2000000");
	let [Procent, setP] = useState("12");
	let [Years, setY] = useState("3");
	let [Contribution, setC] = useState("500000");
	let [X, setX] = useState("");//Eжемесячный платеж
	let Summa = Stoimost - Contribution;// Сумма кредита

	// const [value, setValue] = useState({
	// 	Stoimost: 0,
	// 	Procent: 0,
	// 	Years: 0,
	// 	Contribution: 0,
	// 	Summa: 0
	// });
	useEffect(() => {
		Summa = Stoimost - Contribution;
	});
	function rst() {
		setS(Stoimost = "");
		setP(Procent = "");
		setY(Years = "");
		setC(Contribution = "");
		console.log('Hello');
	}
	//Функция рассчета аннуительного платежа
	function result() {
		let p = (Procent / 12) / 100;//Ставка по кредиту в месяц
		let m = Years * 12;//Срок кредита в месяцах
		let a = Math.pow(1 + p, m); //Вспомогательная переменная
		let k = p * a / (a - 1);//коэффицент аннуитета
		setX((k * Summa).toFixed(2));
		setModal(true)
		// console.log(X.toFixed(2));
	}
	return (
		<div className="wrapper-credit">
			<img className="wrapper-credit__fon" src={fon}
				alt="" />
			<div className="title">
				Калькулятор ипотеки
			</div>
			<div className="form" action="">
				<div className="component-input">
					<div className="component-input__text">
						Стоимость недвижемости
					</div>
					<div className="component-input__block">
						<input className=" block-input" type="text"
							value={Stoimost}
							onChange={event => setS(event.target.value)}
						/>
						<span className="text-end">
							руб.
						</span>
					</div>
				</div>
				<div className="component-input">
					<div className="component-input__text">
						Первоначальный взнос
					</div>
					<div className="component-input__block">
						<input className=" block-input" type="text"
							value={Contribution}
							onChange={event => setC(event.target.value)}
						/>
						<span className="text-end">
							руб.
						</span>
					</div>
				</div>
				<div className="component-input">
					<div className="component-input__text">
						Сумма кредита
					</div>
					<div className="component-input__block additional-style">
						{Summa}
						<span className="text-end">
							руб.
						</span>
					</div>
				</div>
				<div className="component-input">
					<div className="component-input__text">
						Срок кредита
					</div>
					<div className="component-input__block">
						<input className=" block-input" type="text"
							value={Years}
							onChange={event => setY(event.target.value)}
						/>
						<span className="text-end">
							лет
						</span>
					</div>
				</div>
				<div className="component-input">
					<div className="component-input__text">
						Процентная ставка
					</div>
					<div className="component-input__block">
						<input className=" block-input" type="text"
							value={Procent}
							onChange={event => setP(event.target.value)}
						/>
						<span className="text-end">
							%
						</span>
					</div>
				</div>
				{/* <Nameinput value={{ text: 'Стоимость недвижемости', input: true, text_end: 'руб.', inputValue: Stoimost }} />
				<Nameinput value={{ text: 'Первоначальный взнос', input: true, text_end: 'руб.', inputValue: '' }} />
				<Nameinput value={{ text: 'Сумма кредита', input: true, text_end: 'руб.', inputValue: '' }} />
				<Nameinput value={{ text: 'Срок кредита', input: true, text_end: 'лет', inputValue: '' }} />
				<Nameinput value={{ text: 'Процентная ставка', input: true, text_end: '%', inputValue: '' }} /> */}
				<div className="button-block">
					<button className="run" onClick={result}>РАССЧИТАТЬ</button>
					<button className="restart" onClick={rst}>
						<img className="restart__icon" src={icon} alt="" />
					</button>
				</div>

			</div>
			<Modal
				isVisible={isModal}
				title="Eжемесячный платеж будет равен:"
				content={<p>{X} рублей</p>}
				onClose={() => setModal(false)}
			/>
		</div>
	)
}
