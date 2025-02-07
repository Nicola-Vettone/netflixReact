import { Alert } from "react-bootstrap";
function Welcome() {
  return (
    <>
      <h5 className="text-center">Shop Online</h5>
      <Alert className="text-center" variant={"success"}>
        Benvenuti!
      </Alert>
    </>
  );
}
export default Welcome;
