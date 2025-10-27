import { FaUser } from "react-icons/fa";

interface ObjectiveSummaryProps {
    objective: string;
}

const ObjectiveSummary = ({ objective }: ObjectiveSummaryProps) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-(--accent) bg-(--bg-secondary) text-(--accent)">
                    <FaUser className="text-xl" />
                </span>
                <h3 className="text-xl font-semibold text-(--text-primary)">Professional Snapshot</h3>
            </div>
            <div className="rounded-3xl border border-(--border) bg-(--bg-secondary) p-8 shadow-inner">
                <p className="text-lg font-semibold text-(--text-primary)">{objective}</p>
            </div>
        </div>
    );
};

export default ObjectiveSummary;
