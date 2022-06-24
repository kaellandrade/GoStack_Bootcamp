import {
	Route,
	Routes
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Configurando as rotas.
 * @returns {JSX.Element}
 * @constructor
 */
const Rotas = () => (
	<Routes>
		<Route path='/' exact element={
			<ProtectedRoute isPrivate={false}>
				<SignIn/>
			</ProtectedRoute>
		}/>
		<Route path='/register' element={
			<ProtectedRoute isPrivate={false}>
				<SignUp/>
			</ProtectedRoute>}
		/>

		<Route path="/dashboard" element={
			<ProtectedRoute isPrivate={true}>
				<Dashboard/>
			</ProtectedRoute>}
		/>

		<Route path="/profile" element={
			<ProtectedRoute isPrivate={true}>
				<Profile/>
			</ProtectedRoute>}
		/>

		<Route path="*" element={
			<ProtectedRoute isPrivate={false}>
				<NotFound/>
			</ProtectedRoute>
		}/>

	</Routes>

);

export default Rotas;
