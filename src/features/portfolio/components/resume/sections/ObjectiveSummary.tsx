import { FaUser } from "react-icons/fa";

interface ObjectiveSummaryProps {
    objective: string;
}

const ObjectiveSummary = ({ objective }: ObjectiveSummaryProps) => {
    return (
        <section className="space-y-4">
            <header className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--accent-muted) text-(--accent)">
                    <FaUser className="text-base" />
                </span>
                <h3 className="text-lg font-semibold uppercase tracking-[0.2em] text-(--text-secondary)">
                    Professional Summary
                </h3>
            </header>
            <p className="border-l-2 border-(--accent) pl-6 text-base leading-relaxed text-(--text-primary)">{objective}</p>
        </section>
    );
};

export default ObjectiveSummary;
