import { Provider } from "react-redux";
import { store } from "./Store";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { HomePage } from "./Views/HomePage/HomePage";
import { CatalogPage } from "./Views/CatalogPage/CatalogPage";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog/:type" element={<CatalogPage />} />
        </Routes>
      </Layout>
    </Provider>
  );
}

export default App;
