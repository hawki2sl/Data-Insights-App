import { Link } from "react-router-dom";
import PageContent from "../Components/PageContent";

const HomePage = () => {
  return (
    <>
      <PageContent>
      <h1>Welcome!</h1>
        <p>We are here to help you learn more about yourself.</p>
        <p>
          Check out the <Link to="/dataInsights">data insights page!</Link>
        </p>
      </PageContent>
    </>
  )
}

export default HomePage;