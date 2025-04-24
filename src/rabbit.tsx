interface RabbitProps {
  size?: number;
  colorSchema?: {
    leftFrontLag?: string;
    leftBackLag?: string;
    leftEar?: string;
    body?: string;
    head?: string;
    rightBackLag?: string;
    rightEar?: string;
    rightFrontLag?: string;
    tail?: string;
  };
}

const defaultColorSchema = {
  leftFrontLag: "#DBDEF2",
  leftBackLag: "#DBDEF2",
  leftEar: "#D2DAEE",
  body: "#F4F4F4",
  head: "#DBDEF2",
  rightBackLag: "#DBDEF2",
  rightEar: "#F3E3DE",
  rightFrontLag: "#DBDEF2",
  tail: "#F4F4F4",
};

export default function Rabbit({ size = 1, colorSchema = defaultColorSchema }: RabbitProps) {
  const eye = "after:bg-[#ffffff]";
  const nose = "before:bg-[#F97996]";

  return (
    <div className="relative">
      <div style={{ transform: `scale(${size})` }} className="  absolute left-10 top-24 ">
        <div className="relative">
          <div
            style={{ backgroundColor: colorSchema?.leftFrontLag }}
            className="absolute w-[0.8em] h-[3em] top-[2.3em] left-[0.2em]  rounded-[50%_50%_50%_50%/30%_30%_70%_70%] origin-top rotate-[15deg]"
          >
            <div
              style={{ backgroundColor: colorSchema?.leftFrontLag }}
              className="absolute w-[0.8em] h-[0.5em] top-[2.6em] left-[-0.2em]  rounded-[50%_50%_50%_50%/70%_70%_30%_30%] -rotate-[10deg]"
            ></div>
          </div>

          <div
            style={{ backgroundColor: colorSchema?.leftBackLag }}
            className="absolute w-[2.6em] h-[3.6em] top-[1.7em] left-[1.6em] bg-blue-500 rounded-[50%_50%_50%_50%/50%_50%_50%_50%] origin-top rotate-[10deg]"
          >
            <div
              style={{ backgroundColor: colorSchema?.leftBackLag }}
              className="absolute w-[1.6em] h-[0.8em] top-[3.05em] left-[0.0em] bg-blue-500 rounded-[50%_50%_50%_50%/70%_70%_30%_30%] -rotate-[10deg]"
            ></div>
          </div>

          <div
            style={{ backgroundColor: colorSchema?.tail }}
            className="absolute w-[0.9em] h-[0.9em] top-[3.7em] left-[4.0em] rotate-[25deg] before:content-[''] before:absolute before:w-full before:h-full before:rounded-full before:top-0 before:left-[-50%] before:bg-[inherit] after:content-[''] after:absolute after:w-full after:h-full after:rounded-full after:top-[50%] after:left-0 after:bg-[inherit]"
          ></div>

          <div
            style={{ backgroundColor: colorSchema?.body }}
            className="w-[4.0em] h-[5.6em] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] -rotate-[40deg] shadow-[inset_-2.3em_-2.7em_0_0_#D2DAEE]"
          ></div>

          <div
            style={{ backgroundColor: colorSchema?.rightFrontLag }}
            className="absolute w-[0.9em] h-[3em] top-[2.4em] left-[0.7em]  rounded-[50%_50%_50%_50%/30%_30%_70%_70%] origin-top rotate-[10deg]"
          >
            <div
              style={{ backgroundColor: colorSchema?.rightFrontLag }}
              className="absolute w-[0.8em] h-[0.5em] top-[2.6em] left-[-0.2em]  rounded-[50%_50%_50%_50%/70%_70%_30%_30%] -rotate-[10deg]"
            ></div>
          </div>

          <div
            style={{ backgroundColor: colorSchema?.rightBackLag }}
            className="absolute w-[2.6em] h-[3.6em] top-[1.8em] left-[2.1em]  rounded-[50%_50%_50%_50%/50%_50%_50%_50%] origin-top rotate-[10deg]"
          >
            <div
              style={{ backgroundColor: colorSchema?.rightBackLag }}
              className="absolute w-[1.6em] h-[0.8em] top-[3.05em] left-[0.0em]  rounded-[50%_50%_50%_50%/70%_70%_30%_30%] -rotate-[10deg]"
            ></div>
          </div>

          <div
            style={{ backgroundColor: colorSchema?.leftEar }}
            className={`absolute w-[2em] h-[4.7em] top-[-5.5em] left-[-0.7em]  rounded-[50%_50%_50%_50%/40%_40%_60%_60%] origin-bottom rotate-[10deg] `}
          ></div>

          <div
            style={{ backgroundColor: colorSchema?.head }}
            className={`absolute w-[4em] h-[4.6em] top-[-2.5em] left-[-2.0em] rounded-[50%_50%_50%_50%/65%_60%_40%_35%] -rotate-[120deg] overflow-hidden before:content-[''] before:absolute before:w-[0.65em] before:h-[0.5em] before:top-[-0.1em] before:left-[1.8em] ${nose} before:rounded-[50%_50%_50%_50%/30%_30%_70%_70%] before:rotate-[130deg] after:content-[''] after:absolute after:w-[1em] after:h-[1em] after:top-[1.5em] after:left-[1.6em] ${eye} after:rounded-full after:shadow-[inset_0.1em_0.15em_0_0.37em_#3D261C]`}
          ></div>

          <div
            style={{ backgroundColor: colorSchema?.rightEar }}
            className={`absolute w-[2.2em] h-[4.7em] top-[-5.7em] left-[-0.2em]  rounded-[50%_50%_50%_50%/40%_40%_60%_60%] origin-bottom rotate-[40deg] shadow-[inset_0.3em_-0.4em_0_-0.1em_#C8D6ED] `}
          ></div>
        </div>
      </div>
    </div>
  );
}
