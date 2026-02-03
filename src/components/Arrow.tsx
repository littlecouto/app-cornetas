type ArrowProps = {
    left?: boolean;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
}

function Arrow(props: ArrowProps) {
    const {disabled = false, left = false} = props

    return (
        <>
            <button
                className={props.className}
                onClick={props.onClick}
                disabled={disabled}
            >
                <span
                    style={{
                        color: '#CCCCCC',
                        fill: '#CCCCCC'
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 129 129"
                        fill={!disabled ? "#3b66ef" : undefined}
                        style={{
                            height: ".7em",
                            fontSize: "1.5em",
                            strokeWidth: '10px',
                            transform: left ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    >
                        <path
                            d="M40.4 121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9 53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"/>
                    </svg>
                </span>
            </button>
        </>
    )
}

export default Arrow;