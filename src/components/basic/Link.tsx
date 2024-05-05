import { LinkProps } from "@/types/componentTypes";

const Link: React.FC<LinkProps> = ({ href, text, badge }) => {
    return (
        <a href={href} className={`text-lg font-medium text-white hover:text-blue-500 relative ${!!badge ? 'pr-10' : ''}`}>
            <span className={!!badge ? 'pr-2' : ''}>{text}</span>
            {!!badge && <span className="bg-black leading-none absolute text-purple-500 font-bold text-xs rounded-full px-2 py-1">{badge}</span>}
        </a>
    );
};

export default Link;