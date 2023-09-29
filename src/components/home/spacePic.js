import { CasePicture } from "./casePicture";

export function SpacePic() {
  return (
    <div>
      <CasePicture
        image={require("../../assets/howareyou.jpeg")}
        description="Depression is a feeling of deep sadness, hopelessness, and a lack of interest or pleasure in activities that lasts for a long time and affects a person's thoughts, feelings, and daily life. Depression can make even the happiest times seem hard, like a tough climb every day. At Maestro Mind, we think that even a small bit of hope can start a big change. The World Health Organization (WHO) estimates that around 322 million people worldwide are affected by depression. 
We want to help you find your way to feeling better with caring articles, stories of people who got stronger, and useful ways to cope for free. You're not by yourself – we're here to help you see how strong and important you are.
"
      />
    </div>
  );
}
