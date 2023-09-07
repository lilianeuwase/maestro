import { CasePicture } from "../casePicture";

export function SpacePic() {
  return (
    <div>
      <CasePicture
        image={require("../../assets/howareyou.jpeg")}
        description="Depression can cast a heavy cloud over life's brightest moments, making each day feel like an uphill
climb. At Maestro Mind, we believe that even the tiniest spark of hope can ignite a profound
transformation. Through compassionate articles, personal stories of resilience, and practical coping
strategies, we aim to help you find your path to recovery. Remember, you are not alone – we are here to
remind you of your strength and worth."
      />
    </div>
  );
}
