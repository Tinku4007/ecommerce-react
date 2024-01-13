import Layout from '../components/layout/Layout'

const MainLayout = (WrapperComponent) => {
    const WithAuth = (props) => (
        <Layout>
            <WrapperComponent  {...props} />
        </Layout>
    );  
    return WithAuth;
};

export default MainLayout