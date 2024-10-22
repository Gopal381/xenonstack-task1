import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col space-y-8 bg-gray-800">
      {/* First Section */}
      <br />
      <br />
      <div className="flex justify-evenly items-center m-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white font-serif">
            "Discover. Invest. Thrive. Your Dream Property Awaits!"
            <span className="block text-3xl mt-2 font-serif text-red-500">
              {/* Changed text to a Link button */}
              <Link
                to="/visits"
                className="inline-block mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              >
                Check Visits
              </Link>
            </span>
          </h2>
        </div>

        <div>
          <img
            className="w-90 h-75 object-cover rounded-lg"
            style={{ height: "400px" }}
            src="https://imgs.search.brave.com/8u72-1tD8qELQBrnaaZOirp-eQWUOXkQgT5fG6JkRS8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5MTU2/NjExMzktNWI2YTRl/NGE2ZmNjP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZpeGxpYj1yYi00/LjAuMyZpeGlkPU0z/d3hNakEzZkRCOE1I/eHpaV0Z5WTJoOE1Y/eDhhRzkxYzJWOFpX/NThNSHg4TUh4OGZE/QT0.jpeg"
            alt="background"
          />
        </div>
      </div>
      <br />
    </div>
  );
}
