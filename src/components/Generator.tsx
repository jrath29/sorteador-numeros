import React, { useState } from "react";
import style from './Generator.module.css'
import { useForm } from 'react-hook-form';


export default function Generator(){

    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const { handleSubmit } = useForm();

    const handleGenerate = () => {
        const newRandomNumber = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        setRandomNumber(newRandomNumber);
    };

    const onSubmit = () => {
        handleGenerate();
    };

    return(
    <div className={style.container}>
        <div className={style.content}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={style.label}>Mínimo</label>
                <input type="number" className={style.input} name="min" onChange={(e) => setMin(e.target.value)} required/>

                <label className={style.label}>Máximo</label>
                <input type="number" className={style.input}  name="max" onChange={(e) => setMax(e.target.value)} required/> <br/> <br/>
                    
                <button className={style.button}>Sortear</button>
            </form>
        </div>

        <div className={style.numberContainer}>
            <div className={style.numberContent}>
                <h1 className={style.number}>{randomNumber !== null ? randomNumber : ''}</h1>
            </div>
        </div>
    </div>
    )
}
