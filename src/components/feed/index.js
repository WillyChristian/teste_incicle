import React from "react";
import { FeedContainer, Publication } from "./index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PubCard from "./pub-component/PubCard";
import {
  faFileSignature,
  faImages,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Feed = () => {
  return (
    <FeedContainer>
      {/* Escreva uma publicação */}
      <Publication>
        <div className="write-pub">
          <div className="text">
            <FontAwesomeIcon className="ico" icon={faFileSignature} />
            Escreva uma Publicação...
          </div>
          <div className="icons">
            <FontAwesomeIcon className="ico" icon={faImages} />
            <FontAwesomeIcon className="ico" icon={faVideo} />
          </div>
        </div>
        <div className="post-pub">
          <p>ou <a className="link" href="#">publique um artigo</a> na InCicle</p>
        </div>
      </Publication>

      {/* Publicação 1 */}
      <div className="container-content">
        <PubCard id={0} />
      </div>

      {/* Publicação 2 */}
      <div className="container-content">
        <PubCard id={1} />
      </div>
    </FeedContainer>
  );
};

export default Feed;
