import Photo from "@/components/Photo/Photo";
import Socials from "@/components/Socials/Socials";
import Stats from "@/components/Stats/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text content */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />
              <span className="text-accent">Jakkapat Chongsuwat</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I love coding and I am proficient in various programming languages
              and technologies.
            </p>
            {/* Button & socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant={"outline"}
                size={"lg"}
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles="w-9 h-9 flex justify-center items-center 
                  border border-accent rounded-full text-accent hover:bg-accent hover:text-primary
                  text-base hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Placeholder for photo section */}
          <div className="order-1 xl:order-none mb-8 xl:mb:0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
