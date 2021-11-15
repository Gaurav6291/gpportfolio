import { v4 as uuidv4 } from 'uuid';
import GlassdoorP from '../glassdoorProject1.png';
import upGradP from '../upGradProject.png';
import HaynnisP from '../hyannisProject.png';
import RedditP from '../RedditP.png'


const projects = [
  {
    id: uuidv4(),
    name: 'upGrad - clone',
    desc:
      "UpGrad is a India's largest online higher education company. The main consumer base of this website are working professionals and students.",
   
    img: upGradP,
    href: "https://github.com/Gaurav6291/UpGrad",
    href1: "https://upgrad-ravishukla86044.vercel.app/",
    tech: "Html, Css, JavaScript",
  },
  {
    id: uuidv4(),
    name: 'Reddit - clone',
    desc:
      "Reddit is an American social media platform. It is the home to thousands of communities, endless conversation, and authentic human connection.",
   
    img: RedditP,
    href: "https://github.com/ravishukla86044/reddit",
    href1: "https://reddit-new.netlify.app/",
    tech: "React, Redux, JavaScript, Express, MongoDB, NodeJS, M-UI, Html, Css",
  },
  {
    id: uuidv4(),
    name: 'Glassdoor - clone',
    desc:
      'This is the clone of the website Glassdoor, which provides a platform for companies to post the requirements of their jobs as well as to users for applying for the job.',
      img: GlassdoorP,
    href: "https://github.com/chandan1499/Project-glassdoor",
    href1: "https://glassdoor-clone.netlify.app/",
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

];

export default projects;