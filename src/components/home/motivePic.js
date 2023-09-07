import { CasePicture } from "../casePicture";

export function MotivePic() {
  return (
    <div>
      <CasePicture
        image={require("../../assets/Colorflag.jpeg")}
        description="In a world where the weight of daily challenges can often become overwhelming, Maestro Mind stands as
a beacon of hope. Our website is dedicated to providing a safe haven for those navigating the complex
terrain of mental health and substance use concerns. We recognize that these struggles are more than
just battles – they are journeys, and we are here to walk alongside you every step of the way."
      />
    </div>
  );
}
