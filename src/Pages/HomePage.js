import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <h1>Home</h1>
        <p>
          Check out the <Link to="/dataInsights">data insights page!</Link>
        </p>
      </main>
    </>
  )
}

export default HomePage;