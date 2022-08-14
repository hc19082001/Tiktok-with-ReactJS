import Header from "../CommonCpn/Header";
import Sidebar from "../CommonCpn/Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="_container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
