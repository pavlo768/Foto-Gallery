import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { slides } from "./data";
import 'yet-another-react-lightbox/styles.css';
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Pictures from "./Pictures";

function App() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      <Pictures
        data={slides}
        onClick={(currentIndex) => setIndex(currentIndex)}  
      />

      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        index={index}
        open={index >= 0}  
        close={() => setIndex(-1)}  
        slides={slides} 
      />
    </>
  );
}

export default App;
