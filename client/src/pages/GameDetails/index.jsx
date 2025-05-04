import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GameDetails.module.css';
import db from '../../json/db.json';
import { MdOutlineGrade } from 'react-icons/md';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { IoPeopleSharp } from 'react-icons/io5';
import Button from '../../components/Button';

function GameDetails() {
    const { id } = useParams();
    const boardGame = db.find((game) => game.gameId === Number(id));
    const imgUrl = boardGame.image;
    const audio = new Audio('/audios/coins.mp3');

    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');
    const [totalDays, setTotalDays] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const minDate = new Date(today.setDate(today.getDate() + 7));
        const minDateString = `${minDate.getFullYear()}-${String(
            minDate.getMonth() + 1
        ).padStart(2, '0')}-${String(minDate.getDate()).padStart(2, '0')}`;
        const maxDate = new Date(today.setDate(today.getDate() + 30));
        const maxDateString = `${maxDate.getFullYear()}-${String(
            maxDate.getMonth() + 1
        ).padStart(2, '0')}-${String(maxDate.getDate()).padStart(2, '0')}`;
        setMinDate(minDateString);
        setMaxDate(maxDateString);
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const timeDiff = end.getTime() - start.getTime();
            const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            setTotalDays(dayDiff);
        }
    }, [minDate, maxDate, startDate, endDate]);

    return (
        <>
            <section className={styles.gameDetails}>
                <div className={styles.boxRent}>
                    <div className={styles.imgAndInfos}>
                        <img src={imgUrl} alt={id} />
                        <div className={styles.priceInfos}>
                            <h2>{boardGame.name}</h2>
                            <div className={styles.priceAndRate}>
                                <h3>Apenas R${boardGame.rentalPrice} / dia </h3>
                                <h2>
                                    <MdOutlineGrade />
                                    {boardGame.averageRating.toFixed(2)} / 10
                                </h2>
                            </div>
                            <h2>
                                {boardGame.isExpansion
                                    ? 'Expansão (DLC)'
                                    : 'Não é uma expansão (DLC)'}
                            </h2>
                            <h2>
                                <CiCircleMinus /> Mínimo de jogadores:{' '}
                                {boardGame.minPlayers}
                            </h2>
                            <h2>
                                <CiCirclePlus /> Máximo de jogadores:{' '}
                                {boardGame.maxPlayers}
                            </h2>
                            <h2>
                                <IoPeopleSharp /> Tempo de duração médio:{' '}
                                {boardGame.playingTime}
                            </h2>
                        </div>
                    </div>
                    <div className={styles.rentArea}>
                        <form>
                            <div className={styles.FormDiv}>
                                <label htmlFor='start'>Data inicial:</label>
                                <input
                                    required={true}
                                    type='date'
                                    name='start-datetime'
                                    min={minDate}
                                    max={maxDate}
                                    value={startDate}
                                    onChange={(e) =>
                                        setStartDate(e.target.value)
                                    }
                                />
                            </div>
                            <div className={styles.FormDiv}>
                                <label htmlFor='end'>Data final:</label>
                                <input
                                    required={true}
                                    type='date'
                                    name='end-datetime'
                                    min={minDate}
                                    max={maxDate}
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                            <div className={styles.FormDiv}>
                                <label htmlFor='total'>Total:</label>
                                <h2>
                                    R${' '}
                                    {(
                                        (totalDays + 1) *
                                        boardGame.rentalPrice
                                    ).toFixed(2)}
                                </h2>
                                <Button
                                    type='submit'
                                    onClick={() => audio.play()}>
                                    Alugar
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.description}>
                        <h2>Descrição</h2>
                        <p>{boardGame.description}</p>
                    </div>
                    <div className={styles.categories}>
                        <h2>Categorias</h2>
                        <ul>
                            {boardGame.categories.map((category) => (
                                <li key={category}>{category}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.rules}>
                        <h2>Regras</h2>
                        <p>{boardGame.rules}</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GameDetails;
