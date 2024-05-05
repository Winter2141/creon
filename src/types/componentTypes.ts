export interface LinkProps {
    href: string;
    text: string;
    badge?: string;
}

export interface CustomButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

export interface VideoBannerProps {
    videoSrc: string;
    className?: string;
}

export interface AccordionBoxProps {
    title: string;
    content: string;
    logoSrc: string;
    isOpenInitially?: boolean;
}

export interface CardProps {
    title: string;
    subTitle?: string;
    description?: string;
    imgSrc?: string;
}