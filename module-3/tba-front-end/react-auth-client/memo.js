function memo() {
  /**
   * 0. This Repo uses Vite.
   *    Remember to mask the server's domain name to avoid CORS problems
   *    Remember to run the server and the client both on different screens
   * 
   * 1. Create Auth Context (Context API) context/auth.context.jsx
   *    This context uses state variables such as isLoggedIn, isLoading
   * 
   * 2. Wrapp the APP with the Context on main.jsx
   * Consume the Context with the Hook:
   *  See Navbar.jsx
   *  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 
   * 
   * 3. On the login page we store the token.
   *    We need a function to store the token on Auth Context
   *    We call the function authenticateUser() to update state variables
   * 
   * 4. On the auth context create a function to verify the token. See authenticateUser()
   * 
   * 5. Create a function to remove the token.
   *    This function will be used by the Logout button
   * 
   * 6. Consume logout method on the Navbar component
   * 
   * 7. Create a component to only allow private pages to be accessible
   *    See: components/isPrivate.jsx
   * 
   * 8. Create a component to only allow pages when the user is NOT logged in (Eg: login.jsx or signup.jsx)
   *    See components/isAnon.jsx
   * 
   * 9. Wrap anon and private pages on App.jsx
   *    <Route exact path="/projects" element={<IsPrivate><ProjectListPage /></IsPrivate>} />
   * 
   * 10. Finally set request header accordingly
   *     See pages/ProjectListPage.jsx
   * 
   * 11. Happy coding :)
   * 
   */
}

