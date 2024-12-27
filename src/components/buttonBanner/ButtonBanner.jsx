import './ButtonBanner.scss'

export default function ButtonBanner({title, submitted, onClick}) {
    return (
        <button type='submit'
            onClick={onClick}
            className={`ButtonBanner ${submitted && 'submitted'}`}
        >
            {title}
        </button>
    );
}
