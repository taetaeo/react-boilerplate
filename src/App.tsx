const App = () => {
  const isProduction = process.env.NODE_ENV;
  console.log(isProduction);

  return <div>보일러 플레이트</div>;
};

export default App;
