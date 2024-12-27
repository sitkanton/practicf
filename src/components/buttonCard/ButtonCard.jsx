import './ButtonCard.scss'

export default function ButtonCard({title, added, onClick}) {
    return (
        <button
            onClick={onClick}
            className={`ButtonCard ${added && 'added'}`}
        >
            {title}
        </button>
    );
}
