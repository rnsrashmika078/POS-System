interface HRProps {
    className?: string;
}
const HR: React.FC<HRProps> = ({ className }) => {
    return <div className={`border border-[var(--underline)]  shadow-md ${className}`}> </div>;
};

export default HR;
