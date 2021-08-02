import React, { useState } from "react";
import { Btn, PostCard } from "./pub-card.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCommentDots,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChevronDown,
  faGlobeAmericas,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const PubCard = ({ ...id }) => {
  const like = id.id;
  const [countLike, setCountLike] = useState(like === 0 ? 0 : 1);
  const [countShare, setCountShare] = useState(like === 0 ? 0 : 3);
  const [activeLike, setActiveLike] = useState(true);
  const [activeShare, setActiveShare] = useState(true);

  const handleLikeClick = () => {
    if (activeLike) {
      setActiveLike(false);
      setCountLike(countLike + 1);
    } else {
      setActiveLike(true);
      setCountLike(countLike - 1);
    }
    return;
  };
  const handleShareClick = () => {
    if (activeShare) {
      setActiveShare(false);
      setCountShare(countShare + 1);
    } else {
      setActiveShare(true);
      setCountShare(countShare - 1);
    }
    return;
  };

  return (
    <PostCard>
      <div className="post-data">
        <div className="friend-data">
          <div className="avatar-div">
            <img
              className="img"
              src="/img/avatar-user-comm.png"
              alt="friend-content"
            />
            <div className="text">
              <p>Patrica Santos</p>
              <div className="status">
                {like === 0 ? (
                  <>
                    <small>
                      <FontAwesomeIcon className="icons" icon={faClock} />
                      há cerca de 8 horas
                    </small>
                    <small>
                      <FontAwesomeIcon className="icons" icon={faLock} />{" "}
                      Somente eu
                    </small>
                  </>
                ) : (
                  <>
                    <small>
                      <FontAwesomeIcon className="icons" icon={faClock} />
                      há 8 dias
                    </small>
                    <small>
                      <FontAwesomeIcon
                        className="icons"
                        icon={faGlobeAmericas}
                      />
                      Público
                    </small>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="arrow">
            <FontAwesomeIcon className="arrow-icon" icon={faChevronDown} />
          </div>
        </div>
        <div className="post-status">
          <small>
            {like === 0
              ? "Esta publicação esta configurada no modo provado 'Somente eu'"
              : "kikikikkkikik"}
          </small>
        </div>
        {/* ///////////////////////// STATUS DE INTERAÇÃO //////////////////////// */}
        <div className="interaction-status">
          <div className="like-row">
            <small>
              <FontAwesomeIcon className="ico" icon={faThumbsUp} />
              {countLike === 0
                ? "Seja o Primeiro a curtir"
                : `${countLike} curtiram isso`}
            </small>
          </div>
          <div className="share-row">
            <small>0 Comentários</small>
            <small>
              {!countShare
                ? `0 Compartilhamentos`
                : `${countShare} Compartilhamentos`}
            </small>
          </div>
        </div>
      </div>
      <div className="post-buttons">
        <Btn active={activeLike} onClick={() => handleLikeClick()}>
          <FontAwesomeIcon className="ico" icon={faThumbsUp} />
          Like
        </Btn>
        <Btn active={true}>
          <FontAwesomeIcon className="ico" icon={faCommentDots} />
          Comentários
        </Btn>
        <Btn active={activeShare} onClick={() => handleShareClick()}>
          <FontAwesomeIcon className="ico" icon={faShareSquare} />
          Compartilhar
        </Btn>
      </div>
    </PostCard>
  );
};

export default PubCard;

{
  /*           

 */
}
