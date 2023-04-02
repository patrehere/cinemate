import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(()=> {
    document.title = `Page Not Found / Cinemate`
  })
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center py-4">
          <p className="text-6xl text-slate-700 py-4 dark:text-white">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImage} alt="Page Not Found" />
          </div>
        </div>

        <div className="flex justify-center py-4">
          <Link to="/">
            <Button>Back to Cinemate</Button>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
