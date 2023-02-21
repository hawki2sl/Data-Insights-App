import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <h1>Welcome!</h1>
        <p>We are here to help you learn more about yourself.</p>
        <p>
          Check out the <Link to="/dataInsights">data insights page!</Link>
        </p>
      </main>
    </>
  )
}

export default HomePage;