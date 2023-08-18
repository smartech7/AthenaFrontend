import { FaGraduationCap } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

interface IAboutProps {}

const About: React.FC<IAboutProps> = ({}) => {
  const { user } = useAuthContext();
  
  return (
    <div>
      <h3 className="text-black font-poppins text-[24px] font-semibold">
        Personal Information
      </h3>
      <p className="text-[#7D7D7D] font-medium text-base font-poppins mt-[14px]">
        Hi I'm Sophia from UK, i love blogging, fashion, travel. I like to learn
        and share blogging with you.
      </p>

      <div className="bg-white rounded-[9px] flex gap-5 px-[13px]">
        <FaGraduationCap />
        <div>
          <h6 className="text-base font-medium text-black font-poppins">
            Work Experiences
          </h6>
          {user && user.experience ? (
            <></>
          ) : (
            <p className="">Sophia has no experiences</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
