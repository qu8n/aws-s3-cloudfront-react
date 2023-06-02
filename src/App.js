import logo from './logo.svg';
import './App.css';

// Setup resource: https://dev.to/karanpratapsingh/deploy-react-app-to-s3-cloudfront-1cao
// S3 endpoint URL: http://aws-s3-cloudfront-react.s3-website.us-east-2.amazonaws.com/
// CloudFront distribution URL: https://ddfpslir92hjk.cloudfront.net/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world! 😸
        </p>
      </header>
    </div>
  );
}

export default App;
