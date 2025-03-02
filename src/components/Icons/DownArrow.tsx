type IconProps = {
    size?: number;
    color?: string;
};

export const DownArrow = ({ size = 24, color = '#000000' }: IconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.16671 13.0023L10 7.16899L15.8334 13.0023"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
