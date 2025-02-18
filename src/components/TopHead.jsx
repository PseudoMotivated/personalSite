/**
 * Displays a header, PseudoMotivated.
*/
const TopHead = () => {
    return (
            <div
                className="bg-[var(--main-1)] flex items-center justify-center"
                style={{
                    padding: "clamp(1rem, 5vw, 3rem)", paddingBottom: "0",
                }}>
                <h1 className="font-bold text-[min(8vw,3rem)] text-[var(--main-text)]">
                    Pseudomotivated ☕
                </h1>
            </div>

    );
};

export { TopHead }