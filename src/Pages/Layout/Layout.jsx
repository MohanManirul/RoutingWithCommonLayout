import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Layout = (props) => {
    return (
        <div className="container">         
           <Header />
            {props.children}
            <Footer/>
    </div>
    );
};

export default Layout;