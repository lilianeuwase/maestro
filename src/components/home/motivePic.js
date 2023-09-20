import { CasePicture } from "../casePicture";

export function MotivePic() {
  return (
    <div>
      <CasePicture
        image={require("../../assets/Colorflag.jpeg")}
        description="In a world where the troubles of each day can feel like a lot, Maestro Mind is a symbol of hope. Our website is here to be a safe place for people dealing with the complicated world of mental health. We understand that these challenges are more than fights – they're journeys, and we're here to support you all along the path."
      />
    </div>
  );
}
