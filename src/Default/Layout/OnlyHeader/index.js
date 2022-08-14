import Header from "../CommonCpn/Header";

function OnlyHeader({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default OnlyHeader;
