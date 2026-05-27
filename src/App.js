import './App.css';

/**
 * Root React component that renders the application's static UI.
 *
 * Returns a static JSX tree containing the app container and header:
 * - app logo image
 * - a heading paragraph with a heart icon
 * - a small paragraph prompting to edit `src/App.js`
 * - an inline span with the text "hello, whats yoru name? hhh"
 * - a link to the React documentation
 *
 * @returns {JSX.Element} The rendered app UI.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>hello, whats yoru name? hhh
    </span>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
