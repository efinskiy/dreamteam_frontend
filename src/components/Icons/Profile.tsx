type IconlyIconProps = {
    size?: number;
    color?: string;
};

export const IconlyProfile = ({
    size = 24,
    color = '#000000',
}: IconlyIconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g
                stroke="none"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <g
                    id="Profile"
                    transform="translate(4.814286, 2.814476)"
                    stroke={color}
                >
                    <path
                        d="M7.17047619,12.531714 C3.30285714,12.531714 -4.08562073e-14,13.1164759 -4.08562073e-14,15.4583807 C-4.08562073e-14,17.8002854 3.28190476,18.4059997 7.17047619,18.4059997 C11.0380952,18.4059997 14.34,17.8202854 14.34,15.479333 C14.34,13.1383807 11.0590476,12.531714 7.17047619,12.531714 Z"
                        id="Stroke-1"
                        strokeWidth="1.5"
                    ></path>
                    <path
                        d="M7.17047634,9.19142857 C9.70857158,9.19142857 11.7657144,7.13333333 11.7657144,4.5952381 C11.7657144,2.05714286 9.70857158,-5.32907052e-15 7.17047634,-5.32907052e-15 C4.6323811,-5.32907052e-15 2.574259,2.05714286 2.574259,4.5952381 C2.56571443,7.1247619 4.60952396,9.18285714 7.13809539,9.19142857 L7.17047634,9.19142857 Z"
                        id="Stroke-3"
                        strokeWidth="1.5"
                    ></path>
                </g>
            </g>
        </svg>
    );
};
