import styles from './Button.module.css';

type ButtonProps = {
    text: string;
    isActive: boolean;
    handleClick: () => void;
    position: string;
};

export default function Button({ isActive, handleClick, text, position }: ButtonProps) {
    return (
        <>
            {position === 'header' &&
                <button
                    onClick={handleClick}
                    className={isActive ? `${styles.button_header} ${styles.active}` : styles.button_header}
                >
                    {text}
                </button>
            }
            {position === 'footer' &&
                <button
                    onClick={handleClick}
                    className={isActive ? `${styles.button_footer} ${styles.active}` : styles.button_footer}
                >
                    {text}
                </button>
            }
            {['zaun', 'piltover', 'noxus'].includes(position) &&
                <button
                    onClick={handleClick}
                    className={isActive ? `${styles.button_city} ${styles.city_active}` : styles.button_city}
                >
                    {text}
                </button>
            }
        </>
    );
}