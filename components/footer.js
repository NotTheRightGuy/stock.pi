// Create a footer component and use inline styling to style it.

export default function Footer() {
    return (
        <div
            style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                padding: "20px",
                fontFamily: "Venus",
            }}
        >
            <p>
                © 2023 Stock Sentiment Analysis | {"\n"} Made with love by
                <span
                    style={{
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        window.open("www.github.com/nottherightguy", "_blank");
                    }}
                >
                    {" "}
                    @NotTheRightGuy
                </span>{" "}
            </p>
        </div>
    );
}
