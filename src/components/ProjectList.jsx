import { v4 as uuidv4 } from 'uuid';
import GlassdoorP from '../glassdoorProject1.png';
import upGradP from '../upGradProject.png';
import HaynnisP from '../hyannisProject.png';

// import CoinTrackerImg from '../images/cointracker.jpg';
// import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'upGrad - clone',
    desc:
      "UpGrad is a India's largest online higher education company. The main consumer base of this website are working professionals and students.",
   
    img: upGradP,
    href: "https://github.com/Gaurav6291/UpGrad",
    href1: "#",
    tech: "Html, Css, JavaScript",
  },
  {
    id: uuidv4(),
    name: 'Glassdoor - clone',
    desc:
      'This is the clone of the website Glassdoor, which provides a platform for companies to post the requirements of their jobs as well as to users for applying for the job.',
      img: GlassdoorP,
    href: "https://github.com/chandan1499/Project-glassdoor",
    href1: "#",
    tech: "Html, Css, JavaScript, React, Styled-components",
  },
  {
    id: uuidv4(),
    name: 'Haynnis Plaza Hotel - clone',
    desc:
      "hyannisplazahotel.com is the official website of the Hyannis Plaza hotel. Our task was to clone this website with all it's major functionalities.",
    img: HaynnisP,
    href: "https://github.com/vshubhams/Hyannis-Plaza",
    href1: "https://hyannisplaza.netlify.app/",
    tech: "Html, Css, JavaScript, React, Redux, Material-ui, Styled-components",
  },
//   {
//     id: uuidv4(),
//     name: "Movie Search Engine",
//     desc:
//       'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
//     img: CavinImg,
//   },
//   {
//     id: uuidv4(),
//     name: 'Tracking Soft',
//     desc:
//       'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
//     img: ProjectImg,
//   },
];

export default projects;