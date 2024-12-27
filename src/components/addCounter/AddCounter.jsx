import './AddCounter.scss';

export default function AddCounter({handleDecrement, handleIncrement, count}) {
    return (
        <div className='addCounter'>
            <button className='decrement' onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button className='increment' onClick={handleIncrement}>+</button>
        </div>
    );
}
