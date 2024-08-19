import { Carousel } from "@material-tailwind/react";
import cert1 from "/home/mery1412/webProjects/portfolio/src/images/certs/AIT CHABANE Meriem_GDSC-1.png"
import cert2 from "/home/mery1412/webProjects/portfolio/src/images/certs/certificate-of-completion-for-getting-started-with-spring-boot-1.png"
import cert3 from "/home/mery1412/webProjects/portfolio/src/images/certs/Python_Essentials_1_Badge20230926-28-2i2kzs-1.png"
 
const Caroussel = () => {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src={cert1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={cert2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={cert3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default Caroussel