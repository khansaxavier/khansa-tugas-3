import Header from "../componen/Header";
import Layout from "../componen/Layout";
import Navbar from "../componen/Navbar";
import Utama from "../componen/Utama";

function Home() {
    return ( 
        <>
            <Layout>
                <Navbar/>
                <Header/>
                <Utama/>
            </Layout>
    
        </>
     );
}

export default Home;