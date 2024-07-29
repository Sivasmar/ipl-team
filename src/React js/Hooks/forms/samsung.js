import { useRef, useState } from "react";

const Samsung = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const modelRef = useRef();
  const imeiRef = useRef();
  const issuesRef = useRef();

  const [error, setError] = useState(null);

  const [displayui, setDisplayUi] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const userEnteredEmail = emailRef.current.value;
    const userEnteredName = nameRef.current.value;
    const userEnteredPhone = phoneRef.current.value;
    const userEnteredModel = modelRef.current.value;
    const userEnteredImei = imeiRef.current.value;
    const userEnteredIssue = issuesRef.current.value;

    if (
      /samsung/gi.test(userEnteredModel) &&
      userEnteredEmail.length > 0 &&
      userEnteredName.length > 0 &&
      userEnteredPhone.length > 0 &&
      userEnteredImei.length > 0 &&
      userEnteredIssue.length > 0
    ) {
      emailRef.current.value = "";
      nameRef.current.value = "";
      phoneRef.current.value = "";
      modelRef.current.value = "";
      imeiRef.current.value = "";
      issuesRef.current.value = "";

      setError(null);

      setDisplayUi(false)
    } else {
      emailRef.current.value = "";
      nameRef.current.value = "";
      phoneRef.current.value = "";
      modelRef.current.value = "";
      imeiRef.current.value = "";
      issuesRef.current.value = "";

      setError("something went wrong!!!!!");
    }
  };

  const goBackHandler = () => {
    setDisplayUi(true);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Samsung features</h1>
      {displayui ? (
        <form style={{ maxWidth: 500 }} onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              ref={nameRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail3" className="form-label">
              Phone number
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              ref={phoneRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail4" className="form-label">
              Model
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail4"
              aria-describedby="emailHelp"
              ref={modelRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail5" className="form-label">
              IMEI
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputEmail5"
              aria-describedby="emailHelp"
              ref={imeiRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail6" className="form-label">
              Comment Issue
            </label>
            <textarea
              className="form-control"
              id="exampleInputEmail6"
              aria-describedby="emailHelp"
              ref={issuesRef}
              rows={6}
              cols={30}
            />
          </div>
          {error && <div>{error}</div>}
          <button type="submit" className="btn btn-primary" on>
            Submit
          </button>
        </form>
      ) : (
        <>
          <h1>Your Application is Successfully Submitted</h1>
          <button
            onClick={goBackHandler}
            style={{ backgroundColor: "whitesmoke" }}
          >
            Submit Another Application
          </button>
        </>
      )}
    </>
  );
};
export default Samsung;