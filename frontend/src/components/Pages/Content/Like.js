import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { useAPI } from '../../../hooks';
import { BACKEND } from '../../../config';

const Like = ({ totalLikes = -100, likeState = -100, evtId }) => {
  const { token } = useSelector(state => state.user);
  const [likeConn, likeConnection] = useAPI('json');
  const [nowLikeState, setNowLikeState] = useState(likeState);
  const [nowTotalLikes, setNowTotalLikes] = useState(totalLikes);

  const handleLikeState = (newLikeState) => {
    if(newLikeState === nowLikeState) {
      setNowTotalLikes(totalLikes - likeState);
      setNowLikeState(0);
      const body = { likeState: 0, evtId: evtId };
      likeConnection(
        BACKEND + `/event/like`,
        "POST",
        JSON.stringify(body),
        { 'authorization': token, 'content-type': "application/json" }
      )
    }
    else {
      setNowTotalLikes(totalLikes - likeState + newLikeState);
      setNowLikeState(newLikeState);
      const body = { likeState: newLikeState, evtId: evtId };
      likeConnection(
        BACKEND + `/event/like`,
        "POST",
        JSON.stringify(body),
        { 'authorization': token, 'content-type': "application/json" }
      )
    }
  }

  useEffect(() => {
    console.log(likeConn);
  }, [likeConn])

  return <>
    <Icon name='thumbs up outline' size='tiny' style={{padding: "10px", borderBottom: "10px"}} />{nowTotalLikes}
    <div className='ui two buttons'>
      <Button basic={nowLikeState !== 1} inverted={nowLikeState === 1} active={true} color='green' onClick={() => handleLikeState(1)}>
        Approve
      </Button>
      <Button basic={nowLikeState !== -1} inverted={nowLikeState === -1} active={true} color='red'  onClick={() => handleLikeState(-1)}>
        Decline
      </Button>
    </div>
  </>
}

export default Like;