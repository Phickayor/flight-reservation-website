import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
	createBrowserRouter,
	Route,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
//pages
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import SelectOutbound from "./pages/SelectOutbound";
import PaymentOption from "./pages/PaymentOption";
import PayStack from "./pages/PayStack";
import BookFlight from "./pages/BookFlight";

//layouts
import NavBar from "./layouts/Navbar";
import Vision from "./pages/help/Vision";
import Contact from "./pages/help/Contact";
import FlightDetails from "./pages/FlightDetails";
import BookedFlights from "./pages/BookedFlights";
import BookFlightForm from "./pages/BookFlightForm";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<NavBar />}>
				<Route index element={<LandingPage />} />
				<Route path="about" element={<About />}>
					<Route path="vision" element={<Vision />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="signUp" element={<SignUp />} />
				<Route path="FlightForm" element={<BookFlightForm />} />
				<Route path="selectOutbound" element={<SelectOutbound />} />
				<Route path="/flight-details/:flightId" element={<FlightDetails />} />
				<Route path="payment" element={<PaymentOption />} />
				<Route path="paystack" element={<PayStack />} />
				<Route path="bookFlight" element={<BookFlight />} />
				<Route path="bookedFlights" element={<BookedFlights />} />
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}
export default App;
