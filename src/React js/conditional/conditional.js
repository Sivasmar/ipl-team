




const ConditionalRendering = () => {
  const isLogin = true;
  const isAdmin = false;
  const greeting = true;
  const subscribers = 0;

  return (
    <>
      {isLogin ? (
        <>
          {isAdmin ? (
            <>
              <h2>Welcome Admin</h2>
             
            </>
          ) : (
            <>
              <h2>Welcome user</h2>

            </>
          )}
          {greeting && <h2>Thanks for login, Explore the content</h2>}
          {<h2>Subscribers count {subscribers}</h2>}
        </>
      ) : (
        <>
          <h3>Please login to access the instructions to prepare biryani</h3>
        </>
      )}
    </>
  );
};
export default ConditionalRendering;