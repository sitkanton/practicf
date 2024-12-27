import './Title.scss';

export default function Title({title, subtitle, disabled, onClick}) {
    return (
        <div className="Title">
            <h2>{title}</h2>
            {subtitle && (
                <div>
                    <div className="line"/>
                    {subtitle && (
                        <div
                            className={`subtitle ${disabled && 'disabled'}`}
                            onClick={onClick}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
